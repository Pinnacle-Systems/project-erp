import type { ValidationMessage } from "@erp-ui-platform/validation-ui";

export const validationBlocking: ValidationMessage = {
  id: "v-blocking",
  severity: "blocking",
  scope: "field",
  fieldPath: "header.customerId",
  message: "Customer is required before posting.",
};

export const validationWarning: ValidationMessage = {
  id: "v-warning",
  severity: "warning",
  scope: "workflow",
  message: "Tax code is not set. The system default will be applied.",
};

export const validationInfo: ValidationMessage = {
  id: "v-info",
  severity: "info",
  scope: "document",
  message: "Payment terms defaulted from customer master.",
};

export const validationLineError: ValidationMessage = {
  id: "v-line-err",
  severity: "error",
  scope: "line",
  lineIndex: 1,
  fieldPath: "lines[1].quantity",
  message: "Quantity must be greater than zero.",
};

export const validationVariance: ValidationMessage = {
  id: "v-variance",
  severity: "warning",
  scope: "line",
  lineIndex: 1,
  message: "Picked quantity (6) differs from ordered quantity (8) on ACC-220.",
};
