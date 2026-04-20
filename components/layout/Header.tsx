export default function Header() {
  return (
    <header className="site-header">
      <div className="container inner">
        <div className="logo">AQAREO</div>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#search">Search</a>
          <a href="#about">About Us</a>
          <a href="#agents">Agents</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className="header-cta">
          <a href="#contact" className="pill-btn">Contact Us</a>
        </div>
      </div>
    </header>
  )
}
