import { useRef, useEffect, useState } from 'react';
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


/* ─── Category → accent color map (for filter tabs) ────────── */
const CATEGORY_COLORS = {
  'Frontend Development': '#7cff67',
  'Full Stack Development': '#f87171',
  'Professional Membership': '#818cf8',
  'MERN Stack Development': '#B497CF',
};
function categoryColor(cat) {
  return CATEGORY_COLORS[cat] || '#0da2e7';
}

/* ─── Compact Badge (Vault grid tile) ───────────────────────── */
function CredentialBadge({ cert, onOpen }) {
  const fSyne = { fontFamily: "'Syne', sans-serif" };
  return (
    <button
      type="button"
      onClick={() => onOpen(cert)}
      className="vault-badge group relative flex flex-col items-center gap-2.5 rounded-2xl p-4 text-center"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid rgba(${cert.accentRgb},0.22)`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 14px 34px rgba(${cert.accentRgb},0.16)`; e.currentTarget.style.borderColor = `rgba(${cert.accentRgb},0.5)`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = `rgba(${cert.accentRgb},0.22)`; }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden border shrink-0"
        style={{ backgroundColor: cert.iconBg, borderColor: `rgba(${cert.accentRgb},0.3)` }}
      >
        {cert.isImg ? (
          <img src={cert.icon} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" />
        ) : (
          <span className="material-symbols-outlined text-[24px]" style={{ color: cert.accent }}>{cert.icon}</span>
        )}
      </div>
      <span
        className="text-white/75 group-hover:text-white transition-colors leading-tight line-clamp-2"
        style={{ ...fSyne, fontSize: '11px', fontWeight: 700 }}
      >
        {cert.title}
      </span>
      <span
        className="w-1.5 h-1.5 rounded-full absolute top-3 right-3"
        style={{ background: cert.accent, boxShadow: `0 0 6px ${cert.accent}` }}
      />
    </button>
  );
}

/* ─── Detail Modal ───────────────────────────────────────────── */
function CertModal({ cert, onClose }) {
  const fBebas = { fontFamily: "'Bebas Neue', sans-serif" };
  const fSyne  = { fontFamily: "'Syne', sans-serif" };
  const fMono  = { fontFamily: "'DM Mono', monospace" };
  const fDM    = { fontFamily: "'DM Sans', sans-serif" };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  if (!cert) return null;

  return (
    <div
      className="vault-backdrop-anim fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(5,6,12,0.78)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="vault-modal-anim relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{ background: '#0c0d16', border: `1px solid rgba(${cert.accentRgb},0.3)`, boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(${cert.accentRgb},0.08)` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }} />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg flex items-center justify-center border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] transition-colors"
        >
          <span className="material-symbols-outlined text-[16px] text-white/70">close</span>
        </button>

        <div className="p-7 sm:p-8">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden border mb-5"
            style={{ backgroundColor: cert.iconBg, borderColor: `rgba(${cert.accentRgb},0.35)` }}
          >
            {cert.isImg ? (
              <img src={cert.icon} alt="" className="w-full h-full object-cover" loading="lazy" />
            ) : (
              <span className="material-symbols-outlined text-[28px]" style={{ color: cert.accent }}>{cert.icon}</span>
            )}
          </div>

          <span
            className="inline-block rounded-full px-3 py-[4px] uppercase tracking-[0.14em] border mb-4"
            style={{ ...fMono, fontSize: '8.5px', color: cert.accent, borderColor: `rgba(${cert.accentRgb},0.3)`, background: `rgba(${cert.accentRgb},0.08)` }}
          >
            {cert.category}
          </span>

          <h3 className="text-white leading-tight mb-3" style={{ ...fSyne, fontSize: '20px', fontWeight: 800 }}>
            {cert.title}
          </h3>

          <p className="text-white/45 leading-relaxed mb-6" style={{ ...fDM, fontSize: '13.5px', fontWeight: 300 }}>
            {cert.desc}
          </p>

          <div className="flex items-center justify-between mb-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <span className="text-white/40" style={{ ...fMono, fontSize: '10px', letterSpacing: '0.08em' }}>{cert.issuer}</span>
            <span
              className="px-2 py-[3px] rounded-full"
              style={{ ...fMono, fontSize: '9px', letterSpacing: '0.1em', color: cert.accent, background: `rgba(${cert.accentRgb},0.1)` }}
            >
              {cert.date}
            </span>
          </div>

          <a
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 rounded-xl no-underline text-black uppercase tracking-[0.12em] transition-transform duration-300 hover:-translate-y-[2px]"
            style={{ ...fSyne, fontSize: '11px', fontWeight: 800, background: `linear-gradient(135deg, ${cert.accent}, ${cert.accent}cc)` }}
          >
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────── */
export default function CertificatesPage() {
  const fBebas = { fontFamily: "'Bebas Neue', sans-serif" };
  const fSyne  = { fontFamily: "'Syne', sans-serif"       };
  const fMono  = { fontFamily: "'DM Mono', monospace"     };
  const fDM    = { fontFamily: "'DM Sans', sans-serif"    };
const sectionRef = useRef(null);   
 const [auroraVisible, setAuroraVisible] = useState(false);  // ADD
 const [activeCategory, setActiveCategory] = useState('All');
 const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {                           // ADD
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { setAuroraVisible(entry.isIntersecting); },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const categories = ['All', ...new Set(CERTS.map((c) => c.category))];
  const visibleCerts = activeCategory === 'All' ? CERTS : CERTS.filter((c) => c.category === activeCategory);

  return (
    <>
      

      <section
        id="certificate"
         ref={sectionRef}
        className="relative isolate z-0 overflow-hidden min-h-screen"
        style={{  color: '#fff' }}
      >

        {/* ── Aurora background ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
  {auroraVisible && <Aurora colorStops={["#7cff67","#B497CF","#5227FF"]} blend={0.5} amplitude={1.0} speed={1} />}
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0" style={{ background: 'rgba(7,8,15,0.72)' }} />
          {/* Top vignette */}
          <div className="absolute top-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to bottom, #07080f, transparent)' }} />
          {/* Bottom vignette */}
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to top, #07080f, transparent)' }} />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10 py-24 md:py-32">

          {/* ══ Section Header ══════════════════════════════ */}
          <div className="cert-a1 flex flex-col items-center text-center mb-14">

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
                VAULT
              </div>

              <h2
                className="relative leading-none tracking-[0.04em]"
                style={{ ...fBebas, fontSize: 'clamp(3.2rem,9vw,7.5rem)' }}
              >
                <span className="block text-white">CREDENTIAL</span>
                <span
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(130deg, #7cff67 0%, #B497CF 55%, #818cf8 100%)' }}
                >
                  VAULT
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

            {/* Stat strip */}
            <div className="mt-7 flex items-center gap-2.5" style={{ ...fMono, fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)' }}>
              <span className="text-[#7cff67] font-bold">{CERTS.length}</span> CREDENTIALS UNLOCKED
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[#B497CF] font-bold">{categories.length - 1}</span> CATEGORIES
            </div>
          </div>

          {/* ══ Category Filter Tabs ══════════════════════════ */}
          <div className="cert-a2 flex items-center gap-2.5 overflow-x-auto pb-2 mb-8 justify-start md:justify-center" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const color = cat === 'All' ? '#0da2e7' : categoryColor(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className="vault-tab shrink-0 rounded-full px-4 py-2 border uppercase tracking-[0.1em]"
                  style={{
                    ...fMono,
                    fontSize: '10px',
                    color: isActive ? color : 'rgba(255,255,255,0.4)',
                    background: isActive ? `${color}18` : 'rgba(255,255,255,0.02)',
                    borderColor: isActive ? color + '55' : 'rgba(255,255,255,0.08)',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* ══ Vault Grid ══════════════════════════════════ */}
          <div className="cert-a2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3.5 max-w-3xl mx-auto">
            {visibleCerts.map((c) => (
              <CredentialBadge key={c.title} cert={c} onOpen={setActiveCert} />
            ))}
          </div>

          <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />

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
                    href="https://www.skills.google/public_profiles/19acfd63-116f-4f5a-8db6-3d0342ae5b4f"
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