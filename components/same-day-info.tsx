import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Shield, Truck, CheckCircle } from "lucide-react"

export function SameDayInfo() {
  return (
    <div className="space-y-6">
      {/* Same-Day Guarantee */}
      <Card className="border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center text-accent">
            <Clock className="h-5 w-5 mr-2" />
            Same-Day Guarantee
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            Submit your request before <strong>2:00 PM</strong> for guaranteed same-day fulfillment.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
              <span>Response within 30 minutes</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
              <span>Parts ready in 2-4 hours</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
              <span>Same-day delivery available</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pickup Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Pickup Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Tyler Auto Parts</p>
              <p className="text-muted-foreground">San Antonio, TX</p>
            </div>
            <div>
              <p className="font-medium">Business Hours:</p>
              <div className="text-muted-foreground space-y-1">
                <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delivery Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center">
            <Truck className="h-5 w-5 mr-2" />
            Delivery Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Delivery Fee: $15</p>
              <p className="text-muted-foreground">Within San Antonio city limits</p>
            </div>
            <div>
              <p className="font-medium">Delivery Hours:</p>
              <p className="text-muted-foreground">8:00 AM - 7:00 PM, 7 days a week</p>
            </div>
            <div>
              <p className="font-medium">Delivery Radius:</p>
              <p className="text-muted-foreground">15 miles from downtown San Antonio</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            Need Help?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Call us directly:</p>
              <p className="text-accent font-semibold">(210) 555-0123</p>
            </div>
            <div>
              <p className="font-medium">Email:</p>
              <p className="text-muted-foreground">info@tylerautoparts.com</p>
            </div>
            <div className="flex items-start">
              <Shield className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
              <p className="text-muted-foreground">
                All requests are handled personally by Randolph Tyler to ensure quality and reliability.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
