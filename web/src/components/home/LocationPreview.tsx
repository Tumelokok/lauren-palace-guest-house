import Image from "next/image"
import { Building2, Landmark, MapPin, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"

const attractions = [
  {
    icon: Building2,
    title: "Vaal University of Technology",
  },
  {
    icon: Landmark,
    title: "Emerald Resort & Casino",
  },
  {
    icon: ShoppingBag,
    title: "River Square Mall",
  },
  {
    icon: MapPin,
    title: "Vanderbijlpark CBD",
  },
]

/**
 * LocationPreview section for the Lauren Palace Guest House homepage.
 */
export default function LocationPreview() {
  return (
    <Section className="bg-[linear-gradient(180deg,#f8f4eb_0%,#f6efe6_100%)]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
              DISCOVER THE AREA
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Perfectly Positioned for Travel, Leisure and Business
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Lauren Palace offers a convenient base close to key destinations in
              Vanderbijlpark, making it easy to explore the area while enjoying a
              calm and comfortable retreat.
            </p>

            <ul className="mt-8 space-y-3">
              {attractions.map((item) => {
                const Icon = item.icon

                return (
                  <li
                    key={item.title}
                    className="flex items-center gap-3 rounded-[18px] border border-white/70 bg-white/80 px-4 py-3 shadow-[0_10px_28px_rgba(17,17,17,0.05)]"
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-amber-50 text-amber-800">
                      <Icon className="size-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-800">
                      {item.title}
                    </span>
                  </li>
                )
              })}
            </ul>

            <div className="mt-8">
              <Button
                type="button"
                className="rounded-full bg-amber-900 px-6 text-white hover:bg-amber-800"
              >
                Get Directions
              </Button>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-2 shadow-[0_24px_80px_rgba(17,17,17,0.10)]">
              <Image
                src="/images/placeholders/placeholder.svg"
                alt="Location placeholder for Lauren Palace"
                width={1200}
                height={900}
                className="h-[420px] w-full rounded-[24px] object-cover lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
