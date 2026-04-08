import { slsSpecs } from '../data/artemisData'
import { useFadeIn } from '../hooks/useFadeIn'

export default function SLS({ sectionRef }) {
  const leftRef = useFadeIn()
  const rightRef = useFadeIn()

  return (
    <section id="sls" className="section section-split" ref={sectionRef}>
      <div className="split-left specs-col fade-in stagger" ref={leftRef}>
        {slsSpecs.map((spec) => (
          <div key={spec.label} className="spec-card fade-in">
            <span className="spec-label">{spec.label}</span>
            <span className={`spec-value ${spec.color === 'orange' ? 'orange' : spec.color === 'blue' ? 'blue' : ''}`}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>
      <div className="split-right fade-in" ref={rightRef}>
        <div className="eyebrow">
          <span className="eyebrow-line orange" />
          <span className="eyebrow-text orange">FOGUETE</span>
        </div>
        <h2 className="section-title" style={{ fontSize: 72, textAlign: 'left' }}>
          SPACE LAUNCH<br />SYSTEM
        </h2>
        <p className="section-desc" style={{ textAlign: 'left' }}>
          O foguete mais poderoso já construído pela NASA. O SLS é o único foguete
          capaz de enviar a Orion, astronautas e cargas para a Lua em uma única missão.
          Com 98 metros de altura, supera o Saturn V do programa Apollo.
        </p>
      </div>
    </section>
  )
}
