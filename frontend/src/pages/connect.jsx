import { useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const P = '#0da2e7';

const SOCIALS = [
  { href: 'https://github.com/Kushdeveloper68', icon: 'code', title: 'GitHub' },
  { href: 'https://www.linkedin.com/in/kushdeveloper', icon: 'work', title: 'LinkedIn', target: '_blank' },
  { href: 'https://www.instagram.com/kushdev.js', icon: 'chat_bubble', title: 'Instagram', target: '_blank' },
  { href: 'https://x.com/kushdeveloper68', icon: 'palette', title: 'Twitter/X', target: '_blank' },
];

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skill', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#project', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certificate', label: 'Certificates' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
];

export default function ConnectPage() {
  const [state, handleSubmit] = useForm('meoprnge');
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) formRef.current.reset();
  }, [state.succeeded]);

  return (
    <section id="connect" style={{ backgroundColor: '#101c22', color: '#fff', fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        {/* Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(16,28,34,0.88)' }} />
          <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay z-0 scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQwGLep3dcnNrTba0cA57-tw8k8qADUfLXjVcFaIYFOd1inZ1fOIf9nzSXAfg6ByUdg1nkVuHSiqaPsUbvyFR6gOr_Ccaro2eLJElCoNTerO-_D0I46rz9TcVyCLUWdZ4UztdatwE9msBqStTffQnI8LduKiVszxM0SfGXnG2rvVge8ZxjfYz7eAi1DvYIe_IPTQjWZUf7RS738gZt8nAkbycgYRMl1V9fMZHzWtRCUyIzc3wsKwSVIVr0zyDHbyg-gaS0rzKzWhc')" }} />
          <div className="absolute top-[-20%] left-[20%] rounded-full blur-[120px] animate-pulse" style={{ width: '600px', height: '600px', backgroundColor: 'rgba(13,162,231,0.14)', zIndex: 11 }} />
          <div className="absolute bottom-[-10%] right-[-10%] rounded-full blur-[100px]" style={{ width: '500px', height: '500px', backgroundColor: 'rgba(8,145,178,0.08)', zIndex: 11 }} />
        </div>

        <main className="relative z-20 flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full px-5 md:px-10 py-16 md:py-24">
          {/* Header */}
          <div className="flex flex-col items-center mb-14 gap-4 text-center">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border" style={{ borderColor: 'rgba(13,162,231,0.3)', backgroundColor: 'rgba(13,162,231,0.08)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: P }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: P }}>System Online</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to bottom,#fff,rgba(255,255,255,0.55))' }}>
              LET&apos;S BUILD<br className="hidden md:block" /> THE FUTURE
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 max-w-6xl mx-auto w-full">
            {/* Left */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-10">
              <div className="space-y-6">
                <div>
                  <p className="text-[#315768] text-xs font-bold tracking-widest uppercase mb-2">Status</p>
                  <p className="text-lg text-slate-300 font-light leading-relaxed">Currently available for freelance projects and open to full-time opportunities.</p>
                </div>
                <div>
                  <p className="text-[#315768] text-xs font-bold tracking-widest uppercase mb-2">Communicate</p>
                  <a href="mailto:kushpandit68775@gmail.com" className="group block w-fit">
                    <p className="text-xl md:text-2xl font-bold text-white group-hover:text-[#0da2e7] transition-colors duration-300 break-all">kushpandit68775@gmail.com</p>
                    <div className="h-0.5 w-0 bg-[#0da2e7] group-hover:w-full transition-all duration-500 mt-1" />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[#315768] text-xs font-bold tracking-widest uppercase mb-4">Network</p>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map(({ href, icon, title }) => (
                    <a key={title} href={href} target="_blank" rel="noopener noreferrer" title={title}
                      className="group flex items-center justify-center w-13 h-13 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#0da2e7] hover:shadow-[0_0_14px_rgba(13,162,231,0.5)]"
                      style={{ backgroundColor: '#182b34', borderColor: '#315768', width: '52px', height: '52px' }}>
                      <span className="material-symbols-outlined text-white group-hover:text-[#0da2e7] transition-colors text-xl">{icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/5 p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: 'rgba(24,43,52,0.65)', backdropFilter: 'blur(18px)' }}>
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-6xl" style={{ color: P }}>forward_to_inbox</span>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  {state.succeeded && (
                    <div className="p-4 rounded-xl border text-sm font-medium" style={{ backgroundColor: 'rgba(13,162,231,0.08)', borderColor: 'rgba(13,162,231,0.2)', color: P }}>
                      ✓ Thanks! Your message has been sent.
                    </div>
                  )}
                  {state.errors && Array.isArray(state.errors) && state.errors.length > 0 && (
                    <div className="p-3 rounded-xl border border-red-600/40 text-red-300 text-sm bg-red-900/15">
                      {state.errors.map((e, i) => <div key={i}>{e.message || 'Submission failed. Please try again.'}</div>)}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-400 text-xs font-semibold ml-0.5">Name</label>
                      <input type="text" name="name" placeholder="Your name" disabled={state.submitting || state.succeeded}
                        className="w-full rounded-xl border text-white placeholder-slate-600 focus:border-[#0da2e7] focus:ring-1 focus:ring-[#0da2e7] h-12 px-4 outline-none transition-all text-sm"
                        style={{ backgroundColor: '#0e1c24', borderColor: '#315768' }} />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-slate-400 text-xs font-semibold ml-0.5">Email</label>
                      <input type="email" name="email" placeholder="your@email.com" disabled={state.submitting || state.succeeded}
                        className="w-full rounded-xl border text-white placeholder-slate-600 focus:border-[#0da2e7] focus:ring-1 focus:ring-[#0da2e7] h-12 px-4 outline-none transition-all text-sm"
                        style={{ backgroundColor: '#0e1c24', borderColor: '#315768' }} />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-slate-400 text-xs font-semibold ml-0.5">Message</label>
                    <textarea name="message" placeholder="Tell me about your project..." disabled={state.submitting || state.succeeded} rows={5}
                      className="w-full rounded-xl border text-white placeholder-slate-600 focus:border-[#0da2e7] focus:ring-1 focus:ring-[#0da2e7] p-4 resize-none outline-none transition-all bg-grid-pattern text-sm"
                      style={{ backgroundColor: '#0e1c24', borderColor: '#315768' }} />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button type="submit" disabled={state.submitting || state.succeeded} aria-busy={state.submitting}
                    className="group relative w-full overflow-hidden rounded-xl font-bold text-white h-12 transition-all hover:shadow-[0_0_24px_rgba(13,162,231,0.5)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: P }}>
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                      {state.submitting ? 'Sending…' : state.succeeded ? '✓ Sent!' : 'Initialize Transmission'}
                      {!state.succeeded && <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>}
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-20 border-t border-white/5" style={{ backgroundColor: 'rgba(16,28,34,0.8)', backdropFilter: 'blur(10px)' }}>
          <div className="max-w-7xl mx-auto px-5 py-7">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-xs text-slate-500 font-mono">
              <p>© 2025 Designed &amp; Built by <span className="text-slate-400 font-semibold">Kush Pandit</span></p>
              {/* Footer nav */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                {NAV_LINKS.map(({ href, label }) => (
                  <a key={href} href={href} className="hover:text-[#0da2e7] transition-colors">{label}</a>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="material-symbols-outlined text-[#0da2e7] text-sm">location_on</span>
                  <span>Gandhidham, Gujarat</span>
                </div>
                <a href="#hero">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer hover:border-[#0da2e7]/30 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="material-symbols-outlined text-[#0da2e7] text-sm">arrow_upward</span>
                    <span>Top</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}