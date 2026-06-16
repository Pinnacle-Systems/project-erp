import type { Meta } from "@storybook/react-vite";
import { useState, useEffect } from "react";

const meta = {
  title: "Foundation/Theme Token Debug",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

const getVar = (name: string) => {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
};

export const Debug = () => {
  const [vars, setVars] = useState<Record<string, string>>({});

  useEffect(() => {
    // Re-evaluate on mount and when colorMode might change
    const updateVars = () => {
      setVars({
        "--erp-color-background": getVar("--erp-color-background"),
        "--erp-color-foreground": getVar("--erp-color-foreground"),
        "--erp-color-surface": getVar("--erp-color-surface"),
        "--erp-color-surface-muted": getVar("--erp-color-surface-muted"),
        "--erp-color-surface-raised": getVar("--erp-color-surface-raised"),
        "--erp-color-border": getVar("--erp-color-border"),
        "--erp-color-border-subtle": getVar("--erp-color-border-subtle"),
        "--erp-color-muted-foreground": getVar("--erp-color-muted-foreground"),
        "--erp-color-primary": getVar("--erp-color-primary"),
        "--erp-color-primary-foreground": getVar("--erp-color-primary-foreground"),
        "--erp-color-danger": getVar("--erp-color-danger"),
        "--erp-color-danger-foreground": getVar("--erp-color-danger-foreground"),
        "--erp-color-warning": getVar("--erp-color-warning"),
        "--erp-color-warning-foreground": getVar("--erp-color-warning-foreground"),
        "--erp-color-success": getVar("--erp-color-success"),
        "--erp-color-success-foreground": getVar("--erp-color-success-foreground"),
      });
    };

    updateVars();
    
    // Poll to catch storybook theme changes for the debug view
    const interval = setInterval(updateVars, 1000);
    return () => clearInterval(interval);
  }, []);

  const Swatch = ({
    className,
    label,
  }: {
    className: string;
    label: string;
  }) => (
    <div className={`p-4 rounded-md border flex flex-col items-center justify-center text-center ${className}`}>
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs opacity-70 mt-1 font-mono">{className}</span>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Token Swatches</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Swatch className="bg-background text-foreground border-border" label="Background" />
          <Swatch className="bg-surface text-foreground border-border" label="Surface" />
          <Swatch className="bg-surface-muted text-foreground border-border" label="Surface Muted" />
          <Swatch className="bg-surface-raised text-foreground border-border" label="Surface Raised" />
          
          <Swatch className="bg-surface border-border text-foreground" label="Border Default" />
          <Swatch className="bg-surface border-border-subtle text-foreground" label="Border Subtle" />
          <Swatch className="bg-surface text-muted-foreground border-border" label="Text Muted" />
          
          <Swatch className="bg-primary text-primary-foreground border-transparent" label="Primary" />
          <Swatch className="bg-danger text-danger-foreground border-transparent" label="Danger" />
          <Swatch className="bg-warning text-warning-foreground border-transparent" label="Warning" />
          <Swatch className="bg-success text-success-foreground border-transparent" label="Success" />
          <Swatch className="bg-info text-info-foreground border-transparent" label="Info" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Computed Variables</h2>
        <div className="bg-surface border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-surface-muted text-muted-foreground border-b border-border">
              <tr>
                <th className="px-4 py-2 font-medium">Variable</th>
                <th className="px-4 py-2 font-medium">Value</th>
                <th className="px-4 py-2 font-medium w-16">Color</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(vars).map(([key, value]) => (
                <tr key={key} className="border-b border-border-subtle last:border-0">
                  <td className="px-4 py-2 font-mono text-foreground">{key}</td>
                  <td className="px-4 py-2 text-muted-foreground">{value || "undefined"}</td>
                  <td className="px-4 py-2">
                    {value && (
                      <div
                        className="w-6 h-6 rounded border border-border"
                        style={{ backgroundColor: value }}
                        title={value}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
