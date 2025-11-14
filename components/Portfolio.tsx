'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const portfolioItems = [
  {
    id: 1,
    title: 'European Luxury Fashion Brand',
    category: 'Fashion Production',
    description: 'GCC market entry with culturally adapted PR and brand storytelling',
    gradient: 'from-luxury-royal-blue via-luxury-deep-blue to-luxury-navy-blue',
    pattern: 'radial',
    size: 'large',
  },
  {
    id: 2,
    title: 'UAE Luxury Resort',
    category: 'Hospitality Enhancement',
    description: 'GCC traveler-focused experience design and PR campaign',
    gradient: 'from-luxury-deep-blue via-luxury-royal-blue to-luxury-light-blue',
    pattern: 'linear',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Swiss Watchmaker',
    category: 'GCC PR & Communication',
    description: 'Press releases and influencer partnerships for GCC expansion',
    gradient: 'from-luxury-navy-blue via-luxury-deep-blue to-luxury-royal-blue',
    pattern: 'diagonal',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Italian Fashion House',
    category: 'Fashion Production',
    description: 'End-to-end production facilitation and GCC fashion PR',
    gradient: 'from-luxury-royal-blue via-luxury-light-blue to-luxury-deep-blue',
    pattern: 'radial',
    size: 'large',
  },
  {
    id: 5,
    title: 'GCC Destination Branding',
    category: 'Government Strategy',
    description: 'Luxury tourism blueprint and destination positioning',
    gradient: 'from-luxury-deep-blue via-luxury-navy-blue to-luxury-royal-blue',
    pattern: 'linear',
    size: 'tall',
  },
  {
    id: 6,
    title: 'Fine Dining Group',
    category: 'Hospitality Enhancement',
    description: 'Menu refinement and cultural alignment for GCC guests',
    gradient: 'from-luxury-light-blue via-luxury-royal-blue to-luxury-deep-blue',
    pattern: 'diagonal',
    size: 'medium',
  },
  {
    id: 7,
    title: 'Luxury Brand Website Transformation',
    category: 'Digital Presence',
    description: 'Editorial-style website redesign with minimal, high-end aesthetics',
    gradient: 'from-luxury-navy-blue via-luxury-royal-blue to-luxury-light-blue',
    pattern: 'radial',
    size: 'wide',
  },
  {
    id: 8,
    title: 'GCC Luxury Instagram Strategy',
    category: 'Digital Presence',
    description: 'Culturally fluent content in Vogue/Harper\'s Bazaar Arabia tone',
    gradient: 'from-luxury-royal-blue via-luxury-deep-blue to-luxury-navy-blue',
    pattern: 'linear',
    size: 'medium',
  },
  {
    id: 9,
    title: 'Luxury Brand Content Reels',
    category: 'Digital Presence',
    description: 'Editorial-style social media content production and digital storytelling',
    gradient: 'from-luxury-deep-blue via-luxury-light-blue to-luxury-royal-blue',
    pattern: 'diagonal',
    size: 'medium',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'wide':
        return 'md:col-span-2'
      case 'tall':
        return 'md:row-span-2'
      default:
        return ''
    }
  }

  return (
    <section id="portfolio" className="section-padding relative bg-luxury-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 md:mb-32"
        >
          <p className="museum-label mb-6">Works</p>
          <h2 className="museum-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-luxury-dark-gray mb-8 leading-[1.05] tracking-tight">
            <span className="text-luxury-dark-gray">Our</span>{' '}
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="museum-body text-xl md:text-2xl text-luxury-medium-gray max-w-2xl leading-relaxed">
            Excellence delivered across GCC and Europe—events produced, brands elevated, destinations redefined
          </p>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-12" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4 lg:gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-sm ${getGridClasses(item.size)} cursor-pointer`}
            >
              <Link href={`/portfolio/${item.id}`} className="absolute inset-0 z-20" />
              {/* Dynamic Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-700`}>
                {/* Animated Pattern Overlay */}
                {item.pattern === 'radial' && (
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/50 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
                  </div>
                )}
                {item.pattern === 'linear' && (
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20" />
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                  </div>
                )}
                {item.pattern === 'diagonal' && (
                  <div className="absolute inset-0 opacity-15">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
                  </div>
                )}

                {/* Animated Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 border border-white/20" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }} />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 lg:p-10 pointer-events-none">
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.08 + 0.2 }}
                      className="inline-block text-xs text-white/80 uppercase tracking-[0.2em] font-light mb-4 border-b border-white/20 pb-2"
                    >
                      {item.category}
                    </motion.span>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.08 + 0.3 }}
                      className="museum-heading text-xl md:text-2xl lg:text-3xl text-white mb-3 leading-tight group-hover:text-white transition-colors duration-300"
                    >
                      {item.title}
                    </motion.h3>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 + 0.4 }}
                    className="space-y-4"
                  >
                    <p className="museum-body text-white/90 text-sm md:text-base leading-relaxed max-w-md line-clamp-2">
                      {item.description}
                    </p>

                    {/* CTA Arrow */}
                    <div className="flex items-center space-x-2 text-white/70 group-hover:text-white transition-colors duration-300 mt-2 pointer-events-auto">
                      <span className="text-xs md:text-sm uppercase tracking-wider font-light">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/20 group-hover:border-white/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-white/20 group-hover:border-white/40 transition-colors duration-300" />

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 luxury-glow" style={{
                  boxShadow: 'inset 0 0 100px rgba(255, 255, 255, 0.1), 0 0 60px rgba(30, 58, 95, 0.4)',
                }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
