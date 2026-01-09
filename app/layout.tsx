import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "स्वप्निल ज्वेलर्स | Pure Gold Craftsmanship",
  description:
    "Experience the finest gold jewellery crafted with generations of expertise. Pure gold rings, bangles, necklaces, chains & bracelets.",
  keywords: ["gold jewellery", "pure gold", "rings", "bangles", "necklaces", "Indian jewellery", "स्वप्निल ज्वेलर्स"],
  generator: 'v0.app'
}

export const viewport = {
  themeColor: "#c9a87c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
