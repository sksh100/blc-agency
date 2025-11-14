import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BLC Agency | GCC Luxury PR & Brand Consulting | UAE',
  description: 'GCC luxury consulting, PR agency Dubai/Abu Dhabi, luxury brand consulting UAE, GCC market entry for luxury brands, fashion production Italy France UAE, high-end hospitality consulting GCC',
  keywords: 'GCC luxury consulting, luxury brand consulting UAE, luxury PR agency Dubai, luxury PR agency Abu Dhabi, GCC market entry for luxury brands, fashion production Italy France UAE, high-end hospitality consulting GCC, luxury tourism strategy GCC, boutique PR agency UAE, ultra luxury brand positioning, GCC communication strategy, destination branding for governments, luxury concierge services UAE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <body className="antialiased bg-luxury-white text-luxury-dark-gray overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

