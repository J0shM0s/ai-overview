/**
 * RAG Panel – Upload → Chunk → Embed → Search → Citations
 * Pattern aus moalsayed95/pgrag + SerhiiMelnikov/rag-boilerplate
 */
import { useState } from "react";

type Chunk = { id: string; text: string; score: number; source: string };

export function RAGPanel() {
  const [q, setQ] = useState("");
  const [chunks, setChunks] = useState<Chunk[]>([]);
  const [answer, setAnswer] = useState("");

  function search() {
    // Demo – ersetzen durch echten /api/chat retrieval
    setChunks([
      { id: "1", text: "pgvector speichert Vektoren als VECTOR(1536) in Postgres – HNSW Index für ANN.", score: 0.92, source: "docs/rag.md" },
      { id: "2", text: "Hybrid search kombiniert vector + BM25, dann LLM reranking für Top-K.", score: 0.87, source: "docs/rag.md" },
    ]);
    setAnswer("Für kleine Corpora (<10M Vektoren) reicht **pgvector** in Postgres – ein Backup, ein Pool, SQL Filter. Darüber dedizierte Engine (Qdrant/Pinecone). Quellen: [1][2]");
  }

  return (
    <div className="rounded-xl border bg-background p-4 space-y-3">
      <p className="font-medium text-sm">RAG – Suche mit Citations</p>
      <div className="flex gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Frage über deine Docs…" className="flex-1 rounded-full border px-3 py-2 text-sm bg-muted/50" />
        <button onClick={search} className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm">Suchen</button>
      </div>
      {answer && <div className="rounded-lg bg-muted p-3 text-sm leading-relaxed">{answer}</div>}
      {chunks.length > 0 && (
        <div className="space-y-2">
          {chunks.map((c) => (
            <div key={c.id} className="rounded-lg border p-3 text-xs">
              <p className="font-mono text-[11px] text-muted-foreground">[{c.id}] {c.source} · score {c.score}</p>
              <p className="mt-1">{c.text}</p>
            </div>
          ))}
          <p className="text-[11px] text-muted-foreground">Eval: hit-rate / latency / cost – siehe `skills/rag` + `pgrag eval/`.</p>
        </div>
      )}
    </div>
  );
}
