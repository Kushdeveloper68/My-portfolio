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

function App() {
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