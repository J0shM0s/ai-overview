# rag – Retrieval Augmented Generation production-ready

> Quellen: `SerhiiMelnikov/rag-boilerplate`, `lebaocongct/fastapi-rag-template`, `moalsayed95/pgrag`, `EdisonTKPcom/agentic-rag-starter`, `vercel-labs/knowledge-agent-template`

## Scaffold statt selbst bauen
```bash
npx rag-boilerplate my-rag --providers openai,anthropic --vector-store pgvector
# wählt Provider + Vector Store (pgvector/qdrant/chroma/weaviate/pinecone), generiert Next.js + Drizzle + Admin + Image RAG
```

## Wann welcher Store?
- **pgvector** (Postgres `vector(1536)` HNSW) – Daten liegen eh in Postgres, bis ~10M Vektoren, eine Transaktion, ein Backup, SQL Filter. Default.
- **Qdrant** – Self-host, schnell, Filter komplex
- **Pinecone** – Managed, teuer, einfach
- **Chroma** – Lokal simpel
- **Weaviate/Milvus** – große Skalierung

## Production Pipeline
1. Ingest: PDF/DOCX/MD → parse → chunk 900-1000 chars, overlap 150-200 → embed (OpenAI `text-embedding-3-small` 1536d) → Store
2. Retrieval: Hybrid (vector + BM25 keyword) → rerank (LLM) → top-K 5-10
3. Generation: Kontext + Frage → LLM → Citations `[1][2]` + Source Cards + SEC Links Analogon
4. Eval: `eval/run_eval.py` – hit-rate, latency, cost; memory store als stand-in für Tests

## Agentic RAG (beyond retrieve+answer)
Agent plant Steps, ruft Tools, self-verifies. Ingestion paths getrennt (z.B. Qdrant für PDF, Supabase pgvector für CSV), Intent Router entscheidet Pfad. Guardrails: PII filter, prompt safety.

## Alternative ohne Embeddings
Vercel Sandbox file-system RAG: grep/find/cat über snapshot repo, pooled sandboxes <100ms.

## Im Repo
`src/components/ai/RAGPanel.tsx` – Upload + Chunk Preview + Citations. `mcp/server.ts` `office_headless_calc` analog für RAG search.
