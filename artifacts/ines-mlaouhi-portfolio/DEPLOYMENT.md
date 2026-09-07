# Deployment and marketing setup

## Exact stack

- React 19.1.0
- Vite 7.3.6
- TypeScript 5.9
- Wouter 3.11.0 for client-side routes
- Static output: `artifacts/ines-mlaouhi-portfolio/dist/public`
- Vercel packages: `@vercel/analytics` 2.0.1 and `@vercel/speed-insights` 2.0.0

This is a Vite + React single-page portfolio, not a Next.js application. The existing Replit API server is not used by the portfolio.

## Vercel project settings

Create the Vercel project from the repository root and use these values:

- **Framework Preset:** Vite
- **Root Directory:** `.`
- **Install Command:** `pnpm install --frozen-lockfile`
- **Build Command:** `pnpm --filter @workspace/ines-mlaouhi-portfolio run build`
- **Output Directory:** `artifacts/ines-mlaouhi-portfolio/dist/public`

The Vite config now defaults to `/` for the production base path, so the Vercel build does not depend on Replit-only `PORT` or `BASE_PATH` variables. Client-side routes are rewritten to `index.html` by the Vercel SPA configuration you should add if Vercel does not preserve the existing rewrite:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Environment variables

Add these in **Vercel → Project → Settings → Environment Variables**. Add them to Production, Preview, and Development when you want the same behavior in each environment.

| Variable | Purpose | Where to get it |
| --- | --- | --- |
| `VITE_FORMSPREE_ENDPOINT` | Receives Contact, Services, and Training form submissions and forwards them to Ines. | Create a Formspree form at formspree.io, set its destination email to Ines's inbox, then copy the endpoint URL (for example, `https://formspree.io/f/xxxxxxxx`). |

### Form setup, step by step

1. Create or sign in to a Formspree account.
2. Create one form for the portfolio and set the destination to Ines's inbox.
3. Copy the form endpoint URL.
4. Add that URL as `VITE_FORMSPREE_ENDPOINT` in Vercel.
5. Redeploy. The three forms submit in the background and no longer open the visitor's email application.
6. Submit a test from Contact, Services, and Trainings and confirm each message arrives.

Until this variable is added, submissions fail visibly instead of silently opening an email client. Email links in the navigation remain direct contact links; only form submissions use Formspree.

### Analytics setup, step by step

1. Deploy the site.
2. In Vercel, open the project → **Analytics** → **Enable**.
3. Also enable **Speed Insights** for Core Web Vitals.
4. Verify that the Vercel dashboard receives production traffic after deployment.

The portfolio uses Vercel Analytics and Speed Insights without a visible consent banner. This avoids blocking the site and keeps the primary analytics layer cookie-less. Google Analytics is not loaded by the current implementation, so no GA4 consent decision is silently omitted.

## Vercel compatibility check

- The portfolio is static after build and uses no persistent server, database, Replit API, or local file writes.
- All bundled media is read from `public/portfolio/assets/` and is emitted with the static build.
- Form delivery is an external Formspree request, configured with a public `VITE_` value.
- Vercel Analytics and Speed Insights are rendered directly and should be enabled in the Vercel dashboard.
- The only Replit-specific development pieces are the optional Vite plugins and workflow environment variables; they are not required to serve the built files on Vercel.

## Release checklist

- Run `pnpm install --frozen-lockfile`.
- Run `pnpm --filter @workspace/ines-mlaouhi-portfolio run typecheck`.
- Run `pnpm --filter @workspace/ines-mlaouhi-portfolio run build`.
- Confirm no missing image paths in `src/data/projects.ts`.
- Confirm `VITE_FORMSPREE_ENDPOINT` is present.
- Confirm the Formspree inbox receives one test from each form.
- Confirm Vercel Analytics receives production traffic.