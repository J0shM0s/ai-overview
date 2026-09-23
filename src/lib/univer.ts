/**
 * Univer – Office Harness for AI Agents (dream-num/univer)
 * - Isomorph: gleicher Facade Code im Browser & Node (headless)
 * - Plugin-Architektur: nur das laden was du brauchst
 * - Preset vs Plugin Mode
 * - Canvas Rendering + Formula Engine
 * - Worktree: Agent arbeitet isoliert, Mensch reviewed
 *
 * Dieses File zeigt PRESET Mode (schnell). Für volle Kontrolle siehe docs/univer-plugin-mode.md
 */
import { createUniver, LocaleType, mergeLocales } from "@univerjs/presets";
import { UniverSheetsCorePreset } from "@univerjs/preset-sheets-core";
import UniverPresetSheetsCoreEnUS from "@univerjs/preset-sheets-core/locales/en-US";
import "@univerjs/preset-sheets-core/lib/index.css";

export function createSheet(container: string | HTMLElement) {
  const { univerAPI } = createUniver({
    locale: LocaleType.EN_US,
    locales: { [LocaleType.EN_US]: mergeLocales(UniverPresetSheetsCoreEnUS) },
    presets: [UniverSheetsCorePreset({ container })],
  });
  // Leeres Workbook – ersetze durch echte Daten / Agent-Generierung
  univerAPI.createWorkbook({
    name: "AI Overview Demo",
    sheets: {
      sheet1: {
        name: "Tasks",
        cellData: {
          "0": { "0": { v: "Task" }, "1": { v: "Status" }, "2": { v: "Owner" } },
          "1": { "0": { v: "Landing bauen" }, "1": { v: "done" }, "2": { v: "AI" } },
          "2": { "0": { v: "Univer integrieren" }, "1": { v: "in progress" } },
        },
      },
    },
  });
  return univerAPI;
}

/**
 * Headless (Node) – gleiche API ohne UI:
 * import { Univer } from "@univerjs/core";
 * import { FUniver } from "@univerjs/core/facade";
 * // → Formel berechnen, Sheets als JSON lesen/schreiben, Agent-Workflows
 * siehe src/lib/univer.headless.example.ts
 */
