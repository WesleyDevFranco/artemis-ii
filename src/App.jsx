import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { backgrounds } from './data/artemisData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import SLS from './components/SLS'
import Orion from './components/Orion'
import Crew from './components/Crew'
import Journey from './components/Journey'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [activeBg, setActiveBg] = useState(0)
  const sectionsRef = useRef([])

  const registerSection = (index) => (el) => {
    sectionsRef.current[index] = el
  }

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    window.__lenis = lenis

    return () => {
      window.__lenis = null
      lenis.destroy()
    }
  }, [])

  // Background crossfade via IntersectionObserver
  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveBg(index)
        },
        { threshold: 0.3 }
      )
      observer.observe(section)
      return observer
    })

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  // Subtle parallax on background images
  useEffect(() => {
    const layers = gsap.utils.toArray('.bg-layer')
    const tweens = layers.map((layer) =>
      gsap.to(layer, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
    )

    return () => tweens.forEach((t) => t.scrollTrigger?.kill())
  }, [])

  return (
    <>
      {backgrounds.map((bg, i) => (
        <div
          key={i}
          className={`bg-layer ${activeBg === i ? 'bg-active' : ''}`}
          style={{ backgroundImage: `url(${bg})` }}
        />
      ))}
      <div className="bg-overlay" />

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero sectionRef={registerSection(0)} />
        <Mission sectionRef={registerSection(1)} />
        <SLS sectionRef={registerSection(2)} />
        <Orion sectionRef={registerSection(3)} />
        <Crew sectionRef={registerSection(4)} />
        <Journey sectionRef={registerSection(5)} />
        <Footer sectionRef={registerSection(6)} />
      </main>
    </>
  )
}
