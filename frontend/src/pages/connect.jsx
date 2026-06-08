import { useRef, useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import LightRays from '../components/LightRays';

/* ─── Data ──────────────────────────────────────────────── */
const SOCIALS = [
  { href: 'https://github.com/Kushdeveloper68',          icon: 'code',         title: 'GitHub',    sub: 'Kushdeveloper68'    },
  { href: 'https://www.linkedin.com/in/kushdeveloper',   icon: 'work',         title: 'LinkedIn',  sub: 'kushdeveloper'      },
  { href: 'https://www.instagram.com/kushdev.js',        icon: 'chat_bubble',  title: 'Instagram', sub: 'kushdev.js'         },
  { href: 'https://x.com/kushdeveloper68',               icon: 'palette',      title: 'Twitter/X', sub: 'kushdeveloper68'    },
];

const NAV_LINKS = [
  { href: '#hero',         label: 'Home'         },
  { href: '#about',        label: 'About'        },
  { href: '#skill',        label: 'Skills'       },
  { href: '#services',     label: 'Services'     },
  { href: '#project',      label: 'Projects'     },
  { href: '#experience',   label: 'Experience'   },
  { href: '#certificate',  label: 'Certificates' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing',      label: 'Pricing'      },
];

/* ─── Keyframes ONLY ─────────────────────────────────────── */


export default function ConnectPage() {
  const [state, handleSubmit] = useForm('meoprnge');
  const formRef = useRef(null);
  const sectionRef = useRef(null);
const [lightVisible, setLightVisible] = useState(false);

useEffect(() => {                                          // ADD
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { setLightVisible(entry.isIntersecting); },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  
  useEffect(() => {
    if (state.succeeded && formRef.current) formRef.current.reset();
  }, [state.succeeded]);

  /* font objects */
  const fBebas = { fontFamily: "'Bebas Neue', sans-serif" };
  const fSyne  = { fontFamily: "'Syne', sans-serif"       };
  const fMono  = { fontFamily: "'DM Mono', monospace"     };
  const fDM    = { fontFamily: "'DM Sans', sans-serif"    };

  return (
    <>

      <section id="connect" ref={sectionRef} className="relative isolate z-0 overflow-hidden text-white">

        {/* ── Background: LightRays + overlays ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">

          {/* LightRays canvas */}
          <div className="absolute inset-0 pointer-events-auto" style={{ opacity: 0.85 }}>
  {lightVisible && (
    <LightRays
      raysOrigin="top-center"
      raysColor="#ffffff"
      raysSpeed={1}
      lightSpread={0.5}
      rayLength={3}
      followMouse={true}
      mouseInfluence={0.1}
      noiseAmount={0}
      distortion={0}
      pulsating={false}
      fadeDistance={1}
      saturation={1}
    />
  )}
</div>


          {/* Dark overlay — keeps text readable */}
          <div className="absolute inset-0" style={{ background: 'rgba(10,11,16,0.6)' }} />

          {/* Top radial — brightens around the ray source */}
          <div
            className="absolute top-0 left-0 right-0 h-[55%] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 100%)' }}
          />

          {/* Bottom vignette */}
          <div
            className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #0a0b10, transparent)' }}
          />

          {/* Subtle animated beam lines */}
          {[25, 50, 75].map(x => (
            <div
              key={x}
              className="conn-beam absolute top-0 bottom-0 pointer-events-none"
              style={{
                left: `${x}%`,
                width: '1px',
                background: `linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)`,
                animationDelay: `${x * 0.02}s`,
              }}
            />
          ))}
        </div>

        {/* ════════════════════════════════════════
            MAIN CONTENT
        ════════════════════════════════════════ */}
        <main className="relative z-10 min-h-screen flex flex-col justify-center max-w-[1300px] mx-auto w-full px-6 md:px-10 py-20 md:py-28">

          {/* ── Header ── */}
          <div className="conn-a1 flex flex-col items-center text-center mb-16 md:mb-20">

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-[10px] rounded-full px-5 py-[9px] mb-8 border"
              style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}
            >
              <span className="conn-pulse block w-[7px] h-[7px] rounded-full bg-white shrink-0" />
              <span className="text-white/70 uppercase tracking-[0.2em]" style={{ ...fMono, fontSize: '9.5px' }}>
                System Online · Available for Work
              </span>
            </div>

            {/* Giant Bebas headline */}
            <div className="relative">
              {/* Ghost watermark */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
                style={{ ...fBebas, fontSize: 'clamp(80px,16vw,180px)', color: 'rgba(255,255,255,0.03)', letterSpacing: '0.1em', lineHeight: 1 }}
              >
                CONNECT
              </div>

              <h2
                className="relative leading-[0.88] tracking-[0.03em]"
                style={{ ...fBebas, fontSize: 'clamp(3.5rem,10vw,8.5rem)' }}
              >
                <span className="block text-white">LET&apos;S</span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(130deg, #fff 0%, rgba(255,255,255,0.55) 100%)' }}
                >
                  BUILD THE
                </span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(130deg, rgba(255,255,255,0.9) 0%, rgba(180,190,220,0.6) 100%)', WebkitTextStroke: '1px rgba(255,255,255,0.12)' }}
                >
                  FUTURE
                </span>
              </h2>
            </div>

            {/* Divider */}
            <div
              className="conn-divider mt-8 max-w-xs w-full rounded-sm"
              style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }}
            />

            {/* Sub text */}
            <p
              className="mt-6 text-white/35 max-w-[460px] leading-[1.8]"
              style={{ ...fDM, fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(13px,1.8vw,16px)' }}
            >
              Currently open for freelance projects &amp; full-time roles.{' '}
              <span className="not-italic font-medium text-white/60">Let&apos;s create something remarkable together.</span>
            </p>
          </div>

          {/* ── Two-column grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-[1100px] mx-auto w-full">

            {/* ── LEFT: Info ── */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-10 conn-a2">

              {/* Email block */}
              <div>
                <p
                  className="text-white/30 uppercase tracking-[0.2em] mb-2"
                  style={{ ...fMono, fontSize: '9px' }}
                >
                  Direct line
                </p>
                <a
                  href="mailto:kushpandit68775@gmail.com"
                  className="group block w-fit no-underline"
                >
                  <p
                    className="text-white transition-all duration-300 group-hover:text-white/80 break-all"
                    style={{ ...fSyne, fontSize: 'clamp(15px,2.5vw,21px)', fontWeight: 700 }}
                  >
                    kushpandit68775@gmail.com
                  </p>
                  {/* Underline grow */}
                  <div
                    className="h-px w-0 group-hover:w-full transition-all duration-500 mt-[3px] rounded-sm"
                    style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.6), transparent)' }}
                  />
                </a>
              </div>

              {/* Location */}
              <div>
                <p
                  className="text-white/30 uppercase tracking-[0.2em] mb-2"
                  style={{ ...fMono, fontSize: '9px' }}
                >
                  Based in
                </p>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-white/50 text-[18px]">location_on</span>
                  <span className="text-white/70" style={{ ...fSyne, fontSize: '15px', fontWeight: 600 }}>
                    Gandhidham, Gujarat, IN
                  </span>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p
                  className="text-white/30 uppercase tracking-[0.2em] mb-5"
                  style={{ ...fMono, fontSize: '9px' }}
                >
                  Network
                </p>

                <div className="flex flex-col gap-3">
                  {SOCIALS.map(({ href, icon, title, sub }) => (
                    <a
                      key={title}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={[
                        'group relative flex items-center gap-4 rounded-[13px] px-4 py-3 no-underline overflow-hidden',
                        'border border-white/[0.06] bg-white/[0.025] backdrop-blur-sm',
                        'transition-all duration-300',
                        'hover:border-white/[0.18] hover:bg-white/[0.05]',
                        'hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]',
                      ].join(' ')}
                    >
                      {/* shimmer */}
                      <div className="conn-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />

                      <div
                        className="w-9 h-9 rounded-[9px] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/[0.12]"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors duration-300 text-[18px]">{icon}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p
                          className="text-white/80 group-hover:text-white transition-colors duration-300 leading-none mb-[3px]"
                          style={{ ...fSyne, fontSize: '13px', fontWeight: 700 }}
                        >
                          {title}
                        </p>
                        <p
                          className="text-white/30 truncate"
                          style={{ ...fMono, fontSize: '9.5px', letterSpacing: '0.06em' }}
                        >
                          {sub}
                        </p>
                      </div>

                      <span className="material-symbols-outlined text-white/20 group-hover:text-white/50 transition-all duration-300 group-hover:translate-x-0.5 text-[16px]">
                        arrow_outward
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="lg:col-span-7 conn-a3">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.035)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), rgba(255,255,255,0.2), transparent)' }}
                />

                {/* Spotlight corner glow */}
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-28 rounded-full blur-[60px] pointer-events-none"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                />

                {/* Decorative icon */}
                <div className="absolute top-5 right-6 opacity-[0.06] pointer-events-none">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '64px' }}>forward_to_inbox</span>
                </div>

                <div className="relative z-10 p-7 md:p-9">

                  {/* Form header */}
                  <div className="mb-7">
                    <p
                      className="text-white/30 uppercase tracking-[0.2em] mb-2"
                      style={{ ...fMono, fontSize: '9px' }}
                    >
                      Initialize Transmission
                    </p>
                    <h3
                      className="text-white leading-tight"
                      style={{ ...fSyne, fontSize: 'clamp(20px,3vw,26px)', fontWeight: 800 }}
                    >
                      Send a Message
                    </h3>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                    {/* Success */}
                    {state.succeeded && (
                      <div
                        className="p-4 rounded-xl flex items-center gap-3"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)' }}
                      >
                        <span className="material-symbols-outlined text-white text-[20px]">check_circle</span>
                        <span className="text-white/80" style={{ ...fSyne, fontSize: '13px', fontWeight: 600 }}>
                          Message sent! I'll get back to you soon.
                        </span>
                      </div>
                    )}

                    {/* Error */}
                    {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
                      <div className="p-4 rounded-xl border border-red-500/30 bg-red-900/15 text-red-300" style={{ ...fMono, fontSize: '12px' }}>
                        {state.errors.map((e, i) => <div key={i}>{e.message || 'Submission failed. Please try again.'}</div>)}
                      </div>
                    )}

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: 'Name',  name: 'name',  type: 'text',  placeholder: 'Your name',      field: 'Name'  },
                        { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com', field: 'Email' },
                      ].map(f => (
                        <div key={f.name} className="flex flex-col gap-[6px]">
                          <label
                            className="text-white/35 uppercase tracking-[0.14em] ml-[2px]"
                            style={{ ...fMono, fontSize: '8.5px' }}
                          >
                            {f.label}
                          </label>
                          <input
                            type={f.type}
                            name={f.name}
                            placeholder={f.placeholder}
                            disabled={state.submitting || state.succeeded}
                            className="conn-input w-full h-12 px-4 rounded-xl text-white transition-all duration-300 disabled:opacity-50"
                            style={{
                              ...fDM,
                              fontSize: '14px',
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.1)',
                            }}
                          />
                          <ValidationError prefix={f.field} field={f.name} errors={state.errors} />
                        </div>
                      ))}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-[6px]">
                      <label
                        className="text-white/35 uppercase tracking-[0.14em] ml-[2px]"
                        style={{ ...fMono, fontSize: '8.5px' }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your project…"
                        disabled={state.submitting || state.succeeded}
                        rows={5}
                        className="conn-input w-full p-4 rounded-xl text-white resize-none transition-all duration-300 disabled:opacity-50"
                        style={{
                          ...fDM,
                          fontSize: '14px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={state.submitting || state.succeeded}
                      className={[
                        'group relative w-full overflow-hidden rounded-xl text-black font-bold',
                        'h-[52px] transition-all duration-300',
                        'hover:-translate-y-[2px]',
                        'hover:shadow-[0_12px_40px_rgba(255,255,255,0.18)]',
                        'active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed',
                      ].join(' ')}
                      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #d0d8f0 100%)' }}
                    >
                      {/* shimmer */}
                      <div className="conn-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />

                      <span
                        className="relative z-10 flex items-center justify-center gap-[9px] text-black/80"
                        style={{ ...fSyne, fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}
                      >
                        {state.submitting ? (
                          'Sending…'
                        ) : state.succeeded ? (
                          <>
                            <span className="material-symbols-outlined text-[17px]">check_circle</span>
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <span className="material-symbols-outlined text-[17px] group-hover:translate-x-0.5 transition-transform duration-300">send</span>
                            Initialize Transmission
                          </>
                        )}
                      </span>
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ════════════════════════════════════════
            FOOTER
        ════════════════════════════════════════ */}
        <footer
          className="relative z-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(10,11,16,0.85)', backdropFilter: 'blur(16px)' }}
        >
          <div className="max-w-[1300px] mx-auto px-6 py-7">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">

              {/* Left: copyright */}
              <p
                className="text-white/25"
                style={{ ...fMono, fontSize: '10px', letterSpacing: '0.06em' }}
              >
                © 2025{' '}
                <span className="text-white/50">Designed &amp; Built by Kush Pandit</span>
              </p>

              {/* Center: nav links */}
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
                {NAV_LINKS.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-white/25 hover:text-white/70 transition-colors duration-200 no-underline"
                    style={{ ...fMono, fontSize: '9.5px', letterSpacing: '0.07em' }}
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Right: location + top */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center gap-[6px] px-3 py-[7px] rounded-[9px]"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="material-symbols-outlined text-white/40 text-[15px]">location_on</span>
                  <span className="text-white/35" style={{ ...fMono, fontSize: '9.5px', letterSpacing: '0.06em' }}>Gandhidham, GJ</span>
                </div>

                <a
                  href="#hero"
                  className={[
                    'flex items-center gap-[6px] px-3 py-[7px] rounded-[9px] no-underline',
                    'transition-all duration-300',
                    'hover:bg-white/[0.08] hover:border-white/20',
                    'hover:-translate-y-0.5',
                  ].join(' ')}
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="material-symbols-outlined text-white/40 text-[15px]">arrow_upward</span>
                  <span className="text-white/35" style={{ ...fMono, fontSize: '9.5px', letterSpacing: '0.06em' }}>Top</span>
                </a>
              </div>
            </div>
          </div>
        </footer>

      </section>
    </>
  );
}