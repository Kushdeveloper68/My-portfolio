import { useState, useRef, useEffect } from "react";
import { ColorBends } from "../components";

const NAV_LINKS = [
  { href: "#hero",        label: "Home"       },
  { href: "#about",       label: "About"      },
  { href: "#skill",       label: "Skills"     },
  { href: "#services",    label: "Services"   },
  { href: "#project",     label: "Projects"   },
  { href: "#experience",  label: "Experience" },
  { href: "#certificate", label: "Certs"      },
  { href: "#connect",     label: "Contact"    },
];

/**
 * MINIMAL <style> block — contains ONLY:
 *  1. Google Fonts @import        (impossible in Tailwind)
 *  2. @keyframes definitions      (impossible in Tailwind)
 *  3. Tiny .hro-* animation helpers that reference those keyframes
 *
 * Every colour, spacing, border, radius, hover, transition, and layout
 * is expressed in Tailwind utility / arbitrary-value classes below.
 * The .hro-* prefix is unique enough that it will never collide with
 * Tailwind's own generated class names.
 */


export default function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled  ] = useState(false);
  const firstRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    firstRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  /* font-family can't be expressed in default Tailwind config, kept as style objects */
  const fBebas  = { fontFamily: "'Bebas Neue', sans-serif" };
  const fSyne   = { fontFamily: "'Syne', sans-serif"       };
  const fMono   = { fontFamily: "'DM Mono', monospace"     };
  const fDMSans = { fontFamily: "'DM Sans', sans-serif"    };

  return (
    <>

      {/* ════════════════════════════════════════
          SECTION ROOT
      ════════════════════════════════════════ */}
      <section id="hero" className="relative isolate min-h-screen overflow-hidden text-white">

        {/* ── Background layers ── */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-black" />

          <div className="absolute inset-0 mix-blend-screen pointer-events-auto">
            <ColorBends
              rotation={105} speed={0.2} colors={["#5227FF","#FF9FFC"]}
              transparent autoRotate={0} scale={1} frequency={1}
              warpStrength={1} mouseInfluence={1} parallax={0.5}
              noise={0.15} iterations={1} intensity={1.5} bandWidth={6}
            />
          </div>

          {/* Radial vignette — multi-stop radial-gradient needs inline style */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(0,0,0,0.55) 100%)" }}
          />
          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))" }}
          />
        </div>

        {/* Ghost watermark */}
        <div
          className="absolute top-1/2 -left-5 -translate-y-1/2 pointer-events-none select-none z-0 whitespace-nowrap leading-none tracking-[0.05em]"
          style={{ ...fBebas, fontSize: "clamp(120px,20vw,220px)", color: "rgba(123,63,255,0.04)" }}
        >
          KUSH
        </div>

        {/* ════════════════════════════════════════
            NAVBAR
        ════════════════════════════════════════ */}
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-black/[0.72] backdrop-blur-2xl border-b border-[rgba(123,63,255,0.12)]"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-[1300px] mx-auto px-7 h-[70px] flex items-center justify-between">

            {/* Logo */}
            <a href="#hero" className="flex items-center gap-[11px] no-underline">
              <div
                className="w-10 h-10 rounded-[11px] flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg,rgba(107,47,255,0.22),rgba(232,74,240,0.14))",
                  border: "1px solid rgba(107,47,255,0.32)",
                  boxShadow: "0 0 22px rgba(107,47,255,0.22),inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <span className="material-symbols-outlined text-[#c49bff] text-[19px]">code_blocks</span>
              </div>
              <div>
                <div
                  className="leading-none bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent tracking-[0.08em]"
                  style={{ ...fBebas, fontSize: "26px" }}
                >
                  KUSH
                </div>
                <div
                  className="text-[#b57bff] mt-[1px] uppercase tracking-[0.3em]"
                  style={{ ...fMono, fontSize: "8.5px" }}
                >
                  Portfolio
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={[
                    "relative no-underline uppercase tracking-[0.1em]",
                    "text-white/40 hover:text-white transition-colors duration-300",
                    "pb-[2px]",
                    // gradient underline via Tailwind after: utilities
                    "after:absolute after:bottom-[-2px] after:left-0",
                    "after:w-0 after:h-[1.5px] after:rounded-sm",
                    "after:bg-gradient-to-r after:from-[#7B3FFF] after:to-[#FF6FE8]",
                    "after:transition-all after:duration-[380ms] after:ease-out",
                    "hover:after:w-full",
                  ].join(" ")}
                  style={{ ...fSyne, fontSize: "11.5px", fontWeight: 700 }}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <a
                href="/developer-kush-resume.pdf"
                download
                className={[
                  "hidden md:inline-flex items-center gap-[7px]",
                  "h-[38px] px-[18px] rounded-[9px] no-underline text-white",
                  "uppercase tracking-[0.12em]",
                  "transition-all duration-300 hover:-translate-y-0.5",
                  "hover:shadow-[0_8px_24px_rgba(107,47,255,0.45)]",
                ].join(" ")}
                style={{ ...fSyne, fontSize: "10.5px", fontWeight: 800, background: "linear-gradient(135deg,#6b2fff,#e84af0)" }}
              >
                <span className="material-symbols-outlined text-[15px]">download</span>
                Resume
              </a>

              <button
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                className="bg-white/[0.04] border border-white/10 rounded-[9px] p-[7px] cursor-pointer text-white leading-none hover:bg-white/[0.08] transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-[22px]">
                  {mobileOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* ════════════════════════════════════════
            MOBILE NAV
        ════════════════════════════════════════ */}
        {mobileOpen && (
          <div
            onClick={close}
            className="fixed inset-0 bg-black/65 z-40 md:hidden backdrop-blur-[6px]"
          />
        )}

        <nav
          className={[
            "fixed top-0 right-0 h-full z-[60] w-[300px]",
            "border-l border-[rgba(107,47,255,0.18)] backdrop-blur-2xl",
            "transition-transform duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          ].join(" ")}
          style={{
            background: "rgba(4,0,12,0.97)",
            transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-[18px] py-[18px] border-b border-white/5">
            <div className="flex items-center gap-[10px]">
              <div
                className="w-[34px] h-[34px] rounded-[9px] flex items-center justify-center"
                style={{ background: "rgba(107,47,255,0.18)", border: "1px solid rgba(107,47,255,0.3)" }}
              >
                <span className="material-symbols-outlined text-[#c49bff] text-[17px]">code_blocks</span>
              </div>
              <div className="tracking-[0.08em]" style={{ ...fBebas, fontSize: "22px" }}>KUSH</div>
            </div>
            <button
              onClick={close}
              className="bg-transparent border-none text-white/45 cursor-pointer p-1 leading-none"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Links */}
          <div className="p-[14px]">
            <ul className="list-none flex flex-col gap-[2px]">
              {NAV_LINKS.map(({ href, label }, i) => (
                <li key={href}>
                  <a
                    ref={i === 0 ? firstRef : null}
                    href={href}
                    onClick={close}
                    className={[
                      "flex items-center gap-[10px] no-underline uppercase tracking-[0.07em]",
                      "text-white/45 hover:text-white",
                      "py-[13px] px-[14px] rounded-[10px]",
                      "hover:bg-[rgba(123,63,255,0.13)] hover:pl-5",
                      "transition-all duration-[250ms]",
                    ].join(" ")}
                    style={{ ...fSyne, fontSize: "13px", fontWeight: 700 }}
                  >
                    {label}
                  </a>
                </li>
              ))}

              <li className="mt-5">
                <a
                  href="/developer-kush-resume.pdf"
                  download
                  onClick={close}
                  className={[
                    "flex items-center justify-center gap-[8px] w-full h-12 rounded-[11px]",
                    "no-underline text-white uppercase tracking-[0.14em]",
                    "transition-all duration-300 hover:-translate-y-0.5",
                    "hover:shadow-[0_12px_32px_rgba(107,47,255,0.4)]",
                  ].join(" ")}
                  style={{ ...fSyne, fontSize: "11px", fontWeight: 800, background: "linear-gradient(135deg,#6b2fff,#e84af0)" }}
                >
                  <span className="material-symbols-outlined text-[17px]">download</span>
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* ════════════════════════════════════════
            HERO MAIN CONTENT
        ════════════════════════════════════════ */}
        <main className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 pt-[100px] pb-20 text-center">
          <div className="flex flex-col items-center max-w-[920px] w-full">

            {/* Status badge */}
            <div className="hro-a1 mb-[30px] relative overflow-hidden inline-flex items-center gap-[10px] rounded-full px-5 py-[9px] border border-[rgba(107,47,255,0.28)] bg-[rgba(107,47,255,0.1)]">
              {/* shimmer sweep */}
              <div className="hro-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent rounded-full" />
              {/* pulse dot */}
              <span className="hro-pulse relative z-10 block w-[7px] h-[7px] rounded-full shrink-0 bg-gradient-to-br from-[#7B3FFF] to-[#FF6FE8]" />
              <span
                className="relative z-10 text-[#c49bff] uppercase tracking-[0.18em]"
                style={{ ...fMono, fontSize: "10px" }}
              >
                Full Stack Dev · Open to Opportunities
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="hro-a2 leading-[0.9] mb-4"
              style={{ ...fBebas, fontSize: "clamp(4.2rem,13vw,10rem)", letterSpacing: "0.025em" }}
            >
              <span className="block text-white" style={{ letterSpacing: "0.03em" }}>CRAFTING</span>
              <span className="block bg-gradient-to-r from-[#a87cff] via-[#ff79f2] to-[#ffbaf9] bg-clip-text text-transparent">
                DIGITAL
              </span>
              {/* -webkit-text-stroke has no Tailwind utility — one unavoidable inline style */}
              <span
                className="block"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.22)", color: "transparent" }}
              >
                EXCELLENCE
              </span>
            </h1>

            {/* Divider */}
            <div
              className="hro-a3 hro-divider my-[26px] max-w-[440px] w-full rounded-sm"
              style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(123,63,255,0.5),rgba(255,111,232,0.5),transparent)" }}
            />

            {/* Tech chips */}
            <div className="hro-a3 flex items-center gap-2 flex-wrap justify-center mb-[22px]">
              {["React / Next.js","Node.js","TypeScript","Full Stack","Problem Solver"].map(t => (
                <span
                  key={t}
                  className={[
                    "border border-white/[0.08] bg-white/[0.03] text-white/[0.38]",
                    "rounded-full px-[13px] py-[5px] uppercase tracking-[0.13em]",
                    "transition-all duration-[280ms] cursor-default",
                    "hover:text-white/75 hover:border-[rgba(123,63,255,0.35)] hover:bg-[rgba(123,63,255,0.08)]",
                  ].join(" ")}
                  style={{ ...fMono, fontSize: "9.5px" }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Description */}
            <p
              className="hro-a4 text-white/40 max-w-[520px] mb-11 leading-[1.8]"
              style={{ ...fDMSans, fontWeight: 300, fontStyle: "italic", fontSize: "clamp(14px,2vw,17.5px)", letterSpacing: "0.01em" }}
            >
              I build scalable, blazing-fast web experiences — from pixel-perfect frontends
              to robust back-end systems.{" "}
              <span className="not-italic font-medium text-white/65">
                Every line of code is crafted with intention.
              </span>
            </p>

            {/* CTA buttons */}
            <div className="hro-a5 flex gap-[14px] flex-wrap justify-center">

              {/* Primary gradient button */}
              <a
                href="#project"
                className={[
                  "relative overflow-hidden inline-flex items-center gap-[9px]",
                  "h-[52px] px-[30px] rounded-[12px] no-underline text-white uppercase tracking-[0.14em]",
                  "transition-all duration-300",
                  "hover:-translate-y-[3px]",
                  "hover:shadow-[0_14px_40px_rgba(107,47,255,0.5),0_4px_16px_rgba(232,74,240,0.3)]",
                  // shimmer layer via before:
                  "before:absolute before:inset-0",
                  "before:bg-gradient-to-br before:from-white/[0.18] before:to-transparent",
                  "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
                ].join(" ")}
                style={{ ...fSyne, fontSize: "11px", fontWeight: 800, background: "linear-gradient(135deg,#6b2fff 0%,#e84af0 100%)" }}
              >
                <span className="material-symbols-outlined relative z-10 text-[18px]">grid_view</span>
                <span className="relative z-10">View Projects</span>
              </a>

              {/* Ghost button */}
              <a
                href="mailto:kushpandit68775@gmail.com"
                className={[
                  "inline-flex items-center gap-[9px]",
                  "h-[52px] px-[30px] rounded-[12px] no-underline uppercase tracking-[0.14em]",
                  "text-white/[0.72] bg-white/[0.03]",
                  "border border-white/[0.12] backdrop-blur-[12px]",
                  "transition-all duration-[320ms]",
                  "hover:text-white hover:bg-[rgba(123,63,255,0.1)]",
                  "hover:border-[rgba(123,63,255,0.45)] hover:-translate-y-[3px]",
                  "hover:shadow-[0_10px_30px_rgba(123,63,255,0.2)]",
                ].join(" ")}
                style={{ ...fSyne, fontSize: "11px", fontWeight: 800 }}
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                Contact Me
              </a>
            </div>
          </div>

          {/* Floating code widget — left */}
          <div className="hro-float-l hidden lg:block absolute top-[27%] left-[4.5%] opacity-20 pointer-events-none">
            <div
              className="rounded-[14px] p-[18px] backdrop-blur-[10px]"
              style={{ background: "rgba(107,47,255,0.08)", border: "1px solid rgba(107,47,255,0.2)" }}
            >
              <div className="flex gap-[6px] mb-[13px]">
                {["#ff5f57","#febc2e","#28c840"].map(c => (
                  <div key={c} className="w-[9px] h-[9px] rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="text-white/55 leading-[1.85]" style={{ ...fMono, fontSize: "10.5px" }}>
                <div>
                  <span className="text-[#b57bff]">const</span>{" "}
                  <span className="text-white">kush</span>{" "}
                  <span className="text-white/25">=</span> {"{"}
                </div>
                <div className="pl-[14px]">
                  <span className="text-[#FF6FE8]">role</span>
                  <span className="text-white/25">: </span>
                  <span className="text-[#7fffc0]">"Full Stack"</span>,
                </div>
                <div className="pl-[14px]">
                  <span className="text-[#FF6FE8]">passion</span>
                  <span className="text-white/25">: </span>
                  <span className="text-[#7fffc0]">"Build cool stuff"</span>,
                </div>
                <div className="pl-[14px]">
                  <span className="text-[#FF6FE8]">status</span>
                  <span className="text-white/25">: </span>
                  <span className="text-[#7fffc0]">"Open"</span>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>

          {/* Floating stats widget — right */}
          <div className="hro-float-r hidden lg:block absolute bottom-[26%] right-[4.5%] opacity-[0.22] pointer-events-none">
            <div
              className="rounded-[14px] px-6 py-5 backdrop-blur-[10px] min-w-[148px]"
              style={{ background: "rgba(232,74,240,0.06)", border: "1px solid rgba(232,74,240,0.17)" }}
            >
              {[["10+","Projects"],["3+","Yrs Coding"],["100%","Passion"],["∞","Coffee"]].map(([num, lbl]) => (
                <div key={lbl} className="flex justify-between items-baseline gap-[18px] mb-[10px]">
                  <span
                    className="bg-gradient-to-br from-[#c49bff] to-[#ff79f2] bg-clip-text text-transparent"
                    style={{ ...fBebas, fontSize: "24px" }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-white/35 uppercase tracking-[0.1em]"
                    style={{ ...fMono, fontSize: "8.5px" }}
                  >
                    {lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Scroll indicator */}
        <div className="hro-a6 absolute bottom-[30px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
          <span
            className="text-white/30 uppercase tracking-[0.28em]"
            style={{ ...fMono, fontSize: "8.5px" }}
          >
            Scroll
          </span>
          <div
            className="hro-scroll-line w-px h-11 rounded-sm"
            style={{ background: "linear-gradient(to bottom,rgba(123,63,255,0.9),transparent)" }}
          />
        </div>

      </section>
    </>
  );
}