import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Overview" },
  { to: "/components", label: "Components" },
  { to: "/office", label: "Office (Univer)" },
  { to: "/agent", label: "Agent (BrowserSkill)" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">
            ai-overview <span className="text-muted-foreground font-normal">template</span>
          </Link>
          <nav className="flex gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm transition",
                  pathname === n.to ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8">{children}</main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        Nutze dieses Repo als <code>github: dein-user/ai-overview</code> Referenz in jedem neuen Projekt.
        Siehe <code>AGENTS.md</code> + <code>docs/PRINCIPLES.md</code>.
      </footer>
    </div>
  );
}
