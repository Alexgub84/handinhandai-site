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
const WORKTREE_ROOT = execSync('git rev-parse --show-toplevel').toString().trim();
const PORT = 4400 + (createHash('sha256').update(WORKTREE_ROOT).digest().readUInt32BE(0) % 100);
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
    reuseExistingServer: true,
    timeout: 120000,
  },
});
