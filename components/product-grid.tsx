"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Clock, Check } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"

interface Product {
  id: string
  name: string
  description: string
  price: string
  image: string
  inStock: boolean
  features: string[]
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const { dispatch } = useCart()
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set())

  const handleAddToCart = (product: Product) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        description: product.description,
      },
    })

    setAddedItems((prev) => new Set(prev).add(product.id))
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(product.id)
        return newSet
      })
    }, 2000)

    dispatch({ type: "OPEN_CART" })
  }

  const handleRequestQuote = (productId: string, productName: string) => {
    const phoneNumber = "+15123259923"
    const message = `Hi! I'd like to request a quote for: ${productName} (Product ID: ${productId})`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
        <p className="text-gray-700 font-medium text-sm sm:text-base">Showing {products.length} products</p>
        <div className="flex items-center space-x-2 text-xs sm:text-sm">
          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
          <span className="text-gray-600">Same-day availability on most items</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/30 hover:scale-[1.02]"
          >
            <CardContent className="p-3 sm:p-4 lg:p-6">
              <div className="relative mb-3 sm:mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2">
                  {product.inStock ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 text-xs">In Stock</Badge>
                  ) : (
                    <Badge variant="secondary" className="text-xs">
                      Out of Stock
                    </Badge>
                  )}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-semibold font-heading mb-2 line-clamp-2 text-gray-900">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

              <div className="mb-3 sm:mb-4">
                <ul className="text-xs text-gray-500 space-y-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1 h-1 bg-accent rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-accent">{product.price}</span>
                {!product.inStock && <span className="text-xs text-gray-500">Call for availability</span>}
              </div>

              <div className="space-y-2">
                {product.inStock ? (
                  <Button
                    type="button"
                    className={`w-full transition-all duration-300 text-xs sm:text-sm py-2 sm:py-3 ${
                      addedItems.has(product.id)
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-accent hover:bg-accent/90 text-accent-foreground"
                    }`}
                    onClick={() => handleAddToCart(product)}
                  >
                    {addedItems.has(product.id) ? (
                      <>
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Added to Cart!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full bg-transparent text-xs sm:text-sm py-2 sm:py-3"
                    onClick={() => handleRequestQuote(product.id, product.name)}
                  >
                    Request Quote
                  </Button>
                )}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="w-full text-primary hover:text-primary hover:bg-primary/10 text-xs sm:text-sm py-1 sm:py-2"
                  onClick={() => handleRequestQuote(product.id, product.name)}
                >
                  Request Same-Day
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
