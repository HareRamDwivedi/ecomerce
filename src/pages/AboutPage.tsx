import { Link } from "react-router-dom"
import { Heart, Award, Users, Sparkles } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-6">About Luna Artisan</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A story of passion, craftsmanship, and the timeless beauty of handmade jewelry
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-gray-800">My Journey</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  What began as a childhood fascination with my grandmother's jewelry box has evolved into a lifelong
                  passion for creating beautiful, meaningful pieces. I'm Luna, and I've been crafting handmade jewelry
                  for over 8 years.
                </p>
                <p>
                  After studying metalworking and gemology, I established my studio with a simple mission: to create
                  jewelry that tells stories, celebrates moments, and becomes treasured heirlooms passed down through
                  generations.
                </p>
                <p>
                  Every piece is carefully handcrafted using traditional techniques combined with modern design
                  sensibilities. I source only the finest materials from ethical suppliers, ensuring each creation is as
                  beautiful as it is responsible.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Luna working in her studio"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">What I Believe In</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide every decision I make, from sourcing materials to crafting each piece
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Crafted with Love</h3>
              <p className="text-gray-600">
                Every piece is made with passion and attention to detail, ensuring uniqueness and quality.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Quality First</h3>
              <p className="text-gray-600">
                Using only premium materials and time-tested techniques to create lasting beauty.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Personal Connection</h3>
              <p className="text-gray-600">
                Building relationships with customers and creating pieces that reflect their stories.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Ethical Sourcing</h3>
              <p className="text-gray-600">
                Committed to responsible sourcing and sustainable practices in all aspects of creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">The Creative Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial inspiration to finished piece, here's how each creation comes to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Inspiration</h3>
              <p className="text-gray-600">
                Drawing inspiration from nature, art, and personal stories to create unique designs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Crafting</h3>
              <p className="text-gray-600">
                Hand-forging, setting stones, and finishing each piece with meticulous attention to detail.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Perfection</h3>
              <p className="text-gray-600">
                Final polishing and quality checks to ensure each piece meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-6">Ready to Find Your Perfect Piece?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Explore our collection or get in touch to discuss a custom creation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Shop Collection
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-amber-600 transition-colors duration-200"
            >
              Custom Orders
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
