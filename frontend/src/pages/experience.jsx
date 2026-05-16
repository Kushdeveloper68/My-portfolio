import { useEffect, useRef, useState } from 'react';
import { SplashCursor } from '../components';

const P = '#0da2e7';

const EXPERIENCES = [
  {
    num: '01',
    period: 'Sep 2023',
    duration: 'Starting Point',
    title: 'Frontend Developer',
    subtitle: 'Beginner',
    company: 'Self-Learning',
    companyShort: 'Self',
    icon: 'html',
    accent: '#f97316',
    desc: 'Started the web development journey with HTML, CSS, and JavaScript. Built UI layouts and small interactive projects — forming a strong foundation in frontend.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    type: 'Learning',
  },
  {
    num: '02',
    period: '2024 – 2025',
    duration: '12 Months',
    title: 'Full Stack Learner',
    subtitle: 'Backend Expansion',
    company: 'Self-Learning & Projects',
    companyShort: 'Personal',
    icon: 'data_object',
    accent: '#4ade80',
    desc: 'Expanded from frontend into backend. Built REST APIs, authentication systems, database design, and complete full-stack apps using Node.js and MongoDB.',
    tags: ['Node.js', 'MongoDB', 'Express', 'JWT'],
    type: 'Growth',
  },
  {
    num: '03',
    period: 'Nov 2025',
    duration: '3 Months',
    title: 'MERN Stack Intern',
    subtitle: 'Industry Experience',
    company: 'CodeAlpha & Codec Technologies',
    companyShort: 'CodeAlpha',
    icon: 'work',
    accent: '#c084fc',
    desc: 'Worked on real-world projects including e-commerce and social media platforms. Learned production workflows, deadline-based delivery, and collaborative development.',
    tags: ['React', 'Node.js', 'MongoDB', 'Git'],
    type: 'Internship',
  },
  {
    num: '04',
    period: '2025 – Present',
    duration: 'Ongoing',
    title: 'Computer Engineering',
    subtitle: 'Diploma Student',
    company: 'Government Polytechnic Bhuj',
    companyShort: 'GP Bhuj',
    icon: 'school',
    accent: '#38bdf8',
    desc: 'Pursuing a Diploma in Computer Engineering while actively applying dev skills through projects, internships, and freelancing simultaneously.',
    tags: ['C Programming', 'Computer Fundamentals', 'Teamwork'],
    type: 'Education',
  },
  {
    num: '05',
    period: 'Present',
    duration: 'Active',
    title: 'Full Stack Developer',
    subtitle: 'Freelance & Independent',
    company: 'Freelance / Independent Projects',
    companyShort: 'Freelance',
    icon: 'rocket_launch',
    accent: '#0da2e7',
    desc: 'Building full-stack applications using the MERN stack. Focused on scalable backend logic, clean UI, API development, authentication, and real-world problem solving.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    type: 'Current',
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(4); // latest = active by default
  const [progress, setProgress] = useState(100);

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

  /* Progress bar based on active */
  useEffect(() => {
    setProgress(((active + 1) / EXPERIENCES.length) * 100);
  }, [active]);

  const cur = EXPERIENCES[active];

  return (
    <>
     
      <section
        id="experience"
        ref={sectionRef}
        style={{  color: '#fff', position: 'relative', zIndex: 0, overflow: 'hidden', minHeight: '100vh' }}
      >
        {/* SplashCursor bg */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-55">
          <SplashCursor
            SIM_RESOLUTION={128}
            DYE_RESOLUTION={1440}
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
          />
        </div>

        {/* Grid bg */}
        <div className="kde-grid absolute inset-0 pointer-events-none z-[1]" style={{ opacity: 0.6 }} />

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(13,162,231,0.07) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[350px] pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(168,85,247,0.05) 0%, transparent 65%)' }} />

        {/* Vertical side label */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:flex items-center gap-2 z-10 opacity-22">
          <div style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, rgba(13,162,231,0.4), transparent)' }} />
          <span className="kde-vert" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.2em', color: P }}>CAREER JOURNEY — 2023/25</span>
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-12 py-24 lg:py-32">

          {/* ── HEADER ── */}
          <div className="mb-16 lg:mb-20">
            <div data-reveal className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <div style={{ width: '2.5rem', height: '2px', background: P, borderRadius: 2 }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.2em', color: P, textTransform: 'uppercase' }}>
                004 / Career Path
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
              <div data-reveal data-delay="100">
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4.5rem, 9vw, 7.5rem)', lineHeight: 0.9, letterSpacing: '0.04em', color: '#fff' }}>
                  Professional
                </div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4.5rem, 9vw, 7.5rem)', lineHeight: 0.9, letterSpacing: '0.04em', WebkitTextStroke: '1.5px rgba(255,255,255,0.2)', color: 'transparent' }}>
                  Journey
                </div>
              </div>
              <div data-reveal data-delay="200" className="lg:mb-3 max-w-xs">
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
                  From first line of HTML to shipping real-world full-stack apps — a progression built on curiosity, consistency, and craft.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="kde-glow-dot w-1.5 h-1.5 rounded-full block" style={{ backgroundColor: P }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                    {EXPERIENCES.length} Milestones · 2023 → Present
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              PROGRESS NAVIGATOR
          ══════════════════════════════════════ */}
          <div data-reveal data-delay="200" className="kde-panel p-4 md:p-5 mb-6" style={{ borderColor: `${cur.accent}25` }}>
            {/* Progress bar */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Career Progress</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: cur.accent, letterSpacing: '0.12em' }}>
                  {String(active + 1).padStart(2,'0')} / {String(EXPERIENCES.length).padStart(2,'0')}
                </span>
              </div>
              <div className="w-full h-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="kde-progress-fill" style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${cur.accent}88, ${cur.accent})` }} />
              </div>
            </div>

            {/* Step buttons */}
            <div className="flex items-stretch gap-1 md:gap-2">
              {EXPERIENCES.map((exp, i) => (
                <button
                  key={exp.num}
                  className={`kde-step ${active === i ? 'active' : ''}`}
                  style={{ '--step-color': exp.accent, '--step-color-dim': `${exp.accent}30` }}
                  onClick={() => setActive(i)}
                >
                  {/* Dot */}
                  <div className="kde-step-dot" style={{ borderColor: active === i ? exp.accent : undefined, background: active === i ? `${exp.accent}12` : 'rgba(255,255,255,0.03)' }}>
                    {active === i && (
                      <div className="kde-ping absolute inset-0 rounded-full" style={{ background: exp.accent, opacity: 0.2 }} />
                    )}
                    <span className="material-symbols-outlined relative z-10" style={{ fontSize: '15px', color: active === i ? exp.accent : 'rgba(255,255,255,0.25)' }}>
                      {exp.icon}
                    </span>
                  </div>
                  {/* Label */}
                  <div className="hidden sm:block text-center">
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: active === i ? exp.accent : 'rgba(255,255,255,0.22)', lineHeight: 1.4 }}>
                      {exp.num}
                    </div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.6rem', color: active === i ? '#fff' : 'rgba(255,255,255,0.3)', letterSpacing: '0.02em', maxWidth: '5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {exp.companyShort}
                    </div>
                  </div>
                  {/* Active underline */}
                  {active === i && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full mx-3" style={{ background: exp.accent }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════
              MAIN CONTENT PANEL
          ══════════════════════════════════════ */}
          <div data-reveal data-delay="300">
            <div className="kde-panel overflow-hidden" style={{ borderColor: `${cur.accent}22` }}>
              <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* LEFT: Accent column */}
                <div className="lg:col-span-4 relative p-7 md:p-8 flex flex-col gap-6"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.05)', background: `linear-gradient(135deg, ${cur.accent}08 0%, transparent 60%)`, transition: 'background 0.5s' }}>

                  {/* Scanline texture */}
                  <div className="kde-scanline absolute inset-0" style={{ opacity: 0.4 }} />

                  {/* Big ghost number */}
                  <div className="absolute bottom-4 right-4 pointer-events-none select-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '8rem', lineHeight: 1, color: `${cur.accent}09`, letterSpacing: '0.04em', transition: 'color 0.4s' }}>
                    {cur.num}
                  </div>

                  {/* Top: icon + type */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cur.accent}15`, border: `1px solid ${cur.accent}35`, transition: 'all 0.4s' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '22px', color: cur.accent, transition: 'color 0.4s' }}>{cur.icon}</span>
                    </div>
                    <div>
                      <span className="kde-type-badge" style={{ background: `${cur.accent}15`, border: `1px solid ${cur.accent}30`, color: cur.accent, transition: 'all 0.4s' }}>
                        {cur.type}
                      </span>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="relative z-10">
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '4px' }}>Timeline</div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#fff', letterSpacing: '0.06em', lineHeight: 1 }}>
                      {cur.period}
                    </div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: cur.accent, letterSpacing: '0.12em', marginTop: '4px', transition: 'color 0.4s' }}>
                      {cur.duration}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="relative z-10">
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '5px' }}>Organization</div>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.88rem', color: '#fff', lineHeight: 1.4, letterSpacing: '0.02em' }}>
                      {cur.company}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
                    {cur.tags.map(t => (
                      <span key={t} className="kde-tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* RIGHT: Content column */}
                <div className="lg:col-span-8 p-7 md:p-8 flex flex-col gap-6">

                  {/* Nav + counter row */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2px' }}>
                        {cur.subtitle}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="kde-nav-btn"
                        disabled={active === 0}
                        onClick={() => setActive(a => Math.max(0, a - 1))}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)' }}>arrow_back</span>
                      </button>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', minWidth: '3rem', textAlign: 'center' }}>
                        {String(active + 1).padStart(2,'0')}/{String(EXPERIENCES.length).padStart(2,'0')}
                      </span>
                      <button
                        className="kde-nav-btn"
                        disabled={active === EXPERIENCES.length - 1}
                        onClick={() => setActive(a => Math.min(EXPERIENCES.length - 1, a + 1))}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)' }}>arrow_forward</span>
                      </button>
                    </div>
                  </div>

                  {/* Big title */}
                  <div>
                    <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.6rem, 5vw, 4rem)', lineHeight: 0.95, letterSpacing: '0.04em', color: '#fff', transition: 'all 0.3s' }}>
                      {cur.title}
                    </div>
                    <div style={{ display: 'inline-block', height: '2px', width: '3rem', background: cur.accent, borderRadius: 2, marginTop: '0.75rem', transition: 'background 0.4s' }} />
                  </div>

                  {/* Description */}
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, maxWidth: '55ch' }}>
                    {cur.desc}
                  </p>

                  {/* Stat row */}
                  <div className="grid grid-cols-3 gap-3 mt-auto">
                    {[
                      { label: 'Stage', val: cur.num + ' / ' + String(EXPERIENCES.length).padStart(2,'0') },
                      { label: 'Duration', val: cur.duration },
                      { label: 'Type', val: cur.type },
                    ].map(({ label, val }) => (
                      <div key={label} className="rounded-xl p-3 flex flex-col gap-1"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{label}</span>
                        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: '#fff', letterSpacing: '0.04em' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom progress strip */}
              <div style={{ height: '3px', background: 'rgba(255,255,255,0.04)' }}>
                <div style={{ height: '100%', width: `${progress}%`, background: `linear-gradient(90deg, ${cur.accent}66, ${cur.accent})`, transition: 'width 0.6s cubic-bezier(0.16,1,0.3,1), background 0.4s' }} />
              </div>
            </div>
          </div>

          {/* ── ALL ENTRIES MINI STRIP ── */}
          <div data-reveal data-delay="400" className="mt-6 grid grid-cols-5 gap-2">
            {EXPERIENCES.map((exp, i) => (
              <button
                key={exp.num}
                onClick={() => setActive(i)}
                className="relative rounded-xl p-3 flex flex-col items-center gap-2 text-center group overflow-hidden"
                style={{
                  background: active === i ? `${exp.accent}10` : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${active === i ? exp.accent + '35' : 'rgba(255,255,255,0.06)'}`,
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {active === i && <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full" style={{ background: exp.accent }} />}
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: active === i ? exp.accent : 'rgba(255,255,255,0.2)', transition: 'color 0.3s' }}>{exp.icon}</span>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.1em', textTransform: 'uppercase', color: active === i ? exp.accent : 'rgba(255,255,255,0.2)', lineHeight: 1 }}>
                  {exp.num}
                </div>
                <div className="hidden sm:block" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.6rem', color: active === i ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)', lineHeight: 1.3, letterSpacing: '0.02em' }}>
                  {exp.period}
                </div>
              </button>
            ))}
          </div>

          {/* ── CTA ── */}
          <div data-reveal data-delay="500" className="mt-16 flex justify-center">
            <a href="/developer-kush-resume.pdf" download className="kde-btn">
              <span className="material-symbols-outlined" style={{ fontSize: '16px', color: P }}>download</span>
              Download Full Resume
              <span className="material-symbols-outlined" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)' }}>arrow_outward</span>
            </a>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="relative z-10 py-5 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
            <div className="kde-ticker">
              {[...EXPERIENCES, ...EXPERIENCES, ...EXPERIENCES].map(({ title, type, num }, i) => (
                <div key={i} className="flex items-center gap-2" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '12px', color: 'rgba(13,162,231,0.35)' }}>timeline</span>
                  {title}
                  <span style={{ color: 'rgba(13,162,231,0.18)', marginLeft: '1rem' }}>✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}