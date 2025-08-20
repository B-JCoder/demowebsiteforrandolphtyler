import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Tyler Auto Parts</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted local source for same-day auto parts in San Antonio. Owner-operated with personalized
              service.
            </p>
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <span>(210) 555-0123</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@tylerautoparts.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/same-day-requests"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Same-Day Requests
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Popular Parts</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categories/batteries"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Batteries
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/brakes"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Brakes
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/filters"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Filters
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/engine"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Engine Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">Business Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Mon-Fri: 7:00 AM - 6:00 PM</span>
              </div>
              <div className="ml-6">Saturday: 8:00 AM - 4:00 PM</div>
              <div className="ml-6">Sunday: 9:00 AM - 2:00 PM</div>
              <div className="flex items-center mt-4">
                <MapPin className="h-4 w-4 mr-2" />
                <span>San Antonio, TX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Tyler Auto Parts. All rights reserved. | Same-day parts delivery in San Antonio, TX
          </p>
        </div>
      </div>
    </footer>
  )
}
