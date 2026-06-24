# Way of Work

**Repository:** `https://github.com/Way-Of/wayofwork`

A work planning and organizational platform for construction teams. Track tasks, manage projects, communicate via Telegram/WhatsApp, collaborate with AI agents. Built with Bun + React. Chat-powered via Wo Agent runtime. SQLite database per tenant.

## Quick Start

```bash
git clone https://github.com/Way-Of/wayofwork
cd wayofwork
cp .env.example .env
bun install
bun run dev
```

Open `http://localhost:5173` — default login `admin` / `admin`.

## Features

- Simple mode (AI orchestrator chat)
- Claw mode (autonomous agent shell)
- Workboard (time, tasks, team activity)
- Kanban (drag-and-drop project boards)
- TA-Planner (Trafikverket API integration)
- OptiCat (HVAC dashboard and simulator)
- Pricing & Offers (cost estimation, invoicing)
- Admin Console (users, tenants, audit logs)
- Telegram/WhatsApp bots
- Desktop app (Electron)

## Architecture

```
server/     — Bun backend (API, WebSocket, SQLite)
src/        — React 19 + Tailwind frontend
shared/     — Types + i18n locales
.wo/        — Agent & skill definitions
electron/   — Desktop shell
```

## Agents

| Agent | Role |
|-------|------|
| orchestrator | Main chat dispatcher |
| claw | Autonomous scheduling |
| projektledare | Project management |
| fakturering | Billing & invoicing |
| ta-planner | Traffic arrangements |
| opticat-designer | HVAC design |
| maskinchef | Logistics |

## Environment

| Variable | Default | Description |
|----------|---------|-------------|
| `WOP_SERVER_PORT` | `3333` | API server port |
| `WOP_LLM_PROVIDER` | `ollama` | LLM backend |
| `OLLAMA_MODEL` | `qwen3.5:9b` | Default model |
