import type { Product } from "../lib copy/types"

export const products: Product[] = [
  {
    id: "1",
    name: "Golden Sunrise Ring",
    price: 89,
    originalPrice: 120,
    description:
      "Handcrafted with 14k gold-filled wire and natural citrine stone. Each piece is unique and made with love.",
    materials: ["14k Gold-filled", "Citrine", "Sterling Silver"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    category: "rings",
    featured: true,
    inStock: true,
  },
  {
    id: "2",
    name: "Moonstone Elegance Necklace",
    price: 145,
    description: "Delicate moonstone pendant on a fine gold chain. Perfect for layering or wearing alone.",
    materials: ["Moonstone", "18k Gold Plated", "Silk Cord"],
    images: ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=400&width=400"],
    category: "necklaces",
    featured: true,
    inStock: true,
  },
  {
    id: "3",
    name: "Rose Quartz Drop Earrings",
    price: 65,
    description: "Soft pink rose quartz stones in handmade gold settings. Hypoallergenic and lightweight.",
    materials: ["Rose Quartz", "Gold-filled Wire", "Sterling Silver Posts"],
    images: ["/placeholder.svg?height=400&width=400"],
    category: "earrings",
    inStock: true,
  },
  {
    id: "4",
    name: "Bohemian Charm Bracelet",
    price: 78,
    description: "Mixed metal bracelet with natural stones and vintage-inspired charms.",
    materials: ["Mixed Metals", "Turquoise", "Vintage Brass"],
    images: ["/placeholder.svg?height=400&width=400"],
    category: "bracelets",
    inStock: true,
  },
  {
    id: "5",
    name: "Pearl & Gold Statement Ring",
    price: 95,
    description: "Freshwater pearl set in a unique gold band design. A modern take on classic elegance.",
    materials: ["Freshwater Pearl", "14k Gold-filled", "Sterling Silver"],
    images: ["/placeholder.svg?height=400&width=400"],
    category: "rings",
    inStock: true,
  },
  {
    id: "6",
    name: "Amethyst Healing Necklace",
    price: 110,
    description: "Raw amethyst crystal pendant believed to promote clarity and peace.",
    materials: ["Raw Amethyst", "Leather Cord", "Silver Wire"],
    images: ["/placeholder.svg?height=400&width=400"],
    category: "necklaces",
    featured: true,
    inStock: true,
  },
]

export const testimonials = [
  {
    name: "Sarah M.",
    text: "The most beautiful jewelry I've ever owned. You can feel the love and craftsmanship in every piece.",
    rating: 5,
  },
  {
    name: "Emma L.",
    text: "I get compliments every time I wear my moonstone necklace. The quality is exceptional!",
    rating: 5,
  },
  {
    name: "Jessica R.",
    text: "Supporting a local artisan while getting gorgeous, unique pieces. Couldn't be happier!",
    rating: 5,
  },
]
