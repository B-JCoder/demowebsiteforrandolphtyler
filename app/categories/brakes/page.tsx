import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { CategoryBreadcrumb } from "@/components/category-breadcrumb"
import { Disc } from "lucide-react"

export default function BrakesPage() {
  const brakeProducts = [
    {
      id: "1",
      name: "Wagner ThermoQuiet Brake Pads",
      description: "Ceramic brake pads, front set",
      price: "$79.99",
      image: "/brake-pads-close-up.png",
      inStock: true,
      features: ["Ceramic Formula", "Low Dust", "Quiet Operation"],
    },
    {
      id: "2",
      name: "ACDelco Professional Rotors",
      description: "Vented disc brake rotors, pair",
      price: "$129.99",
      image: "/brake-rotors.png",
      inStock: true,
      features: ["Vented Design", "Heat Dissipation", "OE Quality"],
    },
    {
      id: "3",
      name: "Brembo Premium Brake Pads",
      description: "Semi-metallic brake pads, rear set",
      price: "$89.99",
      image: "/premium-brake-pads.png",
      inStock: true,
      features: ["Semi-Metallic", "High Performance", "European Quality"],
    },
    {
      id: "4",
      name: "Raybestos R-Line Rotors",
      description: "Slotted performance rotors",
      price: "$159.99",
      image: "/placeholder-o4hsl.png",
      inStock: false,
      features: ["Slotted Design", "Performance Grade", "Better Cooling"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryBreadcrumb category="Brakes" />

        {/* Category Header */}
        <div className="flex items-center mb-8">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mr-4">
            <Disc className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading">Brake Parts</h1>
            <p className="text-lg text-muted-foreground">Brake pads, rotors, and complete brake systems</p>
          </div>
        </div>

        <ProductGrid products={brakeProducts} />
      </div>

      <Footer />
    </main>
  )
}
