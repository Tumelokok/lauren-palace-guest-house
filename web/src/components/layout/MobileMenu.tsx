"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const mobileNavigationItems = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

/**
 * Responsive mobile navigation for the Lauren Palace Guest Platform.
 *
 * The component renders a compact menu trigger, a slide-in mobile drawer, and
 * an accessible overlay that supports Escape, backdrop dismissal, focus
 * containment, and restore-to-trigger behavior.
 */
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const previousFocusedElementRef = useRef<HTMLElement | null>(null)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    previousFocusedElementRef.current = document.activeElement as HTMLElement | null

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu()
        return
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return
      }

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"))

      if (focusableElements.length === 0) {
        event.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    const handleScrollLock = () => {
      document.body.style.overflow = "hidden"
    }

    const initialFocusable = panelRef.current?.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )

    handleScrollLock()
    initialFocusable?.focus()
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
      previousFocusedElementRef.current?.focus()
    }
  }, [isOpen])

  return (
    <>
      <Button
        ref={buttonRef}
        type="button"
        variant="ghost"
        size="icon"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        onClick={() => setIsOpen((current) => !current)}
        className="rounded-full text-slate-900"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </Button>

      {isOpen ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close menu backdrop"
            onClick={closeMenu}
            className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]"
          />

          <aside
            id="mobile-menu-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className={cn(
              "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col justify-between bg-white/95 p-5 shadow-2xl transition-transform duration-300 ease-out",
              isOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Explore
              </p>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="rounded-full"
              >
                <X className="size-4" />
              </Button>
            </div>

            <nav aria-label="Mobile Navigation" className="mt-6 flex-1">
              <ul className="space-y-2">
                {mobileNavigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-100 hover:text-amber-800"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/rooms"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-full bg-amber-900 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-800"
            >
              Book Now
            </Link>
          </aside>
        </div>
      ) : null}
    </>
  )
}
