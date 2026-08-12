"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type AccordionType = "single" | "multiple"

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AccordionType
  collapsible?: boolean
  value?: string
  defaultValue?: string
  onValueChange?: (value: string | undefined) => void
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const AccordionContext = React.createContext<{
  openValue: string | undefined
  collapsible: boolean
  type: AccordionType
  onToggle: (value: string) => void
} | null>(null)

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = "single",
      collapsible = false,
      value,
      defaultValue,
      onValueChange,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [openValue, setOpenValue] = React.useState<string | undefined>(
      value ?? defaultValue,
    )

    React.useEffect(() => {
      if (value !== undefined) {
        setOpenValue(value)
      }
    }, [value])

    const handleToggle = (itemValue: string) => {
      setOpenValue((current) => {
        const nextValue = current === itemValue ? undefined : itemValue
        if (onValueChange) {
          onValueChange(nextValue)
        }
        return nextValue
      })
    }

    return (
      <AccordionContext.Provider
        value={{
          openValue,
          collapsible,
          type,
          onToggle: handleToggle,
        }}
      >
        <div ref={ref} className={cn("space-y-3", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
)

Accordion.displayName = "Accordion"

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...props }, ref) => {
    const id = React.useId()
    const context = React.useContext(AccordionContext)

    if (!context) {
      throw new Error("AccordionItem must be used within an Accordion")
    }

    const open = context.openValue === value

    return (
      <div
        ref={ref}
        id={`accordion-item-${id}`}
        className={cn("overflow-hidden rounded-[20px] border border-slate-200 bg-white", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return child
          }

          const childElement = child as React.ReactElement<Record<string, unknown>>

          return React.cloneElement(childElement, {
            accordionValue: value,
            accordionOpen: open,
            accordionId: id,
          } as Record<string, unknown>)
        })}
      </div>
    )
  },
)

AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerInternalProps extends AccordionTriggerProps {
  accordionValue?: string
  accordionOpen?: boolean
  accordionId?: string
}

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, accordionValue, accordionOpen, accordionId, ...props }: AccordionTriggerInternalProps, ref) => {
    const context = React.useContext(AccordionContext)

    if (!context) {
      throw new Error("AccordionTrigger must be used within an Accordion")
    }

    const open = accordionOpen ?? false
    const id = accordionId ?? ""

    return (
      <button
        ref={ref}
        id={`accordion-trigger-${id}`}
        type="button"
        aria-expanded={open}
        aria-controls={`accordion-content-${id}`}
        onClick={() => {
          if (accordionValue) {
            context.onToggle(accordionValue)
          }
        }}
        className={cn(
          "flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-semibold text-slate-900",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)

AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  accordionOpen?: boolean
  accordionId?: string
}

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, accordionOpen, accordionId, ...props }: AccordionContentProps, ref) => {
    const open = accordionOpen ?? false
    const id = accordionId ?? ""

    return (
      <div
        ref={ref}
        id={`accordion-content-${id}`}
        role="region"
        aria-labelledby={`accordion-trigger-${id}`}
        className={cn(
          "overflow-hidden transition-all duration-200",
          !open && "hidden",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

AccordionContent.displayName = "AccordionContent"
