import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { CategoryBreadcrumb } from "@/components/category-breadcrumb"
import { Battery } from "lucide-react"

export default function BatteriesPage() {
  const batteryProducts = [
    {
      id: "1",
      name: "Interstate DCS-94R Car Battery",
      description: "12V 800 CCA, 5-year warranty",
      price: "$149.99",
      image: "/car-battery.png",
      inStock: true,
      features: ["800 Cold Cranking Amps", "5-Year Warranty", "Maintenance Free"],
    },
    {
      id: "2",
      name: "Optima RedTop 34/78 Battery",
      description: "AGM starting battery, 12V 800 CCA",
      price: "$219.99",
      image: "/placeholder-mu8t3.png",
      inStock: true,
      features: ["AGM Technology", "Vibration Resistant", "15x Longer Life"],
    },
    {
      id: "3",
      name: "EverStart Maxx 94R Battery",
      description: "Lead acid battery, 12V 750 CCA",
      price: "$89.99",
      image: "/placeholder-5ardk.png",
      inStock: false,
      features: ["750 Cold Cranking Amps", "3-Year Warranty", "Budget Friendly"],
    },
    {
      id: "4",
      name: "DieHard Gold 94R Battery",
      description: "Premium battery, 12V 850 CCA",
      price: "$179.99",
      image: "/gold-car-battery.png",
      inStock: true,
      features: ["850 Cold Cranking Amps", "4-Year Warranty", "Fast Charging"],
    },
    {
      id: "5",
      name: "ACDelco Professional 94RAGM",
      description: "AGM battery, 12V 800 CCA",
      price: "$199.99",
      image: "/silver-car-battery.png",
      inStock: true,
      features: ["AGM Technology", "Spill-Proof Design", "Enhanced Durability"],
    },
    {
      id: "6",
      name: "Bosch S6 High Performance",
      description: "AGM battery, 12V 760 CCA",
      price: "$189.99",
      image: "/blue-car-battery.png",
      inStock: true,
      features: ["760 Cold Cranking Amps", "AGM Technology", "German Engineering"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoryBreadcrumb category="Batteries" />

        {/* Category Header */}
        <div className="flex items-center mb-8">
          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mr-4">
            <Battery className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-heading">Car Batteries</h1>
            <p className="text-lg text-muted-foreground">High-quality batteries for all vehicle types</p>
          </div>
        </div>

        <ProductGrid products={batteryProducts} />
      </div>

      <Footer />
    </main>
  )
}
