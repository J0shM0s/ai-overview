export default function AgentPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Agent – BrowserSkill + MCP</h1>
      <div className="rounded-xl border p-5 bg-muted/30 text-sm space-y-3">
        <p><span className="font-medium">bsk CLI</span> – verbindet Agent mit deinem echten, eingeloggten Browser (Extension).</p>
        <pre className="bg-background rounded-lg p-3 overflow-auto text-xs">
{`bsk session start --no-focus --json
bsk navigate https://example.com --session <id>
bsk observe --session <id>
bsk screenshot --session <id> --out out.png
bsk session stop <id>`}
        </pre>
        <p className="text-muted-foreground">Regeln: Agent Window nutzen, borrowed Tabs bestätigen lassen, Session immer stoppen.</p>
      </div>
      <div className="rounded-xl border p-5 text-sm">
        <p className="font-medium">MCP + Discovery</p>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-muted-foreground">
          <li><code>/llms.txt</code>, <code>/openapi.json</code>, <code>/sitemap.xml</code> – wie watermelon-platform</li>
          <li><code>mcp/server.ts</code> – tools: catalog_search, browser_navigate, office_headless_calc</li>
          <li>Multi-Agent Plugins: <code>.claude-plugin</code>, <code>.codex-plugin</code>, <code>.cursor-plugin</code> vorhanden</li>
        </ul>
      </div>
      <div className="rounded-xl border p-5 text-sm bg-amber-50 dark:bg-amber-950/20">
        <p className="font-medium">Privacy Hinweis</p>
        <p className="text-muted-foreground mt-1">Agent Window teilt Login-State – kein Sandbox. Nur vertrauten Agents Zugriff geben. Evidence kann Secrets enthalten – vor Export filtern.</p>
      </div>
    </div>
  );
}
