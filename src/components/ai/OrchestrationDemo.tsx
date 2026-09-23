/**
 * Orchestration Demo – 7 Patterns aus uid4oe/agent-orchestration-patterns
 */
import { useState } from "react";
import { AgentThinkingOrb } from "./ThinkingOrbState";

const patterns = [
  { id: "router", label: "Router", desc: "Intent → Specialist" },
  { id: "pipeline", label: "Pipeline", desc: "researcher→writer→editor" },
  { id: "supervisor", label: "Supervisor", desc: "plant → dispatch → review/retry" },
  { id: "debate", label: "Debate", desc: "bull/bear + judge" },
  { id: "swarm", label: "Swarm", desc: "peer handoffs" },
  { id: "map-reduce", label: "Map-Reduce", desc: "fan-out → merged" },
  { id: "reflection", label: "Reflection", desc: "generate-critique-revise" },
] as const;

export function OrchestrationDemo() {
  const [active, setActive] = useState<string>("supervisor");
  const [trace, setTrace] = useState<string[]>([]);
  function run() {
    setTrace([]);
    const steps = ["Planning subtasks…", "Spawning workers…", "Reviewing quality…", "Retrying failed step…", "Done ✓"];
    steps.forEach((s, i) => setTimeout(() => setTrace((t) => [...t, s]), i * 600));
  }
  return (
    <div className="rounded-xl border p-4 space-y-3">
      <p className="font-medium text-sm">Orchestration – 7 Patterns</p>
      <div className="flex flex-wrap gap-1.5">
        {patterns.map((p) => (
          <button key={p.id} onClick={() => setActive(p.id)} className={`rounded-full px-3 py-1 text-xs border ${active === p.id ? "bg-primary text-primary-foreground" : "bg-muted"}`} title={p.desc}>{p.label}</button>
        ))}
      </div>
      <button onClick={run} className="rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-sm">Run {active} (Live Trace)</button>
      <div className="rounded bg-muted p-3 text-xs font-mono space-y-1 min-h-24">
        {trace.length === 0 ? <span className="text-muted-foreground">Trace erscheint hier – SSE live…</span> : trace.map((t, i) => <div key={i} className="flex gap-2"><AgentThinkingOrb state="working" size={20} />{t}</div>)}
      </div>
      <p className="text-[11px] text-muted-foreground">Siehe `skills/orchestration` + humanlayer 12-Factor: small focused agents (3-10 steps).</p>
    </div>
  );
}
