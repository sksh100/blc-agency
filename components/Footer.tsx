'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative bg-luxury-warm-white border-t border-luxury-light-gray">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-royal-blue/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-gradient mb-4">BLC Agency</h3>
            <p className="text-luxury-medium-gray font-light leading-relaxed max-w-md text-sm sm:text-base">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-dark-gray font-semibold mb-4 uppercase tracking-wider text-xs sm:text-sm">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-xs sm:text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-xs sm:text-sm">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-xs sm:text-sm">
                  {t('nav.portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-xs sm:text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-luxury-dark-gray font-semibold mb-4 uppercase tracking-wider text-xs sm:text-sm">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/gcc-luxury-market-pr" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-sm">
                  GCC Luxury Market PR
                </Link>
              </li>
              <li>
                <Link href="/services/luxury-hospitality-enhancement" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-sm">
                  Hospitality Enhancement
                </Link>
              </li>
              <li>
                <Link href="/services/government-destination-strategy" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-sm">
                  Destination Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/fashion-industry-consulting" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-sm">
                  Fashion Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/luxury-concierge-services" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-sm">
                  Concierge Services
                </Link>
              </li>
              <li>
                <Link href="/services/digital-presence-brand-experience" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-sm">
                  Digital Presence & Branding
                </Link>
              </li>
              <li>
                <Link href="/services/family-offices-staff-excellence" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light text-sm">
                  Family Offices & Staff Training
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links & Social */}
        <div className="pt-8 border-t border-luxury-light-gray">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm">
                  <Link href="/privacy-policy" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light">
                    {t('footer.privacyPolicy')}
                  </Link>
                  <Link href="/terms-of-service" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light">
                    {t('footer.termsOfService')}
                  </Link>
                  <Link href="/cookie-policy" className="text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors font-light">
                    {t('footer.cookiePolicy')}
                  </Link>
            </div>
            <div className="flex items-center space-x-6">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-luxury-royal-blue/30 flex items-center justify-center hover:bg-luxury-royal-blue/10 hover:border-luxury-royal-blue transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-luxury-royal-blue" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-luxury-royal-blue/30 flex items-center justify-center hover:bg-luxury-royal-blue/10 hover:border-luxury-royal-blue transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-luxury-royal-blue" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-luxury-royal-blue/30 flex items-center justify-center hover:bg-luxury-royal-blue/10 hover:border-luxury-royal-blue transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-luxury-royal-blue" />
              </motion.a>
            </div>
          </div>
              <div className="text-center md:text-left">
                <p className="text-luxury-medium-gray text-xs sm:text-sm font-light">
                  © {new Date().getFullYear()} BLC Agency. {t('footer.copyright')}
                </p>
              </div>
        </div>
      </div>
    </footer>
  )
}

