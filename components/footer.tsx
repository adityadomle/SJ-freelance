import { MapPin, Phone, Clock, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-serif font-semibold tracking-wide text-rose-gold">स्वप्निल ज्वेलर्स</span>
            </Link>
            <p className="text-sm font-sans text-background/60 leading-relaxed mb-6 max-w-sm">
              Crafting timeless gold jewellery with generations of expertise. Where tradition meets elegance, and every
              piece tells a story of purity.
            </p>

            {/* Social / WhatsApp */}
            <a
              href="https://wa.me/919673622295?text=Hi%2C%20I%20am%20interested%20in%20your%20jewellery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white text-xs font-sans font-medium tracking-[0.15em] uppercase rounded-full hover:bg-green-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-background mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Collections", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm font-sans text-background/60 hover:text-rose-gold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-background mb-5">
              Visit Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rose-gold shrink-0 mt-0.5" />
                <span className="text-sm font-sans text-background/60">
                  123 Jewellery Lane, Gold Market,
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rose-gold shrink-0" />
                <span className="text-sm font-sans text-background/60">+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rose-gold shrink-0" />
                <span className="text-sm font-sans text-background/60">info@swapniljewellers.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-rose-gold shrink-0" />
                <span className="text-sm font-sans text-background/60">Mon-Sat: 10AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs font-sans text-background/40">&copy; 2025 स्वप्निल ज्वेलर्स. All rights reserved.</p>
          <p className="text-xs font-sans text-background/40">Crafted with care for generations of elegance</p>
        </div>
      </div>
    </footer>
  )
}
