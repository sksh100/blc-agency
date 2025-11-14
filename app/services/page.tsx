'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import ParticleBackground from '@/components/ParticleBackground'
import CookieBanner from '@/components/CookieBanner'

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <Services />
      <Footer />
      <CookieBanner />
    </main>
  )
}

