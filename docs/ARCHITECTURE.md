# Architektur

## Stack
- React 19 + TypeScript (strict) + Vite 6
- Tailwind CSS 4 (`@tailwindcss/vite`) + Motion + react-spring
- React Router 7
- thinking-orbs, @univerjs/* (presets), zod

## Struktur
```
src/
  components/
    ai/         # ThinkingOrbState, AnimatedCard, AIChatShell, UniverEmbed
    ui/         # button, card – shadcn kompatibel
    layout/     # Layout, app-routes
  pages/        # Home, Components, Office, Agent
  lib/          # utils, univer.ts, univer.headless.example.ts
  data/contents # file-based MDX (watermelon Pattern) – hier Inhalte ablegen
skills/         # browser-skill, univer, thinking-orbs, react-spring – für Agents
mcp/            # server.ts – MCP Tools Stub
public/         # llms.txt, openapi.json, sitemap.xml
scripts/        # generate-sitemap, generate-registry, doctor
```

## Entscheidungen
- **Preset vs Plugin (Univer)**: Default Preset (schnell), bei Bundle-Optimierung auf Plugin Mode wechseln.
- **Animation**: react-spring für interaktive, Motion für einfache Transitions. Nicht mischen ohne Grund.
- **Thinking**: Immer ThinkingOrbs, nie generischer Spinner – 9 States geben Semantik.
- **Agent**: bsk Session Lifecycle strikt, Evidence Export für Debugging.
- **Discovery**: llms.txt + openapi.json + sitemap aus `src/data/contents` generieren – wie watermelon.

## Preset vs Plugin Mode (Univer)
| Modus | Wann | Start |
|-------|------|-------|
| Preset | MVP, wenig Config | `src/lib/univer.ts` |
| Plugin | Custom Bundle, Lazy, tiefe Integration | `docs/univer-plugin-mode.md` |
| Headless | Server/Agent, Massengenerierung | `src/lib/univer.headless.example.ts` |

## Content Model (watermelon)
`src/data/contents/{animated-components,registry,components,blocks,showcases,dashboards,templates}`
Route mapping: `src/components/layout/app-routes.tsx` (analog watermelon `app-routes.tsx`)
Sitemap: `scripts/generate-sitemap.ts` liest gleiches Model.

## MCP
`mcp/server.ts` – aktuell Stub. Für Produktion an `@modelcontextprotocol/sdk` anbinden.
Tools: `catalog_search`, `browser_navigate`, `office_headless_calc`.
