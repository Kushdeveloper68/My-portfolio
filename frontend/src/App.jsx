import Hero from './pages/home';
import About from './pages/about';
import SkillsPage from './pages/skill';
import PremiumProjects from './pages/project';
import ServicesPage from './pages/services';
import ExperiencePage from './pages/experience';
import CertificatesPage from './pages/certificate';
import TestimonialsPage from './pages/testimonials';
import PricingPage from './pages/pricing';
import ConnectPage from './pages/connect';
import { useEffect } from 'react';
import Lenis from 'lenis';
import  gsap  from 'gsap';

function App() {
  useEffect(() => {

    // LENIS INIT
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // RAF LOOP
    function update(time) {
      lenis.raf(time);
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    // GSAP SYNC
    lenis.on("scroll", () => {
      gsap.ticker.tick();
    });

    gsap.ticker.lagSmoothing(0);

    // CLEANUP
    return () => {
      lenis.destroy();
    };

  }, []);

  return (
    <>
      <Hero />
      <About />
      <SkillsPage />
      <ServicesPage />
      <PremiumProjects />
      <ExperiencePage />
      <CertificatesPage />
      <TestimonialsPage />
      <PricingPage />
      <ConnectPage />
    </>
  );
}

export default App;