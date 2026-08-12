import Image from "next/image"

import { Button } from "@/components/ui/button"
import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"

const galleryItems = [
  { title: "Luxury Suites", image: "/images/placeholders/placeholder.svg" },
  { title: "Reception", image: "/images/placeholders/placeholder.svg" },
  { title: "Garden", image: "/images/placeholders/placeholder.svg" },
  { title: "Executive Room", image: "/images/placeholders/placeholder.svg" },
  { title: "Dining Area", image: "/images/placeholders/placeholder.svg" },
  { title: "Outdoor Spaces", image: "/images/placeholders/placeholder.svg" },
]

/**
 * GalleryPreview section for the Lauren Palace Guest House homepage.
 *
 * The component presents a premium, editorial-style preview of the property
 * through a responsive image gallery that mirrors the luxury hospitality tone
 * established elsewhere in the landing experience.
 */
export default function GalleryPreview() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
            A GLIMPSE OF ELEGANCE
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Gallery Preview
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Discover the atmosphere, character, and refined comfort that define the
            Lauren Palace experience from the moment you arrive.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(17,17,17,0.12)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(17,17,17,0.45)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            type="button"
            className="rounded-full bg-amber-900 px-6 text-white hover:bg-amber-800"
          >
            View Full Gallery
          </Button>
        </div>
      </Container>
    </Section>
  )
}
