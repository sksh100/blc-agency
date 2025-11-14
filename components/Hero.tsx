'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-off-white via-luxury-white to-luxury-cream" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-royal-blue/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-deep-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Content - Museum Style Layout */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl pt-32 pb-20"
          style={{ opacity: 1 }}
        >
          {/* Museum Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <p className="museum-label">Established 2016</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="museum-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-luxury-dark-gray mb-12 leading-[1.05] tracking-tight"
          >
            <span className="block mb-4">Where Luxury</span>
            <span className="block mb-4">Meets Cultural</span>
            <span className="block text-gradient">Intelligence</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <p className="museum-body text-xl md:text-2xl text-luxury-medium-gray max-w-2xl leading-relaxed">
              Strategic PR, brand consulting, and luxury services bridging the GCC and Europe. 
              We craft narratives that resonate with the most discerning audiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-luxury-royal-blue text-white font-semibold uppercase tracking-wider rounded-sm luxury-glow hover:bg-luxury-deep-blue hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(30, 58, 95, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Private Consultation
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-4 border-2 border-luxury-royal-blue text-luxury-royal-blue font-semibold uppercase tracking-wider rounded-sm hover:bg-luxury-royal-blue/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
              <ArrowDown className="w-6 h-6 text-luxury-royal-blue" />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-luxury-royal-blue/30 to-transparent" />
        <div className="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-t from-luxury-royal-blue/30 to-transparent" />
        {/* Elegant corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-luxury-royal-blue/10" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-luxury-royal-blue/10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-luxury-royal-blue/10" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-luxury-royal-blue/10" />
      </div>
    </section>
  )
}

