/**
 * Generative UI Registry – aus dang-w/streaming-generative-ui + BaruchEric/stream-ui
 * Eine Registry: Zod Schema → Tool Definition → Renderer + Validation
 */
import { z } from "zod";
import { useState } from "react";

// Schemas (single source)
const metricSchema = z.object({ label: z.string(), value: z.string(), delta: z.string().optional() });
const chartSchema = z.object({ data: z.array(z.number()), title: z.string().optional() });
const tableSchema = z.object({ rows: z.array(z.record(z.string(), z.string())) });

// Registry
const registry = {
  metric: { schema: metricSchema, Component: MetricCard, description: "KPI metric card" },
  chart: { schema: chartSchema, Component: BarChart, description: "Bar chart" },
  table: { schema: tableSchema, Component: SimpleTable, description: "Data table" },
} as const;

type Kind = keyof typeof registry;

function MetricCard({ label, value, delta }: z.infer<typeof metricSchema>) {
  return <div className="rounded-xl border p-4"><p className="text-xs text-muted-foreground">{label}</p><p className="text-xl font-semibold">{value}</p>{delta && <p className="text-xs text-emerald-600">{delta}</p>}</div>;
}
function BarChart({ data, title }: z.infer<typeof chartSchema>) {
  const max = Math.max(...data, 1);
  return <div className="rounded-xl border p-4"><p className="text-sm font-medium mb-2">{title ?? "Chart"}</p><div className="flex items-end gap-1 h-20">{data.map((v: number, i: number) => <div key={i} className="flex-1 bg-primary rounded-t" style={{ height: `${(v / max) * 100}%` }} />)}</div></div>;
}
function SimpleTable({ rows }: z.infer<typeof tableSchema>) {
  if (!rows.length) return <p className="text-sm text-muted-foreground">Keine Daten</p>;
  const cols = Object.keys(rows[0]);
  return <div className="rounded-xl border overflow-hidden"><table className="w-full text-sm"><thead className="bg-muted"><tr>{cols.map((c: string) => <th key={c} className="p-2 text-left text-xs">{c}</th>)}</tr></thead><tbody>{rows.map((r: Record<string, string>, i: number) => <tr key={i} className="border-t">{cols.map((c: string) => <td key={c} className="p-2">{r[c]}</td>)}</tr>)}</tbody></table></div>;
}

// Renderer – lookup + safeParse + fallback (kein switch)
export function renderArtifact(kind: string, props: unknown) {
  const entry = (registry as Record<string, { schema: z.ZodTypeAny; Component: React.ComponentType<any> }>)[kind];
  if (!entry) return <div className="rounded border border-amber-300 bg-amber-50 p-3 text-sm">Unknown kind: {kind}</div>;
  const parsed = entry.schema.safeParse(props);
  if (!parsed.success) return <div className="rounded border border-red-300 bg-red-50 p-3 text-sm">Invalid props for {kind}: {parsed.error.message}</div>;
  const C = entry.Component;
  return <C {...parsed.data} />;
}

// Demo
export function GenerativeUIDemo() {
  const [events, setEvents] = useState<{ kind: Kind; props: unknown }[]>([]);
  function streamDemo() {
    const demo: { kind: Kind; props: unknown }[] = [
      { kind: "metric", props: { label: "Revenue", value: "€42.3k", delta: "+12% WoW" } },
      { kind: "chart", props: { data: [3, 7, 4, 9, 5], title: "Requests / Tag" } },
      { kind: "table", props: { rows: [{ Task: "Build", Owner: "AI", Status: "done" }, { Task: "Ship", Owner: "You", Status: "todo" }] } },
    ];
    setEvents([]);
    demo.forEach((e, i) => setTimeout(() => setEvents((prev) => [...prev, e]), i * 500));
  }
  return (
    <div className="space-y-3">
      <button onClick={streamDemo} className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm">Stream Demo (metric → chart → table)</button>
      <div className="space-y-3">{events.map((e, i) => <div key={i}>{renderArtifact(e.kind, e.props)}</div>)}</div>
      <p className="text-xs text-muted-foreground">Registry ist Single Source: `pnpm add zod` + ein Eintrag in registry → Tool + Validation + Renderer automatisch.</p>
    </div>
  );
}
