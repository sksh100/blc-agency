'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import ParticleBackground from '@/components/ParticleBackground'
import CookieBanner from '@/components/CookieBanner'

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  )
}

