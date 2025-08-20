"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, MessageSquare } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Contact form submitted:", formData)
    alert("Message sent successfully! We'll get back to you within 24 hours.")

    setIsSubmitting(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl font-heading flex items-center">
          <MessageSquare className="h-6 w-6 mr-2 text-accent" />
          Send us a Message
        </CardTitle>
        <p className="text-muted-foreground">
          Have a question or need help finding a specific part? We're here to help!
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(210) 555-0123"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Select value={formData.subject} onValueChange={(value) => setFormData({ ...formData, subject: value })}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="What can we help you with?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="parts-inquiry">Parts Inquiry</SelectItem>
                <SelectItem value="same-day-request">Same-Day Request</SelectItem>
                <SelectItem value="pricing">Pricing Question</SelectItem>
                <SelectItem value="business-account">Business Account</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us how we can help you..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="mt-1 min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending Message..."
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
