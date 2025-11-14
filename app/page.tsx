'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Services from '@/components/Services'
import DigitalPresencePreview from '@/components/DigitalPresencePreview'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  useEffect(() => {
    // Mark body as loaded for animations
    document.body.classList.add('loaded')

    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Disable common keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault()
        return false
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <DigitalPresencePreview />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  )
}

