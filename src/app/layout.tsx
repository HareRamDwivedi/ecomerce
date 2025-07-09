// import type React from "react"
// import type { Metadata } from "next"
// import "./globals.css"
// import { CartProvider } from "../context/CartContext"
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"

// export const metadata: Metadata = {
//   title: "Hare Ram - Handcrafted Jewelry & Artisan Products",
//   description:
//     "Discover unique, handcrafted jewelry made with love. Each piece tells a story of passion, craftsmanship, and timeless beauty.",
//   keywords: "handmade jewelry, artisan jewelry, handcrafted, unique jewelry, custom jewelry",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="font-sans">
//         <CartProvider>
//           <Navbar />
//           <main>{children}</main>
//           <Footer />
//         </CartProvider>
//       </body>
//     </html>
//   )
// }


// src/app/RootLayout.tsx

import React from "react"
import "../globals.css"
import { CartProvider } from "../context/CartContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Set document metadata inside index.html or use react-helmet */}
      <CartProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </>
  )
}

export default RootLayout
