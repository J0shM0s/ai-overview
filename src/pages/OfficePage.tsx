import { UniverEmbed } from "@/components/ai/UniverEmbed";

export default function OfficePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Office – Univer</h1>
      <p className="text-sm text-muted-foreground">
        Embed: Spreadsheet/Docs als Plugin-Hülle. Agent kann gleichzeitig headless rechnen – gleiche Facade API.
        Preset Mode hier, Plugin Mode siehe <code>src/lib/univer.ts</code>.
      </p>
      <UniverEmbed />
      <div className="rounded-xl border p-4 text-sm bg-muted/30">
        <p className="font-medium">Agent Workflow (Worktree)</p>
        <ol className="list-decimal ml-5 mt-2 space-y-1 text-muted-foreground">
          <li>Agent editiert isoliert: <code>FRange.setValue</code>, Formeln, Validierung</li>
          <li>Verifikation: <code>observe</code> + Screenshot (<code>bsk screenshot</code>)</li>
          <li>Mensch reviewed Worktree → merge</li>
        </ol>
      </div>
    </div>
  );
}
