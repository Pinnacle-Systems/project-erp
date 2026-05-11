import type { ValidationMessage } from "@erp-ui-platform/validation-ui";

export type LookupQuery = {
  searchText: string;
  limit?: number;
  filters?: Record<string, unknown>;
  context?: Record<string, unknown>;
};

export type LookupResult<TValue = unknown> = {
  id: string;
  label: string;
  value: TValue;
  description?: string;
  metadata?: Record<string, unknown>;
};

export type LookupValidationResult = {
  valid: boolean;
  messages: readonly ValidationMessage[];
};

export type LookupProvider<
  TQuery extends LookupQuery = LookupQuery,
  TResult extends LookupResult = LookupResult,
  TResolved = unknown,
> = {
  search(query: TQuery): Promise<TResult[]>;
  resolve(result: TResult): Promise<TResolved>;
  validate?(resolved: TResolved): Promise<LookupValidationResult>;
};

export type LookupResolveInput<
  TResult extends LookupResult = LookupResult,
  TProviderContext = Record<string, unknown>,
> = {
  result: TResult;
  context?: TProviderContext;
};

export type LookupResolveResult<TResolved = unknown> = {
  resolved: TResolved;
  validation?: LookupValidationResult;
};

export type LookupAutofillMapping<TResolved = unknown> = Record<
  string,
  keyof TResolved & string
>;

export type LookupError = {
  code: string;
  message: string;
  cause?: unknown;
};

export type LookupState<
  TResult extends LookupResult = LookupResult,
  TResolved = unknown,
> = {
  query: LookupQuery;
  results: readonly TResult[];
  selectedResult?: TResult;
  resolved?: TResolved;
  validation?: LookupValidationResult;
  error?: LookupError;
  loading: boolean;
  resolvedAt?: string;
};

export type CreateLookupStateOptions<
  TResult extends LookupResult = LookupResult,
  TResolved = unknown,
> = Partial<LookupState<TResult, TResolved>> & {
  query?: Partial<LookupQuery>;
};

export const createLookupState = <
  TResult extends LookupResult = LookupResult,
  TResolved = unknown,
>(
  options: CreateLookupStateOptions<TResult, TResolved> = {},
): LookupState<TResult, TResolved> => ({
  query: {
    searchText: "",
    ...options.query,
  },
  results: options.results ?? [],
  selectedResult: options.selectedResult,
  resolved: options.resolved,
  validation: options.validation,
  error: options.error,
  loading: options.loading ?? false,
  resolvedAt: options.resolvedAt,
});

export const isLookupResolved = <
  TResult extends LookupResult = LookupResult,
  TResolved = unknown,
>(
  state: LookupState<TResult, TResolved>,
): state is LookupState<TResult, TResolved> & {
  selectedResult: TResult;
  resolved: TResolved;
} => Boolean(state.selectedResult && state.resolved);

export const mapAutofillValues = <
  TResolved extends Record<string, unknown>,
  TTarget extends Record<string, unknown> = Record<string, unknown>,
>(
  resolved: TResolved,
  mapping: LookupAutofillMapping<TResolved>,
): Partial<TTarget> =>
  Object.entries(mapping).reduce<Partial<TTarget>>(
    (values, [targetField, sourceField]) => {
      return {
        ...values,
        [targetField]: resolved[sourceField],
      };
    },
    {},
  );
