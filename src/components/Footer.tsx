import { Link } from "react-router-dom"
import { Heart, Instagram, Facebook, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-serif">Luna Artisan</span>
            </Link>
            <p className="text-gray-400">
              Handcrafted jewelry made with love and attention to detail. Each piece tells a unique story.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <div className="space-y-2">
              <Link to="/products?category=rings" className="block text-gray-400 hover:text-white transition-colors">
                Rings
              </Link>
              <Link
                to="/products?category=necklaces"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Necklaces
              </Link>
              <Link
                to="/products?category=earrings"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Earrings
              </Link>
              <Link
                to="/products?category=bracelets"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Bracelets
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-2">
              <p className="text-gray-400">hareramdwivedi03@gmail.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Hare Ram. Made with ❤️ for jewelry lovers.</p>
        </div>
      </div>
    </footer>
  )
}
