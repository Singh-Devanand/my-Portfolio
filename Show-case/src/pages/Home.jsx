import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Academic from '../components/Academics'
import SpaceBackground from '../components/SpaceBackground'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#06060c] text-white">
      <SpaceBackground />
      <div className="relative z-10">
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Academic/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home