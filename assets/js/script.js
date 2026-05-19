// The Creative Rack V1
// Static GitHub Pages discovery platform. No backend is required for V1.

// ================================
// ADMIN EDIT AREA: CATEGORIES
// Update public category descriptions here
// ================================
const categories = [
  { id: "Fashion Designer", label: "Fashion Designers", anchor: "fashion-designers", initials: "FD", countLabel: "4 featured", useCase: "Collections, garments, lookbooks", description: "Explore emerging and established designers creating garments, collections, concepts, and visual fashion stories." },
  { id: "Stylist", label: "Stylists", anchor: "stylists", initials: "ST", countLabel: "3 featured", useCase: "Editorial, personal image, campaigns", description: "Find stylists shaping fashion language through editorial direction, personal image work, lookbooks, and cultural campaigns." },
  { id: "Visual Artist", label: "Visual Artists", anchor: "visual-artists", initials: "VA", countLabel: "4 featured", useCase: "Photography, illustration, content", description: "Meet image-makers, illustrators, photographers, and creative artists building the visual layer around culture." }
];

// ================================
// ADMIN EDIT AREA: CREATIVES
// Add or update creative profiles here
// Use relative image paths so GitHub Pages can load assets correctly.
// ================================
const creatives = [
  { id:"amani-studio", name:"Amani Studio", category:"Fashion Designer", location:"Johannesburg", specialty:"Streetwear and textile-led collections", shortBio:"Bold urban pieces inspired by township culture, youth identity, and modern African silhouettes.", bio:"Amani Studio builds streetwear collections with strong shape, tactile fabric detail, and a clear visual language rooted in Johannesburg movement. The work is made for editorials, cultural events, and collaboration-led storytelling.", image:"assets/images/designer-studio-profile.png", tags:["Streetwear","Textiles","Lookbooks"], portfolio:["Utility outerwear study","Graphic cotton set concept","Township youth culture moodboard"], collaboration:"Editorial campaigns, music visuals, cultural events, and brand lookbooks.", social:"https://instagram.com/", featured:true },
  { id:"luna-atelier", name:"Luna Atelier", category:"Fashion Designer", location:"Cape Town", specialty:"Minimalist tailoring", shortBio:"Clean premium essentials using neutral palettes, soft tailoring, and slow-fashion principles.", bio:"Luna Atelier focuses on quiet silhouettes, seasonless wardrobe pieces, and editorial-ready styling. The studio is known for restraint, fit, and refined production notes.", image:"assets/images/minimalist-african-fashion.png", tags:["Minimalism","Tailoring","Slow fashion"], portfolio:["Neutral tailoring capsule","Wide-leg trouser study","Soft suiting editorial"], collaboration:"Retail editorials, capsule presentations, and slow-fashion features.", social:"https://instagram.com/", featured:false },
  { id:"nala-threads", name:"Nala Threads", category:"Fashion Designer", location:"Durban", specialty:"Resortwear and print", shortBio:"Bright coastal designs with relaxed fits, breathable fabrics, and statement print work.", bio:"Nala Threads creates resortwear shaped by Durban coastlines, colour, movement, and print culture. The work is expressive, warm, and ready for visual campaigns.", image:"assets/images/resortwear-wrap-dress.png", tags:["Resortwear","Print","Coastal"], portfolio:["Wrap dress story","Coastal print shirt","Summer movement lookbook"], collaboration:"Destination shoots, summer showcases, and hospitality-facing creative partnerships.", social:"https://instagram.com/", featured:true },
  { id:"house-of-kairo", name:"House of Kairo", category:"Fashion Designer", location:"Pretoria", specialty:"Occasionwear and structure", shortBio:"Elegant occasionwear, structured tailoring, bead-inspired detail, and refined garment storytelling.", bio:"House of Kairo works with strong structure, event dressing, and detail-rich occasionwear. The studio brings a premium lens to heritage-inspired fashion language.", image:"assets/images/luxury-evening-blazer.png", tags:["Occasionwear","Tailoring","Bead detail"], portfolio:["Structured evening blazer","Formalwear silhouette board","Heritage detail study"], collaboration:"Gala looks, performance styling, runway showcases, and premium editorials.", social:"https://instagram.com/", featured:false },
  { id:"thando-maseko", name:"Thando Maseko", category:"Stylist", location:"Johannesburg", specialty:"Editorial styling", shortBio:"Creates bold campaign looks combining streetwear, texture, jewellery, and modern African visual language.", bio:"Thando Maseko styles editorials and campaign stories with layered clothing, confident accessories, and strong cultural references. Their work helps brands sharpen the mood of a visual moment.", image:"assets/images/stylist-creative-profile.png", tags:["Editorial","Campaigns","Street culture"], portfolio:["Music cover styling","Streetwear campaign direction","Layered jewellery editorial"], collaboration:"Designer lookbooks, music videos, campaign styling, and magazine editorials.", social:"https://instagram.com/", featured:true },
  { id:"amahle-dlamini", name:"Amahle Dlamini", category:"Stylist", location:"Durban", specialty:"Event styling", shortBio:"Specialises in launches, resort looks, occasionwear, and colour-coordinated visual moments.", bio:"Amahle Dlamini brings warmth, colour, and occasion-focused polish to styling projects. Her work supports launches, public appearances, and memorable event imagery.", image:"assets/images/coastal-print-shirt.png", tags:["Events","Colour","Occasionwear"], portfolio:["Launch look guide","Resort styling board","Colour story edits"], collaboration:"Launch events, personal image sessions, and creative campaign support.", social:"https://instagram.com/", featured:false },
  { id:"lerato-nkosi", name:"Lerato Nkosi", category:"Stylist", location:"Pretoria", specialty:"Lookbook direction", shortBio:"Pairs designers with models, locations, and styling concepts for collection launches and social campaigns.", bio:"Lerato Nkosi works across styling and creative coordination, translating a designer's collection into a complete visual narrative for public presentation.", image:"assets/images/streetwear-geometric-set.png", tags:["Lookbooks","Direction","Campaigns"], portfolio:["Designer launch lookbook","Location styling plan","Social campaign outfits"], collaboration:"Designer collections, fashion weeks, model tests, and studio lookbooks.", social:"https://instagram.com/", featured:true },
  { id:"neo-dube", name:"Neo Dube", category:"Visual Artist", location:"Johannesburg", specialty:"Fashion photography", shortBio:"Shoots campaign imagery and editorial portraits that give emerging brands a stronger visual identity.", bio:"Neo Dube photographs fashion and creative portraits with a focus on presence, texture, and editorial clarity. Their work helps creatives look launch-ready.", image:"assets/images/visual-artist-profile.png", tags:["Photography","Portraits","Campaigns"], portfolio:["Editorial portrait series","Designer campaign shoot","Studio light experiments"], collaboration:"Brand campaigns, artist portraits, fashion lookbooks, and exhibition documentation.", social:"https://instagram.com/", featured:true },
  { id:"zola-khumalo", name:"Zola Khumalo", category:"Visual Artist", location:"Cape Town", specialty:"Illustration and poster art", shortBio:"Creates fashion illustrations, poster art, and social assets inspired by colour, movement, and silhouette.", bio:"Zola Khumalo creates illustrated visual systems for creative launches, posters, social campaigns, and fashion-led storytelling. The work is expressive and culturally alive.", image:"assets/images/utility-jacket.png", tags:["Illustration","Posters","Visual identity"], portfolio:["Fashion poster suite","Illustrated garment studies","Campaign social assets"], collaboration:"Exhibitions, launch posters, cultural campaigns, and digital artwork commissions.", social:"https://instagram.com/", featured:false },
  { id:"kamogelo-pheto", name:"Kamogelo Pheto", category:"Visual Artist", location:"Pretoria", specialty:"Creative direction", shortBio:"Builds moodboards, art direction, and launch concepts for lookbooks, campaign drops, and content series.", bio:"Kamogelo Pheto develops visual worlds for brands and artists, from reference boards to set language and launch storytelling. Their work helps projects feel intentional before the shoot begins.", image:"assets/images/hero-modern-african-editorial.png", tags:["Creative direction","Moodboards","Set language"], portfolio:["Campaign world bible","Set direction board","Editorial concept treatment"], collaboration:"Fashion campaigns, exhibitions, music visuals, and brand storytelling.", social:"https://instagram.com/", featured:true },
  { id:"anele-moyo", name:"Anele Moyo", category:"Visual Artist", location:"Durban", specialty:"Content creation", shortBio:"Produces short-form visual content, behind-the-scenes storytelling, and campaign reels for fashion brands.", bio:"Anele Moyo captures movement, process, and creative atmosphere for social-first storytelling. Their work helps audiences access the story behind the finished image.", image:"assets/images/visual-artist-profile.png", tags:["Content","Reels","Behind the scenes"], portfolio:["Studio process series","Launch reel package","Creative interview clips"], collaboration:"Event coverage, campaign content, studio stories, and social launches.", social:"https://instagram.com/", featured:false }
];

// ================================
// ADMIN EDIT AREA: EVENTS
// Add or update upcoming events here
// Set status to "Upcoming", "Closed", or "Coming Soon".
// If all active events are removed, the site shows a no upcoming events state.
// ================================
const events = [
  { id:"portfolio-review-day", title:"Creative Portfolio Review Day", date:"2026-06-15", time:"10:00", location:"Johannesburg", type:"Portfolio Review", description:"A practical review room for designers, stylists, and visual artists refining public-facing profiles.", host:"The Creative Rack", link:"#join", status:"Upcoming" },
  { id:"emerging-designers-showcase", title:"Emerging Designers Showcase", date:"2026-07-06", time:"18:00", location:"Cape Town", type:"Showcase", description:"A visual presentation of new fashion work, collection concepts, and designer stories.", host:"The Creative Rack x Local Studios", link:"#join", status:"Coming Soon" },
  { id:"styling-masterclass", title:"Styling Masterclass", date:"2026-07-20", time:"14:00", location:"Durban", type:"Masterclass", description:"A focused session on editorial styling, wardrobe building, and campaign-ready visual language.", host:"Guest Stylist Network", link:"#join", status:"Upcoming" },
  { id:"visual-storytelling-exhibition", title:"Visual Storytelling Exhibition", date:"2026-08-10", time:"17:30", location:"Pretoria", type:"Exhibition", description:"Photography, illustration, set design, and creative direction work from the visual artist community.", host:"The Creative Rack", link:"#join", status:"Upcoming" },
  { id:"creative-networking-night", title:"Creative Networking Night", date:"2026-08-28", time:"18:30", location:"Johannesburg", type:"Networking", description:"A warm room for creatives, brands, collaborators, and culture builders to meet around future work.", host:"The Creative Rack Community", link:"#join", status:"Coming Soon" }
];

// ================================
// ADMIN EDIT AREA: THE WALK WAY
// Add runway concepts or live preview pieces here.
// Demand is a public interest signal only; it is not a transaction feature.
// ================================
const runwayLooks = [
  { id:"sahel-sun-coat", title:"Sahel Sun Coat", designer:"Amani Studio", region:"Sahel", inspiration:"desert light, woven texture, and nomadic layering", image:"assets/images/utility-jacket.png", status:"Live preview", demand:72 },
  { id:"swahili-coast-wrap", title:"Swahili Coast Wrap", designer:"Nala Threads", region:"East African Coast", inspiration:"coastal movement, warm colour, and relaxed resort silhouettes", image:"assets/images/resortwear-wrap-dress.png", status:"Concept runway", demand:64 },
  { id:"ndebele-line-blazer", title:"Ndebele Line Blazer", designer:"House of Kairo", region:"Southern Africa", inspiration:"geometric linework, ceremony, and structured tailoring", image:"assets/images/luxury-evening-blazer.png", status:"Studio sample", demand:81 },
  { id:"yoruba-indigo-set", title:"Yoruba Indigo Set", designer:"Luna Atelier", region:"West Africa", inspiration:"indigo depth, clean forms, and quiet ceremonial detail", image:"assets/images/minimalist-african-fashion.png", status:"Live preview", demand:58 },
  { id:"kente-street-set", title:"Kente Street Set", designer:"Amani Studio", region:"Ghana", inspiration:"rhythm, colour blocking, and streetwear proportion", image:"assets/images/streetwear-geometric-set.png", status:"Concept runway", demand:76 }
];

let activeCategory = "All";
let activeEventType = "All";
let savedCreatives = JSON.parse(localStorage.getItem("creativeRackSavedProfiles") || "[]");
let runwayInterest = JSON.parse(localStorage.getItem("creativeRackRunwayInterest") || "[]");
let currentProfileId = null;

const $ = (selector) => document.querySelector(selector);
const unique = (items) => ["All", ...Array.from(new Set(items)).sort()];
const normalise = (value) => String(value || "").toLowerCase();

function isSaved(id){ return savedCreatives.includes(id); }
function toggleSaved(id){
  savedCreatives = isSaved(id) ? savedCreatives.filter(item => item !== id) : [...savedCreatives, id];
  localStorage.setItem("creativeRackSavedProfiles", JSON.stringify(savedCreatives));
  renderCreatives();
  renderFeatured();
}

function renderCategories(){
  $("#categoryCards").innerHTML = categories.map(category => `
    <article class="category-card">
      <span class="category-icon">${category.initials}</span>
      <span class="count-pill">${category.countLabel}</span>
      <h3>${category.label}</h3>
      <p>${category.description}</p>
      <p><strong>Example:</strong> ${category.useCase}</p>
      <a class="btn secondary filter-jump" href="#explore" data-category-jump="${category.id}">View ${category.label.replace("Fashion ", "")}</a>
    </article>
  `).join("");
}

function renderFilterOptions(){
  $("#categoryFilters").innerHTML = ["All", ...categories.map(c => c.id)].map(category => `<button class="chip ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">${category === "All" ? "All Creatives" : category}</button>`).join("");
  $("#locationFilter").innerHTML = unique(creatives.map(c => c.location)).map(item => `<option value="${item}">${item === "All" ? "All locations" : item}</option>`).join("");
  $("#specialtyFilter").innerHTML = unique(creatives.flatMap(c => [c.specialty, ...c.tags])).map(item => `<option value="${item}">${item === "All" ? "All styles / specialties" : item}</option>`).join("");
}

function getFilteredCreatives(){
  const query = normalise($("#creativeSearch").value);
  const location = $("#locationFilter").value;
  const specialty = $("#specialtyFilter").value;
  return creatives.filter(creative => {
    const haystack = normalise([creative.name, creative.category, creative.location, creative.specialty, creative.shortBio, creative.bio, creative.tags.join(" "), creative.portfolio.join(" ")].join(" "));
    return (!query || haystack.includes(query)) &&
      (activeCategory === "All" || creative.category === activeCategory) &&
      (location === "All" || creative.location === location) &&
      (specialty === "All" || creative.specialty === specialty || creative.tags.includes(specialty));
  });
}

function renderCreatives(){
  const filtered = getFilteredCreatives();
  $("#resultsCount").textContent = `${filtered.length} creative${filtered.length === 1 ? "" : "s"}`;
  $("#creativeEmpty").hidden = filtered.length > 0;
  $("#creativeGrid").innerHTML = filtered.map(creative => `
    <article class="creative-card">
      <div class="creative-image">
        <img src="${creative.image}" alt="${creative.name} portfolio preview" loading="lazy" />
        <button class="save-btn ${isSaved(creative.id) ? "active" : ""}" type="button" data-save="${creative.id}">${isSaved(creative.id) ? "Saved" : "Save"}</button>
      </div>
      <div class="creative-body">
        <span class="creative-type">${creative.category}</span>
        <h3>${creative.name}</h3>
        <p><strong>${creative.location}</strong> - ${creative.specialty}</p>
        <p>${creative.shortBio}</p>
        <div class="tag-row">${creative.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="card-actions"><button class="btn primary" type="button" data-profile="${creative.id}">View Profile</button></div>
      </div>
    </article>
  `).join("");
}

function renderFeatured(){
  $("#featuredTrack").innerHTML = creatives.filter(c => c.featured).map(creative => `
    <article class="featured-card">
      <img src="${creative.image}" alt="${creative.name} featured work" loading="lazy" />
      <div><span class="creative-type">${creative.category}</span><h3>${creative.name}</h3><p>${creative.location} - ${creative.specialty}</p><button class="btn secondary" type="button" data-profile="${creative.id}">View Profile</button></div>
    </article>
  `).join("");
}

function renderRunway(){
  $("#runwayStage").innerHTML = runwayLooks.map(look => {
    const interested = runwayInterest.includes(look.id);
    const demand = Math.min(100, look.demand + (interested ? 6 : 0));
    return `
      <article class="runway-card">
        <div class="runway-image">
          <img src="${look.image}" alt="${look.title} runway preview" loading="lazy" />
          <span class="region-badge">${look.region}</span>
        </div>
        <div class="runway-body">
          <span class="creative-type">${look.status}</span>
          <h3>${look.title}</h3>
          <p><strong>${look.designer}</strong></p>
          <p>Inspired by ${look.inspiration}.</p>
          <div class="demand-wrap">
            <div class="demand-top"><span>Audience demand</span><span>${demand}%</span></div>
            <div class="demand-bar" aria-label="Audience demand ${demand}%"><span class="demand-fill" style="--demand:${demand}%"></span></div>
          </div>
          <button class="interest-button ${interested ? "active" : ""}" type="button" data-runway-interest="${look.id}">${interested ? "Interest Noted" : "Signal Interest"}</button>
        </div>
      </article>
    `;
  }).join("");
}

function toggleRunwayInterest(id){
  runwayInterest = runwayInterest.includes(id) ? runwayInterest.filter(item => item !== id) : [...runwayInterest, id];
  localStorage.setItem("creativeRackRunwayInterest", JSON.stringify(runwayInterest));
  renderRunway();
}

function openProfile(id){
  const creative = creatives.find(item => item.id === id);
  if(!creative) return;
  currentProfileId = id;
  $("#modalImage").src = creative.image;
  $("#modalImage").alt = `${creative.name} profile image`;
  $("#modalCategory").textContent = creative.category;
  $("#modalName").textContent = creative.name;
  $("#modalMeta").textContent = `${creative.location} - ${creative.specialty}`;
  $("#modalBio").textContent = creative.bio;
  $("#modalTags").innerHTML = creative.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  $("#modalHighlights").innerHTML = creative.portfolio.map(item => `<li>${item}</li>`).join("");
  $("#modalCollaboration").textContent = creative.collaboration;
  $("#modalSocial").href = creative.social;
  $("#copyNote").hidden = true;
  $("#profileModal").classList.add("show");
  $("#profileModal").setAttribute("aria-hidden", "false");
  history.replaceState(null, "", `#profile-${creative.id}`);
}

function closeProfile(){
  $("#profileModal").classList.remove("show");
  $("#profileModal").setAttribute("aria-hidden", "true");
}

async function copyProfileLink(){
  const url = `${location.origin}${location.pathname}#profile-${currentProfileId}`;
  try { await navigator.clipboard.writeText(url); }
  catch(error) { console.info("Clipboard unavailable. Profile URL:", url); }
  $("#copyNote").hidden = false;
}

function renderEvents(){
  const eventTypes = unique(events.map(event => event.type));
  $("#eventFilters").innerHTML = eventTypes.map(type => `<button class="chip ${type === activeEventType ? "active" : ""}" type="button" data-event-type="${type}">${type === "All" ? "All Events" : type}</button>`).join("");
  const visibleEvents = events.filter(event => event.status !== "Closed" && (activeEventType === "All" || event.type === activeEventType));
  $("#eventEmpty").hidden = visibleEvents.length > 0;
  $("#eventGrid").innerHTML = visibleEvents.map(event => {
    const date = new Date(`${event.date}T${event.time}:00`).toLocaleDateString("en-ZA", { weekday:"short", day:"numeric", month:"short", year:"numeric" });
    const statusClass = event.status === "Closed" ? "closed" : event.status === "Coming Soon" ? "soon" : "";
    return `<article class="event-card"><span class="status ${statusClass}">${event.status}</span><h3>${event.title}</h3><div class="event-meta"><span>${date} at ${event.time}</span><span>${event.location}</span><span>${event.type}</span><span>Hosted by ${event.host}</span></div><p>${event.description}</p><a class="btn secondary" href="${event.link}">Registration / Info</a></article>`;
  }).join("");
}

function updateHeroStats(){
  $("#statCreatives").textContent = creatives.length;
  $("#statEvents").textContent = events.filter(event => event.status !== "Closed").length;
}

function setCategory(category){
  activeCategory = category;
  renderFilterOptions();
  renderCreatives();
}

function bindEvents(){
  $("#menuToggle").addEventListener("click", () => {
    const isOpen = $("#siteNav").classList.toggle("open");
    $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  });
  $("#siteNav").addEventListener("click", event => { if(event.target.matches("a")) $("#siteNav").classList.remove("open"); });
  $("#creativeSearch").addEventListener("input", renderCreatives);
  $("#locationFilter").addEventListener("change", renderCreatives);
  $("#specialtyFilter").addEventListener("change", renderCreatives);
  $("#clearFilters").addEventListener("click", () => { activeCategory = "All"; $("#creativeSearch").value = ""; renderFilterOptions(); renderCreatives(); });
  document.addEventListener("click", event => {
    const categoryButton = event.target.closest("[data-category]");
    if(categoryButton) setCategory(categoryButton.dataset.category);
    const jump = event.target.closest("[data-category-jump]");
    if(jump) setTimeout(() => setCategory(jump.dataset.categoryJump), 40);
    const save = event.target.closest("[data-save]");
    if(save) toggleSaved(save.dataset.save);
    const profile = event.target.closest("[data-profile]");
    if(profile) openProfile(profile.dataset.profile);
    const runwayButton = event.target.closest("[data-runway-interest]");
    if(runwayButton) toggleRunwayInterest(runwayButton.dataset.runwayInterest);
    const eventType = event.target.closest("[data-event-type]");
    if(eventType){ activeEventType = eventType.dataset.eventType; renderEvents(); }
  });
  $("#modalClose").addEventListener("click", closeProfile);
  $("#profileModal").addEventListener("click", event => { if(event.target.id === "profileModal") closeProfile(); });
  $("#copyProfile").addEventListener("click", copyProfileLink);
  $("#joinForm").addEventListener("submit", event => {
    event.preventDefault();
    // V1 demo only: this form does not send or permanently store submissions.
    $("#formMessage").textContent = "Thank you for your interest. Your profile information has been captured for demo purposes. In the live version, this form will connect to an admin review system.";
    $("#formMessage").hidden = false;
    event.currentTarget.reset();
  });
  $("#backToTop").addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
  window.addEventListener("scroll", () => $("#backToTop").classList.toggle("show", window.scrollY > 600));
  window.addEventListener("keydown", event => { if(event.key === "Escape") closeProfile(); });
}

function openProfileFromHash(){
  const match = location.hash.match(/^#profile-(.+)$/);
  if(match) openProfile(match[1]);
}

function init(){
  renderCategories();
  renderFilterOptions();
  renderFeatured();
  renderRunway();
  renderCreatives();
  renderEvents();
  updateHeroStats();
  bindEvents();
  openProfileFromHash();
}

document.addEventListener("DOMContentLoaded", init);
