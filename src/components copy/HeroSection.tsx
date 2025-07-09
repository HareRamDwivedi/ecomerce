"use client"

import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-serif text-gray-800 leading-tight">
                Handcrafted
                <span className="block text-amber-600">Jewelry</span>
                <span className="block">with Love</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Each piece tells a story of passion, craftsmanship, and timeless beauty. Discover unique jewelry made
                with the finest materials and attention to detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors duration-200 group"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-600 text-amber-600 font-medium rounded-full hover:bg-amber-600 hover:text-white transition-colors duration-200"
              >
                My Story
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Handcrafted jewelry collection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
