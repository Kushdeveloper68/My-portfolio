const P = '#0da2e7';

const CERTS = [
  {
    icon: '/certificates/html-certi.jpg',
    iconBg: '#232f3e',
    accent: '#0d93f2',
    category: 'Frontend Development',
    title: 'HTML5 Fundamentals',
    desc: 'Completed structured training focused on semantic HTML, accessibility, and building clean, well-structured web layouts.',
    issuer: 'Codeliber (Learning App)',
    date: 'Jul 2025',
    href: '/certificates/html-certi.jpg',
    isImg: true,
  },
  {
    icon: '/certificates/css-certi.jpg',
    iconBg: '#fff',
    accent: '#60a5fa',
    category: 'Frontend Development',
    title: 'CSS3 Styling & Layouts',
    desc: 'Learned modern CSS concepts including responsive layouts, flexbox, grid systems, and UI styling best practices.',
    issuer: 'Codeliber (Learning App)',
    date: 'Jul 2025',
    href: '/certificates/css-certi.jpg',
    isImg: true,
  },
  {
    icon: 'code',
    iconBg: '#1877F2',
    iconIsSymbol: true,
    accent: '#818cf8',
    category: 'Frontend Development',
    title: 'JavaScript Programming (ES6)',
    desc: 'Gained strong fundamentals in JavaScript including variables, functions, DOM manipulation, and core programming logic.',
    issuer: 'Codeliber (Learning App)',
    date: 'Jul 2025',
    href: '/certificates/js-certi.jpg',
  },
  {
    icon: 'shield_lock',
    iconBg: 'rgba(127,29,29,0.4)',
    iconIsSymbol: true,
    accent: '#f87171',
    category: 'Full Stack Development',
    title: 'Full Stack Web Developer Intern',
    desc: 'Built complete e-commerce and social media web applications within deadlines. Received offer letter, completion certificate, and LOR.',
    issuer: 'CodeAlpha',
    date: 'Nov 2025',
    href: '/certificates/codeAlpha-certificate.pdf',
  },
  {
    icon: 'deployed_code',
    iconBg: 'rgba(37,99,229,0.18)',
    iconIsSymbol: true,
    accent: '#326ce5',
    category: 'Professional Membership',
    title: 'Student Member – ISTE',
    desc: 'Recognized student member of ISTE through Government Polytechnic Bhuj, supporting technical growth and professional development.',
    issuer: 'Indian Society for Technical Education',
    date: '2025',
    href: '/certificates/ISTE.pdf',
  },
  {
    icon: 'deployed_code',
    iconBg: 'rgba(37,99,229,0.18)',
    iconIsSymbol: true,
    accent: '#326ce5',
    category: 'MERN Stack Development',
    title: 'MERN Stack Developer Intern',
    desc: 'Trained on real-world MERN stack workflows. Received training certificate, offer letter, completion certificate, and LOR.',
    issuer: 'Codec Technologies',
    date: 'Dec 2025',
    href: '/certificates/codec-certificate.pdf',
  },
];

function CertCard({ icon, iconBg, iconIsSymbol, isImg, accent, category, title, desc, issuer, date, href }) {
  return (
    <div className="glass-card group relative flex flex-col rounded-2xl p-6 h-full overflow-hidden cursor-pointer">
      {/* Open link */}
      <a href={href} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <span className="material-symbols-outlined text-lg text-gray-400 group-hover:text-[#0d93f2] transition-colors">open_in_new</span>
      </a>

      {/* Icon */}
      <div className="size-13 rounded-xl mb-5 shadow-lg border border-white/5 group-hover:border-white/15 transition-colors overflow-hidden flex items-center justify-center shrink-0" style={{ backgroundColor: iconBg, width: '52px', height: '52px' }}>
        {isImg ? (
          <img src={icon} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" decoding="async" />
        ) : (
          <span className="material-symbols-outlined text-2xl" style={{ color: accent }}>{icon}</span>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <p className="text-xs font-bold tracking-wider mb-1.5 uppercase" style={{ color: accent }}>{category}</p>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0d93f2] transition-colors leading-tight">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">{desc}</p>
      </div>

      <div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500">
        <span className="truncate mr-2">{issuer}</span>
        <span className="text-gray-400 shrink-0">{date}</span>
      </div>

      {/* Glow */}
      <div className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full blur-[55px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: `${accent}22` }} />
    </div>
  );
}

export default function CertificatesPage() {
  return (
    <section id="certificate" className="relative isolate overflow-hidden" style={{ backgroundColor: '#050a0f', color: '#fff', fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right,#1f2937 1px,transparent 1px),linear-gradient(to bottom,#1f2937 1px,transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-[-20%] left-[-10%] rounded-full blur-[120px] animate-float" style={{ width: '600px', height: '600px', backgroundColor: 'rgba(13,147,242,0.08)' }} />
          <div className="absolute bottom-[-10%] right-[-5%] rounded-full blur-[100px] animate-float-delayed" style={{ width: '500px', height: '500px', backgroundColor: 'rgba(0,240,255,0.04)' }} />
          <div className="scanlines" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5" style={{ backgroundColor: 'rgba(13,147,242,0.08)', borderColor: 'rgba(13,147,242,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: P }} />
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: P }}>Internships & Certifications</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text mb-5" style={{ backgroundImage: 'linear-gradient(to bottom,#fff,rgba(255,255,255,0.5))' }}>
              ACCREDITATIONS
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Industry-recognized certifications and internships that validate my full-stack development skills and hands-on experience.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTS.map(c => <CertCard key={c.title} {...c} />)}
          </div>

          {/* GCP Feature */}
          <div className="mt-16">
            <div className="glass-card rounded-2xl p-px overflow-hidden">
              <div className="relative bg-[#0f161e] rounded-[calc(1rem-1px)] p-7 md:p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30 uppercase tracking-wider">GCP</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-gray-400 border border-white/10 uppercase tracking-wider">Cloud</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Google Cloud Platform — Skill Badges</h3>
                  <p className="text-gray-400 text-sm mb-6 max-w-lg leading-relaxed">
                    Actively learning cloud computing fundamentals through Google Cloud Skill Boost. Earned multiple hands-on badges by completing labs on cloud infrastructure, services, and deployment concepts.
                  </p>
                  <a href="https://www.skills.google/public_profiles/19b83dbf-4185-4074-94d3-5273184803d2" target="_blank" rel="noopener noreferrer">
                    <button className="inline-flex items-center gap-2 h-11 px-7 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(13,147,242,0.4)]" style={{ backgroundColor: '#0d93f2' }}>
                      <span className="material-symbols-outlined text-base">verified</span>
                      View GCP Badges
                    </button>
                  </a>
                </div>
                <div className="w-full md:w-48 flex items-center justify-center">
                  <div className="relative p-6 rounded-xl border border-white/8 flex flex-col items-center gap-3 transition-all hover:border-[#0d93f2]/40 hover:rotate-3 duration-500" style={{ backgroundColor: '#1a2632' }}>
                    <img src="https://tse2.mm.bing.net/th/id/OIP.cynx13E0y0LJsT8uXG4_9wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="GCP" className="w-16 opacity-90" loading="lazy" />
                    <div className="text-center">
                      <p className="text-white font-bold text-sm">Developer</p>
                      <p className="text-[#0d93f2] text-xs font-bold tracking-widest uppercase">Student</p>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to left,rgba(13,147,242,0.04),transparent)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}