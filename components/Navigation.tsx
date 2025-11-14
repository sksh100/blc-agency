'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const servicesItems = [
    { name: 'GCC Luxury Market PR & Communication', slug: 'gcc-luxury-market-pr' },
    { name: 'Luxury Hospitality Enhancement', slug: 'luxury-hospitality-enhancement' },
    { name: 'Government & Destination Strategy', slug: 'government-destination-strategy' },
    { name: 'Fashion Industry Consulting', slug: 'fashion-industry-consulting' },
    { name: 'Luxury Concierge Services', slug: 'luxury-concierge-services' },
    { name: 'Digital Presence & Brand Experience', slug: 'digital-presence-brand-experience' },
    { name: 'Family Offices & Staff Excellence', slug: 'family-offices-staff-excellence' },
  ]

  const navItems = [
    { name: t('nav.home'), href: '/', key: 'home' },
    { name: t('nav.about'), href: '/about', key: 'about' },
    { name: t('nav.services'), href: '/services', hasDropdown: true, key: 'services' },
    { name: t('nav.portfolio'), href: '/portfolio', key: 'portfolio' },
    { name: t('nav.contact'), href: '/contact', key: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-luxury-light-gray shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="text-xl sm:text-2xl font-serif font-bold text-gradient"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BLC Agency
            </motion.span>
          </Link>

              {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSwitcher />
            {navItems.map((item) => (
              <div key={item.key} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-sm font-light tracking-wider uppercase text-luxury-dark-gray hover:text-luxury-royal-blue transition-colors duration-300 relative group flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-luxury-royal-blue group-hover:w-full transition-all duration-300" />
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 glass-effect luxury-shadow rounded-sm overflow-hidden"
                        >
                          <div className="py-2">
                            {servicesItems.map((service, index) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block px-6 py-3 text-sm font-light text-luxury-dark-gray hover:bg-luxury-royal-blue/5 hover:text-luxury-royal-blue transition-colors duration-200"
                              >
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: index * 0.03 }}
                                >
                                  {service.name}
                                </motion.div>
                              </Link>
                            ))}
                            <div className="border-t border-luxury-light-gray mt-2 pt-2">
                              <Link
                                href="/services"
                                className="block px-6 py-3 text-sm font-semibold text-luxury-royal-blue hover:bg-luxury-royal-blue/5 transition-colors duration-200"
                              >
                                {t('nav.viewAllServices')}
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-light tracking-wider uppercase text-luxury-dark-gray hover:text-luxury-royal-blue transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-luxury-royal-blue group-hover:w-full transition-all duration-300" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-luxury-dark-gray"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="block h-0.5 w-full bg-luxury-dark-gray"
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : {}}
              />
              <motion.span
                className="block h-0.5 w-full bg-luxury-dark-gray"
                animate={mobileMenuOpen ? { opacity: 0 } : {}}
              />
              <motion.span
                className="block h-0.5 w-full bg-luxury-dark-gray"
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : {}}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="mb-4">
                <LanguageSwitcher />
              </div>
              {navItems.map((item) => (
                <div key={item.key}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className="w-full flex items-center justify-between text-sm font-light tracking-wider uppercase text-luxury-dark-gray hover:text-luxury-royal-blue transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-2 space-y-2"
                          >
                            {servicesItems.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="block text-sm font-light text-luxury-medium-gray hover:text-luxury-royal-blue transition-colors py-2"
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  setServicesDropdownOpen(false)
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link
                              href="/services"
                              className="block text-sm font-semibold text-luxury-royal-blue py-2"
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setServicesDropdownOpen(false)
                              }}
                            >
                              {t('nav.viewAllServices')}
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-sm font-light tracking-wider uppercase text-luxury-dark-gray hover:text-luxury-royal-blue transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
