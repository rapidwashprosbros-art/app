# Rapid CRM

A production-quality CRM for pressure washing & home service businesses, matching the Rapid Wash brand: clean, spacious, blue-and-white, fast, and built to feel like Linear, Stripe, or Apple rather than a legacy CRM.

## Running it
Open `index.html` in any browser — no build step, no dependencies to install. It's three files:
- `index.html` — app shell
- `css/style.css` — full design system (light + dark themes via CSS variables)
- `js/data.js` — in-memory demo data + pressure-washing calculator math
- `js/app.js` — rendering engine and all interactions

## What's included

**Dashboard** — revenue today/week/month, jobs today, upcoming jobs, new leads, outstanding invoices, activity feed, weather widget, quick actions.

**Leads** — 6-stage kanban (New → Contacted → Estimate Sent → Follow-up → Won/Lost), drag-and-drop, lead source tracking.

**Pipeline** — deal kanban across 6 job stages with drag-and-drop and probability bars.

**Estimates** — line items, add-ons, deposits, auto-numbering, one-click convert to Job or Invoice.

**Schedule** — week grid + list view, weather warnings, crew view, "optimize route" action.

**Jobs** — full detail modal: checklist, chemicals, equipment, before/after photo slots, signature capture area, filterable/searchable table.

**Clients** — GPS, gate codes, tags, lifetime value, next recommended service, internal notes, files/photos count, searchable + filterable + paginated table, tabbed detail view.

**Invoicing** — tax, discount, deposit fields, payment recording (cash/check/card/ACH) with running balance, payment history log.

**Automations** — 8 pre-built trigger → action workflows with on/off toggles (review requests, follow-ups, overdue nudges, annual reminders, "on our way" texts).

**Reviews** — rating summary, request tracking, feedback history.

**Reports** — revenue trend, job outcome donut, KPI cards.

**Tools** — 10 working pressure-washing calculators (sqft, instant pricing, roof measurement, SH dilution, chemical mix, surface cleaner time, chemical cost, water usage, profit, job cost), a draggable before/after comparison slider, and maintenance reminders.

**Settings** — company branding/logo, team roles, pricing presets, tax rate, notification toggles, integration cards (QuickBooks/Stripe/Google Calendar/Zapier), appearance/dark mode.

**Premium UX** — dark mode, ⌘K command palette (search views, run quick actions, jump to clients), breadcrumbs, toasts, confetti on wins (paid invoices, completed jobs, won deals), scroll-reveal cards, animated counters/bars, sortable/filterable/paginated tables, empty states, mobile bottom-nav shell.

Verified with an automated headless-browser pass across every view, dark mode, the command palette, drag-and-drop, invoice payments, and mobile breakpoints — zero console/JS errors.

## Turning this into a real product
This is the complete front-end and interaction layer, running on realistic in-memory demo data. To go live:

1. **Backend** — a real database (e.g. Postgres via Supabase) and auth so data persists per business.
2. **Payments** — connect Stripe for the card/ACH flows already wired into the UI.
3. **SMS/Email** — connect Twilio + a transactional email provider for the automation triggers.
4. **PDF export** — server-side invoice/estimate PDF generation.
5. **Native app wrapper** — the UI is mobile-first and PWA-ready (`manifest.json` included). Wrap with **Capacitor** for real iOS/Android projects:
   - `npm install @capacitor/core @capacitor/cli`
   - `npx cap init "Rapid" "com.yourcompany.rapid"`
   - `npx cap add ios` / `npx cap add android`
6. **Store accounts** — Apple Developer ($99/yr) and Google Play Developer ($25 one-time), plus privacy policy and store listing assets.

Ask anytime and I'll build out the backend, Stripe integration, or Capacitor wrapper next.
