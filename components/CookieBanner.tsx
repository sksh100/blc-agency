'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[200] glass-effect luxury-shadow border-t border-luxury-royal-blue/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-serif font-semibold text-luxury-dark-gray mb-2">
                  Cookie Consent
                </h3>
                <p className="museum-body text-sm text-luxury-medium-gray leading-relaxed max-w-2xl">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept", you consent to our use of cookies.{' '}
                  <Link href="/privacy-policy" className="text-luxury-royal-blue hover:text-luxury-deep-blue underline">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={declineCookies}
                  className="px-6 py-2 border border-luxury-royal-blue/30 text-luxury-royal-blue font-light text-sm uppercase tracking-wider hover:bg-luxury-royal-blue/5 transition-colors duration-300"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-6 py-2 bg-luxury-royal-blue text-white font-semibold text-sm uppercase tracking-wider hover:bg-luxury-deep-blue transition-colors duration-300"
                >
                  Accept
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-luxury-medium-gray hover:text-luxury-dark-gray transition-colors duration-300"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

