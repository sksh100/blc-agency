'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionParticles from './SectionParticles'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutUs() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="section-padding relative bg-luxury-off-white overflow-hidden">
      <SectionParticles count={25} intensity={0.15} />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-royal-blue to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-royal-blue to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div ref={ref}>
        {/* Museum-style Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-32"
        >
          <p className="museum-label mb-4 sm:mb-6">{t('about.label')}</p>
          <h2 className="museum-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-luxury-dark-gray mb-4 sm:mb-6 leading-[1.05] tracking-tight">
            <span className="text-luxury-dark-gray">{t('about.title').split(' ')[0]}</span>{' '}
            <span className="text-gradient">{t('about.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-8" />
        </motion.div>

        {/* Museum-style Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 sm:space-y-8 md:pr-8"
          >
            <p className="museum-body text-sm sm:text-base md:text-lg lg:text-xl text-luxury-medium-gray leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="museum-body text-sm sm:text-base md:text-lg lg:text-xl text-luxury-medium-gray leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <p className="museum-body text-sm sm:text-base md:text-lg lg:text-xl text-luxury-medium-gray leading-relaxed">
              {t('about.paragraph3')}
            </p>
            <p className="museum-body text-sm sm:text-base md:text-lg lg:text-xl text-luxury-medium-gray leading-relaxed">
              {t('about.paragraph4')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <Image
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
                alt="Luxury consulting"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="glass-effect luxury-shadow p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-sm relative z-10">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border border-luxury-royal-blue flex items-center justify-center flex-shrink-0">
                        <span className="text-luxury-royal-blue font-bold text-base sm:text-xl">01</span>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-luxury-dark-gray mb-1">{t('about.keyPoint1Title')}</h3>
                        <p className="text-luxury-medium-gray text-xs sm:text-sm font-light">{t('about.keyPoint1Desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border border-luxury-royal-blue flex items-center justify-center flex-shrink-0">
                        <span className="text-luxury-royal-blue font-bold text-base sm:text-xl">02</span>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-luxury-dark-gray mb-1">{t('about.keyPoint2Title')}</h3>
                        <p className="text-luxury-medium-gray text-xs sm:text-sm font-light">{t('about.keyPoint2Desc')}</p>
                      </div>
                    </div>
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border border-luxury-royal-blue flex items-center justify-center flex-shrink-0">
                        <span className="text-luxury-royal-blue font-bold text-base sm:text-xl">03</span>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-serif font-semibold text-luxury-dark-gray mb-1">{t('about.keyPoint3Title')}</h3>
                        <p className="text-luxury-medium-gray text-xs sm:text-sm font-light">{t('about.keyPoint3Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}

