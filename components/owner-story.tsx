import { Card, CardContent } from "@/components/ui/card"
import { Quote, MapPin, Users, Wrench } from "lucide-react"

export function OwnerStory() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Owner Photo and Quote */}
          <div>
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <blockquote className="text-lg italic text-muted-foreground mb-6">
                  "I started Tyler Auto Parts because I saw too many people waiting days or weeks for the parts they
                  needed to get back on the road. In San Antonio, we move fast, and your auto parts supplier should
                  too."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold font-heading text-lg">Randolph Tyler</p>
                    <p className="text-muted-foreground">Owner & Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Story Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tyler Auto Parts was founded with a simple mission: provide San Antonio with the fastest, most reliable
                auto parts service in the city. Owner Randolph Tyler, a lifelong San Antonio resident, recognized that
                local mechanics and vehicle owners needed a better solution.
              </p>
              <p>
                After years of working in the automotive industry, Randolph saw the frustration caused by long wait
                times and unreliable suppliers. He decided to create something different - a local business that
                prioritizes speed, quality, and personal service.
              </p>
              <p>
                Today, Tyler Auto Parts serves hundreds of satisfied customers across San Antonio, from individual car
                owners to professional repair shops. Our commitment to same-day fulfillment and transparent pricing has
                made us the go-to source for auto parts in the area.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-accent mr-3" />
                <div>
                  <p className="font-semibold">Local Roots</p>
                  <p className="text-sm text-muted-foreground">Born and raised in San Antonio</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-accent mr-3" />
                <div>
                  <p className="font-semibold">Community Focus</p>
                  <p className="text-sm text-muted-foreground">Supporting local mechanics and drivers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
