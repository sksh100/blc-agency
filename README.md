# BLC Agency - Luxury PR & Brand Consulting

A state-of-the-art luxury website for BLC Agency, showcasing PR and brand consulting services with refined aesthetics and cutting-edge design.

## Features

- **Luxury Design**: Black and gold color scheme with sophisticated styling
- **Modern Effects**: Smooth animations, glassmorphism, and interactive elements
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized for fast loading and smooth performance
- **Security**: Right-click and text selection disabled for content protection
- **Sections**:
  - Hero section with animated background
  - About Us section
  - Services showcase
  - Luxury Brand Management Directory with filtering
  - Portfolio section
  - Client testimonials
  - Contact form
  - Footer with social links

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors

The luxury color palette is defined in `tailwind.config.js`:
- `luxury-black`: Primary black background
- `luxury-gold`: Gold accent color
- `luxury-light-gold`: Light gold variant
- `luxury-dark-gold`: Dark gold variant

### Content

Edit content in the respective component files:
- `components/AboutUs.tsx` - About section content
- `components/Services.tsx` - Services list
- `components/BrandManagementDirectory.tsx` - Brand management services
- `components/Portfolio.tsx` - Portfolio items
- `components/Testimonials.tsx` - Client testimonials

## Project Structure

```
blc-agency/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── AboutUs.tsx         # About section
│   ├── Services.tsx        # Services section
│   ├── BrandManagementDirectory.tsx  # Brand directory
│   ├── Portfolio.tsx       # Portfolio section
│   ├── Testimonials.tsx    # Testimonials section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

## License

© 2025 BLC Agency. All rights reserved.

# blc-agency
