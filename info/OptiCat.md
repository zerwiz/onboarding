# Opticat: HVAC Service Pro

**Repository:** `https://github.com/Way-Of/OptiCat`

Comprehensive HVAC Design, Simulation, and Field Service Application built with Flutter. Offline-first architecture for reliability in limited-connectivity environments.

## Modules

- **Projektering (Design & Simulation)** — CAD-like canvas with custom CFD physics engine for airflow, pressure drop, and acoustic calculations (ASHRAE, VDI 2081).
- **Injustering (Balancing)** — Measurement and adjustment of real-world airflows.
- **Inventering (Inventory) & Service** — Component cataloging with structured maintenance workflows.
- **Felsökning (Troubleshooting)** — 7-step guided diagnostic tool.
- **Collaboration** — Self-hosted Dart WebSocket chat server + global cart system for materials ordering.

## Tech Stack

- **Frontend:** Flutter (Dart) — cross-platform (Mobile, Web, Desktop)
- **Chat Server:** Dart WebSocket
- **Simulation:** Custom physics engine with CFD capabilities

## Getting Started

```bash
git clone https://github.com/Way-Of/OptiCat
cd OptiCat
flutter pub get
flutter run
```

See `docs/DEPENDENCIES.md` for full prerequisites.
