/* ============================================================
   RAPID — App engine
   ============================================================ */
const ICON = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/></svg>',
  leads:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5h13l3.5 7v7a2 2 0 01-2 2H4a2 2 0 01-2-2v-7l3.5-7z"/></svg>',
  pipeline:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5h18M3 5l7 8v6l4 2v-8l7-8"/></svg>',
  estimates:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2h6l5 5v13a2 2 0 01-2 2H9a2 2 0 01-2-2V4a2 2 0 012-2z" transform="translate(1,0)"/><path d="M9 12h6M9 16h4"/></svg>',
  schedule:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4.5" width="18" height="16" rx="3"/><path d="M3 9.5h18M8 3v3M16 3v3"/></svg>',
  jobs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="7" width="19" height="13" rx="2.5"/><path d="M8 7V5.5A2.5 2.5 0 0110.5 3h3A2.5 2.5 0 0116 5.5V7M2.5 12.5h19"/></svg>',
  clients:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17.5" cy="8.5" r="2.7"/><path d="M15.7 14.2c2.9.3 5.3 2.5 5.3 5.8"/></svg>',
  invoices:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3h10l2 3v15l-3-2-2 2-2-2-2 2-2-2-3 2V6l2-3z"/><path d="M9 9h6M9 13h6M9 17h3"/></svg>',
  automations:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
  reviews:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.1 6.6 7.2.9-5.3 5 1.4 7.2L12 18.3 5.6 21.7 7 14.5l-5.3-5 7.2-.9L12 2z"/></svg>',
  reports:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>',
  tools:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-3-3z"/><path d="M14.7 6.3l3-3 3 3-3 3"/></svg>',
  team:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="3.3"/><circle cx="17" cy="9" r="2.6"/><path d="M2 20c0-3.3 2.7-5.8 6-5.8s6 2.5 6 5.8M14.5 15c2.6.3 5 2.1 5 5"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3.3"/><path d="M19.4 13.5a7.6 7.6 0 000-3l2-1.6-2-3.4-2.4.7a7.6 7.6 0 00-2.6-1.5L14 2h-4l-.4 2.7a7.6 7.6 0 00-2.6 1.5l-2.4-.7-2 3.4 2 1.6a7.6 7.6 0 000 3l-2 1.6 2 3.4 2.4-.7a7.6 7.6 0 002.6 1.5L10 22h4l.4-2.7a7.6 7.6 0 002.6-1.5l2.4.7 2-3.4-2-1.6z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M4 12l5 5L20 6"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>',
  dollar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 6.5C17 4.6 14.8 3 12 3s-5 1.6-5 3.7c0 4.6 10 2.3 10 6.9 0 2.1-2.2 3.7-5 3.7s-5-1.6-5-3.7"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6l9 7 9-7"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  chevronR:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg>',
  chevronDown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>',
  command:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3a3 3 0 00-3 3v12a3 3 0 003-3V6a3 3 0 013-3h0"/></svg>',
  camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z"/><circle cx="12" cy="13.5" r="3.5"/></svg>',
  upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 16V4M7 9l5-5 5 5M4 20h16"/></svg>',
  signature:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17s2-1 4-1 3 2 5 2 3-2 5-2 4 1 4 1M4 12c2-4 4-8 6-8 3 0 1 9 3 9s2-4 4-4 2 3 3 3"/></svg>',
  filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16l-6 8v6l-4 2v-8L4 5z"/></svg>',
  droplet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2s7 8 7 13a7 7 0 01-14 0c0-5 7-13 7-13z"/></svg>',
  calc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M7 11h1M11 11h1M15 11h1M7 15h1M11 15h1M15 15h1M7 19h1M11 19h1M15 19h1"/></svg>',
  route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8 7c3 0 3 5 6 5h2"/></svg>',
  cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 18a4.5 4.5 0 010-9 5.5 5.5 0 0110.7 1.6A4 4 0 0117 18H7z"/></svg>',
  warn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3L2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/></svg>',
  wrench:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-3-3z"/></svg>',
  arrowRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20"/></svg>',
  building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/></svg>',
};

/* ---------- Nav config ---------- */
const NAV = [
  {group:'Overview', items:[
    {key:'dashboard', label:'Dashboard', icon:'dashboard'},
  ]},
  {group:'Sales', items:[
    {key:'leads', label:'Leads', icon:'leads'},
    {key:'pipeline', label:'Pipeline', icon:'pipeline'},
    {key:'estimates', label:'Estimates', icon:'estimates'},
  ]},
  {group:'Operations', items:[
    {key:'schedule', label:'Schedule', icon:'schedule'},
    {key:'jobs', label:'Jobs', icon:'jobs'},
    {key:'clients', label:'Clients', icon:'clients'},
  ]},
  {group:'Money', items:[
    {key:'invoices', label:'Invoicing', icon:'invoices'},
    {key:'reports', label:'Reports', icon:'reports'},
  ]},
  {group:'Growth', items:[
    {key:'automations', label:'Automations', icon:'automations'},
    {key:'reviews', label:'Reviews', icon:'reviews'},
  ]},
  {group:'Workspace', items:[
    {key:'tools', label:'Tools', icon:'tools'},
    {key:'team', label:'Team', icon:'team'},
    {key:'settings', label:'Settings', icon:'settings'},
  ]},
];
const NAV_FLAT = NAV.flatMap(g=>g.items);
const VIEW_LABEL = Object.fromEntries(NAV_FLAT.map(n=>[n.key,n.label]));

function buildNav(){
  document.getElementById('nav-main').innerHTML = NAV.map(g => `
    <div class="nav-label">${g.group}</div>
    ${g.items.map(n => `
      <button class="nav-item ${state.view===n.key?'active':''}" data-nav="${n.key}">
        ${ICON[n.icon]}<span>${n.label}</span>
        ${dynamicBadge(n.key)}
      </button>`).join('')}
  `).join('');

  document.getElementById('bottom-nav').innerHTML = ['dashboard','pipeline','schedule','jobs','clients'].map(key=>{
    const n = NAV_FLAT.find(x=>x.key===key);
    return `<button class="bn-item ${state.view===key?'active':''}" data-nav="${key}">${ICON[n.icon]}<span>${n.label}</span></button>`;
  }).join('');

  document.querySelectorAll('[data-nav]').forEach(btn=>{
    btn.addEventListener('click', ()=> setView(btn.dataset.nav));
  });
}
function dynamicBadge(key){
  if(key==='invoices'){ const n = state.invoices.filter(i=>i.status==='overdue').length; return n ? `<span class="nav-badge">${n}</span>` : ''; }
  if(key==='leads'){ const n = state.leads.filter(l=>l.stage==='New').length; return n ? `<span class="nav-badge">${n}</span>` : ''; }
  return '';
}

function setView(view, breadcrumbExtra){
  state.view = view;
  state._crumbExtra = breadcrumbExtra || null;
  buildNav();
  render();
  document.getElementById('view-scroll').scrollTo({top:0, behavior:'smooth'});
}

function buildBreadcrumbs(){
  const label = VIEW_LABEL[state.view] || 'Dashboard';
  let html = `<span>Rapid</span>${ICON.chevronR}<span class="crumb-current">${label}</span>`;
  if(state._crumbExtra) html += `${ICON.chevronR}<span class="crumb-current">${state._crumbExtra}</span>`;
  document.getElementById('breadcrumbs').innerHTML = html;
}

/* ---------- Theme ---------- */
function applyTheme(){
  document.documentElement.setAttribute('data-theme', state.theme);
  const icon = document.getElementById('theme-icon');
  if(icon) icon.innerHTML = state.theme==='dark' ? ICON.sun : ICON.moon;
  const label = document.getElementById('theme-label');
  if(label) label.textContent = state.theme==='dark' ? 'Light mode' : 'Dark mode';
}
function toggleTheme(){
  state.theme = state.theme==='dark' ? 'light' : 'dark';
  applyTheme();
  toast(state.theme==='dark' ? '🌙 Dark mode on' : '☀️ Light mode on');
}

/* ---------- Toasts ---------- */
function toast(msg, type='info'){
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="toast-icon">${ICON.bolt}</span><span>${msg}</span>`;
  wrap.appendChild(el);
  setTimeout(()=>{ el.classList.add('leaving'); setTimeout(()=>el.remove(), 300); }, 3200);
}

/* ---------- Confetti ---------- */
function confettiBurst(x, y){
  const canvas = document.getElementById('confetti-canvas');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const colors = ['#2F6BFF','#06B6D4','#F59E0B','#16A34A','#7C5CFC'];
  let particles = Array.from({length:56}, () => ({
    x: x ?? canvas.width/2, y: y ?? canvas.height/2,
    vx: (Math.random()-0.5)*13, vy: (Math.random()-1.6)*13,
    size: 4+Math.random()*5, color: colors[Math.floor(Math.random()*colors.length)],
    rot: Math.random()*360, vrot:(Math.random()-0.5)*20, life:1
  }));
  function frame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
      p.vy += 0.35; p.x += p.vx; p.y += p.vy; p.rot += p.vrot; p.life -= 0.013;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.globalAlpha = Math.max(p.life,0);
      ctx.fillStyle = p.color; ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size*0.6);
      ctx.restore();
    });
    particles = particles.filter(p=>p.life>0);
    if(particles.length) requestAnimationFrame(frame);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  frame();
}

/* ---------- Ripple ---------- */
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.btn, .icon-btn, .page-btn, .filter-chip');
  if(!btn) return;
  const rect = btn.getBoundingClientRect();
  const r = document.createElement('span');
  r.className = 'ripple';
  const size = Math.max(rect.width, rect.height);
  r.style.width = r.style.height = size+'px';
  r.style.left = (e.clientX-rect.left-size/2)+'px';
  r.style.top = (e.clientY-rect.top-size/2)+'px';
  btn.style.position = btn.style.position || 'relative';
  btn.appendChild(r);
  setTimeout(()=>r.remove(), 650);
});

/* ---------- Scroll reveal ---------- */
let observer;
function initReveal(){
  if(observer) observer.disconnect();
  observer = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in-view'); observer.unobserve(en.target); } });
  }, {threshold:0.08});
  document.querySelectorAll('.card:not(.static)').forEach(c=>observer.observe(c));
}

/* ---------- Animated counters ---------- */
function animateCount(el, target, prefix=''){
  const dur = 850; const start = performance.now();
  function step(now){
    const p = Math.min((now-start)/dur, 1);
    const eased = 1-Math.pow(1-p,3);
    const val = target*eased;
    el.textContent = prefix + Math.round(val).toLocaleString('en-US');
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
function animateAllStats(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    animateCount(el, parseFloat(el.dataset.count), el.dataset.prefix || '');
  });
  document.querySelectorAll('.progress-fill, .probability-fill').forEach(el=>{
    const w = el.dataset.width; if(w!==undefined) requestAnimationFrame(()=> el.style.width = w+'%');
  });
  document.querySelectorAll('.bar').forEach(el=>{
    const h = el.dataset.height; if(h!==undefined) requestAnimationFrame(()=> el.style.height = h+'%');
  });
}

/* ---------- Modal helpers ---------- */
function openModal(html, large){
  document.getElementById('modal-content').className = 'modal' + (large ? ' modal-lg' : '');
  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-backdrop').classList.add('open');
}
function closeModal(){ document.getElementById('modal-backdrop').classList.remove('open'); }
document.getElementById('modal-backdrop').addEventListener('click', (e)=>{
  if(e.target.id==='modal-backdrop') closeModal();
});
function modalShell(title, bodyHtml, footHtml){
  return `
    <div class="modal-head"><h3>${title}</h3><button class="close-x" onclick="closeModal()">${ICON.x}</button></div>
    <div class="modal-body">${bodyHtml}</div>
    <div class="modal-foot">${footHtml}</div>
  `;
}

/* ---------- Command palette ---------- */
const CMDK_ACTIONS = [
  {label:'New Job', icon:'jobs', action:()=>openModal(newJobModal())},
  {label:'New Estimate', icon:'estimates', action:()=>openModal(newEstimateModal())},
  {label:'New Invoice', icon:'invoices', action:()=>openModal(newInvoiceModal())},
  {label:'New Client', icon:'clients', action:()=>openModal(newClientModal())},
  {label:'New Lead', icon:'leads', action:()=>openModal(newLeadModal())},
  {label:'Toggle dark mode', icon:'moon', action:()=>toggleTheme()},
];
function openCmdk(){
  document.getElementById('cmdk-backdrop').classList.add('open');
  const input = document.getElementById('cmdk-input');
  input.value=''; renderCmdkList(''); setTimeout(()=>input.focus(), 30);
}
function closeCmdk(){ document.getElementById('cmdk-backdrop').classList.remove('open'); }
function renderCmdkList(q){
  q = q.toLowerCase();
  const navMatches = NAV_FLAT.filter(n=>n.label.toLowerCase().includes(q));
  const actionMatches = CMDK_ACTIONS.filter(a=>a.label.toLowerCase().includes(q));
  const clientMatches = q.length>1 ? state.clients.filter(c=>c.name.toLowerCase().includes(q)).slice(0,4) : [];
  let html = '';
  if(navMatches.length) html += `<div class="cmdk-group-label">Go to</div>` + navMatches.map(n=>`
    <div class="cmdk-item" data-cmdk-nav="${n.key}">${ICON[n.icon]}<span>${n.label}</span></div>`).join('');
  if(actionMatches.length) html += `<div class="cmdk-group-label">Actions</div>` + actionMatches.map((a,i)=>`
    <div class="cmdk-item" data-cmdk-action="${i}">${ICON[a.icon]}<span>${a.label}</span></div>`).join('');
  if(clientMatches.length) html += `<div class="cmdk-group-label">Clients</div>` + clientMatches.map(c=>`
    <div class="cmdk-item" data-cmdk-client="${c.id}">${ICON.clients}<span>${c.name}</span><span class="cmdk-hint">${c.company}</span></div>`).join('');
  if(!html) html = `<div style="padding:24px; text-align:center; color:var(--text-faint); font-size:13px;">No results</div>`;
  document.getElementById('cmdk-list').innerHTML = html;
  document.querySelectorAll('[data-cmdk-nav]').forEach(el=> el.addEventListener('click', ()=>{ closeCmdk(); setView(el.dataset.cmdkNav); }));
  document.querySelectorAll('[data-cmdk-action]').forEach(el=> el.addEventListener('click', ()=>{ closeCmdk(); CMDK_ACTIONS[el.dataset.cmdkAction].action(); }));
  document.querySelectorAll('[data-cmdk-client]').forEach(el=> el.addEventListener('click', ()=>{ closeCmdk(); openModal(clientDetailModal(state.clients.find(c=>c.id===el.dataset.cmdkClient)), true); }));
}
document.addEventListener('keydown', (e)=>{
  if((e.metaKey||e.ctrlKey) && e.key==='k'){ e.preventDefault(); openCmdk(); }
  if(e.key==='Escape'){ closeCmdk(); closeModal(); }
});

/* ---------- Render dispatcher ---------- */
const RENDERERS = {};
function render(){
  buildBreadcrumbs();
  const root = document.getElementById('view-scroll');
  root.innerHTML = `<div class="view" id="view-root"></div>`;
  document.getElementById('view-root').innerHTML = RENDERERS[state.view] ? RENDERERS[state.view]() : `<div class="empty-state">Coming soon.</div>`;
  wireView(state.view);
  requestAnimationFrame(()=>{ initReveal(); animateAllStats(); });
}

/* ================================================================ DASHBOARD */
RENDERERS.dashboard = function(){
  const revToday = state.jobs.filter(j=> new Date(j.date).toDateString()===today.toDateString() && j.status==='done').reduce((s,j)=>s+j.price,0) || 480;
  const revWeek = state.invoices.filter(i=>i.status==='paid').reduce((s,i)=>s+i.total,0);
  const revMonth = revWeek + 8400;
  const jobsToday = state.jobs.filter(j=> new Date(j.date).toDateString() === today.toDateString());
  const upcoming = state.jobs.filter(j=>j.status==='upcoming').length;
  const newLeads = state.leads.filter(l=>l.stage==='New').length;
  const outstanding = state.invoices.filter(i=>i.status!=='paid').reduce((s,i)=>s+i.total,0);

  const activity = [
    {icon:'invoices', text:'Invoice INV-1042 sent to Dana Ortiz', time:'2h ago', color:'blue'},
    {icon:'check', text:'Job "Patio + Storefront Clean" marked complete', time:'5h ago', color:'green'},
    {icon:'leads', text:'New lead: Bethany Cole via Google Search', time:'1d ago', color:'purple'},
    {icon:'reviews', text:'5-star review from Tom Bradley', time:'1d ago', color:'amber'},
    {icon:'dollar', text:'Payment received — INV-1041 ($520)', time:'3d ago', color:'green'},
  ];
  const actColor = {blue:'var(--blue-600)',green:'var(--green-500)',purple:'var(--purple-500)',amber:'#B36B00'};
  const actBg = {blue:'var(--blue-50)',green:'var(--green-50)',purple:'var(--purple-50)',amber:'var(--amber-50)'};

  return `
  <div class="page-head">
    <div>
      <h1 class="page-title">Good morning, Alex</h1>
      <div class="page-sub">Here's how Rapid Wash is tracking today, ${today.toLocaleDateString('en-US',{weekday:'long', month:'long', day:'numeric'})}.</div>
    </div>
    <div class="flex gap-12">
      <button class="btn btn-outline" data-action="new-estimate">${ICON.estimates} New Estimate</button>
      <button class="btn btn-primary" data-action="new-job">${ICON.plus} New Job</button>
    </div>
  </div>

  <div class="grid grid-4" style="margin-bottom:16px;">
    <div class="card stat-card hoverable">
      <div class="stat-top"><div class="stat-icon" style="background:var(--blue-50); color:var(--blue-600);">${ICON.dollar}</div><div class="stat-trend trend-up">↑ 8%</div></div>
      <div class="stat-value" data-count="${revToday}" data-prefix="$">$0</div>
      <div class="stat-label">Revenue today</div>
    </div>
    <div class="card stat-card hoverable">
      <div class="stat-top"><div class="stat-icon" style="background:var(--green-50); color:var(--green-500);">${ICON.dollar}</div><div class="stat-trend trend-up">↑ 14%</div></div>
      <div class="stat-value" data-count="${revWeek}" data-prefix="$">$0</div>
      <div class="stat-label">Revenue this week</div>
    </div>
    <div class="card stat-card hoverable">
      <div class="stat-top"><div class="stat-icon" style="background:var(--purple-50); color:var(--purple-500);">${ICON.reports}</div><div class="stat-trend trend-up">↑ 24%</div></div>
      <div class="stat-value" data-count="${revMonth}" data-prefix="$">$0</div>
      <div class="stat-label">Revenue this month</div>
    </div>
    <div class="card stat-card hoverable">
      <div class="stat-top"><div class="stat-icon" style="background:var(--amber-50); color:#B36B00;">${ICON.invoices}</div><div class="stat-trend trend-down">Needs action</div></div>
      <div class="stat-value" data-count="${outstanding}" data-prefix="$">$0</div>
      <div class="stat-label">Outstanding invoices</div>
    </div>
  </div>

  <div class="grid grid-4" style="margin-bottom:22px;">
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:8px;">Jobs today</div><div class="stat-value" data-count="${jobsToday.length}">0</div></div>
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:8px;">Upcoming jobs</div><div class="stat-value" data-count="${upcoming}">0</div></div>
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:8px;">New leads</div><div class="stat-value" data-count="${newLeads}">0</div></div>
    <div class="card weather-card static">
      <div class="flex justify-between items-center">
        <div>
          <div class="weather-temp">72°F</div>
          <div class="weather-sub">Carthage, TN — Clear</div>
        </div>
        ${ICON.cloud.replace('width="24" height="24"','width="40" height="40"')}
      </div>
      <div class="weather-sub" style="margin-top:8px;">Great washing conditions all week.</div>
    </div>
  </div>

  <div class="grid grid-2">
    <div class="section-card card hoverable">
      <div class="section-head">
        <h3>Today's schedule</h3>
        <button class="btn btn-ghost btn-sm" data-nav="schedule">View all ${ICON.chevronR}</button>
      </div>
      <div>
        ${jobsToday.length ? jobsToday.map(j=>`
          <div class="job-row">
            <div class="job-time"><div class="t1">${fmtTime(j.date)}</div><div class="t2">Today</div></div>
            <button class="status-check ${j.status==='done'?'done':''}" data-job-toggle="${j.id}">${ICON.check}</button>
            <div style="flex:1; min-width:0;">
              <div class="row-name" style="font-size:13.3px;">${j.title}</div>
              <div style="font-size:11.8px; color:var(--text-dim);">${j.client} · ${j.tech}</div>
            </div>
            <div style="font-weight:800; font-family:var(--font-display); color:var(--text);">${money(j.price)}</div>
          </div>
        `).join('') : emptyState('schedule', 'No jobs today', 'Enjoy the downtime, or schedule a new job.')}
      </div>
    </div>

    <div class="flex flex-col gap-16">
      <div class="section-card card hoverable">
        <div class="section-head"><h3>Recent activity</h3></div>
        <div style="padding:6px 20px 14px;">
          ${activity.map(a=>`
            <div class="flex items-center gap-12" style="padding:10px 0; border-bottom:1px solid var(--border);">
              <div class="flow-icon" style="width:32px;height:32px;border-radius:9px;background:${actBg[a.color]};color:${actColor[a.color]};">${ICON[a.icon]}</div>
              <div style="flex:1; min-width:0;">
                <div style="font-size:12.6px; font-weight:600; color:var(--text);">${a.text}</div>
                <div style="font-size:11px; color:var(--text-faint); margin-top:1px;">${a.time}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="section-card card hoverable">
        <div class="section-head"><h3>Quick actions</h3></div>
        <div style="padding:16px 20px; display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <button class="btn btn-outline" data-action="new-estimate">${ICON.estimates} Estimate</button>
          <button class="btn btn-outline" data-action="new-job">${ICON.jobs} Job</button>
          <button class="btn btn-outline" data-action="new-client">${ICON.clients} Customer</button>
          <button class="btn btn-outline" data-action="new-invoice">${ICON.invoices} Invoice</button>
        </div>
      </div>
    </div>
  </div>
  `;
};

function emptyState(icon, title, sub){
  return `<div class="empty-state"><div class="empty-illo">${ICON[icon]}</div><h4>${title}</h4><p>${sub}</p></div>`;
}

/* ================================================================ LEADS */
RENDERERS.leads = function(){
  return `
  <div class="page-head">
    <div><h1 class="page-title">Leads</h1><div class="page-sub">${state.leads.length} leads in your pipeline right now.</div></div>
    <button class="btn btn-primary" data-action="new-lead">${ICON.plus} New Lead</button>
  </div>
  <div class="kanban" id="leads-kanban">
    ${LEAD_STAGES.map(stage=>{
      const leads = state.leads.filter(l=>l.stage===stage);
      return `<div class="kanban-col" data-lead-stage="${stage}">
        <div class="kanban-col-head"><h4>${stage}</h4><span class="kanban-count">${leads.length}</span></div>
        <div>
        ${leads.map(l=>`
          <div class="deal-card" draggable="true" data-lead="${l.id}">
            <div class="deal-card-title">${l.name}</div>
            <div style="font-size:11.5px; color:var(--text-dim); font-weight:600; margin-bottom:8px;">${l.phone}</div>
            <div class="flex items-center justify-between">
              <span class="pill pill-gray">${l.source}</span>
              <span class="text-faint" style="font-size:10.5px;">${fmtDate(l.created)}</span>
            </div>
          </div>
        `).join('')}
        </div>
      </div>`;
    }).join('')}
  </div>
  `;
};

/* ================================================================ PIPELINE */
RENDERERS.pipeline = function(){
  return `
  <div class="page-head">
    <div><h1 class="page-title">Pipeline</h1><div class="page-sub">Drag deals across stages as work moves forward.</div></div>
    <button class="btn btn-primary" data-action="new-deal">${ICON.plus} New Deal</button>
  </div>
  <div class="kanban" id="kanban">
    ${JOB_STAGES.map(stage=>{
      const deals = state.deals.filter(dl=>dl.stage===stage);
      const sum = deals.reduce((a,b)=>a+b.value,0);
      return `
      <div class="kanban-col" data-stage="${stage}">
        <div class="kanban-col-head"><h4>${stage}</h4><span class="kanban-count">${deals.length}</span></div>
        <div class="kanban-sum">${money(sum)} total</div>
        <div>
        ${deals.map(dl=>`
          <div class="deal-card" draggable="true" data-deal="${dl.id}">
            <div class="deal-card-title">${dl.title}</div>
            <div class="deal-card-value">${money(dl.value)}</div>
            <div class="flex items-center gap-8">
              <div class="avatar-sm" style="width:22px;height:22px;font-size:9.5px;background:${colorFor(dl.client)}">${initials(dl.client)}</div>
              <span style="font-size:11.5px; color:var(--text-dim); font-weight:600;">${dl.client}</span>
            </div>
            <div class="probability-bar"><div class="probability-fill" data-width="${dl.prob}"></div></div>
          </div>
        `).join('')}
        </div>
      </div>`;
    }).join('')}
  </div>
  `;
};

/* ================================================================ SCHEDULE */
RENDERERS.schedule = function(){
  state._calMode = state._calMode || 'week';
  const weekDays = Array.from({length:7}, (_,i)=> d(i-1,0));
  return `
  <div class="page-head">
    <div><h1 class="page-title">Schedule</h1><div class="page-sub">This week's jobs across your whole crew.</div></div>
    <div class="flex gap-12">
      <div class="segmented" id="cal-mode">
        <button class="${state._calMode==='week'?'active':''}" data-cal-mode="week">Week</button>
        <button class="${state._calMode==='list'?'active':''}" data-cal-mode="list">List</button>
      </div>
      <button class="btn btn-outline" data-action="route">${ICON.route} Optimize route</button>
      <button class="btn btn-primary" data-action="new-job">${ICON.plus} Schedule Job</button>
    </div>
  </div>

  ${state._calMode==='week' ? `
  <div class="cal-grid" style="margin-bottom:26px;">
    ${weekDays.map(day=>`<div class="cal-day-head">${day.toLocaleDateString('en-US',{weekday:'short'})}</div>`).join('')}
    ${weekDays.map((day,i)=>{
      const isToday = day.toDateString()===today.toDateString();
      const jobs = state.jobs.filter(j=> new Date(j.date).toDateString()===day.toDateString());
      const rainDay = i===3;
      return `<div class="cal-cell ${isToday?'today':''}" data-cal-date="${day.toISOString()}">
        <div class="cal-date">${day.getDate()}</div>
        ${jobs.map(j=>`<div class="cal-job" draggable="true" data-cal-job="${j.id}" style="background:${colorFor(j.tech)}" data-job-detail="${j.id}">${j.title}</div>`).join('')}
        ${rainDay ? `<div class="weather-warn">${ICON.warn} Rain 60%</div>` : ''}
      </div>`;
    }).join('')}
  </div>
  ` : `
  <div class="section-card card" style="margin-bottom:22px;">
    <div>
      ${state.jobs.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).map(j=>`
        <div class="job-row">
          <div class="job-time"><div class="t1">${fmtTime(j.date)}</div><div class="t2">${fmtDate(j.date)}</div></div>
          <button class="status-check ${j.status==='done'?'done':''}" data-job-toggle="${j.id}">${ICON.check}</button>
          <div style="flex:1; min-width:0; cursor:pointer;" data-job-detail="${j.id}">
            <div class="row-name" style="font-size:13.3px;">${j.title}</div>
            <div style="font-size:11.8px; color:var(--text-dim);">${j.address} · ${j.tech}</div>
          </div>
          <div class="avatar-sm" style="background:${colorFor(j.client)}">${initials(j.client)}</div>
          <div style="font-weight:800; font-family:var(--font-display); width:64px; text-align:right;">${money(j.price)}</div>
        </div>
      `).join('')}
    </div>
  </div>
  `}

  <div class="section-card card">
    <div class="section-head"><h3>Crew today</h3></div>
    <div style="padding:14px 20px; display:flex; gap:24px; flex-wrap:wrap;">
      ${state.team.filter(t=>t.jobsToday>0).map(t=>`
        <div class="flex items-center gap-10">
          <div class="avatar-sm" style="background:${colorFor(t.name)}">${initials(t.name)}</div>
          <div><div style="font-weight:700; font-size:12.8px;">${t.name}</div><div style="font-size:11px; color:var(--text-dim);">${t.jobsToday} jobs · route optimized</div></div>
        </div>
      `).join('')}
    </div>
  </div>
  `;
};

/* ================================================================ JOBS */
RENDERERS.jobs = function(){
  state._jobFilter = state._jobFilter || 'all';
  const filtered = state.jobs.filter(j => state._jobFilter==='all' ? true : (state._jobFilter==='done' ? j.status==='done' : j.status==='upcoming'));
  return `
  <div class="page-head">
    <div><h1 class="page-title">Jobs</h1><div class="page-sub">${state.jobs.length} total jobs on record.</div></div>
    <button class="btn btn-primary" data-action="new-job">${ICON.plus} New Job</button>
  </div>
  <div class="section-card card">
    <div class="table-toolbar">
      <div class="table-search">${ICON.search}<input placeholder="Search jobs…" id="job-search"></div>
      <button class="filter-chip ${state._jobFilter==='all'?'active':''}" data-job-filter="all">All</button>
      <button class="filter-chip ${state._jobFilter==='upcoming'?'active':''}" data-job-filter="upcoming">Upcoming</button>
      <button class="filter-chip ${state._jobFilter==='done'?'active':''}" data-job-filter="done">Completed</button>
    </div>
    <table class="tbl">
      <thead><tr><th>Job</th><th>Client</th><th>Technician</th><th>Date</th><th>Status</th><th>Price</th><th></th></tr></thead>
      <tbody id="jobs-tbody">
        ${filtered.map(j=>`
          <tr>
            <td class="row-name">${j.title}</td>
            <td>${j.client}</td>
            <td>${j.tech}</td>
            <td class="text-dim">${fmtDate(j.date)}, ${fmtTime(j.date)}</td>
            <td><span class="pill ${j.status==='done'?'pill-green':'pill-blue'}">${j.status==='done'?'Completed':'Upcoming'}</span></td>
            <td style="font-weight:800; font-family:var(--font-display);">${money(j.price)}</td>
            <td><button class="btn btn-ghost btn-sm" data-job-detail="${j.id}">Open ${ICON.chevronR}</button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    ${!filtered.length ? emptyState('jobs','No jobs match this filter','Try a different filter or schedule a new job.') : ''}
  </div>
  `;
};

/* ================================================================ CLIENTS */
RENDERERS.clients = function(){
  state._clientFilter = state._clientFilter || 'all';
  state._clientPage = state._clientPage || 1;
  const perPage = 5;
  let list = state.clients.filter(c=> state._clientFilter==='all' ? true : c.tag===state._clientFilter);
  if(state._clientQuery) list = list.filter(c=> c.name.toLowerCase().includes(state._clientQuery) || c.company.toLowerCase().includes(state._clientQuery));
  const totalPages = Math.max(1, Math.ceil(list.length/perPage));
  state._clientPage = Math.min(state._clientPage, totalPages);
  const pageItems = list.slice((state._clientPage-1)*perPage, state._clientPage*perPage);

  return `
  <div class="page-head">
    <div><h1 class="page-title">Clients</h1><div class="page-sub">${state.clients.length} clients · ${money(state.clients.reduce((a,b)=>a+b.value,0))} lifetime value</div></div>
    <button class="btn btn-primary" data-action="new-client">${ICON.plus} Add Client</button>
  </div>
  <div class="section-card card">
    <div class="table-toolbar">
      <div class="table-search">${ICON.search}<input placeholder="Search clients…" id="client-search" value="${state._clientQuery||''}"></div>
      <button class="filter-chip ${state._clientFilter==='all'?'active':''}" data-client-filter="all">All</button>
      <button class="filter-chip ${state._clientFilter==='Residential'?'active':''}" data-client-filter="Residential">Residential</button>
      <button class="filter-chip ${state._clientFilter==='Commercial'?'active':''}" data-client-filter="Commercial">Commercial</button>
    </div>
    <table class="tbl">
      <thead><tr><th>Client</th><th>Contact</th><th>Type</th><th>Jobs</th><th>Next service</th><th>Lifetime value</th><th></th></tr></thead>
      <tbody>
        ${pageItems.map(c=>`
          <tr>
            <td>
              <div class="flex items-center gap-12">
                <div class="avatar-sm" style="background:${colorFor(c.name)}">${initials(c.name)}</div>
                <div><div class="row-name">${c.name}</div><div style="font-size:11.5px; color:var(--text-dim);">${c.company}</div></div>
              </div>
            </td>
            <td><div style="font-size:12px; color:var(--text-dim);">${c.email}</div><div style="font-size:12px; color:var(--text-dim);">${c.phone}</div></td>
            <td><span class="pill ${c.tag==='Commercial'?'pill-purple':'pill-blue'}">${c.tag}</span></td>
            <td>${c.jobsCount}</td>
            <td class="text-dim">${fmtDate(c.nextService)}</td>
            <td style="font-weight:800; font-family:var(--font-display);">${money(c.value)}</td>
            <td><button class="btn btn-ghost btn-sm" data-client-view="${c.id}">View ${ICON.chevronR}</button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    ${!pageItems.length ? emptyState('clients','No clients found','Try a different search or add a new client.') : `
    <div class="table-pagination">
      <span class="text-faint" style="font-size:12px;">Showing ${pageItems.length} of ${list.length}</span>
      <div class="flex gap-4">
        <button class="page-btn" data-client-page="prev" ${state._clientPage<=1?'disabled':''}>${ICON.chevronR.replace('M9 6l6 6-6 6','M15 6l-6 6 6 6')}</button>
        ${Array.from({length:totalPages},(_,i)=>i+1).map(p=>`<button class="page-btn ${p===state._clientPage?'active':''}" data-client-page="${p}">${p}</button>`).join('')}
        <button class="page-btn" data-client-page="next" ${state._clientPage>=totalPages?'disabled':''}>${ICON.chevronR}</button>
      </div>
    </div>`}
  </div>
  `;
};

/* ================================================================ ESTIMATES */
RENDERERS.estimates = function(){
  const statusPill = {draft:'pill-gray', sent:'pill-blue', approved:'pill-green'};
  return `
  <div class="page-head">
    <div><h1 class="page-title">Estimates</h1><div class="page-sub">Build, send, and convert estimates in a few clicks.</div></div>
    <button class="btn btn-primary" data-action="new-estimate">${ICON.plus} New Estimate</button>
  </div>
  <div class="grid grid-3">
    ${state.estimates.map(e=>{
      const total = e.items.reduce((s,i)=>s+i.qty*i.price,0);
      return `
      <div class="card hoverable" style="cursor:pointer;" data-estimate-view="${e.id}">
        <div class="flex justify-between items-center" style="margin-bottom:10px;">
          <span class="text-faint" style="font-size:11px; font-weight:700;">${e.id}</span>
          <span class="pill ${statusPill[e.status]}">${e.status}</span>
        </div>
        <div class="row-name" style="font-size:14.5px; margin-bottom:4px;">${e.title}</div>
        <div class="text-dim" style="font-size:12.5px; margin-bottom:14px;">${e.client}</div>
        <div class="flex justify-between items-end">
          <div>
            <div style="font-family:var(--font-display); font-weight:800; font-size:20px;">${money(total)}</div>
            <div class="text-faint" style="font-size:11px;">${e.items.length} line item${e.items.length>1?'s':''}${e.deposit?` · ${money(e.deposit)} deposit`:''}</div>
          </div>
          ${ICON.chevronR}
        </div>
      </div>`;
    }).join('')}
  </div>
  `;
};

/* ================================================================ INVOICES */
RENDERERS.invoices = function(){
  const statusPill = {draft:'pill-gray', sent:'pill-blue', paid:'pill-green', overdue:'pill-red'};
  const total = state.invoices.reduce((a,b)=>a+b.total,0);
  const outstanding = state.invoices.filter(i=>i.status!=='paid').reduce((a,b)=>a+b.total,0);
  return `
  <div class="page-head">
    <div><h1 class="page-title">Invoicing</h1><div class="page-sub">${money(outstanding)} outstanding of ${money(total)} billed</div></div>
    <button class="btn btn-primary" data-action="new-invoice">${ICON.plus} New Invoice</button>
  </div>
  <div class="section-card card">
    <table class="tbl">
      <thead><tr><th>Invoice</th><th>Client</th><th>Job</th><th>Due</th><th>Total</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${state.invoices.map(i=>`
          <tr>
            <td class="row-name">${i.id}</td>
            <td>${i.client}</td>
            <td class="text-dim" style="font-size:12.5px;">${i.job}</td>
            <td class="text-dim" style="font-size:12.5px;">${fmtDate(i.due)}</td>
            <td style="font-weight:800; font-family:var(--font-display);">${money(i.total)}</td>
            <td><span class="pill ${statusPill[i.status]}">${i.status}</span></td>
            <td class="flex gap-8">
              <button class="btn btn-ghost btn-sm" data-invoice-view="${i.id}">View</button>
              ${i.status!=='paid' ? `<button class="btn btn-primary btn-sm" data-mark-paid="${i.id}">Mark Paid</button>` : ''}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  `;
};

/* ================================================================ REPORTS */
RENDERERS.reports = function(){
  const months = ['Feb','Mar','Apr','May','Jun','Jul'];
  const revs = [8200, 9400, 11200, 10100, 13800, 15600];
  const max = Math.max(...revs);
  const jobsByStatus = [
    {label:'Completed', val:64, color:'var(--green-500)'},
    {label:'Scheduled', val:22, color:'var(--blue-500)'},
    {label:'Cancelled', val:6, color:'var(--red-500)'},
    {label:'No-show', val:8, color:'var(--amber-500)'},
  ];
  let cumulative = 0;
  const donutSegs = jobsByStatus.map(j=>{ const start = cumulative; cumulative += j.val; return {...j, start, end: cumulative}; });
  const circumference = 2*Math.PI*52;

  return `
  <div class="page-head">
    <div><h1 class="page-title">Reports</h1><div class="page-sub">Six-month performance overview.</div></div>
    <button class="btn btn-outline" data-action="export-csv">${ICON.send} Export CSV</button>
  </div>
  <div class="grid grid-2">
    <div class="section-card card hoverable">
      <div class="section-head"><h3>Revenue trend</h3></div>
      <div style="padding:22px;">
        <div class="bar-chart">
          ${revs.map((v,i)=>`
            <div class="bar-col">
              <div class="bar" data-height="${(v/max*100).toFixed(0)}" style="position:relative;">
                <span style="position:absolute; top:-20px; left:0; right:0; text-align:center; font-size:10.5px; font-weight:800;">${(v/1000).toFixed(1)}k</span>
              </div>
              <div class="bar-label">${months[i]}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="section-card card hoverable">
      <div class="section-head"><h3>Job outcomes</h3></div>
      <div style="padding:24px;">
        <div class="donut-wrap">
          <svg viewBox="0 0 120 120" width="140" height="140" style="transform:rotate(-90deg);">
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--surface-3)" stroke-width="13"/>
            ${donutSegs.map(s=>{
              const dash = (s.val/100)*circumference; const gap = circumference-dash; const offset = -(s.start/100)*circumference;
              return `<circle cx="60" cy="60" r="52" fill="none" stroke="${s.color}" stroke-width="13" stroke-dasharray="${dash} ${gap}" stroke-dashoffset="${offset}" stroke-linecap="round"/>`;
            }).join('')}
          </svg>
          <div class="donut-center"><div class="n">64%</div><div class="l">Completed</div></div>
        </div>
        <div class="flex flex-col gap-10" style="margin-top:18px;">
          ${jobsByStatus.map(j=>`
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-8"><span style="background:${j.color}; width:8px; height:8px; border-radius:50%; display:inline-block;"></span><span style="font-size:12.5px; font-weight:600;">${j.label}</span></div>
              <span style="font-weight:800; font-size:12.5px;">${j.val}%</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-4" style="margin-top:16px;">
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:6px;">Avg. ticket size</div><div class="stat-value" data-count="945" data-prefix="$">$0</div></div>
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:6px;">Total customers</div><div class="stat-value" data-count="${state.clients.length}">0</div></div>
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:6px;">Returning customers</div><div class="stat-value" data-count="92" data-prefix="">0%</div></div>
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:6px;">Job completion rate</div><div class="stat-value" data-count="96" data-prefix="">0%</div></div>
  </div>
  `;
};

/* ================================================================ AUTOMATIONS */
RENDERERS.automations = function(){
  const iconFor = (i)=> [ {bg:'var(--blue-50)',c:'var(--blue-600)'}, {bg:'var(--amber-50)',c:'#B36B00'}, {bg:'var(--red-50)',c:'var(--red-500)'}, {bg:'var(--purple-50)',c:'var(--purple-500)'}, {bg:'var(--green-50)',c:'var(--green-500)'} ][i%5];
  return `
  <div class="page-head">
    <div><h1 class="page-title">Automations</h1><div class="page-sub">Let Rapid handle the busywork while you run the business.</div></div>
    <button class="btn btn-primary" data-action="new-automation">${ICON.plus} New Automation</button>
  </div>
  <div class="section-card card">
    ${state.automations.map((a,i)=>{ const ic=iconFor(i); return `
      <div class="automation-row">
        <div class="flow-icon" style="background:${ic.bg}; color:${ic.c};">${ICON.bolt}</div>
        <div style="flex:1; min-width:0;">
          <div class="row-name" style="margin-bottom:6px; font-size:13.3px;">${a.name}</div>
          <div class="flow-chain">
            <span class="chain-node">${a.trigger}</span><span class="chain-arrow">${ICON.chevronR}</span><span class="chain-node">${a.action}</span>
          </div>
        </div>
        <div class="toggle ${a.active?'on':''}" data-toggle-automation="${a.id}"><div class="toggle-knob"></div></div>
      </div>`;
    }).join('')}
  </div>
  `;
};

/* ================================================================ REVIEWS */
RENDERERS.reviews = function(){
  const avg = (state.reviews.reduce((s,r)=>s+r.rating,0)/state.reviews.length).toFixed(1);
  return `
  <div class="page-head">
    <div><h1 class="page-title">Reviews</h1><div class="page-sub">Automated review requests keep the stars coming in.</div></div>
    <button class="btn btn-primary" data-action="request-review">${ICON.send} Request a review</button>
  </div>
  <div class="grid grid-4" style="margin-bottom:18px;">
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:6px;">Average rating</div><div class="stat-value">${avg} ${ICON.reviews}</div></div>
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:6px;">Total reviews</div><div class="stat-value" data-count="${state.reviews.length}">0</div></div>
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:6px;">Requests sent (30d)</div><div class="stat-value" data-count="18">0</div></div>
    <div class="card stat-card hoverable"><div class="stat-label" style="margin-bottom:6px;">Response rate</div><div class="stat-value" data-count="61" data-prefix="">0%</div></div>
  </div>
  <div class="section-card card">
    <div class="section-head"><h3>Recent reviews</h3></div>
    <div style="padding:6px 20px 8px;">
      ${state.reviews.map(r=>`
        <div style="padding:14px 0; border-bottom:1px solid var(--border);">
          <div class="flex items-center justify-between" style="margin-bottom:6px;">
            <div class="flex items-center gap-10">
              <div class="avatar-sm" style="background:${colorFor(r.client)}">${initials(r.client)}</div>
              <div><div style="font-weight:700; font-size:13px;">${r.client}</div><div class="text-faint" style="font-size:11px;">${r.source} · ${fmtDate(r.date)}</div></div>
            </div>
            <div style="color:var(--amber-500);">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
          </div>
          <div style="font-size:12.8px; color:var(--text-dim); line-height:1.6;">${r.text}</div>
        </div>
      `).join('')}
    </div>
  </div>
  `;
};

/* ================================================================ TOOLS */
const TOOL_DEFS = [
  {key:'sqft', label:'Square Footage Calculator', icon:'calc', color:'blue', desc:'Length × width, quick surface area.'},
  {key:'instant', label:'Instant Pricing Calculator', icon:'dollar', color:'green', desc:'Sqft + rate + difficulty → price.'},
  {key:'roof', label:'Roof Measurement Calculator', icon:'building', color:'purple', desc:'Footprint + pitch → actual roof area.'},
  {key:'sh', label:'SH Dilution Calculator', icon:'droplet', color:'blue', desc:'C1V1 = C2V2 mixing ratios.'},
  {key:'chemmix', label:'Chemical Mix Calculator', icon:'droplet', color:'amber', desc:'Solution needed per surface type.'},
  {key:'surface', label:'Surface Cleaner Estimator', icon:'clock', color:'purple', desc:'Estimated time by SC width.'},
  {key:'chemcost', label:'Chemical Cost Calculator', icon:'dollar', color:'green', desc:'Cost per job from dilution ratio.'},
  {key:'water', label:'Water Usage Calculator', icon:'droplet', color:'blue', desc:'Estimated gallons used per job.'},
  {key:'profit', label:'Profit Calculator', icon:'reports', color:'green', desc:'Revenue minus all job costs.'},
  {key:'jobcost', label:'Job Cost Calculator', icon:'wrench', color:'amber', desc:'Labor + chemicals + travel.'},
];
const TOOL_COLORS = {blue:['var(--blue-50)','var(--blue-600)'],green:['var(--green-50)','var(--green-500)'],purple:['var(--purple-50)','var(--purple-500)'],amber:['var(--amber-50)','#B36B00']};

RENDERERS.tools = function(){
  state._toolOpen = state._toolOpen || null;
  if(state._toolOpen) return renderToolDetail(state._toolOpen);
  return `
  <div class="page-head">
    <div><h1 class="page-title">Tools</h1><div class="page-sub">Pressure washing calculators, built right in.</div></div>
  </div>
  <div class="grid grid-3" style="margin-bottom:24px;">
    ${TOOL_DEFS.map(t=>{ const [bg,c] = TOOL_COLORS[t.color]; return `
      <div class="card hoverable tool-card" data-tool-open="${t.key}">
        <div class="tool-icon" style="background:${bg}; color:${c};">${ICON[t.icon]}</div>
        <div class="row-name" style="font-size:13.8px; margin-bottom:4px;">${t.label}</div>
        <div class="text-dim" style="font-size:12px;">${t.desc}</div>
      </div>`;
    }).join('')}
  </div>
  <div class="section-card card">
    <div class="section-head"><h3>Before / After showcase</h3></div>
    <div style="padding:20px;">
      <div class="ba-slider" id="ba-slider">
        <div class="ba-img" style="background:linear-gradient(135deg,#8a8577,#6b6656);"></div>
        <div class="ba-img ba-after" style="background:linear-gradient(135deg,#e8ecf3,#cfd8e8);"></div>
        <div class="ba-handle" id="ba-handle"></div>
        <span class="ba-label before-lbl">BEFORE</span>
        <span class="ba-label after-lbl">AFTER</span>
      </div>
      <p class="text-dim" style="font-size:12px; margin-top:10px;">Drag the handle to compare — attach real before/after job photos from a client record to use this on estimates and marketing.</p>
    </div>
  </div>
  <div class="section-card card" style="margin-top:16px;">
    <div class="section-head"><h3>Maintenance reminders</h3></div>
    <div style="padding:6px 20px 8px;">
      <div class="flex items-center justify-between" style="padding:12px 0; border-bottom:1px solid var(--border);">
        <div class="flex items-center gap-12"><div class="flow-icon" style="background:var(--amber-50); color:#B36B00;">${ICON.wrench}</div><div><div style="font-weight:700; font-size:13px;">Surface cleaner bearings</div><div class="text-faint" style="font-size:11.5px;">Due in 6 days</div></div></div>
        <span class="pill pill-amber">Upcoming</span>
      </div>
      <div class="flex items-center justify-between" style="padding:12px 0; border-bottom:1px solid var(--border);">
        <div class="flex items-center gap-12"><div class="flow-icon" style="background:var(--blue-50); color:var(--blue-600);">${ICON.droplet}</div><div><div style="font-weight:700; font-size:13px;">Pump oil change</div><div class="text-faint" style="font-size:11.5px;">Due in 21 days</div></div></div>
        <span class="pill pill-blue">Scheduled</span>
      </div>
      <div class="flex items-center justify-between" style="padding:12px 0;">
        <div class="flex items-center gap-12"><div class="flow-icon" style="background:var(--green-50); color:var(--green-500);">${ICON.check}</div><div><div style="font-weight:700; font-size:13px;">Seasonal winterization</div><div class="text-faint" style="font-size:11.5px;">Completed Oct 12</div></div></div>
        <span class="pill pill-green">Done</span>
      </div>
    </div>
  </div>
  `;
};

function renderToolDetail(key){
  const t = TOOL_DEFS.find(x=>x.key===key);
  return `
  <button class="btn btn-ghost btn-sm" data-tool-back style="margin-bottom:16px;">${ICON.chevronR.replace('M9 6l6 6-6 6','M15 6l-6 6 6 6')} All tools</button>
  <div class="page-head"><div><h1 class="page-title">${t.label}</h1><div class="page-sub">${t.desc}</div></div></div>
  <div class="grid grid-2">
    <div class="section-card card">
      <div class="section-head"><h3>Inputs</h3></div>
      <div class="modal-body" id="tool-form">${toolForm(key)}</div>
    </div>
    <div class="section-card card">
      <div class="section-head"><h3>Result</h3></div>
      <div class="modal-body" id="tool-result">${emptyState('calc','Enter values','Fill in the inputs to see your result update live.')}</div>
    </div>
  </div>
  `;
}

function toolForm(key){
  switch(key){
    case 'sqft': return `
      <div class="field-row"><div class="field"><label>Length (ft)</label><input type="number" id="in-length" value="40" oninput="runTool('sqft')"></div>
      <div class="field"><label>Width (ft)</label><input type="number" id="in-width" value="20" oninput="runTool('sqft')"></div></div>`;
    case 'instant': return `
      <div class="field"><label>Square footage</label><input type="number" id="in-sqft" value="800" oninput="runTool('instant')"></div>
      <div class="field-row"><div class="field"><label>Rate per sqft ($)</label><input type="number" step="0.01" id="in-rate" value="0.20" oninput="runTool('instant')"></div>
      <div class="field"><label>Difficulty</label><select id="in-diff" onchange="runTool('instant')"><option value="easy">Easy</option><option value="moderate" selected>Moderate</option><option value="hard">Hard</option></select></div></div>`;
    case 'roof': return `
      <div class="field"><label>Footprint area (sqft)</label><input type="number" id="in-footprint" value="1800" oninput="runTool('roof')"></div>
      <div class="field"><label>Roof pitch</label><select id="in-pitch" onchange="runTool('roof')">
        ${['4/12','5/12','6/12','7/12','8/12','9/12','10/12','12/12'].map(p=>`<option ${p==='6/12'?'selected':''}>${p}</option>`).join('')}
      </select></div>`;
    case 'sh': return `
      <div class="field"><label>Target solution volume (gal)</label><input type="number" id="in-target" value="100" oninput="runTool('sh')"></div>
      <div class="field-row"><div class="field"><label>Starting SH % (e.g. 12.5)</label><input type="number" step="0.1" id="in-start" value="12.5" oninput="runTool('sh')"></div>
      <div class="field"><label>Target SH %</label><input type="number" step="0.1" id="in-tpct" value="1" oninput="runTool('sh')"></div></div>`;
    case 'chemmix': return `
      <div class="field"><label>Surface type</label><select id="in-surface" onchange="runTool('chemmix')">
        <option value="concrete">Concrete</option><option value="siding">Siding</option><option value="roof">Roof</option><option value="deck">Deck</option><option value="driveway" selected>Driveway</option>
      </select></div>
      <div class="field"><label>Square footage</label><input type="number" id="in-mixsqft" value="1500" oninput="runTool('chemmix')"></div>`;
    case 'surface': return `
      <div class="field"><label>Square footage</label><input type="number" id="in-scsqft" value="3000" oninput="runTool('surface')"></div>
      <div class="field"><label>Surface cleaner width (in)</label><input type="number" id="in-scwidth" value="20" oninput="runTool('surface')"></div>`;
    case 'chemcost': return `
      <div class="field"><label>Gallons of solution needed</label><input type="number" id="in-solgal" value="50" oninput="runTool('chemcost')"></div>
      <div class="field-row"><div class="field"><label>Cost per gal concentrate ($)</label><input type="number" step="0.01" id="in-concost" value="18" oninput="runTool('chemcost')"></div>
      <div class="field"><label>Dilution ratio (1:X)</label><input type="number" id="in-dilratio" value="10" oninput="runTool('chemcost')"></div></div>`;
    case 'water': return `
      <div class="field"><label>Square footage</label><input type="number" id="in-watersqft" value="2000" oninput="runTool('water')"></div>
      <div class="field-row"><div class="field"><label>Machine GPM</label><input type="number" step="0.1" id="in-gpm" value="4" oninput="runTool('water')"></div>
      <div class="field"><label>Minutes per 1000 sqft</label><input type="number" id="in-minper" value="12" oninput="runTool('water')"></div></div>`;
    case 'profit': return `
      <div class="field"><label>Job revenue ($)</label><input type="number" id="in-rev" value="600" oninput="runTool('profit')"></div>
      <div class="field-row"><div class="field"><label>Labor cost ($)</label><input type="number" id="in-labor" value="150" oninput="runTool('profit')"></div>
      <div class="field"><label>Chemical cost ($)</label><input type="number" id="in-chem" value="40" oninput="runTool('profit')"></div></div>
      <div class="field-row"><div class="field"><label>Fuel cost ($)</label><input type="number" id="in-fuel" value="20" oninput="runTool('profit')"></div>
      <div class="field"><label>Other cost ($)</label><input type="number" id="in-other" value="15" oninput="runTool('profit')"></div></div>`;
    case 'jobcost': return `
      <div class="field-row"><div class="field"><label>Estimated hours</label><input type="number" step="0.1" id="in-hours" value="2.5" oninput="runTool('jobcost')"></div>
      <div class="field"><label>Labor rate ($/hr)</label><input type="number" id="in-lrate" value="35" oninput="runTool('jobcost')"></div></div>
      <div class="field-row"><div class="field"><label>Chemical cost ($)</label><input type="number" id="in-jchem" value="25" oninput="runTool('jobcost')"></div>
      <div class="field"><label>Equipment cost ($)</label><input type="number" id="in-jequip" value="10" oninput="runTool('jobcost')"></div></div>
      <div class="field-row"><div class="field"><label>Travel miles</label><input type="number" id="in-miles" value="14" oninput="runTool('jobcost')"></div>
      <div class="field"><label>Mileage rate ($/mi)</label><input type="number" step="0.01" id="in-mrate" value="0.67" oninput="runTool('jobcost')"></div></div>`;
    default: return '';
  }
}

function runTool(key){
  const val = id => parseFloat(document.getElementById(id).value)||0;
  const strVal = id => document.getElementById(id).value;
  let html = '';
  if(key==='sqft'){ const r = CALC.sqft(val('in-length'), val('in-width')); html = calcResult(r.toLocaleString(), 'sq ft'); }
  if(key==='instant'){ const r = CALC.instantPrice(val('in-sqft'), val('in-rate'), strVal('in-diff')); html = calcResult(money(r), 'suggested price'); }
  if(key==='roof'){ const r = CALC.roofMeasurement(val('in-footprint'), strVal('in-pitch')); html = calcResult(r.toLocaleString(), 'sq ft actual roof area'); }
  if(key==='sh'){ const r = CALC.shDilution(val('in-target'), val('in-start'), val('in-tpct')); html = `<div class="calc-result"><div class="cr-val">${r.sh} gal</div><div class="cr-lbl">SH concentrate</div></div><div class="calc-result" style="margin-top:10px;"><div class="cr-val">${r.water} gal</div><div class="cr-lbl">Water</div></div>`; }
  if(key==='chemmix'){ const r = CALC.chemicalMix(strVal('in-surface'), val('in-mixsqft')); html = calcResult(r+' gal', 'mixed solution needed'); }
  if(key==='surface'){ const r = CALC.surfaceCleanerTime(val('in-scsqft'), val('in-scwidth')); html = calcResult(r+' hrs', 'estimated time'); }
  if(key==='chemcost'){ const r = CALC.chemicalCost(val('in-solgal'), val('in-concost'), val('in-dilratio')); html = calcResult(money(r), 'chemical cost for job'); }
  if(key==='water'){ const r = CALC.waterUsage(val('in-watersqft'), val('in-gpm'), val('in-minper')); html = calcResult(r.toLocaleString()+' gal', 'estimated water used'); }
  if(key==='profit'){ const r = CALC.profit(val('in-rev'), val('in-labor'), val('in-chem'), val('in-fuel'), val('in-other')); html = `<div class="calc-result"><div class="cr-val">${money(r.profit)}</div><div class="cr-lbl">Net profit (${r.margin}% margin)</div></div><div class="text-dim" style="text-align:center; font-size:12px; margin-top:10px;">Total cost: ${money(r.totalCost)}</div>`; }
  if(key==='jobcost'){ const r = CALC.jobCost(val('in-hours'), val('in-lrate'), val('in-jchem'), val('in-jequip'), val('in-miles'), val('in-mrate')); html = `<div class="calc-result"><div class="cr-val">${money(r.total)}</div><div class="cr-lbl">Total job cost</div></div><div class="text-dim" style="text-align:center; font-size:12px; margin-top:10px;">Labor: ${money(r.labor)} · Travel: ${money(r.travel)}</div>`; }
  document.getElementById('tool-result').innerHTML = html;
}
function calcResult(val, lbl){ return `<div class="calc-result"><div class="cr-val">${val}</div><div class="cr-lbl">${lbl}</div></div>`; }

/* ================================================================ TEAM */
RENDERERS.team = function(){
  return `
  <div class="page-head">
    <div><h1 class="page-title">Team</h1><div class="page-sub">Manage your crew and daily assignments.</div></div>
    <button class="btn btn-primary" data-action="new-member">${ICON.plus} Invite teammate</button>
  </div>
  <div class="grid grid-4">
    ${state.team.map(t=>`
      <div class="card hoverable person-card">
        <div class="person-avatar" style="background:${colorFor(t.name)}">${initials(t.name)}</div>
        <div style="font-weight:800; font-size:14.5px;">${t.name}</div>
        <div class="text-dim" style="font-size:12px; margin-bottom:12px;">${t.role}</div>
        <div class="pill pill-blue">${t.jobsToday} jobs today</div>
      </div>
    `).join('')}
  </div>
  `;
};

/* ================================================================ SETTINGS */
RENDERERS.settings = function(){
  state._settingsTab = state._settingsTab || 'company';
  const tabs = [['company','Company'],['team','Team & Roles'],['pricing','Pricing'],['tax','Tax'],['notifications','Notifications'],['integrations','Integrations'],['appearance','Appearance']];
  return `
  <div class="page-head"><div><h1 class="page-title">Settings</h1><div class="page-sub">Configure Rapid to match how your business runs.</div></div></div>
  <div class="section-card card">
    <div class="tabs">${tabs.map(([k,l])=>`<button class="tab-btn ${state._settingsTab===k?'active':''}" data-settings-tab="${k}">${l}</button>`).join('')}</div>
    <div class="modal-body" style="padding:22px;">${settingsTabContent(state._settingsTab)}</div>
  </div>
  `;
};
function settingsTabContent(tab){
  if(tab==='company') return `
    <div class="flex items-center gap-16" style="margin-bottom:8px;">
      <div class="brand-mark" style="width:64px;height:64px;border-radius:16px;">${ICON.dashboard.replace('width="18" height="18"','width="26" height="26"')}</div>
      <div><button class="btn btn-outline btn-sm">${ICON.upload} Upload logo</button><div class="text-faint" style="font-size:11px; margin-top:6px;">PNG or SVG, at least 256×256</div></div>
    </div>
    <div class="field-row"><div class="field"><label>Company name</label><input value="Rapid Wash"></div><div class="field"><label>Phone</label><input value="(629) 301-1813"></div></div>
    <div class="field"><label>Service area</label><input value="Smith County, TN"></div>
    <div class="field"><label>Business email</label><input value="rapidwashprosbros@gmail.com"></div>`;
  if(tab==='team') return `
    ${state.team.map(t=>`
      <div class="flex items-center justify-between" style="padding:12px 0; border-bottom:1px solid var(--border);">
        <div class="flex items-center gap-12"><div class="avatar-sm" style="background:${colorFor(t.name)}">${initials(t.name)}</div><div><div style="font-weight:700; font-size:13px;">${t.name}</div><div class="text-faint" style="font-size:11.5px;">${t.role}</div></div></div>
        <select style="border:1px solid var(--border-strong); border-radius:8px; padding:5px 10px; font-size:12.5px; background:var(--surface-2);">
          <option ${t.role.includes('Owner')?'selected':''}>Admin</option><option ${t.role.includes('Tech')?'selected':''}>Technician</option><option ${t.role.includes('Office')?'selected':''}>Dispatcher</option>
        </select>
      </div>`).join('')}`;
  if(tab==='pricing') return `
    <div class="field"><label>Default rate per sq ft</label><input type="number" step="0.01" value="0.20"></div>
    <div class="field-row"><div class="field"><label>Driveway preset ($)</label><input type="number" value="320"></div><div class="field"><label>Deck preset ($)</label><input type="number" value="480"></div></div>
    <div class="field-row"><div class="field"><label>Siding preset ($)</label><input type="number" value="600"></div><div class="field"><label>Roof preset ($)</label><input type="number" value="750"></div></div>`;
  if(tab==='tax') return `
    <div class="field"><label>Default tax rate (%)</label><input type="number" step="0.01" value="9.25"></div>
    <div class="field"><label>Tax ID / EIN</label><input value="XX-XXXXXXX"></div>`;
  if(tab==='notifications') return `
    ${['Job reminders','Payment confirmations','New lead alerts','Review requests','Weekly summary email'].map((n,i)=>`
      <div class="flex items-center justify-between" style="padding:11px 0; border-bottom:1px solid var(--border);">
        <span style="font-size:13px; font-weight:600;">${n}</span>
        <div class="toggle ${i!==4?'on':''}" data-settings-toggle><div class="toggle-knob"></div></div>
      </div>`).join('')}`;
  if(tab==='integrations') return `
    ${[['QuickBooks','Sync invoices & payments','var(--green-500)'],['Stripe','Card & ACH processing','var(--purple-500)'],['Google Calendar','Two-way schedule sync','var(--blue-600)'],['Zapier','Connect 5,000+ apps','var(--amber-500)']].map(([n,d,c])=>`
      <div class="flex items-center justify-between" style="padding:13px 0; border-bottom:1px solid var(--border);">
        <div class="flex items-center gap-12"><div class="flow-icon" style="background:var(--surface-2); color:${c};">${ICON.bolt}</div><div><div style="font-weight:700; font-size:13px;">${n}</div><div class="text-faint" style="font-size:11.5px;">${d}</div></div></div>
        <button class="btn btn-outline btn-sm">Connect</button>
      </div>`).join('')}`;
  if(tab==='appearance') return `
    <div class="flex items-center justify-between" style="padding:11px 0; border-bottom:1px solid var(--border);">
      <div><div style="font-weight:700; font-size:13px;">Dark mode</div><div class="text-faint" style="font-size:11.5px;">Switch the whole app to a dark theme</div></div>
      <div class="toggle ${state.theme==='dark'?'on':''}" id="settings-theme-toggle"><div class="toggle-knob"></div></div>
    </div>
    <div class="field" style="margin-top:14px;"><label>Accent color</label>
      <div class="flex gap-10">
        ${['#2F6BFF','#06B6D4','#16A34A','#7C5CFC','#F59E0B'].map(c=>`<div style="width:30px;height:30px;border-radius:9px;background:${c}; cursor:pointer; border:2px solid ${c==='#2F6BFF'?'var(--text)':'transparent'};"></div>`).join('')}
      </div>
    </div>`;
  return '';
}

/* ================================================================ INTERACTIONS */
function wireView(view){
  document.querySelectorAll('[data-job-toggle]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const job = state.jobs.find(j=>j.id===btn.dataset.jobToggle);
      job.status = job.status==='done' ? 'upcoming' : 'done';
      btn.classList.toggle('done');
      if(job.status==='done'){
        const rect = btn.getBoundingClientRect();
        confettiBurst(rect.left, rect.top);
        toast(`🎉 ${job.title} marked complete!`);
      }
      buildNav();
    });
  });

  document.querySelectorAll('[data-job-detail]').forEach(el=>{
    el.addEventListener('click', ()=> openModal(jobDetailModal(state.jobs.find(j=>j.id===el.dataset.jobDetail)), true));
  });

  document.querySelectorAll('[data-client-view]').forEach(btn=>{
    btn.addEventListener('click', ()=> openModal(clientDetailModal(state.clients.find(x=>x.id===btn.dataset.clientView)), true));
  });
  document.querySelectorAll('[data-estimate-view]').forEach(el=>{
    el.addEventListener('click', ()=> openModal(estimateDetailModal(state.estimates.find(x=>x.id===el.dataset.estimateView)), true));
  });
  document.querySelectorAll('[data-invoice-view]').forEach(el=>{
    el.addEventListener('click', ()=> openModal(invoiceDetailModal(state.invoices.find(x=>x.id===el.dataset.invoiceView)), true));
  });

  document.querySelectorAll('[data-action]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const a = btn.dataset.action;
      if(a==='new-job') openModal(newJobModal());
      if(a==='new-estimate') openModal(newEstimateModal());
      if(a==='new-invoice') openModal(newInvoiceModal());
      if(a==='new-client') openModal(newClientModal());
      if(a==='new-lead') openModal(newLeadModal());
      if(a==='new-deal') openModal(newDealModal());
      if(a==='new-automation') toast('Automation builder — design your trigger → action flow.');
      if(a==='new-member') toast('Invite sent! They will get an email to join the team.');
      if(a==='export-csv') toast('Preparing your export…');
      if(a==='route') toast('🗺️ Route optimized — saved ~18 minutes of drive time today.');
      if(a==='request-review') toast('📩 Review request sent to your last 3 completed jobs.');
    });
  });

  document.querySelectorAll('[data-mark-paid]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const inv = state.invoices.find(i=>i.id===btn.dataset.markPaid);
      inv.status = 'paid';
      const rect = btn.getBoundingClientRect();
      confettiBurst(rect.left+rect.width/2, rect.top);
      toast(`💸 ${inv.id} marked paid — nice!`);
      render();
    });
  });

  document.querySelectorAll('[data-toggle-automation]').forEach(t=>{
    t.addEventListener('click', ()=>{
      const a = state.automations.find(x=>x.id===t.dataset.toggleAutomation);
      a.active = !a.active; t.classList.toggle('on');
      toast(a.active ? `⚡ "${a.name}" turned on` : `"${a.name}" turned off`);
    });
  });

  document.querySelectorAll('[data-settings-toggle]').forEach(t=> t.addEventListener('click', ()=> t.classList.toggle('on')));
  const settingsThemeToggle = document.getElementById('settings-theme-toggle');
  if(settingsThemeToggle) settingsThemeToggle.addEventListener('click', ()=>{ toggleTheme(); render(); });
  document.querySelectorAll('[data-settings-tab]').forEach(btn=> btn.addEventListener('click', ()=>{ state._settingsTab = btn.dataset.settingsTab; render(); }));

  // job filters
  document.querySelectorAll('[data-job-filter]').forEach(btn=> btn.addEventListener('click', ()=>{ state._jobFilter = btn.dataset.jobFilter; render(); }));
  const jobSearch = document.getElementById('job-search');
  if(jobSearch) jobSearch.addEventListener('input', (e)=>{
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('#jobs-tbody tr').forEach(tr=>{ tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none'; });
  });

  // client filters/search/pagination
  document.querySelectorAll('[data-client-filter]').forEach(btn=> btn.addEventListener('click', ()=>{ state._clientFilter = btn.dataset.clientFilter; state._clientPage=1; render(); }));
  const clientSearch = document.getElementById('client-search');
  if(clientSearch) clientSearch.addEventListener('input', (e)=>{ state._clientQuery = e.target.value.toLowerCase(); state._clientPage=1; render(); });
  document.querySelectorAll('[data-client-page]').forEach(btn=> btn.addEventListener('click', ()=>{
    const v = btn.dataset.clientPage;
    if(v==='prev') state._clientPage--; else if(v==='next') state._clientPage++; else state._clientPage = parseInt(v);
    render();
  }));

  // calendar mode
  document.querySelectorAll('[data-cal-mode]').forEach(btn=> btn.addEventListener('click', ()=>{ state._calMode = btn.dataset.calMode; render(); }));

  // tools
  document.querySelectorAll('[data-tool-open]').forEach(el=> el.addEventListener('click', ()=>{ state._toolOpen = el.dataset.toolOpen; render(); setTimeout(()=>runTool(state._toolOpen), 30); }));
  const toolBack = document.querySelector('[data-tool-back]');
  if(toolBack) toolBack.addEventListener('click', ()=>{ state._toolOpen = null; render(); });
  wireBeforeAfterSlider();

  if(view==='pipeline') wireKanban();
  if(view==='leads') wireLeadsKanban();
}

/* ---------- Kanban drag & drop (deals) ---------- */
function wireKanban(){
  let dragged = null;
  document.querySelectorAll('#kanban .deal-card').forEach(card=>{
    card.addEventListener('dragstart', ()=>{ dragged = card; setTimeout(()=>card.classList.add('dragging'),0); });
    card.addEventListener('dragend', ()=>{ card.classList.remove('dragging'); dragged=null; });
  });
  document.querySelectorAll('#kanban .kanban-col').forEach(col=>{
    col.addEventListener('dragover', (e)=>{ e.preventDefault(); col.classList.add('drag-over'); });
    col.addEventListener('dragleave', ()=> col.classList.remove('drag-over'));
    col.addEventListener('drop', (e)=>{
      e.preventDefault(); col.classList.remove('drag-over');
      if(!dragged) return;
      const deal = state.deals.find(x=>x.id===dragged.dataset.deal);
      const newStage = col.dataset.stage; const oldStage = deal.stage;
      deal.stage = newStage;
      if(newStage==='Paid' && oldStage!=='Paid'){ toast(`💰 ${deal.title} — deal won!`); confettiBurst(window.innerWidth/2, window.innerHeight/3); }
      else toast(`Moved "${deal.title}" to ${newStage}`);
      render();
    });
  });
}
function wireLeadsKanban(){
  let dragged = null;
  document.querySelectorAll('#leads-kanban .deal-card').forEach(card=>{
    card.addEventListener('dragstart', ()=>{ dragged = card; setTimeout(()=>card.classList.add('dragging'),0); });
    card.addEventListener('dragend', ()=>{ card.classList.remove('dragging'); dragged=null; });
  });
  document.querySelectorAll('#leads-kanban .kanban-col').forEach(col=>{
    col.addEventListener('dragover', (e)=>{ e.preventDefault(); col.classList.add('drag-over'); });
    col.addEventListener('dragleave', ()=> col.classList.remove('drag-over'));
    col.addEventListener('drop', (e)=>{
      e.preventDefault(); col.classList.remove('drag-over');
      if(!dragged) return;
      const lead = state.leads.find(x=>x.id===dragged.dataset.lead);
      const newStage = col.dataset.leadStage;
      lead.stage = newStage;
      if(newStage==='Won'){ toast(`🎉 ${lead.name} — lead won!`); confettiBurst(window.innerWidth/2, window.innerHeight/3); }
      else toast(`Moved "${lead.name}" to ${newStage}`);
      buildNav(); render();
    });
  });
}

/* ---------- Before/after slider ---------- */
function wireBeforeAfterSlider(){
  const slider = document.getElementById('ba-slider');
  if(!slider) return;
  const handle = document.getElementById('ba-handle');
  const after = slider.querySelector('.ba-after');
  let dragging = false;
  function setPos(clientX){
    const rect = slider.getBoundingClientRect();
    let pct = ((clientX-rect.left)/rect.width)*100;
    pct = Math.max(0, Math.min(100, pct));
    handle.style.left = pct+'%';
    after.style.clipPath = `inset(0 0 0 ${pct}%)`;
  }
  handle.addEventListener('mousedown', ()=> dragging=true);
  window.addEventListener('mouseup', ()=> dragging=false);
  window.addEventListener('mousemove', (e)=>{ if(dragging) setPos(e.clientX); });
  slider.addEventListener('click', (e)=> setPos(e.clientX));
  handle.addEventListener('touchstart', ()=> dragging=true);
  window.addEventListener('touchend', ()=> dragging=false);
  window.addEventListener('touchmove', (e)=>{ if(dragging && e.touches[0]) setPos(e.touches[0].clientX); });
}

/* ================================================================ MODAL BUILDERS */
function newClientModal(){
  return modalShell('Add Client', `
    <div class="field"><label>Full name</label><input id="f-name" placeholder="Jane Cooper"></div>
    <div class="field"><label>Company (optional)</label><input id="f-company" placeholder="Cooper Residence"></div>
    <div class="field-row"><div class="field"><label>Email</label><input id="f-email" placeholder="jane@email.com"></div>
    <div class="field"><label>Phone</label><input id="f-phone" placeholder="(629) 000-0000"></div></div>
    <div class="field"><label>Address</label><input id="f-address" placeholder="123 Main St, Carthage, TN"></div>
    <div class="field-row"><div class="field"><label>Type</label><select id="f-tag"><option>Residential</option><option>Commercial</option></select></div>
    <div class="field"><label>Gate code (optional)</label><input id="f-gate" placeholder="—"></div></div>
  `, `<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitNewClient()">${ICON.plus} Add Client</button>`);
}
function submitNewClient(){
  const name = document.getElementById('f-name').value.trim();
  if(!name){ toast('Add a name first'); return; }
  state.clients.push({id:uid(), name, company:document.getElementById('f-company').value||name,
    email:document.getElementById('f-email').value||'—', phone:document.getElementById('f-phone').value||'—',
    address:document.getElementById('f-address').value||'—', gps:'—', gate:document.getElementById('f-gate').value||'—',
    value:0, jobsCount:0, lastService:null, nextService:d(30,0), notes:'', tags:[], photos:0, files:0,
    tag:document.getElementById('f-tag').value});
  closeModal(); render(); toast(`✅ ${name} added to Clients`);
}

function newLeadModal(){
  return modalShell('New Lead', `
    <div class="field"><label>Name</label><input id="f-lname" placeholder="Bethany Cole"></div>
    <div class="field-row"><div class="field"><label>Phone</label><input id="f-lphone" placeholder="(629) 000-0000"></div>
    <div class="field"><label>Source</label><select id="f-lsource"><option>Google Search</option><option>Referral</option><option>Facebook Ad</option><option>Website</option><option>Yelp</option></select></div></div>
    <div class="field"><label>Notes</label><textarea id="f-lnotes" rows="3" placeholder="What are they asking about?"></textarea></div>
  `, `<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitNewLead()">${ICON.plus} Add Lead</button>`);
}
function submitNewLead(){
  const name = document.getElementById('f-lname').value.trim() || 'New Lead';
  state.leads.push({id:uid(), name, phone:document.getElementById('f-lphone').value||'—', source:document.getElementById('f-lsource').value, stage:'New', notes:document.getElementById('f-lnotes').value, created:new Date()});
  closeModal(); buildNav(); render(); toast(`🆕 ${name} added to Leads`);
}

function newJobModal(){
  const options = state.clients.map(c=>`<option>${c.name}</option>`).join('');
  const techs = state.team.map(t=>`<option>${t.name}</option>`).join('');
  return modalShell('Schedule a Job', `
    <div class="field"><label>Client</label><select id="f-jclient">${options}</select></div>
    <div class="field"><label>Job title</label><input id="f-jtitle" placeholder="Driveway Wash"></div>
    <div class="field-row"><div class="field"><label>Date</label><input type="date" id="f-jdate"></div>
    <div class="field"><label>Time</label><input type="time" id="f-jtime" value="09:00"></div></div>
    <div class="field-row"><div class="field"><label>Assign to</label><select id="f-jtech">${techs}</select></div>
    <div class="field"><label>Price</label><input type="number" id="f-jprice" placeholder="480"></div></div>
  `, `<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitNewJob()">${ICON.plus} Schedule Job</button>`);
}
function submitNewJob(){
  const title = document.getElementById('f-jtitle').value.trim() || 'New Job';
  const dateVal = document.getElementById('f-jdate').value;
  const timeVal = document.getElementById('f-jtime').value || '09:00';
  const dt = dateVal ? new Date(dateVal+'T'+timeVal) : d(0,9);
  state.jobs.push({id:uid(), client:document.getElementById('f-jclient').value, title, date:dt,
    tech:document.getElementById('f-jtech').value, status:'upcoming', price:Number(document.getElementById('f-jprice').value)||0,
    address:'—', checklist:[], chemicals:'—', equipment:'—'});
  closeModal(); render(); toast(`📅 ${title} scheduled`);
}

function newEstimateModal(){
  const options = state.clients.map(c=>`<option>${c.name}</option>`).join('');
  return modalShell('New Estimate', `
    <div class="field"><label>Client</label><select id="f-eclient">${options}</select></div>
    <div class="field"><label>Title</label><input id="f-etitle" placeholder="Driveway + Walkway Wash"></div>
    <div class="field-row"><div class="field"><label>Line item</label><input id="f-eitem" placeholder="Driveway pressure wash"></div>
    <div class="field"><label>Price</label><input type="number" id="f-eprice" placeholder="320"></div></div>
    <div class="field"><label>Deposit required ($)</label><input type="number" id="f-edeposit" placeholder="0"></div>
  `, `<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitNewEstimate()">${ICON.send} Create & Send</button>`);
}
function submitNewEstimate(){
  const title = document.getElementById('f-etitle').value.trim() || 'New Estimate';
  const n = 2035 + state.estimates.length;
  state.estimates.unshift({id:'EST-'+n, client:document.getElementById('f-eclient').value, title,
    items:[{desc:document.getElementById('f-eitem').value||'Service', qty:1, price:Number(document.getElementById('f-eprice').value)||0}],
    addons:[], deposit:Number(document.getElementById('f-edeposit').value)||0, status:'sent', created:new Date()});
  closeModal(); render(); toast(`📤 Estimate sent`);
}

function newInvoiceModal(){
  const options = state.clients.map(c=>`<option>${c.name}</option>`).join('');
  return modalShell('New Invoice', `
    <div class="field"><label>Client</label><select id="f-iclient">${options}</select></div>
    <div class="field"><label>Description</label><input id="f-idesc" placeholder="Pressure washing service"></div>
    <div class="field-row"><div class="field"><label>Amount</label><input type="number" id="f-iamount" placeholder="480"></div>
    <div class="field"><label>Due date</label><input type="date" id="f-idue"></div></div>
    <div class="field-row"><div class="field"><label>Tax (%)</label><input type="number" step="0.01" id="f-itax" placeholder="0"></div>
    <div class="field"><label>Discount ($)</label><input type="number" id="f-idisc" placeholder="0"></div></div>
  `, `<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitNewInvoice()">${ICON.send} Send Invoice</button>`);
}
function submitNewInvoice(){
  const client = document.getElementById('f-iclient').value;
  const subtotal = Number(document.getElementById('f-iamount').value)||0;
  const tax = Number(document.getElementById('f-itax').value)||0;
  const discount = Number(document.getElementById('f-idisc').value)||0;
  const total = Math.max(0, subtotal + (subtotal*tax/100) - discount);
  const n = 1043 + state.invoices.length;
  state.invoices.unshift({id:'INV-'+n, client, job:document.getElementById('f-idesc').value||'Service', issued:new Date(),
    due:document.getElementById('f-idue').value ? new Date(document.getElementById('f-idue').value) : d(7,0),
    subtotal, tax, discount, deposit:0, total, status:'sent', payments:[]});
  closeModal(); render(); toast(`📤 Invoice sent to ${client}`);
}

function newDealModal(){
  const options = state.clients.map(c=>`<option>${c.name}</option>`).join('');
  return modalShell('New Deal', `
    <div class="field"><label>Client</label><select id="f-dclient">${options}</select></div>
    <div class="field"><label>Deal title</label><input id="f-dtitle" placeholder="Roof Soft Wash"></div>
    <div class="field-row"><div class="field"><label>Estimated value</label><input type="number" id="f-dvalue" placeholder="650"></div>
    <div class="field"><label>Stage</label><select id="f-dstage">${JOB_STAGES.map(s=>`<option>${s}</option>`).join('')}</select></div></div>
  `, `<button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="submitNewDeal()">${ICON.plus} Create Deal</button>`);
}
function submitNewDeal(){
  const title = document.getElementById('f-dtitle').value.trim() || 'New Deal';
  state.deals.push({id:uid(), client:document.getElementById('f-dclient').value, title, value:Number(document.getElementById('f-dvalue').value)||0, stage:document.getElementById('f-dstage').value, prob:20});
  closeModal(); render(); toast(`🆕 "${title}" added to pipeline`);
}

/* ---------- Detail modals ---------- */
function jobDetailModal(job){
  const checklist = job.checklist && job.checklist.length ? job.checklist : [];
  return modalShell(job.title, `
    <div class="flex items-center gap-12">
      <div class="avatar-sm" style="background:${colorFor(job.client)}; width:44px; height:44px; font-size:15px;">${initials(job.client)}</div>
      <div><div style="font-weight:700;">${job.client}</div><div class="text-dim" style="font-size:12px;">${job.address}</div></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Date & time</label><div style="font-weight:700; font-size:13.5px;">${new Date(job.date).toLocaleString('en-US',{weekday:'short', month:'short', day:'numeric', hour:'numeric', minute:'2-digit'})}</div></div>
      <div class="field"><label>Assigned tech</label><div style="font-weight:700; font-size:13.5px;">${job.tech}</div></div>
    </div>
    ${checklist.length ? `<div class="field"><label>Checklist</label>
      ${checklist.map((c,i)=>`<div class="checklist-item"><button class="status-check ${c.done?'done':''}" style="width:20px;height:20px;" data-checklist-toggle="${job.id}:${i}">${ICON.check}</button><span style="font-size:13px; ${c.done?'text-decoration:line-through; color:var(--text-faint);':''}">${c.t}</span></div>`).join('')}
    </div>` : ''}
    <div class="field-row"><div class="field"><label>Chemicals used</label><div style="font-size:12.8px; color:var(--text-dim);">${job.chemicals||'—'}</div></div>
    <div class="field"><label>Equipment</label><div style="font-size:12.8px; color:var(--text-dim);">${job.equipment||'—'}</div></div></div>
    <div class="field"><label>Before / after photos</label>
      <div class="photo-grid">${Array.from({length:4}).map(()=>`<div class="photo-tile">${ICON.camera}</div>`).join('')}</div>
    </div>
    <div class="field"><label>Completion signature</label><div class="photo-tile" style="aspect-ratio:auto; height:70px;">${ICON.signature}</div></div>
    <div class="field"><label>Price</label><div style="font-weight:800; font-size:19px; font-family:var(--font-display); color:var(--blue-600);">${money(job.price)}</div></div>
  `, `<button class="btn btn-ghost" onclick="closeModal()">Close</button><button class="btn btn-primary" onclick="closeModal()">${ICON.edit} Edit Job</button>`);
}

function clientDetailModal(c){
  const clientJobs = state.jobs.filter(j=>j.client===c.name);
  return modalShell(c.name, `
    <div class="tabs" style="margin:-20px -22px 6px; padding:0 22px;">
      <button class="tab-btn active">Overview</button><button class="tab-btn">Jobs</button><button class="tab-btn">Files</button>
    </div>
    <div class="flex items-center gap-12">
      <div class="avatar-sm" style="background:${colorFor(c.name)}; width:52px; height:52px; font-size:18px;">${initials(c.name)}</div>
      <div><div style="font-weight:800; font-size:15.5px;">${c.company}</div><span class="pill ${c.tag==='Commercial'?'pill-purple':'pill-blue'}">${c.tag}</span></div>
    </div>
    <div class="field-row"><div class="field"><label>Email</label><div style="font-size:13px; font-weight:600;">${c.email}</div></div>
    <div class="field"><label>Phone</label><div style="font-size:13px; font-weight:600;">${c.phone}</div></div></div>
    <div class="field"><label>Address</label><div style="font-size:13px; font-weight:600;">${c.address}</div></div>
    <div class="field-row"><div class="field"><label>GPS</label><div style="font-size:12.5px; color:var(--text-dim);">${c.gps||'—'}</div></div>
    <div class="field"><label>Gate code</label><div style="font-size:12.5px; color:var(--text-dim);">${c.gate||'—'}</div></div></div>
    <div class="field-row"><div class="field"><label>Last service</label><div style="font-size:12.5px; color:var(--text-dim);">${c.lastService?fmtDate(c.lastService):'—'}</div></div>
    <div class="field"><label>Next recommended</label><div style="font-size:12.5px; color:var(--text-dim);">${fmtDate(c.nextService)}</div></div></div>
    <div class="field"><label>Tags</label><div class="flex gap-8" style="flex-wrap:wrap;">${(c.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('') || '<span class="text-faint" style="font-size:12px;">No tags</span>'}</div></div>
    <div class="field"><label>Internal notes</label><div style="font-size:12.8px; color:var(--text-dim); background:var(--surface-2); padding:10px 12px; border-radius:10px;">${c.notes||'No notes yet.'}</div></div>
    <div class="field"><label>Lifetime value</label><div style="font-weight:800; font-size:19px; font-family:var(--font-display); color:var(--blue-600);">${money(c.value)}</div></div>
    ${clientJobs.length ? `<div class="field"><label>Recent jobs</label>${clientJobs.map(j=>`<div style="font-size:12.8px; padding:6px 0; border-bottom:1px solid var(--border);">${j.title} — ${money(j.price)}</div>`).join('')}</div>` : ''}
    <div class="field"><label>Photos & files</label><div class="text-dim" style="font-size:12.5px;">${c.photos||0} photos · ${c.files||0} files attached</div></div>
  `, `<button class="btn btn-ghost" onclick="closeModal()">Close</button><button class="btn btn-primary" onclick="closeModal()">${ICON.mail} Message</button>`);
}

function estimateDetailModal(e){
  const total = e.items.reduce((s,i)=>s+i.qty*i.price,0);
  return modalShell(e.id, `
    <div class="row-name" style="font-size:15px;">${e.title}</div>
    <div class="text-dim" style="font-size:12.8px;">${e.client}</div>
    <div class="field"><label>Line items</label>
      ${e.items.map(i=>`<div class="flex justify-between" style="padding:8px 0; border-bottom:1px solid var(--border); font-size:13px;"><span>${i.desc} × ${i.qty}</span><span style="font-weight:700;">${money(i.qty*i.price)}</span></div>`).join('')}
    </div>
    ${e.addons.length ? `<div class="field"><label>Optional add-ons</label>${e.addons.map(a=>`<div style="font-size:12.8px; color:var(--text-dim);">${a}</div>`).join('')}</div>` : ''}
    <div class="flex justify-between" style="font-size:15px; font-weight:800; padding-top:6px;"><span>Total</span><span>${money(total)}</span></div>
    ${e.deposit ? `<div class="text-dim" style="font-size:12px;">Deposit required: ${money(e.deposit)}</div>` : ''}
  `, `
    <button class="btn btn-ghost" onclick="closeModal()">Close</button>
    <button class="btn btn-outline" onclick="convertEstimate('${e.id}','job')">${ICON.jobs} Convert to Job</button>
    <button class="btn btn-primary" onclick="convertEstimate('${e.id}','invoice')">${ICON.invoices} Convert to Invoice</button>
  `);
}
function convertEstimate(id, type){
  const e = state.estimates.find(x=>x.id===id);
  const total = e.items.reduce((s,i)=>s+i.qty*i.price,0);
  if(type==='job'){
    state.jobs.push({id:uid(), client:e.client, title:e.title, date:d(3,9), tech:state.team[1].name, status:'upcoming', price:total, address:'—', checklist:[], chemicals:'—', equipment:'—'});
    toast(`🔧 "${e.title}" converted to a job`);
  } else {
    const n = 1043 + state.invoices.length;
    state.invoices.unshift({id:'INV-'+n, client:e.client, job:e.title, issued:new Date(), due:d(7,0), subtotal:total, tax:0, discount:0, deposit:e.deposit, total:total-e.deposit, status:'sent', payments:[]});
    toast(`🧾 "${e.title}" converted to an invoice`);
  }
  e.status = 'approved';
  closeModal(); render();
}

function invoiceDetailModal(inv){
  const paidSoFar = (inv.payments||[]).reduce((s,p)=>s+p.amount,0);
  const balance = inv.total-paidSoFar;
  return modalShell(inv.id, `
    <div class="flex justify-between items-center"><div class="row-name" style="font-size:15px;">${inv.job}</div><span class="pill ${inv.status==='paid'?'pill-green':inv.status==='overdue'?'pill-red':'pill-blue'}">${inv.status}</span></div>
    <div class="text-dim" style="font-size:12.8px;">${inv.client} · Due ${fmtDate(inv.due)}</div>
    <div class="field-row">
      <div class="field"><label>Subtotal</label><div style="font-size:13px; font-weight:700;">${money(inv.subtotal)}</div></div>
      <div class="field"><label>Tax</label><div style="font-size:13px; font-weight:700;">${inv.tax||0}%</div></div>
    </div>
    <div class="field-row">
      <div class="field"><label>Discount</label><div style="font-size:13px; font-weight:700;">${money(inv.discount||0)}</div></div>
      <div class="field"><label>Deposit</label><div style="font-size:13px; font-weight:700;">${money(inv.deposit||0)}</div></div>
    </div>
    <div class="flex justify-between" style="font-size:16px; font-weight:800; padding-top:4px; border-top:1px solid var(--border);"><span>Total</span><span>${money(inv.total)}</span></div>
    <div class="field"><label>Payment history</label>
      ${(inv.payments&&inv.payments.length) ? inv.payments.map(p=>`<div class="flex justify-between" style="padding:6px 0; font-size:12.8px;"><span>${p.method} · ${fmtDate(p.date)}</span><span style="font-weight:700;">${money(p.amount)}</span></div>`).join('') : '<div class="text-faint" style="font-size:12.5px;">No payments recorded yet.</div>'}
    </div>
    ${balance>0 ? `<div class="field"><label>Record a payment</label>
      <div class="field-row-3">
        <select id="pay-method"><option>Cash</option><option>Check</option><option>Card</option><option>ACH</option></select>
        <input type="number" id="pay-amount" placeholder="${balance}">
        <button class="btn btn-primary btn-sm" onclick="recordPayment('${inv.id}')">Record</button>
      </div>
    </div>` : ''}
  `, `<button class="btn btn-ghost" onclick="closeModal()">Close</button><button class="btn btn-outline">${ICON.send} Email PDF</button>${inv.status!=='paid'?`<button class="btn btn-primary" onclick="quickMarkPaid('${inv.id}')">Mark Fully Paid</button>`:''}`);
}
function recordPayment(id){
  const inv = state.invoices.find(i=>i.id===id);
  const method = document.getElementById('pay-method').value;
  const amount = Number(document.getElementById('pay-amount').value) || (inv.total-(inv.payments||[]).reduce((s,p)=>s+p.amount,0));
  inv.payments = inv.payments || [];
  inv.payments.push({method, amount, date:new Date()});
  const paid = inv.payments.reduce((s,p)=>s+p.amount,0);
  if(paid>=inv.total) inv.status='paid';
  closeModal(); render(); toast(`💳 ${money(amount)} payment recorded via ${method}`);
  confettiBurst(window.innerWidth/2, window.innerHeight/3);
}
function quickMarkPaid(id){
  const inv = state.invoices.find(i=>i.id===id);
  inv.status='paid'; closeModal(); render(); toast(`💸 ${inv.id} marked paid`); confettiBurst(window.innerWidth/2, window.innerHeight/3);
}

document.addEventListener('click', (e)=>{
  const el = e.target.closest('[data-checklist-toggle]');
  if(!el) return;
  const [jobId, idx] = el.dataset.checklistToggle.split(':');
  const job = state.jobs.find(j=>j.id===jobId);
  job.checklist[idx].done = !job.checklist[idx].done;
  el.classList.toggle('done');
});

/* ================================================================ BOOT */
buildNav();
applyTheme();
render();
setTimeout(()=> document.getElementById('boot').classList.add('hide'), 450);
