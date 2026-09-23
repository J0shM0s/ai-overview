# orchestration – Multi-Agent & 12-Factor für Production

> Quellen: `humanlayer/12-factor-agents` (Pflichtlektüre!), `uid4oe/agent-orchestration-patterns`, `kyrolabs/awesome-agents`, Top 20 Liste 2026

## 7 Orchestration Patterns (uid4oe – je mit Live Demo + SSE + Langfuse evals)
| Pattern | Wann |
|---------|------|
| **Router** | Intent → Specialist (Support, Helpdesk) |
| **Pipeline** | researcher→writer→editor sequentiell |
| **Supervisor** | plant Subtasks, dispatched workers, reviewed retry |
| **Debate** | bull/bear adversarial + judge (Investment) |
| **Swarm** | peer-to-peer handoffs ohne Zentralrouting |
| **Map-Reduce** | parallel fan-out mappers + merged reduction |
| **Reflection** | generate-critique-revise bis Threshold |

## 12-Factor Agents (humanlayer) – Kurzfassung
1. Natural Language → Tool Calls (Loop: LLM wählt Tool JSON → Code führt aus → Result in Context)
2. **Own your prompts** – versioniert, testbar
3. **Own your context window** – Dichte, Error, Safety, Token selbst steuern
4. Tools = structured outputs
5. Unify execution & business state (Thread = serialisierbar/forkbar)
6. Launch/Pause/Resume via API (Webhook resume)
7. Contact humans via tool calls (kein Sonderweg)
8. Own your control flow (eigene Retries, Summarization, Rate Limits)
9. Compact errors (kurz, self-heal 1-2 Retries)
10. **Small focused agents** – 3-10 Steps, dann neuer Agent
11. Trigger from anywhere (Slack/Email/Cron/Linear/GitHub)
12. Stateless reducer `(state, event) => newState`
> Faustregel: Ab 70-80% Qualität Framework abwerfen, selbst bauen – sonst reverse-engineerst du nur.

## Market Heuristics 2026 (380 Repos Analyse)
- Python 54%, TS 19% – für Web-Produkt reicht TS (Vercel AI SDK) oft ohne Python Wrapper
- Stars ≠ Qualität: `AutoGPT` 183k alt, `LangChain` 135k battle-tested, `Dify` 139k best no-code
- Velocity Top: `everything-claude-code` 1689/d, aber Aggregator – Prod Picks: `claude-mem`, `gemini-cli`

## Meta-Harness (wenn viele Agents parallel)
`omnigent` (9k), `open-swe` (LangGraph+Deep Agents), `prime-agent` (RLM+REPL), `open-gitagent/gitagent` (git-native: `agent.yaml`, `SOUL.md`, `RULES.md`, `memory/` versioniert – `git log` = memory history)

## Im Repo
`src/components/ai/OrchestrationDemo.tsx` – Pattern Switcher + Live Trace Visualization (aus uid4oe).
