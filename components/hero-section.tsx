import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin, Shield } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="text-center">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-0">
            Need Auto Parts Same Day in <span className="text-accent block sm:inline">San Antonio</span>?
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 lg:mb-12 text-primary-foreground/90 max-w-4xl mx-auto font-medium leading-relaxed px-4 sm:px-0">
            Fast, Reliable, Local—Get What You Need, When You Need It
          </p>
          <Link href="/same-day-requests">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 text-base sm:text-lg lg:text-xl rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
            >
              Start Your Request
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </Button>
          </Link>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 px-2 sm:px-0">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="bg-accent/20 rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-accent" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 font-heading">
              Same-Day Guarantee
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Submit before 2 PM for guaranteed same-day fulfillment
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="bg-accent/20 rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-accent" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 font-heading">
              Local San Antonio
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Proudly serving the San Antonio community since day one
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="bg-accent/20 rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-accent" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 font-heading">
              Trusted Quality
            </h3>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Owner-operated business with personalized service
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
