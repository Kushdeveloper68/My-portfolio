const P = '#0da2e7';

const TESTIMONIALS = [
  {
    name: 'Riya Shah',
    role: 'Product Manager · Startup Founder',
    avatar: 'RS',
    color: '#0da2e7',
    stars: 5,
    text: 'Kush delivered our SaaS dashboard in record time. His attention to detail, clean code, and proactive communication made the entire experience seamless. The UI is absolutely stunning — our users love it.',
  },
  {
    name: 'Arjun Mehta',
    role: 'CTO · Tech Agency',
    avatar: 'AM',
    color: '#a855f7',
    stars: 5,
    text: 'Working with Kush was a pleasure. He took our rough wireframes and turned them into a fully functional MERN app within the deadline. The backend logic was solid and the frontend was pixel-perfect.',
  },
  {
    name: 'Priya Desai',
    role: 'Educator · Online Course Creator',
    avatar: 'PD',
    color: '#22c55e',
    stars: 5,
    text: "Kush built my course platform from scratch — authentication, payments, video uploads, everything. He's incredibly dedicated and the quality of his work is far beyond what I expected from someone his age.",
  },
  {
    name: 'Vivek Rao',
    role: 'E-commerce Business Owner',
    avatar: 'VR',
    color: '#f97316',
    stars: 5,
    text: 'Our online store needed a complete redesign and new features. Kush not only nailed the design but also improved our page load speed dramatically. Sales increased 30% after the launch.',
  },
  {
    name: 'Tanvi Joshi',
    role: 'Internship Mentor · CodeAlpha',
    avatar: 'TJ',
    color: '#ec4899',
    stars: 5,
    text: "One of the most dedicated interns I've mentored. Kush always went beyond the brief, delivered production-quality code, and learned new concepts faster than anyone else in the cohort.",
  },
  {
    name: 'Dev Patel',
    role: 'Fellow Developer',
    avatar: 'DP',
    color: '#eab308',
    stars: 5,
    text: 'I collaborated with Kush on a freelance project. His frontend skills are exceptional — he has a great eye for design and can implement complex animations and interactions flawlessly.',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <section id="testimonials" style={{ backgroundColor: '#0b1720', color: '#fff', position: 'relative', zIndex: 0, fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="relative overflow-hidden py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px" style={{ backgroundImage: 'linear-gradient(to right,transparent,rgba(13,162,231,0.25),transparent)' }} />
          <div className="absolute top-[-15%] right-[-5%] w-[40vw] h-[40vw] rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(13,162,231,0.06)' }} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[35vw] h-[35vw] rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(168,85,247,0.05)' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right,#1f3a4a 1px,transparent 1px),linear-gradient(to bottom,#1f3a4a 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5" style={{ backgroundColor: 'rgba(13,162,231,0.08)', borderColor: 'rgba(13,162,231,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: P }} />
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: P }}>Social Proof</span>
            </div>
            <h2 className="text-4xl md:text-[3.2rem] font-bold tracking-tight leading-tight mb-4">
              What People <span className="text-gradient">Say About Me</span>
            </h2>
            <p className="text-gray-400 text-base">
              Kind words from clients, collaborators, and mentors who've experienced my work firsthand.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ name, role, avatar, color, stars, text }) => (
              <div key={name} className="group relative rounded-2xl p-6 border border-white/5 transition-all duration-400 hover:-translate-y-1.5 hover:border-white/12 cursor-default overflow-hidden"
                style={{ background: 'linear-gradient(145deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(12px)' }}
              >
                {/* Glow */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: `${color}20` }} />
                {/* Quote icon */}
                <div className="text-4xl font-serif leading-none mb-3 opacity-20" style={{ color }}>❝</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">{text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="size-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ backgroundColor: `${color}20`, border: `1px solid ${color}35`, color }}>
                    {avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{name}</p>
                    <p className="text-gray-500 text-xs truncate">{role}</p>
                  </div>
                  <Stars count={stars} />
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
            {[
              { val: '10+', label: 'Happy Clients' },
              { val: '100%', label: 'Satisfaction Rate' },
              { val: '5★', label: 'Average Rating' },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-3xl font-bold" style={{ color: P }}>{val}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}