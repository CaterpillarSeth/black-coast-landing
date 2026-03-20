const fs = require('fs');
const html = [];
html.push(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Black Coast Estates</title>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Outfit:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
*{box-sizing:border-box;margin:0;padding:0}
:root{--ivory:#FEFDFB;--cream:#F8F6F1;--champagne:#C5A96A;--brass:#9E8548;--hunter:#4A6358;--deep:#3A4F46;--sage:#95A89D;--font-heading:'Playfair Display',Georgia,serif;--font-body:'Lora',Georgia,serif;--font-ui:'Raleway',sans-serif;--font-stats:'Outfit',sans-serif}
html{scroll-behavior:smooth}
body{font-family:var(--font-body);font-size:17px;line-height:1.7;color:var(--deep);background-color:var(--cream);-webkit-font-smoothing:antialiased}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:1.25rem 2rem;display:flex;align-items:center;justify-content:space-between;transition:background .4s}
.nav.scrolled{background:rgba(248,246,241,.95);backdrop-filter:blur(12px);box-shadow:0 1px 0 rgba(58,79,70,.08)}
.nav-logo{font-family:var(--font-heading);font-weight:500;font-size:1.35rem;color:var(--deep)}
.nav-links{display:flex;gap:2rem;list-style:none;align-items:center}
.nav-links a{font-family:var(--font-ui);font-weight:500;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;color:var(--deep);transition:color .2s}
.nav-links a:hover{color:var(--champagne)}
.nav-links a.cta-btn{background:var(--champagne);color:var(--ivory);padding:.6rem 1.4rem;border-radius:2px}
.nav-links a.cta-btn:hover{background:var(--brass)}
.mobile-toggle{display:none;background:none;border:none;cursor:pointer;flex-direction:column;gap:5px;padding:4px}
.mobile-toggle span{display:block;width:24px;height:2px;background:var(--deep)}
.hero{position:relative;height:100vh;min-height:700px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.hero-bg{position:absolute;inset:0;background-image:url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1920&q=80');background-size:cover;background-position:center;filter:brightness(.55)}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(58,79,70,.25) 0%,rgba(58,79,70,.55) 60%,rgba(58,79,70,.75) 100%)}
.hero-content{position:relative;z-index:2;text-align:center;color:var(--ivory);padding:2rem;max-width:820px}
.hero-eyebrow{font-family:var(--font-ui);font-weight:600;font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;color:var(--champagne);margin-bottom:1.5rem}
.hero h1{font-family:var(--font-heading);font-weight:500;font-size:clamp(2.5rem,5vw,4.2rem);line-height:1.1;color:var(--ivory);margin-bottom:1.5rem}
.hero-tagline{font-family:var(--font-heading);font-style:italic;font-weight:400;font-size:clamp(1.1rem,2vw,1.4rem);color:rgba(254,253,251,.85);margin-bottom:1rem}
.hero p{font-family:var(--font-body);font-size:1.05rem;line-height:1.75;color:rgba(254,253,251,.88);max-width:580px;margin:0 auto 2.5rem}
.hero-cta{display:inline-flex;align-items:center;gap:.75rem;background:var(--champagne);color:var(--ivory);font-family:var(--font-ui);font-weight:600;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;padding:1rem 2.5rem;border-radius:2px;border:none;cursor:pointer;transition:background .3s,transform .2s}
.hero-cta:hover{background:var(--brass);transform:translateY(-1px)}
.hero-scroll{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:.5rem;color:rgba(254,253,251,.5);font-family:var(--font-ui);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase}
.hero-scroll-line{width:1px;height:40px;background:linear-gradient(to bottom,rgba(254,253,251,.5),transparent);animation:scrollPulse 2s ease-in-out infinite}
@keyframes scrollPulse{0%,100%{opacity:.4}50%{opacity:1}}
.section{padding:6rem 2rem}
.section-inner{max-width:1160px;margin:0 auto}
.section-label{font-family:var(--font-ui);font-weight:600;font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--champagne);margin-bottom:1rem}
.section-title{font-family:var(--font-heading);font-weight:500;font-size:clamp(2rem,3.5vw,2.8rem);line-height:1.2;color:var(--deep);margin-bottom:1.25rem}
.section-subtitle{font-family:var(--font-body);font-size:1.05rem;line-height:1.75;color:var(--sage);max-width:600px}
.divider{width:48px;height:2px;background:var(--champagne);margin:2rem 0}
.divider.centered{margin:2rem auto}
.about{background:var(--ivory)}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;margin-top:3rem}
.about-image{position:relative;aspect-ratio:4/3}
.about-image img{width:100%;height:100%;object-fit:cover;border-radius:4px}
.about-image-accent{position:absolute;bottom:-12px;right:-12px;width:55%;height:55%;border:2px solid var(--champagne);border-radius:4px;z-index:-1}
.about-text blockquote{font-family:var(--font-heading);font-style:italic;font-size:1.3rem;line-height:1.55;color:var(--hunter);margin:1.5rem 0 2rem;padding-left:1.5rem;border-left:3px solid var(--champagne)}
.about-text p{color:var(--sage);font-size:1rem;line-height:1.8;margin-bottom:1rem}
.about-features{display:grid;grid-template-columns:1fr 1fr;gap:1rem 2rem;margin-top:2rem}
.about-feature{display:flex;align-items:center;gap:.6rem;font-family:var(--font-ui);font-size:.85rem;font-weight:500;color:var(--deep)}
.about-feature-dot{width:6px;height:6px;border-radius:50%;background:var(--champagne);flex-shrink:0}
.how{background:var(--hunter);color:var(--ivory)}
.how .section-title{color:var(--ivory)}
.how .section-subtitle{color:rgba(254,253,251,.7)}
.how-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;margin-top:3.5rem}
.how-card{background:rgba(254,253,251,.06);border:1px solid rgba(254,253,251,.1);border-radius:6px;padding:2.5rem 2rem;transition:background .3s}
.how-card:hover{background:rgba(254,253,251,.1)}
.how-card-number{font-family:var(--font-stats);font-size:2rem;font-weight:300;color:var(--champagne);margin-bottom:1.25rem}
.how-card h3{font-family:var(--font-heading);font-weight:500;font-size:1.2rem;color:var(--ivory);margin-bottom:.75rem}
.how-card p{font-family:var(--font-ui);font-size:.875rem;font-weight:300;color:rgba(254,253,251,.7);line-height:1.7}
.how-divider{width:100%;height:1px;background:rgba(254,253,251,.12);margin:4rem 0}
.how-included-title{font-family:var(--font-heading);font-weight:500;font-size:1.5rem;color:var(--ivory);margin-bottom:.5rem}
.how-included-sub{font-family:var(--font-ui);font-size:.85rem;color:rgba(254,253,251,.6);margin-bottom:2.5rem}
.included-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.included-item{display:flex;align-items:flex-start;gap:.75rem}
.included-check{width:20px;height:20px;background:var(--champagne);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.included-check svg{width:10px;height:10px;color:var(--ivory)}
.included-item span{font-family:var(--font-ui);font-size:.875rem;font-weight:300;color:rgba(254,253,251,.8);line-height:1.5}
.listings{background:var(--cream)}
.listings-header{text-align:center;margin-bottom:3.5rem}
.listings-header .section-subtitle{margin:0 auto}
.listings-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
.listing-card{background:var(--ivory);border-radius:6px;overflow:hidden;transition:transform .3s,box-shadow .3s;border:1px solid rgba(58,79,70,.06)}
.listing-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(58,79,70,.1)}
.listing-card-image{position:relative;aspect-ratio:3/2;overflow:hidden}
.listing-card-image img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.listing-card:hover .listing-card-image img{transform:scale(1.05)}
.listing-status{position:absolute;top:12px;left:12px;font-family:var(--font-ui);font-size:.65rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:.35rem .8rem;border-radius:2px}
.listing-status.available{background:var(--hunter);color:var(--ivory)}
.listing-status.under-contract{background:var(--brass);color:var(--ivory)}
.listing-status.upcoming{background:rgba(58,79,70,.6);color:var(--ivory)}
.listing-card-body{padding:1.5rem}
.listing-number{font-family:var(--font-stats);font-size:.75rem;font-weight:400;color:var(--champagne);letter-spacing:.08em;margin-bottom:.35rem}
.listing-card h3{font-family:var(--font-heading);font-weight:500;font-size:1.15rem;color:var(--deep);margin-bottom:.75rem}
.listing-stats{display:flex;gap:1.25rem;margin-bottom:.5rem}
.listing-stat{display:flex;align-items:center;gap:.35rem;font-family:var(--font-ui);font-size:.78rem;font-weight:400;color:var(--sage)}
.listing-stat svg{width:14px;height:14px;color:var(--champagne)}
.listing-price{font-family:var(--font-stats);font-size:1.15rem;font-weight:500;color:var(--deep);margin-top:.75rem;padding-top:.75rem;border-top:1px solid rgba(58,79,70,.08)}
.listing-price span{font-family:var(--font-ui);font-size:.72rem;font-weight:400;color:var(--sage)}
.reserve{background:var(--deep);color:var(--ivory);position:relative;overflow:hidden}
.reserve::before{content:'';position:absolute;inset:0;background-image:url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80');background-size:cover;background-position:center;opacity:.12}
.reserve-inner{position:relative;z-index:1}
.reserve-header{text-align:center;margin-bottom:3.5rem}
.reserve .section-title{color:var(--ivory)}
.reserve .section-subtitle{color:rgba(254,253,251,.65);margin:0 auto}
.reserve-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem}
.reserve-card{text-align:center;padding:2.5rem 2rem;border:1px solid rgba(197,169,106,.2);border-radius:6px;background:rgba(254,253,251,.03)}
.reserve-card-icon{width:48px;height:48px;margin:0 auto 1.25rem;display:flex;align-items:center;justify-content:center}
.reserve-card-icon svg{width:32px;height:32px;color:var(--champagne)}
.reserve-card h3{font-family:var(--font-heading);font-weight:500;font-size:1.25rem;color:var(--ivory);margin-bottom:.75rem}
.reserve-card p{font-family:var(--font-ui);font-size:.875rem;font-weight:300;color:rgba(254,253,251,.65);line-height:1.7}
.reserve-cta{text-align:center;margin-top:3.5rem}
.reserve-amount{font-family:var(--font-stats);font-size:3rem;font-weight:300;color:var(--champagne);margin-bottom:.25rem}
.reserve-amount-label{font-family:var(--font-ui);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(254,253,251,.5);margin-bottom:2rem}
.reserve-btn{display:inline-flex;align-items:center;gap:.75rem;background:var(--champagne);color:var(--ivory);font-family:var(--font-ui);font-weight:600;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;padding:1rem 2.5rem;border-radius:2px;border:none;cursor:pointer;transition:background .3s,transform .2s}
.reserve-btn:hover{background:var(--brass);transform:translateY(-1px)}
.faq{background:var(--ivory)}
.faq-header{text-align:center;margin-bottom:3rem}
.faq-header .section-subtitle{margin:0 auto}
.faq-list{max-width:760px;margin:0 auto}
.faq-item{border-bottom:1px solid rgba(58,79,70,.1)}
.faq-question{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.5rem 0;background:none;border:none;cursor:pointer;text-align:left;font-family:var(--font-body);font-size:1rem;font-weight:400;color:var(--deep);transition:color .2s}
.faq-question:hover{color:var(--champagne)}
.faq-question svg{flex-shrink:0;width:18px;height:18px;color:var(--champagne);transition:transform .3s}
.faq-item.open .faq-question svg{transform:rotate(45deg)}
.faq-answer{max-height:0;overflow:hidden;transition:max-height .4s ease}
.faq-item.open .faq-answer{max-height:500px}
.faq-answer-inner{padding-bottom:1.5rem;font-family:var(--font-body);font-size:.95rem;line-height:1.8;color:var(--sage)}
.footer{background:var(--deep);color:var(--ivory);padding:5rem 2rem 2rem}
.footer-inner{max-width:1160px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:3rem;padding-bottom:3rem;border-bottom:1px solid rgba(254,253,251,.1)}
.footer-brand h3{font-family:var(--font-heading);font-weight:500;font-size:1.3rem;color:var(--ivory);margin-bottom:.75rem}
.footer-brand p{font-family:var(--font-body);font-size:.9rem;color:rgba(254,253,251,.55);line-height:1.7;margin-bottom:1.5rem}
.footer-tagline{font-family:var(--font-heading);font-style:italic;font-size:.95rem;color:var(--champagne)}
.footer-col h4{font-family:var(--font-ui);font-size:.68rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--champagne);margin-bottom:1.25rem}
.footer-col ul{list-style:none;display:flex;flex-direction:column;gap:.6rem}
.footer-col ul a{font-family:var(--font-ui);font-size:.875rem;font-weight:300;color:rgba(254,253,251,.65);transition:color .2s}
.footer-col ul a:hover{color:var(--ivory)}
.footer-newsletter h4{font-family:var(--font-ui);font-size:.68rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--champagne);margin-bottom:1rem}
.footer-newsletter p{font-family:var(--font-ui);font-size:.8rem;font-weight:300;color:rgba(254,253,251,.5);margin-bottom:1.25rem;line-height:1.6}
.newsletter-form{display:flex}
.newsletter-form input{flex:1;padding:.75rem 1rem;background:rgba(254,253,251,.07);border:1px solid rgba(254,253,251,.15);border-right:none;border-radius:2px 0 0 2px;font-family:var(--font-ui);font-size:.8rem;color:var(--ivory);outline:none}
.newsletter-form input::placeholder{color:rgba(254,253,251,.35)}
.newsletter-form input:focus{border-color:var(--champagne)}
.newsletter-form button{padding:.75rem 1.25rem;background:var(--champagne);border:1px solid var(--champagne);border-radius:0 2px 2px 0;color:var(--ivory);font-family:var(--font-ui);font-size:.75rem;font-weight:600;letter-spacing:.08em;cursor:pointer;transition:background .2s}
.newsletter-form button:hover{background:var(--brass);border-color:var(--brass)}
.footer-bottom{display:flex;align-items:center;justify-content:space-between;padding-top:2rem}
.footer-bottom p{font-family:var(--font-ui);font-size:.75rem;font-weight:300;color:rgba(254,253,251,.4)}
.footer-contact{display:flex;gap:2rem}
.footer-contact a{font-family:var(--font-ui);font-size:.75rem;font-weight:400;color:rgba(254,253,251,.5);transition:color .2s;display:flex;align-items:center;gap:.4rem}
.footer-contact a:hover{color:var(--champagne)}
.footer-contact svg{width:14px;height:14px}
@media(max-width:1024px){.how-grid{grid-template-columns:repeat(2,1fr)}.listings-grid{grid-template-columns:repeat(2,1fr)}.footer-grid{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.nav-links{display:none;position:absolute;top:100%;left:0;right:0;background:var(--cream);flex-direction:column;padding:2rem;gap:1.25rem;box-shadow:0 8px 24px rgba(58,79,70,.1)}.nav-links.open{display:flex}.mobile-toggle{display:flex}.hero h1{font-size:2.2rem}.about-grid{grid-template-columns:1fr;gap:2.5rem}.about-image{order:-1}.how-grid,.included-grid,.reserve-cards{grid-template-columns:1fr}.listings-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr;gap:2rem}.footer-bottom{flex-direction:column;gap:1rem;text-align:center}.footer-contact{flex-direction:column;gap:.75rem;align-items:center}.section{padding:4rem 1.5rem}}
.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}
  </style>
</head>
<body>
  <nav class="nav" id="nav">
    <div class="nav-logo">Black Coast Estates</div>
    <ul class="nav-links" id="navLinks">
      <li><a href="#about">About</a></li>
      <li><a href="#how-it-works">How It Works</a></li>
      <li><a href="#listings">Homes</a></li>
      <li><a href="#reserve">Reserve</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#listings" class="cta-btn">See Pricing</a></li>
    </ul>
    <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
  </nav>
  <section class="hero" id="hero">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="hero-eyebrow">Playa Negra, Guanacaste, Costa Rica</p>
      <h1>Co-Own a Slice of Paradise</h1>
      <p class="hero-tagline">Where deep-rooted nature meets quiet prestige.</p>
      <p>Own 1/8 of a luxury home in Costa Rica and enjoy real ownership, equity, and effortless management through co-ownership. Your slice of paradise, professionally cared for.</p>
      <button class="hero-cta" onclick="document.getElementById('listings').scrollIntoView({behavior:'smooth'})">See Available Homes<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
    </div>
    <div class="hero-scroll"><span>Scroll</span><div class="hero-scroll-line"></div></div>
  </section>
  <section class="section about" id="about">
    <div class="section-inner">
      <p class="section-label">Our Story</p>
      <h2 class="section-title">What is Black Coast Estates?</h2>
      <div class="divider"></div>
      <div class="about-grid">
        <div class="about-image"><img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" alt="Black Coast Estates community"><div class="about-image-accent"></div></div>
        <div class="about-text">
          <blockquote>"It's more than a place to stay — it's a place to belong."</blockquote>
          <p>Black Coast Estates is a private coastal community set in the lush hills of Playa Negra, Guanacaste, Costa Rica. Our thoughtfully designed homes are surrounded by palm-lined trails, pickleball courts, yoga decks, and shaded parks — all just minutes from the Pacific.</p>
          <p>Here, deep-rooted nature meets quiet prestige. It's a place designed for those who want to own something that endures — without the burden of maintenance, management, or the typical complexities of international real estate.</p>
          <div class="about-features">
            <div class="about-feature"><div class="about-feature-dot"></div>Palm-lined walking trails</div>
            <div class="about-feature"><div class="about-feature-dot"></div>Pickleball courts</div>
            <div class="about-feature"><div class="about-feature-dot"></div>Yoga and meditation decks</div>
            <div class="about-feature"><div class="about-feature-dot"></div>Shaded community parks</div>
            <div class="about-feature"><div class="about-feature-dot"></div>Private beach access</div>
            <div class="about-feature"><div class="about-feature-dot"></div>Full property management</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section how" id="how-it-works">
    <div class="section-inner">
      <p class="section-label">The Model</p>
      <h2 class="section-title">What is Co-Ownership?</h2>
      <p class="section-subtitle">Co-ownership unlocks a smarter, more effortless way to own luxury real estate in Costa Rica without the full cost of sole ownership.</p>
      <div class="how-grid">
        <div class="how-card"><div class="how-card-number">01</div><h3>Real Ownership</h3><p>You own a 1/8 deeded share of the property — not a timeshare. Your name is on the title. You build real equity.</p></div>
        <div class="how-card"><div class="how-card-number">02</div><h3>Flexible Lifestyle</h3><p>Use your home up to 42 days per year, or combine shares for more time. Travel when you want, not on someone else's schedule.</p></div>
        <div class="how-card"><div class="how-card-number">03</div><h3>No-Hassle Management</h3><p>We handle everything — maintenance, housekeeping, landscaping, repairs. Your home is ready when you arrive, every time.</p></div>
        <div class="how-card"><div class="how-card-number">04</div><h3>Guaranteed Stay Time</h3><p>Your 42 days per year are guaranteed and coordinated through our app. No conflicts, no guessing — just arrive and enjoy.</p></div>
      </div>
      <div class="how-divider"></div>
      <div class="how-included">
        <h3 class="how-included-title">What is Included in My 1/8 Share?</h3>
        <p class="how-included-sub">Every share includes full access to the home, all amenities, and professional management.</p>
        <div class="included-grid">
          <div class="included-item"><div class="included-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span>Deeded 1/8 ownership — your name on title</span></div>
          <div class="included-item"><div class="included-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span>42 guaranteed days per year (expandable)</span></div>
          <div class="included-item"><div class="included-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span>Full property management and maintenance</span></div>
          <div class="included-item"><div class="included-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span>Professional housekeeping before each stay</span></div>
          <div class="included-item"><div class="included-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span>24/7 emergency maintenance and support</span></div>
          <div class="included-item"><div class="included-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span>Landscaping, pool and exterior care</span></div>
          <div class="included-item"><div class="included-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span>Property taxes and insurance management</span></div>
          <div class="included-item"><div class="included-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span>Owner app for booking and management</span></div>
          <div class="included-item"><div class="included-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></div><span>Community amenities and beach access</span></div>
        </div>
      </div>
    </div>
  </section>`);
