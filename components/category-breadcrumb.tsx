import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface CategoryBreadcrumbProps {
  categoryName: string
}

export function CategoryBreadcrumb({ categoryName }: CategoryBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
      <Link href="/" className="flex items-center text-white/80 hover:text-white transition-colors">
        <Home className="h-4 w-4 mr-1" />
        Home
      </Link>
      <ChevronRight className="h-4 w-4 text-white/60" />
      <Link href="/categories" className="text-white/80 hover:text-white transition-colors">
        Categories
      </Link>
      <ChevronRight className="h-4 w-4 text-white/60" />
      <span className="text-white font-medium">{categoryName}</span>
    </nav>
  )
}
