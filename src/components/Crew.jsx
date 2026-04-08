import { crew } from '../data/artemisData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Crew({ sectionRef }) {
  const titleRef = useFadeIn()
  const cardsRef = useFadeIn()

  return (
    <section id="crew" className="section" ref={sectionRef}>
      <div className="eyebrow fade-in" ref={titleRef}>
        <span className="eyebrow-line" />
        <span className="eyebrow-text">A TRIPULAÇÃO</span>
      </div>
      <h2 className="section-title fade-in" ref={titleRef} style={{ fontSize: 80 }}>
        QUATRO PIONEIROS
      </h2>
      <p className="section-desc fade-in" ref={titleRef}>
        Uma equipe internacional de astronautas veteranos e novatos, prontos para fazer história
      </p>
      <div className="crew-grid stagger fade-in" ref={cardsRef}>
        {crew.map((member, i) => (
          <div key={member.name} className="crew-card fade-in">
            <div className="crew-img" style={{ backgroundImage: `url(${member.image})` }} />
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
