import { orionSpecs } from '../data/artemisData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Orion({ sectionRef }) {
  const leftRef = useFadeIn()
  const rightRef = useFadeIn()

  return (
    <section id="orion" className="section section-split" ref={sectionRef}>
      <div className="split-left fade-in" ref={leftRef}>
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">ESPAÇONAVE</span>
        </div>
        <h2 className="section-title" style={{ fontSize: 80, textAlign: 'left' }}>ORION</h2>
        <p className="section-desc" style={{ textAlign: 'left' }}>
          A cápsula Orion é a espaçonave de próxima geração da NASA, projetada para
          levar humanos além da órbita terrestre. Com escudo térmico capaz de suportar
          temperaturas de até 2.760°C na reentrada, é a nave mais avançada já construída.
        </p>
      </div>
      <div className="split-right specs-col fade-in stagger" ref={rightRef}>
        {orionSpecs.map((spec) => (
          <div key={spec.label} className="spec-card fade-in">
            <span className="spec-label">{spec.label}</span>
            <span className={`spec-value ${spec.color === 'orange' ? 'orange' : spec.color === 'blue' ? 'blue' : ''}`}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
