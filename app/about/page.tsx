import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { OwnerStory } from "@/components/owner-story"
import { WhyChooseUs } from "@/components/why-choose-us"
import { BusinessValues } from "@/components/business-values"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <OwnerStory />
      <BusinessValues />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
