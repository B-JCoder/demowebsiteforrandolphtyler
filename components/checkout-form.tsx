"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart, CreditCard, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function CheckoutForm() {
  const { state, dispatch } = useCart()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    deliveryMethod: "pickup",
    preferredTime: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "cash",
  })

  const getSubtotal = () => {
    return state.items.reduce((total, item) => {
      const price = Number.parseFloat(item.price.replace("$", ""))
      return total + price * item.quantity
    }, 0)
  }

  const getDeliveryFee = () => {
    return formData.deliveryMethod === "delivery" ? 15 : 0
  }

  const getTotal = () => {
    return getSubtotal() + getDeliveryFee()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const phoneNumber = "+15123259923"

    // Format order details for WhatsApp
    const orderDetails = state.items.map((item) => `• ${item.name} (Qty: ${item.quantity}) - ${item.price}`).join("\n")

    const deliveryInfo =
      formData.deliveryMethod === "delivery"
        ? `Delivery Address: ${formData.address}, ${formData.city}, ${formData.zipCode}`
        : "Pickup at store location"

    const message = `🚗 NEW ORDER - Tyler Auto Parts
    
Customer: ${formData.customerName}
Phone: ${formData.phone}
Email: ${formData.email}

ORDER DETAILS:
${orderDetails}

Subtotal: $${getSubtotal().toFixed(2)}
${formData.deliveryMethod === "delivery" ? `Delivery Fee: $${getDeliveryFee().toFixed(2)}` : ""}
TOTAL: $${getTotal().toFixed(2)}

${deliveryInfo}
Preferred Time: ${formData.preferredTime || "Not specified"}
Payment Method: ${formData.paymentMethod}

Please confirm this order and provide pickup/delivery time.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    console.log("[v0] Order submitted:", {
      items: state.items,
      customer: formData,
      total: getTotal(),
    })

    alert("Order sent to WhatsApp! We'll confirm your order within 30 minutes.")
    dispatch({ type: "CLEAR_CART" })
    router.push("/")

    setIsSubmitting(false)
  }

  if (state.items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold font-heading mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Add some items to your cart before checking out.</p>
        <Button onClick={() => router.push("/categories")}>Browse Categories</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="sticky top-4">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-3 pb-3 border-b last:border-b-0">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm leading-tight">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <span className="font-semibold text-sm">{item.price}</span>
              </div>
            ))}

            <div className="space-y-2 pt-4 border-t">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${getSubtotal().toFixed(2)}</span>
              </div>
              {formData.deliveryMethod === "delivery" && (
                <div className="flex justify-between">
                  <span>Delivery Fee:</span>
                  <span>${getDeliveryFee().toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span className="text-accent">${getTotal().toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Checkout Form */}
      <div className="lg:col-span-2 space-y-6">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="customerName">Full Name *</Label>
              <Input
                id="customerName"
                placeholder="Your full name"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                required
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(210) 555-0123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Delivery Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={formData.deliveryMethod}
              onValueChange={(value) => setFormData({ ...formData, deliveryMethod: value })}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                  <div className="font-medium">Pickup at our location</div>
                  <div className="text-sm text-muted-foreground">Free - Ready within 2-4 hours</div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                  <div className="font-medium">Same-day delivery - $15.00</div>
                  <div className="text-sm text-muted-foreground">Within San Antonio city limits</div>
                </Label>
              </div>
            </RadioGroup>

            {formData.deliveryMethod === "delivery" && (
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <Input
                    id="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    className="mt-1"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="San Antonio"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      placeholder="78201"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Preferred Time */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Preferred Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As soon as possible</SelectItem>
                <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={formData.paymentMethod}
              onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash" className="flex-1 cursor-pointer">
                  <div className="font-medium">
                    Cash on {formData.deliveryMethod === "delivery" ? "Delivery" : "Pickup"}
                  </div>
                  <div className="text-sm text-muted-foreground">Pay when you receive your parts</div>
                </Label>
              </div>

              <div className="flex items-center space-x-2 p-3 border rounded-lg">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex-1 cursor-pointer">
                  <div className="font-medium">Credit/Debit Card</div>
                  <div className="text-sm text-muted-foreground">We'll call to process payment</div>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing Order..." : `Submit Order - $${getTotal().toFixed(2)}`}
        </Button>
      </div>
    </form>
  )
}
