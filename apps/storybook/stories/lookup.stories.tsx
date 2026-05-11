import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  createLookupState,
  mapAutofillValues,
  isLookupResolved,
  type LookupResult,
} from "@erp-ui-platform/lookup";
import { Badge, Button, TextField } from "@erp-ui-platform/primitives";
import { ErrorState, LoadingState } from "@erp-ui-platform/app-components";

const meta = {
  title: "Patterns/Lookup",
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── mock data ─────────────────────────────────────────────────────────────────

type ItemValue = {
  itemId: string;
  description: string;
  uom: string;
  unitRate: number;
};

type ItemResult = LookupResult<ItemValue>;

const MOCK_RESULTS: ItemResult[] = [
  {
    id: "fab-001",
    label: "FAB-001 – Fabric roll",
    value: {
      itemId: "FAB-001",
      description: "Fabric roll",
      uom: "ROLL",
      unitRate: 100,
    },
  },
  {
    id: "fab-002",
    label: "FAB-002 – Denim fabric",
    value: {
      itemId: "FAB-002",
      description: "Denim fabric",
      uom: "ROLL",
      unitRate: 130,
    },
  },
  {
    id: "fab-003",
    label: "FAB-003 – Silk fabric",
    value: {
      itemId: "FAB-003",
      description: "Silk fabric",
      uom: "MTR",
      unitRate: 280,
    },
  },
];

// ── shared components ─────────────────────────────────────────────────────────

const ResultsDropdown = ({
  results,
  onSelect,
}: {
  results: ItemResult[];
  onSelect: (r: ItemResult) => void;
}) => (
  <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-neutral-200 rounded-md shadow-md overflow-hidden">
    {results.map((r) => (
      <button
        key={r.id}
        type="button"
        className="w-full text-left px-3 py-2.5 text-xs hover:bg-neutral-50 border-b border-neutral-100 last:border-b-0 transition-colors"
        onClick={() => onSelect(r)}
      >
        <span className="font-mono font-medium text-neutral-800">
          {r.value.itemId}
        </span>
        <span className="text-neutral-500 ml-2">{r.value.description}</span>
        <span className="text-neutral-400 ml-2">
          {r.value.uom} · ₹{r.value.unitRate}
        </span>
      </button>
    ))}
  </div>
);

const AutofillPreview = ({
  values,
}: {
  values: Record<string, unknown>;
}) => (
  <div className="rounded-md bg-blue-50 border border-blue-200 p-2.5 text-xs">
    <p className="font-semibold text-blue-700 mb-1.5">Autofill preview</p>
    <div className="flex flex-col gap-0.5">
      {Object.entries(values).map(([k, v]) => (
        <div key={k} className="flex gap-2">
          <span className="text-neutral-400 w-24 shrink-0">{k}</span>
          <span className="font-mono text-neutral-800">{String(v)}</span>
        </div>
      ))}
    </div>
  </div>
);

// ── stories ───────────────────────────────────────────────────────────────────

export const Searching: Story = {
  render: () => (
    <div className="max-w-sm flex flex-col gap-2">
      <TextField label="Item" value="FAB" density="compact" readOnly />
      <LoadingState variant="inline" label="Searching items..." />
    </div>
  ),
};

export const Results: Story = {
  render: () => {
    const [selected, setSelected] = useState<ItemResult | null>(null);

    return (
      <div className="max-w-sm flex flex-col gap-2">
        <div className="relative">
          <TextField
            label="Item"
            value={selected ? selected.label : "FAB"}
            density="compact"
            readOnly
          />
          {!selected && (
            <ResultsDropdown
              results={MOCK_RESULTS}
              onSelect={setSelected}
            />
          )}
        </div>
        {selected && (
          <div className="flex items-center gap-2 text-xs">
            <Badge variant="success">Selected</Badge>
            <span className="text-neutral-600">
              {selected.value.itemId} · {selected.value.description}
            </span>
            <button
              className="text-neutral-400 hover:text-neutral-600 ml-auto text-xs"
              onClick={() => setSelected(null)}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    );
  },
};

export const Selected: Story = {
  render: () => {
    const selected = MOCK_RESULTS[0];
    const state = createLookupState({
      query: { searchText: selected.label },
      selectedResult: selected,
    });

    return (
      <div className="max-w-sm flex flex-col gap-2">
        <TextField
          label="Item"
          value={state.query.searchText}
          density="compact"
          readOnly
        />
        <div className="flex items-center gap-2 text-xs">
          <Badge variant="success">Selected</Badge>
          <span className="text-neutral-600">
            {selected.value.itemId} · {selected.value.description}
          </span>
        </div>
      </div>
    );
  },
};

export const Resolved: Story = {
  render: () => {
    const selected = MOCK_RESULTS[0];
    const resolved = selected.value;
    const autofill = mapAutofillValues<
      ItemValue,
      { item: string; description: string; uom: string; unitRate: number }
    >(resolved, {
      item: "itemId",
      description: "description",
      uom: "uom",
      unitRate: "unitRate",
    });

    const state = createLookupState({
      query: { searchText: selected.label },
      selectedResult: selected,
      resolved,
    });

    return (
      <div className="max-w-sm flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2">
          <TextField
            label="Item"
            value={String(autofill.item ?? "")}
            density="compact"
            readOnly
          />
          <TextField
            label="Description"
            value={String(autofill.description ?? "")}
            density="compact"
            readOnly
          />
          <TextField
            label="UOM"
            value={String(autofill.uom ?? "")}
            density="compact"
            readOnly
          />
          <TextField
            label="Unit Rate"
            value={String(autofill.unitRate ?? "")}
            density="compact"
            readOnly
          />
        </div>
        {isLookupResolved(state) && (
          <Badge variant="success">Resolved</Badge>
        )}
        <AutofillPreview values={autofill as Record<string, unknown>} />
      </div>
    );
  },
};

export const ResolveFailed: Story = {
  render: () => (
    <div className="max-w-sm flex flex-col gap-2">
      <TextField
        label="Item"
        value="XXX-999"
        error
        errorMessage="Item not found or inactive."
        density="compact"
        readOnly
      />
      <ErrorState
        title="Lookup failed"
        description="The item code could not be resolved. It may be inactive or not set up in this warehouse."
        errorDetails="HTTP 404 Not Found\nGET /api/v1/items/XXX-999\nRequest ID: req_a1b2c3d4"
        onRetry={() => alert("Retrying lookup...")}
        retryLabel="Retry lookup"
        className="py-8"
      />
    </div>
  ),
};

export const AutofillPreviewStory: Story = {
  name: "Autofill Preview",
  render: () => {
    const resolved = {
      itemId: "FAB-001",
      description: "Fabric roll",
      unit: "ROLL",
      unitRate: 100,
    };
    const autofill = mapAutofillValues<
      typeof resolved,
      { item: string; description: string; uom: string; rate: number }
    >(resolved, {
      item: "itemId",
      description: "description",
      uom: "unit",
      rate: "unitRate",
    });

    return (
      <div className="max-w-sm flex flex-col gap-3">
        <p className="text-xs text-neutral-500">
          <code className="font-mono bg-neutral-100 px-1 rounded">
            mapAutofillValues
          </code>{" "}
          maps resolved fields to target form field names.
        </p>
        <AutofillPreview values={autofill as Record<string, unknown>} />
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(autofill).map(([k, v]) => (
            <TextField
              key={k}
              label={k}
              value={String(v ?? "")}
              density="compact"
              readOnly
            />
          ))}
        </div>
      </div>
    );
  },
};

export const ValidationWarning: Story = {
  render: () => {
    const selected = MOCK_RESULTS[2];
    const resolved = selected.value;
    const autofill = mapAutofillValues<
      ItemValue,
      { item: string; uom: string; unitRate: number }
    >(resolved, { item: "itemId", uom: "uom", unitRate: "unitRate" });

    return (
      <div className="max-w-sm flex flex-col gap-2">
        <TextField
          label="Item"
          value={String(autofill.item ?? "")}
          density="compact"
          readOnly
        />
        <TextField
          label="Unit Rate"
          value={String(autofill.unitRate ?? "")}
          density="compact"
          readOnly
        />
        <div className="rounded-md bg-amber-50 border border-amber-200 p-2.5 text-xs flex items-start gap-2">
          <Badge variant="warning" className="mt-0.5 shrink-0">
            Warning
          </Badge>
          <span className="text-amber-700">
            Unit rate ₹{autofill.unitRate} exceeds the approved purchase order
            rate. Review before saving.
          </span>
        </div>
      </div>
    );
  },
};
