'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CookieBanner from '@/components/CookieBanner'
import { motion } from 'framer-motion'

export default function TermsOfService() {
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
              Terms of Service
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
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">2. Use License</h2>
                <p className="leading-relaxed">
                  Permission is granted to temporarily access the materials on BLC Agency's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">3. Disclaimer</h2>
                <p className="leading-relaxed">
                  The materials on BLC Agency's website are provided on an 'as is' basis. BLC Agency makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">4. Limitations</h2>
                <p className="leading-relaxed">
                  In no event shall BLC Agency or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BLC Agency's website, even if BLC Agency or a BLC Agency authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">5. Accuracy of Materials</h2>
                <p className="leading-relaxed">
                  The materials appearing on BLC Agency's website could include technical, typographical, or photographic errors. BLC Agency does not warrant that any of the materials on its website are accurate, complete, or current. BLC Agency may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">6. Links</h2>
                <p className="leading-relaxed">
                  BLC Agency has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BLC Agency of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">7. Modifications</h2>
                <p className="leading-relaxed">
                  BLC Agency may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">8. Governing Law</h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="museum-heading text-3xl md:text-4xl text-luxury-dark-gray mb-4">9. Contact Information</h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@blcagency.com" className="text-luxury-royal-blue hover:text-luxury-deep-blue underline">legal@blcagency.com</a>.
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

