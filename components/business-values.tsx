import { Card, CardContent } from "@/components/ui/card"
import { Heart, Handshake, Zap, Target } from "lucide-react"

export function BusinessValues() {
  const values = [
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "We understand that time is money. Our streamlined processes ensure you get your parts fast, without compromising on quality.",
    },
    {
      icon: Heart,
      title: "Personal Service",
      description:
        "Every customer is treated like family. Randolph personally oversees operations to ensure you receive the attention you deserve.",
    },
    {
      icon: Handshake,
      title: "Trust & Reliability",
      description:
        "We build lasting relationships through honest pricing, quality parts, and consistent service you can count on.",
    },
    {
      icon: Target,
      title: "Local Commitment",
      description: "As a San Antonio business, we're invested in our community's success. Your success is our success.",
    },
  ]

  return (
    <section className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core principles guide everything we do at Tyler Auto Parts, from sourcing quality parts to delivering
            exceptional customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-2 hover:border-accent/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-heading mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
