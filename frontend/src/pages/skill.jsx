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

/* ─── Neural Skill Graph data ───────────────────────────────
   One core node → 3 category hubs → 12 leaf skills.
   Straight-line "circuit" connections, positioned with polar
   coordinates so the whole thing stays cleanly responsive.
──────────────────────────────────────────────────────────── */
const GRAPH_CENTER = { x: 500, y: 300 };
const HUB_RADIUS = 175;
const LEAF_RADIUS = 140;
const LEAF_SPREAD = 100; // degrees

function polar(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const HUB_DEFS = [
  { id: "frontend", label: "Frontend", icon: "code_blocks", color: "#22d3ee", angle: 210 },
  { id: "backend",  label: "Backend",  icon: "dns",          color: "#c084fc", angle: 330 },
  { id: "tools",    label: "Tools & Platforms", icon: "construction", color: "#fb923c", angle: 90 },
];

const SKILL_DEFS = {
  frontend: [
    { id: "react",     label: "React",        icon: "code",        core: true,  level: "Core Stack",       desc: "Primary UI library — component architecture, hooks, and state-driven interfaces.", usedIn: "StyleForge, EventCure" },
    { id: "nextjs",    label: "Next.js",       icon: "layers",      core: false, level: "Actively Building", desc: "Framework layer for routing and production-ready React apps.", usedIn: "Personal Portfolio" },
    { id: "typescript",label: "TypeScript",    icon: "data_object", core: false, level: "Actively Building", desc: "Typed JavaScript for safer refactors and fewer runtime surprises.", usedIn: "Newer builds" },
    { id: "tailwind",  label: "Tailwind CSS",  icon: "css",         core: true,  level: "Core Stack",       desc: "Utility-first styling — fast iteration without ever leaving the markup.", usedIn: "EventCure, StyleForge" },
  ],
  backend: [
    { id: "node",    label: "Node.js",   icon: "dns",      core: true,  level: "Core Stack",  desc: "Server runtime powering APIs, business logic, and backend services.", usedIn: "EventCure backend" },
    { id: "mongodb", label: "MongoDB",   icon: "database", core: true,  level: "Core Stack",  desc: "Document database for flexible, schema-driven data models.", usedIn: "EventCure, Toolify" },
    { id: "graphql", label: "GraphQL",   icon: "hub",      core: false, level: "Exploring",   desc: "Query layer explored for precise, client-driven data fetching.", usedIn: "API experiments" },
    { id: "rest",    label: "REST APIs", icon: "api",      core: false, level: "Comfortable", desc: "Designing and consuming clean, predictable HTTP interfaces.", usedIn: "StyleForge, Toolify" },
  ],
  tools: [
    { id: "git",    label: "Git",    icon: "commit",          core: false, level: "Daily Driver", desc: "Version control — branching, history, and collaborative workflows.", usedIn: "Every project" },
    { id: "kali",   label: "Kali Linux", icon: "security",     core: false, level: "Comfortable", desc: "Security-focused Linux environment for testing and exploration.", usedIn: "Dual-boot dev setup" },
    { id: "figma",  label: "Figma",  icon: "design_services", core: false, level: "Comfortable", desc: "Interface design — wireframes, prototypes, and brand direction.", usedIn: "EventCure brand identity" },
    { id: "vscode", label: "VS Code", icon: "terminal",       core: false, level: "Daily Driver", desc: "Editor of choice — extensions, debugging, and terminal workflows.", usedIn: "Every project" },
  ],
};

function buildGraph() {
  const hubs = HUB_DEFS.map((h) => ({ ...h, ...polar(GRAPH_CENTER.x, GRAPH_CENTER.y, HUB_RADIUS, h.angle) }));
  const leaves = [];
  hubs.forEach((hub) => {
    const skills = SKILL_DEFS[hub.id];
    const count = skills.length;
    skills.forEach((s, i) => {
      const angle = hub.angle - LEAF_SPREAD / 2 + (i * LEAF_SPREAD) / (count - 1);
      const pos = polar(hub.x, hub.y, LEAF_RADIUS, angle);
      leaves.push({ ...s, ...pos, hubId: hub.id, color: hub.color });
    });
  });
  return { hubs, leaves };
}

const GRAPH = buildGraph();

function NeuralSkillGraph() {
  const [activeId, setActiveId] = useState("react");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  const activeSkill = GRAPH.leaves.find((l) => l.id === activeId) || GRAPH.leaves[0];
  const activeHub = GRAPH.hubs.find((h) => h.id === activeSkill.hubId);

  return (
    <div data-reveal data-delay="300">
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
        {HUB_DEFS.map((h) => (
          <div key={h.id} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: h.color, boxShadow: `0 0 8px ${h.color}` }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
              {h.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile swipe hint */}
      <div className="flex md:hidden items-center justify-center gap-1.5 mb-3 opacity-40">
        <span className="material-symbols-outlined nsg-hint" style={{ fontSize: '14px', color: P }}>swipe</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
          Swipe to explore
        </span>
      </div>

      {/* Graph */}
      <div className="nsg-scroll w-full overflow-x-auto md:overflow-visible rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
        <svg viewBox="0 0 1000 700" style={{ minWidth: '680px', width: '100%', height: 'auto', display: 'block' }} role="img" aria-label="Interactive skill graph">
          {/* Core → Hub connections */}
          {GRAPH.hubs.map((hub) => {
            const isActive = activeHub?.id === hub.id;
            return (
              <g key={`core-${hub.id}`}>
                <path
                  className="nsg-path"
                  d={`M${GRAPH_CENTER.x},${GRAPH_CENTER.y} L${hub.x},${hub.y}`}
                  stroke={hub.color}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={isActive ? 0.55 : 0.18}
                  fill="none"
                />
                {!reduceMotion && (
                  <circle r="3" fill={hub.color}>
                    <animateMotion
                      dur="2.6s"
                      repeatCount="indefinite"
                      path={`M${GRAPH_CENTER.x},${GRAPH_CENTER.y} L${hub.x},${hub.y}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Hub → Leaf connections */}
          {GRAPH.leaves.map((leaf) => {
            const hub = GRAPH.hubs.find((h) => h.id === leaf.hubId);
            const isActive = activeId === leaf.id;
            return (
              <g key={`edge-${leaf.id}`}>
                <path
                  className="nsg-path"
                  d={`M${hub.x},${hub.y} L${leaf.x},${leaf.y}`}
                  stroke={leaf.color}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={isActive ? 0.6 : 0.15}
                  fill="none"
                />
                {!reduceMotion && (
                  <circle r="2.2" fill={leaf.color} opacity="0.85">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${(leaf.id.length % 5) * 0.3}s`}
                      path={`M${hub.x},${hub.y} L${leaf.x},${leaf.y}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Core node */}
          <g className="nsg-core-glow">
            <circle cx={GRAPH_CENTER.x} cy={GRAPH_CENTER.y} r="48" fill="rgba(13,162,231,0.1)" stroke={P} strokeWidth="1.5" />
            <circle cx={GRAPH_CENTER.x} cy={GRAPH_CENTER.y} r="34" fill="#0c1a20" stroke={P} strokeOpacity="0.4" />
            <foreignObject x={GRAPH_CENTER.x - 30} y={GRAPH_CENTER.y - 30} width="60" height="60">
              <div className="w-full h-full flex flex-col items-center justify-center gap-0.5" style={{ overflow: 'hidden' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: P, lineHeight: 1 }}>memory</span>
              </div>
            </foreignObject>
            <text x={GRAPH_CENTER.x} y={GRAPH_CENTER.y + 62} textAnchor="middle" fill="#fff" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '13px', letterSpacing: '0.08em' }}>
              KUSH.DEV
            </text>
          </g>

          {/* Hub nodes */}
          {GRAPH.hubs.map((hub) => (
            <g key={hub.id} transform={`translate(${hub.x},${hub.y})`}>
              <circle r="30" fill="rgba(255,255,255,0.03)" stroke={hub.color} strokeOpacity="0.5" strokeWidth="1.5" />
              <foreignObject x="-16" y="-16" width="32" height="32">
                <div className="w-full h-full flex items-center justify-center" style={{ overflow: 'hidden' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '17px', color: hub.color, lineHeight: 1 }}>{hub.icon}</span>
                </div>
              </foreignObject>
              <text
                y={hub.angle === 90 ? 52 : -42}
                textAnchor="middle"
                fill="#fff"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '10.5px', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.75 }}
              >
                {hub.label}
              </text>
            </g>
          ))}

          {/* Leaf nodes */}
          {GRAPH.leaves.map((leaf) => {
            const isActive = activeId === leaf.id;
            const labelBelow = leaf.y > GRAPH_CENTER.y;
            return (
              <g
                key={leaf.id}
                className="nsg-node"
                transform={`translate(${leaf.x},${leaf.y})`}
                role="button"
                tabIndex={0}
                aria-label={`${leaf.label} — ${leaf.desc}`}
                onMouseEnter={() => setActiveId(leaf.id)}
                onFocus={() => setActiveId(leaf.id)}
                onClick={() => setActiveId(leaf.id)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveId(leaf.id); }}
              >
                <circle
                  className="nsg-ring"
                  r={leaf.core ? 21 : 18}
                  fill={isActive ? `${leaf.color}22` : "rgba(255,255,255,0.02)"}
                  stroke={leaf.color}
                  strokeOpacity={isActive ? 1 : 0.45}
                  strokeWidth={leaf.core ? 2 : 1.2}
                  strokeDasharray={leaf.core ? "0" : "2 2"}
                />
                <foreignObject x="-11" y="-11" width="22" height="22">
                  <div className="w-full h-full flex items-center justify-center" style={{ overflow: 'hidden' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '13px', color: leaf.color, lineHeight: 1 }}>{leaf.icon}</span>
                  </div>
                </foreignObject>
                <text
                  y={labelBelow ? 34 : -28}
                  textAnchor="middle"
                  fill="#fff"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '10.5px', opacity: isActive ? 1 : 0.65, letterSpacing: '0.02em' }}
                >
                  {leaf.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Signal panel */}
      <div key={activeSkill.id} className="nsg-panel-anim mt-6 mb-6 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
        style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid ${activeSkill.color}33` }}>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${activeSkill.color}18`, border: `1px solid ${activeSkill.color}40` }}>
            <span className="material-symbols-outlined" style={{ fontSize: '22px', color: activeSkill.color }}>{activeSkill.icon}</span>
          </div>
          <div className="sm:hidden">
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1rem', color: '#fff' }}>{activeSkill.label}</h4>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: activeSkill.color }}>{activeSkill.level}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="hidden sm:flex items-center gap-2.5 mb-1.5">
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>{activeSkill.label}</h4>
            <span className="px-2 py-[2px] rounded-full" style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: activeSkill.color, background: `${activeSkill.color}18`, border: `1px solid ${activeSkill.color}35` }}>
              {activeSkill.level}
            </span>
            {activeSkill.core && (
              <span className="px-2 py-[2px] rounded-full" style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: P, background: 'rgba(13,162,231,0.12)', border: '1px solid rgba(13,162,231,0.3)' }}>
                Core
              </span>
            )}
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
            {activeSkill.desc}
          </p>
          <p className="mt-2" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.35)' }}>
            used in — <span style={{ color: 'rgba(255,255,255,0.6)' }}>{activeSkill.usedIn}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

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
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '0.04em', color: '#fff' }}>
                  Technical
                </h2>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4rem, 8vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '0.04em', WebkitTextStroke: '1.5px rgba(255,255,255,0.22)', color: 'transparent' }}>
                  Arsenal
                </p>
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
                <a href="#skill-graph">
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
        <div className="kds-alt-bg relative z-10 py-20 px-6 md:px-12 bg-transparent">
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
            NEURAL SKILL GRAPH
        ═══════════════════════════════════════ */}
        <div id="skill-graph" className="relative z-10 py-24 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">

            {/* Header */}
            <div data-reveal className="text-center mb-4">
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '0.04em' }}>
                <span className="kds-gradient">Skill</span>
                {' '}
                <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}>Circuit</span>
              </div>
              <p data-reveal data-delay="200" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.75rem', letterSpacing: '0.02em', maxWidth: '46ch', marginLeft: 'auto', marginRight: 'auto' }}>
                Every technology traces back to one source. Tap a node to see how it connects.
              </p>
            </div>

            <NeuralSkillGraph />

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