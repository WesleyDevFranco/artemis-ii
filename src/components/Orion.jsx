import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { orionSpecs } from '../data/artemisData'

gsap.registerPlugin(ScrollTrigger)

export default function Orion({ sectionRef }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Text from left
      gsap.from('.orion-text', {
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 65%' },
      })

      // Specs stagger from right
      gsap.from('.orion-specs .spec-card', {
        opacity: 0,
        x: 60,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 65%' },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="orion"
      className="section section-split"
      ref={(el) => {
        containerRef.current = el
        sectionRef?.(el)
      }}
    >
      <div className="split-left orion-text">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">ESPAÇONAVE</span>
        </div>
        <h2 className="section-title" style={{ fontSize: 80, textAlign: 'left' }}>
          ORION
        </h2>
        <p className="section-desc" style={{ textAlign: 'left' }}>
          A cápsula de próxima geração da NASA, projetada para levar humanos além
          da órbita terrestre. Seu escudo térmico suporta 2.760°C na reentrada —
          a nave mais avançada já construída pela humanidade, e a casa dos
          astronautas durante os dez dias mais distantes de suas vidas.
        </p>
      </div>
      <div className="split-right specs-col orion-specs">
        {orionSpecs.map((spec) => (
          <div key={spec.label} className="spec-card">
            <span className="spec-label">{spec.label}</span>
            <span
              className={`spec-value ${spec.color === 'orange' ? 'orange' : spec.color === 'blue' ? 'blue' : ''}`}
            >
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
