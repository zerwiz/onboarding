# Onboarding Guide: Local GitHub Setup, WayOfMono, & Zed IDE

Welcome to the team! Follow these step-by-step instructions to set up your team login, prepare your local development folders, install our high-performance AI Engineering Harness (ai-harness/opencode), and initialize our centralized knowledge base (f-rr-d) in each project workspace.

## Step 1: Log into our Collaboration Platform

We use our custom platform for team coordination, discussions, and task tracking.

 1. Go to our collaboration platform:

   https://team.way-of.com/sign-in

 2. Log in by clicking the **Sign in with GitHub** button. Since you will be using your GitHub account, make sure you accept the repository invitations in Step 2 so your account is fully synced.

## Step 2: Accept the GitHub Invitations

Before doing anything on your computer, you must accept access to our primary repositories on GitHub.

 1. Check your email inbox for invitations to collaborate on these projects.

  2. If you don't see the emails, log into your GitHub account and visit each of these links directly to accept the invitations:

   * **f-rr-d (förråd) — Centralized Thoughts:** https://github.com/Way-Of/f-rr-d
     Centralized repository for all thoughts, tickets, plans, research, and personal TODOs across all projects. Append-only knowledge base with WOMONO, WOW, and OPT namespaces.

   * **Way of Work — Construction Platform:** https://github.com/Way-Of/wayofwork
     Work planning and organizational platform for construction teams. Bun + React, SQLite, AI agents via Wo Agent runtime. Features kanban, TA-Planner, invoicing, Telegram/WhatsApp bots.

   * **OptiCat — HVAC Service Pro:** https://github.com/Way-Of/OptiCat
     HVAC Design, Simulation, and Field Service App built with Flutter. Offline-first, custom CFD physics engine for airflow/pressure/acoustic calculations.

   * **WayOfMono — AI Engineering Monorepo:** https://github.com/Way-Of/wayofmono
     Monorepo consolidation for 7 AI coding agents. 51k+ files, 906 SKILL.md files, 13 npm packages. Provides the ai-harness CLI and shared Intelligence Backend.

   * **Way of Teams — CTO Dashboard & AI Harness:** https://github.com/zerwiz/wayofteams
     CTO Dashboard and AI Engineering Harness built on Phoenix, Ash Framework, and Jido agents. Tickets, standups, skills, notifications, and agent workflows.

  3. On each page, look for a green banner at the top asking you to accept the invitation. Click **Accept**.

## Step 3: Create Your "Projects" Folder

Let's set up a dedicated main workspace folder on your computer to keep all of our project repositories organized in one place.

### On a Mac:

 1. Open **Finder**.

 2. Go to your **Home** folder (the one named after you with the house icon) or your **Documents** folder.

 3. Right-click in any empty space, select **New Folder**, and name it Projects.

### On Windows:

 1. Open **File Explorer**.

 2. Go to your **Documents** folder or your main User folder (e.g., C:\Users\YourName).

 3. Right-click in an empty space, select **New** -> **Folder**, and name it Projects.

## Step 4: Download & Install Zed "IDE" & the "opencode" CLI Agent

We use Zed as our fast, high-performance editor and the opencode CLI agent as our local command-line AI programming assistant. Let's get both installed on your system.

### A. Install Zed "IDE"

 1. Open your web browser and go to https://zed.dev.

 2. Download the installer for your operating system.

 3. Install it:

   * **Mac:** Open the downloaded .dmg file and drag the Zed icon into your Applications folder.

   * **Windows/Linux:** Run the installer and follow the prompt.

### B. Install Node.js & the global "opencode" CLI Agent

Our custom coding agent opencode is distributed as a global npm package. It requires Node.js to run.

 1. **Verify or Install Node.js:** Go to https://nodejs.org, download, and install the recommended **LTS** version.

 2. **Install opencode globally:** Open your computer's native terminal (or PowerShell / Git Bash on Windows) and run the following command to install the agent:

   ```bash

   npm install -g @way-of/opencode

   

   ```

   *(Note for macOS/Linux users: If the installation fails due to a write permission error, prepend sudo to the command: sudo npm install -g @way-of/opencode)*

## Step 5: Open the "Projects" Folder with Zed

Now we will open your newly created Projects folder directly inside Zed. This sets up your workspace before we start downloading the code.

 1. Launch the **Zed** application.

 2. Open your Projects folder in Zed:

   * **Mac:** Drag your Projects folder from Finder directly onto the Zed window. Alternatively, go to **File** -> **Open...** in the top menu and select your Projects folder.

   * **Windows:** Go to **File** -> **Open Folder...** in the top menu and select your Projects folder.

You will now see an empty sidebar on the left side of Zed because the folder doesn't have any files in it yet.

## Step 6: Install "Deno" & the "ai-harness" Toolset

Our development stack leverages **WayOfMono (Wo)**—the ultimate monorepo consolidation for high-performance AI coding agents. This provides a shared Intelligence Backend (packages, tools, memory) and 81 shared skills across our agent platforms.

To run the installation scripts, we will open a terminal window right inside Zed. It will already be pointing at your Projects folder.

 1. **Open Zed's Integrated Terminal:**

   * Press Ctrl + ` (Control + Backtick key, right under the Esc key on your keyboard).

   * Or, go to the top menu in Zed and select **Terminal** -> **New Terminal**.

### A. Install Deno (Prerequisite)

Our installer is built in TypeScript and runs on **Deno**, a highly secure modern JavaScript runtime. Run the command below corresponding to your OS in your Zed terminal:

 * **macOS (Homebrew):**

   ```bash

   brew install deno

   

   ```

   *(Note: If you don't have Homebrew on Mac, install it first from https://brew.sh).*

 * **Windows (PowerShell) — Run PowerShell as Administrator:**

   ```powershell

   irm [https://deno.land/install.ps1](https://deno.land/install.ps1) | iex

   

   ```

 * **Linux / Unix:**

   ```bash

   curl -fsSL [https://deno.land/install.sh](https://deno.land/install.sh) | sh

   

   ```

 * **Verify it works:**

   ```bash

   deno --version

   

   ```

   *(If you get "command not found", restart your terminal window or reload your terminal configuration using source ~/.zshrc or source ~/.bashrc on Mac/Linux).*

### B. Install the ai-harness CLI (One-time setup)

The ai-harness command is your main interface for managing all our internal coding agents and shared skills. Run the command corresponding to your OS in your terminal:

 * **macOS / Linux:**

   ```bash

   deno run -A [https://raw.githubusercontent.com/Way-Of/wayofmono/main/packages/@aiengineeringharness/install.ts](https://raw.githubusercontent.com/Way-Of/wayofmono/main/packages/@aiengineeringharness/install.ts) --install-cli

   

   ```

   *(To force update to latest version, add `--reload`: `deno run --reload -A ... --install-cli`) *

 * **Windows (PowerShell):**

   ```powershell

   deno run --reload -A [https://raw.githubusercontent.com/Way-Of/wayofmono/main/packages/@aiengineeringharness/install.ts](https://raw.githubusercontent.com/Way-Of/wayofmono/main/packages/@aiengineeringharness/install.ts) --install-cli

   

   ```

 * **Verify the CLI works:**

   ```bash

   ai-harness --help

   

   ```

### C. Install All 7 AI Coding Tools & Skills

Let's initialize our complete AI Engineering suite. This single command configures all 7 of our primary assistant tools—including wocode, wouser, and opencode—with our shared custom skills:

 * **macOS / Linux / Windows (Bash / Git Bash):**

   ```bash

   ai-harness --tool=all --yes

   

   ```

 * **Windows (PowerShell Wrapper):**

   ```powershell

   iex (iwr [https://raw.githubusercontent.com/Way-Of/wayofmono/main/packages/@aiengineeringharness/install.ps1](https://raw.githubusercontent.com/Way-Of/wayofmono/main/packages/@aiengineeringharness/install.ps1) -useb)

   install.ps1 -Tool all -Yes

   

   ```

This will automatically configure folders in your home directory, preparing them with battle-tested skills for debugging, testing, planning, and code review:

 * ~/.config/opencode/ — OpenCode config + 91 skills

 * ~/.wocode/ — Wo Coder config + 85 skills

 * ~/.claude/ — Claude Code config + 90 skills

 * ~/.gemini/ — Gemini CLI config + 90 skills

 * ~/.pi/agent/ — Pi config + 85 skills

 * ~/.codex/ — Codex config + 90 skills

 * ~/.antigravity/ — Antigravity config + 89 skills

## Step 7: Clone & Set Up Your Project Repositories

Now that our environment and coding agents are fully installed, we can download our project files.

> ⚠️ **CRITICAL RULE:** Each repository must be cloned as its **own individual folder** directly inside the Projects workspace directory (e.g., Projects/wayofwork, Projects/OptiCat, Projects/wayofmono, and Projects/wayofteams). Do **not** nest them inside one another or combine their files into a single shared folder.

> 

You can choose to automate this using our opencode AI agent or do it manually.

### Option A: Using the "opencode" AI Agent (Recommended)

 1. In your open Zed terminal panel (pointing inside the Projects folder), launch our command-line AI agent:

   ```bash

   opencode

   

   ```

 2. Once the opencode prompt starts, tell it to clone each repository into its own respective folder inside Projects by typing:

   > *"Clone each of our project repositories into its own separate folder inside this Projects directory: clone https://github.com/Way-Of/wayofwork.git, https://github.com/Way-Of/OptiCat.git, https://github.com/Way-Of/wayofmono.git, and https://github.com/zerwiz/wayofteams.git"*

   > 

 3. **Watch the Code Populate:** As the agent completes the setup, the three individual repository folders will instantly appear in your main Projects/ tree on the left of your Zed sidebar!

### Option B: Manual Cloning (Fallback)

If you prefer to run standard Git commands manually, run these three commands inside your terminal one-by-one to clone them cleanly into individual directories:

```bash

git clone [https://github.com/Way-Of/wayofwork.git](https://github.com/Way-Of/wayofwork.git)

git clone [https://github.com/Way-Of/OptiCat.git](https://github.com/Way-Of/OptiCat.git)

git clone [https://github.com/Way-Of/wayofmono.git](https://github.com/Way-Of/wayofmono.git)

git clone [https://github.com/zerwiz/wayofteams.git](https://github.com/zerwiz/wayofteams.git)


```

### 💡 Troubleshooting GitHub Credentials (If prompted)

Because these are **private** repositories, GitHub needs to verify who you are. When you attempt to clone, the terminal might prompt for your username and password.

 * **Your Username:** Enter your standard GitHub username.

 * **Your Password:** **Do not enter your GitHub password.** You must use a **Personal Access Token (PAT)**:

   1. Go to your GitHub account -> **Settings** -> **Developer settings** (at the bottom of the left sidebar).

   2. Click **Personal access tokens** -> **Tokens (classic)**.

   3. Click **Generate new token** -> **Generate new token (classic)**.

   4. Give it a note (like "My Laptop"), check the box for repo (Full control of private repositories), and click **Generate token** at the bottom.

   5. **Copy the token immediately** (you won't be able to see it again). Paste this token into your terminal password prompt when asked.

## Step 8: Initialize the AI Engineering Harness inside All Repos

Now, we must run /init-harness inside **each** project folder so that you get the centralized f-rr-d (thoughts/tickets) repository localized and configured inside each project.

### Why do we do this?

Running /init-harness in a repository:

 * Creates or updates the project memory files for AI agents.

 * Discovers all installed skills and commands and registers them inside the project memory.

 * Clones the shared f-rr-d repository into a localized folder named thoughts/ inside that repository.

 * Sets up developer directories (zerwiz/, tomas/, craig/, andre/) and project documentation folders.

 * **Critically** adds thoughts/ to the project's .gitignore to prevent committing thoughts back to the codebase.

### How to Initialize the Harness:

Exit opencode (press Ctrl + C if it is still open) and run the following commands sequentially in your Zed terminal:

#### 1. Set up the wayofwork workspace:

```bash

cd ~/Projects/wayofwork

opencode



```

Once inside opencode, run:

```text

/init-harness



```

*(When prompted for Project Name, enter WayOfWork or WoW. For the project slug, enter wow).*

#### 2. Set up the OptiCat workspace:

```bash

cd ~/Projects/OptiCat

opencode



```

Once inside opencode, run:

```text

/init-harness



```

*(When prompted for Project Name, enter Opticat. For the project slug, enter opticat).*

#### 3. Set up the wayofmono workspace:

```bash

cd ~/Projects/wayofmono

opencode



```

Once inside opencode, run:

```text

/init-harness



```

 *(When prompted for Project Name, enter WayOfMono. For the project slug, enter wayofmono).*

#### 4. Set up the wayofteams workspace:

```bash

cd ~/Projects/wayofteams

opencode



```

Once inside opencode, run:

```text

/init-harness



```

 *(When prompted for Project Name, enter WayOfTeams. For the project slug, enter wayofteams).*

## Step 9: Critical Rules for the Centralized "thoughts/" Folder

The thoughts/ directory is a direct, standalone clone of github.com/Way-Of/f-rr-d. Because it serves as our cross-project knowledge base, you must adhere to the following strict guidelines:

### 1. f-rr-d is APPEND-ONLY

 * ❌ **NEVER** delete any file or directory inside thoughts/

 * ❌ **NEVER** rename or move any file or directory inside thoughts/

 * ❌ **NEVER** modify existing files — only append new content.

 * Only create new files (tickets, plans, research docs) in your developer workspace folder or your corresponding project folder (e.g., thoughts/wow/, thoughts/opticat/, etc.)

 * **Enforcement Tickets** (located in thoughts/[project]/enforcement-ticket/) are the highest priority items in the project. They override all other tickets — when an enforcement ticket exists, all work on non-enforcement tickets must pause across all namespaces until it is resolved.

### 2. thoughts/ is Exclusively Managed by f-rr-d

 * Do not commit the thoughts/ directory to your project's main repository. (The setup script automatically puts it in .gitignore).

 * Only commit and push files in thoughts/ back to the central f-rr-d repository.

### 3. Multi-Machine Sync Workflow

To avoid sync conflicts, run these commands inside your terminal before and after session edits:

 * **Pull before every session:**

   ```bash

   git -C thoughts/ pull --ff-only

   # If it fails due to diverged branches, run:

   git -C thoughts/ pull --rebase

   

   ```

 * **Push after every write:**

   ```bash

   git -C thoughts/ add <file>

   git -C thoughts/ commit -m "<PREFIX>-<NNN>: <description>"

   git -C thoughts/ push origin main

   # If the push is rejected because the remote has updates:

   git -C thoughts/ pull --rebase

   git -C thoughts/ push origin main

   

   ```

   *(Never force push!)*

## Step 10: Workspace File Structure

Your project files and tickets are now perfectly organized nested within each codebase:

```text

Projects/

├── wayofwork/                  # The cloned 'wayofwork' repository

│   ├── .gitignore              # Configured to ignore "thoughts/"

│   └── thoughts/               # Standing clone of 'f-rr-d' (Centralized Tickets/Thoughts)

│       ├── shared/             # Shared templates (plans, tickets, etc.)

│       └── wow/                # WayOfWork Platform Workspace (WOW-XXX tickets)

│           ├── shared/         # tickets/ (ticket-template.md), plans/, research/

│           ├── docs/           # architecture/, decisions/, guides/, references/

│           ├── global/         # Project-level global concerns

│           ├── enforcement-ticket/ # Highest Priority tickets (forces work to halt elsewhere until resolved)

│           ├── zerwiz/         # Personal developer folders (tickets/plans/notes)

│           ├── tomas/          # Personal developer folders

│           ├── craig/          # Personal developer folders

│           └── andre/          # Personal developer folders

├── OptiCat/                    # The cloned 'OptiCat' repository

│   ├── .gitignore              # Configured to ignore "thoughts/"

│   └── thoughts/               # Standing clone of 'f-rr-d'

│       └── opticat/            # OptiCat Platform Workspace (OPT-XXX tickets)

├── wayofmono/                  # The cloned 'wayofmono' monorepo

│   ├── .gitignore              # Configured to ignore "thoughts/"

│   └── thoughts/               # Standing clone of 'f-rr-d'

│       └── wayofmono/          # WayOfMono Platform Workspace (WOMONO-XXX tickets)

└── wayofteams/                 # The cloned 'wayofteams' repository

    ├── .gitignore              # Configured to ignore "thoughts/" + "onboarding/"

    └── thoughts/               # Standing clone of 'f-rr-d'

        └── wayofteams/         # Way of Teams Platform Workspace (WOTEAMS-XXX tickets)



```

### Ticket Branch Naming Convention for f-rr-d:

Always create feature branches using this strict format:

<project-slug>/<namespace>/<ticket-id>-<short-desc>

*Example:* wow/WOW/WOW-010-user-authentication

## Step 11: Configure Zed CLI Integration (zed .)

To quickly open your workspace or code directories in the future, we will set up the Zed CLI integration.

 1. Bring your open **Zed** window to the front.

 2. Open the command palette inside Zed:

   * **Mac:** Press Cmd + Shift + P

   * **Windows/Linux:** Press Ctrl + Shift + P

 3. Type cli in the search bar.

 4. Select **cli: install** and hit **Enter** (enter your system password if prompted to authorize it).

Now, whenever you are using your computer's native terminal, you can type zed . inside any folder to open it instantly in Zed!

```bash

# Example: Navigate to your project folder and open it instantly in Zed

cd ~/Projects/wayofwork

zed .

