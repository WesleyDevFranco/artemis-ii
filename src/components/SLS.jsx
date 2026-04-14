import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { slsSpecs } from '../data/artemisData'

gsap.registerPlugin(ScrollTrigger)

export default function SLS({ sectionRef }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Specs stagger from left
      gsap.from('.sls-specs .spec-card', {
        opacity: 0,
        x: -60,
        stagger: 0.2,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 65%' },
      })

      // Text from right
      gsap.from('.sls-text', {
        opacity: 0,
        x: 60,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 65%' },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="sls"
      className="section section-split"
      ref={(el) => {
        containerRef.current = el
        sectionRef?.(el)
      }}
    >
      <div className="split-left specs-col sls-specs">
        {slsSpecs.map((spec) => (
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
      <div className="split-right sls-text">
        <div className="eyebrow">
          <span className="eyebrow-line orange" />
          <span className="eyebrow-text orange">FOGUETE</span>
        </div>
        <h2 className="section-title" style={{ fontSize: 72, textAlign: 'left' }}>
          SPACE LAUNCH
          <br />
          SYSTEM
        </h2>
        <p className="section-desc" style={{ textAlign: 'left' }}>
          O foguete mais poderoso já construído. Com 98 metros de altura e empuxo
          superior ao Saturn V, o SLS é a única máquina capaz de enviar a Orion,
          sua tripulação e toda a carga necessária em direção à Lua em um
          único lançamento.
        </p>
      </div>
    </section>
  )
}
