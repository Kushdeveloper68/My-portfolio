import React, { useRef, useState, useEffect } from "react";
import "../style/certificate.css";

const certificates = [
  { icon: "workspace_premium", title: "HTLM5", org: "codeliber", issued: "Sep 2023" },
  { icon: "code", title: "CSS3", org: "Codeliber", issued: "Sep 2023" },
  { icon: "cloud_done", title: "Javascript", org: "Apna collage (YT)", issued: "Dec 2023" },
  { icon: "query_stats", title: "React JS", org: "Chai or Code (YT)", issued: "Feb 2024" },
  { icon: "security", title: "Node JS", org: "Piyush Garg (YT)", issued: "Feb 2024" },
  { icon: "design_services", title: "Mongo DB", org: "codewithharry (YT)", issued: "Mar 2024" }
];

export default function Certificate() {
  const carouselRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const checkButtons = () => {
      setAtStart(el.scrollLeft < 5);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5);
    };
    checkButtons();
    el.addEventListener("scroll", checkButtons);
    window.addEventListener("resize", checkButtons);
    return () => {
      el.removeEventListener("scroll", checkButtons);
      window.removeEventListener("resize", checkButtons);
    };
  }, []);

  const scroll = direction => {
    const el = carouselRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll(".carousel-item"));
    if (!cards.length) return;
    const style = window.getComputedStyle(el);
    const gap = parseInt(style.gap || style.columnGap || "0");
    const cardWidth = cards[0].offsetWidth;
    el.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth"
    });
  };

  return (
    <div className="certificate-bg font-display dark" id="certificate" style={{width:"100%", overflow:"hidden"}}>
      <div className="absolute inset-0 z-0 certificate-bg-layers pointer-events-none">
        <div className="absolute top-0 left-1/4 h-full w-1 rotate-45 laser-sweep animate-laserSweep1"></div>
        <div className="absolute top-0 left-2/3 h-full w-0.5 -rotate-45 laser-sweep animate-laserSweep2"></div>
        <div className="absolute inset-0 radial-bg"></div>
      </div>
      <div className="layout-container flex h-full grow flex-col relative z-10">
        <div className="relative flex flex-1 flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl text-center animate-hologramMaterialize" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-bold leading-tight tracking-tighter text-white sm:text-4xl">
              <span className="text-primary">02.</span>My Learning Journey
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base font-normal leading-relaxed text-gray-400">
              Every skill has a story, here’s where I learned, built, and grew.
            </p>
          </div>
          <div className="relative mt-16 w-full max-w-6xl">
            <div ref={carouselRef}
              className="carousel-container flex gap-8 lg:gap-12 overflow-x-auto overflow-y-visible snap-x snap-mandatory px-4 -mx-4 md:px-0 md:-mx-0"
              style={{ overflowY: "visible" }}
            >
              {certificates.map((cert, i) => (
                <div key={cert.title}
                  className="carousel-item flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <div className="group perspective-[1000px] animate-hologramMaterialize"
                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                    <div
                      className="hologram-card rounded-xl border border-transparent p-6 flex flex-col items-center text-center group-hover:-translate-y-2 group-hover:scale-105 h-full"
                    >
                      <div className="glow-layer-1"></div>
                      <div className="glow-layer-2"></div>
                      <div className="glow-layer-3"></div>
                      <div
                        className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(13,185,242,0.6)]"
                      >
                        <span className="material-symbols-outlined text-primary text-4xl transition-transform duration-300 group-hover:scale-110">{cert.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary glitch-text">{cert.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">{cert.org}</p>
                      <p className="text-xs text-gray-500 mt-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">{` ${cert.issued}`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 flex items-center justify-center gap-8 animate-hologramMaterialize" style={{ animationDelay: "1.1s" }}>
              <button
                disabled={atStart}
                onClick={() => scroll(-1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(13,185,242,0.5)] active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                disabled={atEnd}
                onClick={() => scroll(1)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(13,185,242,0.5)] active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
