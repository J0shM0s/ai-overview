# univer – Office Harness für AI Agents

> Quelle: dream-num/univer – Sheets, Docs, Slides, Bases, PDF – Browser + Node (headless) gleiche Facade API

## Zwei Modi
- **Preset Mode**: schnell, `createUniver({ presets: [UniverSheetsCorePreset()] })` – für MVP
- **Plugin Mode**: manuell `registerPlugin()` – volle Kontrolle, Lazy Loading, kleine Bundles

## Schnellstart (Preset)
```ts
import { createUniver, LocaleType, mergeLocales } from "@univerjs/presets";
import { UniverSheetsCorePreset } from "@univerjs/preset-sheets-core";
import UniverPresetSheetsCoreEnUS from "@univerjs/preset-sheets-core/locales/en-US";
import "@univerjs/preset-sheets-core/lib/index.css";

const { univerAPI } = createUniver({
  locale: LocaleType.EN_US,
  locales: { [LocaleType.EN_US]: mergeLocales(UniverPresetSheetsCoreEnUS) },
  presets: [UniverSheetsCorePreset({ container: "app" })],
});
univerAPI.createWorkbook({});
```

## Agent Workflows
1. **Programmatisch editieren**: `FWorkbook`, `FRange`, `FUniver` Facade
2. **Verifizieren**: `univerAPI` Inspection + Screenshot (headless oder `bsk screenshot`)
3. **Worktree**: Agent arbeitet in isoliertem Draft, Mensch merged

## Headless (Node)
Gleiche Logik ohne UI – für Automatisierung, Tests, Massen-Generierung.
Siehe `src/lib/univer.headless.example.ts` und `src/lib/univer.ts`.

## Im Repo
- `src/components/ai/UniverEmbed.tsx` – Live Beispiel
- `src/lib/univer.ts` – Preset Wrapper
