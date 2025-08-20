import { CheckCircle, Award, Users, Clock } from "lucide-react"

export function AboutHomeSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-navy">About Tyler Auto Parts</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your trusted local auto parts experts in San Antonio, delivering quality and reliability since day one.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Founded by Randolph Tyler, we've built our reputation on providing fast, reliable service to the San
              Antonio community. From same-day delivery to expert advice, we're here to keep your vehicle running
              smoothly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy mb-1">Quality Guaranteed</h4>
                  <p className="text-sm text-gray-600">Only trusted brands and quality parts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy mb-1">Same-Day Service</h4>
                  <p className="text-sm text-gray-600">Fast delivery when you need it most</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy mb-1">Local Experts</h4>
                  <p className="text-sm text-gray-600">San Antonio owned and operated</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy mb-1">15+ Years Experience</h4>
                  <p className="text-sm text-gray-600">Trusted by local mechanics</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/auto-parts-store-owner.png"
              alt="Randolph Tyler at Tyler Auto Parts"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Serving San Antonio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
