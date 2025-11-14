'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const portfolioData: Record<string, {
  id: number
  title: string
  category: string
  description: string
  gradient: string
  pattern: string
  size: string
  fullDescription: string
  services: string[]
  results: string[]
  timeline: string
  location: string
}> = {
  '1': {
    id: 1,
    title: 'European Luxury Fashion Brand',
    category: 'Fashion Production',
    description: 'GCC market entry with culturally adapted PR and brand storytelling',
    gradient: 'from-luxury-royal-blue via-luxury-deep-blue to-luxury-navy-blue',
    pattern: 'radial',
    size: 'large',
    fullDescription: 'A prestigious European luxury fashion house sought to establish a commanding presence in the GCC market. Our comprehensive strategy combined culturally nuanced PR, strategic brand storytelling, and high-impact media relations to resonate authentically with GCC luxury consumers.',
    services: [
      'Market entry strategy development',
      'Culturally adapted PR campaigns',
      'Brand storytelling and narrative development',
      'Media relations and press releases',
      'Influencer and KOL partnerships',
      'Luxury event curation and execution',
      'VIP guestlist management',
      'GCC market positioning'
    ],
    results: [
      'Established brand presence across GCC media outlets',
      'Secured 50+ high-value media placements',
      'Developed network of 20+ GCC influencers and KOLs',
      'Executed 3 major brand activation events',
      'Achieved 85% positive brand sentiment in GCC markets',
      'Generated 200% increase in brand awareness'
    ],
    timeline: '6 Months',
    location: 'Dubai, Abu Dhabi, Riyadh, Doha'
  },
  '2': {
    id: 2,
    title: 'UAE Luxury Resort',
    category: 'Hospitality Enhancement',
    description: 'GCC traveler-focused experience design and PR campaign',
    gradient: 'from-luxury-deep-blue via-luxury-royal-blue to-luxury-light-blue',
    pattern: 'linear',
    size: 'medium',
    fullDescription: 'An exclusive UAE resort required repositioning to attract high-spending GCC travelers. We transformed the property\'s guest experience, refined its brand positioning, and executed a targeted PR campaign that highlighted the resort\'s cultural alignment with GCC luxury preferences.',
    services: [
      'Experience design and curation',
      'Guest journey mapping for GCC travelers',
      'Brand repositioning strategy',
      'Menu and wellness program refinement',
      'High-end photoshoot direction',
      'PR campaigns targeting GCC luxury travelers',
      'Staff training for UHNW service excellence',
      'Cultural alignment for hospitality teams'
    ],
    results: [
      '40% increase in GCC guest bookings',
      'Average stay duration increased by 2.5 days',
      '85% guest satisfaction score among GCC travelers',
      'Featured in 25+ luxury travel publications',
      'Partnership with 10+ GCC luxury travel agents',
      '50% increase in repeat bookings from GCC market'
    ],
    timeline: '9 Months',
    location: 'UAE'
  },
  '3': {
    id: 3,
    title: 'Swiss Watchmaker',
    category: 'GCC PR & Communication',
    description: 'Press releases and influencer partnerships for GCC expansion',
    gradient: 'from-luxury-navy-blue via-luxury-deep-blue to-luxury-royal-blue',
    pattern: 'diagonal',
    size: 'medium',
    fullDescription: 'A renowned Swiss watchmaker entered the GCC market with precision and sophistication. Our strategic PR approach combined traditional media excellence with modern influencer partnerships, creating a narrative of heritage, craftsmanship, and luxury that resonated deeply with GCC collectors.',
    services: [
      'Strategic PR and communication planning',
      'Press release development and distribution',
      'Influencer and KOL partnership strategy',
      'Product launch events',
      'Media relations across GCC markets',
      'Brand storytelling and heritage communication',
      'VIP collector engagement programs',
      'Partnership with luxury retailers'
    ],
    results: [
      '120+ media placements across GCC',
      'Partnerships with 15+ luxury influencers',
      '3 successful product launches in Dubai and Riyadh',
      '100% sell-out of limited edition pieces in GCC',
      'Featured in major GCC luxury publications',
      'Established presence in 8 luxury retail locations'
    ],
    timeline: '12 Months',
    location: 'Dubai, Riyadh, Kuwait, Doha'
  },
  '4': {
    id: 4,
    title: 'Italian Fashion House',
    category: 'Fashion Production',
    description: 'End-to-end production facilitation and GCC fashion PR',
    gradient: 'from-luxury-royal-blue via-luxury-light-blue to-luxury-deep-blue',
    pattern: 'radial',
    size: 'large',
    fullDescription: 'An esteemed Italian fashion house required comprehensive support for collection development and GCC market entry. We facilitated end-to-end production in Italy, managed supplier relationships, and executed a sophisticated fashion PR campaign that established the brand as a leader in GCC luxury fashion.',
    services: [
      'End-to-end production facilitation',
      'Italian supplier management',
      'High-end fabric sourcing',
      'Pattern development and sample production',
      'Collection production management',
      'Runway show production',
      'Fashion PR in GCC markets',
      'Photoshoot direction and production'
    ],
    results: [
      'Successfully produced 3 collections',
      'Managed 25+ Italian suppliers',
      'Executed 2 runway shows in Dubai',
      'Secured 80+ fashion media placements',
      'Established brand in 12 GCC luxury retail locations',
      'Achieved 150% revenue growth in GCC markets'
    ],
    timeline: '18 Months',
    location: 'Italy, Dubai, Riyadh, Abu Dhabi'
  },
  '5': {
    id: 5,
    title: 'GCC Destination Branding',
    category: 'Government Strategy',
    description: 'Luxury tourism blueprint and destination positioning',
    gradient: 'from-luxury-deep-blue via-luxury-navy-blue to-luxury-royal-blue',
    pattern: 'linear',
    size: 'tall',
    fullDescription: 'A GCC government entity sought to position their destination as a premier luxury tourism hub. We developed a comprehensive destination branding strategy, created ultra-luxury experience concepts, and executed high-level PR campaigns that positioned the destination as a must-visit for discerning travelers.',
    services: [
      'Destination concept curation',
      'Luxury tourism blueprint development',
      'Ultra-luxury experience design',
      'High-level PR and global messaging',
      'Cultural positioning for international travelers',
      'Partnerships with luxury operators',
      'High-spend segmentation strategy',
      'Staff training for UHNW tourist service excellence'
    ],
    results: [
      '30% increase in luxury tourism arrivals',
      '40% increase in average tourist spend',
      'Developed 8 ultra-luxury experience concepts',
      'Partnership with 15+ luxury operators',
      'Featured in 60+ international luxury publications',
      'Positioned as top 5 GCC luxury destination'
    ],
    timeline: '24 Months',
    location: 'GCC'
  },
  '6': {
    id: 6,
    title: 'Fine Dining Group',
    category: 'Hospitality Enhancement',
    description: 'Menu refinement and cultural alignment for GCC guests',
    gradient: 'from-luxury-light-blue via-luxury-royal-blue to-luxury-deep-blue',
    pattern: 'diagonal',
    size: 'medium',
    fullDescription: 'A fine dining restaurant group required enhancement to attract and retain GCC luxury diners. We refined menus to align with GCC culinary preferences, trained staff in cultural sensitivity, and developed PR campaigns that positioned the restaurants as must-visit destinations for GCC connoisseurs.',
    services: [
      'Menu refinement for GCC preferences',
      'Cultural alignment for dining experiences',
      'Staff training in cultural sensitivity',
      'PR campaigns targeting GCC luxury diners',
      'VIP reservation management systems',
      'Exclusive dining event curation',
      'Partnership with GCC culinary influencers',
      'Brand positioning for luxury dining market'
    ],
    results: [
      '50% increase in GCC diner reservations',
      '90% guest satisfaction among GCC diners',
      'Featured in 30+ food and lifestyle publications',
      'Partnership with 8 GCC food influencers',
      '40% increase in average table spend',
      'Launched exclusive GCC dining experiences'
    ],
    timeline: '6 Months',
    location: 'Dubai, Abu Dhabi'
  },
  '7': {
    id: 7,
    title: 'Luxury Brand Website Transformation',
    category: 'Digital Presence',
    description: 'Editorial-style website redesign with minimal, high-end aesthetics',
    gradient: 'from-luxury-navy-blue via-luxury-royal-blue to-luxury-light-blue',
    pattern: 'radial',
    size: 'wide',
    fullDescription: 'A luxury brand required a complete digital transformation to reflect their refined aesthetic. We created an editorial-style website with minimal, high-end design inspired by global luxury brands, ensuring culturally fluent content and an impeccable user experience for GCC luxury consumers.',
    services: [
      'Website design and creative direction',
      'Editorial-style layout development',
      'Minimalist luxury aesthetic implementation',
      'Content strategy for GCC audiences',
      'User experience optimization',
      'Brand storytelling through digital platforms',
      'Photoshoot direction for web assets',
      'Launch campaign strategy'
    ],
    results: [
      '300% increase in website engagement',
      '60% increase in time on site',
      '85% improvement in mobile user experience',
      '50% increase in online inquiries',
      'Featured in 10+ design and luxury publications',
      'Awarded Best Luxury Website Design'
    ],
    timeline: '4 Months',
    location: 'Remote, GCC'
  },
  '8': {
    id: 8,
    title: 'GCC Luxury Instagram Strategy',
    category: 'Digital Presence',
    description: 'Culturally fluent content in Vogue/Harper\'s Bazaar Arabia tone',
    gradient: 'from-luxury-royal-blue via-luxury-deep-blue to-luxury-navy-blue',
    pattern: 'linear',
    size: 'medium',
    fullDescription: 'A luxury brand sought to establish a commanding Instagram presence that resonated with GCC luxury consumers. We developed a culturally fluent content strategy in the editorial tone of Vogue and Harper\'s Bazaar Arabia, with high-end art direction and narrative-building that elevated brand desirability.',
    services: [
      'Instagram strategy development',
      'Content creation and curation',
      'Editorial-style posting strategy',
      'High-end art direction',
      'Culturally fluent content for GCC audiences',
      'Influencer collaboration campaigns',
      'Audience growth strategies',
      'Brand storytelling for social media'
    ],
    results: [
      '250% increase in Instagram followers',
      '180% increase in engagement rate',
      '80% GCC audience growth',
      'Featured in 15+ luxury publications',
      'Partnership with 20+ GCC luxury influencers',
      'Awarded Best Luxury Instagram Strategy'
    ],
    timeline: '6 Months',
    location: 'GCC'
  },
  '9': {
    id: 9,
    title: 'Luxury Brand Content Reels',
    category: 'Digital Presence',
    description: 'Editorial-style social media content production and digital storytelling',
    gradient: 'from-luxury-deep-blue via-luxury-light-blue to-luxury-royal-blue',
    pattern: 'diagonal',
    size: 'medium',
    fullDescription: 'A luxury brand required sophisticated video content that elevated their digital presence. We produced editorial-style reels and video content with cinematic quality, luxury aesthetics, and culturally fluent storytelling that captivated GCC luxury audiences and increased brand engagement.',
    services: [
      'Content reel production',
      'Editorial-style video direction',
      'Luxury aesthetic cinematography',
      'Digital storytelling through video',
      'Content strategy for video platforms',
      'Photoshoot and video production',
      'Brand narrative development',
      'Multi-platform content distribution'
    ],
    results: [
      '500% increase in video engagement',
      '2M+ views across platforms',
      '150% increase in profile visits',
      'Featured in luxury video campaigns',
      'Partnership with 10+ GCC content creators',
      'Awarded Best Luxury Video Content'
    ],
    timeline: '8 Months',
    location: 'GCC, Europe'
  },
}

export default function PortfolioDetail() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [portfolio, setPortfolio] = useState(portfolioData[id] || null)

  useEffect(() => {
    if (!portfolio && id) {
      router.push('/#portfolio')
    }
  }, [id, portfolio, router])

  if (!portfolio) {
    return null
  }

  const { gradient, pattern } = portfolio

  return (
    <main className="min-h-screen bg-luxury-white relative overflow-hidden">
      <Navigation />
      {/* Background with same gradient as portfolio item */}
      <div className={`fixed inset-0 bg-gradient-to-br ${gradient} opacity-5 pointer-events-none`} />
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-24 md:py-32">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/#portfolio"
            className="inline-flex items-center space-x-3 text-luxury-royal-blue hover:text-luxury-deep-blue transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="museum-label text-luxury-royal-blue group-hover:text-luxury-deep-blue">Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="museum-label mb-6 text-luxury-royal-blue/60">{portfolio.category}</p>
          <h1 className="museum-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-luxury-dark-gray mb-8 leading-[1.05] tracking-tight">
            {portfolio.title}
          </h1>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-8" />
        </motion.div>

        {/* Gradient Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative overflow-hidden rounded-sm mb-16 bg-gradient-to-br ${gradient} opacity-95`}
        >
          {/* Pattern Overlay */}
          {pattern === 'radial' && (
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/50 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          )}
          {pattern === 'linear' && (
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20" />
            </div>
          )}
          {pattern === 'diagonal' && (
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
            </div>
          )}

          <div className="relative z-10 p-12 md:p-16 lg:p-20">
            <p className="museum-body text-white/95 text-xl md:text-2xl leading-relaxed max-w-4xl">
              {portfolio.fullDescription}
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
            <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-8">Services Delivered</h2>
            <ul className="space-y-4">
              {portfolio.services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-luxury-royal-blue mt-2">•</span>
                  <span className="museum-body text-luxury-medium-gray text-lg leading-relaxed">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-8">Results Achieved</h2>
            <ul className="space-y-4">
              {portfolio.results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-luxury-royal-blue mt-2">•</span>
                  <span className="museum-body text-luxury-medium-gray text-lg leading-relaxed">{result}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-effect luxury-shadow p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-8"
        >
          <div>
            <p className="museum-label mb-4 text-luxury-royal-blue/60">Timeline</p>
            <p className="museum-body text-2xl text-luxury-dark-gray">{portfolio.timeline}</p>
          </div>
          <div>
            <p className="museum-label mb-4 text-luxury-royal-blue/60">Location</p>
            <p className="museum-body text-2xl text-luxury-dark-gray">{portfolio.location}</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-luxury-royal-blue text-white font-semibold uppercase tracking-wider rounded-sm luxury-glow hover:bg-luxury-deep-blue hover:shadow-2xl transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      <Footer />
      <CookieBanner />
    </main>
  )
}

