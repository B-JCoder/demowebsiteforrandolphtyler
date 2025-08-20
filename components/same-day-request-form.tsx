"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Send } from "lucide-react"

export function SameDayRequestForm() {
  const [formData, setFormData] = useState({
    partNeeded: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    deliveryMethod: "pickup",
    preferredTime: "",
    customerName: "",
    phone: "",
    email: "",
    additionalNotes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const phoneNumber = "+15123259923"

    const deliveryInfo =
      formData.deliveryMethod === "delivery" ? "Same-day delivery ($15 fee)" : "Pickup at store location (Free)"

    const message = `🚗 SAME-DAY PARTS REQUEST - Tyler Auto Parts

Customer: ${formData.customerName}
Phone: ${formData.phone}
Email: ${formData.email}

PART NEEDED:
${formData.partNeeded}

VEHICLE:
${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel}

SERVICE:
${deliveryInfo}
Preferred Time: ${formData.preferredTime || "ASAP"}

${formData.additionalNotes ? `Additional Notes: ${formData.additionalNotes}` : ""}

Please confirm availability and pricing for same-day service.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    console.log("[v0] Form submitted:", formData)
    alert("Request sent to WhatsApp! We'll contact you within 30 minutes with availability and pricing.")

    setIsSubmitting(false)
    // Reset form
    setFormData({
      partNeeded: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      deliveryMethod: "pickup",
      preferredTime: "",
      customerName: "",
      phone: "",
      email: "",
      additionalNotes: "",
    })
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl font-heading flex items-center">
          <Clock className="h-6 w-6 mr-2 text-accent" />
          Request Your Parts
        </CardTitle>
        <p className="text-muted-foreground">
          Fill out the form below and we'll get back to you within 30 minutes with availability and pricing.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Part Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Part Information</h3>

            <div>
              <Label htmlFor="partNeeded">What part do you need? *</Label>
              <Textarea
                id="partNeeded"
                placeholder="e.g., Brake pads for front wheels, Car battery, Oil filter, etc."
                value={formData.partNeeded}
                onChange={(e) => setFormData({ ...formData, partNeeded: e.target.value })}
                required
                className="mt-1"
              />
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Vehicle Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="vehicleMake">Make *</Label>
                <Input
                  id="vehicleMake"
                  placeholder="e.g., Toyota"
                  value={formData.vehicleMake}
                  onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="vehicleModel">Model *</Label>
                <Input
                  id="vehicleModel"
                  placeholder="e.g., Camry"
                  value={formData.vehicleModel}
                  onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="vehicleYear">Year *</Label>
                <Select
                  value={formData.vehicleYear}
                  onValueChange={(value) => setFormData({ ...formData, vehicleYear: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Delivery Method</h3>

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
                  <div className="font-medium">Same-day delivery</div>
                  <div className="text-sm text-muted-foreground">$15 delivery fee - Within San Antonio city limits</div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Preferred Time */}
          <div>
            <Label htmlFor="preferredTime">Preferred Time (Today)</Label>
            <Select
              value={formData.preferredTime}
              onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select preferred time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">As soon as possible</SelectItem>
                <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-heading">Contact Information</h3>

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
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any additional information that might help us find the right part..."
              value={formData.additionalNotes}
              onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
              className="mt-1"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending Request..."
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send Request
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
