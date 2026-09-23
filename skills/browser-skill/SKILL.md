# browser-skill – Agent nutzt deinen echten Browser

> Quelle: tencent/BrowserSkill – CLI `bsk` + Extension (Chrome/Edge)

## Wann nutzen
- Seite lesen, Formular ausfüllen, Website testen, Screenshot/Evidence sammeln
- Debugging: Requests, Console, Performance mit Evidence-Export

## Setup (einmalig)
```bash
# CLI installieren
curl -fsSL https://raw.githubusercontent.com/Tencent/BrowserSkill/main/install.sh | sh
# Windows: irm https://raw.githubusercontent.com/Tencent/BrowserSkill/main/install.ps1 | iex
bsk install-skill  # wähle: claude / codex / cursor / opencode
bsk doctor        # prüft Extension + Daemon
```

## Session Pattern
```bash
bsk session start --no-focus --json   # -> session_id
bsk navigate https://example.com --session <id>
bsk observe --session <id>             # Text + Controls
bsk screenshot --session <id> --out page.png
bsk session stop <id>                  # immer stoppen! Borrowed Tabs werden zurückgegeben
```

## Regeln für Agents
- Arbeite im **Agent Window** (separates Fenster), nicht im User-Tab – es sei denn explizit erlaubt
- `Confirm before borrowing tabs` respektieren
- Evidence bei Debugging als JSON exportieren
- Kein Cloud-Zwang – Ergebnisse gehen nur an deinen Daemon/Agent

## Referenzen im Repo
- `docs/browserskill.md` (Detail-Anleitung)
- `mcp/server.ts` (Werkzeug `browser_navigate`)
