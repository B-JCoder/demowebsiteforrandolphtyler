import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturedCategories } from "@/components/featured-categories"
import { StatsSection } from "@/components/stats-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <FeaturedCategories />
      <StatsSection />
      <WhyChooseUs />
      <CTASection />
      <Testimonials />
      <Footer />
    </main>
  )
}
