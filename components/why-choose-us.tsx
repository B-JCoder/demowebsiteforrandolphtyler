import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, User, DollarSign } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Same-Day Fulfillment",
      description: "Submit your request before 2 PM and get your parts the same day",
    },
    {
      icon: MapPin,
      title: "Local Stock",
      description: "Extensive inventory right here in San Antonio for faster service",
    },
    {
      icon: User,
      title: "Trusted Owner",
      description: "Randolph Tyler personally ensures quality and reliability",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, competitive prices, honest quotes",
    },
  ]

  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another parts supplier. We're your local automotive partner committed to getting you back on
            the road fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center border-0 shadow-md">
              <CardContent className="pt-8 pb-6">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
