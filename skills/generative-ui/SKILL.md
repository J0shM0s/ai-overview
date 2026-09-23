# generative-ui – Model streamt UI, nicht nur Text

> Quellen: `dang-w/streaming-generative-ui`, `BaruchEric/stream-ui`, `ZenMux/zenmux-chat`

## Prinzip
Eine **typed Registry** ist Single Source of Truth: `Zod Schema → Tool Definition → Renderer + Validation`. Model ruft `render_ui(spec)`/`append_ui(spec)` Tools auf, Frontend dispatcht via Registry.

## Registry Pattern (aus dang-w)
```ts
// lib/registry.ts – EIN Eintrag pro Artifact
import { z } from "zod";
const chartSchema = z.object({ data: z.array(z.number()) });
export const registry = {
  chart: { schema: chartSchema, Component: Chart, description: "Bar chart" },
  table: { schema: tableSchema, Component: Table, description: "Data table" },
} as const;
// Alles abgeleitet: tools = schemas→z.toJSONSchema, ArtifactKind = keyof registry, renderArtifact = lookup+safeParse
```

## stream-ui Primitives
`card`/`stack`/`row`/`grid` (rekursiv `children`), `register(kind, renderer, jsonSchema)`, `render()/append()/createElement()`, `ActionEvent{action,payload}` zurück an Agent. AG-UI Adapter: `render_ui`/`append_ui` + `get_local_time`/`confirm_order` (HITL `renderAndWait`).

## ZenMux Slot System
`ctx.ui.register(slot, item)` – Slots wie `sidebar:left`, `message:reasoning`, `input:composer`. Request Pipeline `onBuildRequest→onBeforeSend→onStreamChunk→onAfterResponse`.

## Im Repo
`src/components/ai/GenerativeUI.tsx` – Registry + Renderer + Fallbacks (Unknown/Invalid). `src/components/ai/StreamingPatterns.tsx` für X-RAY/REGISTRY Views.
