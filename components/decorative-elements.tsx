// Custom SVG decorative elements for luxury jewellery aesthetic

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-md h-6 ${className}`}
    >
      <path d="M0 12h160M240 12h160" stroke="currentColor" strokeWidth="1" className="text-primary/40" />
      <path d="M180 12l10-8 10 8-10 8-10-8z" fill="currentColor" className="text-primary/60" />
      <circle cx="200" cy="12" r="3" fill="currentColor" className="text-primary" />
    </svg>
  )
}

export function GoldFlourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-28 h-10 ${className}`}>
      <path
        d="M60 20c-20-15-40-10-55 0 15 10 35 15 55 0zm0 0c20-15 40-10 55 0-15 10-35 15-55 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-primary/50"
      />
      <circle cx="60" cy="20" r="4" fill="currentColor" className="text-primary" />
    </svg>
  )
}

export function CornerOrnament({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-20 ${className}`}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M0 0c0 44 36 80 80 80" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/30" />
      <path d="M0 20c0 33 27 60 60 60" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/20" />
      <circle cx="8" cy="8" r="3" fill="currentColor" className="text-primary/40" />
    </svg>
  )
}

export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary/60" fill="currentColor">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6.4-4.8-6.4 4.8 2.4-7.4-6-4.6h7.6z" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  )
}
