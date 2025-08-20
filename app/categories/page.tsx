import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CategoriesGrid } from "@/components/categories-grid"
import { SearchBar } from "@/components/search-bar"

export default function CategoriesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Auto Parts Categories</h1>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Browse our extensive inventory of quality auto parts. Can't find what you need? Just ask!
          </p>
          <SearchBar />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoriesGrid />
      </div>

      <Footer />
    </main>
  )
}
