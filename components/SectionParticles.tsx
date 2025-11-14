'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  glow: number
}

interface SectionParticlesProps {
  count?: number
  intensity?: number
}

export default function SectionParticles({ count = 20, intensity = 0.3 }: SectionParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match container
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }
    resizeCanvas()

    // Create particles
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * intensity + 0.05,
      glow: Math.random() * 0.4 + 0.2,
    }))

    // Animation loop
    const animate = () => {
      const rect = container.getBoundingClientRect()
      if (rect.width !== canvas.width || rect.height !== canvas.height) {
        resizeCanvas()
        // Reposition particles
        particlesRef.current.forEach(particle => {
          particle.x = Math.min(particle.x, canvas.width)
          particle.y = Math.min(particle.y, canvas.height)
        })
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Gentle floating motion
        particle.y += Math.sin(Date.now() * 0.0008 + index) * 0.008

        // Draw particle with glow
        ctx.save()
        ctx.globalAlpha = particle.opacity
        
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2.5
        )
        gradient.addColorStop(0, `rgba(30, 58, 95, ${particle.glow})`)
        gradient.addColorStop(1, 'rgba(30, 58, 95, 0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2.5, 0, Math.PI * 2)
        ctx.fill()

        // Core
        ctx.fillStyle = `rgba(30, 58, 95, ${particle.opacity * 1.5})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // Connections
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.save()
            ctx.globalAlpha = (1 - distance / 120) * 0.08
            ctx.strokeStyle = 'rgba(30, 58, 95, 0.5)'
            ctx.lineWidth = 0.3
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      resizeCanvas()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [count, intensity])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas
        ref={canvasRef}
      className="absolute inset-0"
      style={{ mixBlendMode: 'multiply', opacity: 0.3 }}
      />
    </div>
  )
}

