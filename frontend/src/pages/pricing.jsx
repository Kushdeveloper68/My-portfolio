import { useState } from 'react';

const P = '#0da2e7';

const PLANS = [
  {
    name: 'Starter',
    badge: null,
    monthly: 199,
    yearly: 149,
    desc: 'Perfect for small businesses and personal projects needing a clean web presence.',
    color: '#64748b',
    glow: 'rgba(100,116,139,0.2)',
    features: [
      { text: 'Responsive landing page', yes: true },
      { text: 'Up to 5 sections', yes: true },
      { text: 'Contact form integration', yes: true },
      { text: 'Basic SEO setup', yes: true },
      { text: 'Source code included', yes: true },
      { text: 'Backend / API', yes: false },
      { text: 'Database integration', yes: false },
      { text: '1 month support', yes: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    badge: 'Most Popular',
    monthly: 599,
    yearly: 449,
    desc: 'Full-stack web app with authentication, database, and polished UI for growing products.',
    color: '#0da2e7',
    glow: 'rgba(13,162,231,0.3)',
    features: [
      { text: 'Full-stack MERN app', yes: true },
      { text: 'Authentication system', yes: true },
      { text: 'Database design & integration', yes: true },
      { text: 'REST API development', yes: true },
      { text: 'Responsive & animated UI', yes: true },
      { text: 'Admin dashboard', yes: true },
      { text: '1 month support', yes: true },
      { text: 'Source code included', yes: true },
    ],
    cta: 'Start Project',
  },
  {
    name: 'Enterprise',
    badge: 'Custom',
    monthly: null,
    yearly: null,
    desc: 'Complex, large-scale applications with custom requirements, integrations, and ongoing support.',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.25)',
    features: [
      { text: 'Everything in Pro', yes: true },
      { text: 'Custom feature development', yes: true },
      { text: 'Third-party integrations', yes: true },
      { text: 'Payment gateway setup', yes: true },
      { text: 'Cloud deployment', yes: true },
      { text: 'Performance optimization', yes: true },
      { text: '3 months support', yes: true },
      { text: 'Priority communication', yes: true },
    ],
    cta: 'Let\'s Talk',
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" style={{  color: '#fff', position: 'relative', zIndex: 0, fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="relative overflow-hidden py-24 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-15%] left-[20%] w-[35vw] h-[35vw] rounded-full blur-[110px]" style={{ backgroundColor: 'rgba(13,162,231,0.07)' }} />
          <div className="absolute bottom-[-10%] right-[10%] w-[30vw] h-[30vw] rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(168,85,247,0.06)' }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(to right,#1f3a4a 1px,transparent 1px),linear-gradient(to bottom,#1f3a4a 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-5" style={{ backgroundColor: 'rgba(13,162,231,0.08)', borderColor: 'rgba(13,162,231,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: P }} />
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: P }}>Transparent Pricing</span>
            </div>
            <h2 className="text-4xl md:text-[3.2rem] font-bold tracking-tight leading-tight mb-4">
              Simple, <span className="text-gradient">Honest Pricing</span>
            </h2>
            <p className="text-gray-400 text-base mb-8">No hidden fees. No surprises. Pick the plan that fits your project.</p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 p-1 rounded-xl border border-white/8" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}>
              <button onClick={() => setYearly(false)} className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${!yearly ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`} style={!yearly ? { backgroundColor: P } : {}}>Monthly</button>
              <button onClick={() => setYearly(true)} className={`px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${yearly ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`} style={yearly ? { backgroundColor: P } : {}}>
                Yearly
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-green-500/20 text-green-400 border border-green-500/30">-25%</span>
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PLANS.map(({ name, badge, monthly, yearly: yearlyPrice, desc, color, glow, features, cta }) => {
              const isPro = name === 'Pro';
              const price = yearly ? yearlyPrice : monthly;
              return (
                <div key={name} className={`relative rounded-2xl overflow-hidden transition-all duration-400 ${isPro ? 'scale-[1.02] md:scale-105 z-10' : 'hover:-translate-y-1'}`}
                  style={{
                    border: isPro ? `1px solid ${color}50` : '1px solid rgba(255,255,255,0.06)',
                    background: isPro ? `linear-gradient(145deg,rgba(13,162,231,0.08) 0%,rgba(13,162,231,0.03) 100%)` : 'linear-gradient(145deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)',
                    backdropFilter: 'blur(14px)',
                    boxShadow: isPro ? `0 0 40px -8px ${glow}` : 'none',
                  }}
                >
                  {/* Pro glow effect */}
                  {isPro && <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundImage: `linear-gradient(to right,transparent,${color},transparent)` }} />}

                  {badge && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}35` }}>{badge}</span>
                    </div>
                  )}

                  <div className="p-7">
                    <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>

                    {/* Price */}
                    <div className="mb-7">
                      {price !== null ? (
                        <div className="flex items-end gap-1">
                          <span className="text-sm font-medium text-gray-400 mb-1">$</span>
                          <span className="text-5xl font-black text-white leading-none">{price}</span>
                          <span className="text-gray-500 text-sm mb-1">/{yearly ? 'mo' : 'mo'}</span>
                        </div>
                      ) : (
                        <div className="text-3xl font-black text-white">Custom</div>
                      )}
                      {yearly && price && <p className="text-green-400 text-xs font-semibold mt-1">Save ${(monthly - price) * 12}/yr</p>}
                    </div>

                    {/* CTA */}
                    <a href="#connect">
                      <button className="w-full h-11 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 mb-7" style={isPro ? { backgroundColor: color, color: '#fff', boxShadow: `0 0 16px ${color}50` } : { backgroundColor: `${color}15`, color, border: `1px solid ${color}30` }}>
                        {cta}
                      </button>
                    </a>

                    {/* Features */}
                    <div className="space-y-2.5">
                      {features.map(({ text, yes }) => (
                        <div key={text} className={`flex items-center gap-3 text-sm ${yes ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span className="material-symbols-outlined text-base shrink-0" style={{ color: yes ? color : '#374151' }}>{yes ? 'check_circle' : 'cancel'}</span>
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <p className="text-center text-gray-600 text-xs mt-10">
            * Prices are in USD. All projects include a free consultation call. Custom requirements? <a href="#connect" className="underline" style={{ color: P }}>Let's discuss.</a>
          </p>
        </div>
      </div>
    </section>
  );
}