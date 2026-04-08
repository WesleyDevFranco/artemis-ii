import { missionStats } from '../data/artemisData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Mission({ sectionRef }) {
  const titleRef = useFadeIn()
  const descRef = useFadeIn()
  const statsRef = useFadeIn()

  return (
    <section id="mission" className="section" ref={sectionRef}>
      <div className="eyebrow fade-in" ref={titleRef}>
        <span className="eyebrow-line" />
        <span className="eyebrow-text">A MISSÃO</span>
      </div>
      <h2 className="section-title fade-in" ref={titleRef} style={{ fontSize: 80 }}>
        RUMO À LUA
      </h2>
      <p className="section-desc fade-in" ref={descRef}>
        A Artemis II será o primeiro voo tripulado do programa Artemis da NASA,
        levando quatro astronautas em uma jornada ao redor da Lua. A missão testará
        os sistemas críticos da espaçonave Orion com tripulação a bordo, abrindo
        caminho para o retorno humano à superfície lunar.
      </p>
      <div className="stats-row fade-in stagger" ref={statsRef}>
        {missionStats.map((stat) => (
          <div key={stat.label} className="stat-card fade-in">
            <span className={`stat-number ${stat.color === 'orange' ? 'orange' : ''}`}>
              {stat.number}
            </span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
