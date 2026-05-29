# Cloudflare Pages Setup — Required Action

## Issue

The Cloudflare Pages build is failing because it cannot install the private npm package `@alexgub84/whatsapp-chat-mock` from GitHub Packages.

## Solution

Add the `GITHUB_TOKEN` environment variable to your Cloudflare Pages project:

### Steps

1. Go to your Cloudflare dashboard: https://dash.cloudflare.com
2. Navigate to **Pages** → **handinhandai-site** → **Settings** → **Environment variables**
3. Add a new variable:
   - **Variable name:** `GITHUB_TOKEN`
   - **Value:** Your GitHub Personal Access Token with `read:packages` scope
   - **Environment:** Production (and Preview if you want preview deploys to work)
4. Click **Save**
5. Trigger a new deploy (either push to main or re-run the failed deploy)

### Creating a GitHub Token (if needed)

1. Go to https://github.com/settings/tokens
2. Click **Generate new token** → **Generate new token (classic)**
3. Give it a name like "Cloudflare Pages - handinhandai-site"
4. Select scopes:
   - ✅ `read:packages` (Download packages from GitHub Package Registry)
5. Click **Generate token**
6. Copy the token (starts with `ghp_...`)
7. Add it to Cloudflare Pages as described above

### Verification

After adding the token:

1. Push a trivial change to main, or
2. Go to the failed deploy in Cloudflare Pages and click "Retry deployment"
3. The build should now succeed

The build installs npm dependencies using `.npmrc` which points to GitHub Packages for the `@alexgub84` scope. Without the token, npm returns 401 Unauthorized.

---

**Current Status:**
- ✅ Code is merged to main (PR #22)
- ✅ GitHub Actions CI is passing
- ❌ Cloudflare Pages deploy is failing (needs GITHUB_TOKEN env var)

Once you add the token, the site will auto-deploy to production.
