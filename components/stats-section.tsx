export function StatsSection() {
  const stats = [
    { number: "10,000+", label: "Ready for immediate delivery" },
    { number: "2 Hours", label: "Same day service in San Antonio" },
    { number: "15+ Years", label: "Trusted by local mechanics" },
    { number: "98%", label: "Quality parts, reliable service" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your local auto parts experts delivering quality and reliability since day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-4">{stat.number}</div>
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
