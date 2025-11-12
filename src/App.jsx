import React from 'react'
import Nav from './ui/Nav'
import Hero from './ui/Hero'
import About from './ui/About'
import SkillsSection from './ui/SkillsSection'
import Featured from './ui/Featured'
import Contact from './ui/Contact'
import Footer from './ui/Footer'
const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <SkillsSection/>
      <Featured/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
