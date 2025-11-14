'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Monitor, ArrowRight } from 'lucide-react'
import SectionParticles from './SectionParticles'
import { useLanguage } from '@/contexts/LanguageContext'

export default function DigitalPresencePreview() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section-padding relative bg-luxury-white overflow-hidden">
      <SectionParticles count={20} intensity={0.15} />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-royal-blue to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-royal-blue to-transparent" />
      </div>

      <div ref={ref} className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
        >
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="w-16 h-16 border border-luxury-royal-blue flex items-center justify-center mb-4">
              <Monitor className="w-8 h-8 text-luxury-royal-blue" />
            </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-luxury-dark-gray">{t('digitalPresence.title1')}</span>{' '}
              <span className="text-gradient">{t('digitalPresence.title2')}</span>
            </h2>
                <p className="text-base sm:text-lg md:text-xl text-luxury-medium-gray leading-relaxed font-light">
              {t('digitalPresence.description1')}
            </p>
                <p className="text-base sm:text-lg md:text-xl text-luxury-medium-gray leading-relaxed font-light">
              {t('digitalPresence.description2')}
            </p>
            <motion.a
              href="#services"
              className="inline-flex items-center space-x-2 text-luxury-royal-blue hover:text-luxury-deep-blue transition-colors font-light tracking-wider uppercase text-sm group"
              whileHover={{ x: 5 }}
            >
              <span>{t('digitalPresence.cta')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right Column - Preview Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-effect luxury-shadow p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-lg sm:text-xl font-serif font-semibold text-luxury-dark-gray mb-6">
                {t('digitalPresence.whatWeCreate')}
              </h3>
              <ul className="space-y-4">
                {(() => {
                  const items = t('digitalPresence.items') as unknown as string[]
                  return Array.isArray(items) ? items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-luxury-royal-blue mt-1">•</span>
                      <span className="text-luxury-medium-gray font-light text-sm sm:text-base">{item}</span>
                    </li>
                  )) : null
                })()}
              </ul>
              <div className="mt-8 pt-6 border-t border-luxury-royal-blue/20">
                <p className="text-luxury-medium-gray text-xs sm:text-sm font-light italic">
                  "{t('digitalPresence.quote')}"
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

