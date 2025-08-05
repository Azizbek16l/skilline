import './App.css'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/HeroSection/Hero'
import TrustedBy from './components/TrustedBy/TrustedBy'
import SkillineSection from './components/WhatIsSkilline/SkillineSection'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <TrustedBy/>
      <SkillineSection/>
      <Features/>
      <Footer/>

    </>
  )
}

export default App