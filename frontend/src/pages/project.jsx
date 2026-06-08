import { useState, useEffect, useRef } from 'react';
import Hyperspeed from '../components/Hyperspeed';

const P = '#0da2e7';

const PROJECTS = [
  {
    num: '01',
    type: 'Full Stack',
    title: 'Social Media Web App',
    desc: 'A social media platform where users can create accounts, upload posts, like and comment on content, and interact with other users in real time.',
    img1: '/projectImage/landing-desktopSocialmeida.png',
    img2: '/projectImage/profile-desktop-social-media.png',
    tags: ['React.js', 'MongoDB', 'Node.js', 'Multer', 'Tailwind'],
    link: 'https://github.com/Kushdeveloper68/CodeAlpha_Social-media',
    year: '2024',
    color: '#0da2e7',
  },
  {
    num: '02',
    type: 'Full Stack',
    title: 'E-Commerce Platform',
    desc: 'A complete e-commerce platform allowing users to browse products, add items to cart, place orders, and view order history with a clean checkout flow.',
    img1: '/projectImage/e-commerce2.png',
    img2: '/projectImage/e-commerce.png',
    tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Tailwind'],
    link: 'https://github.com/Kushdeveloper68/CodeAlpha_Simplee-commerceStore',
    year: '2024',
    color: '#4ade80',
  },
  {
    num: '03',
    type: 'Frontend + API',
    title: 'GitHub Explorer',
    desc: 'A developer tool that lets users search any GitHub profile and view repositories, starred repos, and account details in a clean UI.',
    img1: '/projectImage/github.png',
    img2: '/projectImage/mainpage-github-explorer.png',
    tags: ['React.js', 'GitHub API', 'Tailwind CSS'],
    link: 'https://github.com/Kushdeveloper68/Own-Github-Explorer',
    year: '2025',
    color: '#f472b6',
  },
  {
    num: '04',
    type: 'Full Stack',
    title: 'Worker Manager System',
    desc: "A management system to track workers' daily attendance, work hours, salary per day, and complete work history with admin controls.",
    img1: '/projectImage/workerproject.png',
    img2: '/projectImage/worker-manager-project2.png',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/Kushdeveloper68/worker-project',
    year: '2025',
    color: '#c084fc',
  },
  {
    num: '05',
    type: 'Frontend + API',
    title: 'Interior Home Decking Website',
    desc: "A visually appealing website for an interior home decking business, showcasing services, portfolio, and contact information with a modern design.",
    img1: '/projectImage/truebuild.png',
    img2: '/projectImage/truebuild-2.png',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/Kushdeveloper68/apex-web',
    year: '2026',
    color: '#c084fc',
  },
  {
    num: '06',
    type: 'Frontend + API + Engines + AI',
    title: 'Virtual Science Lab',
    desc: " Explore physics, chemistry, and mathematics through interactive 3D simulations, real-time visualizations, and an intelligent AI assistant.",
    img1: '/projectImage/sciencelab-image.png',
    img2: '/projectImage/chemistry-image.png',
    tags: ['React.js', "UI/UX Design", "Engines", "Three.js", "AI Integration"],
    link: 'https://kushdeveloper68.github.io/sciencelab/',
    year: '2026',
    color: '#c084fc',
  },
  {
    num: '07',
    type: 'Full Stack',
    title: 'Toolify',
    desc: "A clean, fast, responsive multi-tool web application built with React + Vite. Search across 60+ tools, filter by category, use dark mode, and download your results — all without leaving your browser.",
    img1: '/projectImage/toolify.png',
    img2: '/projectImage/toolify2.png',
    tags: ['React.js', "UI/UX Design", "Engines", "Three.js", "AI Integration"],
    link: 'https://kushdeveloper68.github.io/toolify/',
    year: '2026',
    color: '#c084fc',
  },
  {
    num: '08',
    type: 'Frontend + API',
    title: 'Ayiksolution Agency Website',
    desc: "A modern, responsive website for Ayiksolution, a digital agency specializing in web development and design. The site features a sleek portfolio, service descriptions, and contact information to attract potential clients.",
    img1: '/projectImage/ayiksolution1.png',
    img2: '/projectImage/ayiksolution2.png',
    tags: ['React.js', "UI/UX Design","Tailwind CSS"],
    link: 'https://ayiksolution.vercel.app/',
    year: '2026',
    color: '#c084fc',
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const [hyperspeedVisible, setHyperspeedVisible] = useState(false);
  const imgRef = useRef(null);

  /* Scroll reveal */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    items.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
  const el = sectionRef.current;
  if (!el) return;
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) setHyperspeedVisible(true);
      else setHyperspeedVisible(false);
    },
    { threshold: 0.05 }
  );
  io.observe(el);
  return () => io.disconnect();
}, []);


  /* Swap image on active change */
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.style.opacity = '0';
      imgRef.current.style.transform = 'scale(1.04)';
      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.style.opacity = '1';
          imgRef.current.style.transform = 'scale(1)';
        }
      }, 80);
    }
  }, [active]);

  const cur = PROJECTS[active];

  return (
    <>
    

      <section
        id="project"
        ref={sectionRef}
        style={{ color: '#fff', position: 'relative', zIndex: 0, overflow: 'hidden' }}
      >
        {/* Hyperspeed background */}
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
  {hyperspeedVisible && <Hyperspeed />}
</div>

        {/* Grid overlay */}
        <div className="kdp-grid-bg absolute inset-0 pointer-events-none z-[1]" style={{ opacity: 0.7 }} />

        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-[450px] h-[350px] pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(13,162,231,0.07) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(13,162,231,0.06) 0%, transparent 65%)' }} />

        {/* Vertical side label */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:flex items-center gap-2 z-10 opacity-25">
          <span className="kdp-vert" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', color: P }}>
            SELECTED WORKS — 2024/25
          </span>
          <div style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, rgba(13,162,231,0.5), transparent)' }} />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-24 lg:py-32">

          {/* ── HEADER ── */}
          <div className="mb-16 md:mb-20">
            <div data-reveal className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <div style={{ display: 'inline-block', width: '2.5rem', height: '2px', background: P, borderRadius: 2 }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.2em', color: P, textTransform: 'uppercase' }}>
                003 / Selected Work
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
              <div data-reveal data-delay="100">
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4.5rem, 9vw, 7.5rem)', lineHeight: 0.9, letterSpacing: '0.04em', color: '#fff' }}>
                  Selected
                </h2>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4.5rem, 9vw, 7.5rem)', lineHeight: 0.9, letterSpacing: '0.04em', WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}>
                  Work
                </p>
              </div>
              <div data-reveal data-delay="200" className="lg:mb-3 lg:max-w-xs">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                  A focused collection of applications built to solve real problems — strong UI, dependable backend, practical delivery.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="kdp-glow-dot w-1.5 h-1.5 rounded-full block" style={{ backgroundColor: P }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {PROJECTS.length} Projects — More Coming
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              MAIN SHOWCASE — Split layout
          ══════════════════════════════════════════ */}
          <div data-reveal data-delay="200" className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden mb-6"
            style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(8,15,22,0.75)', backdropFilter: 'blur(20px)' }}>

            {/* LEFT: Project list */}
            <div className="lg:col-span-5 flex flex-col" style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>

              {/* List header */}
              <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Projects Index
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(13,162,231,0.4)', letterSpacing: '0.15em' }}>
                  {String(active + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                </span>
              </div>

              {/* List items */}
              {PROJECTS.map((p, i) => (
                <div
                  key={p.num}
                  className={`kdp-list-item ${active === i ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="kdp-active-bar" />

                  {/* Number */}
                  <div className="kdp-num" style={{ color: active === i ? p.color : 'rgba(255,255,255,0.18)' }}>
                    {p.num}
                  </div>

                  {/* Title + type */}
                  <div className="min-w-0">
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: active === i ? '#fff' : 'rgba(255,255,255,0.6)', lineHeight: 1.3, transition: 'color 0.25s', letterSpacing: '0.02em' }}>
                      {p.title}
                    </div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: active === i ? p.color : 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '3px', transition: 'color 0.25s' }}>
                      {p.type} · {p.year}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div style={{ transition: 'transform 0.25s, opacity 0.25s', transform: active === i ? 'translateX(0)' : 'translateX(-4px)', opacity: active === i ? 1 : 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: p.color }}>arrow_forward</span>
                  </div>
                </div>
              ))}

              {/* Bottom info panel */}
              <div className="flex-1 p-6 flex flex-col justify-end gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto' }}>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cur.tags.map(t => (
                    <span key={t} className="kdp-tag">{t}</span>
                  ))}
                </div>

                {/* Description */}
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
                  {cur.desc}
                </p>

                {/* CTA */}
                <a href={cur.link} target="_blank" rel="noopener noreferrer" className="kdp-btn" style={{ width: 'fit-content' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>code</span>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* RIGHT: Project image */}
            <div className="lg:col-span-7 relative overflow-hidden kdp-img-wrap" style={{ minHeight: '420px', backgroundColor: '#060d14' }}>
              {/* Image */}
              <img
  ref={imgRef}
  src={cur.img1}
  alt={`Screenshot of ${cur.title} — ${cur.type} project`}
  className="kdp-img absolute inset-0 w-full h-full object-cover object-top"
  width="800"
  height="500"
  decoding="async"
/>

              {/* Scanline */}
              <div className="kdp-scanline absolute inset-0" />

              {/* Gradient overlay */}
              <div className="absolute inset-0"
                style={{ background: `linear-gradient(to top, #080f16 0%, rgba(8,15,22,0.4) 40%, rgba(8,15,22,0.1) 100%)` }} />
              <div className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, rgba(8,15,22,0.5) 0%, transparent 50%)` }} />

              {/* Hover label */}
              <div className="kdp-img-hover-label absolute inset-0 flex items-center justify-center">
                <div className="px-4 py-2 rounded-xl" style={{ background: 'rgba(8,15,22,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(13,162,231,0.2)' }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: P, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Preview</span>
                </div>
              </div>

              {/* Corner brackets */}
              <div className="kdp-corner-tl" />
              <div className="kdp-corner-br" />

              {/* Top-left meta */}
              <div className="absolute top-4 left-4 z-10">
                <div className="px-2.5 py-1 rounded-lg" style={{ background: 'rgba(8,15,22,0.75)', backdropFilter: 'blur(10px)', border: `1px solid ${cur.color}40` }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: cur.color, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {cur.type}
                  </span>
                </div>
              </div>

              {/* Bottom-right title overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: '#fff' }}>
                      {cur.title}
                    </div>
                  </div>
                  <div className="kdp-float flex-shrink-0">
                    <div className="px-3 py-1.5 rounded-xl text-center" style={{ background: 'rgba(8,15,22,0.8)', backdropFilter: 'blur(12px)', border: `1px solid ${cur.color}30` }}>
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', lineHeight: 1, color: cur.color, letterSpacing: '0.04em' }}>{cur.num}</div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{cur.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              HORIZONTAL SCROLL CARDS (thumbnail strip)
          ══════════════════════════════════════════ */}
          <div data-reveal data-delay="300" className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
            {PROJECTS.map((p, i) => (
              <div
                key={p.num}
                onClick={() => setActive(i)}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{
                  aspectRatio: '16/9',
                  border: `1px solid ${active === i ? p.color + '50' : 'rgba(255,255,255,0.06)'}`,
                  boxShadow: active === i ? `0 0 20px ${p.color}20` : 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                  transform: active === i ? 'scale(1.02)' : 'scale(1)',
                }}
              >
<img
  src={p.img1}
  alt={`${p.title} project thumbnail`}
  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
  width="400"
  height="225"
  loading="lazy"
  decoding="async"
/>
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(8,15,22,0.9) 0%, rgba(8,15,22,0.3) 100%)` }} />

                {/* Active indicator */}
                {active === i && (
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: p.color }} />
                )}

                <div className="absolute bottom-2 left-3 right-2">
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: active === i ? p.color : 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {p.num}
                  </div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.7rem', color: active === i ? '#fff' : 'rgba(255,255,255,0.55)', lineHeight: 1.3, marginTop: '2px' }}>
                    {p.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── GITHUB CTA ── */}
          <div data-reveal data-delay="400" className="text-center">
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              More projects available on GitHub
            </div>
            <a href="https://github.com/Kushdeveloper68" target="_blank" rel="noopener noreferrer" className="kdp-btn-ghost">
              <span className="material-symbols-outlined" style={{ fontSize: '15px', color: P }}>code</span>
              View All Projects
              <span className="material-symbols-outlined" style={{ fontSize: '14px', color: P }}>arrow_outward</span>
            </a>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="relative z-10 py-5 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
            <div className="kdp-ticker">
              {[...PROJECTS, ...PROJECTS, ...PROJECTS].map(({ title, type, num }, i) => (
                <div key={i} className="flex items-center gap-2" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', whiteSpace: 'nowrap' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '12px', color: 'rgba(13,162,231,0.4)' }}>arrow_outward</span>
                  {title}
                  <span style={{ color: 'rgba(13,162,231,0.2)', marginLeft: '1rem' }}>✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> 
    </>
  );
}