const slides = [
    {
        step: "Overview",
        title: "Onboarding Guide: Local GitHub Setup, WayOfMono, & Zed IDE",
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm leading-relaxed">
                    Welcome to the team! This onboarding guide will walk you through configuring local GitHub credentialing, repository access, the Engineering AI Harness, and Zed IDE integration.
                </p>
                <div class="p-4 bg-brand/10 border border-brand/20 rounded-xl text-sm text-zinc-300">
                    <strong class="text-white block mb-1">Pro Tip:</strong> This portal supports two modes (selectable from the top bar): <strong>Dashboard</strong> (full workspace overview) and <strong>Presentation</strong> (focused step-by-step). Use arrow keys or the buttons below to navigate slides. Bookmark this page for future reference.
                </div>
            </div>
        `
    },
    {
        step: "Step 1",
        title: 'Log into our Collaboration Platform',
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">Visit <a href="https://team.way-of.com" target="_blank" class="text-brand underline font-medium">team.way-of.com</a> and log in with your Google account. This platform handles tickets, documentation, team wikis, and more.</p>
                <div class="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2 text-xs text-zinc-400">
                    <p><strong class="text-white">Authentication Method:</strong> Use your Google account to sign in via GitHub OAuth. This links your GitHub profile automatically.</p>
                </div>
            </div>
        `
    },
    {
        step: "Step 2",
        title: "Accept the GitHub Invitations",
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">You should receive GitHub repository invitations via email after onboarding. Accept all invitations for the following repositories:</p>
                <div class="space-y-2">
                    <div class="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs">
                        <span class="px-2 py-0.5 rounded bg-brand/10 text-brand font-mono font-bold">f-rr-d</span>
                        <span class="text-zinc-400">Centralized Thoughts & Tickets Repository</span>
                    </div>
                    <div class="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs">
                        <span class="px-2 py-0.5 rounded bg-brand/10 text-brand font-mono font-bold">wayofwork</span>
                        <span class="text-zinc-400">Way of Work main project repository</span>
                    </div>
                    <div class="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs">
                        <span class="px-2 py-0.5 rounded bg-brand/10 text-brand font-mono font-bold">OptiCat</span>
                        <span class="text-zinc-400">OptiCat project repository</span>
                    </div>
                    <div class="flex items-center gap-3 p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs">
                        <span class="px-2 py-0.5 rounded bg-brand/10 text-brand font-mono font-bold">wayofmono</span>
                        <span class="text-zinc-400">WayOfMono meta-repository</span>
                    </div>
                </div>
                <div class="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs rounded-xl">
                    <strong>Not seeing the invitations?</strong> Ask your team lead to re-send them, or check <code class="text-amber-400 font-mono">https://github.com/orgs/Way-Of</code> for pending invites.
                </div>
            </div>
        `
    },
    {
        step: "Step 3",
        title: 'Create Your "Projects" Folder',
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">Create a top-level folder called <strong class="text-white">Projects</strong> in your home directory. This is where all repositories live.</p>
                <div class="space-y-3">
                    <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl">
                        <p class="text-xs font-bold text-white mb-2">MacOS / Linux:</p>
                        <div class="bg-zinc-900 rounded p-2 font-mono text-xs text-emerald-400 border border-zinc-800">
                            mkdir -p ~/Projects
                        </div>
                    </div>
                    <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl">
                        <p class="text-xs font-bold text-white mb-2">Windows (PowerShell):</p>
                        <div class="bg-zinc-900 rounded p-2 font-mono text-xs text-emerald-400 border border-zinc-800">
                            New-Item -ItemType Directory -Path "$env:USERPROFILE\Projects" -Force
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        step: "Step 4",
        title: 'Install Zed "IDE" & global "opencode" CLI Agent',
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">We use <strong class="text-white">Zed IDE</strong> as our primary editor with the <strong class="text-white">opencode</strong> CLI agent for AI-assisted development.</p>
                <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-white">1. Download & Install Zed:</p>
                    <p class="text-xs text-zinc-400">Visit <a href="https://zed.dev/download" target="_blank" class="text-brand underline">zed.dev/download</a> and install the version for your OS.</p>
                </div>
                <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-white">2. Install the opencode CLI Agent (globally via npm):</p>
                    <div class="bg-zinc-900 rounded p-2.5 font-mono text-xs text-emerald-400 flex items-center justify-between border border-zinc-800">
                        <code>npm install -g @way-of/opencode</code>
                        <button class="text-xs text-brand" onclick="copyCommand('npm install -g @way-of/opencode', 'opencode install command copied!')">Copy</button>
                    </div>
                    <p class="text-xs text-zinc-500">Verify installation by running <code class="text-zinc-300 font-mono">opencode --version</code> in your terminal.</p>
                </div>
            </div>
        `
    },
    {
        step: "Step 5",
        title: 'Open the "Projects" Folder with Zed',
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">Launch Zed and open your newly created Projects folder as a workspace.</p>
                <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-white">Method 1: Terminal</p>
                    <div class="bg-zinc-900 rounded p-2 font-mono text-xs text-emerald-400 border border-zinc-800">
                        zed ~/Projects
                    </div>
                </div>
                <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-white">Method 2: GUI</p>
                    <p class="text-xs text-zinc-400">Open Zed, go to <strong class="text-zinc-200">File -> Open</strong> (or <kbd class="px-1 py-0.5 bg-zinc-800 rounded font-mono text-[10px]">Cmd/Ctrl + O</kbd>), navigate to your home directory, select the <strong class="text-zinc-200">Projects</strong> folder, and click Open.</p>
                </div>
            </div>
        `
    },
    {
        step: "Step 6-A",
        title: 'Install "Deno" (Prerequisite)',
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">Deno is required to run the AI Engineering Harness installation script. Install it using one of the following methods:</p>
                <div class="space-y-2">
                    <div class="p-3 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-between">
                        <div><span class="text-xs font-bold text-white">MacOS (Homebrew):</span> <code class="text-emerald-400 font-mono text-xs">brew install deno</code></div>
                        <button class="text-xs text-brand" onclick="copyCommand('brew install deno', 'brew command copied!')">Copy</button>
                    </div>
                    <div class="p-3 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-between">
                        <div><span class="text-xs font-bold text-white">Linux/Mac (curl):</span> <code class="text-emerald-400 font-mono text-xs">curl -fsSL https://deno.land/install.sh | sh</code></div>
                        <button class="text-xs text-brand" onclick="copyCommand('curl -fsSL https://deno.land/install.sh | sh', 'curl command copied!')">Copy</button>
                    </div>
                    <div class="p-3 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-between">
                        <div><span class="text-xs font-bold text-white">Windows (PowerShell):</span> <code class="text-emerald-400 font-mono text-xs">irm https://deno.land/install.ps1 | iex</code></div>
                        <button class="text-xs text-brand" onclick="copyCommand('irm https://deno.land/install.ps1 | iex', 'powershell command copied!')">Copy</button>
                    </div>
                </div>
                <p class="text-xs text-zinc-500">Verify with: <code class="text-zinc-300 font-mono text-xs">deno --version</code></p>
            </div>
        `
    },
    {
        step: "Step 6-B",
        title: 'Install the "ai-harness" CLI & Coding Tools',
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">Run the AI Engineering Harness installer. This downloads and sets up all the CLI agents for our ecosystem.</p>
                <div class="bg-zinc-900 rounded p-3 font-mono text-xs text-emerald-400 flex items-center justify-between border border-zinc-800">
                    <code>deno run --reload -A https://raw.githubusercontent.com/Way-Of/wayofmono/main/packages/@aiengineeringharness/install.ts --install-cli</code>
                    <button class="text-xs text-brand shrink-0 ml-2" onclick="copyCommand('deno run --reload -A https://raw.githubusercontent.com/Way-Of/wayofmono/main/packages/@aiengineeringharness/install.ts --install-cli', 'deno install command copied!')">Copy</button>
                </div>
                <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-zinc-400 space-y-1">
                    <p><strong class="text-white">This installs:</strong></p>
                    <p>• <strong class="text-zinc-200">opencode</strong> — Primary AI agent (opencode CLI)</p>
                    <p>• <strong class="text-zinc-200">wocode</strong> — Way of Work AI agent (wocode CLI)</p>
                    <p>• <strong class="text-zinc-200">ai-harness</strong> — Universal harness manager</p>
                </div>
                <div class="bg-zinc-900 rounded p-2.5 font-mono text-xs text-zinc-300 flex items-center justify-between border border-zinc-800">
                    <code>ai-harness --help</code>
                    <button class="text-xs text-brand" onclick="copyCommand('ai-harness --help', 'help command copied!')">Copy</button>
                </div>
            </div>
        `
    },
    {
        step: "Step 6-C",
        title: "Install All 7 AI Coding Tools & Skills",
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">Install coding agent skill packages across all tools. This makes the AI-aware skills and commands available to every agent.</p>
                <div class="bg-zinc-900 rounded p-3 font-mono text-xs text-emerald-400 flex items-center justify-between border border-zinc-800">
                    <code>ai-harness --tool=all --yes</code>
                    <button class="text-xs text-brand" onclick="copyCommand('ai-harness --tool=all --yes', 'skill install command copied!')">Copy</button>
                </div>
                <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-zinc-400 space-y-1">
                    <p><strong class="text-white">Tools configured:</strong></p>
                    <p><span class="text-brand font-mono">opencode</span> — <code class="text-zinc-400">~/.config/opencode/skills/</code></p>
                    <p><span class="text-blue-400 font-mono">wocode</span> — <code class="text-zinc-400">~/.wocode/skills/</code></p>
                    <p><span class="text-yellow-400 font-mono">Claude</span> — <code class="text-zinc-400">~/.claude/skills/</code></p>
                    <p><span class="text-purple-400 font-mono">Gemini</span> — <code class="text-zinc-400">~/.gemini/agent/skills/</code></p>
                    <p><span class="text-sky-400 font-mono">Pi</span> — <code class="text-zinc-400">~/.pi/agent/skills/</code></p>
                    <p><span class="text-rose-400 font-mono">Codex</span> — <code class="text-zinc-400">~/.codex/skills/</code></p>
                </div>
            </div>
        `
    },
    {
        step: "Step 7-A",
        title: "Clone & Set Up Your Project Repositories",
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">Clone all four repositories into your <strong class="text-white">~/Projects</strong> directory. You can use the opencode AI agent for assistance:</p>
                <div class="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-zinc-400">
                    <p><strong class="text-white">Method 1 — Using opencode agent:</strong></p>
                    <p class="mt-1">Run <code class="text-brand font-mono">opencode</code> in your terminal, then type <code class="text-brand font-mono">clone all Way-Of repositories</code> into the chat. The agent will handle the rest.</p>
                </div>
                <div class="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-zinc-400">
                    <p><strong class="text-white">Method 2 — Manual git clone:</strong></p>
                    <div class="mt-2 space-y-2 font-mono text-xs text-zinc-300">
                        <div class="bg-zinc-900 rounded p-2 border border-zinc-800 flex items-center justify-between">
                            <code>cd ~/Projects && git clone git@github.com:Way-Of/f-rr-d.git</code>
                            <button class="text-[10px] text-brand" onclick="copyCommand('cd ~/Projects && git clone git@github.com:Way-Of/f-rr-d.git', 'f-rr-d clone copied!')">Copy</button>
                        </div>
                        <div class="bg-zinc-900 rounded p-2 border border-zinc-800 flex items-center justify-between">
                            <code>cd ~/Projects && git clone git@github.com:Way-Of/wayofwork.git</code>
                            <button class="text-[10px] text-brand" onclick="copyCommand('cd ~/Projects && git clone git@github.com:Way-Of/wayofwork.git', 'wow clone copied!')">Copy</button>
                        </div>
                        <div class="bg-zinc-900 rounded p-2 border border-zinc-800 flex items-center justify-between">
                            <code>cd ~/Projects && git clone git@github.com:Way-Of/OptiCat.git</code>
                            <button class="text-[10px] text-brand" onclick="copyCommand('cd ~/Projects && git clone git@github.com:Way-Of/OptiCat.git', 'opticat clone copied!')">Copy</button>
                        </div>
                        <div class="bg-zinc-900 rounded p-2 border border-zinc-800 flex items-center justify-between">
                            <code>cd ~/Projects && git clone git@github.com:Way-Of/wayofmono.git</code>
                            <button class="text-[10px] text-brand" onclick="copyCommand('cd ~/Projects && git clone git@github.com:Way-Of/wayofmono.git', 'wayofmono clone copied!')">Copy</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        step: "Step 7-B",
        title: "Troubleshooting GitHub Credentials (PAT)",
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">If git clone prompts for a username and password, you need a <strong class="text-white">Personal Access Token</strong> (classic).</p>
                <div class="space-y-2 text-xs text-zinc-300">
                    <p>• <strong>Your Username:</strong> Enter your standard GitHub username.</p>
                    <p>• <strong>Your Password:</strong> <strong class="text-red-400">Do NOT enter your regular password.</strong> You must utilize a classical personal access token (PAT).</p>
                </div>
                <div class="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-white uppercase tracking-wider">How to Generate classic PAT on GitHub:</p>
                    <ol class="list-decimal pl-4 text-xs text-zinc-400 space-y-1.5">
                        <li>Navigate to your GitHub profile: <strong class="text-zinc-200">Settings</strong> -> <strong class="text-zinc-200">Developer settings</strong> (bottom left).</li>
                        <li>Select <strong class="text-zinc-200">Personal access tokens</strong> -> <strong class="text-zinc-200">Tokens (classic)</strong>.</li>
                        <li>Select <strong class="text-zinc-200">Generate new token</strong> -> <strong class="text-zinc-200">Generate new token (classic)</strong>.</li>
                        <li>Annotate the context (e.g., "Developer Macbook"), select scopes: <strong class="text-brand">repo</strong> (full control of private repositories).</li>
                        <li>Generate, then <strong class="text-emerald-400 font-bold">Copy the Token Immediately</strong> (it won't display again). Paste this token directly into your terminal password prompt when requested.</li>
                    </ol>
                </div>
            </div>
        `
    },
    {
        step: "Step 8",
        title: "Initialize the AI Engineering Harness inside All Repos",
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">Now, we must run <code class="text-brand font-mono text-xs">/init-harness</code> inside <strong>each</strong> project folder so that you get the centralized <code class="text-brand font-mono text-xs">f-rr-d</code> (thoughts/tickets) repository localized and configured inside each project.</p>
                <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-zinc-400 space-y-1.5">
                    <strong class="text-white block uppercase text-[10px]">What does /init-harness do?</strong>
                    <p>• Creates or updates project memory layouts for local AI assistants.</p>
                    <p>• Scans and registers all local commands and skills into project memory.</p>
                    <p>• Clones the centralized thoughts workspace (<code class="text-brand font-mono text-xs">f-rr-d</code>) into a folder called <code class="text-brand font-mono text-xs">thoughts/</code> inside each repository.</p>
                    <p>• Automatically configures your <code class="text-zinc-200 font-mono">.gitignore</code> file to block thoughts/ from being committed back to main code repositories.</p>
                </div>
                <p class="text-xs text-zinc-400">Exit your global opencode agent (press <kbd class="px-1 py-0.5 bg-zinc-800 rounded">Ctrl+C</kbd>) and initialize each repo workspace sequentially:</p>
                <div class="space-y-3.5">
                    <div>
                        <p class="text-[11px] font-bold text-zinc-400">1. Set up wayofwork Workspace</p>
                        <div class="bg-zinc-900 rounded p-2 font-mono text-[11px] text-zinc-300 flex items-center justify-between">
                            <code>cd ~/Projects/wayofwork && opencode</code>
                            <button class="text-[10px] text-brand" onclick="copyCommand('cd ~/Projects/wayofwork\nopencode', 'wow startup copied!')">Copy</button>
                        </div>
                        <p class="text-[10px] text-zinc-500 mt-1">Once inside opencode prompt, run: <code class="text-brand">/init-harness</code>. Enter name <code class="text-zinc-300">WayOfWork</code> (slug: <code class="text-zinc-300">wow</code>).</p>
                    </div>
                    <div>
                        <p class="text-[11px] font-bold text-zinc-400">2. Set up OptiCat Workspace</p>
                        <div class="bg-zinc-900 rounded p-2 font-mono text-[11px] text-zinc-300 flex items-center justify-between">
                            <code>cd ~/Projects/OptiCat && opencode</code>
                            <button class="text-[10px] text-brand" onclick="copyCommand('cd ~/Projects/OptiCat\nopencode', 'opticat startup copied!')">Copy</button>
                        </div>
                        <p class="text-[10px] text-zinc-500 mt-1">Once inside, run: <code class="text-brand">/init-harness</code>. Enter name <code class="text-zinc-300">Opticat</code> (slug: <code class="text-zinc-300">opticat</code>).</p>
                    </div>
                    <div>
                        <p class="text-[11px] font-bold text-zinc-400">3. Set up wayofmono Workspace</p>
                        <div class="bg-zinc-900 rounded p-2 font-mono text-[11px] text-zinc-300 flex items-center justify-between">
                            <code>cd ~/Projects/wayofmono && opencode</code>
                            <button class="text-[10px] text-brand" onclick="copyCommand('cd ~/Projects/wayofmono\nopencode', 'wayofmono startup copied!')">Copy</button>
                        </div>
                        <p class="text-[10px] text-zinc-500 mt-1">Once inside, run: <code class="text-brand">/init-harness</code>. Enter name <code class="text-zinc-300">WayOfMono</code> (slug: <code class="text-zinc-300">wayofmono</code>).</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        step: "Step 9-A",
        title: 'Critical Rules for the "thoughts/" Folder',
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">
                    The <code class="text-brand font-mono text-xs">thoughts/</code> directory is a direct standalone clone of the f-rr-d repository. It represents our decentralized knowledge graph, necessitating rigid discipline:
                </p>
                <div class="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl space-y-3">
                    <strong class="text-white block uppercase text-xs">Rule 1: f-rr-d is APPEND-ONLY</strong>
                    <ul class="text-xs space-y-1.5 pl-4 list-disc">
                        <li>❌ <strong class="text-white">NEVER</strong> delete any file or directory inside thoughts/</li>
                        <li>❌ <strong class="text-white">NEVER</strong> rename or move any file or directory inside thoughts/</li>
                        <li>❌ <strong class="text-white">NEVER</strong> modify existing files — only append new content.</li>
                        <li>Only create new files (tickets, plans, research docs) in your developer workspace folder or corresponding project space (<code class="text-rose-400">thoughts/wow/</code>, etc.)</li>
                    </ul>
                </div>
                <div class="p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-zinc-300 space-y-2">
                    <strong class="text-brand block uppercase text-[10px]">Priority Enforcement Tickets:</strong>
                    <p>Enforcement tickets located in <code class="text-zinc-200">thoughts/[project]/enforcement-ticket/</code> represent extreme-priority blocks. They override all concurrent activity. When an enforcement ticket is active, all developer spaces must pause work across all namespaces until resolved.</p>
                </div>
                <div class="p-3 bg-zinc-950 border border-zinc-850 text-zinc-400 text-xs rounded-xl">
                    <strong>Note:</strong> thoughts/ is strictly ignored inside your host codebases to guarantee code commits don't mix with knowledge bases. (Handled via .gitignore).
                </div>
            </div>
        `
    },
    {
        step: "Step 9-B",
        title: "Multi-Machine Sync Workflow (f-rr-d)",
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">To maintain branch sync across machines and prevent merge conflicts, adopt this git sequence prior to editing your spaces:</p>
                <div class="space-y-3">
                    <div class="space-y-1">
                        <div class="flex items-center justify-between text-xs font-bold text-zinc-400 font-mono">
                            <span>Pull before every session:</span>
                            <button class="text-[10px] text-brand hover:underline font-bold" onclick="copyCommand('git -C thoughts/ pull --ff-only\n# If it fails run:\ngit -C thoughts/ pull --rebase', 'pull sequence copied!')">Copy</button>
                        </div>
                        <div class="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800 font-mono text-[11px] text-emerald-400">
                            <div class="text-zinc-300">git -C thoughts/ pull --ff-only</div>
                            <div class="text-zinc-500 mt-1"># If failing due to diverged branches, run:</div>
                            <div class="text-zinc-300">git -C thoughts/ pull --rebase</div>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <div class="flex items-center justify-between text-xs font-bold text-zinc-400 font-mono">
                            <span>Push after every local write:</span>
                            <button class="text-[10px] text-brand hover:underline font-bold" onclick="copyCommand('git -C thoughts/ add .\ngit -C thoughts/ commit -m \"WOW-010: ticket description\"\ngit -C thoughts/ push origin main', 'push sequence copied!')">Copy</button>
                        </div>
                        <div class="bg-zinc-900 rounded-lg p-2.5 border border-zinc-800 font-mono text-[11px] text-emerald-400">
                            <div class="text-zinc-300">git -C thoughts/ add &lt;file&gt;</div>
                            <div class="text-zinc-300">git -C thoughts/ commit -m "&lt;PREFIX&gt;-&lt;NNN&gt;: &lt;description&gt;"</div>
                            <div class="text-zinc-300">git -C thoughts/ push origin main</div>
                            <div class="text-zinc-500 mt-1"># If remote has updates, merge with:</div>
                            <div class="text-zinc-300">git -C thoughts/ pull --rebase</div>
                            <div class="text-zinc-300">git -C thoughts/ push origin main</div>
                        </div>
                    </div>
                </div>
                <div class="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs rounded-xl font-bold uppercase tracking-wider text-center">
                    Never Force Push thoughts (f-rr-d) modifications!
                </div>
            </div>
        `
    },
    {
        step: "Step 10",
        title: "Workspace File Structure & Branch Conventions",
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">Once configuration is completed, your Projects folder matches the structure mapped on the right-hand panel of this portal.</p>
                <div class="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-3">
                    <h4 class="text-xs font-bold tracking-wider uppercase text-brand">Ticket Branch Naming Convention (f-rr-d):</h4>
                    <p class="text-xs text-zinc-400">Always format feature branches mapped back to f-rr-d classic repositories according to this strict design:</p>
                    <div class="bg-zinc-900 rounded p-2.5 font-mono text-xs text-brand text-center border border-zinc-800">
                        &lt;project-slug&gt;/&lt;namespace&gt;/&lt;ticket-id&gt;-&lt;short-desc&gt;
                    </div>
                    <p class="text-xs text-zinc-400"><strong>Real-world Case example:</strong></p>
                    <div class="bg-zinc-900 rounded p-2 font-mono text-xs text-zinc-300 select-all border border-zinc-800">
                        wow/WOW/WOW-010-user-authentication
                    </div>
                </div>
                <p class="text-xs text-zinc-500">
                    *Click any folder inside the "Target Workspace File Tree" panel in the sidebar to inspect standard template files, documentation directories, and personal developer branches.
                </p>
            </div>
        `
    },
    {
        step: "Step 11",
        title: "Configure Zed CLI Integration (zed .)",
        body: `
            <div class="space-y-4">
                <p class="text-zinc-300 text-sm">To quickly launch repositories or workspace paths directly into Zed from your host terminal, configure the CLI utility integration:</p>
                <div class="space-y-3">
                    <div class="flex items-start gap-3 text-xs text-zinc-400">
                        <div class="w-5 h-5 rounded bg-zinc-800 text-brand flex items-center justify-center font-bold text-xs mt-0.5">1</div>
                        <div class="flex-1">Focus your active <strong class="text-white">Zed editor window</strong>.</div>
                    </div>
                    <div class="flex items-start gap-3 text-xs text-zinc-400">
                        <div class="w-5 h-5 rounded bg-zinc-800 text-brand flex items-center justify-center font-bold text-xs mt-0.5">2</div>
                        <div class="flex-1">
                            Trigger the global command palette:
                            <ul class="list-disc pl-4 mt-1 text-zinc-500 space-y-0.5">
                                <li>Mac: <kbd class="px-1 py-0.5 bg-zinc-800 rounded font-mono text-[10px] text-zinc-300">Cmd + Shift + P</kbd></li>
                                <li>Windows / Linux: <kbd class="px-1 py-0.5 bg-zinc-800 rounded font-mono text-[10px] text-zinc-300">Ctrl + Shift + P</kbd></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex items-start gap-3 text-xs text-zinc-400">
                        <div class="w-5 h-5 rounded bg-zinc-800 text-brand flex items-center justify-center font-bold text-xs mt-0.5">3</div>
                        <div class="flex-1">Type <strong class="text-zinc-200">cli: install</strong> inside the search input and select it (authorize security prompt with system pass if prompted).</div>
                    </div>
                </div>
                <div class="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
                    <p class="text-xs text-zinc-300">Now, open any repository instantly by running <code class="text-brand font-mono">zed .</code> inside its directory:</p>
                    <div class="bg-zinc-900 rounded p-2.5 font-mono text-xs text-zinc-300 flex items-center justify-between border border-zinc-850">
                        <div>
                            <span class="text-zinc-500">cd ~/Projects/wayofwork</span><br>
                            <span class="text-emerald-400">zed .</span>
                        </div>
                        <button class="text-xs text-brand" onclick="copyCommand('cd ~/Projects/wayofwork\nzed .', 'zed runner copied!')">Copy</button>
                    </div>
                </div>
            </div>
        `
    }
];

const SLIDE_COUNT = slides.length;

export { slides, SLIDE_COUNT };
