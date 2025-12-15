import React, { useRef, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

const ConnectPage = () => {
  const [state, handleSubmit] = useForm("meoprnge");
  const formRef = useRef(null)

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      // clear form after successful submit
      formRef.current.reset()
    }
  }, [state.succeeded])

  return (
    <div id="connect"
      className="dark"
      style={{
        fontFamily: '"Space Grotesk", sans-serif',
        backgroundColor: "#101c22", // background-dark
        color: "white",
      }}
    >
      <div className="relative flex min-h-screen w-full flex-col justify-between antialiased overflow-x-hidden">
        {/* Animated Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Dark Mesh Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{ backgroundColor: "rgba(16,28,34,0.9)" }} // background-dark/90
          />
          {/* Tech Map / Wireframe Background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay z-0 scale-105"
            data-alt="Abstract digital wireframe globe connected network on dark blue background"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQwGLep3dcnNrTba0cA57-tw8k8qADUfLXjVcFaIYFOd1inZ1fOIf9nzSXAfg6ByUdg1nkVuHSiqaPsUbvyFR6gOr_Ccaro2eLJElCoNTerO-_D0I46rz9TcVyCLUWdZ4UztdatwE9msBqStTffQnI8LduKiVszxM0SfGXnG2rvVge8ZxjfYz7eAi1DvYIe_IPTQjWZUf7RS738gZt8nAkbycgYRMl1V9fMZHzWtRCUyIzc3wsKwSVIVr0zyDHbyg-gaS0rzKzWhc')",
            }}
          />
          {/* Radial Glow */}
          <div
            className="absolute top-[-20%] left-[20%] rounded-full blur-[120px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]"
            style={{
              width: "600px",
              height: "600px",
              backgroundColor: "rgba(13,162,231,0.2)", // primary/20
            }}
          />
          <div
            className="absolute bottom-[-10%] right-[-10%] rounded-full blur-[100px]"
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: "rgba(8,145,178,0.1)", // cyan-600/10
            }}
          />
        </div>

        {/* Main Content Container */}
        <main className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex-grow flex flex-col justify-center">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center mb-16 lg:mb-24 space-y-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#0da2e7]/30 bg-[#0da2e7]/10 backdrop-blur-md">
              <span className="block w-2 h-2 rounded-full bg-[#0da2e7] animate-pulse" />
              <span className="text-[#0da2e7] text-xs font-bold tracking-[0.2em] uppercase">
                System Online
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_30px_rgba(13,162,231,0.15)]">
              LET&apos;S BUILD <br className="hidden md:block" />
              THE FUTURE
            </h1>
          </div>

          {/* Interaction Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto w-full">
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[#315768] text-sm font-bold tracking-widest uppercase mb-2">
                    Status
                  </h3>
                  <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                    Currently available for freelance projects and open to
                    full-time opportunities.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[#315768] text-sm font-bold tracking-widest uppercase mb-2">
                    Communicate
                  </h3>
                  <a
                    href="mailto:kushpandit68775@gmail.com"
                    className="group block relative w-fit"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#0da2e7] transition-colors duration-300">
                      kushpandit68775@gmail.com
                    </h2>
                    <div className="h-0.5 w-0 bg-[#0da2e7] group-hover:w-full transition-all duration-500 ease-out mt-1" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[#315768] text-sm font-bold tracking-widest uppercase mb-4">
                  Network
                </h3>
                <div className="flex flex-wrap gap-4">
                  {/* GitHub */}
                  <a
                  target="_blank"
                    href="https://github.com/Kushdeveloper68"
                    title="github"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#0da2e7] hover:shadow-[0_0_15px_rgba(13,162,231,0.5)]"
                    style={{
                      backgroundColor: "#182b34",
                      borderColor: "#315768",
                    }}
                  >
                    <span className="material-symbols-outlined text-white group-hover:text-[#0da2e7] transition-colors text-2xl">
                      code
                    </span>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/kushdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    title="linkedin"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#0da2e7] hover:shadow-[0_0_15px_rgba(13,162,231,0.5)]"
                    style={{
                      backgroundColor: "#182b34",
                      borderColor: "#315768",
                    }}
                  >
                    <span className="material-symbols-outlined text-white group-hover:text-[#0da2e7] transition-colors text-2xl">
                      work
                    </span>
                  </a>
                  {/*Instagram */}
                  <a
                    href="https://www.instagram.com/kushdev.js"
                    target="_blank"
                    title="Instagram"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#0da2e7] hover:shadow-[0_0_15px_rgba(13,162,231,0.5)]"
                    style={{
                      backgroundColor: "#182b34",
                      borderColor: "#315768",
                    }}
                  >
                    <span className="material-symbols-outlined text-white group-hover:text-[#0da2e7] transition-colors text-2xl">
                      chat_bubble
                    </span>
                  </a>
                  {/* Dribbble/Portfolio */}
                  <a
                  
                    href="https://x.com/kushdeveloper68"
                    target="_blank"
                    title="Twitter/X"
                    className="group relative flex items-center justify-center w-14 h-14 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-[#0da2e7] hover:shadow-[0_0_15px_rgba(13,162,231,0.5)]"
                    style={{
                      backgroundColor: "#182b34",
                      borderColor: "#315768",
                    }}
                  >
                    <span className="material-symbols-outlined text-white group-hover:text-[#0da2e7] transition-colors text-2xl">
                      palette
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div
                className="backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden group/form"
                style={{ backgroundColor: "rgba(24,43,52,0.6)" }} // surface-dark/60
              >
                {/* Form Decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <span className="material-symbols-outlined text-6xl text-[#0da2e7]">
                    forward_to_inbox
                  </span>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                  {/* Success message */}
                  {state.succeeded && (
                    <div role="status" aria-live="polite" className="p-4 rounded-lg bg-[#0da2e7]/10 border border-[#0da2e7]/20 text-[#0da2e7]">
                      <strong>Thanks!</strong> Your message has been sent.
                    </div>
                  )}

                  {/* Server / submission errors */}
                  {state.errors && state.errors.length > 0 && (
                    <div role="alert" className="p-3 rounded bg-red-900/20 border border-red-600 text-red-300">
                      {state.errors.map((err, i) => (
                        <div key={i}>{err.message || 'Submission failed. Please try again.'}</div>
                      ))}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex flex-col space-y-2">
                      <span className="text-slate-400 text-sm font-medium ml-1">
                        Name
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="form-input w-full rounded-lg border text-white placeholder-slate-600 focus:border-[#0da2e7] focus:ring-1 focus:ring-[#0da2e7] h-14 px-4 transition-all duration-300 outline-none"
                        style={{
                          backgroundColor: "#101c22",
                          borderColor: "#315768",
                        }}
                        disabled={state.submitting || state.succeeded}
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </label>
                    <label className="flex flex-col space-y-2">
                      <span className="text-slate-400 text-sm font-medium ml-1">
                        Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="form-input w-full rounded-lg border text-white placeholder-slate-600 focus:border-[#0da2e7] focus:ring-1 focus:ring-[#0da2e7] h-14 px-4 transition-all duration-300 outline-none"
                        style={{
                          backgroundColor: "#101c22",
                          borderColor: "#315768",
                        }}
                        disabled={state.submitting || state.succeeded}
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </label>
                  </div>
                  <label className="flex flex-col space-y-2">
                    <span className="text-slate-400 text-sm font-medium ml-1">
                      Message
                    </span>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      className="form-textarea w-full rounded-lg border text-white placeholder-slate-600 focus:border-[#0da2e7] focus:ring-1 focus:ring-[#0da2e7] min-h-[160px] p-4 resize-none transition-all duration-300 outline-none bg-grid-pattern"
                      style={{
                        backgroundColor: "#101c22",
                      }}
                      disabled={state.submitting || state.succeeded}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </label>
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={state.submitting || state.succeeded}
                      aria-busy={state.submitting}
                      className="group relative w-full overflow-hidden rounded-lg bg-[#0da2e7] p-4 text-center font-bold text-white shadow-[0_0_20px_rgba(13,162,231,0.3)] transition-all hover:shadow-[0_0_30px_rgba(13,162,231,0.6)] active:scale-[0.99]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {state.submitting ? 'Sending...' : state.succeeded ? 'Sent' : 'INITIALIZE TRANSMISSION'}
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                          send
                        </span>
                      </span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Bar */}
        <footer
          className="relative z-20 border-t border-white/5 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(16,28,34,0.8)" }} // background-dark/80
        >
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-mono">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p>© 2025 Designed &amp; Built by Kush Pandit</p>
                
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="material-symbols-outlined text-[#0da2e7] text-base">
                    location_on
                  </span>
                  <span>Gandhidham , Gujarat</span>
                </div>
                <a href="#hero">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                
                  <span className="material-symbols-outlined text-[#0da2e7] text-base">
                    arrow_upward
                  </span>
                  <span>Go to top</span>
                </div>
                  </a>

              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Extra CSS from original page */}
    </div>
  );
};

export default ConnectPage;
