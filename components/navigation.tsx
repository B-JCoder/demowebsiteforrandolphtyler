"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ShoppingCart, Phone } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { CartSlideOut } from "@/components/cart-slide-out"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state, dispatch } = useCart()
  const [cartAnimation, setCartAnimation] = useState(false)

  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    if (totalItems > 0) {
      setCartAnimation(true)
      const timer = setTimeout(() => setCartAnimation(false), 300)
      return () => clearTimeout(timer)
    }
  }, [totalItems])

  const handleCallNow = () => {
    window.location.href = "tel:+15123259923"
  }

  return (
    <>
      <nav className="bg-primary text-primary-foreground shadow-lg relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-lg sm:text-xl font-bold font-heading">
                Tyler Auto Parts
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-2 xl:space-x-4">
                <Link
                  href="/"
                  className="hover:bg-primary/80 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/same-day-requests"
                  className="hover:bg-primary/80 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                >
                  Same-Day Requests
                </Link>
                <Link
                  href="/categories"
                  className="hover:bg-primary/80 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Categories
                </Link>
                <Link
                  href="/about"
                  className="hover:bg-primary/80 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="hover:bg-primary/80 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary/80 text-xs xl:text-sm"
                onClick={handleCallNow}
              >
                <Phone className="h-3 w-3 xl:h-4 xl:w-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Call Now</span>
                <span className="xl:hidden">Call</span>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className={`text-primary-foreground hover:bg-primary/80 relative transition-transform ${
                  cartAnimation ? "scale-110" : "scale-100"
                }`}
                onClick={() => dispatch({ type: "TOGGLE_CART" })}
              >
                <ShoppingCart className="h-3 w-3 xl:h-4 xl:w-4" />
                {totalItems > 0 && (
                  <Badge
                    className={`absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs min-w-[1.25rem] h-5 transition-all duration-300 ${
                      cartAnimation ? "animate-bounce" : ""
                    }`}
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className={`text-primary-foreground hover:bg-primary/80 relative transition-transform p-2 ${
                  cartAnimation ? "scale-110" : "scale-100"
                }`}
                onClick={() => dispatch({ type: "TOGGLE_CART" })}
              >
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge
                    className={`absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs min-w-[1.25rem] h-5 transition-all duration-300 ${
                      cartAnimation ? "animate-bounce" : ""
                    }`}
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-primary-foreground hover:bg-primary/80 p-2"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden absolute top-14 sm:top-16 left-0 right-0 bg-primary border-t border-primary/20 shadow-lg z-40">
              <div className="px-4 pt-4 pb-6 space-y-2">
                <Link
                  href="/"
                  className="block hover:bg-primary/80 px-4 py-3 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/same-day-requests"
                  className="block hover:bg-primary/80 px-4 py-3 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Same-Day Requests
                </Link>
                <Link
                  href="/categories"
                  className="block hover:bg-primary/80 px-4 py-3 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link
                  href="/about"
                  className="block hover:bg-primary/80 px-4 py-3 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block hover:bg-primary/80 px-4 py-3 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full justify-start text-primary-foreground hover:bg-primary/80 px-4 py-3 mt-2"
                  onClick={() => {
                    handleCallNow()
                    setIsMenuOpen(false)
                  }}
                >
                  <Phone className="h-4 w-4 mr-3" />
                  Call Now: (512) 325-9923
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
