# mcp – Model Context Protocol (USB-C für Tools)

> Quellen: `wong2/awesome-mcp-servers`, `mcpHQ/awesome-mcp-servers`, `ANVEAI/awesome-mcp-servers`, `modelcontextprotocol` official

## Was
Offener Standard (Anthropic) – ein MCP Server, viele Clients (Claude Desktop, Cursor, Zed, VS Code, OpenClaw, Claude Code). Ersetzt N Integrationen durch eine.

## Offizielle Server (sofort nutzbar)
```bash
npx @modelcontextprotocol/server-filesystem /allowed
npx @modelcontextprotocol/server-github
npx @modelcontextprotocol/server-postgres
npx @modelcontextprotocol/server-puppeteer
npx @modelcontextprotocol/server-brave-search
npx @modelcontextprotocol/server-fetch
# Config in claude_desktop_config.json / .cursor/mcp.json
```

## Kategorien (aus awesome lists)
DB/Storage (postgres, sqlite, redis), DevTools (github, git, gitlab), Browser/Search (puppeteer, brave), Filesystem/Docs, Cloud/Infra, Comms (slack, discord), AI/Memory (crewai, langgraph), Voice (elevenlabs, whisper, assemblyai)

## Im Repo
`mcp/server.ts` – Stub mit Tools `catalog_search`, `browser_navigate`, `office_headless_calc`. Für Prod an `@modelcontextprotocol/sdk` anbinden:
```ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
const server = new McpServer({ name: "ai-overview", version: "1.0.0" });
server.tool("catalog_search", { query: z.string() }, async ({ query }) => ({ content: [{ type: "text", text: query }] }));
```

## Wahl-Hilfe
Nicht selbst bauen – in awesome Listen suchen, dann `clawhub install <server>` oder `npx`. Discovery Listen sind täglich neu gerankt.
