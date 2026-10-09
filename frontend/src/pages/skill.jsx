import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DotField } from "../components";

/* =========================================================
   DATA  —  edit this block to add / remove / re-level skills
   icon files live in /public/skills/<id>.svg
   (from github.com/tandpfun/skill-icons)
   level: 1 Exploring · 2 Building · 3 Comfortable · 4 Daily driver
========================================================= */

const P = "#0da2e7";
const BG = "#0c1a20";

const CATS = {
  all: { label: "All", color: P },
  frontend: { label: "Frontend", color: "#22d3ee" },
  backend: { label: "Backend & Data", color: "#c084fc" },
  tools: { label: "Tools & Workflow", color: "#fb923c" },
};

const LEVELS = {
  1: "Exploring",
  2: "Building",
  3: "Comfortable",
  4: "Daily driver",
};

const SKILLS = [
  /* ---------- FRONTEND ---------- */
  {
    id: "react",
    label: "React",
    cat: "frontend",
    level: 4,
    core: true,
    desc: "Primary UI library — component architecture, hooks, and state-driven interfaces.",
    usedIn: ["StyleForge", "EventCure", "Portfolio"],
  },
  {
    id: "javascript",
    label: "JavaScript",
    cat: "frontend",
    level: 4,
    core: true,
    desc: "ES6+ for logic, async flows and everything the browser runs.",
    usedIn: ["Every project"],
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    cat: "frontend",
    level: 4,
    core: true,
    desc: "Utility-first styling for fast interface development and consistent design systems.",
    usedIn: ["EventCure", "StyleForge", "Portfolio"],
  },
  {
    id: "html",
    label: "HTML5",
    cat: "frontend",
    level: 4,
    core: false,
    desc: "Semantic, accessible markup that every interface is built on.",
    usedIn: ["Every project"],
  },
  {
    id: "css",
    label: "CSS3",
    cat: "frontend",
    level: 4,
    core: false,
    desc: "Layouts, animations and responsive systems — written by hand when it matters.",
    usedIn: ["Portfolio", "StyleForge"],
  },
  {
    id: "vite",
    label: "Vite",
    cat: "frontend",
    level: 3,
    core: false,
    desc: "Lightning-fast dev server and build tooling for modern React apps.",
    usedIn: ["Portfolio", "EventCure"],
  },
  {
    id: "threejs",
    label: "Three.js",
    cat: "frontend",
    level: 2,
    core: false,
    desc: "WebGL scenes and shader-driven backgrounds for immersive interfaces.",
    usedIn: ["Portfolio backgrounds"],
  },
  {
    id: "typescript",
    label: "TypeScript",
    cat: "frontend",
    level: 2,
    core: false,
    desc: "Typed JavaScript for safer refactors and fewer runtime surprises.",
    usedIn: ["Newer builds"],
  },
  {
    id: "nextjs",
    label: "Next.js",
    cat: "frontend",
    level: 2,
    core: false,
    desc: "Framework layer for routing and production-ready React applications.",
    usedIn: ["In progress"],
  },

  /* ---------- BACKEND & DATA ---------- */
  {
    id: "node",
    label: "Node.js",
    cat: "backend",
    level: 4,
    core: true,
    desc: "Server runtime powering APIs, business logic, and backend services.",
    usedIn: ["EventCure backend", "Toolify"],
  },
  {
    id: "express",
    label: "Express.js",
    cat: "backend",
    level: 4,
    core: true,
    desc: "Routing, middleware, authentication flows and clean REST APIs.",
    usedIn: ["EventCure", "StyleForge", "Toolify"],
  },
  {
    id: "mongodb",
    label: "MongoDB",
    cat: "backend",
    level: 4,
    core: true,
    desc: "Document database used for flexible, application-driven data models.",
    usedIn: ["EventCure", "Toolify"],
  },
  {
    id: "python",
    label: "Python",
    cat: "backend",
    level: 3,
    core: false,
    desc: "Scripting, automation and backend experiments when JavaScript isn't the right tool.",
    usedIn: ["Automation", "Scripts"],
  },
  {
    id: "graphql",
    label: "GraphQL",
    cat: "backend",
    level: 1,
    core: false,
    desc: "Query layer explored for precise, client-driven data fetching.",
    usedIn: ["API experiments"],
  },

  /* ---------- TOOLS & WORKFLOW ---------- */
  {
    id: "git",
    label: "Git",
    cat: "tools",
    level: 4,
    core: false,
    desc: "Version control for branching, history, collaboration, and release workflows.",
    usedIn: ["Every project"],
  },
  {
    id: "github",
    label: "GitHub",
    cat: "tools",
    level: 4,
    core: false,
    desc: "Repositories, pull requests and collaboration with clients and partners.",
    usedIn: ["Every project"],
  },
  {
    id: "vscode",
    label: "VS Code",
    cat: "tools",
    level: 4,
    core: false,
    desc: "Editor of choice for development, debugging, extensions, and terminal workflows.",
    usedIn: ["Every project"],
  },
  {
    id: "figma",
    label: "Figma",
    cat: "tools",
    level: 3,
    core: false,
    desc: "Interface design, wireframes, prototypes, and visual direction.",
    usedIn: ["EventCure brand identity"],
  },
  {
    id: "postman",
    label: "Postman",
    cat: "tools",
    level: 3,
    core: false,
    desc: "Testing, debugging and documenting REST endpoints before they reach the frontend.",
    usedIn: ["API work"],
  },
  {
    id: "kali",
    label: "Kali Linux",
    cat: "tools",
    level: 3,
    core: false,
    desc: "Security-focused Linux environment for testing and technical exploration.",
    usedIn: ["Development setup"],
  },
];

const byId = Object.fromEntries(SKILLS.map((s) => [s.id, s]));
const statusOf = (s) => (s.core ? "CORE" : s.level <= 2 ? "LEARNING" : "ACTIVE");
const iconOf = (s) => `/skills/${s.id}.svg`;

const PIPELINE = [
  {
    n: "01",
    title: "Design",
    line: "Wireframes, layout & visual direction before a single line of code.",
    icons: ["figma"],
    color: "#f472b6",
  },
  {
    n: "02",
    title: "Build",
    line: "Responsive, component-driven interfaces with clean visual systems.",
    icons: ["react", "tailwind", "vite"],
    color: "#22d3ee",
  },
  {
    n: "03",
    title: "Connect",
    line: "REST APIs, auth flows and database-driven application logic.",
    icons: ["node", "express", "mongodb"],
    color: "#c084fc",
  },
  {
    n: "04",
    title: "Ship",
    line: "Git-based workflows, production deployments and iteration.",
    icons: ["git", "github"],
    color: "#fb923c",
  },
];

/* =========================================================
   HOOKS
========================================================= */

function useMedia(query) {
  const [matches, setMatches] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = () => setMatches(mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, [query]);

  return matches;
}

/* =========================================================
   SMALL PIECES
========================================================= */

function CountUp({ to }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return undefined;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return <span ref={ref}>{String(value).padStart(2, "0")}</span>;
}

function Pips({ level, big = false }) {
  return (
    <span
      className={`vx-pips ${big ? "big" : ""}`}
      role="img"
      aria-label={`${LEVELS[level]} — ${level} of 4`}
    >
      {[1, 2, 3, 4].map((n) => (
        <i key={n} data-on={n <= level} style={{ "--d": `${n * 90}ms` }} />
      ))}
    </span>
  );
}

/* =========================================================
   MARQUEE  —  two rows of icon chips scrolling in opposite
   directions. Pauses on hover.
========================================================= */

function MarqueeRow({ items, reverse = false, duration = 50 }) {
  return (
    <div
      className="vx-marquee"
      data-reverse={reverse ? "1" : "0"}
      style={{ "--dur": `${duration}s` }}
    >
      <div className="vx-track">
        {[0, 1, 2, 3].map((copy) => (
          <div className="vx-set" key={copy} aria-hidden={copy > 0}>
            {items.map((s) => (
              <div
                className="vx-chip"
                key={`${s.id}-${copy}`}
                style={{ "--c": CATS[s.cat].color }}
              >
                <img
                  src={iconOf(s)}
                  alt={copy === 0 ? s.label : ""}
                  width="34"
                  height="34"
                  loading="lazy"
                  draggable="false"
                />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   FILTER BAR  —  with a sliding highlight
========================================================= */

function FilterBar({ value, onChange }) {
  const wrapRef = useRef(null);
  const [ind, setInd] = useState({ x: 0, w: 0 });

  const measure = useCallback(() => {
    const el = wrapRef.current?.querySelector('[data-on="true"]');
    if (el) setInd({ x: el.offsetLeft, w: el.offsetWidth });
  }, []);

  useLayoutEffect(measure, [value, measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    document.fonts?.ready?.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const counts = useMemo(() => {
    const c = { all: SKILLS.length };
    SKILLS.forEach((s) => {
      c[s.cat] = (c[s.cat] || 0) + 1;
    });
    return c;
  }, []);

  return (
    <div
      className="vx-filter"
      ref={wrapRef}
      role="tablist"
      aria-label="Filter skills by category"
      style={{ "--c": CATS[value].color }}
    >
      <span
        className="vx-filter-ind"
        style={{ width: ind.w, transform: `translateX(${ind.x}px)` }}
      />
      {Object.entries(CATS).map(([key, cat]) => (
        <button
          key={key}
          type="button"
          role="tab"
          aria-selected={value === key}
          data-on={value === key}
          onClick={() => onChange(key)}
        >
          <span
            className="vx-filter-dot"
            style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
          />
          {cat.label}
          <em>{String(counts[key]).padStart(2, "0")}</em>
        </button>
      ))}
    </div>
  );
}

/* =========================================================
   SKILL CARD  —  3D tilt + cursor spotlight
========================================================= */

function SkillCard({ skill, number, order, active, fine, onSelect }) {
  const ref = useRef(null);
  const raf = useRef(0);
  const color = CATS[skill.cat].color;
  const status = statusOf(skill);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const onMove = (e) => {
    if (!fine || !ref.current) return;
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      el.style.setProperty("--rx", `${((y / r.height - 0.5) * -14).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${((x / r.width - 0.5) * 14).toFixed(2)}deg`);
    });
  };

  const onLeave = () => {
    if (!ref.current) return;
    cancelAnimationFrame(raf.current);
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  };

  return (
    <button
      ref={ref}
      type="button"
      className="vx-card"
      data-active={active}
      data-status={status}
      aria-pressed={active}
      style={{ "--c": color, "--i": order }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onMouseEnter={() => fine && onSelect()}
      onFocus={onSelect}
      onClick={onSelect}
    >
      <span className="vx-card-spot" />
      <span className="vx-card-no">{String(number).padStart(2, "0")}</span>
      <span className="vx-card-dot" title={status} />

      <img
        className="vx-card-icon"
        src={iconOf(skill)}
        alt=""
        width="56"
        height="56"
        loading="lazy"
        draggable="false"
      />

      <span className="vx-card-name">{skill.label}</span>
      <Pips level={skill.level} />

      {/* only visible on touch / small screens when the card is open */}
      <span className="vx-card-more">
        <span>
          <b>{LEVELS[skill.level]}</b>
          {skill.desc}
          <small>Used in · {skill.usedIn.join(" · ")}</small>
        </span>
      </span>
    </button>
  );
}

/* =========================================================
   INSPECTOR  —  large preview of the focused skill (desktop)
========================================================= */

function Inspector({ skill }) {
  const color = CATS[skill.cat].color;
  const status = statusOf(skill);
  const n = SKILLS.findIndex((s) => s.id === skill.id) + 1;

  return (
    <aside className="vx-insp" style={{ "--c": color }} aria-live="polite">
      <span className="vx-corner tl" />
      <span className="vx-corner tr" />
      <span className="vx-corner bl" />
      <span className="vx-corner br" />

      <div className="vx-insp-top">
        <span>
          <i /> NOW INSPECTING
        </span>
        <span>
          {String(n).padStart(2, "0")} / {SKILLS.length}
        </span>
      </div>

      <div className="vx-stage" key={skill.id}>
        <span className="vx-stage-glow" />
        <span className="vx-stage-ring" />
        <span className="vx-stage-ring r2" />
        <span className="vx-orbit">
          <i />
        </span>
        <span className="vx-orbit o2">
          <i />
        </span>
        <img
          className="vx-stage-icon"
          src={iconOf(skill)}
          alt={skill.label}
          width="112"
          height="112"
          draggable="false"
        />
      </div>

      <div className="vx-insp-body" key={`${skill.id}-body`}>
        <div className="vx-insp-cat">{CATS[skill.cat].label}</div>
        <h3>{skill.label}</h3>

        <div className="vx-insp-meta">
          <span className="vx-badge">{status}</span>
          <span className="vx-level">{LEVELS[skill.level]}</span>
        </div>

        <Pips level={skill.level} big />

        <p>{skill.desc}</p>

        <div className="vx-used">
          <small>USED IN</small>
          <div>
            {skill.usedIn.map((u) => (
              <span key={u}>{u}</span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

/* =========================================================
   WORKFLOW PIPELINE
========================================================= */

function Pipeline() {
  return (
    <div className="vx-flow">
      <span className="vx-flow-line">
        <span className="vx-flow-pulse" />
      </span>

      {PIPELINE.map((step, i) => (
        <div
          key={step.n}
          className="vx-step"
          data-reveal
          data-delay={(i + 1) * 100}
          style={{ "--c": step.color }}
        >
          <div className="vx-step-node">{step.n}</div>
          <div className="vx-step-card">
            <div className="vx-step-icons">
              {step.icons.map((id) => (
                <img
                  key={id}
                  src={iconOf(byId[id])}
                  alt={byId[id].label}
                  title={byId[id].label}
                  width="38"
                  height="38"
                  loading="lazy"
                  draggable="false"
                />
              ))}
            </div>
            <h4>{step.title}</h4>
            <p>{step.line}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function SkillsPage() {
  const sectionRef = useRef(null);
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState("react");

  const desktop = useMedia("(min-width: 1024px)");
  const fine = useMedia("(hover: hover) and (pointer: fine)");

  const list = useMemo(
    () => (filter === "all" ? SKILLS : SKILLS.filter((s) => s.cat === filter)),
    [filter],
  );

  const active = byId[activeId] || SKILLS[0];

  const rowTop = useMemo(() => SKILLS.filter((s) => s.cat === "frontend"), []);
  const rowBottom = useMemo(() => SKILLS.filter((s) => s.cat !== "frontend"), []);
  const coreCount = SKILLS.filter((s) => s.core).length;
  const learningCount = SKILLS.filter((s) => s.level <= 2).length;

  const changeFilter = (key) => {
    setFilter(key);
    const next = key === "all" ? SKILLS : SKILLS.filter((s) => s.cat === key);
    if (!next.some((s) => s.id === activeId)) setActiveId(next[0].id);
  };

  /* scroll reveal — same [data-reveal] system the other sections use */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const items = el.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* =====================================================
           SKILLS  /  vx-*
        ===================================================== */

        #skill {
          --vx-p: #0da2e7;
          --vx-line: rgba(255,255,255,.075);
          --vx-mute: rgba(255,255,255,.42);
        }

        #skill button { font: inherit; color: inherit; }

        /* ---------- HERO ---------- */

        .vx-title {
          margin: 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4.4rem, 12.5vw, 10.5rem);
          line-height: .82;
          letter-spacing: .03em;
          color: #fff;
        }

        .vx-title-outline {
          display: block;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,.26);
          background:
            linear-gradient(
              105deg,
              transparent 35%,
              rgba(13,162,231,.95) 50%,
              transparent 65%
            ) 0 0 / 260% 100% no-repeat;
          -webkit-background-clip: text;
                  background-clip: text;
          animation: vx-shine 5s ease-in-out infinite;
        }

        .vx-stats {
          display: flex;
          justify-content: center;
          gap: clamp(22px, 5vw, 64px);
          margin-top: 38px;
        }

        .vx-stat { text-align: center; }

        .vx-stat strong {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          line-height: 1;
          letter-spacing: .04em;
          font-weight: 400;
          color: #fff;
        }

        .vx-stat > span {
          display: block;
          margin-top: 6px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--vx-mute);
        }

        .vx-stat + .vx-stat {
          padding-left: clamp(22px, 5vw, 64px);
          border-left: 1px solid var(--vx-line);
        }

        /* ---------- MARQUEE ---------- */

        .vx-marquee-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 14px;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
                  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
        }

        .vx-marquee { overflow: hidden; padding: 8px 0; }

        .vx-track {
          display: flex;
          width: max-content;
          animation: vx-scroll var(--dur, 50s) linear infinite;
        }

        .vx-marquee[data-reverse="1"] .vx-track { animation-direction: reverse; }
        .vx-marquee:hover .vx-track { animation-play-state: paused; }

        .vx-set {
          display: flex;
          gap: 14px;
          padding-right: 14px;
        }

        .vx-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 20px 9px 10px;
          border-radius: 16px;
          border: 1px solid var(--vx-line);
          background: rgba(255,255,255,.03);
          -webkit-backdrop-filter: blur(10px);
                  backdrop-filter: blur(10px);
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          color: rgba(255,255,255,.7);
          transition:
            transform .35s cubic-bezier(.2,.8,.2,1),
            border-color .3s ease,
            box-shadow .3s ease,
            color .3s ease;
        }

        .vx-chip img {
          display: block;
          border-radius: 9px;
          transition: transform .35s cubic-bezier(.2,.8,.2,1);
        }

        .vx-chip:hover {
          transform: translateY(-5px);
          color: #fff;
          border-color: color-mix(in srgb, var(--c) 60%, transparent);
          box-shadow:
            0 14px 34px rgba(0,0,0,.4),
            0 0 26px color-mix(in srgb, var(--c) 22%, transparent);
        }

        .vx-chip:hover img { transform: rotate(-8deg) scale(1.12); }

        /* ---------- SECTION HEADERS ---------- */

        .vx-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--vx-p);
        }

        .vx-eyebrow::before {
          content: '';
          width: 34px;
          height: 2px;
          border-radius: 2px;
          background: var(--vx-p);
          box-shadow: 0 0 12px var(--vx-p);
        }

        .vx-h2 {
          margin: 14px 0 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 5.4rem);
          line-height: .9;
          letter-spacing: .04em;
          font-weight: 400;
          color: #fff;
        }

        .vx-h2 span {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255,255,255,.24);
        }

        .vx-sub {
          max-width: 44ch;
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          font-weight: 300;
          color: rgba(255,255,255,.45);
        }

        /* ---------- FILTER ---------- */

        .vx-filter {
          position: relative;
          display: inline-flex;
          align-self: flex-start;
          max-width: 100%;
          padding: 5px;
          gap: 2px;
          overflow-x: auto;
          border-radius: 14px;
          border: 1px solid var(--vx-line);
          background: rgba(255,255,255,.025);
          -webkit-backdrop-filter: blur(12px);
                  backdrop-filter: blur(12px);
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .vx-filter::-webkit-scrollbar { display: none; }

        .vx-filter-ind {
          position: absolute;
          top: 5px;
          left: 0;
          bottom: 5px;
          border-radius: 10px;
          background: color-mix(in srgb, var(--c) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--c) 45%, transparent);
          box-shadow: 0 0 22px color-mix(in srgb, var(--c) 18%, transparent);
          transition:
            transform .45s cubic-bezier(.2,.9,.25,1),
            width .45s cubic-bezier(.2,.9,.25,1),
            background .3s ease,
            border-color .3s ease;
          pointer-events: none;
        }

        .vx-filter button {
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          cursor: pointer;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: rgba(255,255,255,.5);
          transition: color .25s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .vx-filter button:hover,
        .vx-filter button[data-on="true"] { color: #fff; }

        .vx-filter button:focus-visible {
          outline: 2px solid var(--vx-p);
          outline-offset: -2px;
        }

        .vx-filter-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .vx-filter em {
          font-style: normal;
          font-size: 8px;
          opacity: .45;
        }

        .vx-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: rgba(255,255,255,.34);
        }

        .vx-legend span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .vx-legend i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: block;
        }

        .vx-legend .core i {
          background: #fff;
          box-shadow: 0 0 9px #fff;
        }

        .vx-legend .active i { background: rgba(255,255,255,.4); }

        .vx-legend .learning i {
          border: 1px dashed rgba(255,255,255,.7);
        }

        /* ---------- DECK LAYOUT ---------- */

        .vx-deck {
          display: grid;
          grid-template-columns: 1fr;
          gap: 26px;
          margin-top: 26px;
          align-items: start;
        }

        .vx-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          grid-auto-flow: dense;
        }

        @media (min-width: 560px) {
          .vx-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media (min-width: 1024px) {
          .vx-deck { grid-template-columns: 370px minmax(0, 1fr); gap: 30px; }
          .vx-grid { grid-template-columns: repeat(auto-fill, minmax(138px, 1fr)); }
        }

        /* ---------- SKILL CARD ---------- */

        .vx-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 22px 10px 16px;
          min-height: 158px;
          overflow: hidden;
          cursor: pointer;
          text-align: center;
          border-radius: 20px;
          border: 1px solid var(--vx-line);
          background: linear-gradient(160deg, rgba(255,255,255,.045), rgba(255,255,255,.012));
          transform: perspective(720px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
          transition:
            transform .22s ease-out,
            border-color .3s ease,
            background .3s ease,
            box-shadow .3s ease;
          -webkit-tap-highlight-color: transparent;
        }

        /* entrance — only starts once the deck has been revealed, and replays on every filter change */
        .vx-deck.revealed .vx-card {
          animation: vx-card-in .65s cubic-bezier(.16,1,.3,1) backwards;
          animation-delay: calc(var(--i) * 38ms);
        }

        /* soft spotlight that follows the cursor */
        .vx-card-spot {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          pointer-events: none;
          background: radial-gradient(
            230px circle at var(--mx, 50%) var(--my, 0%),
            color-mix(in srgb, var(--c) 24%, transparent),
            transparent 70%
          );
          transition: opacity .3s ease;
        }

        /* glowing border that follows the cursor */
        .vx-card::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          opacity: 0;
          pointer-events: none;
          background: radial-gradient(
            170px circle at var(--mx, 50%) var(--my, 0%),
            var(--c),
            transparent 70%
          );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          transition: opacity .3s ease;
        }

        .vx-card:hover .vx-card-spot,
        .vx-card:hover::after { opacity: 1; }

        .vx-card[data-active="true"] {
          background: linear-gradient(
            160deg,
            color-mix(in srgb, var(--c) 11%, transparent),
            rgba(255,255,255,.015)
          );
          border-color: color-mix(in srgb, var(--c) 55%, transparent);
          box-shadow:
            0 18px 44px rgba(0,0,0,.34),
            0 0 34px color-mix(in srgb, var(--c) 14%, transparent);
        }

        .vx-card[data-active="true"] .vx-card-spot { opacity: .65; }
        .vx-card[data-active="true"]::after { opacity: .8; }

        .vx-card:focus-visible {
          outline: 2px solid var(--c);
          outline-offset: 3px;
        }

        .vx-card-icon {
          display: block;
          width: 56px;
          height: 56px;
          border-radius: 14px;
          filter: drop-shadow(0 10px 16px rgba(0,0,0,.5));
          transition: transform .4s cubic-bezier(.2,.9,.25,1.3);
        }

        .vx-card:hover .vx-card-icon,
        .vx-card[data-active="true"] .vx-card-icon {
          transform: translateY(-5px) scale(1.14) rotate(-4deg);
        }

        .vx-card-name {
          font-family: 'Syne', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          white-space: nowrap;
          color: rgba(255,255,255,.88);
        }

        .vx-card-no {
          position: absolute;
          top: 11px;
          left: 13px;
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .14em;
          color: rgba(255,255,255,.2);
        }

        .vx-card-dot {
          position: absolute;
          top: 12px;
          right: 13px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,.28);
        }

        .vx-card[data-status="CORE"] .vx-card-dot {
          background: #fff;
          box-shadow: 0 0 10px var(--c), 0 0 3px #fff;
        }

        .vx-card[data-status="LEARNING"] .vx-card-dot {
          background: transparent;
          border: 1px dashed rgba(255,255,255,.75);
          animation: vx-blink 2.2s ease-in-out infinite;
        }

        /* mobile-only expanded detail */
        .vx-card-more {
          display: none;
          width: 100%;
          text-align: left;
        }

        .vx-card-more > span {
          display: block;
          padding-top: 12px;
          margin-top: 3px;
          border-top: 1px solid var(--vx-line);
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          line-height: 1.65;
          font-weight: 300;
          color: rgba(255,255,255,.62);
        }

        .vx-card-more b {
          display: block;
          margin-bottom: 4px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--c);
        }

        .vx-card-more small {
          display: block;
          margin-top: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: .08em;
          color: rgba(255,255,255,.4);
        }

        @media (max-width: 1023px) {
          .vx-card[data-active="true"] {
            grid-column: 1 / -1;
            padding-bottom: 20px;
          }
          .vx-card[data-active="true"] .vx-card-more {
            display: block;
            animation: vx-fade-up .4s ease both;
          }
        }

        /* ---------- PIPS ---------- */

        .vx-pips {
          display: inline-flex;
          gap: 4px;
        }

        .vx-pips i {
          display: block;
          width: 15px;
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,.1);
        }

        .vx-pips i[data-on="true"] {
          background: var(--c);
          box-shadow: 0 0 8px color-mix(in srgb, var(--c) 70%, transparent);
        }

        .vx-pips.big { gap: 6px; }

        .vx-pips.big i {
          width: 44px;
          height: 5px;
          border-radius: 3px;
        }

        .vx-pips.big i[data-on="true"] {
          transform-origin: left;
          animation: vx-pip .7s var(--d) cubic-bezier(.16,1,.3,1) backwards;
        }

        /* ---------- INSPECTOR ---------- */

        .vx-insp {
          position: sticky;
          top: 96px;
          display: none;
          overflow: hidden;
          padding: 22px 26px 28px;
          border-radius: 26px;
          border: 1px solid color-mix(in srgb, var(--c) 28%, var(--vx-line));
          background:
            radial-gradient(
              circle at 50% 22%,
              color-mix(in srgb, var(--c) 13%, transparent),
              transparent 62%
            ),
            linear-gradient(170deg, rgba(255,255,255,.04), rgba(255,255,255,.01));
          transition: border-color .5s ease;
        }

        .vx-insp::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.028) 1px, transparent 1px);
          background-size: 34px 34px;
          -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000, transparent 75%);
                  mask-image: radial-gradient(ellipse at 50% 30%, #000, transparent 75%);
        }

        @media (min-width: 1024px) {
          .vx-insp { display: block; }
        }

        .vx-corner {
          position: absolute;
          width: 18px;
          height: 18px;
          border-color: color-mix(in srgb, var(--c) 70%, transparent);
          pointer-events: none;
        }

        .vx-corner.tl { top: 14px; left: 14px; border-top: 1px solid; border-left: 1px solid; }
        .vx-corner.tr { top: 14px; right: 14px; border-top: 1px solid; border-right: 1px solid; }
        .vx-corner.bl { bottom: 14px; left: 14px; border-bottom: 1px solid; border-left: 1px solid; }
        .vx-corner.br { bottom: 14px; right: 14px; border-bottom: 1px solid; border-right: 1px solid; }

        .vx-insp-top {
          position: relative;
          display: flex;
          justify-content: space-between;
          padding: 4px 6px 0;
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: .18em;
          color: rgba(255,255,255,.34);
        }

        .vx-insp-top span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .vx-insp-top i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 9px #4ade80;
          animation: vx-blink 2s ease-in-out infinite;
        }

        .vx-stage {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 230px;
          margin-top: 6px;
        }

        .vx-stage-glow {
          position: absolute;
          width: 190px;
          height: 190px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            color-mix(in srgb, var(--c) 34%, transparent),
            transparent 68%
          );
          filter: blur(14px);
          animation: vx-breathe 4s ease-in-out infinite;
        }

        .vx-stage-ring {
          position: absolute;
          width: 176px;
          height: 176px;
          border-radius: 50%;
          border: 1px solid color-mix(in srgb, var(--c) 30%, transparent);
        }

        .vx-stage-ring.r2 {
          width: 212px;
          height: 212px;
          border-style: dashed;
          border-color: rgba(255,255,255,.1);
          animation: vx-spin 40s linear infinite reverse;
        }

        .vx-orbit {
          position: absolute;
          width: 176px;
          height: 176px;
          border-radius: 50%;
          animation: vx-spin 7s linear infinite;
        }

        .vx-orbit.o2 {
          width: 212px;
          height: 212px;
          animation-duration: 12s;
          animation-direction: reverse;
        }

        .vx-orbit i {
          position: absolute;
          top: -3px;
          left: 50%;
          width: 6px;
          height: 6px;
          margin-left: -3px;
          border-radius: 50%;
          background: var(--c);
          box-shadow: 0 0 14px var(--c), 0 0 4px #fff;
        }

        .vx-orbit.o2 i {
          width: 4px;
          height: 4px;
          background: #fff;
          opacity: .8;
        }

        .vx-stage-icon {
          position: relative;
          z-index: 2;
          display: block;
          width: 112px;
          height: 112px;
          border-radius: 28px;
          filter: drop-shadow(0 22px 28px rgba(0,0,0,.55));
          animation:
            vx-pop .7s cubic-bezier(.2,.9,.25,1.35) backwards,
            vx-float 5s ease-in-out .7s infinite;
        }

        .vx-insp-body {
          position: relative;
          animation: vx-fade-up .5s cubic-bezier(.16,1,.3,1) backwards;
        }

        .vx-insp-cat {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: var(--c);
        }

        .vx-insp h3 {
          margin: 8px 0 14px;
          font-family: 'Syne', sans-serif;
          font-size: 30px;
          line-height: 1.05;
          font-weight: 800;
          color: #fff;
        }

        .vx-insp-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .vx-badge {
          padding: 4px 8px;
          border-radius: 5px;
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .14em;
          color: var(--c);
          background: color-mix(in srgb, var(--c) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--c) 30%, transparent);
        }

        .vx-level {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: rgba(255,255,255,.5);
        }

        .vx-insp p {
          margin: 18px 0 0;
          min-height: 66px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 300;
          color: rgba(255,255,255,.62);
        }

        .vx-used {
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid var(--vx-line);
        }

        .vx-used small {
          display: block;
          margin-bottom: 9px;
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .2em;
          color: rgba(255,255,255,.28);
        }

        .vx-used div {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .vx-used span {
          padding: 5px 10px;
          border-radius: 99px;
          font-family: 'DM Mono', monospace;
          font-size: 9.5px;
          letter-spacing: .04em;
          color: rgba(255,255,255,.72);
          background: rgba(255,255,255,.045);
          border: 1px solid var(--vx-line);
        }

        /* ---------- WORKFLOW PIPELINE ---------- */

        .vx-flow {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          padding-left: 34px;
        }

        .vx-flow-line {
          position: absolute;
          left: 17px;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: linear-gradient(to bottom, rgba(244,114,182,.5), rgba(34,211,238,.45), rgba(192,132,252,.45), rgba(251,146,60,.5));
          overflow: hidden;
        }

        .vx-flow-pulse {
          position: absolute;
          left: -1px;
          top: 0;
          width: 3px;
          height: 70px;
          border-radius: 3px;
          background: linear-gradient(to bottom, transparent, #fff, transparent);
          animation: vx-pulse-y 4s ease-in-out infinite;
        }

        .vx-step { position: relative; }

        .vx-step-node {
          position: absolute;
          left: -34px;
          top: 2px;
          z-index: 2;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #0c1a20;
          border: 1px solid color-mix(in srgb, var(--c) 70%, transparent);
          box-shadow: 0 0 20px color-mix(in srgb, var(--c) 28%, transparent);
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: .06em;
          color: var(--c);
          transition: transform .35s cubic-bezier(.2,.9,.25,1.3);
        }

        .vx-step:hover .vx-step-node { transform: scale(1.18); }

        .vx-step-card {
          position: relative;
          overflow: hidden;
          height: 100%;
          padding: 22px;
          border-radius: 20px;
          border: 1px solid var(--vx-line);
          background: linear-gradient(160deg, rgba(255,255,255,.04), rgba(255,255,255,.01));
          transition:
            transform .4s cubic-bezier(.2,.8,.2,1),
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .vx-step-card::after {
          content: '';
          position: absolute;
          right: -60px;
          bottom: -70px;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: radial-gradient(circle, color-mix(in srgb, var(--c) 18%, transparent), transparent 70%);
          transition: transform .5s ease;
          pointer-events: none;
        }

        .vx-step:hover .vx-step-card {
          transform: translateY(-6px);
          border-color: color-mix(in srgb, var(--c) 45%, transparent);
          box-shadow: 0 24px 55px rgba(0,0,0,.3);
        }

        .vx-step:hover .vx-step-card::after { transform: scale(1.6); }

        .vx-step-icons {
          display: flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
        }

        .vx-step-icons img {
          display: block;
          border-radius: 11px;
          filter: drop-shadow(0 6px 10px rgba(0,0,0,.45));
          transition: transform .35s cubic-bezier(.2,.9,.25,1.3);
        }

        .vx-step:hover .vx-step-icons img:nth-child(1) { transform: translateY(-4px) rotate(-6deg); }
        .vx-step:hover .vx-step-icons img:nth-child(2) { transform: translateY(-7px); }
        .vx-step:hover .vx-step-icons img:nth-child(3) { transform: translateY(-4px) rotate(6deg); }

        .vx-step h4 {
          margin: 20px 0 8px;
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #fff;
        }

        .vx-step p {
          margin: 0;
          position: relative;
          z-index: 1;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.7;
          font-weight: 300;
          color: rgba(255,255,255,.5);
        }

        @media (min-width: 900px) {
          .vx-flow {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
            padding-left: 0;
            padding-top: 56px;
          }

          .vx-flow-line {
            left: 6%;
            right: 6%;
            top: 18px;
            bottom: auto;
            width: auto;
            height: 1px;
            background: linear-gradient(to right, rgba(244,114,182,.5), rgba(34,211,238,.45), rgba(192,132,252,.45), rgba(251,146,60,.5));
          }

          .vx-flow-pulse {
            left: 0;
            top: -1px;
            width: 90px;
            height: 3px;
            background: linear-gradient(to right, transparent, #fff, transparent);
            animation: vx-pulse-x 5s ease-in-out infinite;
          }

          .vx-step-node {
            left: 22px;
            top: -56px;
          }
        }

        /* ---------- CTA ---------- */

        .vx-cta {
          position: relative;
          overflow: hidden;
          padding: clamp(40px, 7vw, 70px) 24px;
          text-align: center;
          border-radius: 26px;
          border: 1px solid var(--vx-line);
          background:
            radial-gradient(circle at 50% 0%, rgba(13,162,231,.11), transparent 62%),
            rgba(255,255,255,.018);
        }

        .vx-cta::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -90px;
          width: 340px;
          height: 200px;
          transform: translateX(-50%);
          border-radius: 50%;
          border: 1px solid rgba(13,162,231,.12);
          box-shadow: 0 0 60px rgba(13,162,231,.07);
          pointer-events: none;
        }

        .vx-cta-eyebrow {
          position: relative;
          margin-bottom: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: .22em;
          color: var(--vx-p);
        }

        .vx-cta-title {
          position: relative;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.6rem, 6vw, 4.6rem);
          line-height: .95;
          letter-spacing: .04em;
          color: #fff;
        }

        .vx-cta-title span {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,.28);
        }

        .vx-cta p {
          position: relative;
          max-width: 46ch;
          margin: 16px auto 26px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          font-weight: 300;
          color: rgba(255,255,255,.48);
        }

        .vx-cta-line {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-bottom: 26px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: .14em;
          color: rgba(255,255,255,.6);
        }

        .vx-cta-line span { color: var(--vx-p); }
        .vx-cta-line strong { font-weight: 400; }

        .vx-cta-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 48px;
          padding: 0 24px;
          cursor: pointer;
          border-radius: 12px;
          border: 1px solid rgba(13,162,231,.4);
          background: rgba(13,162,231,.12);
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .05em;
          color: #fff;
          transition: all .3s ease;
        }

        .vx-cta-btn:hover {
          transform: translateY(-3px);
          background: rgba(13,162,231,.22);
          border-color: var(--vx-p);
          box-shadow: 0 14px 38px rgba(13,162,231,.18);
        }

        /* ---------- SIGNATURE ---------- */

        .vx-sign {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 13px;
          padding: 24px 20px;
          border-top: 1px solid rgba(255,255,255,.06);
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: rgba(255,255,255,.3);
        }

        .vx-sign strong { font-weight: 400; color: rgba(255,255,255,.68); }

        .vx-sign i {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--vx-p);
          box-shadow: 0 0 8px var(--vx-p);
        }

        /* ---------- SMALL SCREENS ---------- */

        @media (max-width: 640px) {
          .vx-stats { gap: 18px; }
          .vx-stat + .vx-stat { padding-left: 18px; }
          .vx-chip { padding: 7px 15px 7px 8px; font-size: 12px; gap: 9px; }
          .vx-chip img { width: 28px; height: 28px; }
          .vx-card { min-height: 148px; }
          .vx-card-icon { width: 50px; height: 50px; }
        }

        /* ---------- KEYFRAMES ---------- */

        @keyframes vx-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @keyframes vx-shine {
          0%   { background-position: 130% 0; }
          55%, 100% { background-position: -80% 0; }
        }

        @keyframes vx-card-in {
          from { opacity: 0; transform: translateY(24px) scale(.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes vx-fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes vx-pop {
          from { opacity: 0; transform: scale(.55) rotate(-14deg); }
          to   { opacity: 1; transform: scale(1) rotate(0); }
        }

        @keyframes vx-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-9px); }
        }

        @keyframes vx-breathe {
          0%, 100% { transform: scale(.9); opacity: .7; }
          50%      { transform: scale(1.1); opacity: 1; }
        }

        @keyframes vx-spin { to { transform: rotate(360deg); } }

        @keyframes vx-blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: .35; }
        }

        @keyframes vx-pip {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        @keyframes vx-pulse-x {
          0%   { transform: translateX(-100px); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(88vw); opacity: 0; }
        }

        @keyframes vx-pulse-y {
          0%   { transform: translateY(-80px); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateY(560px); opacity: 0; }
        }

        /* ---------- REDUCED MOTION ---------- */

        @media (prefers-reduced-motion: reduce) {
          .vx-track,
          .vx-title-outline,
          .vx-stage-glow,
          .vx-stage-ring,
          .vx-orbit,
          .vx-stage-icon,
          .vx-flow-pulse,
          .vx-deck.revealed .vx-card,
          .vx-card-dot,
          .vx-insp-top i {
            animation: none !important;
          }

          .vx-marquee { overflow-x: auto; }
          .vx-card,
          .vx-chip,
          .vx-card-icon { transition: none !important; }
        }
      `}</style>

      <section
        id="skill"
        ref={sectionRef}
        style={{
          backgroundColor: BG,
          color: "#fff",
          position: "relative",
          zIndex: 0,
          overflow: "clip",
        }}
      >
        {/* ================= BACKGROUND ================= */}

        <div className="absolute inset-0 opacity-80 pointer-events-none z-[1]">
          <DotField
            dotRadius={2.8}
            dotSpacing={18}
            cursorRadius={420}
            cursorForce={0.22}
            bulgeOnly
            bulgeStrength={75}
            glowRadius={180}
            sparkle={false}
            waveAmplitude={0}
            gradientFrom="rgba(13,162,231,0.48)"
            gradientTo="rgba(13,162,231,0.20)"
            glowColor="#0c1a20"
          />
        </div>

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: 800,
            height: 380,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(13,162,231,.11), transparent 68%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute top-[38%] right-[-160px] pointer-events-none"
          style={{
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle, rgba(192,132,252,.06), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-[-160px] pointer-events-none"
          style={{
            width: 520,
            height: 460,
            background:
              "radial-gradient(circle, rgba(251,146,60,.045), transparent 70%)",
          }}
        />

        {/* ================= HERO ================= */}

        <div className="relative z-10 pt-28 md:pt-36 pb-10 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto text-center">
            <div
              data-reveal
              className="vx-eyebrow"
              style={{ justifyContent: "center" }}
            >
              002 / Tech Arsenal
            </div>

            <div data-reveal data-delay="100" style={{ marginTop: 22 }}>
              <h2 className="vx-title">
                TECHNICAL
                <span className="vx-title-outline">ARSENAL</span>
              </h2>
            </div>

            <p
              data-reveal
              data-delay="200"
              className="vx-sub"
              style={{ margin: "26px auto 0", fontSize: 15 }}
            >
              The tools I reach for to{" "}
              <strong style={{ color: "#fff", fontWeight: 500 }}>
                design, build, connect and ship
              </strong>{" "}
              real products — from the first wireframe to production.
            </p>

            <div data-reveal data-delay="300" className="vx-stats">
              <div className="vx-stat">
                <strong>
                  <CountUp to={SKILLS.length} />
                </strong>
                <span>Technologies</span>
              </div>
              <div className="vx-stat">
                <strong>
                  <CountUp to={coreCount} />
                </strong>
                <span>Core stack</span>
              </div>
              <div className="vx-stat">
                <strong>
                  <CountUp to={learningCount} />
                </strong>
                <span>Learning now</span>
              </div>
            </div>

            <div
              data-reveal
              data-delay="400"
              className="flex flex-wrap justify-center gap-3 mt-9"
            >
              <a href="#skill-vault">
                <button className="kds-btn-primary">
                  Explore the Vault
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 15 }}
                  >
                    arrow_downward
                  </span>
                </button>
              </a>
              <a href="#project">
                <button className="kds-btn-ghost">
                  View Projects
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 15, color: P }}
                  >
                    arrow_forward
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ================= ICON MARQUEE ================= */}

        <div
          data-reveal
          data-delay="200"
          className="relative z-10 py-10"
          aria-label="Technologies I work with"
        >
          <div className="vx-marquee-wrap">
            <MarqueeRow items={rowTop} duration={46} />
            <MarqueeRow items={rowBottom} reverse duration={54} />
          </div>
        </div>

        {/* ================= SKILL VAULT ================= */}

        <div
          id="skill-vault"
          className="relative z-10 pt-20 md:pt-28 pb-16 px-6 md:px-12"
        >
          <div className="max-w-[1200px] mx-auto">
            <div
              data-reveal
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            >
              <div>
                <div className="vx-eyebrow">01 / Skill Vault</div>
                <h3 className="vx-h2">
                  PICK A <span>SKILL</span>
                </h3>
              </div>
              <p className="vx-sub">
                {fine
                  ? "Hover any card to inspect it. Filter by category to focus the stack."
                  : "Tap any card to open its details. Filter by category to focus the stack."}
              </p>
            </div>

            <div
              data-reveal
              data-delay="100"
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-9"
            >
              <FilterBar value={filter} onChange={changeFilter} />

              <div className="vx-legend">
                <span className="core">
                  <i /> Core
                </span>
                <span className="active">
                  <i /> Active
                </span>
                <span className="learning">
                  <i /> Learning
                </span>
              </div>
            </div>

            <div className="vx-deck" data-reveal data-delay="200">
              {desktop && <Inspector skill={active} />}

              <div className="vx-grid" key={filter}>
                {list.map((skill, i) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    order={i}
                    number={SKILLS.findIndex((s) => s.id === skill.id) + 1}
                    active={skill.id === active.id}
                    fine={fine}
                    onSelect={() => setActiveId(skill.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= WORKFLOW ================= */}

        <div className="relative z-10 py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <div
              style={{
                height: 1,
                marginBottom: 64,
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,.09), transparent)",
              }}
            />

            <div
              data-reveal
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
            >
              <div>
                <div className="vx-eyebrow">02 / Workflow</div>
                <h3 className="vx-h2">
                  HOW I <span>BUILD</span>
                </h3>
              </div>
              <p className="vx-sub">
                From interface architecture to deployment, every layer has a
                purpose — and a tool.
              </p>
            </div>

            <Pipeline />

            {/* CTA */}
            <div data-reveal data-delay="200" className="mt-24">
              <div className="vx-cta">
                <div className="vx-cta-eyebrow">BUILD SYSTEM / READY</div>

                <div className="vx-cta-title">
                  BUILD SOMETHING <span>REAL.</span>
                </div>

                <p>
                  Clean architecture, practical solutions, continuous learning —
                  let's turn an idea into a working product.
                </p>

                <div className="vx-cta-line">
                  <strong>BUILD</strong>
                  <span>→</span>
                  <strong>SHIP</strong>
                  <span>→</span>
                  <strong>ITERATE</strong>
                  <span>→</span>
                  <strong>REPEAT</strong>
                </div>

                <a href="#connect">
                  <button className="vx-cta-btn">
                    Start Collaboration
                    <span aria-hidden="true">→</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SIGNATURE ================= */}

        <div className="relative z-10">
          <div className="vx-sign">
            <strong>KUSH.DEV</strong>
            {["React", "Node.js", "MongoDB", "Express", "Git", "Cloud"].map(
              (t) => (
                <span
                  key={t}
                  style={{ display: "inline-flex", gap: 13, alignItems: "center" }}
                >
                  <i />
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}