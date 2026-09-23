/**
 * react-spring Pattern: spring-physics statt duration/easing
 * - fluid, interruptible, natürlich
 * - declarative (useSpring) + imperative (api.start) möglich
 */
import { animated, useSpring, useTrail, config } from "@react-spring/web";
import { useState } from "react";

export function SpringCard({ children }: { children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  const styles = useSpring({
    scale: hover ? 1.02 : 1,
    y: hover ? -4 : 0,
    boxShadow: hover ? "0 12px 32px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)",
    config: config.gentle,
  });
  return (
    <animated.div
      style={styles}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="rounded-xl border bg-background p-6"
    >
      {children}
    </animated.div>
  );
}

export function StaggeredList({ items }: { items: string[] }) {
  const trail = useTrail(items.length, {
    from: { opacity: 0, y: 12 },
    to: { opacity: 1, y: 0 },
    config: config.stiff,
  });
  return (
    <>
      {trail.map((style, i) => (
        <animated.div key={i} style={style} className="rounded-lg border p-3 bg-muted/50">
          {items[i]}
        </animated.div>
      ))}
    </>
  );
}

export function FadeIn({ children, visible }: { children: React.ReactNode; visible: boolean }) {
  const styles = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 12,
    config: { tension: 280, friction: 30 },
  });
  return <animated.div style={styles}>{children}</animated.div>;
}
