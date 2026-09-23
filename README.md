# ai-overview – Universal AI App & Website Starter

> **Die Referenz für alle deine nächsten Projekte.** Gib dieses Repo jedem Agent als Kontext – er findet alle Patterns, Skills und Komponenten automatisch.

[![CI](https://github.com/J0shM0s/ai-overview/actions/workflows/ci.yml/badge.svg)](https://github.com/J0shM0s/ai-overview/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)

Wiederverwendbares Starter-Template das **40+ Open-Source Repos** + moderne AI-UX Prinzipien in **einem** Repo vereint. Kein Neu-Erfinden – copy-paste oder als Agent-Referenz verlinken.

**Basis (5 Core Repos):** `jakubantalik/thinking-orbs` · `pmndrs/react-spring` · `watermelonCorp/watermelon-platform` · `dream-num/univer` · `tencent/BrowserSkill` · 4 Instagram Reels

**Erweitert (+35):** `vercel/chatbot` + `vercel/ai` (AI SDK) · `shadcn-chatbot-kit` · `vibeacademy/streaming-patterns` · `arablex/llm-ux-patterns` · `dang-w/streaming-generative-ui` · `BaruchEric/stream-ui` · `ZenMux/zenmux-chat` · `humanlayer/12-factor-agents` · RAG (pgvector/Qdrant) · `uid4oe/agent-orchestration-patterns` · MCP (awesome-mcp-servers) · Voice (LiveKit/Pipecat) … siehe `docs/AI-APP-ECOSYSTEM.md`

---

## 🚀 So nutzt du es

### Als Prompt-Referenz (empfohlen – 1 Zeile)
In **jedem** neuen Projekt dem Agent sagen:

> „Nutze `github:J0shM0s/ai-overview` als Referenz – befolge `AGENTS.md` & `docs/PRINCIPLES.md`, kopiere passende Komponenten aus `src/components/ai/*`"

Der Agent lädt dann nur den nötigen `skills/*/SKILL.md` (streaming, rag, mcp, voice …).

### Als Template
```bash
npx degit J0shM0s/ai-overview my-new-app
cd my-new-app && pnpm install && pnpm dev
# oder
git submodule add https://github.com/J0shM0s/ai-overview ai-reference
```

### Direkt clonen
```bash
git clone https://github.com/J0shM0s/ai-overview
cd ai-overview && pnpm install && pnpm dev # http://localhost:5173
```

---

## 📦 Was drin ist

| Bereich | Quelle | Component / Skill |
|---------|--------|-------------------|
| **AI Thinking UI** | thinking-orbs | `AgentThinkingOrb` (9 States, monochrom, Canvas, DPR cap) → `skills/thinking-orbs` |
| **Animation** | react-spring | `AnimatedCard`, `StaggeredList` (spring physics) → `skills/react-spring` |
| **Chat UX** | Reels + chatbot kits | `AIChatShell` + `vercel/ai` `useChat` Pattern → `skills/streaming` |
| **Streaming (7 Patterns)** | vibeacademy, arablex | `StreamingPatterns.tsx` (Chain-of-Reasoning, Validation Loop, Cost Surface, Tabular) |
| **Generative UI** | dang-w, stream-ui, zenmux | `GenerativeUI.tsx` (Registry: Schema→Tool→Renderer, `renderArtifact`) |
| **Office** | Univer | `UniverEmbed` + `src/lib/univer.ts` (isomorph, Worktree) → `skills/univer` |
| **RAG** | pgvector/Qdrant | `RAGPanel.tsx` (Hybrid search, Citations) → `skills/rag` |
| **Orchestration** | 12-factor, 7 Patterns | `OrchestrationDemo.tsx` (Router/Pipeline/Supervisor…) → `skills/orchestration` |
| **Browser Agent** | BrowserSkill | `bsk` Session Pattern → `skills/browser-skill` |
| **MCP** | awesome-mcp-servers | `mcp/server.ts` + official servers → `skills/mcp` |
| **Voice** | LiveKit/Pipecat | → `skills/voice` |
| **Production** | 12-factor, GSA | Observability, Evals, Cost, Quota, Empty State → `skills/production` |
| **Discovery** | watermelon | `public/llms.txt`, `openapi.json`, `sitemap.xml`, file-based `src/data/contents` |

---

## 🗂️ Für Agents: Lese-Reihenfolge

1. `AGENTS.md` – Pflicht-Workflow (8 Schritte)
2. `docs/PRINCIPLES.md` – warum so gebaut (5 Core + Reels)
3. `docs/AI-APP-ECOSYSTEM.md` – erweiterter Katalog (40+ Repos, 7 Kategorien)
4. `docs/ARCHITECTURE.md` – Stack & Struktur
5. `skills/<name>/SKILL.md` – nur den nötigen Skill laden

---

## 🛠️ Schnellstart

```bash
pnpm install
pnpm dev      # Home / Components / Office / Agent
pnpm build    # tsc + vite + sitemap
pnpm doctor   # checks
pnpm generate:sitemap
```

Seiten: `/` (Overview), `/components` (Orbs+Springs+RAG+Streaming), `/office` (Univer), `/agent` (BrowserSkill+MCP)

---

## 🎨 Copy-Paste

```tsx
import { AgentThinkingOrb } from "@/components/ai/ThinkingOrbState";
<AgentThinkingOrb state="searching" size={20} />

import { SpringCard } from "@/components/ai/AnimatedCard";
<SpringCard>Hover – config.gentle</SpringCard>

import { GenerativeUIDemo } from "@/components/ai/GenerativeUI";
<GenerativeUIDemo />

import { RAGPanel } from "@/components/ai/RAGPanel";
<RAGPanel />

import { OrchestrationDemo } from "@/components/ai/OrchestrationDemo";
<OrchestrationDemo />
```

**Chat an echte LLM anschließen:**
```ts
// statt Demo-Loop in AIChatShell:
import { useChat } from "@ai-sdk/react";
const { messages, input, handleInputChange, handleSubmit, status, stop } = useChat();
```

**RAG scaffold (statt selbst bauen):**
```bash
npx rag-boilerplate my-rag --providers openai --vector-store pgvector
```

**BrowserSkill:**
```bash
bsk session start --no-focus --json
bsk navigate https://example.com --session <id>
bsk observe --session <id>
bsk screenshot --session <id> --out p.png
bsk session stop <id>
```

---

## 🤝 Contribute

PRs welcome! Siehe `docs/AI-APP-ECOSYSTEM.md` für fehlende Repos. `pnpm run build` muss grün sein.

## 📄 Lizenz

MIT – nutze frei für alle Projekte. Quellen bleiben bei ihren Lizenzen (MIT/Apache-2.0).
