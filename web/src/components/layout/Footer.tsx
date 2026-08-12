import Link from "next/link"

import Container from "./Container"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

/**
 * Reusable footer for the Lauren Palace Guest Platform.
 *
 * The layout is divided into four semantic content regions, with responsive
 * stacking for smaller screens and a refined editorial tone for the premium
 * ecosystem brand.
 */
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Lauren Palace Guest
            </h2>
            <p className="text-sm leading-6 text-slate-600">
              Luxury accommodation designed to make every stay comfortable,
              elegant and memorable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-amber-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              Contact Information
            </h2>
            <ul className="space-y-2 text-sm">
              <li>Phone</li>
              <li>Email</li>
              <li>Address</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">Ecosystem</h2>
            <p className="text-sm font-medium text-slate-900">
              Lauren Palace Student Accommodation
            </p>
            <p className="text-sm leading-6 text-slate-600">
              Looking for long-term student accommodation? Visit our student
              residence.
            </p>
          </section>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 Lauren Palace Guest House. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
