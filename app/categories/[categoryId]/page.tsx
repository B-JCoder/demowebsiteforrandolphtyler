import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { categories, getProductsByCategory } from "@/lib/categories-data"
import { CategoryBreadcrumb } from "@/components/category-breadcrumb"
import { ProductGrid } from "@/components/product-grid"
import { SearchBar } from "@/components/search-bar"

interface CategoryPageProps {
  params: {
    categoryId: string
  }
}

export function generateStaticParams() {
  return categories.map((category) => ({
    categoryId: category.id,
  }))
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.id === params.categoryId)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(params.categoryId)

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryBreadcrumb categoryName={category.name} />
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">{category.name}</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">{category.description}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold font-heading text-gray-900 mb-2">{products.length} Products Available</h2>
          <p className="text-gray-600">Same-day pickup and delivery available in San Antonio</p>
        </div>

        <ProductGrid products={products} />
      </div>

      <Footer />
    </main>
  )
}
