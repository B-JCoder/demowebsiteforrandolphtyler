import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Auto Repair",
      text: "Tyler Auto Parts has been a game-changer for my shop. Same-day delivery means I can keep my customers happy and my bays full.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      business: "Vehicle Owner",
      text: "Needed a battery on a Sunday and they came through! Randolph personally delivered it within 3 hours. Outstanding service.",
      rating: 5,
    },
    {
      name: "Carlos Martinez",
      business: "Martinez Fleet Services",
      text: "Reliable, fast, and honest pricing. We've been using Tyler Auto Parts for all our fleet needs for over 2 years.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what mechanics and vehicle owners across San Antonio are saying.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-accent/30 transition-colors">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
