const P = '#0da2e7';

const SERVICES = [
  {
    icon: 'web',
    num: '01',
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive UIs built with React, Tailwind CSS, and modern animation libraries. Fast, accessible, and visually stunning.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    color: '#0da2e7',
    glow: 'rgba(13,162,231,0.25)',
  },
  {
    icon: 'dns',
    num: '02',
    title: 'Backend Development',
    desc: 'Scalable REST APIs, authentication flows, database design, and server-side logic using Node.js, Express, and MongoDB.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.25)',
  },
  {
    icon: 'deployed_code',
    num: '03',
    title: 'Full Stack Web Apps',
    desc: 'End-to-end MERN stack applications — from database schema to polished UI — designed and deployed for real users.',
    tags: ['MERN Stack', 'REST API', 'Deployment', 'MongoDB Atlas'],
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.25)',
  },
  {
    icon: 'design_services',
    num: '04',
    title: 'UI/UX Design',
    desc: 'Clean, modern interface design with Figma. From wireframes to high-fidelity prototypes with a focus on user experience.',
    tags: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: '#f97316',
    glow: 'rgba(249,115,22,0.25)',
  },
  {
    icon: 'integration_instructions',
    num: '05',
    title: 'API Integration',
    desc: 'Seamless third-party API integrations — payment gateways, social auth, maps, cloud storage, and more.',
    tags: ['REST APIs', 'OAuth', 'Stripe', 'Cloudinary'],
    color: '#eab308',
    glow: 'rgba(234,179,8,0.25)',
  },
  {
    icon: 'speed',
    num: '06',
    title: 'Performance & SEO',
    desc: 'Code optimization, lazy loading, bundle splitting, and SEO best practices to make your site fast and discoverable.',
    tags: ['Core Web Vitals', 'SEO', 'Lighthouse', 'Code Splitting'],
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.25)',
  },
];

export default function ServicesPage() {
  return (
    <section id="services" style={{ backgroundColor: '#0b1720', color: '#fff', fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(to right,#1f3a4a 1px,transparent 1px),linear-gradient(to bottom,#1f3a4a 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        {/* Glow orbs */}
        <div className="absolute top-[-15%] left-[-5%] w-[40vw] h-[40vw] rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(13,162,231,0.07)' }} />
        <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: 'rgba(168,85,247,0.06)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-32">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5" style={{ backgroundColor: 'rgba(13,162,231,0.08)', borderColor: 'rgba(13,162,231,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: P }} />
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: P }}>What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-[3.2rem] font-bold tracking-tight leading-tight mb-4">
              Services &amp; <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              From concept to deployment — I deliver complete digital solutions tailored to your needs with precision and passion.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon, num, title, desc, tags, color, glow }) => (
              <div key={num} className="group relative rounded-2xl p-7 border border-white/5 transition-all duration-500 cursor-default overflow-hidden hover:-translate-y-2"
                style={{ background: 'linear-gradient(145deg,rgba(255,255,255,0.03) 0%,rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(12px)' }}
              >
                {/* Hover glow bg */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(ellipse at 20% 20%, ${glow} 0%, transparent 65%)` }} />
                {/* Hover border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-all duration-500 pointer-events-none" style={{ boxShadow: `0 0 0 0 ${color}00` }} />

                {/* Number */}
                <span className="absolute top-5 right-5 text-xs font-mono font-bold opacity-20 group-hover:opacity-60 transition-opacity" style={{ color }}>{num}</span>

                {/* Icon */}
                <div className="mb-5 size-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${color}18`, border: `1px solid ${color}30` }}>
                  <span className="material-symbols-outlined text-2xl" style={{ color }}>{icon}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-white transition-colors" style={{ '--hover-color': color }}>
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wide border transition-all duration-300" style={{ backgroundColor: `${color}10`, borderColor: `${color}25`, color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-5">Have a project in mind? Let's discuss it.</p>
            <a href="#connect">
              <button className="inline-flex items-center gap-2 h-12 px-8 text-white font-bold rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(13,162,231,0.4)]" style={{ backgroundColor: P }}>
                <span className="material-symbols-outlined text-[18px]">send</span>
                Start a Conversation
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}