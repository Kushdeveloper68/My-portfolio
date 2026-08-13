import { useEffect, useRef, useState } from "react";
import { DotField } from "../components";

const P = "#0da2e7";
const BG = "#0c1a20";

const SYSTEM_COLORS = {
  frontend: "#22d3ee",
  backend: "#c084fc",
  database: "#4ade80",
  tools: "#fb923c",
};

const CAPABILITIES = [
  {
    icon: "architecture",
    title: "Full Stack Architecture",
    desc: "Designing complete product flows across interface, API, business logic, and data layers.",
    tag: "01",
    type: "architecture",
  },
  {
    icon: "palette",
    title: "Frontend Engineering",
    desc: "Responsive interfaces built around component architecture, usability, performance, and clean visual systems.",
    tag: "02",
    type: "frontend",
  },
  {
    icon: "dns",
    title: "Backend Systems",
    desc: "REST APIs, server-side logic, authentication flows, and database-driven application architecture.",
    tag: "03",
    type: "backend",
  },
  {
    icon: "cloud",
    title: "Deployment & Cloud",
    desc: "Git-based workflows, production deployments, hosting, CLI tooling, and cloud fundamentals.",
    tag: "04",
    type: "deployment",
  },
];

const STACK_STATUS = [
  { label: "React", status: "CORE", color: SYSTEM_COLORS.frontend },
  { label: "Node.js", status: "CORE", color: SYSTEM_COLORS.backend },
  { label: "MongoDB", status: "CORE", color: SYSTEM_COLORS.database },
  { label: "REST APIs", status: "ACTIVE", color: P },
  { label: "Next.js", status: "BUILDING", color: "#60a5fa" },
  { label: "GraphQL", status: "EXPLORING", color: "#fb923c" },
];

const FRONTEND = [
  { label: "React / Vite", icon: "code" },
  { label: "Tailwind CSS", icon: "css" },
  { label: "JavaScript", icon: "javascript" },
  { label: "Figma", icon: "design_services" },
];

const BACKEND = [
  { label: "Node.js", icon: "data_object" },
  { label: "Python", icon: "terminal" },
  { label: "MongoDB", icon: "database" },
  { label: "REST APIs", icon: "api" },
];

/* =========================================================
   SKILL GRAPH
========================================================= */

const GRAPH_CENTER = { x: 500, y: 300 };
const HUB_RADIUS = 175;
const LEAF_RADIUS = 140;
const LEAF_SPREAD = 100;

function polar(cx, cy, r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;

  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

const HUB_DEFS = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "code_blocks",
    color: SYSTEM_COLORS.frontend,
    angle: 210,
  },
  {
    id: "backend",
    label: "Backend",
    icon: "dns",
    color: SYSTEM_COLORS.backend,
    angle: 330,
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: "construction",
    color: SYSTEM_COLORS.tools,
    angle: 90,
  },
];

const SKILL_DEFS = {
  frontend: [
    {
      id: "react",
      label: "React",
      icon: "code",
      core: true,
      level: "Core Stack",
      desc: "Primary UI library — component architecture, hooks, and state-driven interfaces.",
      usedIn: "StyleForge, EventCure",
    },
    {
      id: "nextjs",
      label: "Next.js",
      icon: "layers",
      core: false,
      level: "Actively Building",
      desc: "Framework layer for routing and production-ready React applications.",
      usedIn: "Personal Portfolio",
    },
    {
      id: "typescript",
      label: "TypeScript",
      icon: "data_object",
      core: false,
      level: "Actively Building",
      desc: "Typed JavaScript for safer refactors and fewer runtime surprises.",
      usedIn: "Newer builds",
    },
    {
      id: "tailwind",
      label: "Tailwind CSS",
      icon: "css",
      core: true,
      level: "Core Stack",
      desc: "Utility-first styling for fast interface development and consistent design systems.",
      usedIn: "EventCure, StyleForge",
    },
  ],

  backend: [
    {
      id: "node",
      label: "Node.js",
      icon: "dns",
      core: true,
      level: "Core Stack",
      desc: "Server runtime powering APIs, business logic, and backend services.",
      usedIn: "EventCure backend",
    },
    {
      id: "mongodb",
      label: "MongoDB",
      icon: "database",
      core: true,
      level: "Core Stack",
      desc: "Document database used for flexible, application-driven data models.",
      usedIn: "EventCure, Toolify",
    },
    {
      id: "graphql",
      label: "GraphQL",
      icon: "hub",
      core: false,
      level: "Exploring",
      desc: "Query layer explored for precise, client-driven data fetching.",
      usedIn: "API experiments",
    },
    {
      id: "rest",
      label: "REST APIs",
      icon: "api",
      core: false,
      level: "Comfortable",
      desc: "Designing and consuming predictable HTTP interfaces for web applications.",
      usedIn: "StyleForge, Toolify",
    },
  ],

  tools: [
    {
      id: "git",
      label: "Git",
      icon: "commit",
      core: false,
      level: "Daily Driver",
      desc: "Version control for branching, history, collaboration, and release workflows.",
      usedIn: "Every project",
    },
    {
      id: "kali",
      label: "Kali Linux",
      icon: "security",
      core: false,
      level: "Comfortable",
      desc: "Security-focused Linux environment for testing and technical exploration.",
      usedIn: "Development setup",
    },
    {
      id: "figma",
      label: "Figma",
      icon: "design_services",
      core: false,
      level: "Comfortable",
      desc: "Interface design, wireframes, prototypes, and visual direction.",
      usedIn: "EventCure brand identity",
    },
    {
      id: "vscode",
      label: "VS Code",
      icon: "terminal",
      core: false,
      level: "Daily Driver",
      desc: "Editor of choice for development, debugging, extensions, and terminal workflows.",
      usedIn: "Every project",
    },
  ],
};

function buildGraph() {
  const hubs = HUB_DEFS.map((hub) => ({
    ...hub,
    ...polar(
      GRAPH_CENTER.x,
      GRAPH_CENTER.y,
      HUB_RADIUS,
      hub.angle,
    ),
  }));

  const leaves = [];

  hubs.forEach((hub) => {
    const skills = SKILL_DEFS[hub.id];

    skills.forEach((skill, index) => {
      const count = skills.length;

      const angle =
        hub.angle -
        LEAF_SPREAD / 2 +
        (index * LEAF_SPREAD) / (count - 1);

      const position = polar(
        hub.x,
        hub.y,
        LEAF_RADIUS,
        angle,
      );

      leaves.push({
        ...skill,
        ...position,
        hubId: hub.id,
        color: hub.color,
      });
    });
  });

  return { hubs, leaves };
}

const GRAPH = buildGraph();

/* =========================================================
   SKILL REACTOR
========================================================= */

function SkillReactor() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    setReduceMotion(mq.matches);

    const handler = (event) => {
      setReduceMotion(event.matches);
    };

    mq.addEventListener?.("change", handler);

    return () => {
      mq.removeEventListener?.("change", handler);
    };
  }, []);

  const orbitItems = [
    {
      label: "REACT",
      icon: "code",
      color: SYSTEM_COLORS.frontend,
      className: "ks-reactor-node node-top",
    },
    {
      label: "NODE.JS",
      icon: "dns",
      color: SYSTEM_COLORS.backend,
      className: "ks-reactor-node node-right",
    },
    {
      label: "MONGODB",
      icon: "database",
      color: SYSTEM_COLORS.database,
      className: "ks-reactor-node node-bottom-right",
    },
    {
      label: "FIGMA",
      icon: "design_services",
      color: "#f472b6",
      className: "ks-reactor-node node-bottom-left",
    },
    {
      label: "TAILWIND",
      icon: "css",
      color: "#60a5fa",
      className: "ks-reactor-node node-left",
    },
  ];

  return (
    <div className="ks-reactor-wrap">
      <div className="ks-reactor-label">
        <span className="ks-reactor-label-line" />
        <span>STACK CORE / 001</span>
      </div>

      <div
        className={`ks-reactor ${reduceMotion ? "ks-reduced" : ""}`}
      >
        {/* Ambient glow */}
        <div className="ks-reactor-glow" />

        {/* Back orbital arcs */}
        <div className="ks-orbit orbit-a">
          <span className="ks-orbit-dot dot-a" />
        </div>

        <div className="ks-orbit orbit-b">
          <span className="ks-orbit-dot dot-b" />
        </div>

        <div className="ks-orbit orbit-c">
          <span className="ks-orbit-dot dot-c" />
        </div>

        {/* Technical circular grid */}
        <div className="ks-reactor-grid">
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* Center core */}
        <div className="ks-core">
          <div className="ks-core-inner">
            <span className="material-symbols-outlined">
              code
            </span>

            <strong>KUSH.DEV</strong>

            <small>SYSTEM CORE</small>
          </div>
        </div>

        {/* Data pulse */}
        <div className="ks-data-pulse pulse-1" />
        <div className="ks-data-pulse pulse-2" />

        {/* Technology nodes */}
        {orbitItems.map((item) => (
          <div
            key={item.label}
            className={item.className}
            style={{
              "--node-color": item.color,
            }}
          >
            <div className="ks-node-line" />

            <div className="ks-node-card">
              <span className="material-symbols-outlined">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </div>
          </div>
        ))}

        {/* System labels */}
        <div className="ks-system-label label-ui">
          <span>01</span>
          UI LAYER
        </div>

        <div className="ks-system-label label-api">
          <span>02</span>
          API LAYER
        </div>

        <div className="ks-system-label label-data">
          <span>03</span>
          DATA LAYER
        </div>
      </div>

      {/* Reactor footer */}
      <div className="ks-reactor-footer">
        <div>
          <span className="status-dot" />
          STACK ONLINE
        </div>

        <span>REACT → NODE → DATA</span>
      </div>
    </div>
  );
}

/* =========================================================
   STACK STATUS
========================================================= */

function StackStatus() {
  return (
    <div className="ks-status-panel">
      <div className="ks-status-header">
        <div>
          <span className="ks-mini-label">
            CURRENT STACK
          </span>

          <h3>System Status</h3>
        </div>

        <span className="ks-status-online">
          ONLINE
        </span>
      </div>

      <div className="ks-status-grid">
        {STACK_STATUS.map((item) => (
          <div
            className="ks-status-item"
            key={item.label}
          >
            <div
              className="ks-status-indicator"
              style={{
                background: item.color,
                boxShadow: `0 0 12px ${item.color}`,
              }}
            />

            <span className="ks-status-name">
              {item.label}
            </span>

            <span
              className="ks-status-state"
              style={{
                color: item.color,
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ARCHITECTURE VISUALS
========================================================= */

function ArchitectureVisual({ type }) {
  if (type === "architecture") {
    return (
      <div className="ks-architecture-flow">
        <div className="flow-box flow-ui">
          <span>UI</span>
          <small>REACT</small>
        </div>

        <span className="flow-arrow">→</span>

        <div className="flow-box flow-api">
          <span>API</span>
          <small>NODE</small>
        </div>

        <span className="flow-arrow">→</span>

        <div className="flow-box flow-db">
          <span>DATA</span>
          <small>MONGO</small>
        </div>
      </div>
    );
  }

  if (type === "frontend") {
    return (
      <div className="ks-stack-list">
        {[
          ["React", "UI"],
          ["Tailwind", "STYLE"],
          ["JavaScript", "LOGIC"],
          ["Figma", "DESIGN"],
        ].map(([name, meta]) => (
          <div key={name}>
            <span>{name}</span>
            <small>{meta}</small>
          </div>
        ))}
      </div>
    );
  }

  if (type === "backend") {
    return (
      <div className="ks-backend-visual">
        <div className="backend-layer">
          <span>REQUEST</span>
          <b>→</b>
        </div>

        <div className="backend-layer active">
          <span>SERVER</span>
          <b>→</b>
        </div>

        <div className="backend-layer">
          <span>DATABASE</span>
        </div>
      </div>
    );
  }

  return (
    <div className="ks-deploy-visual">
      <span>GIT</span>
      <b>→</b>
      <span>BUILD</span>
      <b>→</b>
      <span>DEPLOY</span>
    </div>
  );
}

/* =========================================================
   CAPABILITY CARD
========================================================= */

function CapCard({
  icon,
  title,
  desc,
  tag,
  type,
  index,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`ks-cap-card ks-cap-${type}`}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Ghost number */}
      <div className="ks-cap-number">
        {tag}
      </div>

      {/* Header */}
      <div className="ks-cap-top">
        <div className="ks-cap-icon">
          <span className="material-symbols-outlined">
            {icon}
          </span>
        </div>

        <span className="ks-cap-index">
          CAPABILITY / {tag}
        </span>
      </div>

      <div className="ks-cap-content">
        <h3>{title}</h3>

        <p>{desc}</p>
      </div>

      <ArchitectureVisual type={type} />

      <div
        className={`ks-cap-bottom ${
          hovered ? "active" : ""
        }`}
      >
        <span />
        <small>
          {type === "architecture"
            ? "PRODUCT FLOW"
            : type === "frontend"
              ? "INTERFACE LAYER"
              : type === "backend"
                ? "SERVICE LAYER"
                : "RELEASE PIPELINE"}
        </small>
      </div>
    </div>
  );
}

/* =========================================================
   NEURAL SKILL GRAPH
========================================================= */

function NeuralSkillGraph() {
  const [activeId, setActiveId] = useState("react");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    setReduceMotion(mq.matches);
  }, []);

  const activeSkill =
    GRAPH.leaves.find(
      (leaf) => leaf.id === activeId,
    ) || GRAPH.leaves[0];

  const activeHub = GRAPH.hubs.find(
    (hub) => hub.id === activeSkill.hubId,
  );

  return (
    <div data-reveal data-delay="300">
      {/* Legend */}
      <div className="ks-circuit-legend">
        {HUB_DEFS.map((hub) => (
          <div key={hub.id}>
            <span
              className="legend-dot"
              style={{
                background: hub.color,
                boxShadow: `0 0 9px ${hub.color}`,
              }}
            />

            <span>{hub.label}</span>
          </div>
        ))}

        <div className="legend-divider" />

        <div>
          <span className="legend-symbol core-symbol" />
          <span>CORE</span>
        </div>

        <div>
          <span className="legend-symbol active-symbol" />
          <span>ACTIVE</span>
        </div>

        <div>
          <span className="legend-symbol explore-symbol" />
          <span>EXPLORING</span>
        </div>
      </div>

      {/* Mobile hint */}
      <div className="ks-mobile-hint">
        <span className="material-symbols-outlined">
          swipe
        </span>

        <span>
          Swipe to explore the stack
        </span>
      </div>

      {/* Graph */}
      <div className="ks-graph-shell">
        <div className="ks-graph-corner corner-tl" />
        <div className="ks-graph-corner corner-tr" />
        <div className="ks-graph-corner corner-bl" />
        <div className="ks-graph-corner corner-br" />

        <svg
          viewBox="0 0 1000 700"
          className="ks-skill-svg"
          role="img"
          aria-label="Interactive skill graph"
        >
          {/* Core → hub */}
          {GRAPH.hubs.map((hub) => {
            const isActive =
              activeHub?.id === hub.id;

            return (
              <g key={`core-${hub.id}`}>
                <path
                  d={`M${GRAPH_CENTER.x},${GRAPH_CENTER.y} L${hub.x},${hub.y}`}
                  stroke={hub.color}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={
                    isActive ? 0.65 : 0.18
                  }
                  fill="none"
                />

                {!reduceMotion && (
                  <circle
                    r="3"
                    fill={hub.color}
                  >
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

          {/* Hub → leaf */}
          {GRAPH.leaves.map((leaf) => {
            const hub = GRAPH.hubs.find(
              (h) => h.id === leaf.hubId,
            );

            const isActive =
              activeId === leaf.id;

            return (
              <g key={`edge-${leaf.id}`}>
                <path
                  d={`M${hub.x},${hub.y} L${leaf.x},${leaf.y}`}
                  stroke={leaf.color}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={
                    isActive ? 0.65 : 0.15
                  }
                  fill="none"
                />

                {!reduceMotion && (
                  <circle
                    r="2.2"
                    fill={leaf.color}
                    opacity="0.85"
                  >
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      begin={`${
                        (leaf.id.length % 5) * 0.3
                      }s`}
                      path={`M${hub.x},${hub.y} L${leaf.x},${leaf.y}`}
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Core */}
          <g>
            <circle
              cx={GRAPH_CENTER.x}
              cy={GRAPH_CENTER.y}
              r="58"
              fill="rgba(13,162,231,0.05)"
              stroke={P}
              strokeOpacity="0.25"
              strokeWidth="1"
            />

            <circle
              cx={GRAPH_CENTER.x}
              cy={GRAPH_CENTER.y}
              r="48"
              fill="rgba(13,162,231,0.1)"
              stroke={P}
              strokeWidth="1.5"
            />

            <circle
              cx={GRAPH_CENTER.x}
              cy={GRAPH_CENTER.y}
              r="34"
              fill="#0c1a20"
              stroke={P}
              strokeOpacity="0.5"
            />

            <foreignObject
              x={GRAPH_CENTER.x - 30}
              y={GRAPH_CENTER.y - 30}
              width="60"
              height="60"
            >
              <div className="ks-core-svg-icon">
                <span className="material-symbols-outlined">
                  memory
                </span>
              </div>
            </foreignObject>

            <text
              x={GRAPH_CENTER.x}
              y={GRAPH_CENTER.y + 64}
              textAnchor="middle"
              fill="#fff"
              className="ks-svg-core-label"
            >
              KUSH.DEV
            </text>
          </g>

          {/* Hubs */}
          {GRAPH.hubs.map((hub) => (
            <g
              key={hub.id}
              transform={`translate(${hub.x},${hub.y})`}
            >
              <circle
                r="34"
                fill={`${hub.color}08`}
                stroke={hub.color}
                strokeOpacity="0.15"
                strokeWidth="8"
              />

              <circle
                r="30"
                fill="rgba(255,255,255,0.025)"
                stroke={hub.color}
                strokeOpacity="0.55"
                strokeWidth="1.5"
              />

              <foreignObject
                x="-16"
                y="-16"
                width="32"
                height="32"
              >
                <div className="ks-hub-icon">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: hub.color }}
                  >
                    {hub.icon}
                  </span>
                </div>
              </foreignObject>

              <text
                y={hub.angle === 90 ? 53 : -43}
                textAnchor="middle"
                fill="#fff"
                className="ks-svg-hub-label"
              >
                {hub.label}
              </text>
            </g>
          ))}

          {/* Leaves */}
          {GRAPH.leaves.map((leaf) => {
            const isActive =
              activeId === leaf.id;

            const labelBelow =
              leaf.y > GRAPH_CENTER.y;

            return (
              <g
                key={leaf.id}
                transform={`translate(${leaf.x},${leaf.y})`}
                className="ks-svg-node"
                role="button"
                tabIndex={0}
                aria-label={`${leaf.label} — ${leaf.desc}`}
                onMouseEnter={() =>
                  setActiveId(leaf.id)
                }
                onFocus={() =>
                  setActiveId(leaf.id)
                }
                onClick={() =>
                  setActiveId(leaf.id)
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    setActiveId(leaf.id);
                  }
                }}
              >
                {isActive && (
                  <circle
                    r={leaf.core ? 28 : 24}
                    fill="none"
                    stroke={leaf.color}
                    strokeOpacity="0.15"
                    strokeWidth="5"
                  />
                )}

                <circle
                  r={leaf.core ? 21 : 18}
                  fill={
                    isActive
                      ? `${leaf.color}22`
                      : "rgba(255,255,255,0.02)"
                  }
                  stroke={leaf.color}
                  strokeOpacity={
                    isActive ? 1 : 0.45
                  }
                  strokeWidth={
                    leaf.core ? 2 : 1.2
                  }
                  strokeDasharray={
                    leaf.core ? "0" : "2 2"
                  }
                />

                <foreignObject
                  x="-11"
                  y="-11"
                  width="22"
                  height="22"
                >
                  <div className="ks-leaf-icon">
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: leaf.color,
                      }}
                    >
                      {leaf.icon}
                    </span>
                  </div>
                </foreignObject>

                <text
                  y={labelBelow ? 34 : -28}
                  textAnchor="middle"
                  fill="#fff"
                  className={`ks-svg-leaf-label ${
                    isActive ? "active" : ""
                  }`}
                >
                  {leaf.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Active skill panel */}
      <div
        key={activeSkill.id}
        className="ks-signal-panel"
        style={{
          "--active-color": activeSkill.color,
        }}
      >
        <div className="ks-signal-icon">
          <span className="material-symbols-outlined">
            {activeSkill.icon}
          </span>
        </div>

        <div className="ks-signal-content">
          <div className="ks-signal-heading">
            <h4>{activeSkill.label}</h4>

            <span className="ks-signal-level">
              {activeSkill.level}
            </span>

            {activeSkill.core && (
              <span className="ks-signal-core">
                CORE
              </span>
            )}
          </div>

          <p>{activeSkill.desc}</p>

          <div className="ks-used">
            USED IN
            <span>{activeSkill.usedIn}</span>
          </div>
        </div>

        <div className="ks-signal-number">
          {String(
            GRAPH.leaves.findIndex(
              (item) =>
                item.id === activeSkill.id,
            ) + 1,
          ).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function SkillsPage() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const items =
      el.querySelectorAll("[data-reveal]");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    items.forEach((item) =>
      io.observe(item),
    );

    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* =====================================================
           SKILLS SYSTEM
        ===================================================== */

        #skill {
          --ks-bg: #0c1a20;
          --ks-panel: rgba(255,255,255,0.025);
          --ks-border: rgba(255,255,255,0.07);
          --ks-text: rgba(255,255,255,0.72);
          --ks-muted: rgba(255,255,255,0.42);
        }

        .ks-reveal {
          opacity: 0;
          transform: translateY(24px);
        }

        /* =====================================================
           REACTOR
        ===================================================== */

        .ks-reactor-wrap {
          width: 100%;
          max-width: 560px;
          margin: 0 auto;
          position: relative;
        }

        .ks-reactor-label {
          position: absolute;
          top: -28px;
          left: 15%;
          display: flex;
          align-items: center;
          gap: 9px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: .18em;
          color: rgba(255,255,255,.32);
          text-transform: uppercase;
        }

        .ks-reactor-label-line {
          width: 28px;
          height: 1px;
          background: ${P};
          box-shadow: 0 0 10px ${P};
        }

        .ks-reactor {
          width: min(88vw, 500px);
          height: min(88vw, 500px);
          margin: 0 auto;
          position: relative;
          perspective: 1000px;
        }

        .ks-reactor-glow {
          position: absolute;
          inset: 25%;
          border-radius: 50%;
          background:
            radial-gradient(
              circle,
              rgba(13,162,231,.19) 0%,
              rgba(13,162,231,.07) 32%,
              transparent 72%
            );
          filter: blur(24px);
          animation: ks-core-breathe 4s ease-in-out infinite;
        }

        .ks-orbit {
          position: absolute;
          inset: 12%;
          border-radius: 50%;
          pointer-events: none;
          border: 1px solid rgba(13,162,231,.13);
        }

        .orbit-a {
          transform:
            rotateX(67deg)
            rotateZ(0deg);
          animation: ks-orbit-a 14s linear infinite;
        }

        .orbit-b {
          inset: 18%;
          border-color: rgba(192,132,252,.15);
          transform:
            rotateY(62deg)
            rotateZ(20deg);
          animation: ks-orbit-b 18s linear infinite;
        }

        .orbit-c {
          inset: 7%;
          border-style: dashed;
          border-color: rgba(96,165,250,.10);
          transform:
            rotateX(58deg)
            rotateY(15deg);
          animation: ks-orbit-c 25s linear infinite;
        }

        .ks-orbit-dot {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          top: 50%;
          left: -3px;
          transform: translateY(-50%);
        }

        .dot-a {
          background: ${P};
          box-shadow: 0 0 16px ${P};
        }

        .dot-b {
          background: #c084fc;
          box-shadow: 0 0 16px #c084fc;
        }

        .dot-c {
          background: #60a5fa;
          box-shadow: 0 0 16px #60a5fa;
        }

        .ks-reactor-grid {
          position: absolute;
          inset: 21%;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.05);
          box-shadow:
            inset 0 0 50px rgba(13,162,231,.04),
            0 0 40px rgba(13,162,231,.04);
        }

        .ks-reactor-grid span {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,.045);
        }

        .ks-reactor-grid span:nth-child(2) {
          transform: rotate(90deg);
        }

        .ks-reactor-grid span:nth-child(3) {
          transform: rotate(45deg);
        }

        .ks-reactor-grid span:nth-child(4) {
          transform: rotate(-45deg);
        }

        .ks-core {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 138px;
          height: 138px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(
              circle at 35% 25%,
              rgba(13,162,231,.25),
              rgba(12,26,32,.96) 65%
            );
          border: 1px solid rgba(13,162,231,.45);
          box-shadow:
            0 0 0 10px rgba(13,162,231,.025),
            0 0 45px rgba(13,162,231,.13),
            inset 0 0 35px rgba(13,162,231,.09);
          z-index: 10;
        }

        .ks-core::before {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1px solid rgba(13,162,231,.12);
          animation: ks-core-ring 3s ease-in-out infinite;
        }

        .ks-core-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .ks-core-inner .material-symbols-outlined {
          color: ${P};
          font-size: 30px;
          filter: drop-shadow(0 0 10px rgba(13,162,231,.7));
        }

        .ks-core-inner strong {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          letter-spacing: .13em;
          color: white;
        }

        .ks-core-inner small {
          font-family: 'DM Mono', monospace;
          font-size: 7px;
          letter-spacing: .16em;
          color: rgba(255,255,255,.35);
        }

        .ks-data-pulse {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: ${P};
          box-shadow: 0 0 12px ${P};
          z-index: 8;
        }

        .pulse-1 {
          animation: ks-pulse-line-1 3s linear infinite;
        }

        .pulse-2 {
          animation: ks-pulse-line-2 4s linear infinite;
          background: #c084fc;
          box-shadow: 0 0 12px #c084fc;
        }

        .ks-reactor-node {
          position: absolute;
          z-index: 20;
        }

        .ks-node-card {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 11px;
          border-radius: 9px;
          background: rgba(8,18,23,.9);
          border: 1px solid color-mix(
            in srgb,
            var(--node-color) 30%,
            transparent
          );
          box-shadow:
            0 12px 35px rgba(0,0,0,.35),
            0 0 20px color-mix(
              in srgb,
              var(--node-color) 8%,
              transparent
            );
          backdrop-filter: blur(12px);
          color: rgba(255,255,255,.72);
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .12em;
          white-space: nowrap;
          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .ks-node-card:hover {
          transform: translateY(-3px);
          border-color: var(--node-color);
          box-shadow:
            0 15px 40px rgba(0,0,0,.4),
            0 0 20px color-mix(
              in srgb,
              var(--node-color) 18%,
              transparent
            );
        }

        .ks-node-card .material-symbols-outlined {
          color: var(--node-color);
          font-size: 14px;
        }

        .node-top {
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
        }

        .node-right {
          top: 29%;
          right: -2%;
        }

        .node-bottom-right {
          bottom: 8%;
          right: 8%;
        }

        .node-bottom-left {
          bottom: 8%;
          left: 8%;
        }

        .node-left {
          top: 29%;
          left: -2%;
        }

        .ks-system-label {
          position: absolute;
          font-family: 'DM Mono', monospace;
          font-size: 7px;
          letter-spacing: .14em;
          color: rgba(255,255,255,.22);
          text-transform: uppercase;
          display: flex;
          gap: 5px;
        }

        .ks-system-label span {
          color: ${P};
        }

        .label-ui {
          left: 11%;
          top: 51%;
        }

        .label-api {
          right: 9%;
          top: 51%;
        }

        .label-data {
          bottom: 18%;
          left: 50%;
          transform: translateX(-50%);
        }

        .ks-reactor-footer {
          width: 74%;
          margin: -3px auto 0;
          padding-top: 13px;
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,.06);
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .13em;
          color: rgba(255,255,255,.28);
        }

        .ks-reactor-footer > div {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 9px #4ade80;
        }

        /* =====================================================
           STATUS PANEL
        ===================================================== */

        .ks-status-panel {
          margin-top: 24px;
          padding: 18px;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 16px;
          background: rgba(255,255,255,.025);
          backdrop-filter: blur(14px);
        }

        .ks-status-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .ks-mini-label {
          display: block;
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .17em;
          color: rgba(255,255,255,.28);
          margin-bottom: 4px;
        }

        .ks-status-header h3 {
          margin: 0;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          color: white;
        }

        .ks-status-online {
          padding: 5px 8px;
          border-radius: 5px;
          border: 1px solid rgba(74,222,128,.2);
          background: rgba(74,222,128,.06);
          color: #4ade80;
          font-family: 'DM Mono', monospace;
          font-size: 7px;
          letter-spacing: .13em;
        }

        .ks-status-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .ks-status-item {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px;
          border-radius: 8px;
          background: rgba(255,255,255,.025);
        }

        .ks-status-indicator {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .ks-status-name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          color: rgba(255,255,255,.55);
        }

        .ks-status-state {
          margin-left: auto;
          font-family: 'DM Mono', monospace;
          font-size: 7px;
          letter-spacing: .08em;
        }

        /* =====================================================
           CAPABILITIES
        ===================================================== */

        .ks-cap-card {
          min-height: 360px;
          height: 100%;
          position: relative;
          overflow: hidden;
          padding: 24px;
          border: 1px solid rgba(255,255,255,.065);
          border-radius: 18px;
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.035),
              rgba(255,255,255,.012)
            );
          transition:
            transform .35s cubic-bezier(.2,.8,.2,1),
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .ks-cap-card:hover {
          transform: translateY(-7px);
          border-color: rgba(13,162,231,.25);
          box-shadow:
            0 25px 60px rgba(0,0,0,.25),
            0 0 30px rgba(13,162,231,.045);
        }

        .ks-cap-card::after {
          content: '';
          position: absolute;
          width: 180px;
          height: 180px;
          right: -80px;
          bottom: -100px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(13,162,231,.11),
            transparent 70%
          );
          pointer-events: none;
          transition: transform .5s ease;
        }

        .ks-cap-card:hover::after {
          transform: scale(1.5);
        }

        .ks-cap-architecture {
          grid-column: span 2;
        }

        .ks-cap-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ks-cap-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: rgba(13,162,231,.08);
          border: 1px solid rgba(13,162,231,.18);
        }

        .ks-cap-icon .material-symbols-outlined {
          color: ${P};
          font-size: 20px;
        }

        .ks-cap-index {
          font-family: 'DM Mono', monospace;
          font-size: 7px;
          letter-spacing: .15em;
          color: rgba(255,255,255,.22);
        }

        .ks-cap-number {
          position: absolute;
          right: 15px;
          top: 3px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 6rem;
          line-height: 1;
          color: rgba(13,162,231,.035);
          pointer-events: none;
        }

        .ks-cap-content {
          position: relative;
          z-index: 2;
          margin-top: 22px;
        }

        .ks-cap-content h3 {
          margin: 0 0 9px;
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 800;
          color: white;
        }

        .ks-cap-content p {
          margin: 0;
          max-width: 52ch;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 300;
          color: rgba(255,255,255,.43);
        }

        /* Architecture */
        .ks-architecture-flow {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 30px;
        }

        .flow-box {
          flex: 1;
          min-width: 0;
          padding: 13px 10px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,.07);
          background: rgba(255,255,255,.025);
        }

        .flow-box span {
          display: block;
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: white;
        }

        .flow-box small {
          display: block;
          margin-top: 4px;
          font-family: 'DM Mono', monospace;
          font-size: 7px;
          letter-spacing: .12em;
          color: rgba(255,255,255,.3);
        }

        .flow-ui {
          border-color: rgba(34,211,238,.25);
        }

        .flow-api {
          border-color: rgba(192,132,252,.25);
        }

        .flow-db {
          border-color: rgba(74,222,128,.25);
        }

        .flow-arrow {
          color: rgba(255,255,255,.22);
          font-size: 13px;
        }

        /* Stack */
        .ks-stack-list {
          position: relative;
          z-index: 2;
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
        }

        .ks-stack-list div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px;
          border-radius: 7px;
          background: rgba(255,255,255,.025);
          border-left: 2px solid rgba(34,211,238,.3);
        }

        .ks-stack-list span {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          color: rgba(255,255,255,.58);
        }

        .ks-stack-list small {
          font-family: 'DM Mono', monospace;
          font-size: 6px;
          color: rgba(255,255,255,.22);
        }

        /* Backend */
        .ks-backend-visual {
          position: relative;
          z-index: 2;
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .backend-layer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 11px;
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 7px;
          background: rgba(255,255,255,.02);
        }

        .backend-layer.active {
          border-color: rgba(192,132,252,.3);
          background: rgba(192,132,252,.045);
        }

        .backend-layer span {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .1em;
          color: rgba(255,255,255,.5);
        }

        .backend-layer b {
          color: #c084fc;
          font-weight: 400;
        }

        /* Deployment */
        .ks-deploy-visual {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 35px;
          padding: 18px 12px;
          border: 1px dashed rgba(251,146,60,.2);
          border-radius: 10px;
          background: rgba(251,146,60,.025);
        }

        .ks-deploy-visual span {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .1em;
          color: rgba(255,255,255,.55);
        }

        .ks-deploy-visual b {
          color: #fb923c;
          font-weight: 400;
        }

        .ks-cap-bottom {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 20px;
          display: flex;
          align-items: center;
          gap: 7px;
          opacity: .45;
          transition: opacity .3s ease;
        }

        .ks-cap-bottom.active,
        .ks-cap-card:hover .ks-cap-bottom {
          opacity: 1;
        }

        .ks-cap-bottom span {
          width: 18px;
          height: 1px;
          background: ${P};
        }

        .ks-cap-bottom small {
          font-family: 'DM Mono', monospace;
          font-size: 7px;
          letter-spacing: .15em;
          color: ${P};
        }

        /* =====================================================
           SKILL CIRCUIT
        ===================================================== */

        .ks-circuit-legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 15px;
          margin-bottom: 18px;
        }

        .ks-circuit-legend > div {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .11em;
          text-transform: uppercase;
          color: rgba(255,255,255,.38);
        }

        .legend-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .legend-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,.08);
        }

        .legend-symbol {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: block;
        }

        .core-symbol {
          border: 1px solid white;
          background: rgba(255,255,255,.08);
        }

        .active-symbol {
          border: 1px solid ${P};
          background: rgba(13,162,231,.2);
        }

        .explore-symbol {
          border: 1px dashed rgba(255,255,255,.45);
          background: transparent;
        }

        .ks-mobile-hint {
          display: none;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 9px;
          opacity: .4;
        }

        .ks-mobile-hint .material-symbols-outlined {
          color: ${P};
          font-size: 14px;
        }

        .ks-mobile-hint span:last-child {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: rgba(255,255,255,.5);
        }

        .ks-graph-shell {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.07);
          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(13,162,231,.035),
              transparent 45%
            ),
            rgba(255,255,255,.012);
        }

        .ks-graph-shell::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(
              rgba(255,255,255,.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.025) 1px,
              transparent 1px
            );
          background-size: 40px 40px;
          mask-image: radial-gradient(
            ellipse at center,
            black,
            transparent 85%
          );
          pointer-events: none;
        }

        .ks-graph-corner {
          position: absolute;
          width: 28px;
          height: 28px;
          border-color: rgba(13,162,231,.4);
          pointer-events: none;
          z-index: 3;
        }

        .corner-tl {
          top: 12px;
          left: 12px;
          border-top: 1px solid;
          border-left: 1px solid;
        }

        .corner-tr {
          top: 12px;
          right: 12px;
          border-top: 1px solid;
          border-right: 1px solid;
        }

        .corner-bl {
          bottom: 12px;
          left: 12px;
          border-bottom: 1px solid;
          border-left: 1px solid;
        }

        .corner-br {
          bottom: 12px;
          right: 12px;
          border-bottom: 1px solid;
          border-right: 1px solid;
        }

        .ks-skill-svg {
          width: 100%;
          min-width: 680px;
          height: auto;
          display: block;
        }

        .ks-core-svg-icon,
        .ks-hub-icon,
        .ks-leaf-icon {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .ks-core-svg-icon .material-symbols-outlined {
          color: ${P};
          font-size: 20px;
        }

        .ks-hub-icon .material-symbols-outlined {
          font-size: 17px;
        }

        .ks-leaf-icon .material-symbols-outlined {
          font-size: 13px;
        }

        .ks-svg-core-label {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .08em;
        }

        .ks-svg-hub-label {
          font-family: 'DM Mono', monospace;
          font-size: 10.5px;
          letter-spacing: .1em;
          opacity: .75;
        }

        .ks-svg-leaf-label {
          font-family: 'Syne', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: .02em;
          opacity: .58;
          transition: opacity .2s ease;
        }

        .ks-svg-leaf-label.active {
          opacity: 1;
        }

        .ks-svg-node {
          cursor: pointer;
          outline: none;
        }

        .ks-svg-node:focus-visible circle {
          stroke-width: 3;
        }

        .ks-signal-panel {
          position: relative;
          display: flex;
          align-items: center;
          gap: 17px;
          margin-top: 18px;
          padding: 19px;
          border-radius: 16px;
          border: 1px solid color-mix(
            in srgb,
            var(--active-color) 25%,
            transparent
          );
          background:
            linear-gradient(
              100deg,
              color-mix(
                in srgb,
                var(--active-color) 5%,
                transparent
              ),
              rgba(255,255,255,.018)
            );
          animation: ks-panel-in .35s ease;
          overflow: hidden;
        }

        .ks-signal-panel::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--active-color);
          box-shadow: 0 0 18px var(--active-color);
        }

        .ks-signal-icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--active-color);
          background: color-mix(
            in srgb,
            var(--active-color) 9%,
            transparent
          );
          border: 1px solid color-mix(
            in srgb,
            var(--active-color) 25%,
            transparent
          );
        }

        .ks-signal-icon .material-symbols-outlined {
          font-size: 22px;
        }

        .ks-signal-content {
          flex: 1;
          min-width: 0;
        }

        .ks-signal-heading {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 5px;
        }

        .ks-signal-heading h4 {
          margin: 0;
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: white;
        }

        .ks-signal-level,
        .ks-signal-core {
          padding: 3px 6px;
          border-radius: 4px;
          font-family: 'DM Mono', monospace;
          font-size: 7px;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .ks-signal-level {
          color: var(--active-color);
          background: color-mix(
            in srgb,
            var(--active-color) 8%,
            transparent
          );
          border: 1px solid color-mix(
            in srgb,
            var(--active-color) 20%,
            transparent
          );
        }

        .ks-signal-core {
          color: ${P};
          background: rgba(13,162,231,.08);
          border: 1px solid rgba(13,162,231,.2);
        }

        .ks-signal-content p {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 1.65;
          color: rgba(255,255,255,.48);
        }

        .ks-used {
          margin-top: 7px;
          font-family: 'DM Mono', monospace;
          font-size: 7px;
          letter-spacing: .12em;
          color: rgba(255,255,255,.25);
        }

        .ks-used span {
          margin-left: 7px;
          color: rgba(255,255,255,.55);
        }

        .ks-signal-number {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 55px;
          line-height: 1;
          color: rgba(255,255,255,.035);
        }

        /* =====================================================
           CTA
        ===================================================== */

        .ks-final-cta {
          position: relative;
          overflow: hidden;
          padding: 55px 30px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.07);
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(13,162,231,.08),
              transparent 60%
            ),
            rgba(255,255,255,.018);
        }

        .ks-final-cta::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -80px;
          width: 300px;
          height: 180px;
          transform: translateX(-50%);
          border-radius: 50%;
          border: 1px solid rgba(13,162,231,.1);
          box-shadow:
            0 0 50px rgba(13,162,231,.06);
        }

        .ks-final-eyebrow {
          position: relative;
          z-index: 2;
          margin-bottom: 10px;
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .2em;
          color: ${P};
        }

        .ks-final-title {
          position: relative;
          z-index: 2;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: .95;
          letter-spacing: .04em;
          color: white;
        }

        .ks-final-title span {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,.25);
        }

        .ks-final-copy {
          position: relative;
          z-index: 2;
          max-width: 48ch;
          margin: 14px auto 23px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(255,255,255,.42);
        }

        .ks-build-line {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 24px;
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .12em;
          color: rgba(255,255,255,.35);
        }

        .ks-build-line span {
          color: ${P};
        }

        .ks-final-button {
          position: relative;
          z-index: 2;
          height: 45px;
          padding: 0 21px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 10px;
          border: 1px solid rgba(13,162,231,.35);
          background: rgba(13,162,231,.1);
          color: white;
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .05em;
          transition: all .3s ease;
        }

        .ks-final-button:hover {
          transform: translateY(-3px);
          background: rgba(13,162,231,.18);
          border-color: ${P};
          box-shadow: 0 12px 35px rgba(13,162,231,.13);
        }

        /* =====================================================
           BOTTOM SIGNATURE
        ===================================================== */

        .ks-signature {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 13px;
          padding: 23px 20px;
          border-top: 1px solid rgba(255,255,255,.06);
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: .14em;
          color: rgba(255,255,255,.28);
          text-transform: uppercase;
        }

        .ks-signature strong {
          color: rgba(255,255,255,.65);
          font-weight: 400;
        }

        .ks-signature-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: ${P};
          box-shadow: 0 0 8px ${P};
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes ks-core-breathe {
          0%,100% {
            transform: scale(.9);
            opacity: .65;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes ks-core-ring {
          0%,100% {
            transform: scale(.94);
            opacity: .3;
          }
          50% {
            transform: scale(1.08);
            opacity: .8;
          }
        }

        @keyframes ks-orbit-a {
          from {
            transform:
              rotateX(67deg)
              rotateZ(0deg);
          }
          to {
            transform:
              rotateX(67deg)
              rotateZ(360deg);
          }
        }

        @keyframes ks-orbit-b {
          from {
            transform:
              rotateY(62deg)
              rotateZ(20deg);
          }
          to {
            transform:
              rotateY(62deg)
              rotateZ(-340deg);
          }
        }

        @keyframes ks-orbit-c {
          from {
            transform:
              rotateX(58deg)
              rotateY(15deg)
              rotateZ(0deg);
          }
          to {
            transform:
              rotateX(58deg)
              rotateY(15deg)
              rotateZ(360deg);
          }
        }

        @keyframes ks-pulse-line-1 {
          0% {
            transform: translate(-2px,-2px) scale(1);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(150px,-80px) scale(.4);
            opacity: 0;
          }
        }

        @keyframes ks-pulse-line-2 {
          0% {
            transform: translate(0,0) scale(1);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          100% {
            transform: translate(-120px,90px) scale(.4);
            opacity: 0;
          }
        }

        @keyframes ks-panel-in {
          from {
            opacity: .3;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1023px) {
          .ks-cap-architecture {
            grid-column: span 1;
          }

          .ks-reactor {
            width: min(78vw, 470px);
            height: min(78vw, 470px);
          }
        }

        @media (max-width: 767px) {
          .ks-reactor-label {
            left: 5%;
          }

          .ks-reactor {
            width: min(94vw, 410px);
            height: min(94vw, 410px);
          }

          .ks-core {
            width: 112px;
            height: 112px;
          }

          .ks-core-inner .material-symbols-outlined {
            font-size: 25px;
          }

          .ks-core-inner strong {
            font-size: 9px;
          }

          .ks-node-card {
            padding: 7px 8px;
            font-size: 7px;
          }

          .node-right {
            right: -4%;
          }

          .node-left {
            left: -4%;
          }

          .ks-system-label {
            display: none;
          }

          .ks-reactor-footer {
            width: 90%;
          }

          .ks-status-grid {
            grid-template-columns: 1fr;
          }

          .ks-cap-card {
            min-height: 340px;
          }

          .ks-circuit-legend {
            gap: 10px;
          }

          .legend-divider {
            display: none;
          }

          .ks-mobile-hint {
            display: flex;
          }

          .ks-signal-panel {
            align-items: flex-start;
          }

          .ks-signal-number {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .ks-node-card span:last-child {
            display: none;
          }

          .ks-node-card {
            width: 30px;
            height: 30px;
            padding: 0;
            justify-content: center;
            border-radius: 50%;
          }

          .node-top {
            top: 7%;
          }

          .node-right {
            right: 1%;
          }

          .node-left {
            left: 1%;
          }

          .node-bottom-right {
            right: 15%;
          }

          .node-bottom-left {
            left: 15%;
          }

          .ks-architecture-flow {
            gap: 5px;
          }

          .flow-arrow {
            font-size: 10px;
          }

          .flow-box {
            padding: 10px 7px;
          }

          .ks-stack-list {
            grid-template-columns: 1fr;
          }

          .ks-signal-panel {
            padding: 15px;
            gap: 12px;
          }

          .ks-signal-icon {
            width: 42px;
            height: 42px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .ks-orbit,
          .ks-reactor-glow,
          .ks-core::before,
          .ks-data-pulse {
            animation: none !important;
          }

          .ks-cap-card,
          .ks-node-card,
          .ks-final-button {
            transition: none !important;
          }
        }

        .ks-reduced .ks-orbit,
        .ks-reduced .ks-reactor-glow,
        .ks-reduced .ks-core::before,
        .ks-reduced .ks-data-pulse {
          animation: none !important;
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
          overflow: "hidden",
        }}
      >
        {/* =====================================================
            BACKGROUND SYSTEM
        ===================================================== */}

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

        {/* Top cyan atmosphere */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "700px",
            height: "350px",
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(13,162,231,.09), transparent 68%)",
            filter: "blur(20px)",
          }}
        />

        {/* Purple backend atmosphere */}
        <div
          className="absolute top-[30%] right-[-150px] pointer-events-none"
          style={{
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(192,132,252,.045), transparent 70%)",
          }}
        />

        {/* Bottom atmosphere */}
        <div
          className="absolute bottom-0 left-[-150px] pointer-events-none"
          style={{
            width: "500px",
            height: "450px",
            background:
              "radial-gradient(circle, rgba(13,162,231,.055), transparent 70%)",
          }}
        />

        {/* Side label */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-3 pointer-events-none opacity-25">
          <div
            style={{
              width: 1,
              height: 85,
              background:
                "linear-gradient(to bottom, transparent, rgba(13,162,231,.6), transparent)",
            }}
          />

          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: ".2em",
              color: P,
              writingMode: "vertical-rl",
            }}
          >
            ENGINEERING SYSTEM / 2026
          </span>
        </div>

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="relative z-10 min-h-screen flex items-center py-28 px-6 md:px-12">
          <div className="max-w-[1200px] w-full mx-auto grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* LEFT */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              {/* Label */}
              <div
                data-reveal
                data-delay="100"
                className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
              >
                <span
                  style={{
                    width: 38,
                    height: 2,
                    borderRadius: 2,
                    background: P,
                    boxShadow: `0 0 12px ${P}`,
                  }}
                />

                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    letterSpacing: ".2em",
                    color: P,
                    textTransform: "uppercase",
                  }}
                >
                  002 / Tech Arsenal
                </span>
              </div>

              {/* Headline */}
              <div
                data-reveal
                data-delay="200"
                className="text-center lg:text-left"
              >
                <h2
                  style={{
                    margin: 0,
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize:
                      "clamp(4.5rem, 9vw, 7.2rem)",
                    lineHeight: ".82",
                    letterSpacing: ".035em",
                    color: "#fff",
                  }}
                >
                  TECHNICAL
                </h2>

                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize:
                      "clamp(4.5rem, 9vw, 7.2rem)",
                    lineHeight: ".82",
                    letterSpacing: ".035em",
                    color: "transparent",
                    WebkitTextStroke:
                      "1.5px rgba(255,255,255,.22)",
                  }}
                >
                  ARSENAL
                </div>
              </div>

              {/* Copy */}
              <div
                data-reveal
                data-delay="300"
                className="mt-8 text-center lg:text-left"
              >
                <div
                  style={{
                    width: 36,
                    height: 2,
                    background:
                      "rgba(13,162,231,.35)",
                    marginBottom: 15,
                    marginLeft:
                      typeof window !== "undefined" &&
                      window.innerWidth < 1024
                        ? "auto"
                        : 0,
                    marginRight:
                      typeof window !== "undefined" &&
                      window.innerWidth < 1024
                        ? "auto"
                        : 0,
                  }}
                />

                <p
                  style={{
                    maxWidth: "48ch",
                    margin: "0 auto",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 15,
                    lineHeight: 1.8,
                    fontWeight: 300,
                    color: "rgba(255,255,255,.5)",
                  }}
                  className="lg:mx-0"
                >
                  A focused stack of{" "}
                  <strong
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    modern web technologies
                  </strong>{" "}
                  I use to design, develop, deploy, and
                  maintain real-world products — from
                  interface to production.
                </p>
              </div>

              {/* Stack status */}
              <div
                data-reveal
                data-delay="400"
              >
                <StackStatus />
              </div>

              {/* CTAs */}
              <div
                data-reveal
                data-delay="500"
                className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6"
              >
                <a href="#skill-graph">
                  <button className="kds-btn-primary">
                    Explore Skill Circuit
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 15,
                      }}
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
                      style={{
                        fontSize: 15,
                        color: P,
                      }}
                    >
                      arrow_forward
                    </span>
                  </button>
                </a>
              </div>
            </div>

            {/* RIGHT — REACTOR */}
            <div
              data-reveal="right"
              data-delay="200"
              className="lg:col-span-6 order-1 lg:order-2"
            >
              <SkillReactor />
            </div>
          </div>

          {/* Scroll hint */}
          <div
            className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-25"
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 8,
                letterSpacing: ".2em",
                textTransform: "uppercase",
              }}
            >
              Continue
            </span>

            <span
              className="material-symbols-outlined"
              style={{
                fontSize: 14,
                color: P,
              }}
            >
              keyboard_arrow_down
            </span>
          </div>
        </div>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <div
          className="relative z-10 py-24 px-6 md:px-12"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Section divider */}
            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,.08), transparent)",
                marginBottom: 60,
              }}
            />

            {/* Header */}
            <div
              data-reveal
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    style={{
                      width: 3,
                      height: 23,
                      background: P,
                      borderRadius: 2,
                    }}
                  />

                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 9,
                      letterSpacing: ".18em",
                      color: P,
                      textTransform: "uppercase",
                    }}
                  >
                    01 / Engineering Capabilities
                  </span>
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Syne', sans-serif",
                    fontSize:
                      "clamp(1.8rem, 4vw, 2.7rem)",
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  HOW I BUILD
                </h3>
              </div>

              <p
                style={{
                  maxWidth: "42ch",
                  margin: 0,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,.35)",
                }}
              >
                From interface architecture to
                deployment, every layer has a purpose.
              </p>
            </div>

            {/* Cards */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {CAPABILITIES.map(
                (capability, index) => (
                  <div
                    key={capability.tag}
                    data-reveal
                    data-delay={
                      (index + 1) * 100
                    }
                    className={
                      capability.type ===
                      "architecture"
                        ? "lg:col-span-2"
                        : ""
                    }
                  >
                    <CapCard
                      {...capability}
                      index={index}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* =====================================================
            SKILL CIRCUIT
        ===================================================== */}

        <div
          id="skill-graph"
          className="relative z-10 py-28 px-6 md:px-12"
        >
          <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <div
              data-reveal
              className="text-center mb-10"
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  letterSpacing: ".2em",
                  color: P,
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                02 / System Map
              </div>

              <div
                style={{
                  fontFamily:
                    "'Bebas Neue', sans-serif",
                  fontSize:
                    "clamp(3.5rem, 7vw, 5.8rem)",
                  lineHeight: ".9",
                  letterSpacing: ".04em",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                  }}
                >
                  SKILL
                </span>{" "}
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke:
                      "1.5px rgba(255,255,255,.22)",
                  }}
                >
                  CIRCUIT
                </span>
              </div>

              <p
                style={{
                  maxWidth: "48ch",
                  margin:
                    "14px auto 0",
                  fontFamily:
                    "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color:
                    "rgba(255,255,255,.4)",
                }}
              >
                Every technology traces back to
                the stack I use to build real
                products. Select a node to inspect
                the connection.
              </p>
            </div>

            <NeuralSkillGraph />

            {/* Final CTA */}
            <div
              data-reveal
              data-delay="200"
              className="mt-20"
            >
              <div className="ks-final-cta text-center">
                <div className="ks-final-eyebrow">
                  BUILD SYSTEM / READY
                </div>

                <div className="ks-final-title">
                  BUILD SOMETHING{" "}
                  <span>REAL.</span>
                </div>

                <p className="ks-final-copy">
                  Clean architecture, practical
                  solutions, continuous learning —
                  let's turn an idea into a working
                  product.
                </p>

                <div className="ks-build-line">
                  <strong>BUILD</strong>
                  <span>→</span>
                  <strong>SHIP</strong>
                  <span>→</span>
                  <strong>ITERATE</strong>
                  <span>→</span>
                  <strong>REPEAT</strong>
                </div>

                <a href="#connect">
                  <button className="ks-final-button">
                    Start Collaboration

                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 15,
                      }}
                    >
                      arrow_forward
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SIGNATURE
        ===================================================== */}

        <div className="relative z-10">
          <div className="ks-signature">
            <strong>KUSH.DEV</strong>

            <span className="ks-signature-dot" />

            <span>React</span>

            <span className="ks-signature-dot" />

            <span>Node.js</span>

            <span className="ks-signature-dot" />

            <span>MongoDB</span>

            <span className="ks-signature-dot" />

            <span>REST</span>

            <span className="ks-signature-dot" />

            <span>Git</span>

            <span className="ks-signature-dot" />

            <span>Cloud</span>
          </div>
        </div>
      </section>
    </>
  );
}