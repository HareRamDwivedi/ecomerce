import HeroSection from "@/components/HeroSection"
import FeaturedProducts from "@/components/FeaturedProducts"
import AboutSection from "@/components/AboutSection"
import Testimonials from "@/components/Testimonials"
import Newsletter from "@/components/NewsLetter"

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
