import { Star } from "lucide-react"

import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"

const testimonials = [
  {
    name: "Nadia M.",
    location: "Johannesburg",
    quote:
      "The stay felt effortlessly elegant from start to finish. Everything was calm, polished and wonderfully comfortable.",
  },
  {
    name: "Thabo R.",
    location: "Pretoria",
    quote:
      "A beautiful guest house with warm service and a peaceful atmosphere. It felt like a true retreat.",
  },
  {
    name: "Lindsey K.",
    location: "Cape Town",
    quote:
      "From the welcoming hospitality to the beautiful rooms, every detail made our stay feel special.",
  },
]

/**
 * Testimonials section for the Lauren Palace Guest House homepage.
 */
export default function Testimonials() {
  return (
    <Section className="bg-[linear-gradient(180deg,#f9f5ef_0%,#f4eee6_100%)]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
            GUEST STORIES
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Loved by Guests Who Value Comfort and Style
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Honest feedback from travellers who chose Lauren Palace for a restful,
            elegant and deeply welcoming stay.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[24px] border border-white/70 bg-white/90 p-6 shadow-[0_16px_40px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(17,17,17,0.12)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-amber-700">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={`${testimonial.name}-${index}`} className="size-4 fill-current" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                “{testimonial.quote}”
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
