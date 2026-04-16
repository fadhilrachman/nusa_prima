import { useEffect } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Sectors from './sections/Sectors'
import Product from './sections/Product'
import ProductSpecs from './sections/ProductSpecs'
import Advantages from './sections/Advantages'
import HowItWorks from './sections/HowItWorks'
import CaseStudy from './sections/CaseStudy'
import VisionMission from './sections/VisionMission'
import Values from './sections/Values'
import TargetMarket from './sections/TargetMarket'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Distributor from './sections/Distributor'
import { useSiteStore } from './store/useSiteStore'
import { useShallow } from 'zustand/react/shallow'
import Gallery from './sections/Gallery'

const App = () => {
  const { fetchSiteData, loading, siteData } = useSiteStore(useShallow((state) => ({
    fetchSiteData: state.fetchSiteData,
    loading: state.loading,
    siteData: state.siteData
  })))

  useEffect(() => {
    fetchSiteData()
  }, [fetchSiteData])

  if (loading && !siteData) {
    return (
      <div className="fixed inset-0 bg-navy-900 z-[9999] flex flex-col items-center justify-center">
        <div className="relative">
          {/* Animated rings */}
          <div className="w-24 h-24 rounded-full border-4 border-blue-500/20" />
          <div className="absolute top-0 left-0 w-24 h-24 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
          <div className="absolute top-2 left-2 w-20 h-20 rounded-full border-4 border-t-emerald-500 border-r-transparent border-b-transparent border-l-transparent animate-spin-slow" />
          
          {/* Logo or initial in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-black text-2xl tracking-tighter">NP</span>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <h2 className="text-white font-bold text-xl tracking-wide animate-pulse">Nusa Prima Energi</h2>
          <p className="text-blue-300/60 text-xs uppercase tracking-[0.3em] mt-2">Menyiapkan Pengalaman Anda</p>
        </div>
        
        {/* Progress bar hint */}
        <div className="absolute bottom-12 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 w-1/2 animate-shimmer" />
        </div>
      </div>
    )
  }

  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sectors />
        <Product />
        <ProductSpecs />
        {/* <Advantages /> */}
        <HowItWorks />
        <CaseStudy />
        {/* <VisionMission /> */}
        {/* <Values /> */}
        <Gallery />
        <Distributor />
        {/* <TargetMarket /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
