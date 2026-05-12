import type * as React from "react";

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  current?: boolean;
}

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  children?: NavigationItem[];
  active?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  reason?: string;
  description?: string;
  onSelect?: () => void;
}

export type WorkspaceTabStatus = "clean" | "dirty" | "saving" | "error";

export interface WorkspaceTab {
  id: string;
  title: string;
  subtitle?: string;
  documentType?: string;
  route?: string;
  breadcrumbs?: BreadcrumbItem[];
  status?: WorkspaceTabStatus;
  closable?: boolean;
  icon?: React.ReactNode;
}
