/* ============================================================
   RAPID — Design System
   Inspired by rapidwash.us: clean, spacious, professional blue/white,
   soft rounded surfaces, restrained motion. Tuned for a Linear/Stripe/
   Apple-grade feel — quiet chrome, confident type, one accent color.
   ============================================================ */

:root{
  --blue-50:#EEF4FF; --blue-100:#DCE8FF; --blue-500:#2F6BFF; --blue-600:#1E54E8; --blue-700:#173FB0;
  --cyan-500:#06B6D4;
  --green-500:#16A34A; --green-50:#EAF8EF;
  --amber-500:#F59E0B; --amber-50:#FFF6E5;
  --red-500:#E63B32; --red-50:#FDECEA;
  --purple-500:#7C5CFC; --purple-50:#F2EEFF;

  --font-display:'Manrope', 'Inter', sans-serif;
  --font-body:'Inter', sans-serif;

  --radius-xs:8px; --radius-sm:12px; --radius-md:16px; --radius-lg:20px; --radius-xl:26px; --radius-full:999px;

  --ease:cubic-bezier(.22,1,.36,1);
  --ease-spring:cubic-bezier(.34,1.56,.64,1);
  --dur-fast:.15s; --dur:.25s; --dur-slow:.45s;

  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:20px; --space-6:24px; --space-8:32px; --space-10:40px; --space-12:48px;
}

/* ---------- Light theme (default) ---------- */
:root, [data-theme="light"]{
  --bg:#FAFBFE;
  --surface:#FFFFFF;
  --surface-2:#F3F6FB;
  --surface-3:#EBF0F9;
  --border:#E7ECF5;
  --border-strong:#D7DFEE;
  --text:#0E1526;
  --text-dim:#5B6478;
  --text-faint:#9AA4B8;
  --shadow-xs:0 1px 2px rgba(15,23,42,.04);
  --shadow-sm:0 2px 6px rgba(15,23,42,.05), 0 1px 2px rgba(15,23,42,.04);
  --shadow-md:0 12px 28px -10px rgba(15,23,42,.14), 0 4px 10px -4px rgba(15,23,42,.06);
  --shadow-lg:0 28px 60px -20px rgba(15,23,42,.22), 0 10px 24px -8px rgba(15,23,42,.10);
  --overlay:rgba(14,21,38,.45);
  --accent-glow:0 0 0 4px rgba(47,107,255,.14);
  --scrollbar:#D7DFEE;
}

/* ---------- Dark theme ---------- */
[data-theme="dark"]{
  --bg:#0A0E17;
  --surface:#10151F;
  --surface-2:#151B27;
  --surface-3:#1B2230;
  --border:#232B3B;
  --border-strong:#2C3547;
  --text:#F2F5FA;
  --text-dim:#96A1B8;
  --text-faint:#5D6880;
  --shadow-xs:0 1px 2px rgba(0,0,0,.3);
  --shadow-sm:0 2px 8px rgba(0,0,0,.35);
  --shadow-md:0 16px 32px -12px rgba(0,0,0,.55), 0 4px 12px -4px rgba(0,0,0,.4);
  --shadow-lg:0 32px 64px -20px rgba(0,0,0,.65), 0 10px 24px -8px rgba(0,0,0,.5);
  --overlay:rgba(4,7,14,.65);
  --accent-glow:0 0 0 4px rgba(47,107,255,.28);
  --scrollbar:#2C3547;
  --blue-50:#152140; --blue-100:#1B2C55;
  --green-50:#0F2A1C; --amber-50:#2E2410; --red-50:#331815; --purple-50:#221C42;
}

*{box-sizing:border-box; margin:0; padding:0;}
@media (prefers-reduced-motion: reduce){ *{animation-duration:.001ms !important; transition-duration:.001ms !important;} }
html{color-scheme:light; }
html[data-theme="dark"]{color-scheme:dark;}
html,body{height:100%;}
body{
  font-family:var(--font-body); background:var(--bg); color:var(--text);
  -webkit-font-smoothing:antialiased; overflow-x:hidden; font-size:14.5px; line-height:1.5;
  transition:background var(--dur) var(--ease), color var(--dur) var(--ease);
}
h1,h2,h3,h4,.display{font-family:var(--font-display); font-weight:800; letter-spacing:-.02em; color:var(--text);}
button{font-family:inherit; cursor:pointer; border:none; background:none; color:inherit;}
input,select,textarea{font-family:inherit; color:inherit;}
a{color:inherit; text-decoration:none;}
::selection{background:rgba(47,107,255,.22);}
::-webkit-scrollbar{width:9px; height:9px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:var(--scrollbar); border-radius:10px;}
hr{border:none; border-top:1px solid var(--border);}

.flex{display:flex;} .items-center{align-items:center;} .justify-between{justify-content:space-between;} .flex-col{flex-direction:column;}
.gap-4{gap:4px;} .gap-8{gap:8px;} .gap-12{gap:12px;} .gap-16{gap:16px;} .gap-20{gap:20px;}
.text-dim{color:var(--text-dim);} .text-faint{color:var(--text-faint);}
.mono{font-variant-numeric:tabular-nums;}
.w-full{width:100%;}

/* ============================================================ APP SHELL */
#app{display:flex; height:100vh; width:100vw; overflow:hidden;}

/* ---------- Sidebar ---------- */
.sidebar{
  width:248px; flex-shrink:0; background:var(--surface); border-right:1px solid var(--border);
  display:flex; flex-direction:column; padding:18px 14px; position:relative; z-index:30;
  transition:background var(--dur) var(--ease), border-color var(--dur) var(--ease);
}
.brand{display:flex; align-items:center; gap:10px; padding:8px 8px 22px;}
.brand-mark{
  width:34px; height:34px; border-radius:10px; flex-shrink:0;
  background:linear-gradient(135deg, var(--cyan-500), var(--blue-500));
  display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px -2px rgba(47,107,255,.45);
}
.brand-mark svg{width:18px; height:18px;}
.brand-name{font-family:var(--font-display); font-weight:800; font-size:16.5px; letter-spacing:-.02em; color:var(--text);}
.brand-sub{font-size:10px; color:var(--text-faint); font-weight:700; letter-spacing:.08em; text-transform:uppercase; margin-top:-1px;}

.nav-scroll{flex:1; overflow-y:auto; margin:0 -4px; padding:0 4px;}
.nav-label{font-size:10.5px; text-transform:uppercase; letter-spacing:.08em; color:var(--text-faint); font-weight:700; padding:16px 10px 6px;}
.nav-item{
  display:flex; align-items:center; gap:11px; padding:9px 10px; border-radius:9px;
  color:var(--text-dim); font-weight:600; font-size:13.8px; position:relative; width:100%;
  transition:color var(--dur-fast) var(--ease), background var(--dur-fast) var(--ease);
}
.nav-item svg{width:17px; height:17px; flex-shrink:0; opacity:.9;}
.nav-item:hover{color:var(--text); background:var(--surface-2);}
.nav-item.active{color:var(--blue-600); background:var(--blue-50); font-weight:700;}
[data-theme="dark"] .nav-item.active{color:#8FB2FF;}
.nav-badge{margin-left:auto; background:var(--surface-3); color:var(--text-dim); font-size:10.5px; font-weight:800; padding:1px 7px; border-radius:20px;}
.nav-item.active .nav-badge{background:var(--blue-500); color:#fff;}

.sidebar-footer{padding-top:10px; border-top:1px solid var(--border); display:flex; flex-direction:column; gap:6px;}
.theme-toggle{
  display:flex; align-items:center; gap:11px; padding:9px 10px; border-radius:9px; width:100%;
  color:var(--text-dim); font-weight:600; font-size:13.5px; transition:background var(--dur-fast);
}
.theme-toggle:hover{background:var(--surface-2); color:var(--text);}
.theme-toggle svg{width:17px; height:17px;}

/* ---------- Main ---------- */
.main{flex:1; display:flex; flex-direction:column; min-width:0; position:relative;}
.topbar{
  height:64px; flex-shrink:0; background:var(--surface); border-bottom:1px solid var(--border);
  display:flex; align-items:center; padding:0 24px; gap:14px; z-index:20;
  transition:background var(--dur) var(--ease), border-color var(--dur) var(--ease);
}
.breadcrumbs{display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:var(--text-faint); min-width:0;}
.breadcrumbs .crumb-current{color:var(--text); font-weight:700;}
.breadcrumbs svg{width:13px; height:13px; opacity:.6;}

.search-trigger{
  display:flex; align-items:center; gap:9px; background:var(--surface-2); border:1px solid var(--border);
  border-radius:10px; padding:8px 12px; color:var(--text-faint); font-size:13px; font-weight:500; width:260px;
  transition:all var(--dur-fast) var(--ease); margin-left:auto;
}
.search-trigger:hover{border-color:var(--border-strong); color:var(--text-dim);}
.search-trigger svg{width:15px; height:15px; flex-shrink:0;}
.kbd{
  margin-left:auto; font-size:10.5px; font-weight:700; background:var(--surface); border:1px solid var(--border-strong);
  border-radius:5px; padding:1px 5px; color:var(--text-faint);
}
.topbar-right{display:flex; align-items:center; gap:8px;}
.icon-btn{
  width:38px; height:38px; border-radius:10px; display:flex; align-items:center; justify-content:center;
  background:transparent; color:var(--text-dim); position:relative; transition:all var(--dur-fast) var(--ease);
}
.icon-btn svg{width:18px; height:18px;}
.icon-btn:hover{background:var(--surface-2); color:var(--text);}
.icon-btn:active{transform:scale(.92);}
.icon-dot{position:absolute; top:7px; right:8px; width:7px; height:7px; border-radius:50%; background:var(--red-500); border:2px solid var(--surface);}
.avatar{
  width:36px; height:36px; border-radius:10px; background:linear-gradient(135deg,var(--purple-500),var(--blue-500));
  display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:12.5px;
  cursor:pointer; transition:transform var(--dur-fast) var(--ease-spring); flex-shrink:0;
}
.avatar:hover{transform:scale(1.05);}

.view-scroll{flex:1; overflow-y:auto; padding:28px 32px 64px;}
.view{animation:viewIn .35s var(--ease);}
@keyframes viewIn{from{opacity:0; transform:translateY(8px);} to{opacity:1; transform:translateY(0);}}

.page-head{display:flex; align-items:flex-end; justify-content:space-between; margin-bottom:24px; flex-wrap:wrap; gap:14px;}
.page-title{font-size:24px;}
.page-sub{color:var(--text-dim); font-size:13.5px; margin-top:4px; font-weight:500;}

/* ============================================================ BUTTONS */
.btn{
  display:inline-flex; align-items:center; gap:7px; padding:9px 15px; border-radius:10px; font-weight:600;
  font-size:13.5px; transition:transform var(--dur-fast) var(--ease-spring), box-shadow var(--dur-fast), background var(--dur-fast), border-color var(--dur-fast);
  white-space:nowrap; position:relative; overflow:hidden;
}
.btn svg{width:15px; height:15px;}
.btn-primary{background:var(--blue-500); color:#fff; box-shadow:0 1px 2px rgba(47,107,255,.3), 0 4px 10px -4px rgba(47,107,255,.5);}
.btn-primary:hover{background:var(--blue-600); transform:translateY(-1px); box-shadow:0 6px 16px -4px rgba(47,107,255,.55);}
.btn-ghost{background:var(--surface-2); color:var(--text);}
.btn-ghost:hover{background:var(--surface-3);}
.btn-outline{background:transparent; border:1px solid var(--border-strong); color:var(--text);}
.btn-outline:hover{border-color:var(--blue-500); color:var(--blue-600); background:var(--blue-50);}
.btn-danger{background:var(--red-50); color:var(--red-500);}
.btn-danger:hover{background:#FBDAD7;}
.btn:active{transform:translateY(0) scale(.96) !important;}
.btn-sm{padding:6px 11px; font-size:12.3px; border-radius:8px;}
.btn-icon-only{padding:9px; border-radius:9px;}
.btn[disabled]{opacity:.45; pointer-events:none;}
.ripple{position:absolute; border-radius:50%; background:rgba(255,255,255,.5); transform:scale(0); animation:rippleAnim .6s var(--ease) forwards; pointer-events:none;}
[data-theme="dark"] .ripple{background:rgba(255,255,255,.18);}
@keyframes rippleAnim{to{transform:scale(2.4); opacity:0;}}

/* ============================================================ LAYOUT GRID */
.grid{display:grid; gap:16px;}
.grid-4{grid-template-columns:repeat(4,1fr);}
.grid-3{grid-template-columns:repeat(3,1fr);}
.grid-2{grid-template-columns:1.6fr 1fr;}
@media(max-width:1240px){.grid-4{grid-template-columns:repeat(2,1fr);} .grid-3{grid-template-columns:repeat(2,1fr);} .grid-2{grid-template-columns:1fr;}}
@media(max-width:640px){.grid-4{grid-template-columns:1fr;} .grid-3{grid-template-columns:1fr;}}

/* ============================================================ CARDS */
.card{
  background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-lg); padding:20px;
  box-shadow:var(--shadow-xs); transition:transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease), border-color var(--dur), background var(--dur);
  opacity:0; transform:translateY(14px);
}
.card.in-view{animation:cardIn .55s var(--ease) forwards;}
@keyframes cardIn{to{opacity:1; transform:translateY(0);}}
.card.hoverable:hover{transform:translateY(-3px); box-shadow:var(--shadow-md); border-color:var(--border-strong);}
.card.static{opacity:1; transform:none; animation:none;}

.stat-card{padding:18px 20px;}
.stat-top{display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;}
.stat-icon{width:36px; height:36px; border-radius:10px; display:flex; align-items:center; justify-content:center;}
.stat-icon svg{width:17px; height:17px;}
.stat-trend{font-size:11.5px; font-weight:800; padding:2px 8px; border-radius:20px; display:flex; align-items:center; gap:3px;}
.trend-up{background:var(--green-50); color:var(--green-500);}
.trend-down{background:var(--red-50); color:var(--red-500);}
.stat-value{font-family:var(--font-display); font-weight:800; font-size:26px; letter-spacing:-.02em;}
.stat-label{color:var(--text-dim); font-size:12.5px; font-weight:600; margin-top:3px;}

.section-card{background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-lg); box-shadow:var(--shadow-xs); overflow:hidden; transition:background var(--dur), border-color var(--dur);}
.section-head{display:flex; align-items:center; justify-content:space-between; padding:16px 20px; border-bottom:1px solid var(--border); gap:12px; flex-wrap:wrap;}
.section-head h3{font-size:15px; font-weight:700; font-family:var(--font-body);}

/* ============================================================ HERO (subtle, premium) */
.hero{
  position:relative; border-radius:var(--radius-xl); padding:28px 30px; overflow:hidden;
  background:linear-gradient(155deg, var(--blue-50) 0%, var(--surface) 65%);
  border:1px solid var(--border);
}
[data-theme="dark"] .hero{background:linear-gradient(155deg, #101b34 0%, var(--surface) 70%);}
.hero::after{
  content:''; position:absolute; top:-60%; right:-10%; width:46%; height:220%;
  background:linear-gradient(120deg, transparent 30%, rgba(47,107,255,.08) 48%, transparent 65%);
  transform:rotate(6deg); animation:heroSweep 6s ease-in-out infinite;
}
@keyframes heroSweep{0%,60%{transform:rotate(6deg) translateX(-10%);} 100%{transform:rotate(6deg) translateX(60%);}}

/* ============================================================ TABLE */
.table-toolbar{display:flex; align-items:center; gap:10px; padding:14px 20px; border-bottom:1px solid var(--border); flex-wrap:wrap;}
.table-search{
  display:flex; align-items:center; gap:8px; background:var(--surface-2); border:1px solid var(--border); border-radius:9px;
  padding:7px 11px; flex:1; min-width:180px; max-width:320px;
}
.table-search input{background:none; border:none; outline:none; font-size:13px; width:100%; color:var(--text);}
.table-search svg{width:14px; height:14px; color:var(--text-faint); flex-shrink:0;}
.filter-chip{
  display:flex; align-items:center; gap:6px; padding:7px 12px; border-radius:9px; border:1px solid var(--border);
  font-size:12.5px; font-weight:600; color:var(--text-dim); background:var(--surface); transition:all var(--dur-fast);
}
.filter-chip:hover, .filter-chip.active{border-color:var(--blue-500); color:var(--blue-600); background:var(--blue-50);}
.filter-chip svg{width:13px; height:13px;}
.th-sort{display:inline-flex; align-items:center; gap:4px; cursor:pointer; user-select:none;}
.th-sort svg{width:11px; height:11px; opacity:.5;}

.tbl{width:100%; border-collapse:collapse;}
.tbl th{
  text-align:left; font-size:10.5px; text-transform:uppercase; letter-spacing:.05em; color:var(--text-faint);
  font-weight:700; padding:11px 20px; border-bottom:1px solid var(--border); background:var(--surface-2);
}
.tbl td{padding:13px 20px; border-bottom:1px solid var(--border); font-size:13.3px; vertical-align:middle;}
.tbl tr{transition:background var(--dur-fast);}
.tbl tbody tr:hover{background:var(--surface-2);}
.tbl tbody tr:last-child td{border-bottom:none;}
.row-name{font-weight:700; color:var(--text);}
.table-pagination{display:flex; align-items:center; justify-content:space-between; padding:12px 20px; border-top:1px solid var(--border);}
.page-btn{width:30px; height:30px; border-radius:8px; display:flex; align-items:center; justify-content:center; background:var(--surface-2); color:var(--text-dim); font-size:12.5px; font-weight:700; transition:all var(--dur-fast);}
.page-btn:hover{background:var(--surface-3);}
.page-btn.active{background:var(--blue-500); color:#fff;}
.page-btn[disabled]{opacity:.4; pointer-events:none;}

/* ============================================================ PILLS / BADGES */
.pill{display:inline-flex; align-items:center; gap:5px; font-size:11.5px; font-weight:700; padding:3px 10px; border-radius:20px; white-space:nowrap;}
.pill-dot{width:6px; height:6px; border-radius:50%; flex-shrink:0;}
.pill-blue{background:var(--blue-50); color:var(--blue-600);} [data-theme="dark"] .pill-blue{color:#8FB2FF;}
.pill-green{background:var(--green-50); color:var(--green-500);}
.pill-amber{background:var(--amber-50); color:#B36B00;} [data-theme="dark"] .pill-amber{color:var(--amber-500);}
.pill-red{background:var(--red-50); color:var(--red-500);}
.pill-purple{background:var(--purple-50); color:var(--purple-500);}
.pill-gray{background:var(--surface-3); color:var(--text-dim);}

.avatar-sm{width:32px; height:32px; border-radius:9px; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:12px; flex-shrink:0;}

/* ============================================================ KANBAN */
.kanban{display:flex; gap:14px; overflow-x:auto; padding-bottom:12px; align-items:flex-start;}
.kanban-col{min-width:270px; max-width:270px; background:var(--surface-2); border-radius:var(--radius-md); padding:12px; flex-shrink:0; transition:background var(--dur-fast);}
.kanban-col.drag-over{background:var(--blue-100);}
.kanban-col-head{display:flex; align-items:center; justify-content:space-between; padding:2px 4px 10px;}
.kanban-col-head h4{font-size:12.8px; font-family:var(--font-body); font-weight:700;}
.kanban-count{font-size:10.5px; font-weight:800; background:var(--surface); color:var(--text-dim); padding:2px 7px; border-radius:20px;}
.kanban-sum{font-size:11px; color:var(--text-dim); font-weight:600; padding:0 4px 8px;}
.deal-card{
  background:var(--surface); border:1px solid var(--border); border-radius:13px; padding:13px; margin-bottom:9px;
  cursor:grab; box-shadow:var(--shadow-xs); transition:transform var(--dur-fast) var(--ease), box-shadow var(--dur-fast), opacity var(--dur-fast);
}
.deal-card:hover{transform:translateY(-2px); box-shadow:var(--shadow-sm); border-color:var(--border-strong);}
.deal-card.dragging{opacity:.35; cursor:grabbing;}
.deal-card-title{font-weight:700; font-size:13px; margin-bottom:5px;}
.deal-card-value{font-family:var(--font-display); font-weight:800; color:var(--blue-600); font-size:14px; margin-bottom:7px;}
[data-theme="dark"] .deal-card-value{color:#8FB2FF;}
.deal-card-foot{display:flex; align-items:center; justify-content:space-between;}
.probability-bar{height:4px; background:var(--surface-3); border-radius:4px; overflow:hidden; margin-top:8px;}
.probability-fill{height:100%; border-radius:4px; background:linear-gradient(90deg,var(--cyan-500),var(--blue-500)); width:0%; transition:width .8s var(--ease);}

/* ============================================================ CALENDAR */
.cal-toolbar{display:flex; align-items:center; justify-content:space-between; margin-bottom:18px; flex-wrap:wrap; gap:12px;}
.cal-grid{display:grid; grid-template-columns:repeat(7,1fr); gap:8px;}
.cal-day-head{text-align:center; font-size:10.5px; font-weight:800; color:var(--text-faint); text-transform:uppercase; letter-spacing:.05em; padding-bottom:6px;}
.cal-cell{background:var(--surface); border:1px solid var(--border); border-radius:13px; min-height:104px; padding:8px; transition:box-shadow var(--dur-fast), transform var(--dur-fast); position:relative;}
.cal-cell:hover{box-shadow:var(--shadow-sm);}
.cal-cell.today{border-color:var(--blue-500); box-shadow:var(--accent-glow);}
.cal-cell.other-month{opacity:.4;}
.cal-date{font-size:11.5px; font-weight:800; color:var(--text-dim); margin-bottom:6px;}
.cal-cell.today .cal-date{color:var(--blue-600);}
.cal-job{font-size:10px; font-weight:700; padding:3px 7px; border-radius:6px; margin-bottom:3px; color:#fff; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; cursor:grab; transition:transform var(--dur-fast);}
.cal-job:hover{transform:scale(1.03);}
.weather-warn{display:flex; align-items:center; gap:4px; font-size:9.5px; font-weight:700; color:var(--amber-500); margin-top:3px;}
.weather-warn svg{width:10px; height:10px;}

.job-row{display:flex; align-items:center; gap:14px; padding:14px 20px; border-bottom:1px solid var(--border); transition:background var(--dur-fast);}
.job-row:hover{background:var(--surface-2);}
.job-row:last-child{border-bottom:none;}
.job-time{width:68px; flex-shrink:0; text-align:center;}
.job-time .t1{font-weight:800; font-size:13px; font-family:var(--font-display);}
.job-time .t2{font-size:10px; color:var(--text-faint); font-weight:700; text-transform:uppercase;}
.status-check{width:24px; height:24px; border-radius:7px; border:2px solid var(--border-strong); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all var(--dur-fast) var(--ease-spring);}
.status-check.done{background:var(--green-500); border-color:var(--green-500); animation:checkPop .4s var(--ease-spring);}
@keyframes checkPop{0%{transform:scale(.6);} 60%{transform:scale(1.25);} 100%{transform:scale(1);}}
.status-check svg{width:13px; height:13px; color:#fff; opacity:0; transition:opacity .15s;}
.status-check.done svg{opacity:1;}

/* ============================================================ PROGRESS */
.progress-track{height:7px; background:var(--surface-3); border-radius:8px; overflow:hidden;}
.progress-fill{height:100%; border-radius:8px; background:linear-gradient(90deg,var(--cyan-500),var(--blue-500)); width:0%; transition:width 1s var(--ease);}

/* ============================================================ MODAL / DRAWER */
.modal-backdrop{position:fixed; inset:0; background:var(--overlay); backdrop-filter:blur(3px); z-index:100; display:none; align-items:center; justify-content:center; padding:20px;}
.modal-backdrop.open{display:flex; animation:fadeIn .2s;}
@keyframes fadeIn{from{opacity:0;} to{opacity:1;}}
.modal{background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-lg); width:100%; max-width:540px; max-height:88vh; overflow-y:auto; box-shadow:var(--shadow-lg); transform:translateY(20px) scale(.97); opacity:0; animation:modalIn .3s var(--ease-spring) forwards;}
.modal.modal-lg{max-width:820px;}
@keyframes modalIn{to{transform:translateY(0) scale(1); opacity:1;}}
.modal-head{display:flex; align-items:center; justify-content:space-between; padding:18px 22px; border-bottom:1px solid var(--border); position:sticky; top:0; background:var(--surface); z-index:2;}
.modal-head h3{font-size:16px;}
.modal-body{padding:20px 22px; display:flex; flex-direction:column; gap:14px;}
.modal-foot{padding:16px 22px; border-top:1px solid var(--border); display:flex; justify-content:flex-end; gap:9px; position:sticky; bottom:0; background:var(--surface);}
.field{display:flex; flex-direction:column; gap:6px;}
.field label{font-size:12px; font-weight:700; color:var(--text-dim);}
.field input, .field select, .field textarea{
  border:1px solid var(--border-strong); border-radius:10px; padding:9px 12px; font-size:13.5px; outline:none;
  transition:all var(--dur-fast) var(--ease); background:var(--surface-2); color:var(--text);
}
.field input:focus, .field select:focus, .field textarea:focus{border-color:var(--blue-500); background:var(--surface); box-shadow:var(--accent-glow);}
.field-row{display:grid; grid-template-columns:1fr 1fr; gap:11px;}
.field-row-3{display:grid; grid-template-columns:1fr 1fr 1fr; gap:11px;}
.close-x{width:32px; height:32px; border-radius:9px; display:flex; align-items:center; justify-content:center; background:var(--surface-2); transition:all var(--dur-fast);}
.close-x svg{width:15px; height:15px;}
.close-x:hover{background:var(--surface-3); transform:rotate(90deg);}
.tabs{display:flex; gap:2px; border-bottom:1px solid var(--border); padding:0 22px;}
.tab-btn{padding:11px 4px; margin-right:18px; font-size:13px; font-weight:700; color:var(--text-faint); border-bottom:2px solid transparent; transition:all var(--dur-fast);}
.tab-btn.active{color:var(--blue-600); border-color:var(--blue-500);}
[data-theme="dark"] .tab-btn.active{color:#8FB2FF;}

/* ============================================================ COMMAND PALETTE */
.cmdk-backdrop{position:fixed; inset:0; background:var(--overlay); backdrop-filter:blur(3px); z-index:200; display:none; align-items:flex-start; justify-content:center; padding-top:12vh;}
.cmdk-backdrop.open{display:flex; animation:fadeIn .15s;}
.cmdk{width:100%; max-width:560px; background:var(--surface); border:1px solid var(--border); border-radius:var(--radius-lg); box-shadow:var(--shadow-lg); overflow:hidden; transform:translateY(-8px); opacity:0; animation:modalIn .22s var(--ease-spring) forwards;}
.cmdk-input-wrap{display:flex; align-items:center; gap:10px; padding:16px 18px; border-bottom:1px solid var(--border);}
.cmdk-input-wrap svg{width:17px; height:17px; color:var(--text-faint);}
.cmdk-input-wrap input{flex:1; background:none; border:none; outline:none; font-size:15px; color:var(--text);}
.cmdk-list{max-height:360px; overflow-y:auto; padding:8px;}
.cmdk-group-label{font-size:10.5px; font-weight:700; text-transform:uppercase; letter-spacing:.06em; color:var(--text-faint); padding:8px 10px 4px;}
.cmdk-item{display:flex; align-items:center; gap:11px; padding:10px 10px; border-radius:9px; font-size:13.5px; font-weight:600; color:var(--text); cursor:pointer; transition:background var(--dur-fast);}
.cmdk-item svg{width:16px; height:16px; color:var(--text-dim); flex-shrink:0;}
.cmdk-item:hover, .cmdk-item.sel{background:var(--surface-2);}
.cmdk-item .cmdk-hint{margin-left:auto; font-size:11px; color:var(--text-faint); font-weight:600;}

/* ============================================================ TOASTS */
#toast-wrap{position:fixed; bottom:22px; right:22px; display:flex; flex-direction:column; gap:9px; z-index:300;}
.toast{background:var(--text); color:var(--bg); padding:12px 16px; border-radius:12px; display:flex; align-items:center; gap:11px; box-shadow:var(--shadow-lg); min-width:270px; animation:toastIn .35s var(--ease-spring); font-size:13px; font-weight:600;}
.toast.leaving{animation:toastOut .28s var(--ease) forwards;}
@keyframes toastIn{from{transform:translateX(50px) scale(.92); opacity:0;} to{transform:translateX(0) scale(1); opacity:1;}}
@keyframes toastOut{to{transform:translateX(50px) scale(.92); opacity:0;}}
.toast-icon{width:26px; height:26px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; background:rgba(255,255,255,.14);}
.toast-icon svg{width:14px; height:14px;}

/* ============================================================ CONFETTI */
#confetti-canvas{position:fixed; inset:0; pointer-events:none; z-index:400;}

/* ============================================================ EMPTY STATE */
.empty-state{display:flex; flex-direction:column; align-items:center; text-align:center; padding:56px 20px; color:var(--text-dim);}
.empty-state .empty-illo{width:88px; height:88px; border-radius:24px; background:var(--surface-2); display:flex; align-items:center; justify-content:center; margin-bottom:18px;}
.empty-state .empty-illo svg{width:38px; height:38px; color:var(--text-faint);}
.empty-state h4{color:var(--text); font-size:15px; margin-bottom:6px;}
.empty-state p{font-size:13px; max-width:320px; margin-bottom:16px;}

/* ============================================================ SKELETON */
.skel{background:linear-gradient(90deg, var(--surface-2) 25%, var(--surface-3) 37%, var(--surface-2) 63%); background-size:400% 100%; animation:skelShine 1.4s ease infinite; border-radius:8px;}
@keyframes skelShine{0%{background-position:100% 50%;} 100%{background-position:0 50%;}}

/* ============================================================ AUTOMATION */
.automation-row{display:flex; align-items:center; gap:15px; padding:16px 20px; border-bottom:1px solid var(--border); transition:background var(--dur-fast);}
.automation-row:hover{background:var(--surface-2);}
.automation-row:last-child{border-bottom:none;}
.flow-icon{width:40px; height:40px; border-radius:11px; display:flex; align-items:center; justify-content:center; flex-shrink:0;}
.flow-icon svg{width:18px; height:18px;}
.toggle{width:40px; height:23px; border-radius:20px; background:var(--surface-3); position:relative; transition:background var(--dur-fast) var(--ease); flex-shrink:0;}
.toggle.on{background:var(--green-500);}
.toggle-knob{position:absolute; top:2.5px; left:2.5px; width:18px; height:18px; border-radius:50%; background:#fff; box-shadow:var(--shadow-xs); transition:transform var(--dur-fast) var(--ease-spring);}
.toggle.on .toggle-knob{transform:translateX(17px);}
.flow-chain{display:flex; align-items:center; gap:7px; font-size:12px; color:var(--text-dim); font-weight:600; flex-wrap:wrap;}
.chain-node{background:var(--surface-2); padding:4px 10px; border-radius:20px; font-weight:700; color:var(--text);}
.chain-arrow{color:var(--text-faint);}

/* ============================================================ CHARTS */
.bar-chart{display:flex; align-items:flex-end; gap:10px; height:170px; padding-top:14px;}
.bar-col{flex:1; display:flex; flex-direction:column; align-items:center; gap:8px; height:100%; justify-content:flex-end;}
.bar{width:100%; border-radius:7px 7px 3px 3px; background:linear-gradient(180deg,var(--cyan-500),var(--blue-500)); height:0%; transition:height 1s var(--ease); position:relative;}
.bar-label{font-size:10px; color:var(--text-faint); font-weight:700;}
.donut-wrap{position:relative; width:140px; height:140px; margin:0 auto;}
.donut-center{position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center;}
.donut-center .n{font-family:var(--font-display); font-weight:800; font-size:20px;}
.donut-center .l{font-size:10px; color:var(--text-dim); font-weight:700;}

/* ============================================================ MISC UI */
.segmented{display:flex; background:var(--surface-2); border-radius:10px; padding:3px; gap:2px;}
.segmented button{padding:7px 13px; border-radius:8px; font-size:12.5px; font-weight:700; color:var(--text-dim); transition:all var(--dur-fast) var(--ease);}
.segmented button.active{background:var(--surface); color:var(--text); box-shadow:var(--shadow-xs);}
.person-card{display:flex; flex-direction:column; align-items:center; text-align:center; padding:24px 16px;}
.person-avatar{width:58px; height:58px; border-radius:16px; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:800; font-size:18px; margin-bottom:11px;}
.tag{display:inline-flex; align-items:center; gap:5px; background:var(--surface-2); border:1px solid var(--border); padding:4px 10px; border-radius:20px; font-size:11.5px; font-weight:700; color:var(--text-dim);}
.divider{height:1px; background:var(--border); margin:14px 0;}
.checklist-item{display:flex; align-items:center; gap:10px; padding:9px 0; border-bottom:1px solid var(--border);}
.checklist-item:last-child{border:none;}
.photo-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:8px;}
.photo-tile{aspect-ratio:1; border-radius:11px; background:var(--surface-2); border:1px dashed var(--border-strong); display:flex; align-items:center; justify-content:center; color:var(--text-faint); overflow:hidden;}
.photo-tile svg{width:20px; height:20px;}
.photo-tile img{width:100%; height:100%; object-fit:cover;}

/* Before/after slider */
.ba-slider{position:relative; border-radius:16px; overflow:hidden; aspect-ratio:16/9; user-select:none; box-shadow:var(--shadow-sm);}
.ba-slider .ba-img{position:absolute; inset:0; width:100%; height:100%; object-fit:cover;}
.ba-slider .ba-after{clip-path:inset(0 0 0 50%);}
.ba-handle{position:absolute; top:0; bottom:0; left:50%; width:3px; background:#fff; cursor:ew-resize; box-shadow:0 0 0 1px rgba(0,0,0,.1);}
.ba-handle::after{content:'↔'; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:38px; height:38px; background:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-md); font-size:16px; color:var(--text);}
.ba-label{position:absolute; top:10px; font-size:11px; font-weight:800; background:rgba(0,0,0,.55); color:#fff; padding:3px 9px; border-radius:20px; letter-spacing:.03em;}
.ba-label.before-lbl{left:10px;} .ba-label.after-lbl{right:10px;}

/* Weather widget */
.weather-card{background:linear-gradient(135deg,#1a3a6b,#2F6BFF); border-radius:var(--radius-lg); padding:18px 20px; color:#fff; position:relative; overflow:hidden;}
.weather-temp{font-family:var(--font-display); font-weight:800; font-size:32px;}
.weather-sub{font-size:12px; color:#CBDCFF; font-weight:600;}

/* Calculator tool card */
.tool-card{cursor:pointer;}
.tool-icon{width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; margin-bottom:12px;}
.tool-icon svg{width:20px; height:20px;}
.calc-result{background:var(--blue-50); border:1px solid var(--blue-100); border-radius:13px; padding:16px; text-align:center; margin-top:6px;}
[data-theme="dark"] .calc-result{background:var(--blue-50); border-color:var(--border);}
.calc-result .cr-val{font-family:var(--font-display); font-weight:800; font-size:26px; color:var(--blue-600);}
[data-theme="dark"] .calc-result .cr-val{color:#8FB2FF;}
.calc-result .cr-lbl{font-size:11.5px; color:var(--text-dim); font-weight:700; margin-top:2px;}

/* Boot */
#boot{position:fixed; inset:0; background:var(--bg); display:flex; align-items:center; justify-content:center; z-index:1000; transition:opacity .45s var(--ease), visibility .45s;}
#boot.hide{opacity:0; visibility:hidden;}
.boot-mark{width:56px; height:56px; border-radius:16px; background:linear-gradient(135deg,var(--cyan-500),var(--blue-500)); display:flex; align-items:center; justify-content:center; animation:bootPulse 1.1s ease-in-out infinite;}
.boot-mark svg{width:28px; height:28px; color:#fff;}
@keyframes bootPulse{0%,100%{transform:scale(1);} 50%{transform:scale(1.08);}}

/* Mobile bottom nav */
.bottom-nav{display:none;}

@media(max-width:980px){
  .sidebar{display:none;}
  .view-scroll{padding:16px 14px 88px;}
  .topbar{padding:0 14px;}
  .search-trigger{width:auto; flex:1; max-width:none;}
  .bottom-nav{display:flex; position:fixed; bottom:0; left:0; right:0; height:64px; background:var(--surface); border-top:1px solid var(--border); z-index:50; padding-bottom:env(safe-area-inset-bottom);}
  .bn-item{flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px; color:var(--text-faint); transition:color var(--dur-fast);}
  .bn-item svg{width:20px; height:20px;}
  .bn-item span{font-size:9.5px; font-weight:700;}
  .bn-item.active{color:var(--blue-500);}
  #app{height:100dvh;}
}
