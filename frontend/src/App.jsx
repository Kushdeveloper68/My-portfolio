import { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { SectionBoundary } from './components';

// Hero eagerly load karo — above the fold hai
import Hero from './pages/home';

// Baaki sab lazy load karo
const About         = lazy(() => import('./pages/about'));
const SkillsPage    = lazy(() => import('./pages/skill'));
const ServicesPage  = lazy(() => import('./pages/services'));
const PremiumProjects = lazy(() => import('./pages/project'));
const ExperiencePage  = lazy(() => import('./pages/experience'));
const CertificatesPage = lazy(() => import('./pages/certificate'));
const DeveloperSignal = lazy(() => import('./pages/testimonials'));
const PricingPage   = lazy(() => import('./pages/pricing'));
const ConnectPage   = lazy(() => import('./pages/connect'));

function App() {
  useEffect(() => {
    // LENIS + GSAP — sahi tarika (double tick nahi hoga)
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // SAHI TARIKA: GSAP ticker mein lenis.raf integrate karo
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  // Har section apni SectionBoundary mein wrapped hai — agar kisi ek section
  // ka WebGL/canvas background kisi purane GPU ya browser pe fail ho jaaye,
  // toh sirf wahi section skip hoga, neeche ke saare sections normally render
  // hote rahenge (poora page blank nahi hoga).
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <SectionBoundary name="about"><About /></SectionBoundary>
        <SectionBoundary name="skill"><SkillsPage /></SectionBoundary>
        <SectionBoundary name="services"><ServicesPage /></SectionBoundary>
        <SectionBoundary name="project"><PremiumProjects /></SectionBoundary>
        <SectionBoundary name="experience"><ExperiencePage /></SectionBoundary>
        <SectionBoundary name="certificate"><CertificatesPage /></SectionBoundary>
        <SectionBoundary name="testimonials"><DeveloperSignal /></SectionBoundary>
        <SectionBoundary name="pricing"><PricingPage /></SectionBoundary>
        <SectionBoundary name="connect"><ConnectPage /></SectionBoundary>
      </Suspense>
    </>
  );
}

export default App;