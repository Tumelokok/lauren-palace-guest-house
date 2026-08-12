import Image from "next/image"

import { Button } from "@/components/ui/button"
import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"

/**
 * Luxury call-to-action banner for the Lauren Palace Guest House homepage.
 */
export default function CtaBanner() {
  return (
    <Section className="py-0">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] border border-white/70 shadow-[0_24px_70px_rgba(17,17,17,0.12)]">
          <Image
            src="/images/placeholders/placeholder.svg"
            alt="Guest house placeholder image"
            width={1600}
            height={900}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.76)_0%,rgba(17,17,17,0.45)_100%)]" />

          <div className="relative px-6 py-16 text-center text-white sm:px-10 lg:px-16 lg:py-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
              PLAN YOUR STAY
            </p>
            <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Reserve Your Place in a Home That Feels Truly Exceptional
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              From elegant rooms to attentive service, Lauren Palace offers a stay 
              designed for comfort, calm and memorable hospitality.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                type="button"
                className="rounded-full bg-amber-900 px-6 text-white hover:bg-amber-800"
              >
                Book Your Stay
              </Button>
              <Button
                type="button"
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 px-6 text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
