import type { HTMLAttributes, ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Reusable page container for the Lauren Palace ecosystem.
 *
 * It centers content horizontally, constrains the maximum width, and applies
 * responsive horizontal padding while allowing consumers to extend the layout
 * with additional class names.
 */
interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
