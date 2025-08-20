import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Quick Contact */}
      <Card className="border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center text-accent">
            <Phone className="h-5 w-5 mr-2" />
            Need Parts Right Now?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">For immediate assistance and same-day requests, call us directly:</p>
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-3">
            <Phone className="h-4 w-4 mr-2" />
            Call (210) 555-0123
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Available during business hours for immediate assistance
          </p>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Business Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Monday - Friday</span>
              <span className="text-muted-foreground">7:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Saturday</span>
              <span className="text-muted-foreground">8:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sunday</span>
              <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-xs text-green-800">
              <strong>Same-Day Guarantee:</strong> Submit requests before 2:00 PM for same-day fulfillment
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Location & Contact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Location & Contact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium flex items-center mb-1">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                Address
              </p>
              <p className="text-muted-foreground ml-6">
                Tyler Auto Parts
                <br />
                San Antonio, TX
                <br />
                (Exact address provided upon request)
              </p>
            </div>

            <div>
              <p className="font-medium flex items-center mb-1">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                Phone
              </p>
              <p className="text-muted-foreground ml-6">(210) 555-0123</p>
            </div>

            <div>
              <p className="font-medium flex items-center mb-1">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                Email
              </p>
              <p className="text-muted-foreground ml-6">info@tylerautoparts.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Services */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            Additional Services
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-medium">Business Accounts</p>
                <p className="text-muted-foreground">Special pricing for repair shops and fleet operators</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-medium">Part Sourcing</p>
                <p className="text-muted-foreground">Can't find it? We'll locate hard-to-find parts</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <p className="font-medium">Delivery Service</p>
                <p className="text-muted-foreground">Same-day delivery within San Antonio city limits</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
