export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  materials: string[]
  images: string[]
  category: "rings" | "necklaces" | "earrings" | "bracelets"
  featured?: boolean
  inStock: boolean
}

export interface CartItem extends Product {
  quantity: number
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}
