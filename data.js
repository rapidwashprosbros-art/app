/* ============================================================
   RAPID — Data layer (in-memory demo data + calculators)
   ============================================================ */
const COLORS = ['#2F6BFF','#06B6D4','#7C5CFC','#F59E0B','#16A34A','#E63B32','#1E54E8'];
const colorFor = (str) => COLORS[[...str].reduce((a,c)=>a+c.charCodeAt(0),0) % COLORS.length];
const initials = (name) => name.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
const money = (n) => '$' + Number(n||0).toLocaleString('en-US', {maximumFractionDigits:0});
const uid = () => Math.random().toString(36).slice(2,9);
const fmtDate = (dt, opts) => new Date(dt).toLocaleDateString('en-US', opts || {month:'short', day:'numeric'});
const fmtTime = (dt) => new Date(dt).toLocaleTimeString('en-US', {hour:'numeric', minute:'2-digit'});

const LEAD_STAGES = ['New','Contacted','Estimate Sent','Follow-up','Won','Lost'];
const JOB_STAGES  = ['New Lead','Quoted','Scheduled','In Progress','Completed','Paid'];

const today = new Date();
const d = (offset, hour, min) => { const x = new Date(today); x.setDate(x.getDate()+offset); x.setHours(hour ?? 9, min ?? 0, 0, 0); return x; };

let state = {
  view: 'dashboard',
  theme: 'light',

  clients: [
    {id:uid(), name:'Marcus Webb', company:'Webb Residence', email:'marcus.webb@email.com', phone:'(629) 301-2201',
      address:'214 Maple St, Carthage, TN', gps:'36.2531, -85.9508', gate:'#4471', tag:'Residential',
      value:2450, jobsCount:4, lastService:d(-38,0), nextService:d(52,0), notes:'Prefers text over calls. Dog in backyard — keep gate latched.',
      tags:['Repeat Customer','Driveway'], photos:3, files:2},
    {id:uid(), name:'Sarah Nguyen', company:'Nguyen Family Home', email:'sarah.n@email.com', phone:'(629) 301-2202',
      address:'88 Cedar Ridge Rd, Gordonsville, TN', gps:'36.1706, -85.9269', gate:'—', tag:'Residential',
      value:1180, jobsCount:2, lastService:d(-70,0), nextService:d(20,0), notes:'Wood deck — soft wash only, no high PSI.',
      tags:['Deck Care'], photos:5, files:1},
    {id:uid(), name:'Dana Ortiz', company:'Ortiz & Co. Retail', email:'dana@ortizretail.com', phone:'(629) 301-2203',
      address:'500 Main St, Carthage, TN', gps:'36.2534, -85.9512', gate:'Loading dock code 8821', tag:'Commercial',
      value:6200, jobsCount:7, lastService:d(-14,0), nextService:d(76,0), notes:'Quarterly commercial contract. Bill net-30.',
      tags:['VIP','Recurring','Net-30'], photos:9, files:4},
    {id:uid(), name:'James Douglas', company:'Douglas Property Group', email:'jdouglas@dpg.com', phone:'(629) 301-2204',
      address:'12 Riverbend Dr, Lafayette, TN', gps:'36.5209, -86.0269', gate:'—', tag:'Commercial',
      value:3900, jobsCount:5, lastService:d(-25,0), nextService:d(65,0), notes:'Multiple properties — confirm address each booking.',
      tags:['Multi-property'], photos:6, files:3},
    {id:uid(), name:'Priya Shah', company:'Shah Residence', email:'priya.shah@email.com', phone:'(629) 301-2205',
      address:'77 Hilltop Ln, Carthage, TN', gps:'36.2601, -85.9455', gate:'—', tag:'Residential',
      value:640, jobsCount:1, lastService:d(-12,0), nextService:d(0,0), notes:'New customer, referred by Marcus Webb.',
      tags:['New'], photos:2, files:0},
    {id:uid(), name:'Tom Bradley', company:'Bradley Diner', email:'tom@bradleydiner.com', phone:'(629) 301-2206',
      address:'19 Court Sq, Carthage, TN', gps:'36.2540, -85.9520', gate:'—', tag:'Commercial',
      value:2900, jobsCount:3, lastService:d(-3,0), nextService:d(87,0), notes:'Grease buildup on rear patio — needs degreaser pretreat.',
      tags:['Recurring'], photos:4, files:1},
  ],

  leads: [
    {id:uid(), name:'Bethany Cole', phone:'(629) 301-3301', source:'Google Search', stage:'New', notes:'Asked about gutter cleaning pricing.', created:d(-1,0)},
    {id:uid(), name:'Rick Alvarez', phone:'(629) 301-3302', source:'Referral', stage:'Contacted', notes:'Wants a callback after 5pm.', created:d(-2,0)},
    {id:uid(), name:'Nina Torres', phone:'(629) 301-3303', source:'Facebook Ad', stage:'Estimate Sent', notes:'Quoted $520 for driveway + walkway.', created:d(-4,0)},
    {id:uid(), name:'Wallace Home Svcs', phone:'(629) 301-3304', source:'Website', stage:'Follow-up', notes:'Follow up next Tuesday re: commercial contract.', created:d(-6,0)},
    {id:uid(), name:'Grace Kim', phone:'(629) 301-3305', source:'Yelp', stage:'Won', notes:'Booked deck restoration for next week.', created:d(-9,0)},
    {id:uid(), name:'Old Mill Apartments', phone:'(629) 301-3306', source:'Google Search', stage:'Lost', notes:'Went with a cheaper competitor.', created:d(-15,0)},
  ],

  team: [
    {id:uid(), name:'Alex Rivera', role:'Owner / Lead Tech', jobsToday:3},
    {id:uid(), name:'Jordan Blake', role:'Field Technician', jobsToday:4},
    {id:uid(), name:'Casey Kim', role:'Field Technician', jobsToday:2},
    {id:uid(), name:'Morgan Lee', role:'Office / Dispatch', jobsToday:0},
  ],

  automations: [
    {id:uid(), name:'Send review request', trigger:'Job marked Completed', action:'Text + email Google review link', active:true},
    {id:uid(), name:'Quote follow-up', trigger:'Estimate unopened 48 hrs', action:'Auto-send reminder email', active:true},
    {id:uid(), name:'Invoice overdue nudge', trigger:'Invoice 3 days overdue', action:'Send reminder + late note', active:true},
    {id:uid(), name:'New lead welcome', trigger:'New lead created', action:'Instant text: "We got your request!"', active:false},
    {id:uid(), name:'Job reminder', trigger:'24 hrs before scheduled job', action:'Text client appointment reminder', active:true},
    {id:uid(), name:'On our way', trigger:'Tech starts route', action:'Text "We\'re on our way!" with ETA', active:true},
    {id:uid(), name:'Annual reminder', trigger:'365 days since last service', action:'Email seasonal maintenance offer', active:true},
    {id:uid(), name:'Upsell recommendation', trigger:'Job completed', action:'Suggest gutter add-on next visit', active:false},
  ],
};

state.deals = [
  {id:uid(), client:'Marcus Webb', title:'Driveway + Walkway Wash', value:480, stage:'New Lead', prob:20},
  {id:uid(), client:'Priya Shah', title:'Full Soft Wash Exterior', value:640, stage:'New Lead', prob:20},
  {id:uid(), client:'Sarah Nguyen', title:'Deck Restoration', value:590, stage:'Quoted', prob:45},
  {id:uid(), client:'Tom Bradley', title:'Patio + Storefront Clean', value:1150, stage:'Quoted', prob:55},
  {id:uid(), client:'Dana Ortiz', title:'Quarterly Commercial Wash', value:2200, stage:'Scheduled', prob:75},
  {id:uid(), client:'James Douglas', title:'Parking Lot Pressure Wash', value:2600, stage:'Scheduled', prob:75},
  {id:uid(), client:'James Douglas', title:'Gutter Brightening', value:410, stage:'In Progress', prob:90},
  {id:uid(), client:'Dana Ortiz', title:'Window Cleaning Package', value:780, stage:'Completed', prob:100},
  {id:uid(), client:'Marcus Webb', title:'Fence Soft Wash', value:520, stage:'Paid', prob:100},
];

state.jobs = [
  {id:uid(), client:'Marcus Webb', title:'Driveway + Walkway Wash', date:d(0,9), tech:'Jordan Blake', status:'upcoming', price:480, address:'214 Maple St',
    checklist:[{t:'Pre-treat oil stains',done:true},{t:'Pressure wash driveway',done:false},{t:'Rinse walkway',done:false},{t:'Blow off debris',done:false}],
    chemicals:'SH 12.5% @ 3% dilution, surfactant', equipment:'4000 PSI machine, surface cleaner'},
  {id:uid(), client:'Dana Ortiz', title:'Quarterly Commercial Wash', date:d(0,13), tech:'Alex Rivera', status:'upcoming', price:2200, address:'500 Main St',
    checklist:[{t:'Storefront wash',done:false},{t:'Sidewalk clean',done:false},{t:'Dumpster pad degrease',done:false}],
    chemicals:'Degreaser + SH mix', equipment:'Hot water trailer unit'},
  {id:uid(), client:'Sarah Nguyen', title:'Deck Restoration', date:d(1,10), tech:'Casey Kim', status:'upcoming', price:590, address:'88 Cedar Ridge Rd',
    checklist:[{t:'Soft wash deck',done:false},{t:'Brighten wood',done:false},{t:'Seal (optional add-on)',done:false}],
    chemicals:'Wood brightener, low-PSI soft wash mix', equipment:'Soft wash system'},
  {id:uid(), client:'James Douglas', title:'Parking Lot Pressure Wash', date:d(2,8), tech:'Alex Rivera', status:'upcoming', price:2600, address:'12 Riverbend Dr',
    checklist:[{t:'Sweep debris',done:false},{t:'Pressure wash lot',done:false},{t:'Spot-treat oil stains',done:false}],
    chemicals:'Degreaser', equipment:'Surface cleaner, 4000 PSI'},
  {id:uid(), client:'Tom Bradley', title:'Patio + Storefront Clean', date:d(-1,11), tech:'Jordan Blake', status:'done', price:1150, address:'19 Court Sq',
    checklist:[{t:'Degrease patio',done:true},{t:'Wash storefront glass',done:true},{t:'Clean signage',done:true}],
    chemicals:'Degreaser + glass cleaner', equipment:'4000 PSI machine'},
  {id:uid(), client:'Priya Shah', title:'Full Soft Wash Exterior', date:d(3,9), tech:'Casey Kim', status:'upcoming', price:640, address:'77 Hilltop Ln',
    checklist:[{t:'Soft wash siding',done:false},{t:'Rinse windows',done:false}],
    chemicals:'SH 1% dilution soft wash', equipment:'Soft wash system'},
  {id:uid(), client:'James Douglas', title:'Gutter Brightening', date:d(4,14), tech:'Jordan Blake', status:'upcoming', price:410, address:'12 Riverbend Dr',
    checklist:[{t:'Brighten gutters',done:false},{t:'Rinse fascia',done:false}],
    chemicals:'Gutter brightener', equipment:'Extension wand'},
];

state.estimates = [
  {id:'EST-2031', client:'Marcus Webb', title:'Driveway + Walkway Wash', items:[
    {desc:'Driveway pressure wash', qty:1, price:320}, {desc:'Walkway pressure wash', qty:1, price:160}
  ], addons:['Sealant application (+$150)'], deposit:100, status:'approved', created:d(-9,0)},
  {id:'EST-2032', client:'Nina Torres', title:'Driveway + Walkway Estimate', items:[
    {desc:'Driveway pressure wash', qty:1, price:380}, {desc:'Front walkway', qty:1, price:140}
  ], addons:[], deposit:0, status:'sent', created:d(-4,0)},
  {id:'EST-2033', client:'Grace Kim', title:'Deck Restoration', items:[
    {desc:'Soft wash deck (400 sqft)', qty:1, price:480}, {desc:'Wood brightener treatment', qty:1, price:120}
  ], addons:['Sealant (+$220)'], deposit:150, status:'approved', created:d(-8,0)},
  {id:'EST-2034', client:'Wallace Home Svcs', title:'Commercial Contract Estimate', items:[
    {desc:'Monthly storefront wash', qty:12, price:180}
  ], addons:[], deposit:0, status:'draft', created:d(-6,0)},
];

state.invoices = [
  {id:'INV-1042', client:'Dana Ortiz', job:'Window Cleaning Package', issued:d(-6,0), due:d(1,0), subtotal:780, tax:0, discount:0, deposit:0, total:780, status:'sent', payments:[]},
  {id:'INV-1041', client:'Marcus Webb', job:'Fence Soft Wash', issued:d(-10,0), due:d(-3,0), subtotal:520, tax:0, discount:0, deposit:0, total:520, status:'paid', payments:[{method:'Card', amount:520, date:d(-3,0)}]},
  {id:'INV-1040', client:'Tom Bradley', job:'Patio + Storefront Clean', issued:d(-2,0), due:d(5,0), subtotal:1150, tax:0, discount:50, deposit:0, total:1100, status:'draft', payments:[]},
  {id:'INV-1039', client:'James Douglas', job:'Gutter Brightening', issued:d(-14,0), due:d(-7,0), subtotal:410, tax:0, discount:0, deposit:0, total:410, status:'overdue', payments:[]},
  {id:'INV-1038', client:'Sarah Nguyen', job:'Deck Restoration', issued:d(-20,0), due:d(-13,0), subtotal:590, tax:0, discount:0, deposit:100, total:490, status:'paid', payments:[{method:'ACH', amount:100, date:d(-18,0)},{method:'Card', amount:390, date:d(-13,0)}]},
  {id:'INV-1037', client:'Dana Ortiz', job:'Q2 Commercial Wash', issued:d(-30,0), due:d(-23,0), subtotal:2100, tax:0, discount:0, deposit:0, total:2100, status:'paid', payments:[{method:'Check', amount:2100, date:d(-24,0)}]},
];

state.reviews = [
  {id:uid(), client:'Marcus Webb', rating:5, text:'Driveway looks brand new. Showed up on time, price matched the quote exactly.', date:d(-3,0), source:'Google'},
  {id:uid(), client:'Sarah Nguyen', rating:5, text:'Soft washed our deck without any damage — huge difference for our listing photos.', date:d(-13,0), source:'Google'},
  {id:uid(), client:'Tom Bradley', rating:5, text:'Hard workers, didn\'t cut corners, cleaned up completely before leaving.', date:d(-1,0), source:'Facebook'},
  {id:uid(), client:'Dana Ortiz', rating:4, text:'Great quarterly service, would love earlier morning slots.', date:d(-20,0), source:'Google'},
];

/* ============================================================
   PRESSURE WASHING CALCULATORS
   ============================================================ */
const CALC = {
  sqft(length, width){ return Math.round(length*width); },

  instantPrice(sqft, rate, difficulty){
    const diffMult = {easy:1, moderate:1.15, hard:1.35}[difficulty] || 1;
    return Math.round(sqft * rate * diffMult);
  },

  roofMeasurement(footprintSqft, pitch){
    // pitch multiplier approximations (rise/12)
    const pitchMult = {'4/12':1.054,'5/12':1.083,'6/12':1.118,'7/12':1.158,'8/12':1.202,'9/12':1.25,'10/12':1.302,'12/12':1.414};
    const mult = pitchMult[pitch] || 1.118;
    return Math.round(footprintSqft * mult);
  },

  // SH (sodium hypochlorite) dilution using dilution ratio formula
  shDilution(targetGallons, startPct, targetPct){
    // C1V1 = C2V2 -> V1 = (C2*V2)/C1
    const shGallons = (targetPct/100 * targetGallons) / (startPct/100);
    const waterGallons = targetGallons - shGallons;
    return { sh: Math.max(shGallons,0).toFixed(2), water: Math.max(waterGallons,0).toFixed(2) };
  },

  chemicalMix(surfaceType, sqft){
    const rates = { // gallons of mixed solution per 1000 sqft
      concrete: 1.5, siding: 1.2, roof: 1.0, deck: 1.3, driveway: 1.5,
    };
    const rate = rates[surfaceType] || 1.3;
    return +(sqft/1000*rate).toFixed(2);
  },

  surfaceCleanerTime(sqft, cleanerWidthIn){
    // rough production rate: 20" SC ~ 2000 sqft/hr, scales with width
    const baseRate = 2000 * (cleanerWidthIn/20);
    const hours = sqft / baseRate;
    return +hours.toFixed(2);
  },

  chemicalCost(gallonsSolution, costPerGallonConcentrate, dilutionRatio){
    // dilutionRatio e.g. 10 means 1 part chem : 10 parts water
    const concentrateGallons = gallonsSolution / (dilutionRatio+1);
    return +(concentrateGallons*costPerGallonConcentrate).toFixed(2);
  },

  waterUsage(sqft, gpm, minutesPer1000){
    const minutes = (sqft/1000)*minutesPer1000;
    return Math.round(minutes*gpm);
  },

  profit(revenue, laborCost, chemCost, fuelCost, otherCost){
    const totalCost = laborCost+chemCost+fuelCost+otherCost;
    const profit = revenue-totalCost;
    const margin = revenue>0 ? (profit/revenue*100) : 0;
    return { totalCost, profit, margin: margin.toFixed(1) };
  },

  jobCost(hours, hourlyLaborRate, chemCost, equipmentCost, travelMiles, mileageRate){
    const labor = hours*hourlyLaborRate;
    const travel = travelMiles*mileageRate;
    const total = labor+chemCost+equipmentCost+travel;
    return { labor, travel, total: +total.toFixed(2) };
  },
};
