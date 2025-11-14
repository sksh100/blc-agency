'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CookieBanner from '@/components/CookieBanner'
import { motion } from 'framer-motion'

export default function CookiePolicy() {
  return (
    <main className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <div className="pt-32 pb-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="museum-label mb-6">Legal</p>
            <h1 className="museum-heading text-5xl md:text-6xl lg:text-7xl text-luxury-dark-gray mb-8 leading-[1.05] tracking-tight">
              Cookie Policy
            </h1>
            <div className="w-32 h-px bg-luxury-royal-blue/30 mt-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="museum-body text-luxury-medium-gray space-y-8">
              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">1. What Are Cookies</h2>
                <p className="leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">2. How We Use Cookies</h2>
                <p className="leading-relaxed">
                  BLC Agency uses cookies to enhance your browsing experience on our website. We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To improve website functionality and performance</li>
                  <li>To personalize your experience</li>
                  <li>To provide relevant content and advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">3. Types of Cookies We Use</h2>
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-luxury-dark-gray mb-2">Essential Cookies</h3>
                    <p className="leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-luxury-dark-gray mb-2">Analytics Cookies</h3>
                    <p className="leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-luxury-dark-gray mb-2">Preference Cookies</h3>
                    <p className="leading-relaxed">
                      These cookies allow our website to remember information that changes the way the website behaves or looks, such as your preferred language or region.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">4. Third-Party Cookies</h2>
                <p className="leading-relaxed">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements on and through the website. These third parties may set their own cookies or similar technologies to collect information about your online activities.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">5. Managing Cookies</h2>
                <p className="leading-relaxed">
                  You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies, and to delete cookies that have already been set. However, please note that blocking or deleting cookies may impact your experience on our website and may prevent you from accessing certain features.
                </p>
                <p className="leading-relaxed mt-4">
                  You can manage your cookie preferences by:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Adjusting your browser settings</li>
                  <li>Using our cookie consent banner when you first visit our website</li>
                  <li>Visiting our cookie preference center</li>
                </ul>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">6. Cookie Consent</h2>
                <p className="leading-relaxed">
                  When you first visit our website, you will be presented with a cookie consent banner. You can choose to accept or decline cookies. Your choice will be stored and remembered for future visits.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">7. Changes to This Cookie Policy</h2>
                <p className="leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We encourage you to review this page periodically for the latest information on our use of cookies.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">8. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:privacy@blcagency.com" className="text-luxury-royal-blue hover:text-luxury-deep-blue underline">privacy@blcagency.com</a>.
                </p>
              </section>

              <div className="pt-8 border-t border-luxury-royal-blue/20 mt-12">
                <p className="text-sm text-luxury-medium-gray">
                  Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <CookieBanner />
    </main>
  )
}

