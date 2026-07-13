
// Data
const jerseys = [

  // Laliga List
  {id:1,
   club:'FC Barcelona', 
   title:'FC Barcelona Home Jersey 26/27', 
   edition:'Player', 
   league:'La Liga', 
   retro:false, 
   colors:['#a50044','#004d98'], 
   price:1150,
   image:'Laliga/barcelona26.jpg'},

  {id:2, club:'FC Barcelona', 
    title:'FC Barcelona Away Jersey 26/27', 
    edition:'Fan', 
    league:'La Liga', 
    retro:false, 
    colors:['#004d98','#edbb00'], 
    price:850,
  image:'Laliga/barcelona27.jpg'},

  {id:3, club:'Real Madrid', 
    title:'Real Madrid Home Jersey 26/27', 
    edition:'Player', 
    league:'La Liga', 
    retro:false, 
    colors:['#ffffff','#d4af37'], 
    price:1150,
  image:'Laliga/Madrid2627.png'},

  {id:4, club:'Real Madrid', 
    title:'Real Madrid Home Jersey 26/27', 
    edition:'Player', 
    league:'La Liga', 
    retro:false, 
    colors:['#ce3524','#ffffff'], 
    price:1150,
  image:'Laliga/madrid27.jpg'},

  {id:5, club:'Atletico Madrid', 
    title:'Atletico Madrid Home Jersey 26/27', 
    edition:'Player', 
    league:'La Liga', 
    retro:false, 
    colors:['#ce3524','#ffffff'], 
    price:1150,
  image:'Laliga/atletico26.jpg'},

  {id:6, club:'Athletico Bilbao', 
    title:'Athletico Bilbao Home Jersey 26/27', 
    edition:'Player', 
    league:'La Liga', 
    retro:false, 
    colors:['#1a1a2e','#d4af37'], 
    price:1150,
  image:'Laliga/athletic26.jpg'},

   {id:7, club:'Sevilla', 
    title:'Sevilla Home Jersey 26/27', 
    edition:'Player', 
    league:'La Liga', 
    retro:false, 
    colors:['#1a1a2e','#d4af37'], 
    price:1150,
  image:'Laliga/sevilla26.jpg'},


  // Laliga list Close



  // Premier League List


   {id:8, club:'Arsenal', 
    title:'Arsenal FC Home Jersey 26/27', 
    edition:'Player', 
    league:'Premier League', 
    retro:false, 
    colors:['#da291c','#ffe500'], 
    price:1150,
  image:'PL/arsenal26.jpg'},


  {id:9, club:'Manchester United', 
    title:'Manchester United Home Jersey 26/27', 
    edition:'Player', 
    league:'Premier League', 
    retro:false, 
    colors:['#da291c','#ffe500'], 
    price:1150,
  image:'PL/manunited26.jpg'},


  {id:10, club:'Manchester City', 
    title:'Manchester City Home Jersey 26/27', 
    edition:'Player', 
    league:'Premier League', 
    retro:false, 
    colors:['#6cabdd','#1c2c5b'], 
    price:1150,
  image:'PL/mancity26.jpg'},

{id:11, club:'Liverpool', 
    title:'Liverpool Home Jersey 26/27', 
    edition:'Player', 
    league:'Premier League', 
    retro:false, 
    colors:['#c8102e','#00b2a9'], 
    price:1150,
  image:'PL/liverpool26.jpg'},

  {id:12, club:'Chelsea', 
    title:'Chelsea Home Jersey 26/27', 
    edition:'Player', 
    league:'Premier League', 
    retro:false, 
    colors:['#034694','#dba111'], 
    price:1150,
  image:'PL/chelsea26.jpg'},

  {id:13, club:'Tottenham', 
    title:'Tottenham Home Jersey 26/27', 
    edition:'Player', 
    league:'Premier League', 
    retro:false, 
    colors:['#ffffff','#132257'], 
    price:1150,
  image:'PL/totenhum26.jpg'},


  // PL List Close



  // Bundesliga List

  {id:14, 
    club:'Bayern Munich', 
    title:'Bayern Munich Home Jersey 25/26', 
    edition:'Player', 
    league:'Bundesliga', 
    retro:false, 
    colors:['#dc052d','#ffffff'], 
    price:1150,
  image:'Bundesliga/bayern26.jpg'},

   {id:15, 
    club:'Bayer Leverkusen', 
    title:'Bayer Leverkusen Home Jersey 25/26', 
    edition:'Player', 
    league:'Bundesliga', 
    retro:false, 
    colors:['#dc052d','#ffffff'], 
    price:1150,
  image:'Bundesliga/bayer26.jpg'},

  // Bundesliga List Close

// Serie A List

  {id:16, 
    club:'Inter Milan', 
    title:'Inter Milan Home Jersey 26/27', 
    edition:'Player', 
    league:'Serie A', 
    retro:false, 
    colors:['#010e80','#000000'], 
    price:1150,
  image:'SerieA/inter26.jpg'},

  {id:17, 
    club:'AC Milan', 
    title:'AC Milan Home Jersey 26/27', 
    edition:'Fan', 
    league:'Serie A', 
    retro:false, 
    colors:['#fb090b','#000000'], 
    price:1150,
  image:'SerieA/acmilan26.jpg'},

  {id:18, 
    club:'AC Milan', 
    title:'AC Milan Away Jersey 26/27', 
    edition:'Fan', 
    league:'Serie A', 
    retro:false, 
    colors:['#fb090b','#000000'], 
    price:850,
  image:'SerieA/acmilan27.jpg'},

  {id:19, 
    club:'Juventus',
     title:'Juventus Home Jersey 26/27', 
     edition:'Player', 
     league:'Serie A', 
     retro:false, 
     colors:['#000000','#ffffff'], 
     price:1150,
     image:'SerieA/juventus26.jpg'},

  {id:20, 
    club:'Napoli', 
    title:'Napoli Home Jersey 26/27', 
    edition:'Player', 
    league:'Serie A', 
    retro:false, 
    colors:['#12a0d7','#ffffff'], 
    price:1150,
   image:'SerieA/napoli26.jpg'},

   {id:21, 
    club:'Roma', 
    title:'Roma Home Jersey 26/27', 
    edition:'Player', 
    league:'Serie A', 
    retro:false, 
    colors:['#12a0d7','#ffffff'], 
    price:1150,
   image:'SerieA/roma26.jpg'},


  //  Seria A List Close


  // Ligue 1 List
   {id:22, 
    club:'PSG', 
    title:'PSG Home Jersey 26/27', 
    edition:'Player', 
    league:'Ligue 1', 
    retro:false, 
    colors:['#12a0d7','#ffffff'], 
    price:1150,
   image:'Ligue1/psg26.jpg'},

    {id:23, 
    club:'Marseille', 
    title:'Marseille Home Jersey 26/27', 
    edition:'Player', 
    league:'Ligue 1', 
    retro:false, 
    colors:['#12a0d7','#ffffff'], 
    price:1150,
   image:'Ligue1/marseille26.jpg'},

    {id:24, 
    club:'Marseille', 
    title:'Marseille Away Jersey 26/27', 
    edition:'Player', 
    league:'Ligue 1', 
    retro:false, 
    colors:['#12a0d7','#ffffff'], 
    price:1150,
   image:'Ligue1/marseille27.jpg'},

    {id:25, 
    club:'Lyon', 
    title:'Lyon Home Jersey 26/27', 
    edition:'Player', 
    league:'Ligue 1', 
    retro:false, 
    colors:['#12a0d7','#ffffff'], 
    price:1150,
   image:'Ligue1/lyon26.jpg'},

 {id:26, 
    club:'Lyon', 
    title:'Lyon Away Jersey 26/27', 
    edition:'Player', 
    league:'Ligue 1', 
    retro:false, 
    colors:['#12a0d7','#ffffff'], 
    price:1150,
   image:'Ligue1/lyon27.jpg'},


    {id:27, 
    club:'LOSC', 
    title:'LOSC Home Jersey 26/27', 
    edition:'Player', 
    league:'Ligue 1', 
    retro:false, 
    colors:['#12a0d7','#ffffff'], 
    price:1150,
   image:'Ligue1/losc26.jpg'},


    {id:28, 
    club:'Monaco', 
    title:'Monaco Home Jersey 26/27', 
    edition:'Player', 
    league:'Ligue 1', 
    retro:false, 
    colors:['#12a0d7','#ffffff'], 
    price:1150,
   image:'Ligue1/monaco26.jpg'},

  //  Ligue 1 List Close



  // Retro
  {id:101, 
    club:'FC Barcelona', 
    title:'Barcelona 2010-11 Iconic Kit', 
    edition:'Retro', 
    league:'La Liga', 
    retro:true, 
   image:'Retro/barcelona1011.jpg', 
    price:1350},
  {id:102, 
    club:'Real Madrid', 
    title:'Real Madrid 2017-18 Classic', 
    edition:'Retro', 
    league:'La Liga', 
    retro:true, 
    image:'Retro/madrid1718.jpg',
    price:1350},
  {id:103, 
    club:'AC Milan', 
    title:'AC Milan 2006-07 Champions', 
    edition:'Retro', 
    league:'Serie A', 
    retro:true, 
    image:'Retro/acmilan0607.jpg',
    price:1350},
  {id:104, 
    club:'Manchester United', 
    title:'Manchester United 2008 UCL Final', 
    edition:'Retro', 
    league:'Premier League', 
    retro:true, 
    image:'Retro/manunited0708.jpg',
    price:1350},
];

const leagueClubs = {
  'La Liga': ['FC Barcelona','Real Madrid','Atletico Madrid','Athletic Bilbao','Sevilla'],
  'Premier League': ['Arsenal','Manchester United','Manchester City','Liverpool','Chelsea','Tottenham'],
  'Bundesliga': ['Bayern Munich','Bayer Leverkusen'],
  'Serie A': ['Inter Milan','AC Milan','Juventus','Napoli', 'Roma'],
  'Ligue 1': ['PSG','Lyon','Marseille', 'Monaco', 'LOSC'],
  'UCL': ['Arsenal','FC Barcelona','Bayern Munich','Liverpool','Tottenham',
    'Chelsea','Sporting CP','Juventus','Real Madrid','Manchester City','Inter Milan','PSG','Atlético Madrid',
  'Bayer Leverkusen','Dortmund','Napoli','AC Milan']
};

let cart = [];
let currentPage = 'home';
let wishlist = [];
let checkoutData = {
  name: '',
  phone: '',
  email: '',
  zila: '',
  upazila: '',
  thana: '',
  addressDetails: '',
  deliveryArea: 'inside', // Default: Inside Dhaka
  deliveryCost: 70,       // Default cost
  paymentMethod: 'full',  // 'full' or 'cod'
  trxId: ''
};

// Config
const defaultConfig = {
  hero_tagline: 'Wear Your Club. Own The Match.',
  hero_subtitle: 'Premium Football Jerseys — Player & Fan Editions',
  background_color: '#f4f6f9',
  surface_color: '#ffffff',
  text_color: '#1f2937',
  primary_color: '#1a3a6b',
  accent_color: '#c9a84c',
  font_family: 'Outfit',
  font_size: 16
};

// MOCK LOCAL SDK so the original code runs perfectly
window.elementSdk = {
    config: defaultConfig
};

// Apply local config explicitly on load
function initLocalEnvironment(config) {
    document.body.style.fontFamily = `${config.font_family}, sans-serif`;
    document.body.style.color = config.text_color;
    document.body.style.backgroundColor = config.background_color;
    document.documentElement.style.fontSize = config.font_size + 'px';
}
initLocalEnvironment(defaultConfig);

// Navigation
function navigate(page, data) {
  currentPage = page;
  const main = document.getElementById('mainContent');
  window.scrollTo({top:0,behavior:'smooth'});
  switch(page) {
    case 'home': renderHome(); break;
    case 'player': renderEdition('Player'); break;
    case 'fan': renderEdition('Fan'); break;
    case 'retro': renderRetro(); break;
    case 'league': renderLeague(data); break;
    case 'product': renderProduct(data); break;
    case 'cart': renderCart(); break;
    case 'checkout': renderCheckout(); break;
  }
  lucide.createIcons();
}

function renderHome() {
  const featured = jerseys.filter(j=>!j.retro).slice(0,8);
  document.getElementById('mainContent').innerHTML = `
   <section class="relative py-12 md:py-20 px-4 overflow-hidden flex items-center justify-center bg-gradient-to-b from-surface to-gray-50 border-b border-gray-100">
      <!-- Decorative background blur for premium effect -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-royal/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div class="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div class="max-w-4xl mx-auto text-center fade-in z-10 relative">
        <!-- Top Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm mb-5">
            <span class="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <p class="text-[10px] md:text-xs font-bold text-royal uppercase tracking-widest">Season 26/27 Collection</p>
        </div>
        
        <!-- Main Headline -->
        <h1 id="heroTagline" class="text-4xl md:text-5xl lg:text-6xl font-display font-900 text-royal leading-tight tracking-tight mb-4">
          ${window.elementSdk.config.hero_tagline || defaultConfig.hero_tagline}
        </h1>
        
        <!-- Subtitle -->
        <p id="heroSubtitle" class="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          ${window.elementSdk.config.hero_subtitle || defaultConfig.hero_subtitle}. Experience the authentic feel of the beautiful game with premium quality fabric.
        </p>
        
        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button onclick="navigate('player')" class="btn-primary text-white px-7 py-3 rounded-full font-bold text-sm hover:shadow-xl hover:shadow-royal/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto">
            Shop Player Edition
          </button>
          <button onclick="navigate('fan')" class="bg-white border border-gray-200 text-royal px-7 py-3 rounded-full font-bold text-sm hover:border-royal transition-all transform hover:-translate-y-1 shadow-sm w-full sm:w-auto">
            Explore Fan Edition
          </button>
        </div>
        
        <!-- Premium Trust Indicators -->
        <div class="mt-10 pt-6 border-t border-gray-200/60 flex flex-wrap justify-center items-center gap-6 md:gap-12 text-gray-500">
            <div class="flex items-center gap-2 transition hover:text-royal">
                <i data-lucide="shield-check" style="width:18px;height:18px"></i>
                <span class="text-xs md:text-sm font-semibold tracking-wider uppercase">100% Authentic</span>
            </div>
            <div class="flex items-center gap-2 transition hover:text-royal">
                <i data-lucide="truck" style="width:18px;height:18px"></i>
                <span class="text-xs md:text-sm font-semibold tracking-wider uppercase">Fast Delivery</span>
            </div>
            <div class="flex items-center gap-2 transition hover:text-royal">
                <i data-lucide="award" style="width:18px;height:18px"></i>
                <span class="text-xs md:text-sm font-semibold tracking-wider uppercase">Premium Quality</span>
            </div>
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 py-12">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-bold text-royal">Featured Jerseys</h2>
        <a href="#" onclick="navigate('player')" class="text-sm text-gold font-medium hover:underline">View All →</a>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${featured.map(j => renderCard(j)).join('')}
      </div>
    </section>
   <section class="max-w-7xl mx-auto px-4 py-12">
      <div class="flex items-center justify-between mb-8">
        <div>
          <p class="text-gold uppercase tracking-widest text-xs font-bold mb-1">Exclusive</p>
          <h2 class="text-2xl font-bold text-royal">Special Jerseys</h2>
        </div>
        <a href="#" onclick="navigate('retro')" class="text-sm text-gold font-medium hover:underline">View All →</a>
      </div>
   
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        ${jerseys.filter(j => j.retro).slice(0, 3).map(j => renderCard(j)).join('')}
      </div>
    </section>
    <section class="max-w-7xl mx-auto px-4 py-12">
      <div class="mb-8">
        <p class="text-gold uppercase tracking-widest text-xs font-bold mb-1">Limited Time</p>
        <h2 class="text-2xl font-bold text-royal">Discount Jerseys</h2>
        <p class="text-gray-500 text-sm mt-1">Up to 40% off selected items</p>
      </div>
      <div class="overflow-x-auto pb-2 -mx-4 px-4 lg:overflow-x-visible">
        <div class="flex gap-4 lg:grid lg:grid-cols-1 lg:sm:grid-cols-2 lg:grid-cols-4 min-w-min lg:min-w-full">
          ${jerseys.filter(j => !j.retro).slice(0, 8).map(j => {
            const discount = j.edition === 'Player' ? 25 : 15;
            const discountedPrice = Math.round(j.price * (1 - discount / 100));
            return `
            <div class="flex-shrink-0 w-64 lg:w-auto card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div class="relative">
                <div class="h-64 w-full flex items-center justify-center bg-gray-50 cursor-pointer overflow-hidden" onclick="navigate('product',${j.id})">
                  ${j.image ? `<img src="${j.image}" alt="${j.title}" class="w-full h-full object-cover product-image">` : renderJerseySVG(j.colors,'medium')}
                </div>
                <div class="absolute top-3 right-3 bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-bold">-${discount}%</div>
              </div>
              <div class="p-4 flex flex-col flex-1">
                <span class="text-[10px] uppercase tracking-wider text-gold font-bold">${j.edition}</span>
                <h3 class="font-semibold text-sm mt-1 text-gray-800 leading-tight cursor-pointer hover:text-royal transition" onclick="navigate('product',${j.id})">${j.title}</h3>
                <div class="flex items-center gap-2 mt-2 flex-1">
                  <p class="text-royal font-bold">৳${discountedPrice.toLocaleString()}</p>
                  <p class="text-gray-400 text-xs line-through">৳${j.price.toLocaleString()}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-50">
                  <button onclick="event.stopPropagation();openSizeModal(${j.id})" class="btn-primary text-white text-xs py-2.5 rounded-xl w-full font-bold">Add To Cart</button>
                </div>
              </div>
            </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>`;
}

function renderEdition(edition) {
  const items = jerseys.filter(j => j.edition === edition);
  document.getElementById('mainContent').innerHTML = `
    <section class="max-w-7xl mx-auto px-4 py-10 fade-in">
      <h2 class="text-3xl font-bold text-royal mb-2">${edition} Edition</h2>
      <p class="text-gray-500 mb-8">${edition === 'Player' ? 'Authentic match-day quality — ৳1,150' : 'Stadium-ready style — ৳850'}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${items.map(j => renderCard(j)).join('')}
      </div>
    </section>`;
}

function renderRetro() {
  const items = jerseys.filter(j => j.retro);
  document.getElementById('mainContent').innerHTML = `
    <section class="max-w-7xl mx-auto px-4 py-10 fade-in">
      <div class="text-center mb-10">
        <p class="text-gold uppercase tracking-widest text-xs font-bold mb-1">Exclusive</p>
        <h2 class="text-3xl font-display font-bold text-royal">Retro Collection</h2>
        <p class="text-gray-500 mt-2">Iconic kits that defined football history — ৳1,350</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${items.map(j => renderCard(j)).join('')}
      </div>
    </section>`;
}

function renderLeague(league) {
  const clubs = leagueClubs[league] || [];
  document.getElementById('mainContent').innerHTML = `
    <section class="max-w-7xl mx-auto px-4 py-10 fade-in">
      <h2 class="text-3xl font-bold text-royal mb-2">${league === 'UCL' ? 'UEFA Champions League' : league}</h2>
      <p class="text-gray-500 mb-6">Select a club to view jerseys</p>
      <div class="flex flex-wrap gap-2 mb-8">
        ${clubs.map(c => `<button onclick="filterClub('${c}','${league}')" class="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-royal hover:text-royal transition">${c}</button>`).join('')}
      </div>
      <div id="leagueJerseys" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${jerseys.filter(j=>j.league===league&&!j.retro).map(j=>renderCard(j)).join('')}
      </div>
    </section>`;
}

function filterClub(club, league) {
  const items = jerseys.filter(j => j.club === club && !j.retro);
  document.getElementById('leagueJerseys').innerHTML = items.length ? items.map(j=>renderCard(j)).join('') : '<p class="col-span-4 text-center text-gray-400 py-8">No jerseys found for this club yet.</p>';
  lucide.createIcons();
}

function renderProduct(id) {
  const j = jerseys.find(x=>x.id===id);
  if(!j) return;
  const related = jerseys.filter(x=>x.league===j.league&&x.id!==j.id&&!x.retro).slice(0,4);
  document.getElementById('mainContent').innerHTML = `
    <section class="max-w-7xl mx-auto px-4 py-10 fade-in">
      <button onclick="history.back?navigate('home'):null" class="text-sm text-gray-500 hover:text-royal mb-6 inline-flex items-center gap-1"><i data-lucide="arrow-left" style="width:14px;height:14px"></i> Back</button>
      <div class="grid md:grid-cols-2 gap-10">
        <div class="bg-white rounded-2xl p-8 flex items-center justify-center shadow-sm border border-gray-100 h-96">
          <img
src="${j.image}"
alt="${j.title}"
class="max-w-full
max-h-full
object-contain">
        </div>
        <div>
          <span class="text-xs uppercase tracking-wider text-gold font-bold">${j.edition} Edition</span>
          <h1 class="text-2xl md:text-3xl font-bold text-royal mt-2">${j.title}</h1>
          <p class="text-gray-500 mt-1">${j.club} • ${j.league}</p>
          <p class="text-3xl font-bold text-royal mt-4">৳${j.price.toLocaleString()}</p>
          <div class="mt-6">
            <p class="text-sm font-semibold mb-2">Select Size <span class="text-red-400">*</span></p>
            <div class="flex gap-2" id="productSizes">
              ${['S','M','L','XL','XXL'].map(s=>`<button onclick="selectSize(this,'${s}')" class="size-btn w-12 h-10 rounded-lg border border-gray-200 text-sm font-medium hover:border-royal">${s}</button>`).join('')}
            </div>
            <p id="sizeError" class="text-red-500 text-xs mt-1 hidden">Please select your jersey size first.</p>
          </div>
          <div class="mt-4 flex items-center gap-3">
            <p class="text-sm font-semibold">Qty:</p>
            <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button onclick="changeQty(-1)" class="px-3 py-1.5 hover:bg-gray-100">−</button>
              <span id="prodQty" class="px-4 py-1.5 text-sm font-medium">1</span>
              <button onclick="changeQty(1)" class="px-3 py-1.5 hover:bg-gray-100">+</button>
            </div>
          </div>
          <div class="flex gap-3 mt-8">
            <button onclick="addToCartFromProduct(${j.id})" class="btn-primary text-white px-8 py-3 rounded-full font-semibold text-sm flex-1">Add To Cart</button>
            <button onclick="buyNow(${j.id})" class="bg-gold text-white px-8 py-3 rounded-full font-semibold text-sm flex-1">Buy Now</button>
          </div>
          <button onclick="toggleWishlist(${j.id})" class="mt-4 text-sm text-gray-500 hover:text-gold flex items-center gap-1"><i data-lucide="heart" style="width:14px;height:14px"></i> ${wishlist.includes(j.id)?'Remove from Wishlist':'Add to Wishlist'}</button>
        </div>
      </div>
      ${related.length ? `<div class="mt-12"><h3 class="text-xl font-bold text-royal mb-4">Related Jerseys</h3><div class="grid grid-cols-2 lg:grid-cols-4 gap-4">${related.map(r=>renderCard(r)).join('')}</div></div>` : ''}
    </section>`;
  window._selectedSize = null;
  window._prodQty = 1;
}

function renderCart() {
  const total = cart.reduce((s,i) => s + i.price * i.qty, 0);
  
  document.getElementById('mainContent').innerHTML = `
    <section class="max-w-5xl mx-auto px-4 py-8 md:py-10 fade-in">
      <h2 class="text-2xl md:text-3xl font-bold text-royal mb-6">Shopping Cart</h2>
      
      ${cart.length === 0 ? `
        <div class="text-center py-16 text-gray-400">
          <i data-lucide="shopping-bag" style="width:48px;height:48px;margin:0 auto 12px"></i>
          <p>Your cart is empty</p>
          <button onclick="navigate('home')" class="mt-4 btn-primary text-white px-6 py-2.5 rounded-full text-sm font-medium">Continue Shopping</button>
        </div>` : `
        
        <div class="grid md:grid-cols-3 gap-6 md:gap-8">
          
          <!-- Cart Items Section -->
          <div class="md:col-span-2 space-y-4">
            ${cart.map((item,i) => `
              <div class="bg-white rounded-xl p-4 flex gap-4 shadow-sm border border-gray-100 relative">
                
                <!-- Delete button (Top-Right on Mobile, Far-Right on Desktop) -->
                <button onclick="removeFromCart(${i})" class="absolute top-4 right-4 md:static md:order-last text-gray-400 hover:text-red-500 transition">
                  <i data-lucide="trash-2" style="width:18px;height:18px"></i>
                </button>
                
                <!-- Item Image -->
                <div class="w-20 h-20 md:w-16 md:h-16 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  ${item.image ? `<img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">` : renderJerseySVG(item.colors,'tiny')}
                </div>
                
                <!-- Item Details (Responsive Stack) -->
                <div class="flex-1 flex flex-col md:flex-row md:items-center justify-between min-w-0 pr-6 md:pr-0">
                  
                  <div class="mb-3 md:mb-0 md:flex-1 md:min-w-0 md:pr-4">
                    <p class="font-semibold text-sm md:truncate line-clamp-2 md:line-clamp-none text-gray-800 leading-tight">${item.title}</p>
                    <p class="text-xs text-gray-500 mt-1">Size: ${item.size} • ${item.edition}</p>
                  </div>
                  
                  <div class="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                    <!-- Qty Controls -->
                    <div class="flex items-center gap-2">
                      <button onclick="updateCartQty(${i},-1)" class="w-8 h-8 md:w-7 md:h-7 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-royal hover:text-white hover:border-royal transition">−</button>
                      <span class="text-sm font-bold w-6 text-center text-gray-800">${item.qty}</span>
                      <button onclick="updateCartQty(${i},1)" class="w-8 h-8 md:w-7 md:h-7 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-royal hover:text-white hover:border-royal transition">+</button>
                    </div>
                    
                    <!-- Price -->
                    <p class="font-bold text-royal text-sm md:text-base md:w-24 md:text-right">৳${(item.price*item.qty).toLocaleString()}</p>
                  </div>
                  
                </div>
              </div>
            `).join('')}
          </div>
          
          <!-- Order Summary Section -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-fit md:sticky md:top-24 mt-2 md:mt-0">
            <h3 class="font-bold text-royal mb-4 text-lg">Order Summary</h3>
            <div class="flex justify-between text-sm mb-3">
              <span class="text-gray-500">Subtotal</span>
              <span class="font-medium text-gray-800">৳${total.toLocaleString()}</span>
            </div>
            <div class="flex justify-between text-sm mb-3">
              <span class="text-gray-500">Shipping</span>
              <span class="text-green-600 font-bold">Based On Category</span>
            </div>
            <div class="border-t border-gray-100 my-4"></div>
            <div class="flex justify-between text-lg font-bold mb-6">
                <span class="text-gray-800">Total</span>
                <span class="text-royal">৳${total.toLocaleString()}</span>
            </div>
            <button onclick="navigate('checkout')" class="btn-primary text-white w-full py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-royal/20 transition hover:shadow-royal/40">Proceed to Checkout</button>
          </div>
          
        </div>
      `}
    </section>`;
}

// Helpers
function renderCard(j) {
  const imageDisplay = j.image 
    ? `<img src="${j.image}" alt="${j.title}" class="w-full h-full object-cover product-image">`
    : renderJerseySVG(j.colors, 'medium');

  return `<div class="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
    <div class="h-64 w-full flex items-center justify-center bg-gray-50 cursor-pointer overflow-hidden relative" onclick="navigate('product',${j.id})">
      ${imageDisplay}
    </div>
    <div class="p-5 flex flex-col flex-1">
      <span class="text-[10px] uppercase tracking-wider text-gold font-bold">${j.edition} Edition</span>
      <h3 class="font-semibold text-sm mt-1 text-gray-800 leading-tight cursor-pointer hover:text-royal transition" onclick="navigate('product',${j.id})">${j.title}</h3>
      <p class="text-royal font-bold mt-2 flex-1">৳${j.price.toLocaleString()}</p>
      
      <div class="mt-4 pt-4 border-t border-gray-50">
        <button onclick="event.stopPropagation();openSizeModal(${j.id})" class="btn-primary text-white text-xs py-2.5 rounded-xl w-full font-bold">Add To Cart</button>
      </div>
    </div>
  </div>`;
}

function renderJerseySVG(colors, size) {
  const s = size==='large'?200:size==='medium'?120:size==='small'?80:50;
  return `<svg width="${s}" height="${s*1.2}" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 15 L20 20 L10 35 L20 38 L25 28 L25 105 L75 105 L75 28 L80 38 L90 35 L80 20 L70 15 Z" fill="${colors[0]}" stroke="${colors[1]}" stroke-width="2"/>
    <path d="M35 15 Q50 25 65 15" fill="none" stroke="${colors[1]}" stroke-width="2"/>
    <circle cx="50" cy="60" r="12" fill="${colors[1]}" opacity="0.15"/>
    <path d="M25 55 L75 55" stroke="${colors[1]}" stroke-width="0.5" opacity="0.3"/>
  </svg>`;
}

// Size selection
let cardSizes = {};
let discountSizes = {};
function selectCardSize(id, size, el) {
  cardSizes[id] = size;
  el.parentElement.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById(`card-err-${id}`)?.classList.add('hidden');
}

function selectDiscountSize(id, size, el) {
  discountSizes[id] = size;
  el.parentElement.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById(`discount-err-${id}`)?.classList.add('hidden');
}

function selectSize(el, size) {
  window._selectedSize = size;
  el.parentElement.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('sizeError')?.classList.add('hidden');
}

let _prodQty = 1;
function changeQty(d) {
  _prodQty = Math.max(1, _prodQty + d);
  document.getElementById('prodQty').textContent = _prodQty;
}

// Cart
function addToCartFromCard(id) {
  if(!cardSizes[id]) { document.getElementById(`card-err-${id}`)?.classList.remove('hidden'); return; }
  const j = jerseys.find(x=>x.id===id);
  addItem(j, cardSizes[id], 1);
}

function addDiscountToCart(id) {
  if(!discountSizes[id]) { document.getElementById(`discount-err-${id}`)?.classList.remove('hidden'); return; }
  const j = jerseys.find(x=>x.id===id);
  addItem(j, discountSizes[id], 1);
}

function addToCartFromProduct(id) {
  if(!window._selectedSize) { document.getElementById('sizeError')?.classList.remove('hidden'); return; }
  const j = jerseys.find(x=>x.id===id);
  addItem(j, window._selectedSize, _prodQty);
}

function buyNowCard(id) {
  if(!cardSizes[id]) { document.getElementById(`card-err-${id}`)?.classList.remove('hidden'); return; }
  const j = jerseys.find(x=>x.id===id);
  addItem(j, cardSizes[id], 1);
  navigate('cart');
}

function buyNow(id) {
  if(!window._selectedSize) { document.getElementById('sizeError')?.classList.remove('hidden'); return; }
  const j = jerseys.find(x=>x.id===id);
  addItem(j, window._selectedSize, _prodQty);
  navigate('cart');
}

function addItem(j, size, qty) {
  const existing = cart.find(c=>c.id===j.id && c.size===size);
  if(existing) existing.qty += qty;
  else cart.push({...j, size, qty});
  updateCartCount();
  showToast(`${j.club} jersey (${size}) added to cart!`);
}

function updateCartQty(i, d) {
  cart[i].qty = Math.max(1, cart[i].qty + d);
  renderCart(); lucide.createIcons();
}

function removeFromCart(i) { cart.splice(i,1); updateCartCount(); renderCart(); lucide.createIcons(); }

function updateCartCount() {
  const count = cart.reduce((s,i)=>s+i.qty,0);
  const el = document.getElementById('cartCount');
  if(count>0) { el.textContent=count; el.classList.remove('hidden'); } else el.classList.add('hidden');
}

function checkout() {
  showToast('Order placed successfully! 🎉');
  cart = []; updateCartCount(); navigate('home');
}

function renderCheckout() {
  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  
  // Default fallback if somehow lost
  checkoutData.deliveryCost = checkoutData.deliveryCost || 70;
  checkoutData.paymentMethod = checkoutData.paymentMethod || 'full';
  
  const total = subtotal + checkoutData.deliveryCost;

  document.getElementById('mainContent').innerHTML = `
    <section class="max-w-6xl mx-auto px-4 py-8 md:py-10 fade-in">
      <button onclick="navigate('cart')" class="text-sm text-gray-500 hover:text-royal mb-6 inline-flex items-center gap-1">
        <i data-lucide="arrow-left" style="width:14px;height:14px"></i> Back to Cart
      </button>
      <h2 class="text-2xl md:text-3xl font-bold text-royal mb-8">Checkout</h2>
      
      <div class="grid lg:grid-cols-3 gap-8">
        
        <div class="lg:col-span-2 space-y-6">
          
          <!-- Shipping Information -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="font-bold text-royal mb-5 flex items-center gap-2">
              <i data-lucide="map-pin" style="width:18px;height:18px"></i> Shipping Details
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name *" class="md:col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('name', this.value)" value="${checkoutData.name||''}">
              <input type="tel" placeholder="Phone Number *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('phone', this.value)" value="${checkoutData.phone||''}">
              <input type="email" placeholder="Email Address *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('email', this.value)" value="${checkoutData.email||''}">
              
              <input type="text" placeholder="Zila (District) *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('zila', this.value)" value="${checkoutData.zila||''}">
              <input type="text" placeholder="Upazila *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('upazila', this.value)" value="${checkoutData.upazila||''}">
              <input type="text" placeholder="Thana / Police Station *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('thana', this.value)" value="${checkoutData.thana||''}">
              
              <input type="text" placeholder="Detailed Address (House, Road, Area) *" class="md:col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('addressDetails', this.value)" value="${checkoutData.addressDetails||''}">
            </div>
          </div>

          <!-- Delivery Area -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="font-bold text-royal mb-5 flex items-center gap-2">
              <i data-lucide="truck" style="width:18px;height:18px"></i> Delivery Area
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <label id="dlv-inside" class="flex flex-col p-4 rounded-xl border-2 ${checkoutData.deliveryCost===70 ? 'border-royal bg-royal/5' : 'border-gray-100'} cursor-pointer transition relative" onclick="updateDeliveryOption('inside')">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-gray-800 text-sm">Inside Dhaka</span>
                  <span class="font-bold text-royal">৳70</span>
                </div>
                <span class="text-xs text-gray-500">Delivery in 24-48 hours</span>
              </label>
              
              <label id="dlv-outside" class="flex flex-col p-4 rounded-xl border-2 ${checkoutData.deliveryCost===120 ? 'border-royal bg-royal/5' : 'border-gray-100'} cursor-pointer transition relative" onclick="updateDeliveryOption('outside')">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-gray-800 text-sm">Outside Dhaka</span>
                  <span class="font-bold text-royal">৳120</span>
                </div>
                <span class="text-xs text-gray-500">Delivery in 48-72 hours</span>
              </label>
            </div>
          </div>

          <!-- Payment Options & Instructions -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="font-bold text-royal mb-5 flex items-center gap-2">
              <i data-lucide="credit-card" style="width:18px;height:18px"></i> Payment Method
            </h3>
            
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <label id="pay-full" class="flex flex-col p-4 rounded-xl border-2 ${checkoutData.paymentMethod==='full' ? 'border-royal bg-royal/5' : 'border-gray-100'} cursor-pointer transition" onclick="updatePaymentOption('full')">
                <span class="font-bold text-gray-800 text-sm mb-1">Online Full Payment</span>
                <span class="text-xs text-gray-500">Pay total amount now (bKash/Nagad/Rocket)</span>
              </label>
              
              <label id="pay-cod" class="flex flex-col p-4 rounded-xl border-2 ${checkoutData.paymentMethod==='cod' ? 'border-royal bg-royal/5' : 'border-gray-100'} cursor-pointer transition" onclick="updatePaymentOption('cod')">
                <span class="font-bold text-gray-800 text-sm mb-1">Cash on Delivery</span>
                <span class="text-xs text-gray-500">Pay ONLY delivery charge now to confirm</span>
              </label>
            </div>

            <!-- Transaction Input Block -->
            <div class="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
              <p class="text-sm text-gray-700 mb-3">Please Send Money <span id="paymentAmountInstruction" class="font-bold text-royal text-lg">৳${(checkoutData.paymentMethod==='full' ? total : checkoutData.deliveryCost).toLocaleString()}</span> via <b>bKash, Nagad or Rocket</b> to this number:</p>
              
              <div class="flex items-center gap-2 mb-5">
                <span class="bg-white px-5 py-2.5 rounded-lg font-bold tracking-widest border border-gray-200 text-royal text-lg shadow-sm">01568931456</span>
                <span class="text-xs text-gray-500 font-medium px-2 py-1 bg-gray-100 rounded">(Personal)</span>
              </div>
              
              <div>
                <label class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Enter Transaction ID <span class="text-red-500">*</span></label>
                <input type="text" placeholder="e.g. 9XZ8B7Q2A" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition uppercase font-medium" oninput="updateCheckoutData('trxId', this.value)" value="${checkoutData.trxId||''}">
              </div>
            </div>

          </div>
        </div>
        
        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h3 class="font-bold text-royal mb-4 text-lg border-b border-gray-100 pb-3">Order Summary</h3>
            
            <div class="space-y-3 pb-4 border-b border-gray-100 max-h-64 overflow-y-auto pr-2 mt-4">
              ${cart.map(item => `
                <div class="flex justify-between text-xs">
                  <span class="text-gray-600 pr-2">${item.club} - ${item.title}<br><span class="font-medium text-gray-400">Size: ${item.size} × ${item.qty}</span></span>
                  <span class="font-bold text-gray-800">৳${(item.price * item.qty).toLocaleString()}</span>
                </div>
              `).join('')}
            </div>
            
            <div class="space-y-3 mt-4 mb-4">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Subtotal</span>
                <span class="font-bold text-gray-800">৳${subtotal.toLocaleString()}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Delivery Charge</span>
                <span id="summaryShipping" class="font-bold text-royal">+ ৳${checkoutData.deliveryCost}</span>
              </div>
            </div>
            
            <div class="border-t border-gray-100 my-4"></div>
            
            <div class="flex justify-between items-center mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span class="text-lg font-bold text-gray-800">Total</span>
              <span id="summaryTotal" class="text-2xl font-black text-royal">৳${total.toLocaleString()}</span>
            </div>
            
            <p id="checkoutError" class="text-red-500 text-xs mb-4 hidden text-center bg-red-50 p-3 rounded-lg font-medium"></p>
            
            <button onclick="validateAndPlaceOrder()" class="btn-primary text-white w-full py-4 rounded-xl font-bold text-sm shadow-lg shadow-royal/20 transition hover:shadow-royal/40 flex items-center justify-center gap-2">
              <i data-lucide="check-circle" style="width:18px;height:18px"></i> Place Order
            </button>
          </div>
        </div>
        
      </div>
    </section>`;
    
  lucide.createIcons();
}

// Delivery change handler
function updateDeliveryOption(area) {
  checkoutData.deliveryArea = area;
  checkoutData.deliveryCost = (area === 'inside') ? 70 : 120;
  
  // UI Update
  document.getElementById('dlv-inside').className = `flex flex-col p-4 rounded-xl border-2 cursor-pointer transition relative ${area === 'inside' ? 'border-royal bg-royal/5' : 'border-gray-100'}`;
  document.getElementById('dlv-outside').className = `flex flex-col p-4 rounded-xl border-2 cursor-pointer transition relative ${area === 'outside' ? 'border-royal bg-royal/5' : 'border-gray-100'}`;
  
  updateOrderSummaryTotals();
}

// Payment method change handler
function updatePaymentOption(method) {
  checkoutData.paymentMethod = method;
  
  // UI Update
  document.getElementById('pay-full').className = `flex flex-col p-4 rounded-xl border-2 cursor-pointer transition ${method === 'full' ? 'border-royal bg-royal/5' : 'border-gray-100'}`;
  document.getElementById('pay-cod').className = `flex flex-col p-4 rounded-xl border-2 cursor-pointer transition ${method === 'cod' ? 'border-royal bg-royal/5' : 'border-gray-100'}`;
  
  updateOrderSummaryTotals();
}

// Re-calculates and updates text without reloading page
function updateOrderSummaryTotals() {
  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const total = subtotal + checkoutData.deliveryCost;
  
  document.getElementById('summaryShipping').innerText = `+ ৳${checkoutData.deliveryCost}`;
  document.getElementById('summaryTotal').innerText = `৳${total.toLocaleString()}`;
  
  const payNowAmount = (checkoutData.paymentMethod === 'full') ? total : checkoutData.deliveryCost;
  document.getElementById('paymentAmountInstruction').innerText = `৳${payNowAmount.toLocaleString()}`;
}

function updateCheckoutData(field, value) {
  checkoutData[field] = value;
}

// Validating the new inputs
function validateAndPlaceOrder() {
  const requiredFields = {
    name: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    zila: "Zila (District)",
    upazila: "Upazila",
    thana: "Thana",
    addressDetails: "Detailed Address",
    trxId: "Transaction ID"
  };
  
  const missing = [];
  for (const [key, label] of Object.entries(requiredFields)) {
    if (!checkoutData[key] || !checkoutData[key].trim()) {
      missing.push(label);
    }
  }
  
  const errorEl = document.getElementById('checkoutError');
  if (missing.length > 0) {
    errorEl.innerHTML = `<b>Missing Fields:</b><br/>${missing.join(', ')}`;
    errorEl.classList.remove('hidden');
    return;
  }
  
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(checkoutData.email)) {
    errorEl.textContent = 'Please enter a valid email address.';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  checkout(); 
}

function updateCheckoutData(field, value) {
  checkoutData[field] = value;
}

function selectPayment(method) {
  checkoutData.paymentMethod = method;
  document.getElementById('cardDetails').classList.toggle('hidden', method !== 'card');
  document.getElementById('bankDetails').classList.toggle('hidden', method !== 'bank');
  document.getElementById('mobileDetails').classList.toggle('hidden', method !== 'mobile');
  
  document.getElementById('cardOption').classList.toggle('border-royal border-2', method === 'card');
  document.getElementById('bankOption').classList.toggle('border-royal border-2', method === 'bank');
  document.getElementById('mobileOption').classList.toggle('border-royal border-2', method === 'mobile');
  
  document.getElementById('cardOption').classList.toggle('border-gray-200', method !== 'card');
  document.getElementById('bankOption').classList.toggle('border-gray-200', method !== 'bank');
  document.getElementById('mobileOption').classList.toggle('border-gray-200', method !== 'mobile');
}

function formatCardNumber(el) {
  let v = el.value.replace(/\D/g, '');
  let f = '';
  for(let i = 0; i < v.length; i++) {
    if(i > 0 && i % 4 === 0) f += '-';
    f += v[i];
  }
  el.value = f;
}

function formatExpiry(el) {
  let v = el.value.replace(/\D/g, '');
  if(v.length >= 2) v = v.slice(0,2) + '/' + v.slice(2,4);
  el.value = v;
}

function setupPaymentOptions() {
  document.getElementById('cardOption').classList.add('border-royal', 'border-2');
}

function validateAndPlaceOrder() {
  // নতুন রিকোয়ার্ড ফিল্ডগুলো
  const requiredFields = {
    name: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    zila: "Zila (District)",
    upazila: "Upazila",
    thana: "Thana",
    addressDetails: "Detailed Address"
  };
  
 
  if (checkoutData.paymentMethod === 'full') {
    requiredFields.trxId = "Transaction ID";
  }
  
  const missing = [];
  for (const [key, label] of Object.entries(requiredFields)) {
    if (!checkoutData[key] || !checkoutData[key].toString().trim()) {
      missing.push(label);
    }
  }
  
  const errorEl = document.getElementById('checkoutError');
  
  if (missing.length > 0) {
    errorEl.innerHTML = `Please fill in all required fields: <br/><span class="font-normal">${missing.join(', ')}</span>`;
    errorEl.classList.remove('hidden');
    return;
  }
  
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(checkoutData.email)) {
    errorEl.textContent = 'Please enter a valid email address.';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  checkout(); // সবকিছু ঠিক থাকলে অর্ডার প্লেস হয়ে যাবে
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toggleWishlist(id) { wishlist.includes(id)?wishlist.splice(wishlist.indexOf(id),1):wishlist.push(id); navigate('product',id); lucide.createIcons(); }

// UI
function toggleLeagues() { document.getElementById('leagueMenu').classList.toggle('hidden'); }
function selectLeague(league) { document.getElementById('leagueMenu').classList.add('hidden'); navigate('league',league); }
function toggleSearch() { document.getElementById('searchBar').classList.toggle('hidden'); }
function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('hidden'); }

function handleSearch(q) {
  if(!q.trim()) { navigate('home'); return; }
  const results = jerseys.filter(j => j.title.toLowerCase().includes(q.toLowerCase()) || j.club.toLowerCase().includes(q.toLowerCase()));
  document.getElementById('mainContent').innerHTML = `
    <section class="max-w-7xl mx-auto px-4 py-10 fade-in">
      <h2 class="text-2xl font-bold text-royal mb-4">Results for "${q}"</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        ${results.length ? results.map(j=>renderCard(j)).join('') : '<p class="col-span-4 text-center text-gray-400 py-12">No jerseys found.</p>'}
      </div>
    </section>`;
  lucide.createIcons();
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = `<div class="toast bg-royal text-white px-6 py-3 rounded-full shadow-xl text-sm font-medium">${msg}</div>`;
  t.classList.remove('hidden');
  setTimeout(()=>t.classList.add('hidden'), 3000);
}

// Close dropdowns on outside click
document.addEventListener('click', e => {
  if(!document.getElementById('leagueDropdown').contains(e.target)) document.getElementById('leagueMenu').classList.add('hidden');
});

// Init
navigate('home');
lucide.createIcons();

// Modal
// --- Modal System Variables ---
let currentModalJerseyId = null;
let selectedModalSize = null;

// পেজ লোড হওয়ার সাথে সাথে মডালের কন্টেইনার HTML বডিতে ইনজেক্ট করবে
function initModalContainer() {
    if (!document.getElementById('cartModalContainer')) {
        const modalDiv = document.createElement('div');
        modalDiv.id = 'cartModalContainer';
        modalDiv.className = 'fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm p-4';
        document.body.appendChild(modalDiv);
    }
}
initModalContainer();

// মডাল ওপেন করার ফাংশন
function openSizeModal(id) {
    const j = jerseys.find(x => x.id === id);
    if (!j) return;
    
    currentModalJerseyId = id;
    selectedModalSize = null; // Reset size
    
    // টাইপ বের করা (Home / Away / Third)
    let type = 'Home';
    const titleLower = j.title.toLowerCase();
    if (titleLower.includes('away')) type = 'Away';
    else if (titleLower.includes('third')) type = 'Third';
    else if (titleLower.includes('goalkeeper') || titleLower.includes('gk')) type = 'Goalkeeper';

    const modalHtml = `
        <div class="bg-white rounded-2xl w-full max-w-sm md:max-w-md p-6 shadow-2xl transform transition-all relative">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition">
                <i data-lucide="x" style="width:20px;height:20px"></i>
            </button>
            
            <div class="flex gap-4 items-center mb-6 border-b border-gray-100 pb-4">
                <div class="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                     ${j.image ? `<img src="${j.image}" class="w-full h-full object-cover">` : renderJerseySVG(j.colors, 'small')}
                </div>
                <div>
                    <h3 class="font-bold text-royal text-lg leading-tight">${j.title}</h3>
                    <p class="text-royal font-bold mt-1">৳${j.price.toLocaleString()}</p>
                </div>
            </div>
            
            <!-- Jersey Details (Club, Type, Version) -->
            <div class="grid grid-cols-3 gap-3 mb-6 bg-gray-50 p-4 rounded-xl text-center">
                <div class="border-r border-gray-200">
                    <span class="text-gray-500 text-[10px] uppercase font-bold tracking-wider block mb-1">Team</span>
                    <span class="font-semibold text-gray-800 text-sm truncate">${j.club}</span>
                </div>
                <div class="border-r border-gray-200">
                    <span class="text-gray-500 text-[10px] uppercase font-bold tracking-wider block mb-1">Type</span>
                    <span class="font-semibold text-gray-800 text-sm">${type}</span>
                </div>
                <div>
                    <span class="text-gray-500 text-[10px] uppercase font-bold tracking-wider block mb-1">Version</span>
                    <span class="font-semibold text-gray-800 text-sm">${j.edition}</span>
                </div>
            </div>

            <!-- Size Selection -->
            <div class="mb-6">
                <p class="text-sm font-semibold mb-3">Select Size <span class="text-red-500">*</span></p>
                <div class="flex gap-2 justify-between" id="modalSizes">
                    ${['S','M','L','XL','XXL'].map(s => `
                        <button onclick="selectModalSize(this, '${s}')" class="modal-size-btn w-12 h-10 rounded-lg border border-gray-200 text-sm font-medium hover:border-royal transition">${s}</button>
                    `).join('')}
                </div>
                <p id="modalSizeError" class="text-red-500 text-xs mt-2 hidden">Please select a size first.</p>
            </div>
            
            <button onclick="confirmAddToCart()" class="btn-primary text-white w-full py-3.5 rounded-xl font-bold text-sm transition shadow-lg shadow-royal/20">
                Confirm & Add to Cart
            </button>
        </div>
    `;
    
    const container = document.getElementById('cartModalContainer');
    container.innerHTML = modalHtml;
    container.classList.remove('hidden');
    container.classList.add('flex');
    lucide.createIcons(); // আইকন লোড করার জন্য
}

function closeModal() {
    const container = document.getElementById('cartModalContainer');
    container.classList.add('hidden');
    container.classList.remove('flex');
}

function selectModalSize(el, size) {
    selectedModalSize = size;
    const buttons = document.querySelectorAll('.modal-size-btn');
    buttons.forEach(b => {
        b.classList.remove('active', 'border-royal', 'bg-royal', 'text-white');
        b.classList.add('border-gray-200', 'text-gray-800');
    });
    // সিলেক্ট করা বাটন হাইলাইট করা
    el.classList.add('active', 'border-royal', 'bg-royal', 'text-white');
    el.classList.remove('border-gray-200', 'text-gray-800');
    document.getElementById('modalSizeError').classList.add('hidden');
}

function confirmAddToCart() {
    if (!selectedModalSize) {
        document.getElementById('modalSizeError').classList.remove('hidden');
        return;
    }
    
    const j = jerseys.find(x => x.id === currentModalJerseyId);
    if (j) {
        addItem(j, selectedModalSize, 1);
        closeModal();
    }
}