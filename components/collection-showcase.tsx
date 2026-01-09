"use client"

import { useState } from "react"
import JewelleryCard from "./jewellery-card"
import { GoldDivider, SectionDivider } from "./decorative-elements"

const categories = [
  { id: "all", name: "All" },
  { id: "rings", name: "Rings" },
  { id: "bangles", name: "Bangles" },
  { id: "necklaces", name: "Necklaces" },
  { id: "chains", name: "Chains" },
  { id: "bracelets", name: "Bracelets" },
]

const jewelleryItems = [
  // Rings
  {
    id: 1,
    category: "rings",
    name: "Royal Lotus Ring",
    weight: "8.5g",
    image: "/gold-lotus-flower-ring-indian-design-elegant.jpg",
  },
  {
    id: 2,
    category: "rings",
    name: "Classic Band Ring",
    weight: "6.2g",
    image: "/gold-band-ring-with-intricate-pattern-indian-jewel.jpg",
  },
  {
    id: 3,
    category: "rings",
    name: "Peacock Motif Ring",
    weight: "9.8g",
    image: "/gold-peacock-design-ring-traditional-indian.jpg",
  },
  // Bangles
  {
    id: 4,
    category: "bangles",
    name: "Temple Bangle Set",
    weight: "45g",
    image: "/gold-temple-design-bangles-set-indian-traditional.jpg",
  },
  {
    id: 5,
    category: "bangles",
    name: "Floral Carved Bangles",
    weight: "38g",
    image: "/gold-floral-carved-bangles-indian-wedding.jpg",
  },
  {
    id: 6,
    category: "bangles",
    name: "Modern Twist Bangles",
    weight: "32g",
    image: "/gold-modern-twist-design-bangles-elegant.jpg",
  },
  // Necklaces
  {
    id: 7,
    category: "necklaces",
    name: "Bridal Choker Necklace",
    weight: "85g",
    image: "/gold-bridal-choker-necklace-indian-wedding-heavy.jpg",
  },
  {
    id: 8,
    category: "necklaces",
    name: "Mango Mala Necklace",
    weight: "65g",
    image: "/gold-mango-mala-necklace-traditional-south-indian.jpg",
  },
  {
    id: 9,
    category: "necklaces",
    name: "Layered Chain Necklace",
    weight: "42g",
    image: "/gold-layered-chain-necklace-elegant-modern.jpg",
  },
  // Chains
  {
    id: 10,
    category: "chains",
    name: "Rope Chain",
    weight: "25g",
    image: "/gold-rope-chain-necklace-mens-jewellery.jpg",
  },
  {
    id: 11,
    category: "chains",
    name: "Figaro Chain",
    weight: "18g",
    image: "/gold-figaro-chain-link-necklace-elegant.jpg",
  },
  {
    id: 12,
    category: "chains",
    name: "Box Chain",
    weight: "22g",
    image: "/gold-box-chain-necklace-delicate.jpg",
  },
  // Bracelets
  {
    id: 13,
    category: "bracelets",
    name: "Mens Gold Bracelet",
    weight: "28g",
    image: "/gold-mens-bracelet-thick-links-elegant.jpg",
  },
  {
    id: 14,
    category: "bracelets",
    name: "Charm Bracelet",
    weight: "15g",
    image: "/gold-charm-bracelet-womens-elegant-indian.jpg",
  },
  {
    id: 15,
    category: "bracelets",
    name: "Tennis Bracelet",
    weight: "20g",
    image: "/gold-tennis-bracelet-elegant.jpg",
  },
]

export default function CollectionShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems =
    activeCategory === "all" ? jewelleryItems : jewelleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="collections" className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <SectionDivider className="mb-6" />
          <p className="text-xs font-sans font-medium tracking-[0.35em] uppercase text-primary/80 mb-4">
            Our Collections
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-5">Exquisite Gold Jewellery</h2>
          <p className="text-base font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Each piece is meticulously crafted by our master artisans, ensuring the highest quality and timeless beauty.
          </p>
          <GoldDivider className="mx-auto mt-8" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 text-xs font-sans font-medium tracking-[0.15em] uppercase rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Jewellery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
          {filteredItems.map((item) => (
            <JewelleryCard key={item.id} item={item} />
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-14">
          <a
            href="https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20see%20more%20designs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-primary/40 text-foreground font-sans text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:bg-primary/5 transition-all duration-300"
          >
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Request More Designs
          </a>
        </div>
      </div>
    </section>
  )
}
