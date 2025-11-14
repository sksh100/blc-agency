'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CookieBanner from '@/components/CookieBanner'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  BLC Agency ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">2. Information We Collect</h2>
                <p className="leading-relaxed">
                  We may collect information that you provide directly to us, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Messages and inquiries</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you updates and communications</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">4. Information Sharing</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and safety</li>
                  <li>With service providers who assist us in operating our website</li>
                </ul>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">5. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">6. Your Rights</h2>
                <p className="leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to object to processing of your information</li>
                  <li>The right to data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">7. Cookies</h2>
                <p className="leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience. For more information, please see our{' '}
                  <a href="/cookie-policy" className="text-luxury-royal-blue hover:text-luxury-deep-blue underline">Cookie Policy</a>.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">8. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@blcagency.com" className="text-luxury-royal-blue hover:text-luxury-deep-blue underline">privacy@blcagency.com</a>.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">9. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
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

