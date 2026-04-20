export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>
          Find Your Place In <span className="accent">UAE</span>
        </h1>
        <p>
          Expert agents. Local insight. A smarter path to your next property in Dubai, Abu Dhabi &amp; beyond
        </p>
        <a href="#properties" className="pill-btn">
          Find Properties <span className="arrow">→</span>
        </a>
        <div className="hero-building" aria-hidden="true">
          <img src="https://picsum.photos/seed/aqareo-building/900/700" alt="Luxury residence" width="900" height="700" />
        </div>
      </div>
      <div className="hero-fog" aria-hidden="true" />
    </section>
  )
}
