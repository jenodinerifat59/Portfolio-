import React from 'react'
import Nav from './ui/Nav'
import Hero from './ui/Hero'
import About from './ui/About'
import SkillsSection from './ui/SkillsSection'
import Featured from './ui/Featured'

const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <SkillsSection/>
      <Featured/>
    </div>
  )
}

export default App
