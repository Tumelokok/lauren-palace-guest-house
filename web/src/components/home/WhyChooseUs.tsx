import { BedDouble, ShieldCheck, Wifi, HandHeart } from "lucide-react"

import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"

const features = [
  {
    icon: BedDouble,
    title: "Elegant Rooms",
    description:
      "Thoughtfully styled rooms combine refined comfort, premium finishes, and a peaceful atmosphere for restorative stays.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Convenient",
    description:
      "Enjoy a dependable, well-managed experience with easy access, attentive support, and peace of mind throughout your visit.",
  },
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description:
      "Stay connected with fast, reliable internet that supports work, streaming, and effortless communication while you travel.",
  },
  {
    icon: HandHeart,
    title: "Exceptional Hospitality",
    description:
      "Our team delivers warm, personalised service that makes every guest feel welcomed, valued, and genuinely cared for.",
  },
]

/**
 * WhyChooseUs section for the Lauren Palace Guest House homepage.
 *
 * This section presents the brand promise through a refined four-card layout
 * that reinforces comfort, trust, quality, and premium hospitality.
 */
export default function WhyChooseUs() {
  return (
    <Section className="bg-[linear-gradient(180deg,#fbf9f5_0%,#f6f1e9_100%)]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
            Why Guests Return
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose Lauren Palace
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Every stay is designed to feel effortless, elegant, and deeply
            comfortable, with thoughtful service, refined interiors, and a calm
            atmosphere that suits both business travel and memorable leisure getaways.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="group rounded-[24px] border border-white/70 bg-white/90 p-6 shadow-[0_16px_45px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(17,17,17,0.12)]"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-amber-50 text-amber-800 transition-colors duration-300 group-hover:bg-amber-100">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
