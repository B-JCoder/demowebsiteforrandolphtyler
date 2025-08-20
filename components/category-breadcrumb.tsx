import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface CategoryBreadcrumbProps {
  category: string
}

export function CategoryBreadcrumb({ category }: CategoryBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link href="/" className="flex items-center hover:text-foreground transition-colors">
        <Home className="h-4 w-4 mr-1" />
        Home
      </Link>
      <ChevronRight className="h-4 w-4" />
      <Link href="/categories" className="hover:text-foreground transition-colors">
        Categories
      </Link>
      <ChevronRight className="h-4 w-4" />
      <span className="text-foreground font-medium">{category}</span>
    </nav>
  )
}
