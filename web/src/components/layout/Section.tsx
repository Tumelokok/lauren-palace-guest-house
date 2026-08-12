import type { HTMLAttributes, ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Semantic section wrapper for page-level content blocks.
 *
 * This component provides a concise layout primitive for the Lauren Palace
 * ecosystem with sensible vertical rhythm and full compatibility with native
 * HTML section attributes.
 */
interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 lg:py-24", className)}
      {...props}
    >
      {children}
    </section>
  )
}
