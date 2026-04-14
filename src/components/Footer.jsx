import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer({ sectionRef }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from('.footer-logo', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })

      gsap.from('.footer-tagline', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })

      gsap.from('.footer-links a', {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.4,
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      className="footer"
      ref={(el) => {
        containerRef.current = el
        sectionRef?.(el)
      }}
    >
      <h2 className="footer-logo">ARTEMIS II</h2>
      <p className="footer-tagline">We Are Going — Together</p>
      <div className="footer-links">
        <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">
          nasa.gov
        </a>
        <a
          href="https://www.nasa.gov/artemis-ii"
          target="_blank"
          rel="noopener noreferrer"
        >
          artemis.nasa.gov
        </a>
        <a
          href="https://twitter.com/NASA"
          target="_blank"
          rel="noopener noreferrer"
        >
          @NASA
        </a>
      </div>
      <p className="footer-copy">
        Imagens: NASA/Joel Kowsky · Conteúdo educacional · 2025
      </p>
    </footer>
  )
}
