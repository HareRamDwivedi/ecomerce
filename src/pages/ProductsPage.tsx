"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import { Filter, Search } from "lucide-react"

export default function ProductsPage() {
  const [searchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all")
  const [priceRange, setPriceRange] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const categories = ["all", "rings", "necklaces", "earrings", "bracelets"]
  const priceRanges = [
    { label: "All Prices", value: "all" },
    { label: "Under $75", value: "0-75" },
    { label: "$75 - $150", value: "75-150" },
    { label: "Over $150", value: "150+" },
  ]

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

      const matchesPrice = (() => {
        if (priceRange === "all") return true
        if (priceRange === "0-75") return product.price < 75
        if (priceRange === "75-150") return product.price >= 75 && product.price <= 150
        if (priceRange === "150+") return product.price > 150
        return true
      })()

      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchTerm, selectedCategory, priceRange])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl lg:text-5xl font-serif text-gray-800">Our Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of handcrafted jewelry, each piece unique and made with love.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-50"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>

            {/* Filters (Desktop) */}
            <div className={`flex flex-col sm:flex-row gap-4 ${showFilters ? "block" : "hidden lg:flex"}`}>
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">No products found</p>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}
