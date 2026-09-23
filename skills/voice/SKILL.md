# voice – Realtime Voice & Telephony Agents

> Quellen: `thabs1234/awesome-ai-agents-voice`, LiveKit Agents, Pipecat, Vocode, Bolna, Retell

## Stack Wahl
| Use Case | Nimm |
|----------|------|
| WebRTC Realtime + MCP | **LiveKit Agents** (Python/Node, turn detection, eval suite) |
| Vendor-neutral 40+ plugins (STT/LLM/TTS) | **Pipecat** |
| Telefon (Twilio/Plivo/SIP) | **Bolna** oder **Vocode** |
| Low-latency speech-to-speech | **OpenAI Realtime API** |
| Home Assistant | **Home Assistant Voice** |

## Protokolle
MCP (Anthropic), A2A (Google agent-to-agent), AG-UI (agent↔frontend), ACP (agent client), Function Calling (de-facto)

## STT/TTS
- STT: Whisper, Deepgram, AssemblyAI
- TTS: ElevenLabs (voice cloning), Carbon Voice
- Als MCP: `npx elevenlabs-mcp-server`, `npx whisper-mcp-server`, `clawhub install anvevoice`

## Im Repo
Noch kein Voice Demo – bei Bedarf `src/components/ai/VoicePanel.tsx` nach LiveKit `agent-starter-python` scaffolden.
