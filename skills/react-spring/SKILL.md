# react-spring – Spring Physics Animation

> Quelle: pmndrs/react-spring – cross-platform, spring-first

## Prinzip
Spring > Duration. Fluid, interruptible, natürlich. Nutze `config.gentle / stiff / wobbly`.

## Snippets
```tsx
import { animated, useSpring, useTrail, config } from "@react-spring/web";

// Fade
const styles = useSpring({ opacity: visible ? 1 : 0, y: visible ? 0 : 12 });

// Trail
const trail = useTrail(items.length, { from: { opacity: 0, y: 12 }, to: { opacity: 1, y: 0 } });

// Hover
const [hover, setHover] = useState(false);
const s = useSpring({ scale: hover ? 1.02 : 1, config: config.gentle });
```

## Wann nutzen
- Card hover, List stagger, Page transitions, Chat message fade-in
- Interaktive Drag/Slider (imperative `api.start`)

## Im Repo
`src/components/ai/AnimatedCard.tsx` -> SpringCard, StaggeredList, FadeIn
