import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Need Parts Today?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't wait days for shipping. Get the auto parts you need delivered same-day in San Antonio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Now</h3>
            <p className="text-lg">(512) 325-9923</p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Same-Day Service</h3>
            <p className="text-lg">Order by 2 PM</p>
          </div>
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">San Antonio Area</h3>
            <p className="text-lg">Free delivery over $50</p>
          </div>
        </div>

        <div className="text-center space-x-4">
          <Link href="/same-day-requests">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg bg-white text-accent hover:bg-gray-100">
              Request Same-Day Parts
            </Button>
          </Link>
          <Link href="/categories">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-accent bg-transparent"
            >
              Browse Catalog
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
