import {
  AirVent,
  Bath,
  Coffee,
  House,
  Laptop,
  ParkingCircle,
  ShieldCheck,
  Sparkles,
  Tv,
  WashingMachine,
  Wifi,
} from "lucide-react"

import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "Fast, dependable internet for work, streaming, and staying connected.",
  },
  {
    icon: ParkingCircle,
    title: "Secure Parking",
    description: "Convenient and protected parking for guests arriving by car.",
  },
  {
    icon: AirVent,
    title: "Air Conditioning",
    description: "Comfortable indoor climate control for every season and every stay.",
  },
  {
    icon: House,
    title: "Daily Housekeeping",
    description: "Thoughtful cleaning and tidy presentation throughout your visit.",
  },
  {
    icon: Tv,
    title: "Smart TV",
    description: "Enjoy a modern entertainment experience with easy streaming access.",
  },
  {
    icon: Coffee,
    title: "Coffee & Tea Station",
    description: "A relaxing touch for mornings, evenings, and a quiet moment at home.",
  },
  {
    icon: Bath,
    title: "Private Bathroom",
    description: "Fresh, elegant facilities designed for comfort and privacy.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "A safe and well-managed environment for guests and their belongings.",
  },
  {
    icon: Coffee,
    title: "Breakfast Available",
    description: "A welcoming start to the day with thoughtful breakfast options.",
  },
  {
    icon: Laptop,
    title: "Business Friendly",
    description: "Practical features that support work, meetings, and travel needs.",
  },
  {
    icon: WashingMachine,
    title: "Laundry Service",
    description: "Convenient care for longer stays and added practicality.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Outdoor Spaces",
    description: "Inviting surroundings that add calm, charm, and a sense of escape.",
  },
]

/**
 * Amenities section for the Lauren Palace Guest House homepage.
 *
 * The section delivers a premium, card-based overview of the facilities and
 * hospitality touches that contribute to a comfortable and memorable stay.
 */
export default function Amenities() {
  return (
    <Section className="bg-[linear-gradient(180deg,#faf7f2_0%,#f6f0e7_100%)]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
            EVERYTHING YOU NEED
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Premium Amenities Designed For Comfort
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From thoughtful in-room touches to practical conveniences, Lauren Palace
            Guest House offers a refined stay that feels both elevated and easy.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {amenities.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/70 bg-white/90 p-6 shadow-[0_16px_40px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(17,17,17,0.12)]"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-amber-50 text-amber-800">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
