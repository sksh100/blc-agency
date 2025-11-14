'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionParticles from './SectionParticles'
import Image from 'next/image'

export default function AboutUs() {
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
          className="mb-24 md:mb-32"
        >
          <p className="museum-label mb-6">Heritage</p>
          <h2 className="museum-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-luxury-dark-gray mb-6 leading-[1.05] tracking-tight">
            <span className="text-luxury-dark-gray">About</span>{' '}
            <span className="text-gradient">Us</span>
          </h2>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-8" />
        </motion.div>

        {/* Museum-style Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 md:pr-8"
          >
            <p className="museum-body text-lg md:text-xl text-luxury-medium-gray leading-relaxed">
              Based in Abu Dhabi, BLC Agency represents the pinnacle of luxury brand consulting and 
              strategic communication in the GCC. With years of dedicated experience serving ultra-high-net-worth 
              individuals and discerning luxury enterprises, we have cultivated an unparalleled understanding 
              of GCC culture, preferences, and the sophisticated nuances that define excellence in this region.
            </p>
            <p className="museum-body text-lg md:text-xl text-luxury-medium-gray leading-relaxed">
              Our expertise is rooted in a profound network of relationships across the Gulf—from elite 
              circles to influential business leaders, media personalities, and cultural tastemakers. 
              This extensive network, combined with our deep cultural intelligence, enables us to deliver 
              results that transcend conventional marketing and public relations.
            </p>
            <p className="museum-body text-lg md:text-xl text-luxury-medium-gray leading-relaxed">
              We collaborate exclusively with luxury branding experts from ESSEC Business School in France, 
              one of the world's most prestigious institutions for luxury brand management. This strategic 
              partnership brings together the refined sophistication of European luxury heritage with our 
              intimate knowledge of GCC markets—creating an unmatched synergy that delivers exceptional 
              outcomes for our ultra-high-net-worth clientele.
            </p>
            <p className="museum-body text-lg md:text-xl text-luxury-medium-gray leading-relaxed">
              Every engagement is executed with the precision and discretion that ultra-luxury demands. 
              We are true experts who know not only what needs to be done, but precisely how to deliver 
              excellence that exceeds the most exacting standards. Our work is not merely service—it is 
              the curation of legacies for those who accept nothing less than perfection.
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
            
            <div className="glass-effect luxury-shadow p-8 rounded-sm relative z-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 border border-luxury-royal-blue flex items-center justify-center">
                        <span className="text-luxury-royal-blue font-bold text-xl">01</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-luxury-dark-gray mb-1">GCC Cultural Mastery</h3>
                        <p className="text-luxury-medium-gray text-sm font-light">Years of experience serving ultra-high-net-worth clients across the Gulf</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 border border-luxury-royal-blue flex items-center justify-center">
                        <span className="text-luxury-royal-blue font-bold text-xl">02</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-luxury-dark-gray mb-1">ESSEC Excellence</h3>
                        <p className="text-luxury-medium-gray text-sm font-light">Strategic partnership with luxury branding experts from France</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 border border-luxury-royal-blue flex items-center justify-center">
                        <span className="text-luxury-royal-blue font-bold text-xl">03</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-luxury-dark-gray mb-1">Elite Network</h3>
                        <p className="text-luxury-medium-gray text-sm font-light">Extensive relationships across elite, business, and cultural circles</p>
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

