'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'
import ParticleBackground from '@/components/ParticleBackground'
import CookieBanner from '@/components/CookieBanner'

export default function PortfolioPage() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <div className="pt-20">
        <Portfolio />
      </div>
      <Footer />
      <CookieBanner />
    </main>
  )
}

