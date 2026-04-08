import { useState, useEffect, useRef } from 'react'

export function useScrollBackground(backgrounds) {
  const [currentBg, setCurrentBg] = useState(0)
  const sectionsRef = useRef([])

  useEffect(() => {
    // Preload images
    backgrounds.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [backgrounds])

  useEffect(() => {
    const observers = []

    sectionsRef.current.forEach((section, index) => {
      if (!section) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentBg(index)
          }
        },
        { threshold: 0.4 }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const registerSection = (index) => (el) => {
    sectionsRef.current[index] = el
  }

  return { currentBg, registerSection }
}
