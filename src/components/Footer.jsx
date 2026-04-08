export default function Footer({ sectionRef }) {
  return (
    <footer className="footer" ref={sectionRef}>
      <h2 className="footer-logo">ARTEMIS II</h2>
      <p className="footer-tagline">We Are Going — Together</p>
      <div className="footer-links">
        <a href="https://www.nasa.gov" target="_blank" rel="noopener noreferrer">nasa.gov</a>
        <a href="https://www.nasa.gov/artemis-ii" target="_blank" rel="noopener noreferrer">artemis.nasa.gov</a>
        <a href="https://twitter.com/NASA" target="_blank" rel="noopener noreferrer">@NASA</a>
      </div>
      <p className="footer-copy">Imagens: NASA/Joel Kowsky · Conteúdo educacional · 2025</p>
    </footer>
  )
}
