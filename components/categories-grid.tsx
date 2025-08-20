import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Battery, Disc, Wrench, Filter, Zap, Car, Gauge } from "lucide-react"
import Link from "next/link"

export function CategoriesGrid() {
  const categories = [
    {
      icon: Battery,
      name: "Batteries & Electrical",
      slug: "batteries-electrical",
      description: "Car batteries, alternators, starters, and electrical components",
      itemCount: "25+ items",
    },
    {
      icon: Disc,
      name: "Brakes & Suspension",
      slug: "brakes-suspension",
      description: "Brake pads, rotors, calipers, shocks, and suspension parts",
      itemCount: "25+ items",
    },
    {
      icon: Filter,
      name: "Engine & Cooling",
      slug: "engine-cooling",
      description: "Air filters, oil filters, radiators, and cooling system parts",
      itemCount: "35+ items",
    },
    {
      icon: Wrench,
      name: "Transmission & Drivetrain",
      slug: "transmission-drivetrain",
      description: "Clutch kits, CV axles, U-joints, and drivetrain components",
      itemCount: "20+ items",
    },
    {
      icon: Zap,
      name: "Fluids & Maintenance",
      slug: "fluids-maintenance",
      description: "Motor oil, transmission fluid, coolant, and maintenance fluids",
      itemCount: "25+ items",
    },
    {
      icon: Car,
      name: "Lighting & Accessories",
      slug: "lighting-accessories",
      description: "Headlights, tail lights, fog lights, and automotive accessories",
      itemCount: "25+ items",
    },
    {
      icon: Gauge,
      name: "Interior & Exterior Essentials",
      slug: "interior-exterior",
      description: "Floor mats, mirrors, door handles, and interior/exterior parts",
      itemCount: "20+ items",
    },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-heading mb-4">Shop by Category</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find the exact parts you need from our organized categories. Each category contains hundreds of quality parts
          from trusted brands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow group border-2 hover:border-accent/30">
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                <category.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
              <p className="text-xs text-accent font-medium mb-4">{category.itemCount}</p>
              <Link href={`/categories/${category.slug}`}>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors bg-transparent"
                >
                  Browse {category.name}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
