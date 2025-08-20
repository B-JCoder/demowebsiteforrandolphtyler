import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Battery, Disc, Wrench, Filter, Zap, Car, Droplets } from "lucide-react"
import Link from "next/link"

export function FeaturedCategories() {
  const categories = [
    {
      icon: Battery,
      name: "Batteries & Electrical",
      slug: "batteries-electrical",
      description: "Car batteries, alternators, starters, and electrical components",
      items: "35+ items",
    },
    {
      icon: Disc,
      name: "Brakes & Suspension",
      slug: "brakes-suspension",
      description: "Brake pads, rotors, calipers, shocks, and suspension parts",
      items: "25+ items",
    },
    {
      icon: Filter,
      name: "Engine & Cooling",
      slug: "engine-cooling",
      description: "Air filters, oil filters, radiators, and cooling system parts",
      items: "35+ items",
    },
    {
      icon: Wrench,
      name: "Transmission & Drivetrain",
      slug: "transmission-drivetrain",
      description: "Clutch kits, CV axles, U-joints, and drivetrain components",
      items: "20+ items",
    },
    {
      icon: Zap,
      name: "Fluids & Maintenance",
      slug: "fluids-maintenance",
      description: "Motor oil, transmission fluid, coolant, and maintenance fluids",
      items: "25+ items",
    },
    {
      icon: Car,
      name: "Lighting & Accessories",
      slug: "lighting-accessories",
      description: "Headlights, tail lights, fog lights, and automotive accessories",
      items: "25+ items",
    },
    {
      icon: Droplets,
      name: "Interior & Exterior Essentials",
      slug: "interior-exterior-essentials",
      description: "Floor mats, mirrors, door handles, and interior/exterior parts",
      items: "20+ items",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-navy">Shop by Category</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find the exact parts you need from our organized categories. Each category contains hundreds of quality
            parts from trusted brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-navy/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-navy/20 transition-colors">
                  <category.icon className="h-10 w-10 text-navy" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-navy">{category.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{category.description}</p>
                <p className="text-accent font-semibold mb-6">{category.items}</p>
                <Link href={`/categories/${category.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full border-navy text-navy hover:bg-navy hover:text-white transition-all bg-transparent"
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
            <Button size="lg" className="px-8 py-4 text-lg">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
