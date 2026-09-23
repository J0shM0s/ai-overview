# streaming – Token-Streaming, Thinking, Artifacts

> Quellen: `vibeacademy/streaming-patterns`, `arablex/llm-ux-patterns`, `BaruchEric/stream-ui`, `dang-w/streaming-generative-ui`, `AnkitParekh007/frontend-ai-patterns`

## Wann nutzen
Chat, Agent-Output, große Tabellen, lange Generierungen – immer wenn der User sonst auf einen Spinner starren würde.

## 7 Streaming Patterns (aus vibeacademy)
1. **Chain-of-Reasoning** – thinking Steps vertikal mit bead-line, `reasoning` + `answer` Events
2. **Agent-Await-Prompt** – pausiert mid-stream, fragt nach Input, `await_input` Event
3. **Tabular Stream** – `schema` + `table_row` Events, Skeleton Rows, sortierbar bevor fertig
4. **Memory Timeline** – `memory.create/update/prune` horizontal, pin/prune Controls
5. **Turn-Taking Co-Creation** – `agent_patch`/`user_patch` mit Authorship Highlight
6. **Validation Loop** – Checkpoints mit Approve/Edit/Reject + Countdown
7. **Schema-Governed** – Zod validation live, HUD + auto-fix Suggestions

## Kern-Regeln
- **Stream steps, not just tokens**: Plan → ToolCall + Args → Result als Timeline, live Token/Latency
- **Two text channels**: `interim_text` (planning, collapsible) vs `text` (final answer) – nie vermischen. Siehe `AIChatShell`
- **Typed wire**: SSE `text-delta`/`artifact`/`done`/`error` – `renderArtifact(kind)` macht `safeParse` an Render-Boundary, fallback statt crash
- **Mutate locals, flush once per event** – kein `setState` pro Token

## Code im Repo
- `src/components/ai/AIChatShell.tsx` – Basis (erweitern mit Vercel AI SDK `useChat`)
- `src/components/ai/StreamingPatterns.tsx` – alle 7 Patterns als Copy-Paste
- `src/components/ai/GenerativeUI.tsx` – Registry Pattern (siehe generative-ui Skill)

## SSE Contract (aus agentic-chat-interface Skill)
```
status{step} -> tool_use{tool,input} -> tool_result{summary} -> interim_text -> text -> done
```
Stall watchdog 60s, retry mit `canRetry`, near-bottom-only auto-scroll (150px Threshold).
