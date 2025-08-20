import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SameDayRequestForm } from "@/components/same-day-request-form"
import { SameDayInfo } from "@/components/same-day-info"

export default function SameDayRequestsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Same-Day Parts Request</h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Need auto parts today? Submit your request and we'll have it ready for pickup or delivery within hours.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <SameDayRequestForm />
          </div>

          {/* Info Section */}
          <div className="lg:col-span-1">
            <SameDayInfo />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
