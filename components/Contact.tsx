'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import SectionParticles from './SectionParticles'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding relative bg-luxury-off-white overflow-hidden">
      <SectionParticles count={25} intensity={0.15} />
      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-32"
        >
          <p className="museum-label mb-4 sm:mb-6">Contact</p>
          <h2 className="museum-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-luxury-dark-gray mb-6 sm:mb-8 leading-[1.05] tracking-tight">
            <span className="text-luxury-dark-gray">Book a</span>{' '}
            <span className="text-gradient">Private Consultation</span>
          </h2>
          <p className="museum-body text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-medium-gray max-w-2xl leading-relaxed">
            Begin your journey to elevated brand excellence in the GCC and beyond
          </p>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-12" />
        </motion.div>

            <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-semibold text-luxury-dark-gray mb-6">
                Get In Touch
              </h3>
              <p className="text-luxury-medium-gray font-light leading-relaxed mb-8">
                We're here to discuss how we can elevate your brand. Reach out to begin 
                a conversation about your luxury brand's future.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-luxury-royal-blue flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-luxury-royal-blue" />
                </div>
                <div>
                  <h4 className="text-luxury-dark-gray font-semibold mb-1">Email</h4>
                  <a href="mailto:contact@blcagency.com" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light">
                    contact@blcagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-luxury-royal-blue flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-luxury-royal-blue" />
                </div>
                <div>
                  <h4 className="text-luxury-dark-gray font-semibold mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-luxury-royal-blue flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-luxury-royal-blue" />
                </div>
                <div>
                  <h4 className="text-luxury-dark-gray font-semibold mb-1">Location</h4>
                  <p className="text-luxury-medium-gray font-light">
                    Dubai, UAE<br />
                    Abu Dhabi, UAE<br />
                    Europe
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect luxury-shadow p-6 sm:p-8 space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-luxury-medium-gray mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-luxury-light-gray px-4 py-3 text-luxury-dark-gray placeholder-luxury-medium-gray focus:outline-none focus:border-luxury-royal-blue transition-colors font-light"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-luxury-medium-gray mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-luxury-light-gray px-4 py-3 text-luxury-dark-gray placeholder-luxury-medium-gray focus:outline-none focus:border-luxury-royal-blue transition-colors font-light"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-light text-luxury-medium-gray mb-2 uppercase tracking-wider">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border border-luxury-light-gray px-4 py-3 text-luxury-dark-gray placeholder-luxury-medium-gray focus:outline-none focus:border-luxury-royal-blue transition-colors font-light"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-luxury-medium-gray mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white border border-luxury-light-gray px-4 py-3 text-luxury-dark-gray placeholder-luxury-medium-gray focus:outline-none focus:border-luxury-royal-blue transition-colors font-light resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-luxury-royal-blue text-white font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 luxury-glow hover:bg-luxury-deep-blue hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

