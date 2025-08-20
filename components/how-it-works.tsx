import { Card, CardContent } from "@/components/ui/card"
import { FileText, Search, Truck } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Your Request",
      description: "Tell us what part you need with your vehicle details",
    },
    {
      icon: Search,
      title: "We Find Your Part, Fast",
      description: "Our team locates the exact part from our local inventory",
    },
    {
      icon: Truck,
      title: "Delivery or Pickup Today",
      description: "Choose same-day delivery or pickup at your convenience",
    },
  ]

  return (
    <section className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your auto parts has never been easier. Our streamlined process ensures you get what you need, when
            you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-2 hover:border-accent/50 transition-colors">
              <CardContent className="pt-8 pb-6">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
