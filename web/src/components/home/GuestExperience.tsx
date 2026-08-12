import Image from "next/image"
import { Compass, Home, Sparkles, Waves } from "lucide-react"

import { Button } from "@/components/ui/button"
import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"

const highlights = [
  {
    icon: Sparkles,
    title: "Luxury Rooms",
    description:
      "Elegant interiors and premium finishes create a restful retreat for every guest.",
  },
  {
    icon: Home,
    title: "Warm Hospitality",
    description:
      "Thoughtful service and genuine care make every stay feel personal and welcoming.",
  },
  {
    icon: Waves,
    title: "Quiet Environment",
    description:
      "A peaceful setting offers calm, comfort, and the privacy you need to unwind.",
  },
  {
    icon: Compass,
    title: "Convenient Location",
    description:
      "Easy access and a welcoming atmosphere make travel simple for every itinerary.",
  },
]

/**
 * GuestExperience section for the Lauren Palace Guest House homepage.
 *
 * This component presents the property as a refined and welcoming retreat,
 * combining editorial layout, warm neutral styling, and premium hospitality cues.
 */
export default function GuestExperience() {
  return (
    <Section className="bg-[linear-gradient(180deg,#f8f5f0_0%,#f4eee6_100%)]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 animate-[fade-in_800ms_ease-out] lg:order-1">
            <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-2 shadow-[0_24px_80px_rgba(17,17,17,0.10)]">
              <Image
                src="/images/placeholders/placeholder.svg"
                alt="Lauren Palace room placeholder"
                width={1200}
                height={900}
                className="h-[420px] w-full rounded-[24px] object-cover lg:h-[560px]"
              />
            </div>
          </div>

          <div className="order-1 animate-[fade-in_900ms_ease-out] lg:order-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
              THE LAUREN PALACE EXPERIENCE
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              More Than a Stay—A Place to Feel at Home
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Lauren Palace is a peaceful, elegant and welcoming guest house designed
              for business travellers, families and leisure guests. Every detail is
              shaped around comfort, hospitality and thoughtful care, creating a
              stay that feels both refined and deeply relaxing.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon

                return (
                  <article
                    key={item.title}
                    className="rounded-[20px] border border-white/70 bg-white/80 p-4 shadow-[0_12px_32px_rgba(17,17,17,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(17,17,17,0.10)]"
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-amber-50 text-amber-800">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-3 text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>

            <div className="mt-8">
              <Button
                type="button"
                className="rounded-full bg-amber-900 px-6 text-white hover:bg-amber-800"
              >
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
