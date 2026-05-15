import { useState, useEffect, useRef } from 'react';
import FloatingLines from '../components/FloatingLines';

const P = '#0da2e7';

const SERVICES = [
  {
    icon: 'web',
    num: '01',
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive UIs built with React, Tailwind CSS, and modern animation libraries. Fast, accessible, and visually stunning.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    color: '#0da2e7',
  },
  {
    icon: 'dns',
    num: '02',
    title: 'Backend Development',
    desc: 'Scalable REST APIs, authentication flows, database design, and server-side logic using Node.js, Express, and MongoDB.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    color: '#22c55e',
  },
  {
    icon: 'deployed_code',
    num: '03',
    title: 'Full Stack Web Apps',
    desc: 'End-to-end MERN stack applications — from database schema to polished UI — designed and deployed for real users.',
    tags: ['MERN Stack', 'REST API', 'Deployment', 'MongoDB Atlas'],
    color: '#a855f7',
  },
  {
    icon: 'design_services',
    num: '04',
    title: 'UI/UX Design',
    desc: 'Clean, modern interface design with Figma. From wireframes to high-fidelity prototypes with a focus on user experience.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: '#f97316',
  },
  {
    icon: 'integration_instructions',
    num: '05',
    title: 'API Integration',
    desc: 'Seamless third-party API integrations — payment gateways, social auth, maps, cloud storage, and more.',
    tags: ['REST APIs', 'OAuth', 'Stripe', 'Cloudinary'],
    color: '#eab308',
  },
  {
    icon: 'speed',
    num: '06',
    title: 'Performance & SEO',
    desc: 'Code optimization, lazy loading, bundle splitting, and SEO best practices to make your site fast and discoverable.',
    tags: ['Core Web Vitals', 'SEO', 'Lighthouse', 'Code Splitting'],
    color: '#ec4899',
  },
];

export default function ServicesPage() {
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(null);

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

  return (
    <>
  
      <section id="services" ref={sectionRef} style={{ backgroundColor: '#0b1720', color: '#fff', position: 'relative', overflow: 'hidden' }}>

        {/* FloatingLines bg — elegant flowing waves perfect for services */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.55 }}>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={8}
            lineDistance={8}
            bendRadius={8}
            bendStrength={-2}
            interactive={false}
            parallax={false}
            animationSpeed={0.8}
            gradientStart="#e945f5"
            gradientMid="#0da2e7"
            gradientEnd="#6a6a6a"
          />
        </div>

        {/* Grid overlay */}
        <div className="srv-grid-bg absolute inset-0 pointer-events-none z-[1]" style={{ opacity: 0.6 }} />

        {/* Dark vignette so text pops */}
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(11,23,32,0.4) 0%, rgba(11,23,32,0.85) 70%)' }} />

        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-[420px] h-[320px] pointer-events-none z-[2]"
          style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(229,69,245,0.06) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-[420px] h-[320px] pointer-events-none z-[2]"
          style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(13,162,231,0.06) 0%, transparent 65%)' }} />

        {/* Vertical side label */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-2 z-10 opacity-25 pointer-events-none">
          <div style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, rgba(229,69,245,0.5), transparent)' }} />
          <span className="srv-vert" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', color: '#e945f5' }}>SERVICES — 2025</span>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-24 lg:py-32">

          {/* ── HEADER ── */}
          <div className="mb-16 lg:mb-20">
            <div data-reveal className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <div style={{ display: 'inline-block', width: '2.5rem', height: '2px', background: '#e945f5', borderRadius: 2 }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.2em', color: '#e945f5', textTransform: 'uppercase' }}>
                004 / Services
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
              <div data-reveal data-delay="100">
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '0.04em', color: '#fff' }}>
                  Services &amp;
                </div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '0.04em', WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}>
                  Expertise
                </div>
              </div>
              <div data-reveal data-delay="200" className="lg:mb-3 max-w-sm">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                  From concept to deployment — complete digital solutions built with precision, passion, and a focus on real results.
                </p>
              </div>
            </div>
          </div>

          {/* ── SERVICES GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {SERVICES.map(({ icon, num, title, desc, tags, color }, i) => (
              <div key={num} data-reveal data-delay={`${(i % 3 + 1) * 100}`}>
                <div
                  className="srv-card"
                  onMouseEnter={() => setHovered(num)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Ghost number watermark */}
                  <div className="srv-corner-num" style={{ color }}>{num}</div>

                  {/* Glow */}
                  <div className="srv-glow" style={{ background: `radial-gradient(ellipse at 20% 20%, ${color}15 0%, transparent 65%)` }} />

                  {/* Icon box */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}14`, border: `1px solid ${color}28` }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px', color }}>{icon}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#fff', letterSpacing: '0.02em', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                      {title}
                    </h3>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.82rem', color: 'rgba(255,255,255,0.42)', lineHeight: 1.75 }}>
                      {desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {tags.map(t => (
                      <span key={t} className="srv-tag" style={{ backgroundColor: `${color}0e`, borderColor: `${color}28`, color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── DIVIDER ── */}
          <div data-reveal className="srv-divider mb-12" />

          {/* ── CTA ── */}
          <div data-reveal data-delay="200" className="text-center">
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Have a project in mind?
            </p>
            <a href="#connect" className="srv-btn">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>send</span>
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Ticker */}
        <div className="relative z-10 py-5 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
            <div className="srv-ticker">
              {[...SERVICES, ...SERVICES, ...SERVICES].map(({ title, icon, color }, i) => (
                <div key={i} className="flex items-center gap-2" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', whiteSpace: 'nowrap' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '12px', color: `${color}88` }}>{icon}</span>
                  {title}
                  <span style={{ color: 'rgba(229,69,245,0.25)', marginLeft: '1.5rem' }}>✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}