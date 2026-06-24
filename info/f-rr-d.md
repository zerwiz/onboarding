# f-rr-d (förråd) — Centralized Thoughts Storage

**Repository:** `https://github.com/Way-Of/f-rr-d`

Centralized repository for all thoughts, tickets, plans, research, and personal TODOs across Way-Of projects.

## Projects

| Project | Folder | Namespace |
|---------|--------|-----------|
| WayOfMono | `thoughts/wayofmono/` | WOMONO |
| WayOfWork (WoW) | `thoughts/wow/` | WOW |
| Opticat | `thoughts/opticat/` | OPT |

## Structure

```
thoughts/
├── global/
├── shared/
│   ├── tickets/ticket-template.md
│   ├── plans/
│   └── research/
├── wayofmono/   (WOMONO-XXX)
│   ├── global/  shared/  craig/  andre/  tomas/  zerwiz/
├── wow/         (WOW-XXX)
│   ├── global/  shared/  craig/  andre/  tomas/  zerwiz/
└── opticat/     (OPT-XXX)
    ├── global/  shared/  craig/  andre/  tomas/  zerwiz/
```

## Usage

```bash
git clone https://github.com/Way-Of/f-rr-d.git thoughts/
```
Each project reads/writes to its own `thoughts/<project-slug>/`. Branch naming: `<project-slug>/<namespace>/<ticket-id>-<short-desc>`
