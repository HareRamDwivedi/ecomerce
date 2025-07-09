import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <Mail className="h-12 w-12 text-white mx-auto" />
            <h2 className="text-3xl lg:text-4xl font-serif text-white">Stay in Touch</h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Be the first to know about new collections, exclusive offers, and behind-the-scenes stories.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-amber-600 font-medium rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>

          {isSubscribed && <p className="text-white font-medium">Thank you for subscribing! 💌</p>}
        </div>
      </div>
    </section>
  )
}
