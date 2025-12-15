import { useState } from 'react'

import Hero from './pages/home';
import About from './pages/about';
import SkillsPage from './pages/skill';
import PremiumProjects from './pages/project';
import ExperiencePage from './pages/experience';
import CertificatesPage from './pages/certificate';
import ConnectPage from './pages/connect';
function App() {

  return (
    <>
      <Hero/>
       <About/>
      <SkillsPage/>
      <PremiumProjects/> 
      <ExperiencePage/>
     <CertificatesPage/>
 <ConnectPage/> 
    </>
  )
}

export default App
