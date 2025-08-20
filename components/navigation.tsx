"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ShoppingCart, Phone } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { CartSlideOut } from "@/components/cart-slide-out"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state, dispatch } = useCart()

  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0)

  const handleCallNow = () => {
    window.location.href = "tel:+15123259923"
  }

  return (
    <>
      <nav className="bg-primary text-primary-foreground shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold font-heading">
                Tyler Auto Parts
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/same-day-requests"
                  className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Same-Day Requests
                </Link>
                <Link
                  href="/categories"
                  className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Categories
                </Link>
                <Link
                  href="/about"
                  className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary/80"
                onClick={handleCallNow}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary/80 relative"
                onClick={() => dispatch({ type: "TOGGLE_CART" })}
              >
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs min-w-[1.25rem] h-5">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary/80 relative"
                onClick={() => dispatch({ type: "TOGGLE_CART" })}
              >
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs min-w-[1.25rem] h-5">
                    {totalItems}
                  </Badge>
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-primary-foreground hover:bg-primary/80"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-primary border-t border-primary/20 shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="block hover:bg-primary/80 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/same-day-requests"
                  className="block hover:bg-primary/80 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Same-Day Requests
                </Link>
                <Link
                  href="/categories"
                  className="block hover:bg-primary/80 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  href="/about"
                  className="block hover:bg-primary/80 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block hover:bg-primary/80 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full justify-start text-primary-foreground hover:bg-primary/80 px-3 py-2"
                  onClick={() => {
                    handleCallNow()
                    setIsMenuOpen(false)
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      <CartSlideOut />
    </>
  )
}
