'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { Globe, Hotel, Building2, Shirt, Key, Monitor, Shield } from 'lucide-react'
import SectionParticles from '@/components/SectionParticles'

const serviceData: Record<string, {
  icon: any
  title: string
  shortDesc: string
  description: string
  services: string[]
  industries?: string[]
  outcome: string
  gradient: string
}> = {
  'gcc-luxury-market-pr': {
    icon: Globe,
    title: 'GCC Luxury Market PR & Communication',
    shortDesc: 'For global luxury brands entering or expanding in the GCC',
    description: 'Cultural fluency meets strategic communication. We craft press releases, PR strategies, and brand narratives specifically adapted for GCC media, influencers, and high-net-worth consumers. Our deep understanding of GCC culture, preferences, and communication nuances enables us to create campaigns that resonate authentically with the region\'s most discerning audiences.',
    services: [
      'Press releases crafted in culturally fluent tone',
      'PR strategies for GCC media & influencers',
      'Brand storytelling adapted for the region',
      'Product launches & brand activations',
      'Event curation with hand-selected GCC suppliers',
      'VIP & media guestlist management',
      'Local market adaptation for marketing campaigns',
      'Celebrity, influencer, and KOL partnerships',
    ],
    industries: [
      'Real estate',
      'Hotels & resorts',
      'Wellness & spa',
      'Jewellery & watches',
      'Fashion & haute couture',
      'Luxury automotive',
    ],
    outcome: 'Deliver culturally fluent and impactful PR and communication strategies for the GCC luxury market.',
    gradient: 'from-luxury-royal-blue via-luxury-deep-blue to-luxury-navy-blue',
  },
  'luxury-hospitality-enhancement': {
    icon: Hotel,
    title: 'Luxury Hospitality Enhancement',
    shortDesc: 'Helping hotels, resorts, fine-dining restaurants, and spas attract GCC travelers',
    description: 'Make your properties irresistible to high-spending Gulf visitors. We enhance concepts, design experiences, and refine every touchpoint to align with GCC luxury preferences. From menu refinement to staff training, we transform properties into destinations that speak directly to GCC luxury travelers.',
    services: [
      'Concept curation & enhancement',
      'Experience design tailored to GCC preferences',
      'Luxury guest journey mapping',
      'Menu / wellness program refinement',
      'High-end photoshoot direction',
      'Sales & marketing repositioning',
      'Cultural alignment for staff communication',
      'PR campaigns targeting GCC luxury travelers',
      'Staff training for ultra-high-net-worth customer service excellence',
      'Luxury protocol and discretion training for hospitality teams',
    ],
    outcome: 'Make properties irresistible to high-spending Gulf visitors',
    gradient: 'from-luxury-deep-blue via-luxury-royal-blue to-luxury-light-blue',
  },
  'government-destination-strategy': {
    icon: Building2,
    title: 'Government & Destination Strategy',
    shortDesc: 'Helping governments attract luxury tourism',
    description: 'Working at policy and strategic tourism level. We develop destination concepts, luxury tourism blueprints, and ultra-luxury experiences that position destinations as premier GCC travel hubs. Our strategic approach combines policy-level insights with luxury experience design to create destinations that attract high-spending international travelers.',
    services: [
      'Destination concept curation',
      'Luxury tourism blueprint development',
      'Ultra-luxury experience design',
      'High-level PR & global messaging',
      'Cultural positioning for GCC travelers',
      'Partnerships with luxury operators',
      'High-spend segmentation strategy',
      'Staff training programs for ultra-high-net-worth tourist service excellence',
      'Luxury protocol and cultural sensitivity training for tourism teams',
    ],
    outcome: 'Position destinations at policy and strategic tourism level',
    gradient: 'from-luxury-navy-blue via-luxury-deep-blue to-luxury-royal-blue',
  },
  'fashion-industry-consulting': {
    icon: Shirt,
    title: 'Fashion Industry Consulting & Production Facilitation',
    shortDesc: 'End-to-end fashion brand consulting',
    description: 'Transform creative visions into profitable luxury brands. From brand DNA creation to runway production, we facilitate every step of high-end fashion development with European craftsmanship. Our network spans Italy, France, and across Europe, connecting designers with the finest suppliers, artisans, and production facilities.',
    services: [
      'Brand DNA creation',
      'Identity & storytelling development',
      'Production sourcing (Italy, France, Europe)',
      'High-end fabric sourcing',
      'Pattern development',
      'Sample & collection production',
      'Supplier management',
      'Runway show production',
      'Fashion PR in GCC',
      'Photoshoot production',
      'Fashion Economics training',
    ],
    outcome: 'Transform creative visions into profitable luxury brands',
    gradient: 'from-luxury-royal-blue via-luxury-light-blue to-luxury-deep-blue',
  },
  'luxury-concierge-services': {
    icon: Key,
    title: 'Luxury Concierge Services',
    shortDesc: 'Discreet, premium service for high-net-worth individuals and executives',
    description: 'Exclusive, high-touch, and private. We provide discreet luxury concierge services for discerning clients who demand the finest in travel, experiences, and lifestyle management. Every request is handled with absolute discretion and precision, ensuring that our clients\' expectations are not just met, but exceeded.',
    services: [
      'Luxury travel planning',
      'VIP bookings',
      'Curated experiences',
      'High-level coordination',
      'Lifestyle management',
    ],
    outcome: 'Exclusive, high-touch, and private service',
    gradient: 'from-luxury-light-blue via-luxury-royal-blue to-luxury-deep-blue',
  },
  'digital-presence-brand-experience': {
    icon: Monitor,
    title: 'Luxury Digital Presence & Brand Experience',
    shortDesc: 'We design and manage digital ecosystems that speak directly to the luxury consumer',
    description: 'We transform digital platforms into luxury experiences—not just marketing channels. Crafted by specialists who understand luxury aesthetics, consumer psychology, and GCC cultural preferences. Your brand becomes desirable, culturally resonant, and aligned with the expectations of the GCC luxury audience. Every pixel, every word, every interaction is designed to elevate your brand.',
    services: [
      'Website creation & creative direction',
      'Luxury social media channel creation & management',
      'Culturally fluent content tailored to GCC audiences',
      'Editorial-style posting (Vogue, Harper\'s Bazaar Arabia tone)',
      'High-end art direction for visuals',
      'Narrative-building for brand desirability',
      'Audience growth strategies for affluent segments',
      'Luxury consumer communication strategy',
      'Brand storytelling for digital platforms',
      'Photoshoot direction & content production',
      'Digital launch campaigns',
    ],
    outcome: 'Transform digital platforms into luxury experiences—not just marketing channels',
    gradient: 'from-luxury-navy-blue via-luxury-royal-blue to-luxury-light-blue',
  },
  'family-offices-staff-excellence': {
    icon: Shield,
    title: 'Private Family Offices & Household Staff Excellence',
    shortDesc: 'Training staff to deliver exceptional service to ultra-high-net-worth principals',
    description: 'Enabling private family offices and household staff to understand luxury protocols, work with absolute discretion, and deliver the highest levels of respect and service excellence to their principals. We train management executives and household teams to embody the refinement and precision that ultra-high-net-worth families expect. Every interaction, every detail, every moment is curated to reflect the highest standards of service.',
    services: [
      'Luxury protocol training for household staff',
      'Discretion and confidentiality training',
      'Service excellence programs for family offices',
      'Cultural sensitivity and respect training',
      'Management executive training for ultra-high-net-worth service delivery',
      'Household operations refinement',
      'Private event coordination training',
      'Wealth management communication protocols',
    ],
    outcome: 'Enable staff to deliver exceptional, discreet, and respectful service to ultra-high-net-worth principals',
    gradient: 'from-luxury-deep-blue via-luxury-light-blue to-luxury-royal-blue',
  },
}

export default function ServiceDetail() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const [service, setService] = useState(serviceData[slug] || null)

  useEffect(() => {
    if (!service && slug) {
      router.push('/services')
    }
  }, [slug, service, router])

  if (!service) {
    return null
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-luxury-white relative overflow-hidden">
      <SectionParticles count={30} intensity={0.2} />
      <Navigation />
      
      {/* Background with same gradient as service */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 pointer-events-none`} />
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-24 md:py-32">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center space-x-3 text-luxury-royal-blue hover:text-luxury-deep-blue transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="museum-label text-luxury-royal-blue group-hover:text-luxury-deep-blue">Back to Services</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 border border-luxury-royal-blue/30 flex items-center justify-center">
              <Icon className="w-8 h-8 text-luxury-royal-blue/80" />
            </div>
          </div>
          <p className="museum-label mb-6 text-luxury-royal-blue/60">Service</p>
          <h1 className="museum-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-luxury-dark-gray mb-6 leading-[1.05] tracking-tight">
            {service.title}
          </h1>
          <p className="museum-body text-xl md:text-2xl text-luxury-medium-gray max-w-3xl leading-relaxed mb-8 italic">
            {service.shortDesc}
          </p>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-8" />
        </motion.div>

        {/* Gradient Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative overflow-hidden rounded-sm mb-16 bg-gradient-to-br ${service.gradient} opacity-95`}
        >
          <div className="relative z-10 p-12 md:p-16 lg:p-20">
            <p className="museum-body text-white/95 text-xl md:text-2xl leading-relaxed max-w-4xl">
              {service.description}
            </p>
          </div>
        </motion.div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-8">Services Include</h2>
            <ul className="space-y-4">
              {service.services.map((serviceItem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-luxury-royal-blue mt-2">•</span>
                  <span className="museum-body text-luxury-medium-gray text-lg leading-relaxed">{serviceItem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Industries or Outcome */}
          {service.industries ? (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-8">Industries Served</h2>
              <ul className="space-y-4">
                {service.industries.map((industry, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    className="flex items-start space-x-4"
                  >
                    <span className="text-luxury-royal-blue mt-2">•</span>
                    <span className="museum-body text-luxury-medium-gray text-lg leading-relaxed">{industry}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-luxury-royal-blue/20">
                <h3 className="museum-heading text-xl md:text-2xl text-luxury-dark-gray mb-4">Desired Outcome</h3>
                <p className="museum-body text-luxury-medium-gray text-lg leading-relaxed italic">
                  {service.outcome}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-8">Desired Outcome</h2>
              <p className="museum-body text-luxury-medium-gray text-xl md:text-2xl leading-relaxed italic">
                {service.outcome}
              </p>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-luxury-royal-blue text-white font-semibold uppercase tracking-wider rounded-sm luxury-glow hover:bg-luxury-deep-blue hover:shadow-2xl transition-all duration-300"
          >
            <span>Book a Consultation</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      <Footer />
      <CookieBanner />
    </main>
  )
}

