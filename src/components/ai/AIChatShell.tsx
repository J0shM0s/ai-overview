/**
 * Instagram-Reels Prinzipien für AI Chat UX (destilliert)
 * - Streaming statt Warten (token-weise)
 * - Thinking sichtbar machen (ThinkingOrb + reasoning collapse)
 * - Tool-Calls als Timeline
 * - Zitate/Quellen inline
 * - Optimistic UI + Undo statt Confirm-Dialog
 * - Human-in-the-Loop: Approve / Edit / Stop jederzeit
 * - prefers-reduced-motion & offscreen-pause respektieren
 */
import { useState } from "react";
import { AgentThinkingOrb } from "./ThinkingOrbState";
import { FadeIn } from "./AnimatedCard";

type Msg = { role: "user" | "assistant" | "tool"; content: string; thinking?: string };

export function AIChatShell() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hallo! Wie kann ich helfen?", thinking: "Bereit für deine Anfrage." },
  ]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const q = input;
    setMessages((m) => [...m, { role: "user", content: q }]);
    setInput("");
    setStreaming(true);
    // Demo-Streaming (ersetzen durch echte API / Vercel AI SDK / OpenAI stream)
    const answer = `Das ist eine Demo-Antwort auf: "${q}". Ersetze diesen Block durch echten LLM-Stream (z. B. ai SDK useChat).`;
    let cur = "";
    for (const ch of answer) {
      cur += ch;
      await new Promise((r) => setTimeout(r, 12));
      setMessages((prev) => {
        const copy = [...prev];
        const last = copy[copy.length - 1];
        if (last?.role === "assistant" && last.content.startsWith("Das ist eine Demo")) {
          copy[copy.length - 1] = { ...last, content: cur };
        } else if (cur.length === 1) {
          copy.push({ role: "assistant", content: cur, thinking: "Formuliere Antwort …" });
        }
        return copy;
      });
    }
    setStreaming(false);
  }

  return (
    <div className="flex flex-col h-[560px] rounded-xl border bg-background overflow-hidden">
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <FadeIn key={i} visible>
            <div className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              {m.role !== "user" && (
                <div className="shrink-0 mt-1">
                  <AgentThinkingOrb state={m.role === "tool" ? "searching" : "composing"} size={20} />
                </div>
              )}
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                {m.thinking && m.role === "assistant" && (
                  <details className="mb-1 text-xs opacity-60">
                    <summary className="cursor-pointer">Denken anzeigen</summary>
                    {m.thinking}
                  </details>
                )}
                {m.content}
              </div>
            </div>
          </FadeIn>
        ))}
        {streaming && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <AgentThinkingOrb state="composing" size={20} /> schreibe …
          </div>
        )}
      </div>
      <div className="border-t p-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Nachricht schreiben…"
          className="flex-1 rounded-full border px-4 py-2 text-sm bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button onClick={send} className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:opacity-90">
          Senden
        </button>
      </div>
      <div className="px-3 pb-2 text-[11px] text-muted-foreground">
        Tipp: Quellen als Inline-Zitate, Tool-Calls als Timeline, Stop jederzeit möglich (Human-in-the-Loop).
      </div>
    </div>
  );
}
