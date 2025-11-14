'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Testimonials() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote: t('testimonials.items.1.quote'),
      author: t('testimonials.items.1.author'),
      role: t('testimonials.items.1.role'),
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    },
    {
      quote: t('testimonials.items.2.quote'),
      author: t('testimonials.items.2.author'),
      role: t('testimonials.items.2.role'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    },
    {
      quote: t('testimonials.items.3.quote'),
      author: t('testimonials.items.3.author'),
      role: t('testimonials.items.3.role'),
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
    },
  ]

  return (
    <section className="section-padding relative bg-luxury-cream">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-royal-blue to-transparent" />
      </div>

      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-32"
        >
          <p className="museum-label mb-4 sm:mb-6">{t('testimonials.label')}</p>
          <h2 className="museum-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-luxury-dark-gray mb-6 sm:mb-8 leading-[1.05] tracking-tight">
            <span className="text-luxury-dark-gray">{t('testimonials.title').split(' ')[0]}</span>{' '}
            <span className="text-gradient">{t('testimonials.title').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="museum-body text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-medium-gray max-w-2xl leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-12" />
        </motion.div>

            <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect luxury-shadow p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-5">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-luxury-royal-blue/30 mb-4" />
                <p className="text-luxury-medium-gray text-lg font-light leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-luxury-royal-blue/20 flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-luxury-dark-gray font-semibold mb-1">{testimonial.author}</p>
                    <p className="text-luxury-medium-gray text-sm font-light">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

