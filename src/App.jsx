import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
