'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Hotel, Building2, Shirt, Key, Monitor, Shield } from 'lucide-react'
import SectionParticles from './SectionParticles'

const serviceCategories = [
  {
    icon: Globe,
    title: 'GCC Luxury Market PR & Communication',
    shortDesc: 'For global luxury brands entering or expanding in the GCC',
    description: 'Cultural fluency meets strategic communication. We craft press releases, PR strategies, and brand narratives specifically adapted for GCC media, influencers, and high-net-worth consumers.',
    services: [
      'Press releases crafted in culturally fluent tone',
      'PR strategies for GCC media & influencers',
      'Brand storytelling adapted for the region',
      'Product launches & brand activations',
      'Event curation with hand-selected GCC suppliers',
      'VIP & media guestlist management',
      'Local market adaptation for marketing campaigns',
      'Celebrity, influencer, and KOL partnerships',
    ],
    industries: [
      'Real estate',
      'Hotels & resorts',
      'Wellness & spa',
      'Jewellery & watches',
      'Fashion & haute couture',
      'Luxury automotive',
    ],
  },
  {
    icon: Hotel,
    title: 'Luxury Hospitality Enhancement',
    shortDesc: 'Helping hotels, resorts, fine-dining restaurants, and spas attract GCC travelers',
    description: 'Make your properties irresistible to high-spending Gulf visitors. We enhance concepts, design experiences, and refine every touchpoint to align with GCC luxury preferences.',
    services: [
      'Concept curation & enhancement',
      'Experience design tailored to GCC preferences',
      'Luxury guest journey mapping',
      'Menu / wellness program refinement',
      'High-end photoshoot direction',
      'Sales & marketing repositioning',
      'Cultural alignment for staff communication',
      'PR campaigns targeting GCC luxury travelers',
      'Staff training for ultra-high-net-worth customer service excellence',
      'Luxury protocol and discretion training for hospitality teams',
    ],
    outcome: 'Make properties irresistible to high-spending Gulf visitors',
  },
  {
    icon: Building2,
    title: 'Government & Destination Strategy',
    shortDesc: 'Helping governments attract luxury tourism',
    description: 'Working at policy and strategic tourism level. We develop destination concepts, luxury tourism blueprints, and ultra-luxury experiences that position destinations as premier GCC travel hubs.',
    services: [
      'Destination concept curation',
      'Luxury tourism blueprint development',
      'Ultra-luxury experience design',
      'High-level PR & global messaging',
      'Cultural positioning for GCC travelers',
      'Partnerships with luxury operators',
      'High-spend segmentation strategy',
      'Staff training programs for ultra-high-net-worth tourist service excellence',
      'Luxury protocol and cultural sensitivity training for tourism teams',
    ],
    outcome: 'Position destinations at policy and strategic tourism level',
  },
  {
    icon: Shirt,
    title: 'Fashion Industry Consulting & Production Facilitation',
    shortDesc: 'End-to-end fashion brand consulting',
    description: 'Transform creative visions into profitable luxury brands. From brand DNA creation to runway production, we facilitate every step of high-end fashion development with European craftsmanship.',
    services: [
      'Brand DNA creation',
      'Identity & storytelling development',
      'Production sourcing (Italy, France, Europe)',
      'High-end fabric sourcing',
      'Pattern development',
      'Sample & collection production',
      'Supplier management',
      'Runway show production',
      'Fashion PR in GCC',
      'Photoshoot production',
      'Fashion Economics training',
    ],
    outcome: 'Transform creative visions into profitable luxury brands',
  },
  {
    icon: Key,
    title: 'Luxury Concierge Services',
    shortDesc: 'Discreet, premium service for high-net-worth individuals and executives',
    description: 'Exclusive, high-touch, and private. We provide discreet luxury concierge services for discerning clients who demand the finest in travel, experiences, and lifestyle management.',
    services: [
      'Luxury travel planning',
      'VIP bookings',
      'Curated experiences',
      'High-level coordination',
      'Lifestyle management',
    ],
    outcome: 'Exclusive, high-touch, and private service',
  },
  {
    icon: Monitor,
    title: 'Luxury Digital Presence & Brand Experience',
    shortDesc: 'We design and manage digital ecosystems that speak directly to the luxury consumer',
    description: 'We transform digital platforms into luxury experiences—not just marketing channels. Crafted by specialists who understand luxury aesthetics, consumer psychology, and GCC cultural preferences. Your brand becomes desirable, culturally resonant, and aligned with the expectations of the GCC luxury audience.',
    services: [
      'Website creation & creative direction',
      'Luxury social media channel creation & management',
      'Culturally fluent content tailored to GCC audiences',
      'Editorial-style posting (Vogue, Harper\'s Bazaar Arabia tone)',
      'High-end art direction for visuals',
      'Narrative-building for brand desirability',
      'Audience growth strategies for affluent segments',
      'Luxury consumer communication strategy',
      'Brand storytelling for digital platforms',
      'Photoshoot direction & content production',
      'Digital launch campaigns',
    ],
    outcome: 'Transform digital platforms into luxury experiences—not just marketing channels',
  },
  {
    icon: Shield,
    title: 'Private Family Offices & Household Staff Excellence',
    shortDesc: 'Training staff to deliver exceptional service to ultra-high-net-worth principals',
    description: 'Enabling private family offices and household staff to understand luxury protocols, work with absolute discretion, and deliver the highest levels of respect and service excellence to their principals. We train management executives and household teams to embody the refinement and precision that ultra-high-net-worth families expect.',
    services: [
      'Luxury protocol training for household staff',
      'Discretion and confidentiality training',
      'Service excellence programs for family offices',
      'Cultural sensitivity and respect training',
      'Management executive training for ultra-high-net-worth service delivery',
      'Household operations refinement',
      'Private event coordination training',
      'Wealth management communication protocols',
    ],
    outcome: 'Enable staff to deliver exceptional, discreet, and respectful service to ultra-high-net-worth principals',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" className="section-padding relative bg-luxury-white overflow-hidden" ref={ref}>
      <SectionParticles count={30} intensity={0.2} />
      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 md:mb-32"
        >
          <p className="museum-label mb-6">Expertise</p>
          <h2 className="museum-heading text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-luxury-dark-gray mb-8 leading-[1.05] tracking-tight">
            <span className="text-luxury-dark-gray">Our</span>{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="museum-body text-xl md:text-2xl text-luxury-medium-gray max-w-3xl leading-relaxed">
            Seven primary divisions of expertise, each representing a clear vertical of our luxury consulting
          </p>
          <div className="w-32 h-px bg-luxury-royal-blue/30 mt-12" />
        </motion.div>

        <div className="space-y-32 md:space-y-40">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group"
              >
                    <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 items-start">
                      {/* Left Column - Icon & Title */}
                      <div className="lg:col-span-1">
                        <div className="sticky top-32">
                          <div className="w-16 h-16 border border-luxury-royal-blue/30 flex items-center justify-center mb-8 group-hover:bg-luxury-royal-blue/5 transition-all duration-500">
                            <Icon className="w-8 h-8 text-luxury-royal-blue/80" />
                          </div>
                          <p className="museum-label mb-4">{String(index + 1).padStart(2, '0')}</p>
                          <h3 className="museum-heading text-3xl md:text-4xl lg:text-5xl text-luxury-dark-gray mb-6 leading-[1.1] group-hover:text-luxury-royal-blue/90 transition-colors duration-300">
                            {category.title}
                          </h3>
                          <p className="museum-body text-luxury-medium-gray text-base leading-relaxed italic">
                            {category.shortDesc}
                          </p>
                        </div>
                      </div>

                      {/* Right Column - Content */}
                      <div className="lg:col-span-2">
                        <div className="glass-effect luxury-shadow p-12 md:p-16 lg:p-20">
                          <p className="museum-body text-luxury-medium-gray text-lg md:text-xl leading-relaxed mb-12">
                            {category.description}
                          </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-luxury-dark-gray font-semibold mb-4 uppercase tracking-wider text-sm border-b border-luxury-royal-blue/30 pb-2">
                            Services Include
                          </h4>
                          <ul className="space-y-3">
                            {category.services.map((service, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <span className="text-luxury-royal-blue mt-1">•</span>
                                <span className="text-luxury-medium-gray text-sm font-light">{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {category.industries && (
                          <div>
                            <h4 className="text-luxury-dark-gray font-semibold mb-4 uppercase tracking-wider text-sm border-b border-luxury-royal-blue/30 pb-2">
                              Industries Served
                            </h4>
                            <ul className="space-y-3">
                              {category.industries.map((industry, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <span className="text-luxury-royal-blue mt-1">•</span>
                                  <span className="text-luxury-medium-gray text-sm font-light">{industry}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {'outcome' in category && !category.industries && (
                          <div>
                            <h4 className="text-luxury-dark-gray font-semibold mb-4 uppercase tracking-wider text-sm border-b border-luxury-royal-blue/30 pb-2">
                              Desired Outcome
                            </h4>
                            <p className="text-luxury-medium-gray text-sm font-light leading-relaxed italic">
                              {category.outcome}
                            </p>
                          </div>
                        )}
                      </div>

                      {'outcome' in category && category.industries && (
                        <div className="mt-8 pt-8 border-t border-luxury-royal-blue/20">
                          <p className="text-luxury-medium-gray text-sm font-light leading-relaxed italic">
                            <span className="text-luxury-royal-blue font-semibold">Outcome: </span>
                            {category.outcome}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
