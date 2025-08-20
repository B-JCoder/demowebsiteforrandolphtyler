import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Montserrat } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { WhatsAppButton } from "@/components/whatsapp-button"

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Same-Day Auto Parts | San Antonio | Randolph Tyler Auto Parts",
  description:
    "Fast, reliable auto parts delivery in San Antonio. Same-day fulfillment, local stock, trusted service. Get what you need, when you need it.",
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable} antialiased`}>
      <body>
        <CartProvider>
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  )
}
