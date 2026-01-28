import { useState, createContext, useContext } from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'

// Create context for video modal
export const VideoModalContext = createContext()

export const useVideoModal = () => useContext(VideoModalContext)

function App() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const openVideo = () => setIsVideoOpen(true)
  const closeVideo = () => setIsVideoOpen(false)

  return (
    <VideoModalContext.Provider value={{ openVideo, closeVideo, isVideoOpen }}>
      <div className="min-h-screen bg-zinc-950 text-white antialiased">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
        
        {/* Video Modal */}
        <VideoModal isOpen={isVideoOpen} onClose={closeVideo} />
      </div>
    </VideoModalContext.Provider>
  )
}

export default App
