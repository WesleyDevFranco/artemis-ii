import { useState, useEffect } from 'react'

const links = ['A MISSÃO', 'TRIPULAÇÃO', 'ORION', 'SLS', 'JORNADA']
const ids = ['mission', 'crew', 'orion', 'sls', 'journey']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">ARTEMIS II</a>
      <div className="nav-links">
        {links.map((label, i) => (
          <a key={label} href={`#${ids[i]}`} className="nav-link">{label}</a>
        ))}
      </div>
    </nav>
  )
}
