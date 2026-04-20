const cards = [
  {
    title: 'Mortgage & Home Finance',
    text: 'Helping you secure UAE home financing with the right banks, valuation teams, and investor-ready support.'
  },
  {
    title: 'Property Management',
    text: 'Let us handle the details so your investment runs smoothly and performs better.'
  },
  {
    title: 'Off-Plan & Development Advisory',
    text: 'Expert guidance from launch strategy to buyer fit and smarter investment discovery.'
  }
]

export default function ServicesSection() {
  return (
    <section className="section section-dark" id="services">
      <div className="container">
        <div className="dark-intro">
          <div>
            <h2>
              Beyond Buying <span>and Selling</span>
            </h2>
          </div>
          <div>
            <p>
              The UAE property market moves fast and so do we. Our experts offer continued support beyond the transaction, helping you protect and grow your investment in one of the world’s most exciting real estate markets.
            </p>
            <a href="#discover" className="pill-btn light">
              Discover Our Services <span className="arrow">→</span>
            </a>
          </div>
        </div>
        <div className="services-grid">
          {cards.map((card) => (
            <article className="service-card" key={card.title}>
              <div className="service-copy">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              <div>
                <a href="#learn" className="pill-btn ghost">
                  Learn More <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
