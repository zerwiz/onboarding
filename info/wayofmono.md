# WayOfMono (Wo) — Monorepo

**Repository:** `https://github.com/Way-Of/wayofmono`

The ultimate monorepo consolidation for high-performance AI coding agents. Provides a shared Intelligence Backend serving **7** distinct agent frontends.

## Stats

- **51,033** files (excluding node_modules)
- **906** SKILL.md files (81 canonical × 7 tools)
- **13** NPM packages published
- **7** AI coding tools supported
- **6** subagents
- **4** active developers
- **Harness version:** 1.7.5

## Quick Install

```bash
# Install CLI
deno run -A https://raw.githubusercontent.com/Way-Of/wayofmono/main/packages/@aiengineeringharness/install.ts --install-cli

# Install all tools
ai-harness --tool=all --yes
```

## Supported Tools

| Tool | Type |
|------|------|
| wocode | High-performance CLI coding agent |
| wouser | General-purpose user agent SDK |
| Claude Code | Anthropic's coding agent |
| Pi | Pi Agent standard |
| OpenCode | Open-source TUI coding agent |
| Gemini CLI | Google's multimodal agent |
| Antigravity | Autonomous agent platform |

## Architecture

```
packages/@aiengineeringharness/
├── manifest.json              # Source of truth (v1.7.5)
├── install.ts                 # Deno CLI installer
├── opencode/    → ~/.config/opencode/  # 91 skills
├── claude/      → ~/.claude/           # 90 skills
├── gemini/      → ~/.gemini/           # 90 skills
├── pi/          → ~/.pi/agent/         # 85 skills
├── codex/       → ~/.codex/            # 90 skills
├── antigravity/ → ~/.antigravity/      # 89 skills
└── wocode/      → ~/.wocode/          # 85 skills
```

## NPM Packages

Core: `@wayofmono/wo-ai`, `@wayofmono/wo-agent`, `@wayofmono/wo-coding-agent`, `@wayofmono/wo-agent-core`, `@wayofmono/telemetry`

## CTO Dashboard

```bash
npx @wayofmono/wo-cto-dashboard
# Opens at http://localhost:6969
```
