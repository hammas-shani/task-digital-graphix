const posts = [
  {
    date: '2026-02-23',
    title: 'Insights & Resources',
    text: 'Stay ahead of the UAE property market with expert insights, area guides, and investment tips.',
    className: 'sunset'
  },
  {
    date: '2026-02-02',
    title: 'January 2026 UAE Market Update',
    text: 'Inventory is rising across Dubai to start 2026. See how Downtown, Dubai Marina, and Business Bay markets are shaping up.',
    className: ''
  },
  {
    date: '2025-12-15',
    title: 'The Dubai’s Key: Why January is a Smart Time to Buy',
    text: 'Skip the rush—January brings serious buyers, better deals, and clearer choices. Discover why starting your property search now gives you the edge.',
    className: 'night'
  }
]

export default function BlogSection() {
  return (
    <section className="section section-light" id="blogs">
      <div className="container">
        <div className="blog-head">
          <div>
            <h2>
              Blog &amp; <span>Resources</span>
            </h2>
          </div>
          <div>
            <p>See how we’ve helped clients achieve their real estate dreams, one successful move at a time.</p>
            <a href="#blog" className="pill-btn">Visit Our Blog <span className="arrow">→</span></a>
          </div>
        </div>
        <div className="blog-list">
          {posts.map((post) => (
            <article className="blog-row" key={post.title}>
              <div className="blog-text">
                <div className="date">{post.date}</div>
                <h3>{post.title}</h3>
                <p>{post.text}</p>
                <a href="#read" className="pill-btn outline">Read More <span className="arrow">→</span></a>
              </div>
              <div className={`blog-image ${post.className}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
