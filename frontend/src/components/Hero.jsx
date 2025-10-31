import "../style/hero.css"
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    // Typewriter Effect
    const words = [
      "Full Stack Developer",
      "Creative Coder",
      "Tech Innovator",
      "Problem Solver",
      "Backend Developer",
      "UI & UX designer"

    ];
    let i = 0;
    let j = 0;
    let isDeleting = false;
    let currentWord = "";
    const typewriterElement = document.getElementById("typewriter");
    function type() {
      currentWord = words[i];
      if (isDeleting) {
        if (typewriterElement)
          typewriterElement.textContent = currentWord.substring(0, j - 1);
        j--;
        if (j === 0) {
          isDeleting = false;
          i = (i + 1) % words.length;
        }
      } else {
        if (typewriterElement)
          typewriterElement.textContent = currentWord.substring(0, j + 1);
        j++;
        if (j === currentWord.length) {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }
      }
      const typeSpeed = isDeleting ? 75 : 150;
      setTimeout(type, typeSpeed);
    }
    setTimeout(type, 1500);

    // Parallax Effect
    const heroText = document.querySelector(".hero-main-content");
    window.addEventListener("scroll", () => {
      const offset = window.pageYOffset;
      if (heroText) heroText.style.transform = `translateY(${offset * 0.3}px)`;
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  // Mobile drawer close on backdrop click
  function handleBackdrop(e) {
    if (e.target.classList.contains("mobile-nav-backdrop")) setNavOpen(false);
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden bg-[#0A0A1A] font-display text-[#F0F0F0]">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 opacity-40">
        {/* ...SVG code unchanged... */}
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full glassmorphism">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 text-[#00F5FF]">
                {/* Logo svg */}
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  />
                </svg>
              </div>
              <h2 className="text-[#F0F0F0] text-xl font-bold tracking-wider">Developer Kush</h2>
            </div>
            <nav className="hidden lg:flex items-center gap-2">
              <a className="text-[#F0F0F0] text-sm font-medium hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#">Home</a>
              <a className="text-[#A0A0B0] text-sm font-medium hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#about">About</a>
              <a className="text-[#A0A0B0] text-sm font-medium hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#project">Projects</a>
              <a className="text-[#A0A0B0] text-sm font-medium hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#certificate">Certificates</a>
              <a className="text-[#A0A0B0] text-sm font-medium hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#skill">Skills</a>
              <a className="text-[#A0A0B0] text-sm font-medium hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#contact">Contact</a>
            </nav>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Open navigation"
              onClick={() => setNavOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[#F0F0F0]">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {navOpen && (
          <div className="mobile-nav-backdrop fixed inset-0 z-50 bg-black/40" onClick={handleBackdrop}>
            <aside className="fixed top-0 right-0 h-full w-64 bg-[#090911] shadow-2xl z-50 flex flex-col p-8 animate-slidein">
              <button
                className="self-end mb-8 flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close"
                onClick={() => setNavOpen(false)}
                type="button"
              >
                <span className="material-symbols-outlined text-[#F0F0F0]">close</span>
              </button>
              <nav className="flex flex-col gap-4 mt-6 bg-[#090911]">
                <a className="text-[#F0F0F0] text-base font-semibold hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="">Home</a>
                <a className="text-[#A0A0B0] text-base font-semibold hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#about">About</a>
                <a className="text-[#A0A0B0] text-base font-semibold hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#project">Projects</a>
                <a className="text-[#A0A0B0] text-base font-semibold hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#certificate">Certificates</a>
                <a className="text-[#A0A0B0] text-base font-semibold hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#skill">Skills</a>
                <a className="text-[#A0A0B0] text-base font-semibold hover:text-[#00F5FF] transition-colors py-2 px-4 nav-link-effect" href="#contact">Contact</a>
              </nav>
            </aside>
          </div>
        )}
      </header>

     <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-10 py-20 text-center relative z-10">
          <div className="hero-main-content flex flex-col items-center gap-6 max-w-4xl mx-auto">
            {/* Hero Title */}
            <h1 className="text-[#F0F0F0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter opacity-0 animate-fade-in-up">
              Hi, I’m Developer Kush 👋
            </h1>
            <div className="h-10 text-xl sm:text-2xl md:text-3xl text-[#A0A0B0] opacity-0 animate-fade-in-up animate-delay-200">
              <span className="font-medium text-[#00F5FF] typewriter-cursor" id="typewriter">
                Full Stack Developer
              </span>
            </div>
            <p className="text-[#A0A0B0] text-base md:text-lg max-w-2xl opacity-0 animate-fade-in-up animate-delay-400">
              💻 I'm Kush Pandit, a passionate Full Stack Web Developer and Computer Engineering student. I love building modern, responsive, and high-performance websites using React, Node.js, Express, and MongoDB. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 opacity-0 animate-fade-in-up animate-delay-600">
              <button
                className="relative inline-flex items-center justify-center h-12 px-8 overflow-hidden font-bold text-white transition-all duration-300 ease-out bg-transparent border-2 border-[#00F5FF] rounded-lg group hover:animate-pulse-glow"
                style={{ boxShadow: "0 0 5px #00F5FF, 0 0 15px #00F5FF" }}
              >
                <span className="absolute inset-0 w-full h-full bg-[#00F5FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <a href="/developer-kush-resume.pdf" download=""><span className="relative z-10">Download resume</span></a>
              </button>
              <button
                className="relative inline-flex items-center justify-center h-12 px-8 overflow-hidden font-bold text-white transition-all duration-300 bg-transparent border-2 border-[#E600FF] rounded-lg group hover:animate-pulse-glow"
                style={{ boxShadow: "0 0 5px #E600FF, 0 0 15px #E600FF" }}
              >
                <span className="absolute inset-0 w-full h-full bg-[#E600FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <a href="mailto:kushpandit68775@gmail.com" ><span className="relative z-10">Get in Touch</span></a>
              </button>
            </div>
          </div>
          {/* Hero Background Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 flex items-center justify-center opacity-10">
            <img
              alt="Abstract holographic shape"
              className="animate-pulse"
              src="/heroback.jpg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
