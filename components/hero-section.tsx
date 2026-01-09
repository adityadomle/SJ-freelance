import { GoldFlourish, CornerOrnament } from "./decorative-elements"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-18">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-soft-pink/40" />

      {/* Corner ornaments */}
      <CornerOrnament className="absolute top-24 left-6 opacity-60" />
      <CornerOrnament className="absolute top-24 right-6 opacity-60" flip />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <GoldFlourish />
              </div>

              <p className="text-xs font-sans font-medium tracking-[0.35em] uppercase text-primary/80">
                Pure Gold Craftsmanship
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-foreground text-balance">
                Timeless Elegance,
                <br />
                <span className="text-primary italic">Pure Gold</span>
              </h1>
            </div>

            <p className="text-base md:text-lg font-sans text-muted-foreground max-w-lg leading-relaxed">
              Discover exquisite gold jewellery handcrafted with generations of expertise. Each piece tells a story of
              tradition, purity, and unmatched craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://wa.me/919673622295?text=Hi%2C%20I%20am%20interested%20in%20your%20jewellery%20collection"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-primary text-primary-foreground font-sans text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Inquire Now
              </a>
              <a
                href="#collections"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary/40 text-foreground font-sans text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:bg-primary/5 transition-all duration-300"
              >
                View Collections
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Decorative frame lines */}
              <div className="absolute -inset-4 border border-primary/20 rounded-sm" />
              <div className="absolute -inset-8 border border-primary/10 rounded-sm" />

              <img
                src="/elegant-gold-necklace-jewellery-on-cream-satin-bac.jpg"
                alt="Elegant gold necklace"
                className="relative z-10 w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </div>
    </section>
  )
}
