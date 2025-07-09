export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=480"
                alt="Artisan at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-serif text-gray-800">
                Crafted with Passion,
                <span className="block text-amber-600">Made with Love</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hi, I'm HareRam, and I've been creating handmade jewelry for over 8 years. What started as a hobby in my
                small studio has grown into a passion for creating unique, meaningful pieces that tell stories.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every piece is carefully handcrafted using traditional techniques combined with modern design
                sensibilities. I source only the finest materials - from ethically sourced gemstones to recycled
                precious metals - ensuring each creation is as beautiful as it is responsible.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-amber-600">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
