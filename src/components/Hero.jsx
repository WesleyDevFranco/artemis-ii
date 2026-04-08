import { useFadeIn } from '../hooks/useFadeIn'

export default function Hero({ sectionRef }) {
  const titleRef = useFadeIn()
  const subRef = useFadeIn()
  const ctaRef = useFadeIn()

  return (
    <section id="hero" className="section hero" ref={sectionRef}>
      <div className="eyebrow fade-in" ref={titleRef}>
        <span className="eyebrow-line" />
        <span className="eyebrow-text">NASA MOON MISSION</span>
        <span className="eyebrow-line" />
      </div>
      <h1 className="hero-title" ref={titleRef}>ARTEMIS II</h1>
      <p className="section-desc fade-in" ref={subRef}>
        A primeira missão tripulada à Lua em mais de 50 anos
      </p>
      <a href="#mission" className="hero-cta fade-in" ref={ctaRef}>
        EXPLORAR A MISSÃO
      </a>
      <span className="hero-arrow">↓</span>
    </section>
  )
}
