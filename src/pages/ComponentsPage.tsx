import { AgentThinkingOrb } from "@/components/ai/ThinkingOrbState";
import { SpringCard } from "@/components/ai/AnimatedCard";
import { ChainOfReasoning, CostSurface, TabularStream, ValidationCheckpoint } from "@/components/ai/StreamingPatterns";
import { GenerativeUIDemo } from "@/components/ai/GenerativeUI";
import { RAGPanel } from "@/components/ai/RAGPanel";
import { OrchestrationDemo } from "@/components/ai/OrchestrationDemo";

const states = ["working", "searching", "solving", "listening", "connecting", "weaving", "composing", "breathing", "shaping"] as const;

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Components</h1>
      <p className="text-sm text-muted-foreground">File-based unter <code>src/data/contents</code> – wie watermelon-platform. Registry via <code>npx shadcn add</code> verteilbar.</p>

      <section>
        <h2 className="font-medium mb-3">Thinking Orbs – alle 9 States</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {states.map((s) => (
            <SpringCard key={s}>
              <div className="flex flex-col items-center gap-2">
                <AgentThinkingOrb state={s} size={64} />
                <span className="text-xs font-mono">{s}</span>
                <AgentThinkingOrb state={s} size={20} />
              </div>
            </SpringCard>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">Größen 64 vs 20 sind separat getuned – nicht einfach skalieren. Theme auto.</p>
      </section>

      <section>
        <h2 className="font-medium mb-3">Spring Physics</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <SpringCard><p className="text-sm">Hover mich – <code>config.gentle</code>, interruptible, kein duration hack.</p></SpringCard>
          <SpringCard><p className="text-sm">Listen: <code>useTrail</code> stagger, wie auf Home.</p></SpringCard>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-medium">Streaming Patterns (vibeacademy + llm-ux-patterns)</h2>
        <ChainOfReasoning />
        <CostSurface />
        <TabularStream />
        <ValidationCheckpoint onApprove={() => alert("approved")} />
      </section>

      <section>
        <h2 className="font-medium mb-3">Generative UI – Registry Pattern</h2>
        <GenerativeUIDemo />
      </section>

      <section>
        <h2 className="font-medium mb-3">RAG – Citations</h2>
        <RAGPanel />
      </section>

      <section>
        <h2 className="font-medium mb-3">Orchestration – 7 Patterns</h2>
        <OrchestrationDemo />
      </section>
    </div>
  );
}
