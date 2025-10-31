import React from 'react'
import { Hero,
    Footer,
    Skill,
    Certificate,
    Project,
    About,
    Contact} from "../components"
function Layout() {
  return (
    <>
    <Hero/>
    <About/>
    <Project/>
    <Certificate/>
    <Skill/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Layout