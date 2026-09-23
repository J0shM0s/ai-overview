# production – Von 80% zu Production-Grade

> Quellen: `arablex/llm-ux-patterns`, `humanlayer/12-factor-agents`, `GSA-TTS/agentic-coding-playbook`, `vstorm` template

## Observability (Tag 1!)
- **Traces:** Logfire (PydanticAI), LangSmith (LangChain), Langfuse, Sentry, Prometheus
- **Metrics:** Token, latency, cost per Agent/Model/Tool – Dashboard wie `llm-ux-patterns` Pattern 3 (MTD spend, forecast, breakdown)
- **Evals:** Gewichteter Score über Zeit, Regression Detection, Judge (Model+Human) – Pattern 5. `eval/run_eval.py` → hit-rate/latency/cost

## Quota & Fallback (Pattern 4)
Provider Throttle als first-class State: auto Fallback Routing, explizite Optionen (Tier hoch / Fallback bleiben / throttlen) mit Tradeoffs gepreist.

## Empty State (Pattern 6)
Ehrlich: keine Fake Metrics, eine CTA, sanftester erster Schritt (Starter Template, nicht blank canvas).

## Security (GSA Playbook)
Safety > Correctness > Compliance > Simplicity > Performance. Least privilege, allowlist statt denylist, pinned deps, TLS 1.2+, Feld-Verschlüsselung PII, Plan before execute, PR Discipline, ADR für Architektur.

## 12-Factor Honorable Mention
Pre-fetch all context you might need – sammle vor LLM Call alles, nicht während Loop nachladen.

## Wenn du vstorm nutzt
Stripe (seat-based), Credits/Metering, Multi-bot (Telegram/Slack polling+webhook), Conversation Sharing (direct+link), Admin browser, `run_python` Charts, Deep Research (TODO planner + subagents).
