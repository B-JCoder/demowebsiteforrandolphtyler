import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Battery, Disc3, FuelIcon as Engine, Settings, Fuel, Lightbulb, Car } from "lucide-react"
import Link from "next/link"

export function FeaturedCategories() {
  const categories = [
    {
      icon: Battery,
      name: "Batteries & Electrical",
      slug: "batteries-electrical",
      description: "Car batteries, alternators, starters, and electrical components",
      items: "35+ items",
      color: "bg-blue-500",
      hoverColor: "group-hover:bg-blue-500",
    },
    {
      icon: Disc3,
      name: "Brakes & Suspension",
      slug: "brakes-suspension",
      description: "Brake pads, rotors, calipers, shocks, and suspension parts",
      items: "25+ items",
      color: "bg-red-500",
      hoverColor: "group-hover:bg-red-500",
    },
    {
      icon: Engine,
      name: "Engine & Cooling",
      slug: "engine-cooling",
      description: "Air filters, oil filters, radiators, and cooling system parts",
      items: "35+ items",
      color: "bg-green-500",
      hoverColor: "group-hover:bg-green-500",
    },
    {
      icon: Settings,
      name: "Transmission & Drivetrain",
      slug: "transmission-drivetrain",
      description: "Clutch kits, CV axles, U-joints, and drivetrain components",
      items: "20+ items",
      color: "bg-purple-500",
      hoverColor: "group-hover:bg-purple-500",
    },
    {
      icon: Fuel,
      name: "Fluids & Maintenance",
      slug: "fluids-maintenance",
      description: "Motor oil, transmission fluid, coolant, and maintenance fluids",
      items: "25+ items",
      color: "bg-yellow-500",
      hoverColor: "group-hover:bg-yellow-500",
    },
    {
      icon: Lightbulb,
      name: "Lighting & Accessories",
      slug: "lighting-accessories",
      description: "Headlights, tail lights, fog lights, and automotive accessories",
      items: "25+ items",
      color: "bg-orange-500",
      hoverColor: "group-hover:bg-orange-500",
    },
    {
      icon: Car,
      name: "Interior & Exterior Essentials",
      slug: "interior-exterior-essentials",
      description: "Floor mats, mirrors, door handles, and interior/exterior parts",
      items: "20+ items",
      color: "bg-indigo-500",
      hoverColor: "group-hover:bg-indigo-500",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-4 sm:mb-6 text-navy">
            Shop by Category
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Find the exact parts you need from our organized categories. Each category contains hundreds of quality
            parts from trusted brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white hover:border-gray-300"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div
                  className={`${category.color} rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 ${category.hoverColor} transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:scale-110`}
                >
                  <category.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading mb-2 sm:mb-3 text-navy">{category.name}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {category.description}
                </p>
                <p className="text-accent font-semibold mb-4 sm:mb-6 text-sm sm:text-base">{category.items}</p>
                <Link href={`/categories/${category.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full border-navy text-navy hover:bg-navy hover:text-white transition-all bg-transparent text-sm sm:text-base py-2 sm:py-3"
                  >
                    Browse {category.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/categories">
            <Button size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
