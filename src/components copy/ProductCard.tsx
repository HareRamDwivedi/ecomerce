import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Heart, ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCart } from "../context/CartContext"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const { dispatch } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link to={`/products/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={handleAddToCart}
              className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-colors duration-200 flex items-center space-x-2"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Add to Cart</span>
            </button>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
          >
            <Heart
              className={`h-5 w-5 ${
                isLiked ? "fill-red-500 text-red-500" : "text-gray-600"
              } transition-colors duration-200`}
            />
          </button>

          {/* Sale Badge */}
          {product.originalPrice && (
            <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Sale
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-6 space-y-3">
          <div>
            <h3 className="font-serif text-lg text-gray-800 group-hover:text-amber-600 transition-colors duration-200">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 capitalize">{product.category}</p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-gray-800">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            {product.materials.slice(0, 2).map((material, index) => (
              <span key={index} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                {material}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
