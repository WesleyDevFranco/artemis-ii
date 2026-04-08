import { useScrollBackground } from './hooks/useScrollBackground'
import { backgrounds } from './data/artemisData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Crew from './components/Crew'
import Orion from './components/Orion'
import SLS from './components/SLS'
import Journey from './components/Journey'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const { currentBg, registerSection } = useScrollBackground(backgrounds)

  return (
    <>
      {/* Background layers - one per image, toggle opacity */}
      {backgrounds.map((bg, i) => (
        <div
          key={bg}
          className="bg-layer"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: currentBg === i ? 1 : 0,
          }}
        />
      ))}
      <div className="bg-overlay" />

      <Navbar />

      <main>
        <Hero sectionRef={registerSection(0)} />
        <div className="divider" />
        <Mission sectionRef={registerSection(1)} />
        <div className="divider" />
        <Crew sectionRef={registerSection(2)} />
        <div className="divider" />
        <Orion sectionRef={registerSection(3)} />
        <div className="divider" />
        <SLS sectionRef={registerSection(4)} />
        <div className="divider" />
        <Journey sectionRef={registerSection(5)} />
        <div className="divider" />
        <Footer sectionRef={registerSection(6)} />
      </main>
    </>
  )
}
