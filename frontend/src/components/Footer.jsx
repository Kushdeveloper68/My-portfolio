import React from 'react';
import '../style/footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [{text:'Home', link:''},
    {text:'About', link:'#about'},
    {text:'Project', link:'#project'},
    {text:'Certificate', link:'#certificate'},
    {text:'Skill', link:'#skill'},
    {text:'contact', link:'#contact'},
    {text:'Mail', link:"mailto:kushpandit68775@gmail.com"}
  ];

  return (
    <footer className="relative w-full border-t border-primary/30 bg-background-dark/80 backdrop-blur-lg overflow-hidden font-display">
      {/* Neon Pulse Top Border */}
      <div className="absolute top-0 left-0 w-full h-0.5 pointer-events-none">
        <div className="w-full h-full neon-border"></div>
      </div>

      {/* Footer background pattern */}
      <div
        className="absolute inset-0 z-[-1] opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#0db9f2 0.5px, transparent 0.5px)',
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Quick Links */}
          <div className="flex flex-col gap-4 animate-ripple-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="font-bold text-lg text-white">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {links.map((text) => (
                <a key={text.text} href={text.link} className="link-animate group relative text-[#9cb2ba] hover:text-white transition-colors duration-300 w-fit mx-auto md:mx-0">
                  {text.text}
                  <span className="link-animate-bar absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                </a>
              ))}
            </nav>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col gap-4 animate-scanline-reveal" style={{ animationDelay: '400ms' }}>
            <h3 className="font-bold text-lg text-white">Get in Touch</h3>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <a href="mailto:kushpandit68775@gmail.com" className="flex items-center gap-3 group text-[#9cb2ba] hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover:animate-pulse">mail</span>
                <span>kushpandit68775@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-[#9cb2ba]">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Gandhidham  , Gujarat</span>
              </div>
            </div>
          </div>
          {/* Social Media */}
          <div className="flex flex-col gap-4 animate-ripple-fade-in" style={{ animationDelay: '600ms' }}>
            <h3 className="font-bold text-lg text-white">Find Me Online</h3>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              {[
                { icon: 'code', label: 'GitHub', link:"https://github.com/kushdeveloper68" },
                { icon: 'hub', label: 'LinkedIn', link:"https://www.linkedin.com/in/developerkush" },
                { icon: 'photo_camera', label: 'Instagram', link:"https://www.instagram.com/kushdev.js" },
                { icon: 'close', label: 'X', link:"https://x.com/kushdeveloper68" },
                { icon: 'terminal', label: 'CodePen', link:"https://codepen.io/Kush-Pandit" },
                { icon: 'cloud', label: 'GCloud', link:" https://www.skills.google/public_profiles/19b83dbf-4185-4074-94d3-5273184803d2?qlcampaign=google.%23" },
              ].map(({ icon, label , link}) => (
                <a key={label} href={link} className="group relative text-[#9cb2ba] hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                  <span className="material-symbols-outlined text-2xl">{icon}</span>
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="shimmer-text animate-shimmer text-base font-normal leading-normal">
            © 2025 Developer Kush. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Glowing Go to Top FAB */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-primary/80 backdrop-blur-sm text-background-dark shadow-lg shadow-primary/30 animate-orb-pulse group-hover-icon transition-transform duration-300 hover:bg-primary"
        aria-label="Go to Top"
        type="button"
        style={{ border: 'none', outline: 'none' }}
      >
        <span className="fab-aura"></span>
        <span className="material-symbols-outlined text-2xl font-bold transition-transform duration-300 icon-hover transform group-hover:-translate-y-1">arrow_upward</span>
      </button>
    </footer>
  );
}
