import { GoldDivider, SectionDivider } from "./decorative-elements"

const features = [
  {
    title: "100% Pure Gold",
    description: "BIS hallmarked gold with certification for your complete peace of mind.",
  },
  {
    title: "Trusted Craftsmanship",
    description: "Master artisans with skills honed over generations.",
  },
  {
    title: "Elegant Designs",
    description: "Traditional to contemporary pieces for every occasion.",
  },
  {
    title: "Customer-First Service",
    description: "Personalized attention and after-sales service guaranteed.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <SectionDivider className="mb-6" />
          <p className="text-xs font-sans font-medium tracking-[0.35em] uppercase text-primary/80 mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-5">The स्वप्निल Difference</h2>
          <p className="text-base font-sans text-muted-foreground max-w-xl mx-auto leading-relaxed">
            When you choose us, you choose excellence, trust, and a commitment to quality that has stood the test of
            time.
          </p>
          <GoldDivider className="mx-auto mt-8" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-background rounded-lg border border-border/30 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              {/* Gold diamond accent */}
              <div className="w-8 h-8 mb-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary/70" fill="currentColor">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.8-6.4 4.8 2.4-7.4-6-4.6h7.6z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-soft-pink/50 rounded-full border border-primary/20">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            <span className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-foreground">
              BIS Hallmarked Gold &bull; Certified Purity
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
