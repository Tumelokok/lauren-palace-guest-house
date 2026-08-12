import Link from "next/link"

import MobileMenu from "./MobileMenu"
import Navigation from "./Navigation"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Lauren Palace Guest House
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Navigation />
          <Link
            href="/rooms"
            className="rounded-full bg-amber-900 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-800"
          >
            Book Now
          </Link>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
