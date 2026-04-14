import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ sectionRef }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const split = new SplitType(el.querySelector('.hero-title'), {
      types: 'chars',
    })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Eyebrow slides in
      tl.from('.hero .eyebrow', {
        opacity: 0,
        y: 20,
        duration: 0.8,
      })

      // Title chars stagger from center
      tl.from(
        split.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -40,
          stagger: { amount: 0.6, from: 'center' },
          duration: 1,
        },
        '-=0.4'
      )

      // Description fades up
      tl.from(
        '.hero .section-desc',
        { opacity: 0, y: 30, duration: 0.8 },
        '-=0.5'
      )

      // CTA fades up with scale
      tl.from(
        '.hero-cta',
        { opacity: 0, y: 20, scale: 0.9, duration: 0.6 },
        '-=0.4'
      )

      // Arrow fades in
      tl.from('.hero-arrow', { opacity: 0, duration: 0.5 }, '-=0.2')

      // Parallax: content moves up on scroll
      gsap.to('.hero-content', {
        y: -120,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, el)

    return () => {
      ctx.revert()
      split.revert()
    }
  }, [])

  return (
    <section
      id="hero"
      className="section hero"
      ref={(el) => {
        containerRef.current = el
        sectionRef?.(el)
      }}
    >
      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">NASA MOON MISSION</span>
          <span className="eyebrow-line" />
        </div>
        <h1 className="hero-title">ARTEMIS II</h1>
        <p className="section-desc">
          A humanidade volta à Lua. Quatro astronautas, uma nave, dez dias —
          e a missão que reabre o caminho para o espaço profundo.
        </p>
        <a href="#mission" className="hero-cta">
          EXPLORAR A MISSÃO
        </a>
        <span className="hero-arrow">↓</span>
      </div>
    </section>
  )
}
