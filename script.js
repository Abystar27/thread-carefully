// ── SPACES DATA ──
const spaces = [
  { num: 1, title: "PILE", artist: "Yíímiiká", year: "2026", medium: "Donated clothes, Dress for Success — University of Roehampton", images: ["images/pile1.jpg", "images/pile2.jpg", "images/pile3.jpg", { video: "videos/video_pile.mp4", poster: "images/pile_cover.png" }], desc: "Knowledge is the first step to mindful consumption. The pile of clothes is a journey through our wardrobes, our waste and the mindful choices that can help reshape the future of fashion and our world. What we wear tells the world a lot about us; who we are, how we are feeling and where we belong. It is personal, very deep and therefore expresses our identities.\n\nSomewhere along the line we disconnected and lost that connection to our clothes. We almost totally forgot about the earth that grew the materials and even the human hands that stitched it. The United Nations Environment Programme warns that the fashion and textile industry is fuelling a massive global pollution and waste crisis. This piece also questions the producer responsibility system, inspired by Greenpeace investigations. UN SDG 12 — Responsible Consumption and Production." },
  { num: 2, title: '"Y" Collection', artist: "Yíímiiká", year: "June 2023", medium: "Hand-dyed Funtua textile using recycled batik wax, repurposed dyes, and water-optimised processing", images: ["images/the _y3.png", "images/the_y.jpg", "images/the_y1.jpg", "images/the _y2.jpg", "images/the_y4.jpg", "images/the_y6.jpg"], desc: 'The endless Ys, the endless "whys". This piece was born out of a place of deep frustration, but also a lot of hope. Living through a really difficult, turbulent political time in Nigeria. Creating this fabric was a way to fight back against that feeling. I realised that the only way forward is to never stop asking questions. Curiosity isn\'t passive; it\'s the very backbone of how we learn, resist and grow.' },
  { num: 3, title: "Buttonhole Flowers", artist: "Bridget Steenkamp & UR Southlands Students", year: "February 2025 — Southlands Green Fete", medium: "Recycled buttons, denim, and glass · 30 × 20 cm on jar 16 × 10 cm", images: ["images/buttonhole_flowers.jpg"], desc: "Eco Histories' Slow Button Workshop gave many UR Southlands students an opportunity to think about what happens to plastic buttons after use. We considered the problem of plastic pollution and microplastics, and looked at other sustainable solutions. The water footprint of cotton denim was also discussed. Students attending the workshop learned a valuable upcycling skill: how to sew on their own buttons." },
  { num: 4, title: "NATURE", artist: "Yíímiiká", year: "May 2026 — Slow-Eco Textile Workshop", medium: "Onion skin from Southlands kitchen, Cassava Paste (manihot esculenta), Natural dyes, Stencil, Cotton fabric", images: ["images/nature.png", { video: "videos/nature.mp4", poster: "images/nature.png" }], desc: '"Nature" dives into the indigenous Nigerian resist-dye tradition Àdìrẹ Ẹlẹ̀kọ (starch-resist). Cassava is an edible plant grown and eaten in most parts of West Africa — in Nigeria as far back as the 16th century. The flowery patterns were designed using cassava paste as a special starch resist ingredient and were naturally dyed from food waste: onion skin from the Southlands kitchen.\n\nRevisiting historic techniques does more than preserve a rich cultural heritage — it shifts our modern perspective on sustainability. Engaging with these ancient crafts forces us to slow down enough to appreciate the true cost and value of what we consume.' },
  { num: 5, title: "Hand-Work (Ise Owo)", artist: "Yíímiiká", year: "2021 – 2025", medium: "Foam Stamps", images: ["images/ise_owo.png", "images/ise_owo1.jpg", "images/ise_owo3.jpg"], desc: "This installation brings together the old stamps that bridge between representing where I started and where I am going. People often see a finished garment, but they don't see the mess it takes to get there. These are part of the materials used day in and day out for batik (wax resist) textile production. Hand – Work also points to a transitioning phase and the search for better, more sustainable options — one thread at a time." },
  { num: 6, title: "Button It: Slow Porcelain Buttons", artist: "Bridget Steenkamp & UR and Southlands Students", year: "February & October 2025", medium: "Recycled cotton patchwork and porcelain buttons (+ one plastic button) · 135 × 132 cm", images: ["images/slow_porcelain_buttonholes1.jpg"], desc: "Students came to find out more about why mastering 'slow button' skills and talking about textile waste matters. They joined in the 31,000-year human historical tradition of working with clay by making porcelain buttons and developing button-sewing skills. Everything in this art piece will either compost or become fine sand, except the one gold-flecked plastic button. That single central button represents the average microplastic found in the average 50-year-old adult's brain. Circular fashion can drastically reduce the amount of microplastics contaminating our world." },
  { num: 7, title: "Natural Textiles Compost Down, Leaving Forever Polyester Fast Fashion", artist: "Bridget Moira Steenkamp & UR Students", year: "2026", medium: "Banana knitting thread, Hemp string, Sheep's wool, Silk, Flax for linen, Cotton, Nettles, Upcycled cotton sari, Polyester · 108 × 200 cm & 80 × 100 cm", images: ["images/natural-textiles.jpg", "images/natural-textiles1.jpg", "images/natural-textiles2.jpg", "images/natural-textiles3.jpg", "images/natural-textiles5.jpg", "images/natural-textiles4.jpg"], desc: "A compostable textile mobile and a forever polyester dinner jacket. Polyester fabric is a carbon petroleum-based product that first came to market in the 1930s. In just under 100 years it has become the most widely used fabric. It can take over 2,000 years to decompose, eventually turning into microplastics that pollute the air, land and waterways. Annual global production of polyester is about 78 million tonnes; comprising about 87% of the global annual textile waste of 92 million tonnes that is dumped or burned. Currently only 1–3% of textiles are recycled." },
  { num: 8, title: "Tread Lightly", artist: "Bridget Moira Steenkamp & UR & Southlands Students", year: "May 2026", medium: "Recycled cotton, cassava paste, onion skin, mud, turmeric, saffron, coffee grounds · 100 × 300 cm", images: ["images/thread_lightly.jpg"], desc: "This group art piece was inspired by the approximately 900,000-year-old footprints exposed after a storm in May 2013 on the beach at Happisburgh, Norfolk. The small group of hunter-gatherers only left their footprints in the mud, no litter or tools were found. Their carbon footprint was zero.\n\nContrast this to today, when the average UK resident has an estimated carbon footprint of 8–13 tonnes of CO₂ per year, and around 270 kg of CO₂ is generated per person annually from clothing alone. This artwork creates circular fashion by reusing cotton destined for landfill, food waste, and mud to tell a story full of colour and meaning." },
  // { num: 9, title: "Upcycling Our Water Footprints", artist: "Bridget Moira Steenkamp & UR & Southlands Students", year: "2024 & ongoing", medium: "Upcycled silk dress, recycled denim, upcycled buttons, UR and Himalayan drop-spun nettle thread · 100 × 50 cm", images: ["images/placeholder-space9.jpg"], desc: "This jacket contrasts the zero water footprint of nettle fibre with the huge water footprint of cotton. The UN estimates that a single pair of jeans can require up to 10,000 litres of water to produce. By recycling used denim and stitching it in the Sashiko style with handmade nettle threads, this piece contemplates the Japanese concepts of Wabi-sabi, finding beauty in imperfection and the passage of time; and Mottainai, the feeling of regret over something going to waste." },
  { num: 10, title: "Reclaim", artist: "Bridget Moira Steenkamp & SATCoL", year: "2026 & ongoing", medium: "Polyester · 100 × 50 cm", images: ["images/reclaim.jpg", "images/reclaim1.jpg", "images/reclaim2.jpg", "images/reclaim3.jpg", "images/reclaim4.jpg", "images/reclaim5.jpg"], desc: "Our greatest crisis is not a lack of resources, but a lack of responsible action. If we all tidy our own little spaces, then we are an active part of the solution." },
  { num: 11, title: "Yeni: A Dedication", artist: "Yíímiiká", year: "May 1960 – Dec 2024", medium: "Video documentation · personal archive", video: { src: "yeni.mp4", caption: "Aunt Yeni at work — filmed nine months before her passing." }, desc: "Nine months before she passed, I filmed my Aunt Yeni, completely immersed in her craft. She held a meticulous and beautiful relationship with the world — guided by a fierce devotion to symmetry, order, and cleanliness that shaped every corner of her space. In this quiet discipline, she practised a kind of sustainability we only fully appreciate in hindsight, hand-sewing her own clothes and household linens with remarkable care.\n\nHer final years were marked by deep physical and mental struggles, making her absence a complex kind of grief. Yet what remains are memories rich with warmth: the sweet aroma of her Saturday morning cooking, her generous and cheerful spirit, and the boundless energy she poured into the youth who loved her. She did everything with her whole heart.\n\nRest well, Auntie. You are free now — and the beauty of your careful, enduring threads lives on." },
  { num: 12, title: "Masks", artist: "Bridget Steenkamp & UR Students", year: "[2026 - Green Week]", medium: "Recycled cotton, thread, plastic paper, etc", images: ["images/masks.jpg", "images/masks1.jpg", "images/masks2.jpg", "images/masks3.jpg"], desc: "The Hidden Cost of the Masquerade: A Plastic Mask's 450-Year Journey. This piece emerged from Bridget Steenkamp's Slow Workshops during Roehampton University's Green Week, tracing a single plastic mask from creation to disposal.\n\nEach mask carries roughly 50g of CO₂ through energy-intensive manufacturing and global logistics before it's ever worn. At the other end of its life, that same mask takes an estimated 450 years to degrade — leaving behind risks of wildlife entanglement and toxic chemical leaching long after its brief moment of use." }
];

// ── BUILD SPACE CARDS ──
function buildSpaces(containerId) {
  const list = document.getElementById(containerId);
  if (!list) return;
  spaces.forEach(s => {
    const card = document.createElement('div');
    card.className = 'space-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Space ${s.num}: ${s.title}`);
    card.innerHTML = `
      <div class="space-num"><span class="num">${s.num}</span><span class="dot"></span></div>
      <div class="space-info">
        <div class="space-title">${s.title}</div>
        <div class="space-artist">${s.artist}</div>
        <div class="space-medium">${s.medium.split('·')[0].trim()}</div>
      </div>`;
    card.addEventListener('click', () => openSheet(s));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openSheet(s); });
    list.appendChild(card);
  });
}

// ── SHEET MODAL ──
function openSheet(s) {
  document.getElementById('sheet-num').textContent = `Space ${s.num}`;
  document.getElementById('sheet-title').textContent = s.title;
  document.getElementById('sheet-artist').textContent = s.artist;
  document.getElementById('sheet-meta').innerHTML =
    `<div class="sheet-meta-row"><strong>Year:</strong> ${s.year}</div>
     <div class="sheet-meta-row"><strong>Medium:</strong> ${s.medium}</div>`;
  document.getElementById('sheet-desc').innerHTML =
    s.desc.split('\n\n').map(p => `<p style="margin-top:0.9rem">${p}</p>`).join('');
  buildGallery(s.images);
  const videoEl = document.getElementById('sheet-video');
  if (s.video && s.video.src) {
    videoEl.classList.add('visible');
    videoEl.innerHTML = `<video controls playsinline preload="metadata"><source src="${s.video.src}" type="video/mp4"></video><div class="video-caption">${s.video.caption || ''}</div>`;
  } else {
    videoEl.classList.remove('visible');
    videoEl.innerHTML = '';
  }
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSheet() {
  const overlay = document.getElementById('overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  const v = document.querySelector('#sheet-video video');
  if (v) v.pause();
}

// ── SHEET PHOTO/VIDEO GALLERY ──
// Each entry in a space's `images` array is either:
//   a string  -> treated as a photo,           e.g. "images/pile-2.jpg"
//   an object -> treated as a video thumbnail, e.g. { video: "pile.mp4", poster: "images/pile-2-poster.jpg" }
let lightboxItems = [];
let lightboxIndex = 0;

function buildGallery(items) {
  const galleryEl = document.getElementById('sheet-gallery');
  if (!galleryEl) return;
  if (!items || items.length === 0) {
    galleryEl.classList.remove('visible');
    galleryEl.innerHTML = '';
    return;
  }
  galleryEl.classList.add('visible');
  galleryEl.innerHTML = items.map((item, i) => {
    if (typeof item === 'object' && item.video) {
      return `<div class="gallery-video-thumb" data-index="${i}" tabindex="0" role="button" aria-label="Play video">
                <video muted playsinline preload="metadata" poster="${item.poster || ''}">
                  <source src="${item.video}" type="video/mp4">
                </video>
                <span class="play-badge">▶</span>
              </div>`;
    }
    return `<img src="${item}" alt="Exhibition photo ${i + 1}" loading="lazy" data-index="${i}" tabindex="0">`;
  }).join('');
  galleryEl.querySelectorAll('[data-index]').forEach(el => {
    el.addEventListener('click', () => openLightbox(items, parseInt(el.dataset.index, 10)));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(items, parseInt(el.dataset.index, 10));
    });
  });
}

// ── LIGHTBOX ──
function openLightbox(items, index) {
  lightboxItems = items;
  lightboxIndex = index;
  renderLightboxItem();
  document.getElementById('lightbox-overlay').classList.add('open');
}

function renderLightboxItem() {
  const stage = document.getElementById('lightbox-stage');
  const item = lightboxItems[lightboxIndex];
  if (typeof item === 'object' && item.video) {
    stage.innerHTML = `<video controls autoplay playsinline src="${item.video}" poster="${item.poster || ''}"></video>`;
  } else {
    stage.innerHTML = `<img src="${item}" alt="">`;
  }
}

function closeLightbox() {
  document.getElementById('lightbox-overlay').classList.remove('open');
  const v = document.querySelector('#lightbox-stage video');
  if (v) v.pause();
}

function shiftLightbox(dir) {
  const v = document.querySelector('#lightbox-stage video');
  if (v) v.pause();
  lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
  renderLightboxItem();
}

// ── TOGGLE UTILITY ──
function toggle(id, btnId, openText, closeText) {
  const el = document.getElementById(id);
  const btn = document.getElementById(btnId);
  if (!el) return;
  el.classList.toggle('open');
  if (btn) btn.textContent = el.classList.contains('open') ? closeText : openText;
}

function toggleBio() {
  toggle('bio-full', 'bio-toggle-text', '··· Read more', '··· Read less');
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildSpaces('spaces-list');

  const closeBtn = document.getElementById('close-btn');
  const overlay = document.getElementById('overlay');
  if (closeBtn) closeBtn.addEventListener('click', closeSheet);
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeSheet(); });

  const bioToggle = document.getElementById('bio-toggle');
  if (bioToggle) bioToggle.addEventListener('click', toggleBio);

  const lightbox = document.getElementById('lightbox-overlay');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => shiftLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => shiftLightbox(1));
  if (lightbox) lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const lb = document.getElementById('lightbox-overlay');
    if (lb && lb.classList.contains('open')) { closeLightbox(); return; }
    closeSheet();
  });
});