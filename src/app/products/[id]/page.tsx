"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "@/lib/data"
import { useCart } from "../../../context/CartContext"
import { Heart, ShoppingBag, Star, Truck, Shield, RotateCcw } from "lucide-react"

export default function ProductDetailPage() {
  const params = useParams()
  const { dispatch } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", payload: product })
    }
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((images, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-amber-600" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={images || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-amber-600 font-medium uppercase tracking-wide">{product.category}</span>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Heart className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
                </button>
              </div>

              <h1 className="text-3xl lg:text-4xl font-serif text-gray-800">{product.name}</h1>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-gray-800">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                {product.originalPrice && (
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Save ${product.originalPrice - product.price}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-gray-600">(24 reviews)</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Materials</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((materials, index) => (
                  <span key={index} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm">
                    {materials}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-200">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-amber-600 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="flex-1 border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-colors duration-200">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-amber-600" />
                <div>
                  <div className="font-medium text-gray-800">Free Shipping</div>
                  <div className="text-sm text-gray-600">On orders over $100</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-amber-600" />
                <div>
                  <div className="font-medium text-gray-800">Lifetime Warranty</div>
                  <div className="text-sm text-gray-600">Craftsmanship guarantee</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-amber-600" />
                <div>
                  <div className="font-medium text-gray-800">30-Day Returns</div>
                  <div className="text-sm text-gray-600">Easy returns policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
