export default function ProcessSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '58px', maxWidth: '920px', marginInline: 'auto' }}>
          <p style={{ fontSize: '20px', lineHeight: 1.45 }}>
            It&apos;s about ambition. Lifestyle. Building something that lasts. Whether you&apos;re relocating, investing, or finding your forever home in the UAE — you&apos;re looking for the right fit. That&apos;s exactly what Aqareo helps you find.
          </p>
        </div>
        <div className="process-wrap">
          <div>
            <div className="big-kicker">
              UAE Real Estate, <span>Simplified</span>
            </div>
            <div style={{ marginTop: '34px' }}>
              <a href="#search" className="pill-btn">Start Your Search <span className="arrow">→</span></a>
            </div>
          </div>
          <div className="process-steps">
            <h4>Steps:</h4>
            <div className="step">
              <div className="step-no">01</div>
              <div>
                <div className="step-title">Talk to a Real Expert <span>We connect you with a UAE-certified agent who truly listens</span></div>
              </div>
            </div>
            <div className="step">
              <div className="step-no">02</div>
              <div>
                <div className="step-title">Get Clarity <span>We define what you actually need, not just what’s available in the market.</span></div>
              </div>
            </div>
            <div className="step">
              <div className="step-no">03</div>
              <div>
                <div className="step-title">Move Forward <span>We find the property that fits and make the deal happen.</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="own-grid">
          <div className="mini-promo">
            <div style={{ marginBottom: '14px', fontSize: '12px' }}>For Agents</div>
            <div className="thumb" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 'clamp(42px,4.2vw,68px)', lineHeight: 1.02, letterSpacing: '-0.05em', fontWeight: 500 }}>
              Own <span style={{ color: 'rgba(17,17,17,.28)' }}>UAE Real Estate</span>
            </h2>
            <div className="own-image" />
            <div className="own-copy">
              <h4>At Aqareo, our agents don’t just represent the brand they grow with it.</h4>
              <p>
                We equip top performers with the tools, leads, and support to build a thriving career across Dubai, Abu Dhabi, Sharjah, and beyond. You’re not just closing deals you’re building a legacy in one of the world’s most dynamic property markets.
              </p>
              <div style={{ marginTop: '24px' }}>
                <a href="#agents" className="pill-btn">Join Aqareo <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
