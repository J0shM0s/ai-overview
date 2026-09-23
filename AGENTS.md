# AGENTS.md – Instructions for AI Agents

> Dieses Repo ist die **Referenz für alle Projekte** des Owners. Wenn der User sagt „nutze ai-overview“, befolge diese Datei.

## 1) Pflichtlektüre
- `docs/PRINCIPLES.md` – 6 Quellen destilliert (thinking-orbs, react-spring, watermelon, univer, BrowserSkill, Reels)
- `docs/AI-APP-ECOSYSTEM.md` – 40+ weitere Repos & Patterns (Chat Templates, Streaming, RAG, Agent Orchestration, MCP, 12-Factor)
- `docs/ARCHITECTURE.md` – Stack & Struktur
- `skills/<name>/SKILL.md` – lade nur den Skill der gerade nötig ist

## 2) Standard-Workflow für neue Apps/Websites
1. **Scaffold kopieren**: `src/components/ai/*`, `src/lib/*`, `vite.config.ts`, `public/*`
2. **Thinking**: `AgentThinkingOrb` / `AIStatus` statt Spinner
3. **Animation**: `AnimatedCard` (react-spring) – `config.gentle` / `useTrail`
4. **Chat**: `AIChatShell` als Basis, dann an echte LLM API (Vercel AI SDK `useChat`) anschließen – Streaming!
5. **Office** (falls Sheets/Docs nötig): `UniverEmbed` + headless `univer.ts`
6. **Browser** (falls Automation/Scraping/Testing): `skills/browser-skill` + `bsk session ...`
7. **Discovery**: `public/llms.txt`, `public/openapi.json`, `public/sitemap.xml` aktuell halten
8. **A11y/Perf**: `prefers-reduced-motion`, offscreen-pause, DPR cap, `data-theme` – bereits im Template

## 3) Skills – wann laden
- UI/AI Loading → `skills/thinking-orbs/SKILL.md`
- Animation → `skills/react-spring/SKILL.md`
- Spreadsheet/Doc/PDF → `skills/univer/SKILL.md`
- Browser Automation/Debugging → `skills/browser-skill/SKILL.md`

## 4) Do & Don't
- DO: Streaming, Tool-Timeline, Zitate, Human-in-the-Loop (approve/edit/stop)
- DO: Monochrom ThinkingOrbs, spring physics, file-based MDX, shadcn copy-paste
- DON'T: duration-based animation für interaktive Elemente, bunte Loader, Browser Tab ohne Confirm hijacken
- DON'T: Univer Pro als OSS ausgeben, BrowserSkill ohne `session stop` lassen

## 5) Verifikation
- `pnpm run build` + `pnpm run doctor`
- Bei BrowserSkill: `bsk doctor`
- Bei Office: Screenshot vergleichen (`bsk screenshot` oder headless inspect)

## 6) Wie der User das Repo referenziert
In jedem neuen Projekt Prompt: „Nutze `github:moser/ai-overview` als Referenz – befolge AGENTS.md & PRINCIPLES.md“
Oder als git submodule / `npx degit`.
