import { Phone, Mail, MapPin } from "lucide-react"

export function ContactHero() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Contact Us</h1>
        <p className="text-xl text-primary-foreground/90 mb-12">
          Get in touch with Tyler Auto Parts. We're here to help with all your automotive needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Phone className="h-8 w-8 mb-3 text-accent" />
            <h3 className="font-semibold mb-1">Call Us</h3>
            <p className="text-primary-foreground/80">(210) 555-0123</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="h-8 w-8 mb-3 text-accent" />
            <h3 className="font-semibold mb-1">Email Us</h3>
            <p className="text-primary-foreground/80">info@tylerautoparts.com</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 mb-3 text-accent" />
            <h3 className="font-semibold mb-1">Visit Us</h3>
            <p className="text-primary-foreground/80">San Antonio, TX</p>
          </div>
        </div>
      </div>
    </section>
  )
}
