import { timeline } from '../data/artemisData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Journey({ sectionRef }) {
  const titleRef = useFadeIn()
  const timelineRef = useFadeIn()

  return (
    <section id="journey" className="section" ref={sectionRef}>
      <div className="eyebrow fade-in" ref={titleRef}>
        <span className="eyebrow-line" />
        <span className="eyebrow-text">A JORNADA</span>
      </div>
      <h2 className="section-title fade-in" ref={titleRef} style={{ fontSize: 80 }}>
        ROTA PARA A LUA
      </h2>
      <p className="section-desc fade-in" ref={titleRef}>
        A trajetória da Artemis II levará a tripulação ao redor da Lua e de volta à Terra
      </p>
      <div className="timeline fade-in" ref={timelineRef}>
        {timeline.map((step, i) => (
          <div key={step.phase} className="timeline-step">
            <div className="timeline-dot-col">
              <div className={`timeline-dot ${step.color}`} />
              {i < timeline.length - 1 && <div className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <span className={`timeline-phase ${step.color}`}>FASE {step.phase}</span>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
