import { useEffect, useRef } from 'react';
import { Orb } from '../components';

const P = '#0da2e7';
const P_DIM = 'rgba(13,162,231,0.12)';
const P_BORDER = 'rgba(13,162,231,0.25)';

const STATS = [
  { val: '1.5+', label: 'Years', sub: 'Experience' },
  { val: '10+', label: 'Projects', sub: 'Delivered' },
  { val: '2+', label: 'Internships', sub: 'Completed' },
];

const TAGS = [
  { icon: 'code', text: 'React / Vite' },
  { icon: 'dns', text: 'Node.js / Express' },
  { icon: 'brush', text: 'Tailwind / Figma' },
  { icon: 'database', text: 'MongoDB / SQL' },
];

const SOCIAL = [
  { href: 'https://github.com/Kushdeveloper68', icon: 'code', label: 'GitHub' },
  { href: 'https://www.instagram.com/kushdev.js', icon: 'alternate_email', label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/kushdeveloper', icon: 'link', label: 'LinkedIn' },
];

export default function About() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const wrapRef = useRef(null);

  /* 3-D tilt */
  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;
    const move = e => {
      const r = wrap.getBoundingClientRect();
      const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -6;
      const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 6;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    };
    const leave = () => { card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'; };
    wrap.addEventListener('mousemove', move);
    wrap.addEventListener('mouseleave', leave);
    return () => { wrap.removeEventListener('mousemove', move); wrap.removeEventListener('mouseleave', leave); };
  }, []);

  /* Scroll-triggered entrance */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section
        id="about"
        ref={containerRef}
        style={{ backgroundColor: '#0c1a20', color: '#fff', position: 'relative', overflow: 'hidden' }}
      >
        {/* Grid bg */}
        {/* Orb — top right */}
        <div className="absolute -top-16 -right-16 w-[520px] h-[520px] pointer-events-auto opacity-70">
          <Orb hue={247} hoverIntensity={1.3} rotateOnHover forceHoverState={false} backgroundColor="#0c1a20" />
        </div>

        {/* Ambient glow bottom-left */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(13,162,231,0.07) 0%, transparent 70%)' }} />

        {/* Vertical side label */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:flex items-center gap-2 opacity-30">
          <span className="kd-vert" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', color: P }}>PORTFOLIO — 2025</span>
          <div style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, rgba(13,162,231,0.5), transparent)' }} />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 py-24 lg:py-32">

          {/* ─── SECTION LABEL ─── */}
          <div data-reveal data-delay="100" className="flex items-center gap-3 mb-12 justify-center lg:justify-start">
            <span className="kd-line-accent" />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.2em', color: P, textTransform: 'uppercase' }}>
              001 / About Me
            </span>
          </div>

          {/* ─── MAIN GRID ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

            {/* ── LEFT: Profile card ── */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
              <div
                ref={wrapRef}
                data-reveal="left"
                data-delay="200"
                className="kd-card-wrap relative w-full max-w-[380px]"
                style={{ cursor: 'default' }}
              >
                {/* Index number decoration */}
                <div className="absolute -top-5 -left-2 pointer-events-none" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '7rem', color: P, opacity: 0.06, lineHeight: 1, letterSpacing: '0.04em' }}>
                  KP
                </div>

                {/* Card */}
                <div
                  ref={cardRef}
                  className="kd-card-3d relative rounded-[20px] overflow-hidden"
                  style={{
                    aspectRatio: '4/5',
                    boxShadow: '0 0 60px -15px rgba(13,162,231,0.2), 0 30px 60px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Photo */}
                  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/profilepic.png')" }} />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0c1a20 0%, rgba(12,26,32,0.5) 45%, rgba(12,26,32,0.1) 100%)' }} />

                  {/* Scanline texture */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                    mixBlendMode: 'overlay',
                  }} />

                  {/* Bottom info panel */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="kd-card-panel p-4">
                      {/* Name row */}
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff', margin: 0, lineHeight: 1.2 }}>
                            Kush Pandit
                          </h3>
                          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'rgba(255,255,255,0.45)', margin: '4px 0 0', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Full-Stack Developer
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{ background: 'rgba(13,162,231,0.12)', border: '1px solid rgba(13,162,231,0.25)' }}>
                          <span className="kd-avail-dot w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: P }} />
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: P, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Open</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '10px 0' }} />

                      {/* Socials */}
                      <div className="flex gap-2.5">
                        {SOCIAL.map(({ href, icon, label }) => (
                          <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                            className="kd-social w-9 h-9 rounded-full flex items-center justify-center">
                            <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}>{icon}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 pointer-events-none" style={{
                    width: 28, height: 28, borderTop: `2px solid ${P}`, borderRight: `2px solid ${P}`,
                    borderTopRightRadius: 6, opacity: 0.5,
                  }} />
                  <div className="absolute bottom-[165px] left-4 pointer-events-none" style={{
                    width: 28, height: 28, borderBottom: `2px solid ${P}`, borderLeft: `2px solid ${P}`,
                    borderBottomLeftRadius: 6, opacity: 0.5,
                  }} />
                </div>

                {/* Floating stat badge */}
                <div data-reveal data-delay="500"
                  className="absolute -right-4 top-10 px-3 py-2 rounded-xl"
                  style={{
                    background: 'rgba(10,22,28,0.9)', backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(13,162,231,0.2)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  }}
                >
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: '#fff', lineHeight: 1, letterSpacing: '0.04em' }}>10+</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: P, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>Projects</div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Content ── */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-8 text-center lg:text-left">

              {/* Headline */}
              <div data-reveal="right" data-delay="200" className="space-y-2">
                <div className="kd-display text-[4.8rem] md:text-[6rem] lg:text-[6.5rem] text-white leading-none">
                  Turning <span className="kd-gradient">Ideas</span>
                </div>
                <div className="kd-display text-[4.8rem] md:text-[6rem] lg:text-[6.5rem] leading-none"
                  style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.25)', color: 'transparent' }}>
                  Into Reality
                </div>
              </div>

              {/* Body copy */}
              <div data-reveal="right" data-delay="300" className="space-y-4 max-w-xl mx-auto lg:mx-0">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.0rem', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                  I'm a <span style={{ color: '#fff', fontWeight: 500 }}>Full-Stack Web Developer</span> obsessed with clean interfaces and performant systems — building apps that look beautiful and work flawlessly.
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                  React · Node.js · Tailwind · MongoDB · REST APIs — I own the full product from pixel to deployment.
                </p>
              </div>

              {/* Stat cards */}
              <div data-reveal="right" data-delay="400" className="grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 w-full">
                {STATS.map(({ val, label, sub }) => (
                  <div key={label} className="kd-stat rounded-2xl p-4 lg:p-5 flex flex-col gap-1">
                    <div className="kd-counter text-white">{val}</div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: P, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{sub}</div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div data-reveal="right" data-delay="500" className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="/developer-kush-resume.pdf" download>
                  <button className="kd-btn-primary flex items-center gap-2.5 h-12 px-7 rounded-xl text-white font-bold" style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.85rem', letterSpacing: '0.04em' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>download</span>
                    Download CV
                  </button>
                </a>
                <a href="#skill">
                  <button className="kd-btn-ghost flex items-center gap-2.5 h-12 px-7 rounded-xl text-white font-bold" style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.85rem', letterSpacing: '0.04em' }}>
                    View Tech Stack
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: P }}>arrow_forward</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* ─── BOTTOM TICKER STRIP ─── */}
          <div data-reveal data-delay="600" className="mt-24 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.75rem' }}>
            <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
              <div className="kd-ticker-track">
                {[...TAGS, ...TAGS, ...TAGS, ...TAGS].map(({ icon, text }, i) => (
                  <div key={i} className="kd-tag-item flex items-center gap-2" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>
                    <span className="kd-tag-icon material-symbols-outlined" style={{ fontSize: '14px', color: 'rgba(13,162,231,0.5)' }}>{icon}</span>
                    {text}
                    <span style={{ color: 'rgba(13,162,231,0.25)', marginLeft: '1rem' }}>✦</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}