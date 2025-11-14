'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Hotel, Building2, Shirt, Key, Monitor, Shield } from 'lucide-react'
import SectionParticles from './SectionParticles'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const serviceCategories = [
    {
      icon: Globe,
      key: 'gccPR',
    },
    {
      icon: Hotel,
      key: 'hospitality',
    },
    {
      icon: Building2,
      key: 'government',
    },
    {
      icon: Shirt,
      key: 'fashion',
    },
    {
      icon: Key,
      key: 'concierge',
    },
    {
      icon: Monitor,
      key: 'digital',
    },
    {
      icon: Shield,
      key: 'familyOffices',
    },
  ]

  return (
    <section id="services" className="section-padding relative bg-luxury-white overflow-hidden" ref={ref}>
      <SectionParticles count={30} intensity={0.2} />
      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-32"
        >
          <p className="museum-label mb-4 sm:mb-6">{t('services.label')}</p>
          <h2 className="museum-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-luxury-dark-gray mb-6 sm:mb-8 leading-[1.05] tracking-tight">
            <span className="text-luxury-dark-gray">{t('services.title').split(' ')[0]}</span>{' '}
            <span className="text-gradient">{t('services.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="museum-body text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-medium-gray max-w-3xl leading-relaxed">
            {t('services.subtitle')}
          </p>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-12" />
        </motion.div>

        <div className="space-y-16 sm:space-y-24 md:space-y-32 lg:space-y-40">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon
            const categoryData = t(`services.categories.${category.key}`) as any
            if (!categoryData || !categoryData.title) return null
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group"
              >
                    <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-start">
                      {/* Left Column - Icon & Title */}
                      <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-32">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 border border-luxury-royal-blue/30 flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-luxury-royal-blue/5 transition-all duration-500">
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-luxury-royal-blue/80" />
                          </div>
                          <p className="museum-label mb-3 sm:mb-4">{String(index + 1).padStart(2, '0')}</p>
                          <h3 className="museum-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-luxury-dark-gray mb-4 sm:mb-6 leading-[1.1] group-hover:text-luxury-royal-blue/90 transition-colors duration-300">
                            {categoryData.title}
                          </h3>
                          <p className="museum-body text-luxury-medium-gray text-xs sm:text-sm md:text-base leading-relaxed italic">
                            {categoryData.shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Right Column - Content */}
                      <div className="lg:col-span-2">
                        <div className="glass-effect luxury-shadow p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                          <p className="museum-body text-luxury-medium-gray text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 md:mb-12">
                            {categoryData.description}
                          </p>

                      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                            <div>
                              <h4 className="text-luxury-dark-gray font-semibold mb-4 uppercase tracking-wider text-xs sm:text-sm border-b border-luxury-royal-blue/30 pb-2">
                                {t('services.servicesInclude')}
                              </h4>
                              <ul className="space-y-3">
                                {(categoryData.services && Array.isArray(categoryData.services) ? categoryData.services : []).map((service: string, idx: number) => (
                                  <li key={idx} className="flex items-start space-x-3">
                                    <span className="text-luxury-royal-blue mt-1">•</span>
                                    <span className="text-luxury-medium-gray text-xs sm:text-sm font-light">{service}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {categoryData.industries && (
                              <div>
                                <h4 className="text-luxury-dark-gray font-semibold mb-4 uppercase tracking-wider text-xs sm:text-sm border-b border-luxury-royal-blue/30 pb-2">
                                  {t('services.industriesServed')}
                                </h4>
                                <ul className="space-y-3">
                                  {(categoryData.industries && Array.isArray(categoryData.industries) ? categoryData.industries : []).map((industry: string, idx: number) => (
                                    <li key={idx} className="flex items-start space-x-3">
                                      <span className="text-luxury-royal-blue mt-1">•</span>
                                      <span className="text-luxury-medium-gray text-xs sm:text-sm font-light">{industry}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {categoryData.outcome && !categoryData.industries && (
                              <div>
                                <h4 className="text-luxury-dark-gray font-semibold mb-4 uppercase tracking-wider text-xs sm:text-sm border-b border-luxury-royal-blue/30 pb-2">
                                  {t('services.desiredOutcome')}
                                </h4>
                                <p className="text-luxury-medium-gray text-xs sm:text-sm font-light leading-relaxed italic">
                                  {categoryData.outcome}
                                </p>
                              </div>
                            )}
                          </div>

                          {categoryData.outcome && categoryData.industries && (
                            <div className="mt-8 pt-8 border-t border-luxury-royal-blue/20">
                              <p className="text-luxury-medium-gray text-xs sm:text-sm font-light leading-relaxed italic">
                                <span className="text-luxury-royal-blue font-semibold">{t('services.desiredOutcome')}: </span>
                                {categoryData.outcome}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
      </div>
    </section>
  )
}
