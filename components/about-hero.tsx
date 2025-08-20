import { Shield, Award, Clock } from "lucide-react"

export function AboutHero() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">About Tyler Auto Parts</h1>
        <p className="text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
          Your trusted local source for quality auto parts in San Antonio. Owner-operated with a commitment to
          exceptional service and same-day fulfillment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 mb-4 text-accent" />
            <h3 className="text-lg font-semibold mb-2">Trusted Quality</h3>
            <p className="text-primary-foreground/80 text-sm">Only the best parts from reliable suppliers</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-12 w-12 mb-4 text-accent" />
            <h3 className="text-lg font-semibold mb-2">Same-Day Service</h3>
            <p className="text-primary-foreground/80 text-sm">Fast turnaround when you need it most</p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="h-12 w-12 mb-4 text-accent" />
            <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
            <p className="text-primary-foreground/80 text-sm">Deep knowledge of San Antonio's automotive needs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
