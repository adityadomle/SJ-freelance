"use client"

import { useState } from "react"

interface JewelleryItem {
  id: number
  category: string
  name: string
  weight: string
  image: string
}

export default function JewelleryCard({ item }: { item: JewelleryItem }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-soft-pink/20">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Shine effect on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={isHovered ? { animation: "shine 0.8s ease-in-out" } : undefined}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quick Action */}
        <a
          href={`https://wa.me/917796869904?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(item.name)}%20(${item.weight})`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-card text-foreground text-xs font-sans font-medium tracking-[0.15em] uppercase rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-primary hover:text-primary-foreground flex items-center gap-2"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Inquire
        </a>
      </div>

      {/* Content */}
      <div className="p-3 lg:p-5">
        <h3 className="text-sm lg:text-lg font-serif font-medium text-foreground mb-1.5 lg:mb-2 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[10px] lg:text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground">{item.category}</span>
          <span className="text-sm lg:text-base font-serif font-medium text-primary">{item.weight}</span>
        </div>
      </div>
    </div>
  )
}
