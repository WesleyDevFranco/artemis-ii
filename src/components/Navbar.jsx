import { useState, useEffect } from 'react'

const links = ['A MISSÃO', 'SLS', 'ORION', 'TRIPULAÇÃO', 'JORNADA']
const ids = ['mission', 'sls', 'orion', 'crew', 'journey']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section
  useEffect(() => {
    const observers = ids.map((id) => {
      const section = document.getElementById(id)
      if (!section) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(section)
      return observer
    })

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      // Use lenis if available, fallback to native
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -72 })
      } else {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a
        href="#hero"
        className="nav-logo"
        onClick={(e) => handleClick(e, 'hero')}
      >
        ARTEMIS II
      </a>
      <div className="nav-links">
        {links.map((label, i) => (
          <a
            key={label}
            href={`#${ids[i]}`}
            className={`nav-link ${active === ids[i] ? 'active' : ''}`}
            onClick={(e) => handleClick(e, ids[i])}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
