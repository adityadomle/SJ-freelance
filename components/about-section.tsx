import { SectionDivider } from "./decorative-elements"

const stats = [
  { value: "50+", label: "Years of Legacy" },
  { value: "10K+", label: "Happy Customers" },
  { value: "100%", label: "Pure Gold" },
  { value: "5000+", label: "Unique Designs" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-soft-pink/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src="/master-goldsmith-craftsman-at-work.jpg"
                    alt="Master craftsman at work"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/traditional-gold-jewellery-tools.jpg"
                    alt="Traditional jewellery tools"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-6">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/pure-gold-bars-materials.jpg"
                    alt="Pure gold materials"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src="/elegant-gold-jewellery-store-interior.jpg"
                    alt="Our jewellery store"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-7">
            <div>
              <SectionDivider className="mb-6 lg:justify-start" />
              <p className="text-xs font-sans font-medium tracking-[0.35em] uppercase text-primary/80 mb-4">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-5 leading-tight">
                A Legacy of <span className="text-primary italic">Pure Gold</span>
                <br />
                Craftsmanship
              </h2>
            </div>

            <div className="space-y-4 text-base font-sans text-muted-foreground leading-relaxed">
              <p>
                For over five decades, स्वप्निल ज्वेलर्स has been the trusted name in pure gold jewellery. What began as a
                small family workshop has grown into a beloved institution, serving generations of families with
                exquisite craftsmanship.
              </p>
              <p>
                Our master artisans bring together traditional techniques passed down through generations with
                contemporary designs, creating pieces that are both timeless and modern.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-5 bg-card rounded-lg border border-border/30">
                  <div className="text-3xl font-serif font-semibold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
