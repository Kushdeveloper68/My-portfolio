import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Hyperspeed from '../components/Hyperspeed';

const P = '#0da2e7';

/* ------------------------------------------------------------------
   DATA
   live : deployed site (shows a "Live Demo" button)   — optional
   repo : GitHub repository (shows a "GitHub" button)  — optional
   img1 / img2 : screenshots shown in the Preview lightbox
------------------------------------------------------------------ */
const PROJECTS = [
  {
    num: '01',
    type: 'Full Stack',
    title: 'Social Media Web App',
    desc: 'A social media platform where users can create accounts, upload posts, like and comment on content, and interact with other users in real time.',
    img1: '/projectImage/landing-desktopSocialmeida.webp',
    img2: '/projectImage/profile-desktop-social-media.webp',
    tags: ['React.js', 'MongoDB', 'Node.js', 'Multer', 'Tailwind'],
    repo: 'https://github.com/Kushdeveloper68/CodeAlpha_Social-media',
    year: '2024',
    color: '#0da2e7',
  },
  {
    num: '02',
    type: 'Full Stack',
    title: 'E-Commerce Platform',
    desc: 'A complete e-commerce platform allowing users to browse products, add items to cart, place orders, and view order history with a clean checkout flow.',
    img1: '/projectImage/e-commerce2.webp',
    img2: '/projectImage/e-commerce.webp',
    tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Tailwind'],
    repo: 'https://github.com/Kushdeveloper68/CodeAlpha_Simplee-commerceStore',
    year: '2024',
    color: '#4ade80',
  },
  {
    num: '03',
    type: 'Frontend + API',
    title: 'GitHub Explorer',
    desc: 'A developer tool that lets users search any GitHub profile and view repositories, starred repos, and account details in a clean UI.',
    img1: '/projectImage/github.webp',
    img2: '/projectImage/mainpage-github-explorer.webp',
    tags: ['React.js', 'GitHub API', 'Tailwind CSS'],
    repo: 'https://github.com/Kushdeveloper68/Own-Github-Explorer',
    year: '2025',
    color: '#f472b6',
  },
  {
    num: '04',
    type: 'Full Stack',
    title: 'Worker Manager System',
    desc: "A management system to track workers' daily attendance, work hours, salary per day, and complete work history with admin controls.",
    img1: '/projectImage/workerproject.webp',
    img2: '/projectImage/worker-manager-project2.webp',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    repo: 'https://github.com/Kushdeveloper68/worker-project',
    year: '2025',
    color: '#fb923c',
  },
  {
    num: '05',
    type: 'Frontend + API',
    title: 'Interior Home Decking Website',
    desc: 'A visually appealing website for an interior home decking business, showcasing services, portfolio, and contact information with a modern design.',
    img1: '/projectImage/truebuild.webp',
    img2: '/projectImage/truebuild-2.webp',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    repo: 'https://github.com/Kushdeveloper68/apex-web',
    year: '2026',
    color: '#facc15',
  },
  {
    num: '06',
    type: 'Frontend + API + Engines + AI',
    title: 'Virtual Science Lab',
    desc: 'Explore physics, chemistry, and mathematics through interactive 3D simulations, real-time visualizations, and an intelligent AI assistant.',
    img1: '/projectImage/sciencelab-image.webp',
    img2: '/projectImage/chemistry-image.webp',
    tags: ['React.js', 'UI/UX Design', 'Engines', 'Three.js', 'AI Integration'],
    live: 'https://kushdeveloper68.github.io/sciencelab/',
    repo: 'https://github.com/Kushdeveloper68/sciencelab',
    year: '2026',
    color: '#c084fc',
  },
  {
    num: '07',
    type: 'Frontend',
    title: 'Toolify',
    desc: 'A clean, fast, responsive multi-tool web application built with React + Vite. Search across 60+ tools, filter by category, use dark mode, and download your results — all without leaving your browser.',
    img1: '/projectImage/toolify.webp',
    img2: '/projectImage/toolify2.webp',
    tags: ['React.js', 'Vite', 'Dark Mode', '60+ Tools'],
    live: 'https://kushdeveloper68.github.io/toolify/',
    repo: 'https://github.com/Kushdeveloper68/toolify',
    year: '2026',
    color: '#2dd4bf',
  },
  {
    num: '08',
    type: 'Frontend + API',
    title: 'Ayiksolution Agency Website',
    desc: 'A modern, responsive website for Ayiksolution, a digital agency specializing in web development and design. The site features a sleek portfolio, service descriptions, and contact information to attract potential clients.',
    img1: '/projectImage/ayiksolution1.webp',
    img2: '/projectImage/ayiksolution2.webp',
    tags: ['React.js', 'UI/UX Design', 'Tailwind CSS'],
    live: 'https://ayiksolution.vercel.app/',
    year: '2026',
    color: '#fb7185',
  },
];

const mono = "'DM Mono', monospace";
const syne = "'Syne', sans-serif";
const bebas = "'Bebas Neue', sans-serif";

/* ------------------------------------------------------------------
   PREVIEW LIGHTBOX  — rendered in a portal so no transformed ancestor
   (like [data-reveal]) can break `position: fixed`
------------------------------------------------------------------ */
function Lightbox({ project, onClose }) {
  const [shot, setShot] = useState(0);
  const shots = [project.img1, project.img2];
  const closeRef = useRef(null);

  const toggle = useCallback(() => setShot(s => (s + 1) % shots.length), [shots.length]);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') toggle();
    };
    window.addEventListener('keydown', onKey);

    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      html.style.overflow = prevOverflow;
    };
  }, [onClose, toggle]);

  return createPortal(
    <div
      className="kdp-lb"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
      data-lenis-prevent
      onClick={onClose}
    >
      <div className="kdp-lb-card" onClick={e => e.stopPropagation()} style={{ '--c': project.color }}>
        <div className="kdp-lb-head">
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: project.color }}>
              {project.num} · {project.type} · {project.year}
            </div>
            <div style={{ fontFamily: syne, fontWeight: 800, fontSize: 'clamp(1rem, 2.6vw, 1.4rem)', color: '#fff', marginTop: 4, lineHeight: 1.2 }}>
              {project.title}
            </div>
          </div>
          <button ref={closeRef} type="button" className="kdp-lb-close" onClick={onClose} aria-label="Close preview">
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>close</span>
          </button>
        </div>

        <div className="kdp-lb-stage">
          <img
            key={shots[shot]}
            src={shots[shot]}
            alt={`${project.title} screenshot ${shot + 1} of ${shots.length}`}
            className="kdp-lb-img"
            decoding="async"
          />
          {shots.length > 1 && (
            <>
              <button type="button" className="kdp-lb-nav left" onClick={toggle} aria-label="Previous screenshot">
                <span className="material-symbols-outlined" style={{ fontSize: 22 }}>chevron_left</span>
              </button>
              <button type="button" className="kdp-lb-nav right" onClick={toggle} aria-label="Next screenshot">
                <span className="material-symbols-outlined" style={{ fontSize: 22 }}>chevron_right</span>
              </button>
            </>
          )}
        </div>

        <div className="kdp-lb-foot">
          <div className="kdp-lb-thumbs">
            {shots.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`kdp-lb-thumb ${shot === i ? 'on' : ''}`}
                onClick={() => setShot(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-pressed={shot === i}
              >
                <img src={src} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>

          <div className="kdp-lb-actions">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="kdp-btn">
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>open_in_new</span>
                Live Demo
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className={project.live ? 'kdp-btn-ghost' : 'kdp-btn'}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>code</span>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ------------------------------------------------------------------
   PAGE
------------------------------------------------------------------ */
export default function Projects() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [hyperspeedVisible, setHyperspeedVisible] = useState(false);
  const sectionRef = useRef(null);
  const showRef = useRef(null);

  const cur = PROJECTS[active];
  const closeLightbox = useCallback(() => setLightbox(false), []);

  /* Scroll reveal */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const items = el.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);

  /* Only run the WebGL background while the section is on screen */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([entry]) => setHyperspeedVisible(entry.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Warm the cache for what the user is most likely to click next */
  useEffect(() => {
    const n = PROJECTS.length;
    [cur.img2, PROJECTS[(active + 1) % n].img1, PROJECTS[(active + n - 1) % n].img1].forEach(src => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
  }, [active, cur.img2]);

  /* On phones the screenshot sits above the list — bring it into view after a pick */
  const select = (i, fromList = false) => {
    setActive(i);
    if (fromList && window.innerWidth < 1024) {
      showRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const resetBtn = { background: 'transparent', border: 0, font: 'inherit', color: 'inherit' };

  return (
    <>
      <style>{`
        .kdp-img-in { animation: kdp-img-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes kdp-img-in {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }

        .kdp-open {
          position: absolute; inset: 0; z-index: 2; width: 100%; height: 100%;
          cursor: zoom-in; background: transparent; border: 0; padding: 0;
        }
        .kdp-open:focus-visible { outline: 2px solid ${P}; outline-offset: -4px; }

        .kdp-list-item:focus-visible { outline: 2px solid ${P}; outline-offset: -2px; }
        .kdp-thumb:focus-visible     { outline: 2px solid ${P}; outline-offset: 2px; }

        /* ---------- lightbox ---------- */
        .kdp-lb {
          position: fixed; inset: 0; z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          padding: 16px; overflow-y: auto;
          background: rgba(3, 8, 13, 0.94);
          animation: kdp-lb-fade 0.25s ease both;
        }
        @keyframes kdp-lb-fade { from { opacity: 0; } to { opacity: 1; } }

        .kdp-lb-card {
          width: 100%; max-width: 1120px; margin: auto;
          display: flex; flex-direction: column; gap: 14px;
          animation: kdp-lb-pop 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes kdp-lb-pop {
          from { opacity: 0; transform: translateY(14px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .kdp-lb-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }

        .kdp-lb-close, .kdp-lb-nav {
          display: inline-flex; align-items: center; justify-content: center;
          width: 42px; height: 42px; flex-shrink: 0; cursor: pointer;
          border-radius: 50%; color: #fff;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .kdp-lb-close:hover, .kdp-lb-nav:hover {
          background: rgba(255, 255, 255, 0.14); border-color: var(--c, ${P}); transform: scale(1.06);
        }

        .kdp-lb-stage {
          position: relative; border-radius: 14px; overflow: hidden;
          background: #060d14; border: 1px solid rgba(255, 255, 255, 0.09);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
        }
        .kdp-lb-img { display: block; width: 100%; max-height: 68vh; object-fit: contain; animation: kdp-img-in 0.4s ease both; }

        .kdp-lb-nav { position: absolute; top: 50%; margin-top: -21px; background: rgba(6, 13, 20, 0.8); }
        .kdp-lb-nav.left  { left: 12px; }
        .kdp-lb-nav.right { right: 12px; }

        .kdp-lb-foot { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; }
        .kdp-lb-thumbs { display: flex; gap: 10px; }
        .kdp-lb-thumb {
          width: 96px; aspect-ratio: 16 / 9; padding: 0; overflow: hidden; cursor: pointer;
          border-radius: 8px; border: 1.5px solid rgba(255, 255, 255, 0.12); opacity: 0.55;
          transition: opacity 0.2s, border-color 0.2s;
        }
        .kdp-lb-thumb img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
        .kdp-lb-thumb:hover { opacity: 0.9; }
        .kdp-lb-thumb.on { opacity: 1; border-color: var(--c, ${P}); }
        .kdp-lb-actions { display: flex; flex-wrap: wrap; gap: 10px; }

        @media (max-width: 640px) {
          .kdp-lb { padding: 12px; align-items: flex-start; }
          .kdp-lb-nav { width: 36px; height: 36px; margin-top: -18px; }
          .kdp-lb-thumb { width: 78px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .kdp-img-in, .kdp-lb, .kdp-lb-card, .kdp-lb-img, .kdp-float, .kdp-ticker { animation: none !important; }
        }
      `}</style>

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
        <div
          className="absolute top-0 left-0 w-[450px] h-[350px] pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(13,162,231,0.07) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[350px] pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(13,162,231,0.06) 0%, transparent 65%)' }}
        />

        {/* Vertical side label */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:flex items-center gap-2 z-10 opacity-25">
          <span className="kdp-vert" style={{ fontFamily: mono, fontSize: '10px', letterSpacing: '0.2em', color: P }}>
            SELECTED WORKS — 2024/26
          </span>
          <div style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, rgba(13,162,231,0.5), transparent)' }} />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-24 lg:py-32">
          {/* ── HEADER ── */}
          <div className="mb-16 md:mb-20">
            <div data-reveal className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <div style={{ display: 'inline-block', width: '2.5rem', height: '2px', background: P, borderRadius: 2 }} />
              <span style={{ fontFamily: mono, fontSize: '11px', letterSpacing: '0.2em', color: P, textTransform: 'uppercase' }}>
                003 / Selected Work
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
              <div data-reveal data-delay="100">
                <h2 style={{ fontFamily: bebas, fontSize: 'clamp(4.5rem, 9vw, 7.5rem)', lineHeight: 0.9, letterSpacing: '0.04em', color: '#fff' }}>
                  Selected
                </h2>
                <p style={{ fontFamily: bebas, fontSize: 'clamp(4.5rem, 9vw, 7.5rem)', lineHeight: 0.9, letterSpacing: '0.04em', WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}>
                  Work
                </p>
              </div>
              <div data-reveal data-delay="200" className="lg:mb-3 lg:max-w-xs">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                  A focused collection of applications built to solve real problems — strong UI, dependable backend, practical delivery.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="kdp-glow-dot w-1.5 h-1.5 rounded-full block" style={{ backgroundColor: P }} />
                  <span style={{ fontFamily: mono, fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {PROJECTS.length} Projects — More Coming
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════
              MAIN SHOWCASE
              phone  : image → details → list
              laptop : list + details on the left, image on the right
              (solid background on purpose — a blur() sitting on top of
               the animated WebGL layer re-blurs every single frame)
          ══════════════════════════════════════════ */}
          <div
            data-reveal
            data-delay="200"
            className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden mb-6"
            style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(8,15,22,0.94)' }}
          >
            {/* IMAGE */}
            <div
              ref={showRef}
              className="kdp-img-wrap relative overflow-hidden w-full min-w-0 order-1 lg:order-none lg:col-start-6 lg:col-span-7 lg:row-start-1 lg:row-span-2 aspect-video lg:aspect-auto lg:min-h-[480px]"
              style={{ backgroundColor: '#060d14' }}
            >
              <img
                key={cur.num}
                src={cur.img1}
                alt={`Screenshot of ${cur.title} — ${cur.type} project`}
                className="kdp-img-in absolute inset-0 w-full h-full object-cover object-top"
                width="1600"
                height="740"
                decoding="async"
                draggable="false"
              />

              {/* decorative layers — never intercept clicks */}
              <div className="kdp-scanline absolute inset-0 pointer-events-none" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #080f16 0%, rgba(8,15,22,0.4) 40%, rgba(8,15,22,0.1) 100%)' }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(8,15,22,0.5) 0%, transparent 50%)' }}
              />
              <div className="kdp-corner-tl" />
              <div className="kdp-corner-br" />

              {/* Click anywhere on the screenshot to open the preview */}
              <button
                type="button"
                className="kdp-open"
                onClick={() => setLightbox(true)}
                aria-label={`Open preview of ${cur.title}`}
              >
                <span className="kdp-img-hover-label absolute inset-0 flex items-center justify-center">
                  <span
                    className="px-4 py-2 rounded-xl inline-flex items-center gap-2"
                    style={{ background: 'rgba(8,15,22,0.88)', border: '1px solid rgba(13,162,231,0.25)', fontFamily: mono, fontSize: '10px', color: P, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 14 }}>zoom_in</span>
                    Click to preview
                  </span>
                </span>
              </button>

              {/* Top-left type */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <div className="px-2.5 py-1 rounded-lg" style={{ background: 'rgba(8,15,22,0.85)', border: `1px solid ${cur.color}40` }}>
                  <span style={{ fontFamily: mono, fontSize: '9px', color: cur.color, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {cur.type}
                  </span>
                </div>
              </div>

              {/* Top-right number / year */}
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <div className="px-3 py-1.5 rounded-xl text-center" style={{ background: 'rgba(8,15,22,0.85)', border: `1px solid ${cur.color}30` }}>
                  <div style={{ fontFamily: bebas, fontSize: '1.3rem', lineHeight: 1, color: cur.color, letterSpacing: '0.04em' }}>{cur.num}</div>
                  <div style={{ fontFamily: mono, fontSize: '8px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{cur.year}</div>
                </div>
              </div>

              {/* Bottom: title + actions (buttons re-enable pointer events) */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 pointer-events-none">
                <div className="flex items-end justify-between gap-4">
                  <div style={{ fontFamily: bebas, fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: '#fff', minWidth: 0 }}>
                    {cur.title}
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightbox(true)}
                    className="kdp-btn pointer-events-auto flex-shrink-0 relative z-20"
                    style={{ height: 40, padding: '0 1.1rem', fontSize: '0.75rem' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 15 }}>visibility</span>
                    Preview
                  </button>
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <div
              className="order-2 lg:order-none lg:col-span-5 lg:row-start-2 lg:border-r p-6 flex flex-col justify-end gap-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <div className="flex flex-wrap gap-1.5">
                {cur.tags.map(t => (
                  <span key={t} className="kdp-tag">{t}</span>
                ))}
              </div>

              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.84rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                {cur.desc}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {cur.live && (
                  <a href={cur.live} target="_blank" rel="noopener noreferrer" className="kdp-btn">
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>open_in_new</span>
                    Live Demo
                  </a>
                )}
                {cur.repo && (
                  <a href={cur.repo} target="_blank" rel="noopener noreferrer" className={cur.live ? 'kdp-btn-ghost' : 'kdp-btn'}>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>code</span>
                    {cur.live ? 'Source Code' : 'View on GitHub'}
                  </a>
                )}
              </div>
            </div>

            {/* LIST */}
            <div
              className="order-3 lg:order-none lg:col-span-5 lg:row-start-1 lg:border-r flex flex-col"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.05)' }}
            >
              <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: mono, fontSize: '9px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Projects Index
                </span>
                <span style={{ fontFamily: mono, fontSize: '9px', color: 'rgba(13,162,231,0.5)', letterSpacing: '0.15em' }}>
                  {String(active + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                </span>
              </div>

              {PROJECTS.map((p, i) => (
                <button
                  key={p.num}
                  type="button"
                  className={`kdp-list-item ${active === i ? 'active' : ''}`}
                  aria-current={active === i ? 'true' : undefined}
                  onClick={() => select(i, true)}
                  style={{ ...resetBtn, width: '100%', textAlign: 'left', borderTop: 0, borderLeft: 0, borderRight: 0 }}
                >
                  <div className="kdp-active-bar" />
                  <div className="kdp-num" style={{ color: active === i ? p.color : 'rgba(255,255,255,0.18)' }}>{p.num}</div>

                  <div className="min-w-0">
                    <div style={{ fontFamily: syne, fontWeight: 700, fontSize: '0.88rem', color: active === i ? '#fff' : 'rgba(255,255,255,0.6)', lineHeight: 1.3, transition: 'color 0.25s', letterSpacing: '0.02em' }}>
                      {p.title}
                    </div>
                    <div style={{ fontFamily: mono, fontSize: '9px', color: active === i ? p.color : 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '3px', transition: 'color 0.25s' }}>
                      {p.type} · {p.year}
                    </div>
                  </div>

                  <div style={{ transition: 'transform 0.25s, opacity 0.25s', transform: active === i ? 'translateX(0)' : 'translateX(-4px)', opacity: active === i ? 1 : 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: p.color }}>arrow_forward</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── THUMBNAIL STRIP ── */}
          <div data-reveal data-delay="300" className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
            {PROJECTS.map((p, i) => (
              <button
                key={p.num}
                type="button"
                onClick={() => select(i, true)}
                aria-label={`Show ${p.title}`}
                aria-pressed={active === i}
                className="kdp-thumb relative rounded-xl overflow-hidden cursor-pointer group block"
                style={{
                  ...resetBtn,
                  padding: 0,
                  aspectRatio: '16/9',
                  border: `1px solid ${active === i ? p.color + '50' : 'rgba(255,255,255,0.06)'}`,
                  boxShadow: active === i ? `0 0 20px ${p.color}20` : 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                  transform: active === i ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <img
                  src={p.img1}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  width="400"
                  height="225"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(8,15,22,0.9) 0%, rgba(8,15,22,0.3) 100%)' }} />

                {active === i && <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: p.color }} />}

                <div className="absolute bottom-2 left-3 right-2 text-left">
                  <div style={{ fontFamily: mono, fontSize: '8px', color: active === i ? p.color : 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    {p.num}
                  </div>
                  <div style={{ fontFamily: syne, fontWeight: 700, fontSize: '0.7rem', color: active === i ? '#fff' : 'rgba(255,255,255,0.55)', lineHeight: 1.3, marginTop: '2px' }}>
                    {p.title}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* ── GITHUB CTA ── */}
          <div data-reveal data-delay="400" className="text-center">
            <div style={{ fontFamily: mono, fontSize: '10px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
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
        <div className="relative z-10 py-5 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} aria-hidden="true">
          <div style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
            <div className="kdp-ticker" style={{ gap: 0 }}>
              {[...PROJECTS, ...PROJECTS].map(({ title }, i) => (
                <div key={i} className="flex items-center gap-2" style={{ marginRight: '3rem', fontFamily: mono, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', whiteSpace: 'nowrap' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '12px', color: 'rgba(13,162,231,0.4)' }}>arrow_outward</span>
                  {title}
                  <span style={{ color: 'rgba(13,162,231,0.2)', marginLeft: '1rem' }}>✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox && <Lightbox key={cur.num} project={cur} onClose={closeLightbox} />}
    </>
  );
}
