"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { X, Plus, Minus, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CartSlideOut() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: id })
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
    }
  }

  const getSubtotal = () => {
    return state.items.reduce((total, item) => {
      const price = Number.parseFloat(item.price.replace("$", ""))
      return total + price * item.quantity
    }, 0)
  }

  if (!state.isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={() => dispatch({ type: "CLOSE_CART" })} />

      {/* Slide-out panel */}
      <div className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-background shadow-xl z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-background">
            <h2 className="text-lg font-semibold font-heading flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Your Cart ({state.items.length})
            </h2>
            <Button type="button" variant="ghost" size="sm" onClick={() => dispatch({ type: "CLOSE_CART" })}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mb-6">Add some items to get started</p>
                <Button
                  type="button"
                  variant="outline"
                  className="bg-transparent"
                  onClick={() => dispatch({ type: "CLOSE_CART" })}
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <Card key={item.id} className="border">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="rounded-md object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm leading-tight mb-1">{item.name}</h3>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-accent">{item.price}</span>
                            <div className="flex items-center space-x-2">
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="h-7 w-7 p-0 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="h-7 w-7 p-0 bg-transparent"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-4 space-y-4 bg-background">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Subtotal:</span>
                <span className="font-bold text-lg text-accent">${getSubtotal().toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Link href="/checkout" onClick={() => dispatch({ type: "CLOSE_CART" })}>
                  <Button type="button" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Checkout
                  </Button>
                </Link>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => dispatch({ type: "CLOSE_CART" })}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
