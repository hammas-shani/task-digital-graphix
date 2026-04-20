export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-title">Subscribe to our Newsletter!</div>
            <div className="newsletter">
              <span>Enter address...</span>
              <span>→</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
              <div>
                <div className="footer-sub">Address</div>
                <div className="footer-meta">802 BB Building, Al Barsha 1<br />Dubai, UAE</div>
              </div>
              <div>
                <div className="footer-sub">Email</div>
                <div className="footer-meta">hello@findrealestate.com</div>
              </div>
              <div>
                <div className="footer-sub">Phone</div>
                <div className="footer-meta">+1 212 094 8965</div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <a href="#search">Search</a>
            <a href="#agents">Agents</a>
            <a href="#join">Join</a>
            <a href="#about">About Us</a>
            <a href="#portal">Agent Portal</a>
          </div>
          <div className="footer-socials">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#youtube">Youtube</a>
            <a href="#linkedin">Linkedin</a>
          </div>
          <div />
        </div>

        <div className="footer-brand">AQAREO</div>

        <div className="footer-bottom">
          <span>Terms</span>
          <span>Privacy Policy</span>
          <span>Fair Housing Notice</span>
          <span>Operating Procedures</span>
          <span>Press</span>
          <span>Cookie Vouchers Welcome</span>
          <span>Copyright © 2026</span>
        </div>
      </div>
    </footer>
  )
}
