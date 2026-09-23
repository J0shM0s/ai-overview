# thinking-orbs – AI Thinking Indicators

> Quelle: jakubantalik/thinking-orbs – 9 States, 2 Größen, Canvas only

## States (Verben)
`working | searching | solving | listening | connecting | weaving | composing | breathing | shaping`

## Usage
```tsx
import { ThinkingOrb } from "thinking-orbs";
<ThinkingOrb state="searching" size={64} />
<ThinkingOrb state="composing" size={20} theme="auto" speed={1.2} />
```

## Regeln (aus Repo gelernt)
- Monochrom halten, `theme="auto"` (erkennt data-theme / prefers-color-scheme)
- `size` 64 (chat avatar) vs 20 (inline) – nicht skalieren, sind separat getuned
- A11y: `role="img"` + per-state aria-label, `prefers-reduced-motion` -> statisch
- Performance: shared clock, pausiert offscreen (IntersectionObserver) + tab hidden, DPR cap 2, nur 2D canvas arcs

## Wrapper im Repo
`src/components/ai/ThinkingOrbState.tsx` -> `AgentThinkingOrb` + `AIStatus` (streaming mapping)
