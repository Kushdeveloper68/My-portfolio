import React, { useState } from "react";

const primary = "#0da2e7";
const primaryDark = "#0a8bc5";

const Hero = () => {
  const [navBtnBg, setNavBtnBg] = useState(primary);
  const [primaryBtnBg, setPrimaryBtnBg] = useState(primary);
 
  return (
    <div id="hero"
      className="dark"
      style={{
        backgroundColor: "#101c22", // background-dark
        color: "#ffffff",
        fontFamily: '"Space Grotesk", sans-serif',
      }}
    >
      {/* Background Effects Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1f2e35 1px, transparent 1px), linear-gradient(to bottom, #1f2e35 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Glowing Orbs / Mesh Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mesh-gradient-1 blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full mesh-gradient-2 blur-3xl opacity-50"></div>
        <div
          className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(13,162,231,0.05)" }} // primary/5
        ></div>

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-b"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(16,28,34,0.3), transparent, #101c22)",
          }}
        ></div>
      </div>

      {/* Navigation */}
     <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-b-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div
              className="relative size-10 flex items-center justify-center rounded-lg group-hover:bg-primary/30 transition-colors"
              style={{ backgroundColor: "rgba(13,162,231,0.2)" }} // bg-primary/20
            >
              <span
                className="material-symbols-outlined text-2xl group-hover:animate-pulse"
                style={{ color: primary }} // text-primary
              >
                terminal
              </span>
              <div
                className="absolute inset-0 rounded-lg group-hover:shadow-neon transition-shadow"
                style={{ border: "1px solid rgba(13,162,231,0.3)" }} // border-primary/30
              ></div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-bold leading-none tracking-tight">
                Kush
              </h2>
              <span
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: primary }} // text-primary
              >
                Full Stack
              </span>
            </div>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
           
             href="#hero"
            className="text-slate-300 hover:text-blue-500 text-sm font-medium transition-colors hover:shadow-neon px-2 py-1 rounded">
              Home
              
            </a>
            <a
             href="#about"
             
              className="text-slate-300 hover:text-blue-500 text-sm font-medium  px-2 py-1"
              
              // style={{ borderColor: primary }} // border-primary
            >
              About
            </a>
            <a 
             href="#skill"
            className="text-slate-300 hover:text-blue-500 text-sm font-medium transition-colors hover:shadow-neon px-2 py-1 rounded">
              Skill
            </a>
            <a 
            href="#project"
            className="text-slate-300 hover:text-blue-500 text-sm font-medium transition-colors hover:shadow-neon px-2 py-1 rounded">
              Project
            </a>
            <a 
             href="#experience"
            className="text-slate-300 hover:text-blue-500 text-sm font-medium transition-colors hover:shadow-neon px-2 py-1 rounded">
              Experience
            </a>
            <a 
             href="#certificate"
            className="text-slate-300 hover:text-blue-500 text-sm font-medium transition-colors hover:shadow-neon px-2 py-1 rounded">
              Certificate
            </a>
            <a 
             href="#connect"
            className="text-slate-300 hover:text-blue-500 text-sm font-medium transition-colors hover:shadow-neon px-2 py-1 rounded">
              Connect
            </a>
          </nav>
          <a href="/developer-kush-resume.pdf" download>
          <button
            className="hidden md:flex items-center justify-center h-10 px-6 text-white text-sm font-bold rounded-lg shadow-neon hover:shadow-neon-strong transition-all duration-300 transform hover:-translate-y-0.5"
            style={{ backgroundColor: primary }} // bg-primary
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = primaryDark)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = primary)
            }
          >
            <span>Resume</span>
            <span className="material-symbols-outlined text-sm ml-2">
              download
            </span>
          </button>
          </a>
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 flex min-h-screen w-full flex-col justify-center items-center px-4 pt-20 pb-10">
        <div className="layout-content-container flex flex-col items-center max-w-5xl w-full text-center">
          {/* Tech Spec Label */}
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-sm"
            style={{
              borderColor: "rgba(13,162,231,0.3)", // border-primary/30
              backgroundColor: "rgba(13,162,231,0.1)", // bg-primary/10
            }}
          >
            <div
              className="size-2 rounded-full animate-pulse"
              style={{
                backgroundColor: primary, // bg-primary
                boxShadow: "0 0 8px #0da2e7", // shadow-[0_0_8px_#0da2e7]
              }}
            ></div>
            <span
              className="text-xs font-bold uppercase tracking-[0.15em]"
              style={{ color: primary }} // text-primary
            >
              BUILDING MODERN WEB EXPERIENCES
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-[-0.03em] mb-6 text-glow">
            Crafting Scalable &amp; 
 <br className="hidden md:block" />
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-primary/80"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff, #ffffff, rgba(13,162,231,0.8))", // to-primary/80
              }}
            >
              Modern
            </span>{" "}
            <br className="hidden md:block" />
            Web Experiences
          </h1>

          {/* Sub Headline */}
          <p className="text-slate-400 text-sm md:text-lg  font-normal leading-relaxed tracking-wide max-w-3xl mx-auto mb-10 border-l-2 pl-4 md:pl-0 md:border-l-0">
            <span
              className="font-medium"
              style={{ color: primary,textTransform:"uppercase"}} // text-primary
            >
              Full-Stack Web Developer
            </span>{" "}
            <span className="text-slate-600 px-2">•</span>
            <span className="text-white/90" style={{textTransform:"uppercase"}}>Frontend/Backend Focused</span>{" "}
            <span className="text-slate-600 px-2">•</span>
            <span className="text-white/90">PROBLEM SOLVER</span>
          </p>

          {/* Action Buttons */}
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
            {/* Primary Button */}
<a href="#project">
            <button
              className="group relative flex h-14 w-full sm:w-auto min-w-[180px] items-center justify-center gap-2 overflow-hidden rounded-lg px-8 text-base font-bold text-white shadow-lg btn-glow transition-all hover:scale-105"
              style={{
                backgroundColor: primaryBtnBg,
              }}
              onMouseEnter={() => setPrimaryBtnBg(primaryDark)}
              onMouseLeave={() => setPrimaryBtnBg(primary)}
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="material-symbols-outlined text-xl">layers</span>
              <span>View Projects</span>
            </button>
</a>
            {/* Secondary Button */}
            <a href="mailto:kushpandit68775@gmail.com">
            <button className="group flex h-14 w-full sm:w-auto min-w-[180px] items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <span className="material-symbols-outlined text-xl group-hover:rotate-12 transition-transform">
                mail
              </span>
              <span>Contact Me</span>
            </button>
            </a>
          </div>

          {/* Floating Decoration Elements */}
          <div className="absolute top-1/4 left-[5%] hidden lg:block opacity-20 pointer-events-none">
            <div className="border border-white/20 p-4 rounded-xl backdrop-blur-sm transform -rotate-6">
              <div className="flex gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-1">
                <div className="w-24 h-2 bg-white/20 rounded"></div>
                <div
                  className="w-16 h-2 rounded"
                  style={{ backgroundColor: "rgba(13,162,231,0.4)" }} // bg-primary/40
                ></div>
                <div className="w-20 h-2 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/3 right-[5%] hidden lg:block opacity-20 pointer-events-none">
            <div
              className="p-6 rounded-full backdrop-blur-md transform rotate-12"
              style={{
                border: "1px solid rgba(13,162,231,0.3)", // border-primary/30
                boxShadow: "0 0 30px rgba(13,162,231,0.2)", // shadow-[0_0_30px_rgba(13,162,231,0.2)]
              }}
            >
              <span
                className="material-symbols-outlined text-5xl"
                style={{ color: primary }} // text-primary
              >
                deployed_code
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-2 animate-bounce opacity-70">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
            Scroll to Explore
          </span>
          <div className="flex items-center justify-center p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span
              className="material-symbols-outlined"
              style={{ color: primary }} // text-primary
            >
              arrow_downward
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
