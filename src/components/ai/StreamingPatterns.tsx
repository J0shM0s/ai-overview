/**
 * Streaming Patterns – 7 Patterns aus vibeacademy/streaming-patterns + arablex/llm-ux-patterns
 * Copy-paste ready. Jeder Pattern mit mock streaming, SSE contract, UI Technik.
 */
import { useState, useEffect } from "react";
import { AgentThinkingOrb } from "./ThinkingOrbState";
import { animated, useSpring } from "@react-spring/web";

export function ChainOfReasoning({ steps = ["Verstehe Aufgabe", "Suche Quellen", "Synthetisiere Antwort"] }: { steps?: string[] }) {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setVisible((v) => Math.min(v + 1, steps.length)), 600);
    return () => clearInterval(id);
  }, [steps.length]);
  return (
    <div className="space-y-2 border-l-2 border-primary/20 ml-3 pl-4">
      {steps.map((s, i) => (
        <div key={i} className={`flex gap-2 text-sm ${i < visible ? "opacity-100" : "opacity-30"}`}>
          <span className={`mt-1 size-2 rounded-full ${i < visible ? "bg-primary animate-pulse" : "bg-muted"}`} />
          {s} {i < visible && <AgentThinkingOrb state="solving" size={20} />}
        </div>
      ))}
    </div>
  );
}

export function ValidationCheckpoint({ onApprove }: { onApprove: (v: "approve" | "edit" | "reject") => void }) {
  const [sec, setSec] = useState(30);
  useEffect(() => {
    const id = setInterval(() => setSec((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rounded-xl border bg-amber-50 dark:bg-amber-950/20 p-4 text-sm">
      <p className="font-medium">Checkpoint – Budget Freigabe</p>
      <p className="text-muted-foreground">Agent pausiert. Prüfen und freigeben.</p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => onApprove("approve")} className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs">Approve</button>
        <button onClick={() => onApprove("edit")} className="rounded-full border px-3 py-1 text-xs">Edit</button>
        <button onClick={() => onApprove("reject")} className="rounded-full border px-3 py-1 text-xs">Reject</button>
        <span className="ml-auto text-xs text-muted-foreground">{sec}s</span>
      </div>
    </div>
  );
}

export function CostSurface() {
  return (
    <div className="rounded-xl border p-4 text-sm">
      <p className="font-medium">Cost Surface (aus llm-ux-patterns Pattern 3)</p>
      <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
        <div className="rounded bg-muted p-2">MTD: $42.30<br /><span className="text-muted-foreground">Forecast $61 vs $80 budget</span></div>
        <div className="rounded bg-muted p-2">Per run: $0.12<br /><span className="text-muted-foreground">chat 70% / search 30%</span></div>
        <div className="rounded bg-muted p-2">Teuerstes Tool: web_search<br /><span className="text-muted-foreground">42% der Kosten</span></div>
      </div>
    </div>
  );
}

export function TabularStream() {
  const rows = [
    { name: "Alice", role: "PM", load: "80%" },
    { name: "Bob", role: "Eng", load: "60%" },
    { name: "Carol", role: "Design", load: "90%" },
  ];
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setShown((s) => Math.min(s + 1, rows.length)), 400);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rounded-xl border overflow-hidden text-sm">
      <table className="w-full">
        <thead className="bg-muted text-xs"><tr><th className="p-2 text-left">Name</th><th className="p-2">Role</th><th className="p-2">Load</th></tr></thead>
        <tbody>{rows.slice(0, shown).map((r) => <tr key={r.name} className="border-t"><td className="p-2">{r.name}</td><td className="p-2 text-center">{r.role}</td><td className="p-2 text-center">{r.load}</td></tr>)}
          {shown < rows.length && <tr><td colSpan={3} className="p-2 text-center text-muted-foreground">streaming…</td></tr>}
        </tbody>
      </table>
    </div>
  );
}

export function StreamingShell({ children, streaming }: { children: React.ReactNode; streaming: boolean }) {
  const style = useSpring({ opacity: streaming ? 0.7 : 1 });
  return <animated.div style={style}>{children}</animated.div>;
}
