import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">Checkout</h1>
          <p className="text-lg text-primary-foreground/90">Review your order and complete your purchase</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CheckoutForm />
      </div>

      <Footer />
    </main>
  )
}
