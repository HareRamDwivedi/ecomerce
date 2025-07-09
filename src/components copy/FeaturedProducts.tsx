import { products } from "@/lib/data"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif text-gray-800">Featured Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved pieces, each carefully crafted with premium materials and designed to become
            treasured heirlooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors duration-200 group"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
