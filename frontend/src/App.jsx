import { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

// Hero eagerly load karo — above the fold hai
import Hero from './pages/home';

// Baaki sab lazy load karo
const About         = lazy(() => import('./pages/about'));
const SkillsPage    = lazy(() => import('./pages/skill'));
const ServicesPage  = lazy(() => import('./pages/services'));
const PremiumProjects = lazy(() => import('./pages/project'));
const ExperiencePage  = lazy(() => import('./pages/experience'));
const CertificatesPage = lazy(() => import('./pages/certificate'));
const TestimonialsPage = lazy(() => import('./pages/testimonials'));
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

  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <About />
        <SkillsPage />
        <ServicesPage />
        <PremiumProjects />
        <ExperiencePage />
        <CertificatesPage />
        <TestimonialsPage />
        <PricingPage />
        <ConnectPage />
      </Suspense>
    </>
  );
}

export default App;