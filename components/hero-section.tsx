import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin, Shield } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary opacity-90"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading mb-6 sm:mb-8 leading-tight">
            Need Auto Parts Same Day in <span className="text-accent">San Antonio</span>?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-12 text-primary-foreground/90 max-w-4xl mx-auto font-medium leading-relaxed">
            Fast, Reliable, Local—Get What You Need, When You Need It
          </p>
          <Link href="/same-day-requests">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
            >
              Start Your Request
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="bg-accent/20 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-heading">Same-Day Guarantee</h3>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Submit before 2 PM for guaranteed same-day fulfillment
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="bg-accent/20 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-heading">Local San Antonio</h3>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Proudly serving the San Antonio community since day one
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center hover:bg-white/15 transition-all duration-300 border border-white/20">
            <div className="bg-accent/20 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-heading">Trusted Quality</h3>
            <p className="text-sm sm:text-base text-primary-foreground/80 leading-relaxed">
              Owner-operated business with personalized service
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
