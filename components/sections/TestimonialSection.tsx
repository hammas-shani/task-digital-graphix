export default function TestimonialSection() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="testimonial-head">
          <h2>
            Don’t Take <span>Our Word for It.</span>
          </h2>
        </div>
        <div className="testimonial-wrap">
          <div className="testimonial-image" />
          <div className="testimonial-side">
            <div className="slider-dots">
              <div className="line" />
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span style={{ marginLeft: '14px', fontSize: '36px', lineHeight: 1 }}>”</span>
            </div>
            <div className="testimonial-quote">
              “Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He’s a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!”
            </div>
            <div className="testimonial-meta">
              <span>Bernadette Hogan</span>
              <span>/</span>
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
