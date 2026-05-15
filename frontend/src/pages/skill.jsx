import { useState, useEffect, useRef } from "react";
import { DotField } from "../components";

const P = "#0da2e7";
const BG = "#0c1a20";

const CAPABILITIES = [
  {
    icon: "architecture",
    title: "Full Stack Architecture",
    desc: "Frontend and backend development using modern JavaScript frameworks, REST APIs, and database-driven architectures.",
    tag: "01",
  },
  {
    icon: "palette",
    title: "Frontend Engineering",
    desc: "Responsive, accessible, and performance-focused UI development using React, Tailwind CSS, and modern design principles.",
    tag: "02",
  },
  {
    icon: "dns",
    title: "Backend & Databases",
    desc: "API development, database design, and server-side logic using Node.js, MongoDB, and RESTful architecture.",
    tag: "03",
  },
  {
    icon: "devices",
    title: "Deployment & Cloud",
    desc: "Application hosting, cloud basics, and deployment workflows using Git, CLI tools, and Google Cloud Platform.",
    tag: "04",
  },
];

const FRONTEND = [
  { label: "React / Vite", icon: "code", accent: "#22d3ee", mono: "UI Library" },
  { label: "Tailwind CSS", icon: "css", accent: "#60a5fa", mono: "Styling" },
  { label: "JavaScript", icon: "javascript", accent: "#facc15", mono: "Language" },
  { label: "Figma", icon: "view_in_ar", accent: "#f472b6", mono: "Design" },
];

const BACKEND = [
  { label: "Node.js", icon: "data_object", accent: "#4ade80", mono: "Runtime" },
  { label: "Python", icon: "terminal", accent: "#facc15", mono: "Language" },
  { label: "MongoDB", icon: "database", accent: "#60a5fa", mono: "Database" },
  { label: "REST APIs", icon: "api", accent: "#c084fc", mono: "Interface" },
];

const TOOLS = [
  { icon: "code", label: "VS Code", color: "#22d3ee" },
  { icon: "terminal", label: "CLI", color: "#4ade80" },
  { icon: "terminal", label: "Linux", color: "#f97316" },
  { icon: "code", label: "Git", color: "#f472b6" },
  { icon: "design_services", label: "Figma", color: "#a78bfa" },
  { icon: "api", label: "Postman", color: "#fb923c" },
];

function CapCard({ icon, title, desc, tag, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="kds-cap-card relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Big ghost number */}
      <div className="absolute top-3 right-4 pointer-events-none select-none"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '5rem', lineHeight: 1, color: 'rgba(13,162,231,0.06)', letterSpacing: '0.04em' }}>
        {tag}
      </div>

      {/* Icon */}
      <div className="kds-icon-box w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(13,162,231,0.1)', border: '1px solid rgba(13,162,231,0.2)' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '20px', color: P }}>{icon}</span>
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#fff', lineHeight: 1.3, letterSpacing: '0.02em' }}>
        {title}
      </h3>

      {/* Desc */}
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
        {desc}
      </p>

      {/* Hover bottom bar */}
      <div className="mt-auto pt-3 flex items-center gap-2 opacity-0 kds-cap-reveal" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ width: 16, height: 1, background: P }} />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: P, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Capability {tag}
        </span>
      </div>

      {/* Hover glow corner */}
      <div className="kds-cap-glow absolute -bottom-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(13,162,231,0.12) 0%, transparent 70%)', opacity: hovered ? 1 : 0, transition: 'opacity 0.4s' }} />
    </div>
  );
}

function SkillOrb({ label, icon, accent, mono, index }) {
  return (
    <div className="kds-orb group flex flex-col items-center gap-3" style={{ animationDelay: `${index * 0.15}s` }}>
      {/* Ring */}
      <div className="relative">
        <div className="kds-orb-ring absolute inset-0 rounded-full pointer-events-none"
          style={{ border: `1px solid ${accent}22`, transform: 'scale(1.35)' }} />
        <div
          className="kds-orb-body relative w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center gap-1.5"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${accent}18, rgba(255,255,255,0.03) 70%)`,
            border: `1px solid ${accent}30`,
          }}
        >
          {/* Glow bg */}
          <div className="kds-orb-glow absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{ background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`, filter: 'blur(8px)' }} />

          <span className="material-symbols-outlined relative z-10 transition-transform duration-300 group-hover:scale-110"
            style={{ fontSize: '26px', color: accent }}>{icon}</span>
          <span className="relative z-10" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '9px', color: 'rgba(255,255,255,0.9)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {label}
          </span>
        </div>
      </div>
      {/* Mono label below */}
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: `${accent}77`, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        {mono}
      </span>
    </div>
  );
}

export default function SkillsPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <>
     

      <section
        id="skill"
        ref={sectionRef}
        style={{ backgroundColor: BG, color: '#fff', position: 'relative', zIndex: 0, overflow: 'hidden' }}
      >
        {/* Grid bg */}
        <div className="kds-grid-bg absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }} />

        {/* DotField */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <DotField
            dotRadius={2.5}
            dotSpacing={18}
            cursorRadius={380}
            cursorForce={0.18}
            bulgeOnly
            bulgeStrength={60}
            glowRadius={150}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(13,162,231,0.18)"
            gradientTo="rgba(13,162,231,0.08)"
            glowColor="#0c1a20"
          />
          <div className="absolute inset-0" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(13,162,231,0.07) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(13,162,231,0.05) 0%, transparent 65%)' }} />

        {/* Vertical side label */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:flex items-center gap-2 opacity-25">
          <div style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, rgba(13,162,231,0.5), transparent)' }} />
          <span className="kds-vert" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', color: P }}>TECH ARSENAL — 2025</span>
        </div>

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <div className="relative z-10 min-h-screen flex items-center justify-center py-24 px-6 md:px-12">
          <div className="max-w-[1200px] w-full mx-auto grid lg:grid-cols-12 gap-16 items-center">

            {/* Left: copy */}
            <div className="lg:col-span-6 flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1">

              {/* Section label */}
              <div data-reveal data-delay="100" className="flex items-center gap-3 justify-center lg:justify-start">
                <div style={{ display: 'inline-block', width: '2.5rem', height: '2px', background: P, borderRadius: 2 }} />
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.2em', color: P, textTransform: 'uppercase' }}>
                  002 / Tech Arsenal
                </span>
              </div>

              {/* Headline */}
              <div data-reveal data-delay="200">
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '0.04em', color: '#fff' }}>
                  Technical
                </div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '0.04em', WebkitTextStroke: '1.5px rgba(255,255,255,0.22)', color: 'transparent' }}>
                  Arsenal
                </div>
              </div>

              {/* Body */}
              <div data-reveal data-delay="300">
                <div style={{ width: 36, height: 2, background: 'rgba(13,162,231,0.3)', borderRadius: 2, marginBottom: '1rem' }} className="mx-auto lg:mx-0" />
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '44ch' }} className="mx-auto lg:mx-0">
                  A focused stack of <span style={{ color: '#fff', fontWeight: 500 }}>modern web technologies</span> I use to design, develop, deploy, and maintain real-world products — from pixel to production.
                </p>
              </div>

              {/* Status pill + CTAs */}
              <div data-reveal data-delay="400" className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(13,162,231,0.08)', border: '1px solid rgba(13,162,231,0.22)' }}>
                  <span className="kds-pulse-dot w-1.5 h-1.5 rounded-full block" style={{ backgroundColor: P }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: P, letterSpacing: '0.15em', textTransform: 'uppercase' }}>System Online</span>
                </div>
              </div>

              <div data-reveal data-delay="500" className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="#services">
                  <button className="kds-btn-primary">Explore Skills</button>
                </a>
                <a href="#project">
                  <button className="kds-btn-ghost">
                    View Projects
                    <span className="material-symbols-outlined" style={{ fontSize: '15px', color: P }}>arrow_forward</span>
                  </button>
                </a>
              </div>
            </div>

            {/* Right: Sphere visual */}
            <div data-reveal="right" data-delay="200" className="lg:col-span-6 flex items-center justify-center order-1 lg:order-2">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Core glow */}
                <div className="absolute inset-0 m-auto w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(13,162,231,0.2) 0%, transparent 70%)', filter: 'blur(20px)' }} />

                {/* Center icon */}
                <div className="absolute inset-0 m-auto w-20 h-20 rounded-full flex items-center justify-center z-10"
                  style={{ background: 'linear-gradient(135deg, rgba(13,162,231,0.5), rgba(13,162,231,0.1))', border: '1px solid rgba(13,162,231,0.4)' }}>
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '32px' }}>code</span>
                </div>

                {/* Orbit rings */}
                <div className="kds-spin absolute inset-0 rounded-full" style={{ border: '1px solid rgba(13,162,231,0.08)', transform: 'scale(1.5)' }} />
                <div className="kds-spin-rev absolute inset-0 rounded-full" style={{ border: '1px dashed rgba(13,162,231,0.13)', transform: 'scale(1.9)' }} />
                <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(13,162,231,0.05)', transform: 'scale(2.3)' }} />

                {/* Orbit tags */}
                {[
                  { label: 'React', icon: 'javascript', pos: { top: '-16px', left: '50%', transform: 'translateX(-50%)' }, delay: '0s' },
                  { label: 'Node.js', icon: 'dns', pos: { bottom: '24px', right: '-10px', transform: 'translateX(100%)' }, delay: '0.8s' },
                  { label: 'MongoDB', icon: 'database', pos: { bottom: '24px', left: '-10px', transform: 'translateX(-100%)' }, delay: '1.6s' },
                  { label: 'Figma', icon: 'brush', pos: { top: '50%', left: '-20px', transform: 'translate(-100%, -50%)' }, delay: '0.4s' },
                  { label: 'Tailwind', icon: 'css', pos: { top: '50%', right: '-20px', transform: 'translate(100%, -50%)' }, delay: '1.2s' },
                ].map(({ label, icon, pos, delay }) => (
                  <div key={label} className="kds-float absolute" style={{ ...pos, animationDelay: delay, zIndex: 20 }}>
                    <div className="kds-orbit-tag">
                      <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>{icon}</span>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30" style={{ animation: 'kds-float 2s ease-in-out infinite' }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>Scroll</span>
            <span className="material-symbols-outlined" style={{ fontSize: '14px', color: P }}>keyboard_arrow_down</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            CAPABILITIES
        ═══════════════════════════════════════ */}
        <div className="kds-alt-bg relative z-10 py-20 px-6 md:px-12">
          <div className="kds-divider mb-12" />
          <div className="max-w-[1200px] mx-auto">

            {/* Header */}
            <div data-reveal className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div style={{ width: '3px', height: '1.75rem', background: P, borderRadius: 2 }} />
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Core Capabilities
                </h3>
              </div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'rgba(13,162,231,0.4)', letterSpacing: '0.18em', textTransform: 'uppercase' }} className="hidden sm:block">
                01 // Overview
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CAPABILITIES.map((c, i) => (
                <div key={c.icon} data-reveal data-delay={`${(i + 1) * 100}`}>
                  <CapCard {...c} index={i} />
                </div>
              ))}
            </div>
          </div>
          <div className="kds-divider mt-12" />
        </div>

        {/* ═══════════════════════════════════════
            SKILLS UNIVERSE
        ═══════════════════════════════════════ */}
        <div className="relative z-10 py-24 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">

            {/* Universe header */}
            <div data-reveal className="text-center mb-20">
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '0.04em' }}>
                <span className="kds-gradient">Skills</span>
                {' '}
                <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}>Universe</span>
              </div>
              <p data-reveal data-delay="200" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.75rem', letterSpacing: '0.02em' }}>
                An interactive constellation of technologies powering my capabilities.
              </p>
            </div>

            {/* Frontend Galaxy */}
            <div data-reveal className="mb-20">
              <div className="flex items-center gap-4 mb-10" style={{ borderLeft: '1px solid rgba(255,255,255,0.06)', paddingLeft: '1rem' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#22d3ee' }}>code_blocks</span>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Frontend <span style={{ color: '#22d3ee' }}>Galaxy</span>
                  </h4>
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(34,211,238,0.35)', letterSpacing: '0.18em', textTransform: 'uppercase', marginLeft: 'auto' }} className="hidden sm:block">
                  02 // Visual
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-10 md:gap-16 py-6">
                {FRONTEND.map((b, i) => (
                  <div key={b.label} data-reveal data-delay={`${(i + 1) * 100}`}>
                    <SkillOrb {...b} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div data-reveal className="kds-divider my-16" />

            {/* Backend Nebula */}
            <div data-reveal className="mb-20">
              <div className="flex items-center justify-end gap-4 mb-10" style={{ borderRight: '1px solid rgba(255,255,255,0.06)', paddingRight: '1rem' }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(168,85,247,0.35)', letterSpacing: '0.18em', textTransform: 'uppercase', marginRight: 'auto' }} className="hidden sm:block">
                  03 // System
                </span>
                <div>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Backend <span style={{ color: '#c084fc' }}>Nebula</span>
                  </h4>
                </div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(192,132,252,0.1)', border: '1px solid rgba(192,132,252,0.2)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#c084fc' }}>dns</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-10 md:gap-16 py-6">
                {BACKEND.map((b, i) => (
                  <div key={b.label} data-reveal data-delay={`${(i + 1) * 100}`}>
                    <SkillOrb {...b} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div data-reveal className="kds-divider mb-16" />

            {/* Tools & Platforms */}
            <div data-reveal className="mb-20">
              <div className="flex justify-center mb-10">
                <div className="flex items-center gap-2.5 px-6 py-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(13,162,231,0.18)', boxShadow: '0 0 20px rgba(13,162,231,0.08)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px', color: P }}>construction</span>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '11px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Tools & Platforms
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-2xl mx-auto">
                {TOOLS.map(({ icon, label, color }, i) => (
                  <div key={label} data-reveal data-delay={`${(i + 1) * 80}`} className="kds-tool group">
                    <div className="kds-tool-glow" style={{ background: `radial-gradient(circle at 50% 100%, ${color}18 0%, transparent 70%)` }} />
                    <span className="material-symbols-outlined relative z-10 transition-colors duration-300"
                      style={{ fontSize: '22px', color: `${color}99` }}>{icon}</span>
                    <span className="relative z-10 transition-colors duration-300" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CTA Block ── */}
            <div data-reveal data-delay="200">
              <div className="kds-cta-wrap">
                <div className="kds-cta-inner text-center">
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1, letterSpacing: '0.04em', color: '#fff', marginBottom: '1rem' }}>
                    Ready to Build Something{' '}
                    <span className="kds-gradient">Real?</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', maxWidth: '42ch', margin: '0 auto 1.75rem', lineHeight: 1.8 }}>
                    Clean code, practical solutions, continuous learning — let's turn your idea into a working product.
                  </p>
                  <a href="#connect">
                    <button className="kds-btn-primary">Start Collaboration</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom ticker ── */}
        <div className="relative z-10 py-5 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
            <div className="kds-ticker">
              {[...FRONTEND, ...BACKEND, ...FRONTEND, ...BACKEND].map(({ label, icon }, i) => (
                <div key={i} className="flex items-center gap-2" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '13px', color: 'rgba(13,162,231,0.45)' }}>{icon}</span>
                  {label}
                  <span style={{ color: 'rgba(13,162,231,0.22)', marginLeft: '1.5rem' }}>✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}