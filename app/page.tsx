import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import WhySection from '../components/sections/WhySection'
import ProcessSection from '../components/sections/ProcessSection'
import ServicesSection from '../components/sections/ServicesSection'
import BlogSection from '../components/sections/BlogSection'
import TestimonialSection from '../components/sections/TestimonialSection'
import HelpSection from '../components/sections/HelpSection'
import CtaBanner from '../components/sections/CtaBanner'

export default function Page() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <WhySection />
      <ProcessSection />
      <ServicesSection />
      <BlogSection />
      <TestimonialSection />
      <HelpSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
