# Prinzipien – Warum dieses Template so gebaut ist

Destilliert aus 5 Repos + 4 Instagram Reels (AI App / Website Best Practices).

## 1) thinking-orbs – AI muss Denken zeigen
- 9 Verben statt 1 Spinner: `working/searching/solving/listening/connecting/weaving/composing/breathing/shaping`
- Monochrom + Canvas (kein WebGL/Filter) → identische Pixel überall, billig auf Low-End
- Auto Theme: `data-theme`/`dark` class → `prefers-color-scheme`, live via MutationObserver
- Performance: shared clock, DPR cap 2, pausiert offscreen + hidden tab, `prefers-reduced-motion` = statisch
- A11y: `role="img"` + per-state aria-label
- **Regel**: Für AI immer `AIStatus`/`AgentThinkingOrb` nutzen, nicht generischen Loader.

## 2) react-spring – Bewegung fühlt sich echt an
- Spring-Physik > Dauer/Easing. `tension/friction` statt `duration`
- Declarative (`useSpring`) und imperative (`api.start`) – beides erlauben
- Cross-platform (web/three), interruptible
- **Regel**: `config.gentle` für Cards, `stiff` für Lists, `wobbly` für playful. Keine CSS-transition Hacks für AI-Interaktion.

## 3) watermelon-platform – Entdeckbarkeit & Distribution
- File-based MDX unter `src/data/contents` (animated-components/registry/blocks/dashboards)
- Shadcn Registry: copy-paste, Code lebt beim Consumer, voll editierbar
- SEO: `sitemap.xml` generieren aus Content Model
- AI Surfaces: `/llms.txt`, `/openapi.json`, `/api/catalog/*`, MCP Tools (search/retrieve/inspiration)
- Multi-Agent: `.claude-plugin`, `.codex-plugin`, `.cursor-plugin`, `skills/`
- Stack: React 19, Vite, Tailwind 4, Motion, Bun
- **Regel**: Jede Komponente bekommt MDX + Preview + Registry JSON. Discovery Files immer aktuell halten.

## 4) Univer – Office als Hülle für Agents
- Isomorph: Browser UI + Node headless gleiche Facade (`FUniver`, `FWorkbook`, `FRange`)
- Plugin: jedes Feature ist Plugin – compose/replace/lazy-load
- Preset (schnell) vs Plugin Mode (Kontrolle, Bundle-Größe)
- Canvas Rendering + eigene Formula Engine → schnell bei großen Sheets
- Worktree: Agent in isoliertem Draft, Mensch reviewed via Screenshot/Inspection
- **Regel**: Für AI-Features headless nutzen (Massen-Generierung, Validierung), UI nur als Preview.

## 5) BrowserSkill – Agent im echten Browser
- `bsk` CLI + Extension = Agent Window (eigenes Fenster) teilt Login-State
- Borrowed Tab nur mit Confirm, danach zurückgeben (`session stop`)
- Debugging: Requests, Console, Performance, Evidence JSON Export
- Privacy: kein Mandatory Cloud, Audit lokal unter `BSK_HOME/audit`, Secrets gefiltert aber nicht garantiert
- Remote Pairing: Agent auf Server, Browser lokal
- **Regel**: Immer Session lifecycle einhalten, Evidence vor Share bereinigen.

## 6) Instagram Reels – AI App UX (extrapoliert, Reels blockiert)
Typische Aussagen in den 4 Reels – hier als Checkliste für jede App/Website:

### Streaming & Perceived Performance
- Token-Streaming statt Spinner, optimistic UI, Undo statt Confirm
- Skeleton + ThinkingOrb während Tool-Calls, nicht leer lassen

### Explainability
- Thinking einklappbar (`<details>`), Tool-Timeline, Quellen als Inline-Zitate
- 9 States nutzen um zu zeigen *was* gerade passiert (searching vs solving)

### Human-in-the-Loop
- Jeder Schritt abbrechbar/editierbar/approvbar, Agent fragt nur bei kritischen Aktionen
- Glassmorphism/Dotted Grid/Verlauf nur dezent – Inhalt vor Dekoration

### Conversion & Vertrauen
- Klare CTA, weniger Felder, Social Proof, Performance (Lighthouse, DPR cap)
- Dark/Light korrekt, reduzierte Bewegung respektieren

---

## Wie ein Agent dieses Repo nutzen soll
1. `AGENTS.md` lesen
2. `skills/*/SKILL.md` je nach Aufgabe laden (thinking-orbs, react-spring, univer, browser-skill)
3. `src/components/ai/*` als Copy-Paste Basis nutzen
4. `docs/ARCHITECTURE.md` für Stack-Entscheidungen
