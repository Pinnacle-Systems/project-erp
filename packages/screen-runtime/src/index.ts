export type ScreenType =
  | "master_list"
  | "master_form"
  | "transaction"
  | "report"
  | "approval"
  | "dashboard"
  | "mobile_task";

export type ScreenShell = "desktop" | "mobile" | "tablet";

export type ScreenMode = "create" | "edit" | "view" | "approval";

export type ScreenFieldOverrideKey =
  | "label"
  | "visible"
  | "required"
  | "readonly"
  | "defaultValue"
  | "order"
  | "helpText";

export type ScreenFieldDefinition = {
  id: string;
  label: string;
  fieldType: string;
  modes?: readonly ScreenMode[];
  visible?: boolean;
  required?: boolean;
  readonly?: boolean;
  defaultValue?: unknown;
  order?: number;
  helpText?: string;
  businessInvariant?: boolean;
  allowClientOverrides?: readonly ScreenFieldOverrideKey[];
};

export type ScreenSectionDefinition = {
  id: string;
  title: string;
  fields: readonly ScreenFieldDefinition[];
  visible?: boolean;
  order?: number;
};

export type ScreenActionDefinition = {
  id: string;
  label: string;
  placement: "primary" | "secondary" | "overflow" | "footer" | "contextual";
  shells?: readonly ScreenShell[];
  mode?: readonly ScreenMode[];
  capability?: string;
  hidden?: boolean;
  order?: number;
};

export type ScreenCapabilityBinding = {
  actionId: string;
  capability: string;
};

export type ScreenValidationBinding = {
  targetId: string;
  validationKey: string;
  scope: "screen" | "section" | "field" | "action";
};

export type ScreenSlotDefinition = {
  id: string;
  slotType: "header" | "content" | "lines" | "totals" | "actions" | "footer" | "custom";
  required?: boolean;
};

export type ScreenDefinition = {
  id: string;
  type: ScreenType;
  title: string;
  shells: readonly ScreenShell[];
  sections: readonly ScreenSectionDefinition[];
  actions?: readonly ScreenActionDefinition[];
  capabilityBindings?: readonly ScreenCapabilityBinding[];
  validationBindings?: readonly ScreenValidationBinding[];
  slots?: readonly ScreenSlotDefinition[];
};

export type ScreenFieldClientConfig = Partial<
  Pick<
    ScreenFieldDefinition,
    "label" | "visible" | "required" | "readonly" | "defaultValue" | "order" | "helpText"
  >
>;

export type ScreenSectionClientConfig = Partial<
  Pick<ScreenSectionDefinition, "title" | "visible" | "order">
> & {
  fields?: Record<string, ScreenFieldClientConfig>;
};

export type ScreenActionClientConfig = Partial<
  Pick<ScreenActionDefinition, "label" | "hidden" | "order" | "placement">
>;

export type ScreenClientConfig = {
  title?: string;
  sections?: Record<string, ScreenSectionClientConfig>;
  actions?: Record<string, ScreenActionClientConfig>;
};

export type ScreenRuntimeWarning = {
  code: string;
  message: string;
  path?: string;
};

export type ScreenRuntimeValidationResult = {
  valid: boolean;
  errors: readonly ScreenRuntimeWarning[];
  warnings: readonly ScreenRuntimeWarning[];
};

export type ResolvedScreenDefinition = ScreenDefinition & {
  warnings: readonly ScreenRuntimeWarning[];
};

const defaultAllowedFieldOverrides: readonly ScreenFieldOverrideKey[] = [
  "label",
  "visible",
  "readonly",
  "defaultValue",
  "order",
  "helpText",
];

const warning = (
  code: string,
  message: string,
  path?: string,
): ScreenRuntimeWarning => ({
  code,
  message,
  path,
});

const isAllowedFieldOverride = (
  field: ScreenFieldDefinition,
  key: ScreenFieldOverrideKey,
): boolean => {
  const allowedKeys = field.allowClientOverrides ?? defaultAllowedFieldOverrides;

  if (field.businessInvariant && !allowedKeys.includes(key)) {
    return false;
  }

  return allowedKeys.includes(key);
};

export const validateScreenDefinition = (
  definition: ScreenDefinition,
): ScreenRuntimeValidationResult => {
  const errors: ScreenRuntimeWarning[] = [];
  const warnings: ScreenRuntimeWarning[] = [];

  if (!definition.id) {
    errors.push(warning("screen.id.required", "Screen id is required.", "id"));
  }

  if (!definition.title) {
    errors.push(
      warning("screen.title.required", "Screen title is required.", "title"),
    );
  }

  if (definition.shells.length === 0) {
    errors.push(
      warning("screen.shells.required", "At least one shell is required.", "shells"),
    );
  }

  const sectionIds = new Set<string>();
  const fieldIds = new Set<string>();

  for (const section of definition.sections) {
    if (sectionIds.has(section.id)) {
      errors.push(
        warning(
          "section.id.duplicate",
          `Duplicate section id "${section.id}".`,
          `sections.${section.id}`,
        ),
      );
    }

    sectionIds.add(section.id);

    if (section.fields.length === 0) {
      warnings.push(
        warning(
          "section.fields.empty",
          `Section "${section.id}" has no fields.`,
          `sections.${section.id}.fields`,
        ),
      );
    }

    for (const field of section.fields) {
      if (fieldIds.has(field.id)) {
        errors.push(
          warning(
            "field.id.duplicate",
            `Duplicate field id "${field.id}".`,
            `sections.${section.id}.fields.${field.id}`,
          ),
        );
      }

      fieldIds.add(field.id);

      if (!field.fieldType) {
        errors.push(
          warning(
            "field.type.required",
            `Field "${field.id}" requires a fieldType.`,
            `sections.${section.id}.fields.${field.id}.fieldType`,
          ),
        );
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
};

const mergeField = (
  sectionId: string,
  field: ScreenFieldDefinition,
  config: ScreenFieldClientConfig | undefined,
  warnings: ScreenRuntimeWarning[],
): ScreenFieldDefinition => {
  if (!config) {
    return field;
  }

  return (Object.entries(config) as [ScreenFieldOverrideKey, unknown][]).reduce(
    (nextField, [key, value]) => {
      if (!isAllowedFieldOverride(field, key)) {
        warnings.push(
          warning(
            "field.override.forbidden",
            `Client config cannot override "${key}" for field "${field.id}".`,
            `sections.${sectionId}.fields.${field.id}.${key}`,
          ),
        );
        return nextField;
      }

      return {
        ...nextField,
        [key]: value,
      };
    },
    field,
  );
};

export const resolveScreenDefinition = (
  baseDefinition: ScreenDefinition,
  clientConfig: ScreenClientConfig = {},
): ResolvedScreenDefinition => {
  const validation = validateScreenDefinition(baseDefinition);

  if (!validation.valid) {
    throw new Error(
      `Invalid screen definition "${baseDefinition.id}": ${validation.errors
        .map((error) => error.message)
        .join("; ")}`,
    );
  }

  const warnings = [...validation.warnings];

  const sections = baseDefinition.sections.map((section) => {
    const sectionConfig = clientConfig.sections?.[section.id];

    if (!sectionConfig) {
      return section;
    }

    return {
      ...section,
      title: sectionConfig.title ?? section.title,
      visible: sectionConfig.visible ?? section.visible,
      order: sectionConfig.order ?? section.order,
      fields: section.fields.map((field) =>
        mergeField(section.id, field, sectionConfig.fields?.[field.id], warnings),
      ),
    };
  });

  const actions = baseDefinition.actions?.map((action) => {
    const actionConfig = clientConfig.actions?.[action.id];

    if (!actionConfig) {
      return action;
    }

    return {
      ...action,
      ...actionConfig,
    };
  });

  return {
    ...baseDefinition,
    title: clientConfig.title ?? baseDefinition.title,
    sections,
    actions,
    warnings,
  };
};

export const getActionsForShell = (
  definition: ScreenDefinition,
  shell: ScreenShell,
): ScreenActionDefinition[] =>
  [...(definition.actions ?? [])]
    .filter((action) => !action.hidden)
    .filter((action) => !action.shells || action.shells.includes(shell))
    .sort((left, right) => (left.order ?? 0) - (right.order ?? 0));

export const getFieldsForMode = (
  definition: ScreenDefinition,
  mode: ScreenMode,
): ScreenFieldDefinition[] =>
  definition.sections
    .filter((section) => section.visible !== false)
    .sort((left, right) => (left.order ?? 0) - (right.order ?? 0))
    .flatMap((section) =>
      section.fields
        .filter((field) => field.visible !== false)
        .filter((field) => !field.modes || field.modes.includes(mode))
        .sort((left, right) => (left.order ?? 0) - (right.order ?? 0)),
    );
