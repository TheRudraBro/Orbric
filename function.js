
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



  // Retro
  {id:101, club:'FC Barcelona', title:'Barcelona 2010-11 Iconic Kit', edition:'Retro', league:'La Liga', retro:true, colors:['#a50044','#004d98'], price:1350},
  {id:102, club:'Real Madrid', title:'Real Madrid 2016-17 Classic', edition:'Retro', league:'La Liga', retro:true, colors:['#ffffff','#6c63ff'], price:1350},
  {id:103, club:'AC Milan', title:'AC Milan 2006-07 Champions', edition:'Retro', league:'Serie A', retro:true, colors:['#fb090b','#000000'], price:1350},
  {id:104, club:'Brazil', title:'Brazil 2002 World Cup Winner', edition:'Retro', league:'International', retro:true, colors:['#ffdf00','#009739'], price:1350},
  {id:105, club:'Manchester United', title:'Manchester United 2008 UCL Final', edition:'Retro', league:'Premier League', retro:true, colors:['#da291c','#000000'], price:1350},
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
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  postal: '',
  country: '',
  paymentMethod: 'card'
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
    <section class="hero-gradient py-16 md:py-24 px-4">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1 text-center md:text-left fade-in">
          <p class="text-sm font-semibold text-gold uppercase tracking-widest mb-2">Season 25/26</p>
          <h1 id="heroTagline" class="text-4xl md:text-6xl font-display font-700 text-royal leading-tight mb-4">${window.elementSdk.config.hero_tagline || defaultConfig.hero_tagline}</h1>
          <p id="heroSubtitle" class="text-gray-600 text-lg mb-8">${window.elementSdk.config.hero_subtitle || defaultConfig.hero_subtitle}</p>
          <div class="flex gap-3 justify-center md:justify-start">
            <button onclick="navigate('player')" class="btn-primary text-white px-7 py-3 rounded-full font-semibold text-sm">Shop Now</button>
            <button onclick="navigate('fan')" class="border-2 border-royal text-royal px-7 py-3 rounded-full font-semibold text-sm hover:bg-royal hover:text-white transition">Explore Collection</button>
          </div>
        </div>
        <div class="flex-1 flex justify-center fade-in">
          <div class="relative w-72 h-80 md:w-96 md:h-[420px]">
            ${renderJerseySVG(['#a50044','#004d98'], 'large')}
            <div class="absolute -bottom-4 -right-4 w-32 h-40 opacity-60">${renderJerseySVG(['#ffffff','#d4af37'], 'small')}</div>
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
        ${jerseys.filter(j => j.retro).slice(0, 3).map(j => `
          <div class="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer relative group" onclick="navigate('product',${j.id})">
            <div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">EXCLUSIVE</div>
            <div class="h-56 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
          <img
src="${j.image}"
alt="${j.title}"
class="w-full h-full object-contain p-4"
/>
            </div>
            <div class="p-5">
              <span class="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full font-semibold">Retro Classic</span>
              <h3 class="font-semibold mt-2 text-gray-800">${j.title}</h3>
              <p class="text-royal font-bold mt-2">৳${j.price.toLocaleString()}</p>
            </div>
          </div>
        `).join('')}
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
            <div class="flex-shrink-0 w-64 lg:w-auto card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div class="relative">
          <div class="h-64 w-full flex items-center justify-center bg-gray-50 cursor-pointer overflow-hidden" onclick="navigate('product',${j.id})">
  ${j.image ? `<img src="${j.image}" alt="${j.title}" class="w-full h-full object-cover product-image">` : renderJerseySVG(j.colors,'medium')}
</div>
                <div class="absolute top-3 right-3 bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-bold">-${discount}%</div>
              </div>
              <div class="p-4">
                <span class="text-[10px] uppercase tracking-wider text-gold font-bold">${j.edition}</span>
                <h3 class="font-semibold text-sm mt-1 text-gray-800 leading-tight cursor-pointer hover:text-royal transition" onclick="navigate('product',${j.id})">${j.title}</h3>
                <div class="flex items-center gap-2 mt-2">
                  <p class="text-royal font-bold">৳${discountedPrice.toLocaleString()}</p>
                  <p class="text-gray-400 text-xs line-through">৳${j.price.toLocaleString()}</p>
                </div>
                <div class="flex gap-1 mt-3" id="discount-sizes-${j.id}">
                  ${['S','M','L','XL','XXL'].map(s=>`<button onclick="event.stopPropagation();selectDiscountSize(${j.id},'${s}',this)" class="size-btn text-[10px] w-8 h-6 rounded border border-gray-200 hover:border-royal">${s}</button>`).join('')}
                </div>
                <p id="discount-err-${j.id}" class="text-red-500 text-[10px] mt-1 hidden">Select size first.</p>
                <button onclick="event.stopPropagation();addDiscountToCart(${j.id})" class="btn-primary text-white text-xs px-3 py-2 rounded-lg w-full font-medium mt-3">Add To Cart</button>
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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        ${items.map(j => `
          <div class="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer" onclick="navigate('product',${j.id})">
        <div class="h-64 w-full flex items-center justify-center bg-gray-50 overflow-hidden cursor-pointer">
  ${j.image ? `<img src="${j.image}" alt="${j.title}" class="w-full h-full object-cover product-image">` : renderJerseySVG(j.colors,'medium')}
</div>
            <div class="p-5">
              <span class="text-xs bg-gold/10 text-gold px-2 py-0.5 rounded-full font-semibold">Retro Classic</span>
              <h3 class="font-semibold mt-2 text-gray-800">${j.title}</h3>
              <p class="text-royal font-bold mt-2">৳${j.price.toLocaleString()}</p>
            </div>
          </div>
        `).join('')}
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
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('mainContent').innerHTML = `
    <section class="max-w-5xl mx-auto px-4 py-10 fade-in">
      <h2 class="text-3xl font-bold text-royal mb-6">Shopping Cart</h2>
      ${cart.length === 0 ? '<div class="text-center py-16 text-gray-400"><i data-lucide="shopping-bag" style="width:48px;height:48px;margin:0 auto 12px"></i><p>Your cart is empty</p><button onclick="navigate(\'home\')" class="mt-4 btn-primary text-white px-6 py-2 rounded-full text-sm">Continue Shopping</button></div>' : `
        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 space-y-4">
            ${cart.map((item,i) => `
              <div class="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-gray-100">
                <div class="w-16 h-16 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">${renderJerseySVG(item.colors,'tiny')}</div>
                <div class="flex-1 min-w-0">
                  <p class="font-semibold text-sm truncate">${item.title}</p>
                  <p class="text-xs text-gray-500">Size: ${item.size} • ${item.edition}</p>
                </div>
                <div class="flex items-center gap-2">
                  <button onclick="updateCartQty(${i},-1)" class="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-100">−</button>
                  <span class="text-sm font-medium w-6 text-center">${item.qty}</span>
                  <button onclick="updateCartQty(${i},1)" class="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-sm hover:bg-gray-100">+</button>
                </div>
                <p class="font-bold text-royal text-sm w-20 text-right">৳${(item.price*item.qty).toLocaleString()}</p>
                <button onclick="removeFromCart(${i})" class="text-gray-400 hover:text-red-500 transition"><i data-lucide="trash-2" style="width:16px;height:16px"></i></button>
              </div>
            `).join('')}
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-fit sticky top-24">
            <h3 class="font-bold text-royal mb-4">Order Summary</h3>
            <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Subtotal</span><span class="font-medium">৳${total.toLocaleString()}</span></div>
            <div class="flex justify-between text-sm mb-2"><span class="text-gray-500">Shipping</span><span class="text-green-600 font-medium">Free</span></div>
            <div class="border-t border-gray-100 my-3"></div>
            <div class="flex justify-between text-lg font-bold mb-6"><span>Total</span><span class="text-royal">৳${total.toLocaleString()}</span></div>
            <button onclick="navigate('checkout')" class="btn-primary text-white w-full py-3 rounded-full font-semibold">Proceed to Checkout</button>
          </div>
        </div>
      `}
    </section>`;
}

// Helpers
function renderCard(j) {
  // Use object-cover to make the image fill the top completely
  const imageDisplay = j.image 
    ? `<img src="${j.image}" alt="${j.title}" class="w-full h-full object-cover product-image">`
    : renderJerseySVG(j.colors, 'medium');

  return `<div class="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
    <!-- Removed padding (p-4), increased height to h-64, added w-full -->
    <div class="h-64 w-full flex items-center justify-center bg-gray-50 cursor-pointer overflow-hidden relative" onclick="navigate('product',${j.id})">
      ${imageDisplay}
    </div>
    <div class="p-5">
      <span class="text-[10px] uppercase tracking-wider text-gold font-bold">${j.edition} Edition</span>
      <h3 class="font-semibold text-sm mt-1 text-gray-800 leading-tight cursor-pointer hover:text-royal transition" onclick="navigate('product',${j.id})">${j.title}</h3>
      <p class="text-royal font-bold mt-2">৳${j.price.toLocaleString()}</p>
      <div class="flex gap-1 mt-3" id="card-sizes-${j.id}">
        ${['S','M','L','XL','XXL'].map(s=>`<button onclick="event.stopPropagation();selectCardSize(${j.id},'${s}',this)" class="size-btn text-[10px] w-8 h-6 rounded border border-gray-200 hover:border-royal">${s}</button>`).join('')}
      </div>
      <p id="card-err-${j.id}" class="text-red-500 text-[10px] mt-1 hidden">Please select your jersey size first.</p>
      <div class="flex gap-2 mt-4">
        <button onclick="event.stopPropagation();addToCartFromCard(${j.id})" class="btn-primary text-white text-xs px-3 py-2 rounded-lg flex-1 font-medium">Add To Cart</button>
        <button onclick="event.stopPropagation();buyNowCard(${j.id})" class="bg-gold text-white text-xs px-3 py-2 rounded-lg font-medium">Buy Now</button>
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
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('mainContent').innerHTML = `
    <section class="max-w-5xl mx-auto px-4 py-10 fade-in">
      <button onclick="navigate('cart')" class="text-sm text-gray-500 hover:text-royal mb-6 inline-flex items-center gap-1"><i data-lucide="arrow-left" style="width:14px;height:14px"></i> Back to Cart</button>
      <h2 class="text-3xl font-bold text-royal mb-8">Checkout</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-2 space-y-6">
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="font-bold text-royal mb-4 flex items-center gap-2"><i data-lucide="truck" style="width:18px;height:18px"></i> Shipping Address</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <input type="text" id="firstName" placeholder="First Name *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('firstName', this.value)">
              <input type="text" id="lastName" placeholder="Last Name *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('lastName', this.value)">
              <input type="email" id="email" placeholder="Email Address *" class="md:col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('email', this.value)">
              <input type="tel" id="phone" placeholder="Phone Number *" class="md:col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('phone', this.value)">
              <input type="text" id="address" placeholder="Street Address *" class="md:col-span-2 px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('address', this.value)">
              <input type="text" id="city" placeholder="City *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('city', this.value)">
              <input type="text" id="state" placeholder="State/Region *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('state', this.value)">
              <input type="text" id="postal" placeholder="Postal Code *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('postal', this.value)">
              <input type="text" id="country" placeholder="Country *" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="updateCheckoutData('country', this.value)">
            </div>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 class="font-bold text-royal mb-4 flex items-center gap-2"><i data-lucide="credit-card" style="width:18px;height:18px"></i> Payment Method</h3>
            <div class="space-y-3">
              <label class="flex items-center p-4 rounded-lg border-2 cursor-pointer transition" id="cardOption" onclick="selectPayment('card')">
                <input type="radio" name="payment" value="card" class="w-4 h-4" checked>
                <span class="ml-3 font-medium text-sm">Credit/Debit Card</span>
              </label>
              <label class="flex items-center p-4 rounded-lg border-2 cursor-pointer transition" id="bankOption" onclick="selectPayment('bank')">
                <input type="radio" name="payment" value="bank" class="w-4 h-4">
                <span class="ml-3 font-medium text-sm">Bank Transfer</span>
              </label>
              <label class="flex items-center p-4 rounded-lg border-2 cursor-pointer transition" id="mobileOption" onclick="selectPayment('mobile')">
                <input type="radio" name="payment" value="mobile" class="w-4 h-4">
                <span class="ml-3 font-medium text-sm">Mobile Wallet (bKash, Nagad)</span>
              </label>
            </div>
            
            <div id="cardDetails" class="mt-6 space-y-4">
              <input type="text" placeholder="Cardholder Name *" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition">
              <input type="text" placeholder="Card Number (1234-5678-9012-3456) *" maxlength="19" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="formatCardNumber(this)">
              <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY *" maxlength="5" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition" oninput="formatExpiry(this)">
                <input type="text" placeholder="CVV *" maxlength="4" class="px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition">
              </div>
            </div>
            
            <div id="bankDetails" class="mt-6 hidden">
              <div class="bg-gold/5 rounded-lg p-4 text-sm text-gray-600">
                <p class="font-semibold mb-2">Bank Transfer Instructions:</p>
                <p>Bank: Dhaka Bank Limited</p>
                <p>Account: ORBRIC-25486</p>
                <p>SWIFT Code: DBBLBDDH</p>
                <p class="mt-2 text-gold font-medium">Please use your order ID as reference.</p>
              </div>
            </div>
            
            <div id="mobileDetails" class="mt-6 hidden">
              <input type="text" placeholder="Mobile Number (e.g., +880 1XX XXX XXXX) *" class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-royal focus:ring-2 focus:ring-royal/10 outline-none text-sm transition">
              <p class="text-xs text-gray-500 mt-2">Supported: bKash, Nagad, Rocket</p>
            </div>
          </div>
        </div>
        
        <div class="md:col-span-1">
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h3 class="font-bold text-royal mb-4">Order Summary</h3>
            <div class="space-y-3 pb-4 border-b border-gray-100 max-h-64 overflow-y-auto">
              ${cart.map(item => `
                <div class="flex justify-between text-xs">
                  <span class="text-gray-600">${item.club}<br><span class="text-[10px]">Size ${item.size} × ${item.qty}</span></span>
                  <span class="font-semibold">৳${(item.price * item.qty).toLocaleString()}</span>
                </div>
              `).join('')}
            </div>
            <div class="space-y-2 mt-4 mb-4">
              <div class="flex justify-between text-sm"><span class="text-gray-500">Subtotal</span><span class="font-medium">৳${total.toLocaleString()}</span></div>
              <div class="flex justify-between text-sm"><span class="text-gray-500">Shipping</span><span class="text-green-600 font-medium">Free</span></div>
              <div class="flex justify-between text-sm"><span class="text-gray-500">Tax</span><span class="font-medium">৳${Math.round(total * 0.05).toLocaleString()}</span></div>
            </div>
            <div class="border-t border-gray-100 my-4"></div>
            <div class="flex justify-between text-lg font-bold mb-6">
              <span>Total</span>
              <span class="text-royal">৳${(total + Math.round(total * 0.05)).toLocaleString()}</span>
            </div>
            <p id="checkoutError" class="text-red-500 text-xs mb-3 hidden text-center"></p>
            <button onclick="validateAndPlaceOrder()" class="btn-primary text-white w-full py-3 rounded-full font-semibold">Place Order</button>
            <button onclick="navigate('cart')" class="border-2 border-gray-200 text-gray-700 w-full py-2 rounded-full font-medium mt-3 hover:border-royal hover:text-royal transition">Continue Shopping</button>
          </div>
        </div>
      </div>
    </section>`;
  setupPaymentOptions();
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
  const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'postal', 'country'];
  const missing = required.filter(f => !checkoutData[f] || !checkoutData[f].trim());
  
  if(missing.length > 0) {
    document.getElementById('checkoutError').textContent = `Please fill in all required fields (${missing.join(', ')})`;
    document.getElementById('checkoutError').classList.remove('hidden');
    return;
  }
  
  if(!validateEmail(checkoutData.email)) {
    document.getElementById('checkoutError').textContent = 'Please enter a valid email address';
    document.getElementById('checkoutError').classList.remove('hidden');
    return;
  }
  
  checkout();
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
