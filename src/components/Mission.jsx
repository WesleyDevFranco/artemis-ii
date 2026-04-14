import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { missionStats } from '../data/artemisData'

gsap.registerPlugin(ScrollTrigger)

export default function Mission({ sectionRef }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      // Title & description reveal
      gsap.from('.mission-eyebrow', {
        opacity: 0,
        x: -40,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 75%' },
      })

      gsap.from('.mission-title', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      })

      gsap.from('.mission-desc', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 65%' },
      })

      // Counter animation on stat cards
      const cards = gsap.utils.toArray('.stat-card', el)
      cards.forEach((card, i) => {
        const numberEl = card.querySelector('.stat-number')
        const target = parseFloat(numberEl.dataset.target)
        const prefix = numberEl.dataset.prefix || ''
        const suffix = numberEl.dataset.suffix || ''

        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.15,
          scrollTrigger: { trigger: '.stats-row', start: 'top 80%' },
        })

        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          delay: i * 0.15 + 0.3,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.stats-row', start: 'top 80%' },
          onUpdate: () => {
            numberEl.textContent =
              prefix + Math.round(obj.val) + suffix
          },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="mission"
      className="section"
      ref={(el) => {
        containerRef.current = el
        sectionRef?.(el)
      }}
    >
      <div className="eyebrow mission-eyebrow">
        <span className="eyebrow-line" />
        <span className="eyebrow-text">A MISSÃO</span>
      </div>
      <h2 className="section-title mission-title" style={{ fontSize: 80 }}>
        RUMO À LUA
      </h2>
      <p className="section-desc mission-desc">
        A Artemis II será o primeiro voo tripulado do programa Artemis da NASA —
        quatro astronautas em uma jornada ao redor da Lua para testar os sistemas
        críticos da Orion com tripulação a bordo, reabrindo o caminho para o
        retorno humano à superfície lunar.
      </p>
      <div className="stats-row">
        {missionStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span
              className={`stat-number ${stat.color === 'orange' ? 'orange' : ''}`}
              data-target={stat.value}
              data-prefix={stat.prefix}
              data-suffix={stat.suffix}
            >
              0
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
