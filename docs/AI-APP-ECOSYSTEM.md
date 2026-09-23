# AI Coded Apps – Großer Repo & Prinzipien-Katalog

> Erweiterung zu `PRINCIPLES.md`. Gesammelt 2026-09-23 aus 40+ Repos, Awesome-Listen und Production-Guides. Die 5 Starter-Repos bleiben die Basis – das hier ist die "zweite Welle" für production-grade AI Apps.

## Wie nutzen?
- **Schnellstart** bleibt `AGENTS.md` → `PRINCIPLES.md` (5 Core Repos).
- **Für neue Features** hier die Kategorie aufschlagen, Repo klonen oder Pattern kopieren.
- In `skills/` liegt pro Kategorie ein Skill – Agents laden nur den nötigen.

---

## 1) Chat & LLM App Templates (copy-paste statt neu erfinden)

| Repo | Stars | Wofür | Pattern für ai-overview |
|------|-------|-------|--------------------------|
| **vercel/chatbot** (vormals ai/chatbot) | 20k | Vollständiger Next.js + AI SDK Hackable Chatbot (RSC, Server Actions, shadcn) | `AIChatShell` ersetzen durch `useChat`/`streamText` – sofort streaming, persistence, auth |
| **vercel/ai** (AI SDK) | 15k+ | Unified API für `streamText`, `generateObject`, tool calling, Hooks (`useChat`, `useCompletion`) über OpenAI/Anthropic/Google | Ein SDK für alle Provider, AI Gateway für Routing/Fallback |
| **shadcn/chatbot-template** | 0.5k | Minimaler Chatbot (Next.js + shadcn/ui + AI SDK + Gateway) | Minimale Alternative wenn `vercel/chatbot` zu groß |
| **Blazity/shadcn-chatbot-kit** | 800 | Chat-Komponenten (Chat, Input, Markdown, File-Upload, PromptSuggestions) shadcn-kompatibel | Direkt als `src/components/ui/chat.tsx` einbauen |
| **thorchh/agent-starter** | ~200 | Production Chat mit multi-provider, reasoning panel, citations `[1][2]`, tool calling, history sidebar | `src/lib/ai/tools/*` + `system-prompt.ts` Pattern übernehmen |
| **vstorm-co/full-stack-ai-agent-template** | 1.6k | FastAPI + Next.js Generator: 5 Agent Frameworks, RAG (Milvus/Qdrant/pgvector/Chroma), WebSocket Streaming, Stripe, Celery, Logfire | Wenn Python Backend nötig – Alternative zu Node-only |
| **SerhiiMelnikov/rag-boilerplate** | – | `npx` RAG Scaffold: Next.js + Drizzle + wählbarer Provider (OpenAI/Anthropic/Google/Ollama) + Vector Store (pgvector/Qdrant/Chroma/Weaviate/Pinecone) + Image RAG | Für RAG zuerst hier scaffolden, dann in ai-overview mergen |
| **rs-4/tanstack-ai-demo** | 331 | TanStack Start + Drizzle + Postgres, multi-provider (inkl. Ollama local), full-text search, Docker | Alternative wenn TanStack statt Next.js gewünscht |

**Regel:** Nie Chat von Scratch bauen. Nimm `vercel/chatbot` oder `shadcn-chatbot-kit` + AI SDK `useChat({ stream: true })`.

## 2) Streaming & Generative UI Patterns (das unterscheidet gute von mittelmäßigen AI Apps)

| Repo | Idee |
|------|------|
| **vibeacademy/streaming-patterns** | 7 Patterns: Chain-of-Reasoning, Agent-Await-Prompt, Tabular Stream, Memory Timeline, Co-Creation, Validation Loop, Schema-Governed – je mit Mock Streaming + Network Inspector |
| **arablex/llm-ux-patterns** | 6 Production Screens: reasoning streamen, Kosten-Transparenz, Quota Fallback, Evals, Empty State honest |
| **AnkitParekh007/frontend-ai-patterns** | Angular/TS Verträge für streaming, citations, tool timeline, approval flow, guardrails – als Starter Packs mit fixtures |
| **jeffdh5/agentic-ux-patterns** | Minimal FastAPI+Next.js: streaming chat → typed SSE chunks → artifact panel |
| **dang-w/streaming-generative-ui** | Ein Registry Prinzip: `Zod schemas → registry → tools → renderArtifact` – typed Tool-Calls → Live UI (Chart/Table/Metric) |
| **BaruchEric/stream-ui** (+ `agui` Adapter) | `render(spec)/append(spec)` + AG-UI Protokoll (`render_ui`/`append_ui` Tools), Human-in-the-Loop `renderAndWait` |
| **ZenMux/zenmux-chat** | Microkernel + 18 Plugins: Slot-System (`sidebar:left`, `message:reasoning`…), Request Pipeline Hooks, streaming indicator, artifact, billing |

**Kern-Prinzipien (aus allen):**
1. **Stream steps, not just tokens** – zeige Plan → Tool-Call + Args → Result als Timeline, live Token/Latency.
2. **Typed registry is single source** – Schema definiert Tool, Validation und Renderer. `safeParse` an Render-Boundary, graceful fallback statt crash.
3. **Two text channels** – `interim_text` (planning, collapsible) vs `text` (final answer). Nie vermischen.
4. **Validation loops** – Checkpoints mit Approve/Edit/Reject + Countdown, audit trail.
5. **ActionEvents** – Inputs (checkbox, form) feuern Events zurück in Agent-Loop → Human↔AI↔UI geschlossen.

## 3) RAG & Knowledge (RAG ist kein Vector-DB allein)

| Repo/Pattern | Stack | Hinweis |
|--------------|-------|---------|
| **pgvector** (Postgres Erweiterung) | Postgres + `vector(1536)` + HNSW | Wenn Daten schon in Postgres – kein zweites System. Ab ~10M Vektoren dedizierte Engine (Qdrant/Weaviate) |
| **Qdrant / Chroma / Pinecone / Weaviate / Milvus** | – | Qdrant für Self-host, Pinecone managed, Chroma einfach lokal |
| **lebaocongct/fastapi-rag-template** | FastAPI + LangChain + pgvector + APScheduler | Clean DDD: embedding → retrieval → generation pipelines |
| **moalsayed95/pgrag** | React Vite + FastAPI + pgvector, OpenAI embeddings | 500 chars chunk, cosine `<=>`, ein Transaktion pro Ingest |
| **EdisonTKPcom/agentic-rag-starter** | Agent plant steps, ruft Tools, self-verify, eval harness (precision/faithfulness) | RAG als Agent, nicht nur retrieve+answer |
| **Knowledge Agent Template (vercel-labs)** | Nuxt + Sandbox + grep/find/cat statt Embeddings (file-system search) | Für code/docs RAG ohne Embeddings – Sandbox pooled (<100ms) |

**Regel:** Chunking 800-1000 chars, overlap 150-200, Hybrid Search (vector+BM25), Reranking, Citations `[1]` mit Source Cards, Evals (hit-rate, latency, cost).

## 4) Agent Frameworks & Orchestration (nicht alles mit einem Framework)

| Kategorie | Top Repos | Wann nutzen |
|-----------|-----------|-------------|
| **No-code builder** | Langflow 146k, Dify 136k, Flowise 51k | Prototyp ohne Code, dann export |
| **Code Orchestration** | LangChain 132k, LangGraph, CrewAI 48k, AutoGen 56k, MetaGPT 66k | Multi-agent Systeme |
| **Memory** | Mem0 52k | Persistenter Kontext über Sessions – Pflicht für Prod |
| **Browser** | browser-use 86k, vercel/agent-browser | Website Automation – Alternative/Ergänzung zu BrowserSkill |
| **Voice/Realtime** | LiveKit Agents, Pipecat, Vocode, Bolna | Telefon/ WebRTC Voice Agents |
| **Orchestration Patterns** | **uid4oe/agent-orchestration-patterns** | 7 Patterns live: Router, Pipeline, Supervisor, Debate, Swarm, Map-Reduce, Reflection – alle mit SSE + Langfuse evals |
| **Meta-Harness** | **omnigent** 9k, **open-swe**, **prime-agent**, **open-gitagent/gitagent** (git-native: `SOUL.md`, `RULES.md`, `memory/` versioniert) | Viele Harnesses gleichzeitig, git als Source of Truth |

**Regel (aus MoClaw Analyse 2026):** Python 54% der Agent Repos, TS 19%. Für Web-Produkt: TS Stack (Vercel AI SDK + LangChain JS) reicht oft – kein Python Wrapper nötig.

## 5) MCP (Model Context Protocol) – der neue Standard

- **Protokoll:** Anthropic MCP = USB-C für Tools. Ein Server, viele Clients (Claude Desktop, Cursor, Zed, VS Code, OpenClaw).
- **Offizielle Server:** `filesystem`, `github`, `git`, `postgres`, `sqlite`, `puppeteer`, `brave-search`, `fetch` → `npx @modelcontextprotocol/server-*`
- **Awesome Listen:** `wong2/awesome-mcp-servers`, `mcpHQ/awesome-mcp-servers`, `ANVEAI/awesome-mcp-servers` – kuratiert nach DB/DevTools/Browser/Cloud/Comms …
- **Im Template:** `mcp/server.ts` Stub – an `@modelcontextprotocol/sdk` anbinden. Tools wie `catalog_search`, `browser_navigate` analog watermelon.

## 6) 12-Factor Agents (humanlayer) – wichtigste Regeln für production-grade Agents

> Quelle: `humanlayer/12-factor-agents` – destilliert aus 100+ Gründer-Interviews: "Beste Agents sind 80% deterministischer Code + LLM an wenigen Stellen"

1. **Natural Language → Tool Calls** – LLM wählt nächstes Tool (JSON), Code führt aus, Resultat zurück in Context
2. **Own your prompts** – Prompts sind Code: versioniert, testbar, iterierbar (kein Black-Box Framework Prompt)
3. **Own your context window** – Alles ist Context Engineering: Dichte, Error Handling, Safety, Token-Effizienz selbst steuern
4. **Tools = structured outputs** – Tool-Call ist nur JSON Output des Modells
5. **Unify execution & business state** – Thread = Context Window = serialisierbar, forkbar, debuggbar als Markdown/UI
6. **Launch/Pause/Resume mit einfachen APIs** – Agent via API starten, pausieren (long task), per Webhook fortsetzen
7. **Contact humans with tool calls** – Human-Approval als Tool (kein Sonderweg)
8. **Own your control flow** – Eigene Loops, Retries, Summarization, Rate Limits – nicht Framework Default
9. **Compact errors** – Fehler kurz in Context, Self-healing bei 1-2 Retries, sonst kleine Agents
10. **Small, focused agents** – 3-10 Steps pro Agent, dann neuer Agent – hält Context klein
11. **Trigger from anywhere** – Slack/Email/Cron/Linear/GitHub – Agent antwortet dort wo User ist
12. **Stateless reducer** – Agent = `(state, event) => newState`

**Bonus:** Framework ab 70-80% Qualität abwerfen und selbst bauen – sonst reverse-engineerst du nur.

## 7) Production Checkliste (aus allen Repos synthetisiert)

- **Observability:** Logfire (PydanticAI) / LangSmith (LangChain) / Langfuse / Sentry / Prometheus – Traces, Token, Cost, Latency
- **Evals:** Gewichteter Score über Zeit, Regression Detection, Judge (Model+Human) – siehe `llm-ux-patterns` Pattern 5
- **Cost Surface:** MTD spend, forecast, pro Agent/Model/Tool – nicht erst bei Rechnung
- **Quota/Graceful Fallback:** Provider Throttle → auto Fallback Model, explizite Optionen mit Tradeoffs
- **Auth & Isolation:** JWT + OAuth, Multi-tenant, Sandbox (Vercel Sandbox, Daytona, Modal) – Tools mit Least Privilege
- **State/Sharing:** Conversation Sharing (public link, admin browser), Session Resume, Fork at any point
- **Empty State:** Ehrlich, eine CTA, sanftester erster Schritt (Template statt blank canvas)

---

## Empfehlung für ai-overview Nutzer

**Für jede neue App:**
1. Scaffold = `ai-overview` (5 Core Repos)
2. Chat? → `vercel/chatbot` oder `shadcn-chatbot-kit` + AI SDK
3. Streaming UI? → Pattern aus `vibeacademy/streaming-patterns` kopieren (reasoning timeline oder validation loop)
4. RAG? → `pgvector` wenn Postgres vorhanden, sonst `rag-boilerplate` scafold
5. Agent? → Klein & fokussiert, 12-Factor beachten, `agent-orchestration-patterns` für Pattern-Wahl
6. Voice? → LiveKit/Pipecat
7. Tools? → MCP Server aus awesome-lists, nicht selbst bauen
8. Evals/Cost von Tag 1 einplanen (nicht nach MVP)
