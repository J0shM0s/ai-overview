/**
 * ThinkingOrb wrapper – Prinzipien aus jakubantalik/thinking-orbs
 * - 9 States = 9 Agent-Verben
 * - Monochrom, Canvas, kein WebGL/SVG Filter
 * - auto dark/light via data-theme / prefers-color-scheme
 * - pausiert offscreen + bei prefers-reduced-motion
 * - shared clock, DPR cap 2, SSR-safe
 */
import { ThinkingOrb } from "thinking-orbs";
import type { ComponentProps } from "react";

export type AgentState =
  | "working"
  | "searching"
  | "solving"
  | "listening"
  | "connecting"
  | "weaving"
  | "composing"
  | "breathing"
  | "shaping";

type Props = Omit<ComponentProps<typeof ThinkingOrb>, "state" | "size"> & {
  state: AgentState;
  size?: 20 | 64;
};

const labels: Record<AgentState, string> = {
  working: "Arbeite am Ergebnis …",
  searching: "Durchsuche Quellen …",
  solving: "Löse das Problem …",
  listening: "Höre zu …",
  connecting: "Verbinde Daten …",
  weaving: "Verknüpfe Inhalte …",
  composing: "Formuliere Antwort …",
  breathing: "Bereit",
  shaping: "Forme die Ausgabe …",
};

export function AgentThinkingOrb({ state, size = 64, ...rest }: Props) {
  return <ThinkingOrb state={state} size={size} aria-label={labels[state]} {...rest} />;
}

/**
 * Streaming AI Bubble – zeigt automatisch den passenden Orb
 * mapping: tool-call -> searching, reasoning -> solving, generating -> composing
 */
export function AIStatus({ status }: { status: "idle" | "thinking" | "tool" | "streaming" | "done" }) {
  if (status === "idle" || status === "done") return null;
  const map = {
    thinking: "solving",
    tool: "searching",
    streaming: "composing",
  } as const;
  const orbState = map[status as keyof typeof map] ?? "working";
  return (
    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
      <AgentThinkingOrb state={orbState as AgentState} size={20} />
      <span>{labels[orbState as AgentState]}</span>
    </div>
  );
}
