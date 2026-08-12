import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"
import { ROOM_TYPES } from "@/src/constants/roomInventory"

/**
 * FeaturedRooms section for the Lauren Palace Guest House homepage.
 *
 * The component now reflects verified room categories and direct pricing.
 */
export default function FeaturedRooms() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
            Our Signature Stay
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Featured Rooms
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Verified room types and direct pricing are now aligned with Lauren Palace Guest House inventory.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {ROOM_TYPES.map((room) => (
            <article
              key={room.id}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(17,17,17,0.12)]"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src="/images/placeholders/placeholder.svg"
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{room.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{room.description}</p>

                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                  <span className="rounded-full bg-slate-100 px-3 py-1">{room.capacity}</span>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-900">
                    Direct price: R {room.pricing.websitePrice}
                  </span>
                </div>

                {room.bookingComPrice ? (
                  <div className="mt-4 rounded-[20px] bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                    Booking.com benchmark: R {room.bookingComPrice}
                  </div>
                ) : null}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 rounded-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
                  >
                    View Details
                  </Button>
                  <Link
                    href="/rooms"
                    className="flex-1 rounded-full bg-amber-900 px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-amber-800"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
