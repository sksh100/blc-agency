'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AboutUs from '@/components/AboutUs'
import ParticleBackground from '@/components/ParticleBackground'
import CookieBanner from '@/components/CookieBanner'

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <AboutUs />
      <Footer />
      <CookieBanner />
    </main>
  )
}

