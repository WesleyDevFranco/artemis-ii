import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timeline } from '../data/artemisData'

gsap.registerPlugin(ScrollTrigger)

export default function Journey({ sectionRef }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray('.journey-step', el)
      const lines = gsap.utils.toArray('.step-line', el)

      // Header animation
      gsap.from('.journey-header .eyebrow', {
        opacity: 0,
        x: -40,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 75%' },
      })

      gsap.from('.journey-header .section-title', {
        opacity: 0,
        y: 50,
        duration: 0.9,
        scrollTrigger: { trigger: el, start: 'top 70%' },
      })

      gsap.from('.journey-header .section-desc', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        scrollTrigger: { trigger: el, start: 'top 65%' },
      })

      // Initially hide all steps
      gsap.set(steps, { opacity: 0, x: 40 })
      gsap.set(lines, { scaleY: 0, transformOrigin: 'top' })

      // Pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=2500',
        },
      })

      steps.forEach((step, i) => {
        const dot = step.querySelector('.step-dot')

        // Show step
        tl.to(step, { opacity: 1, x: 0, duration: 0.5 })

        // Pulse the dot
        tl.fromTo(
          dot,
          { scale: 1 },
          {
            scale: 1.5,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
            ease: 'power2.inOut',
          },
          '<'
        )

        // Pause for reading
        tl.to({}, { duration: 0.4 })

        // Draw line to next step
        if (lines[i]) {
          tl.to(lines[i], {
            scaleY: 1,
            duration: 0.3,
            ease: 'none',
          })
        }
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="journey"
      className="section journey-section"
      ref={(el) => {
        containerRef.current = el
        sectionRef?.(el)
      }}
    >
      <div className="journey-header">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">A JORNADA</span>
        </div>
        <h2 className="section-title" style={{ fontSize: 80 }}>
          ROTA PARA A LUA
        </h2>
        <p className="section-desc">
          Dez dias, 768 mil quilômetros percorridos, quatro fases que separam a
          humanidade do retorno à Lua
        </p>
      </div>
      <div className="journey-timeline">
        {timeline.map((step, i) => (
          <div key={step.phase} className="journey-step">
            <div className="step-indicator">
              <div className={`step-dot ${step.color}`} />
              {i < timeline.length - 1 && <div className="step-line" />}
            </div>
            <div className="step-content">
              <span className={`step-phase ${step.color}`}>
                FASE {step.phase}
              </span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
