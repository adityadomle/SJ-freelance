import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CollectionShowcase from "@/components/collection-showcase"
import AboutSection from "@/components/about-section"
import WhyChooseUs from "@/components/why-choose-us"
import WhatsAppCta from "@/components/whatsapp-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CollectionShowcase />
      <AboutSection />
      <WhyChooseUs />
      <WhatsAppCta />
      <Footer />
    </main>
  )
}
