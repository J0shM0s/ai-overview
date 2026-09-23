import { useEffect, useRef } from "react";
import { createSheet } from "@/lib/univer";

export function UniverEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const api = createSheet(ref.current);
    return () => api.dispose();
  }, []);
  return <div ref={ref} style={{ height: 420 }} className="rounded-xl border overflow-hidden" />;
}
