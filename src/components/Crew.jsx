import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { crew } from '../data/artemisData'

gsap.registerPlugin(ScrollTrigger)

export default function Crew({ sectionRef }) {
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    const track = trackRef.current
    if (!el || !track) return

    const ctx = gsap.context(() => {
      // Header animations
      gsap.from('.crew-header .eyebrow', {
        opacity: 0,
        x: -40,
        duration: 0.8,
        scrollTrigger: { trigger: el, start: 'top 75%' },
      })

      gsap.from('.crew-header .section-title', {
        opacity: 0,
        y: 50,
        duration: 0.9,
        scrollTrigger: { trigger: el, start: 'top 70%' },
      })

      gsap.from('.crew-header .section-desc', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        scrollTrigger: { trigger: el, start: 'top 65%' },
      })

      // Horizontal scroll
      const cards = gsap.utils.toArray('.crew-card', track)
      if (cards.length === 0) return

      const totalScroll = track.scrollWidth - el.clientWidth

      gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
        },
      })

      // Card reveal as they come into view
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          rotateY: -8,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: 'top 50%' },
        })
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="crew"
      className="section crew-section"
      ref={(el) => {
        containerRef.current = el
        sectionRef?.(el)
      }}
    >
      <div className="crew-header">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">TRIPULAÇÃO</span>
        </div>
        <h2 className="section-title" style={{ fontSize: 80 }}>
          QUATRO PIONEIROS
        </h2>
        <p className="section-desc">
          Uma equipe internacional de veteranos e recordistas, escolhida para
          reabrir o caminho entre a Terra e a Lua
        </p>
      </div>
      <div className="crew-track" ref={trackRef}>
        {crew.map((member, i) => (
          <div key={member.name} className="crew-card">
            <div
              className="crew-img"
              style={{ backgroundImage: `url(${member.image})` }}
            />
            <div className="crew-info">
              <span className={`crew-role ${i >= 2 ? 'orange' : ''}`}>
                {member.flag} {member.role}
              </span>
              <h3 className="crew-name">{member.name}</h3>
              <p className="crew-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
