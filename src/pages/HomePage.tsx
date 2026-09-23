import { AgentThinkingOrb } from "@/components/ai/ThinkingOrbState";
import { SpringCard, StaggeredList } from "@/components/ai/AnimatedCard";
import { AIChatShell } from "@/components/ai/AIChatShell";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <div className="rounded-2xl border bg-gradient-to-br from-primary/5 via-background to-muted p-8">
        <div className="flex flex-wrap gap-3 mb-4">
          <AgentThinkingOrb state="working" size={20} />
          <AgentThinkingOrb state="searching" size={20} />
          <AgentThinkingOrb state="solving" size={20} />
          <AgentThinkingOrb state="composing" size={20} />
          <span className="text-sm text-muted-foreground self-center">— 9 Thinking States, theme auto, reduced-motion safe</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">Universal AI App Starter</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Dieses Repo bündelt alles Wichtige für deine nächsten AI Apps & Websites. Gib es als Referenz an jeden Agent:
          <code className="mx-1 px-1.5 py-0.5 rounded bg-muted text-sm">github:moser/ai-overview</code>
          – der Agent findet alle Patterns, Skills und Docs automatisch.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link to="/components" className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm">Components ansehen</Link>
          <Link to="/office" className="rounded-full border px-4 py-2 text-sm">Univer Office</Link>
          <Link to="/agent" className="rounded-full border px-4 py-2 text-sm">BrowserSkill Agent</Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <SpringCard><h3 className="font-medium">🎨 AI-UX</h3><p className="text-sm text-muted-foreground mt-1">Thinking-Orbs, Spring Physics, Streaming Chat, Tool-Timeline, Zitate.</p></SpringCard>
        <SpringCard><h3 className="font-medium">📊 Office</h3><p className="text-sm text-muted-foreground mt-1">Univer Sheets/Docs – isomorph, Facade API, headless für Agents.</p></SpringCard>
        <SpringCard><h3 className="font-medium">🤖 Agent</h3><p className="text-sm text-muted-foreground mt-1">BrowserSkill (bsk), MCP, Skills, sitemap, llms.txt, openapi.</p></SpringCard>
      </div>

      <div>
        <h2 className="font-medium mb-3">Was dieses Template mitbringt (aus den Repos)</h2>
        <StaggeredList
          items={[
            "thinking-orbs: 9 monochrome Canvas States, offscreen-pause, shared clock (a11y + perf)",
            "react-spring: spring-first, gentle/stiff, declarative + imperative, cross-platform",
            "watermelon-platform: file-based MDX, shadcn registry, llms.txt/openapi/sitemap, Motion + Tailwind4",
            "univer: plugin-Hülle, Preset vs Plugin Mode, Worktree, Verification via Screenshot",
            "BrowserSkill: echter Browser (bsk CLI), Agent Window, Debugging Evidence, Privacy",
            "Reels-Prinzipien: Streaming, Thinking sichtbar, Human-in-the-Loop, optimistic UI, citations",
          ]}
        />
      </div>

      <div>
        <h2 className="font-medium mb-3">Live Demo: AI Chat Shell</h2>
        <AIChatShell />
      </div>
    </div>
  );
}
