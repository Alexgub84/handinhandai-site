import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';

import { defineConfig, devices } from '@playwright/test';

// Issue #104: a fixed port meant a run started in worktree B, while
// worktree A's dev server was already up on the same port, would silently
// assert against worktree A's code and report a pass — a false pass, not a
// collision. Deriving the port from the worktree root means two checkouts
// running the suite at the same time get two servers, each reused by (and
// only by) the worktree that started it. Do not hardcode `npm run dev`'s
// own fixed port back into this file.
//
// Issue #194: 100 slots (4400-4499) collided about 1 run in 100, and with
// several worktrees active at once that happened the same day — worktree
// `w178` landed on the same port as `w190-load1`, attached (reuseExistingServer
// was true) to a server already running main, and produced false results.
// Widened to 1000 slots (4400-5399) to shrink the collision odds by 10x, and
// `reuseExistingServer` below is now false: a run must only ever talk to the
// server IT started, never one left running by another worktree. If the
// derived port is already taken, Playwright refuses to start and fails the
// run immediately — on purpose. Do not add a fallback that silently retries
// on another port; that silent fallback is exactly how a wrong-origin run
// hides.
const WORKTREE_ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const PORT = 4400 + (createHash('sha256').update(WORKTREE_ROOT).digest().readUInt32BE(0) % 1000);
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: `npx astro dev --port ${PORT}`,
    url: BASE_URL,
    // Issue #194: never reuse a server another run (another worktree, a
    // leftover process) left on this port. If the port is busy, fail loudly
    // before any test runs rather than silently attaching to someone else's
    // server.
    reuseExistingServer: false,
    timeout: 120000,
  },
});
