import Link from "next/link"

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

/**
 * Reusable desktop navigation for the Lauren Palace Guest Platform.
 *
 * This component renders a semantic navigation landmark with a compact list of
 * primary routes, using smooth hover feedback and a minimal visual treatment.
 */
export default function Navigation() {
  return (
    <nav aria-label="Primary Navigation" className="flex items-center">
      <ul className="flex items-center gap-6">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-amber-800"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
