export type ConfigPrimitive = string | number | boolean | null;

export type ConfigValue =
  | ConfigPrimitive
  | readonly ConfigValue[]
  | { readonly [key: string]: ConfigValue };

export type ConfigObject = Record<string, ConfigValue>;

export type ConfigSource<TConfig extends ConfigObject = ConfigObject> = {
  id: string;
  kind: "platform" | "client" | "environment" | "runtime";
  config: TConfig;
};

export type ConfigPatch<TConfig extends ConfigObject = ConfigObject> = {
  sourceId?: string;
  values: Partial<TConfig>;
};

export type ConfigIssueSeverity = "warning" | "error";

export type ConfigValidationIssue = {
  code: string;
  message: string;
  path?: string;
  severity: ConfigIssueSeverity;
};

export type ConfigValueType =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "null";

export type OverridePermission = {
  path: string;
  allowed: boolean;
  invariant?: boolean;
  expectedType?: ConfigValueType;
  reason?: string;
};

export type ConfigurableProperty = {
  path: string;
  required?: boolean;
  defaultValue?: ConfigValue;
  expectedType?: ConfigValueType;
  invariant?: boolean;
};

export type ConfigMergeResult<TConfig extends ConfigObject = ConfigObject> = {
  config: TConfig;
  issues: readonly ConfigValidationIssue[];
  appliedPaths: readonly string[];
  rejectedPaths: readonly string[];
};

const issue = (
  code: string,
  message: string,
  severity: ConfigIssueSeverity,
  path?: string,
): ConfigValidationIssue => ({
  code,
  message,
  severity,
  path,
});

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const getValueType = (value: unknown): ConfigValueType =>
  Array.isArray(value)
    ? "array"
    : value === null
      ? "null"
      : typeof value === "object"
        ? "object"
        : (typeof value as ConfigValueType);

const getPermission = (
  permissions: readonly OverridePermission[],
  path: string,
): OverridePermission | undefined =>
  permissions.find((permission) => permission.path === path);

const joinPath = (parentPath: string, key: string): string =>
  parentPath ? `${parentPath}.${key}` : key;

const setAtPath = (
  target: Record<string, unknown>,
  path: string,
  value: unknown,
): void => {
  const segments = path.split(".");
  let cursor = target;

  for (const segment of segments.slice(0, -1)) {
    const next = cursor[segment];

    if (!isPlainObject(next)) {
      cursor[segment] = {};
    }

    cursor = cursor[segment] as Record<string, unknown>;
  }

  const leaf = segments[segments.length - 1];

  if (leaf) {
    cursor[leaf] = value;
  }
};

const getAtPath = (target: Record<string, unknown>, path: string): unknown => {
  let cursor: unknown = target;

  for (const segment of path.split(".")) {
    if (!isPlainObject(cursor)) {
      return undefined;
    }

    cursor = cursor[segment];
  }

  return cursor;
};

const cloneConfig = <TConfig extends ConfigObject>(config: TConfig): TConfig =>
  structuredClone(config) as TConfig;

const collectLeafEntries = (
  value: Record<string, unknown>,
  parentPath = "",
): Array<{ path: string; value: unknown }> =>
  Object.entries(value).flatMap(([key, entryValue]) => {
    const path = joinPath(parentPath, key);

    if (isPlainObject(entryValue)) {
      return collectLeafEntries(entryValue, path);
    }

    return [{ path, value: entryValue }];
  });

export const validateConfigPatch = (
  patch: ConfigPatch,
  schemaOrPermissions: readonly OverridePermission[] | readonly ConfigurableProperty[],
): readonly ConfigValidationIssue[] => {
  const permissions = schemaOrPermissions as readonly OverridePermission[];

  if (!isPlainObject(patch.values)) {
    return [
      issue(
        "config.patch.invalid",
        "Client patch values must be an object.",
        "warning",
      ),
    ];
  }

  return collectLeafEntries(patch.values).flatMap(({ path, value }) => {
    const permission = getPermission(permissions, path);

    if (!permission) {
      return [
        issue(
          "config.override.notPermitted",
          `Client config is not permitted to override "${path}".`,
          "warning",
          path,
        ),
      ];
    }

    if (!permission.allowed || permission.invariant) {
      return [
        issue(
          "config.override.forbidden",
          permission.reason ?? `Client config cannot override "${path}".`,
          "warning",
          path,
        ),
      ];
    }

    if (permission.expectedType && getValueType(value) !== permission.expectedType) {
      return [
        issue(
          "config.override.invalidType",
          `Client config value for "${path}" must be ${permission.expectedType}.`,
          "warning",
          path,
        ),
      ];
    }

    return [];
  });
};

export const mergeConfig = <TConfig extends ConfigObject>(
  base: TConfig,
  patch: ConfigPatch,
  overridePermissions: readonly OverridePermission[],
): ConfigMergeResult<TConfig> => {
  if (!isPlainObject(base)) {
    throw new Error("Invalid base config: platform definitions must be objects.");
  }

  const resolved = cloneConfig(base);
  const issues: ConfigValidationIssue[] = [];
  const appliedPaths: string[] = [];
  const rejectedPaths: string[] = [];

  for (const { path, value } of collectLeafEntries(patch.values)) {
    const permission = getPermission(overridePermissions, path);

    if (!permission) {
      issues.push(
        issue(
          "config.override.notPermitted",
          `Client config is not permitted to override "${path}".`,
          "warning",
          path,
        ),
      );
      rejectedPaths.push(path);
      continue;
    }

    if (!permission.allowed || permission.invariant) {
      issues.push(
        issue(
          "config.override.forbidden",
          permission.reason ?? `Client config cannot override "${path}".`,
          "warning",
          path,
        ),
      );
      rejectedPaths.push(path);
      continue;
    }

    if (permission.expectedType && getValueType(value) !== permission.expectedType) {
      issues.push(
        issue(
          "config.override.invalidType",
          `Client config value for "${path}" must be ${permission.expectedType}.`,
          "warning",
          path,
        ),
      );
      rejectedPaths.push(path);
      continue;
    }

    setAtPath(resolved, path, value);
    appliedPaths.push(path);
  }

  return {
    config: resolved,
    issues,
    appliedPaths,
    rejectedPaths,
  };
};

export const collectConfigWarnings = (
  resultOrIssues: ConfigMergeResult | readonly ConfigValidationIssue[],
): readonly ConfigValidationIssue[] => {
  const issues: readonly ConfigValidationIssue[] =
    "config" in resultOrIssues ? resultOrIssues.issues : resultOrIssues;

  return issues.filter((entry: ConfigValidationIssue) => entry.severity === "warning");
};

export const applySafeDefaults = <TConfig extends ConfigObject>(
  config: TConfig,
  properties: readonly ConfigurableProperty[],
): ConfigMergeResult<TConfig> => {
  if (!isPlainObject(config)) {
    throw new Error("Invalid base config: platform definitions must be objects.");
  }

  const resolved = cloneConfig(config);
  const issues: ConfigValidationIssue[] = [];
  const appliedPaths: string[] = [];

  for (const property of properties) {
    const currentValue = getAtPath(resolved, property.path);

    if (currentValue === undefined && property.defaultValue !== undefined) {
      setAtPath(resolved, property.path, property.defaultValue);
      appliedPaths.push(property.path);
      continue;
    }

    if (property.required && currentValue === undefined) {
      issues.push(
        issue(
          "config.required.missing",
          `Required config property "${property.path}" is missing.`,
          "warning",
          property.path,
        ),
      );
      continue;
    }

    if (
      currentValue !== undefined &&
      property.expectedType &&
      getValueType(currentValue) !== property.expectedType
    ) {
      issues.push(
        issue(
          "config.default.invalidType",
          `Config property "${property.path}" must be ${property.expectedType}.`,
          "warning",
          property.path,
        ),
      );
    }
  }

  return {
    config: resolved,
    issues,
    appliedPaths,
    rejectedPaths: [],
  };
};
