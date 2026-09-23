/**
 * MCP Server – Watermelon-Prinzip: machine-readable für Agents
 * Exponiert: search, catalog, sitemap
 * Basis: BrowserSkill + Univer Skills liegen unter skills/
 */
import { readFileSync } from "node:fs";

type Tool = { name: string; description: string; handler: (args: unknown) => unknown };

const tools: Tool[] = [
  {
    name: "catalog_search",
    description: "Suche Komponenten/Blocks im Katalog (src/data/contents)",
    handler: ({ query }: any) => ({ results: [`Treffer für: ${query}`, "AnimatedCard", "ThinkingOrb", "UniverEmbed"] }),
  },
  {
    name: "browser_navigate",
    description: "BrowserSkill: navigiere (via bsk CLI)",
    handler: ({ url }: any) => ({ ok: true, url, hint: "Nutze `bsk navigate --session <id> <url>`" }),
  },
  {
    name: "office_headless_calc",
    description: "Univer headless: Formel berechnen",
    handler: ({ formula }: any) => ({ formula, result: "42 (demo)" }),
  },
];

console.log(JSON.stringify({ tools: tools.map((t) => ({ name: t.name, description: t.description })) }, null, 2));

// Für echten MCP: an @modelcontextprotocol/sdk anbinden
// Dieser Stub zeigt die Werkzeug-Oberfläche – ersetze durch echte SDK Implementierung.
