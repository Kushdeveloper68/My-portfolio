import Aurora from '../components/Aurora';

/* ─── Data ──────────────────────────────────────────────── */
const CERTS = [
  {
    num: '01',
    icon: '/certificates/html-certi.jpg',
    iconBg: '#232f3e',
    accent: '#7cff67',
    accentRgb: '124,255,103',
    category: 'Frontend Development',
    title: 'HTML5 Fundamentals',
    desc: 'Structured training focused on semantic HTML, accessibility, and building clean, well-structured web layouts.',
    issuer: 'Codeliber',
    date: 'Jul 2025',
    href: '/certificates/html-certi.jpg',
    isImg: true,
  },
  {
    num: '02',
    icon: '/certificates/css-certi.jpg',
    iconBg: '#fff',
    accent: '#B497CF',
    accentRgb: '180,151,207',
    category: 'Frontend Development',
    title: 'CSS3 Styling & Layouts',
    desc: 'Modern CSS concepts including responsive layouts, flexbox, grid systems, and UI styling best practices.',
    issuer: 'Codeliber',
    date: 'Jul 2025',
    href: '/certificates/css-certi.jpg',
    isImg: true,
  },
  {
    num: '03',
    icon: 'code',
    iconBg: '#1877F2',
    iconIsSymbol: true,
    accent: '#7cff67',
    accentRgb: '124,255,103',
    category: 'Frontend Development',
    title: 'JavaScript ES6+',
    desc: 'Strong fundamentals in JavaScript including variables, functions, DOM manipulation, and core programming logic.',
    issuer: 'Codeliber',
    date: 'Jul 2025',
    href: '/certificates/js-certi.jpg',
  },
  {
    num: '04',
    icon: 'shield_lock',
    iconBg: 'rgba(127,29,29,0.4)',
    iconIsSymbol: true,
    accent: '#f87171',
    accentRgb: '248,113,113',
    category: 'Full Stack Development',
    title: 'Full Stack Developer Intern',
    desc: 'Built complete e-commerce and social media web applications within deadlines. Received offer letter, completion certificate, and LOR.',
    issuer: 'CodeAlpha',
    date: 'Nov 2025',
    href: '/certificates/codeAlpha-certificate.pdf',
  },
  {
    num: '05',
    icon: 'deployed_code',
    iconBg: 'rgba(37,99,229,0.18)',
    iconIsSymbol: true,
    accent: '#818cf8',
    accentRgb: '129,140,248',
    category: 'Professional Membership',
    title: 'Student Member – ISTE',
    desc: 'Recognized student member of ISTE through Government Polytechnic Bhuj, supporting technical growth and professional development.',
    issuer: 'Indian Society for Technical Education',
    date: '2025',
    href: '/certificates/ISTE.pdf',
  },
  {
    num: '06',
    icon: 'terminal',
    iconBg: 'rgba(37,99,229,0.18)',
    iconIsSymbol: true,
    accent: '#B497CF',
    accentRgb: '180,151,207',
    category: 'MERN Stack Development',
    title: 'MERN Stack Developer Intern',
    desc: 'Trained on real-world MERN stack workflows. Received training certificate, offer letter, completion certificate, and LOR.',
    issuer: 'Codec Technologies',
    date: 'Dec 2025',
    href: '/certificates/codec-certificate.pdf',
  },
];

/* ─── Keyframes — the ONLY css in this file ─────────────── */
const KF = `
  @keyframes certFadeUp {
    from { opacity:0; transform:translateY(32px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes certLineGrow {
    from { transform:scaleX(0); }
    to   { transform:scaleX(1); }
  }
  @keyframes certPulse {
    0%,100% { opacity:0.6; transform:scale(1);   }
    50%     { opacity:1;   transform:scale(1.18); }
  }
  @keyframes certFloat {
    0%,100% { transform:translateY(0); }
    50%     { transform:translateY(-10px); }
  }
  @keyframes certOrbit {
    from { transform:rotate(0deg) translateX(44px) rotate(0deg); }
    to   { transform:rotate(360deg) translateX(44px) rotate(-360deg); }
  }
  @keyframes certShimmer {
    0%   { transform:translateX(-100%); }
    100% { transform:translateX(200%);  }
  }

  .cert-a1 { animation: certFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.05s both; }
  .cert-a2 { animation: certFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both; }
  .cert-a3 { animation: certFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.25s both; }
  .cert-float  { animation: certFloat  5s ease-in-out infinite; }
  .cert-pulse  { animation: certPulse  2.4s ease infinite; }
  .cert-orbit  { animation: certOrbit  8s linear infinite; }
  .cert-shimmer{ animation: certShimmer 2.2s ease-in-out infinite; }
  .cert-line-grow { animation: certLineGrow 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both; transform-origin: left; }
`;

/* ─── Individual Card ────────────────────────────────────── */
function CertCard({ num, icon, iconBg, iconIsSymbol, isImg, accent, accentRgb, category, title, desc, issuer, date, href }) {
  /* font objects — fontFamily has no default Tailwind utility */
  const fBebas = { fontFamily: "'Bebas Neue', sans-serif" };
  const fSyne  = { fontFamily: "'Syne', sans-serif"       };
  const fMono  = { fontFamily: "'DM Mono', monospace"     };
  const fDM    = { fontFamily: "'DM Sans', sans-serif"    };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        /* base */
        'group relative flex flex-col rounded-2xl overflow-hidden no-underline',
        'transition-all duration-500 ease-out',
        /* glass surface */
        'bg-white/[0.025] border border-white/[0.07]',
        'backdrop-blur-xl',
        /* hover lift + glow */
        'hover:-translate-y-2',
        'hover:border-white/[0.14]',
      ].join(' ')}
      style={{
        boxShadow: '0 2px 24px rgba(0,0,0,0.35)',
        transition: 'transform .45s cubic-bezier(0.22,1,0.36,1), box-shadow .45s ease, border-color .3s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 60px rgba(${accentRgb},0.18), 0 2px 24px rgba(0,0,0,0.4)`; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 2px 24px rgba(0,0,0,0.35)'; }}
    >
      {/* Top accent bar — grows on hover */}
      <div
        className="cert-line-grow absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl origin-left transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      {/* Shimmer on hover */}
      <div className="cert-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />

      {/* Corner glow */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: `rgba(${accentRgb},0.2)` }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full">

        {/* Top row: number + open icon */}
        <div className="flex items-start justify-between mb-5">
          {/* Big number */}
          <span
            className="leading-none transition-all duration-300 group-hover:opacity-100"
            style={{ ...fBebas, fontSize: '52px', color: `rgba(${accentRgb},0.18)`, lineHeight: 1 }}
          >
            {num}
          </span>

          {/* Icon box */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden border border-white/[0.06] group-hover:border-white/[0.15] transition-colors duration-300 shrink-0"
            style={{ backgroundColor: iconBg }}
          >
            {isImg ? (
              <img src={icon} alt={title} className="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity" loading="lazy" />
            ) : (
              <span className="material-symbols-outlined text-[22px]" style={{ color: accent }}>{icon}</span>
            )}
          </div>
        </div>

        {/* Category chip */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-block rounded-full px-3 py-[4px] uppercase tracking-[0.14em] border"
            style={{
              ...fMono,
              fontSize: '8.5px',
              color: accent,
              borderColor: `rgba(${accentRgb},0.3)`,
              background: `rgba(${accentRgb},0.08)`,
            }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-white"
          style={{ ...fSyne, fontSize: '17px', fontWeight: 800 }}
        >
          {title}
        </h3>

        {/* Desc */}
        <p
          className="text-white/40 leading-relaxed line-clamp-2 flex-1"
          style={{ ...fDM, fontSize: '13px', fontWeight: 300 }}
        >
          {desc}
        </p>

        {/* Footer */}
        <div className="mt-5 pt-4 flex justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span className="text-white/35 truncate mr-2" style={{ ...fMono, fontSize: '9.5px', letterSpacing: '0.08em' }}>{issuer}</span>
          <span
            className="shrink-0 px-2 py-[3px] rounded-full"
            style={{ ...fMono, fontSize: '9px', letterSpacing: '0.1em', color: accent, background: `rgba(${accentRgb},0.1)` }}
          >
            {date}
          </span>
        </div>

        {/* Open in new — bottom right corner reveal */}
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.3)` }}
          >
            <span className="material-symbols-outlined text-[14px]" style={{ color: accent }}>open_in_new</span>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ─── Main Section ───────────────────────────────────────── */
export default function CertificatesPage() {
  const fBebas = { fontFamily: "'Bebas Neue', sans-serif" };
  const fSyne  = { fontFamily: "'Syne', sans-serif"       };
  const fMono  = { fontFamily: "'DM Mono', monospace"     };
  const fDM    = { fontFamily: "'DM Sans', sans-serif"    };

  return (
    <>
      <style>{KF}</style>

      <section
        id="certificate"
        className="relative isolate z-0 overflow-hidden min-h-screen"
        style={{ backgroundColor: '#07080f', color: '#fff' }}
      >

        {/* ── Aurora background ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#7cff67","#B497CF","#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0" style={{ background: 'rgba(7,8,15,0.72)' }} />
          {/* Top vignette */}
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to bottom, #07080f, transparent)' }} />
          {/* Bottom vignette */}
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to top, #07080f, transparent)' }} />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-24 md:py-32">

          {/* ══ Section Header ══════════════════════════════ */}
          <div className="cert-a1 flex flex-col items-center text-center mb-20">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-[10px] rounded-full px-5 py-[9px] mb-8 border"
              style={{ background: 'rgba(124,255,103,0.07)', borderColor: 'rgba(124,255,103,0.2)' }}
            >
              <span className="cert-pulse block w-[7px] h-[7px] rounded-full" style={{ background: '#7cff67' }} />
              <span className="text-[#7cff67] uppercase tracking-[0.18em]" style={{ ...fMono, fontSize: '10px' }}>
                Internships &amp; Certifications
              </span>
            </div>

            {/* Giant title */}
            <div className="relative">
              {/* Ghost behind */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
                style={{ ...fBebas, fontSize: 'clamp(80px,15vw,160px)', color: 'rgba(124,255,103,0.04)', letterSpacing: '0.06em', lineHeight: 1 }}
              >
                CERTS
              </div>

              <h2
                className="relative leading-none tracking-[0.04em]"
                style={{ ...fBebas, fontSize: 'clamp(3.2rem,9vw,7.5rem)' }}
              >
                <span className="block text-white">MY</span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(130deg, #7cff67 0%, #B497CF 55%, #818cf8 100%)' }}
                >
                  ACCREDITATIONS
                </span>
              </h2>
            </div>

            {/* Divider */}
            <div
              className="cert-line-grow mt-8 max-w-[320px] w-full rounded-sm"
              style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(124,255,103,0.5), rgba(180,151,207,0.5), transparent)' }}
            />

            {/* Sub */}
            <p
              className="mt-6 text-white/40 max-w-[520px] leading-[1.8]"
              style={{ ...fDM, fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(13px,1.8vw,16px)' }}
            >
              Industry-recognized certifications and internships that validate my{' '}
              <span className="not-italic font-medium text-white/65">full-stack development skills</span>
              {' '}and hands-on experience.
            </p>
          </div>

          {/* ══ Cards Grid ══════════════════════════════════ */}
          <div className="cert-a2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTS.map(c => <CertCard key={c.title} {...c} />)}
          </div>

          {/* ══ GCP Featured Block ══════════════════════════ */}
          <div className="cert-a3 mt-16">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(124,255,103,0.15)' }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, #7cff67, #B497CF, transparent)' }}
              />

              {/* Corner aurora glow */}
              <div
                className="absolute -top-16 left-1/4 w-80 h-44 rounded-full blur-[80px] pointer-events-none"
                style={{ background: 'rgba(124,255,103,0.08)' }}
              />

              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

                {/* Left content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="px-[10px] py-[4px] rounded-full uppercase border"
                      style={{ ...fMono, fontSize: '9px', letterSpacing: '0.15em', color: '#7cff67', background: 'rgba(124,255,103,0.1)', borderColor: 'rgba(124,255,103,0.25)' }}
                    >
                      GCP
                    </span>
                    <span
                      className="px-[10px] py-[4px] rounded-full uppercase border text-white/35 border-white/10 bg-white/[0.03]"
                      style={{ ...fMono, fontSize: '9px', letterSpacing: '0.15em' }}
                    >
                      Cloud
                    </span>
                  </div>

                  <h3
                    className="text-white leading-tight mb-4"
                    style={{ ...fSyne, fontSize: 'clamp(20px,3.5vw,30px)', fontWeight: 800 }}
                  >
                    Google Cloud Platform{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'linear-gradient(130deg,#7cff67,#B497CF)' }}
                    >
                      Skill Badges
                    </span>
                  </h3>

                  <p
                    className="text-white/40 max-w-[500px] mb-7 leading-[1.75]"
                    style={{ ...fDM, fontWeight: 300, fontSize: '14px' }}
                  >
                    Actively learning cloud computing fundamentals through Google Cloud Skill Boost.
                    Earned multiple hands-on badges by completing labs on cloud infrastructure,
                    services, and deployment concepts.
                  </p>

                  <a
                    href="https://www.skills.google/public_profiles/19b83dbf-4185-4074-94d3-5273184803d2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      'inline-flex items-center gap-[9px]',
                      'h-[50px] px-8 rounded-[11px] no-underline text-black font-bold uppercase tracking-[0.14em]',
                      'transition-all duration-300 hover:-translate-y-[3px]',
                      'hover:shadow-[0_12px_36px_rgba(124,255,103,0.35)]',
                    ].join(' ')}
                    style={{ ...fSyne, fontSize: '11px', fontWeight: 800, background: 'linear-gradient(135deg, #7cff67, #4de83a)' }}
                  >
                    <span className="material-symbols-outlined text-[17px]">verified</span>
                    View GCP Badges
                  </a>
                </div>

                {/* Right — GCP badge */}
                <div className="cert-float flex-shrink-0">
                  <div
                    className={[
                      'relative w-44 h-44 rounded-2xl flex flex-col items-center justify-center gap-3',
                      'border transition-all duration-500',
                      'hover:rotate-3 hover:scale-105',
                    ].join(' ')}
                    style={{ background: 'rgba(124,255,103,0.06)', borderColor: 'rgba(124,255,103,0.2)', boxShadow: '0 0 40px rgba(124,255,103,0.1)' }}
                  >
                    {/* Orbit dot */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none">
                      <div className="cert-orbit absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: '#7cff67', boxShadow: '0 0 8px #7cff67' }} />
                    </div>

                    <img
                      src="https://tse2.mm.bing.net/th/id/OIP.cynx13E0y0LJsT8uXG4_9wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
                      alt="GCP"
                      className="w-16 opacity-90"
                      loading="lazy"
                    />
                    <div className="text-center">
                      <p className="text-white font-bold leading-none" style={{ ...fSyne, fontSize: '14px', fontWeight: 800 }}>Developer</p>
                      <p className="mt-[3px] uppercase tracking-[0.2em]" style={{ ...fMono, fontSize: '9px', color: '#7cff67' }}>Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}