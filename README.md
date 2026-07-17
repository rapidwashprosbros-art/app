# Rapid CRM

A production-quality CRM for pressure washing & home service businesses, matching the Rapid Wash brand: clean, spacious, blue-and-white, fast — built to feel like Linear, Stripe, or Apple rather than a legacy CRM.

**Zero build step. Zero dependencies to install. It's plain HTML/CSS/JS**, so it will run the moment you open it — no `npm install`, no compiling, nothing to break.

---

## Option A — Fastest: just open it (no GitHub needed)
1. Download/unzip this folder.
2. Double-click `index.html`.
3. It works. That's the whole setup.

(A couple of visual details — Google Fonts — need an internet connection to load, but all app functionality works fully offline too.)

## Option B — Put it on GitHub (recommended if you want a live URL)

### 1. Create the repo
- Go to [github.com/new](https://github.com/new)
- Name it (e.g. `rapid-crm`) → **Create repository** (leave it empty, no README/gitignore — this folder already has them)

### 2. Push this folder to it
Open a terminal **inside this folder** and run:
```bash
git init
git add .
git commit -m "Initial commit: Rapid CRM"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/rapid-crm.git
git push -u origin main
```
Replace `YOUR-USERNAME/rapid-crm` with your actual GitHub username and repo name.

### 3. Turn on GitHub Pages (makes it a live website)
- On GitHub, go to your repo → **Settings** → **Pages**
- Under "Build and deployment" → **Source**, choose **GitHub Actions**
- That's it — this repo already includes `.github/workflows/deploy.yml`, which will build and publish automatically on every push to `main`.
- After the first push, check the **Actions** tab for the deploy to finish (~30 seconds), then your app is live at:
  `https://YOUR-USERNAME.github.io/rapid-crm/`

No servers, no environment variables, no config to fill in — the workflow is already wired up.

### If you'd rather use GitHub Desktop instead of the command line
1. File → Add Local Repository → select this folder
2. It'll offer to initialize it as a repo → click through
3. Commit all files → Publish repository
4. Then do step 3 above (turn on Pages in Settings) on github.com

---

## Project structure
```
rapid-crm/
├─ index.html                     # app shell
├─ css/
│  └─ style.css                    # full design system — light + dark themes via CSS variables
├─ js/
│  ├─ data.js                       # in-memory demo data + pressure-washing calculator math
│  └─ app.js                        # rendering engine and all interactions
├─ icons/                          # app icons (used by manifest.json)
├─ manifest.json                   # PWA manifest — lets it be "installed" from a browser
├─ .github/workflows/deploy.yml    # auto-deploys to GitHub Pages on push
├─ LICENSE
└─ README.md
```

## What's included
**Dashboard** — revenue today/week/month, jobs today, upcoming jobs, new leads, outstanding invoices, activity feed, weather widget, quick actions.

**Leads** — 6-stage kanban (New → Contacted → Estimate Sent → Follow-up → Won/Lost), drag-and-drop, lead source tracking.

**Pipeline** — deal kanban across 6 job stages with drag-and-drop and probability bars.

**Estimates** — line items, add-ons, deposits, auto-numbering, one-click convert to Job or Invoice.

**Schedule** — week grid + list view, weather warnings, crew view, "optimize route" action.

**Jobs** — full detail modal: checklist, chemicals, equipment, before/after photo slots, signature capture area, filterable/searchable table.

**Clients** — GPS, gate codes, tags, lifetime value, next recommended service, internal notes, files/photos count, searchable + filterable + paginated table.

**Invoicing** — tax, discount, deposit fields, payment recording (cash/check/card/ACH) with running balance and payment history.

**Automations** — 8 pre-built trigger → action workflows with on/off toggles.

**Reviews** — rating summary, request tracking, feedback history.

**Reports** — revenue trend, job outcome donut, KPI cards.

**Tools** — 10 working pressure-washing calculators (sqft, instant pricing, roof measurement, SH dilution, chemical mix, surface cleaner time, chemical cost, water usage, profit, job cost), a draggable before/after comparison slider, and maintenance reminders.

**Settings** — company branding/logo, team roles, pricing presets, tax rate, notification toggles, integration cards, appearance/dark mode.

**Premium UX** — dark mode, ⌘K command palette, breadcrumbs, toasts, confetti on wins, scroll-reveal cards, animated counters, sortable/filterable/paginated tables, empty states, mobile bottom-nav shell.

All data is in-memory demo data (defined in `js/data.js`) so it resets on page reload — see "Next steps" below for making it persistent.

## Next steps (to go from demo to a real, live product)
1. **Backend** — a real database (e.g. Postgres via Supabase) and auth so data persists per business instead of resetting on refresh.
2. **Payments** — connect Stripe for the card/ACH flows already wired into the UI.
3. **SMS/Email** — connect Twilio + a transactional email provider for the automation triggers.
4. **PDF export** — server-side invoice/estimate PDF generation.
5. **Native app wrapper** — the UI is mobile-first and PWA-ready. Wrap with **Capacitor** for real iOS/Android projects to submit to the App Store / Play Store:
   ```bash
   npm install @capacitor/core @capacitor/cli
   npx cap init "Rapid" "com.yourcompany.rapid"
   npx cap add ios
   npx cap add android
   ```
6. **Store accounts** — Apple Developer ($99/yr) and Google Play Developer ($25 one-time), plus a privacy policy and store listing assets.

Ask anytime and I'll build out the backend, Stripe integration, or Capacitor wrapper next.
