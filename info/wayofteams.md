# Way of Teams (WOTEAMS) — CTO Dashboard & AI Engineering Harness

**Repository:** `https://github.com/zerwiz/wayofteams`

Way of Teams is a CTO Dashboard and AI Engineering Harness built on Phoenix, Ash Framework, and Jido agents. It replaces fragmented engineering management tools with a single, unified platform that combines tickets, standups, skills tracking, notifications, ideas, news, agent workflows, and observability — all in one real-time dashboard.

## Stats

- **14** LiveView pages covering tickets, standups, skills, notifications, ideas, news, agent workflows, and CTO dashboard
- **6** Ash domains (Tickets, Accounts, Skills, Standups, Notifications, Insights)
- **7** projects synced via f-rr-d (WOMONO, WOW, WOC, OPT, OPTSITE, WOTEAMS, GLOBAL)
- **2** Jido agents (TicketManagerAgent, SkillAutoUpdateAgent)
- **Full** OpenTelemetry instrumentation across all layers

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Web | Phoenix 1.8 + LiveView 1.2 + Bandit 1.5 |
| Data | Ash Framework 3.29 + AshPostgres 2.10 |
| Agents | Jido 2.3 (agents + actions + signals) |
| Database | PostgreSQL 16 |
| Authentication | AshAuthentication 4.0 + GitHub OAuth |
| Observability | OpenTelemetry 1.5 |
| Frontend | HEEx templates + Custom CSS design system |
| API | AshJsonApi 1.6 |

## Quick Start

```bash
mix setup          # Get deps, create DB, migrate, seed
mix phx.server     # Start dev server at http://localhost:4000
mix test           # Run tests
mix credo          # Lint
mix precommit      # Full precommit check
```

## Architecture

Layered Phoenix LiveView architecture: Web Layer (LiveView SPA with 14 views), Component Layer (HEEx templates with custom CSS), Business Logic (Ash Framework domains with 6 resources), Agent Layer (Jido actions/agents/signals), Data Layer (AshPostgres on PostgreSQL 16), Observability (OpenTelemetry across all layers).

```
Web Layer (LiveView SPA — 14 views)
  │
  ▼
Business Logic (6 Ash Domains)
  ├── Tickets    → Ticket, Status
  ├── Accounts   → Developer
  ├── Skills     → Skill, Manifest
  ├── Standups   → Standup
  ├── Notifications → Notification
  └── Insights   → SkillReport
  │
  ▼
Agent Layer (Jido 2.3)
  ├── TicketManagerAgent    — ticket lifecycle management
  └── SkillAutoUpdateAgent  — auto-discover and sync skills
  │
  ▼
Data Layer (AshPostgres + PostgreSQL 16)
  │
  ▼
Observability (OpenTelemetry 1.5)
```

## LiveView Pages

- `/dashboard` — CTO command center with real-time metrics, team velocity, review queue, system health
- `/tickets` — Ticket list with filters, bulk ops, sync trigger
- `/tickets/:id` — Single ticket view + edit
- `/standups` — Developer standups
- `/skills` — Skills inventory
- `/notifications` — Notifications feed
- `/review-queue` — Review queue for CTO
- `/developers` — Kanban board filtered by developer
- `/my-view` — Per-developer ticket list + standups

## Product Features

### Tickets
Full ticket management with Ash resource lifecycle, status tracking, and GitHub integration. Tickets are synced from markdown files in the `thoughts/` f-rr-d repository into PostgreSQL, then displayed in LiveView pages.

### Standups
Async standup management with per-developer daily updates aggregated into team view.

### Skills & Insights
Skill matrix tracking with manifest system and automated SkillReport generation.

### Agent Workflows
Jido-powered AI agents for automated signal processing, notifications, and workflow orchestration (TicketManagerAgent, SkillAutoUpdateAgent).

### Ideas & News
Collaborative idea board and engineering news feed with Ash resources.

## Ticket Sync Architecture

Tickets flow from the `thoughts/` f-rr-d repository into the database and then to the UI:

```
thoughts/<project>/shared/tickets/<PREFIX>-NNN-DESC.md
             │
             ▼  (1) Sync.run() — pull f-rr-d repo via git
             │
             ▼  (2) parse_ticket_file() — extract frontmatter YAML
             │
             ▼  (3) upsert_ticket() — Ash upsert by (project_prefix, ticket_number)
             │
        ┌────┴────┐
        ▼         ▼
  PostgreSQL    Notification created
  tickets DB    ("Ticket Sync Complete")
        │
        ▼  (4) LiveViews read via Ash.read! (authorize?: false)
        │
   ┌────┴────────────┬──────────────┬──────────────┐
   ▼                 ▼              ▼              ▼
Dashboard       TicketsLive     MyViewLive    DevelopersLive
(summary stats)  (table+filter) (per-dev view)  (kanban board)
```

### Sync Module Details

- **Projects scanned**: `wayofmono`→`WOMONO`, `wow`→`WOW`, `woc`→`WOC`, `opticat`→`OPT`, `opticatsite`→`OPTSITE`, `wayofteams`→`WOTEAMS`, `global`→`GLOBAL`
- **Glob pattern**: `<project>/shared/tickets/*.md` (excludes `ticket-template.md`)
- **Filename parsing**: Regex `^<PREFIX>-(\d+)-` to extract ticket number
- **Frontmatter parser**: Simple key:value split between `---` delimiters
- **Developer resolution**: Matches frontmatter `assignee: @username` against `Developer.name`
- **Sync trigger**: Manual via `Wayofteams.Tickets.Sync.run()` or UI button on `/tickets` page
- **Upsert logic**: Finds existing by `(project_prefix, ticket_number)`; creates if missing, skips if exists

### Component Reference

| Layer | File | Role |
|-------|------|------|
| **Markdown source** | `thoughts/<project>/shared/tickets/<PREFIX>-NNN-DESC.md` | Authoritative ticket data |
| **Sync module** | `lib/wayofteams/tickets/sync.ex` | Pulls f-rr-d, parses frontmatter, upserts to DB |
| **DB schema** | `lib/wayofteams/tickets/ticket.ex` | Ash Resource defining `tickets` table |
| **Status reference** | `lib/wayofteams/tickets/status.ex` | Lookup table: id → name + color |
| **Ticket list UI** | `lib/wayofteams_web/live/tickets_live.ex` | Table with filters, bulk ops, sync trigger |
| **Ticket detail UI** | `lib/wayofteams_web/live/ticket_detail_live.ex` | Single ticket view + edit |
| **Dashboard** | `lib/wayofteams_web/live/dashboard_live.ex` | Summary stat cards, recent tickets |
| **My View** | `lib/wayofteams_web/live/my_view_live.ex` | Per-developer ticket list + standups |
| **Developers** | `lib/wayofteams_web/live/developers_live.ex` | Kanban board filtered by developer |
| **Review Queue** | `lib/wayofteams_web/live/review_queue_live.ex` | Tickets in review status |
| **In-App Create** | `lib/wayofteams_web/live/ticket_form_live.ex` | New ticket form (writes directly to DB) |

## Market & Business Model

**Target**: Engineering teams of 10-100 developers at technology companies modernizing their development workflows.

**Competitors**: Linear, Jira, Asana/Monday.com, Geekbot/Standuply, Datadog/New Relic.

**Licensing**: Proprietary — Way of Teams is a WAY OF tool (internal platform).

**Investment**: Seeking $750K at $4M pre-money valuation.

## Links

- [GitHub Repository](https://github.com/zerwiz/wayofteams)
- [f-rr-d Thoughts](https://github.com/Way-Of/f-rr-d)
- [AI Engineering Harness](https://github.com/Way-Of/wayofmono)
