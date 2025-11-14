'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Portfolio() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const portfolioItemsData = [
    { id: 1, key: '1' },
    { id: 2, key: '2' },
    { id: 3, key: '3' },
    { id: 4, key: '4' },
    { id: 5, key: '5' },
    { id: 6, key: '6' },
    { id: 7, key: '7' },
    { id: 8, key: '8' },
    { id: 9, key: '9' },
  ]

  const portfolioItems = portfolioItemsData.map((item) => {
    const itemData = t(`portfolio.items.${item.key}`) as any
    return {
      id: item.id,
      title: itemData?.title || '',
      category: itemData?.category || '',
      description: itemData?.description || '',
      gradient: [
        'from-luxury-royal-blue via-luxury-deep-blue to-luxury-navy-blue',
        'from-luxury-deep-blue via-luxury-royal-blue to-luxury-light-blue',
        'from-luxury-navy-blue via-luxury-deep-blue to-luxury-royal-blue',
        'from-luxury-royal-blue via-luxury-light-blue to-luxury-deep-blue',
        'from-luxury-deep-blue via-luxury-navy-blue to-luxury-royal-blue',
        'from-luxury-light-blue via-luxury-royal-blue to-luxury-deep-blue',
        'from-luxury-navy-blue via-luxury-royal-blue to-luxury-light-blue',
        'from-luxury-royal-blue via-luxury-deep-blue to-luxury-navy-blue',
        'from-luxury-deep-blue via-luxury-light-blue to-luxury-royal-blue',
      ][item.id - 1],
      pattern: ['radial', 'linear', 'diagonal', 'radial', 'linear', 'diagonal', 'radial', 'linear', 'diagonal'][item.id - 1] as 'radial' | 'linear' | 'diagonal',
      size: ['large', 'medium', 'medium', 'large', 'tall', 'medium', 'wide', 'medium', 'medium'][item.id - 1] as string,
    }
  }).filter(item => item.title)

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
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-32"
        >
          <p className="museum-label mb-4 sm:mb-6">{t('portfolio.label')}</p>
          <h2 className="museum-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-luxury-dark-gray mb-6 sm:mb-8 leading-[1.05] tracking-tight">
            <span className="text-luxury-dark-gray">{t('portfolio.title').split(' ')[0]}</span>{' '}
            <span className="text-gradient">{t('portfolio.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="museum-body text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-medium-gray max-w-2xl leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-12" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[280px] gap-3 sm:gap-4 md:gap-6">
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
              <div className="relative z-10 h-full flex flex-col justify-between p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 pointer-events-none">
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
                      className="museum-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-2 sm:mb-3 leading-tight group-hover:text-white transition-colors duration-300"
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
                    <p className="museum-body text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-md line-clamp-2">
                      {item.description}
                    </p>

                        {/* CTA Arrow */}
                        <div className="flex items-center space-x-2 text-white/70 group-hover:text-white transition-colors duration-300 mt-2 pointer-events-auto">
                          <span className="text-xs md:text-sm uppercase tracking-wider font-light">{t('portfolio.explore')}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                  </motion.div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-t border-r border-white/20 group-hover:border-white/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-b border-l border-white/20 group-hover:border-white/40 transition-colors duration-300" />

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
