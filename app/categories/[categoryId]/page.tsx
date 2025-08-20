import { notFound } from "next/navigation"
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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryBreadcrumb categoryName={category.name} />
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">{category.name}</h1>
          <p className="text-gray-300 text-lg max-w-2xl">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <SearchBar />
        </div>

        <div className="mb-6">
          <h2 className="font-montserrat font-semibold text-xl text-navy-900 mb-2">
            {products.length} Products Available
          </h2>
          <p className="text-gray-600">Same-day pickup and delivery available in San Antonio</p>
        </div>

        <ProductGrid products={products} />
      </div>
    </div>
  )
}
