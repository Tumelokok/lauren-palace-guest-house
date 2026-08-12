import Image from "next/image"
import Link from "next/link"
import { BedDouble, House, Sparkles, Wifi } from "lucide-react"

import { Button } from "@/components/ui/button"
import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"
import { ROOM_TYPES } from "@/src/constants/roomInventory"

const comparisonRows = ROOM_TYPES.map((room) => ({
  room: room.name,
  guests: room.capacity,
  directPrice: `R ${room.pricing.websitePrice}`,
  bookingCom: room.bookingComPrice ? `R ${room.bookingComPrice}` : "Pending verification",
}))

const highlights = [
  {
    icon: Wifi,
    title: "Verified direct pricing",
    description:
      "Direct pricing for Standard, Three-Sleeper, and Cottage room categories has been confirmed.",
  },
  {
    icon: BedDouble,
    title: "Physical inventory model",
    description:
      "Room categories are separated from physical inventory units for accuracy and future bookings.",
  },
  {
    icon: Sparkles,
    title: "Self-catering model",
    description:
      "The guest house is confirmed as self-catering; specific service details are pending verification.",
  },
  {
    icon: House,
    title: "Operational details pending",
    description:
      "Exact room layout, guest services, and operational policies are being confirmed.",
  },
]

const bookingDetails = [
  {
    title: "Self-Catering",
    value:
      "The guest house is confirmed as self-catering. Specific service details are pending verification.",
  },
  {
    title: "Direct Pricing",
    value: "Standard R650, Three-Sleeper R900, Cottage R1,750 direct pricing has been verified.",
  },
  {
    title: "Check-in / Check-out",
    value:
      "Exact check-in and check-out times are pending confirmation from management.",
  },
  {
    title: "Cancellation",
    value:
      "Cancellation policy will be confirmed and shared at the time of booking.",
  },
  {
    title: "Customer Support",
    value:
      "Reservation assistance is available through the official website and contact channels.",
  },
  {
    title: "Booking Source",
    value:
      "Direct website booking workflows are being prepared and will follow after the data model is completed.",
  },
]

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-[#fcfaf7] text-slate-900">
      <main>
        <Section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8f2e8_0%,#f3e9db_100%)] py-16 lg:py-24">
          <Image
            src="/images/placeholders/placeholder.svg"
            alt="Room planning placeholder at Lauren Palace"
            fill
            className="absolute inset-0 object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.72)_0%,rgba(17,17,17,0.28)_100%)]" />
          <Container className="relative">
            <div className="max-w-3xl rounded-[32px] border border-white/20 bg-white/10 p-8 text-white shadow-[0_24px_80px_rgba(17,17,17,0.18)] backdrop-blur-sm sm:p-10 lg:p-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                LAUREN PALACE ROOMS
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Our Rooms & Suites
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                Discover beautifully appointed spaces designed for comfort, privacy,
                and an elevated stay that feels both personal and effortlessly luxurious.
              </p>
            </div>
          </Container>
        </Section>

        <Section className="bg-white">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
                ACCOMMODATION OPTIONS
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Refined Rooms for Business, Leisure and Family Travel
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {ROOM_TYPES.map((room) => (
                <article
                  key={room.id}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_44px_rgba(17,17,17,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_56px_rgba(17,17,17,0.12)]"
                >
                  <div className="relative h-60">
                    <Image
                      src="/images/placeholders/placeholder.svg"
                      alt={room.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{room.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{room.description}</p>

                    <div className="mt-4 space-y-2 text-sm text-slate-700">
                      <div>
                        <span className="font-semibold">Capacity: </span>
                        {room.capacity}
                      </div>
                      <div>
                        <span className="font-semibold">Direct price: </span>
                        R {room.pricing.websitePrice}
                      </div>
                      {room.bookingComPrice ? (
                        <div>
                          <span className="font-semibold">Booking.com benchmark: </span>
                          R {room.bookingComPrice}
                        </div>
                      ) : null}
                    </div>

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

        <Section className="bg-[linear-gradient(180deg,#f8f3ea_0%,#f6efe7_100%)]">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
                ROOM COMPARISON
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Compare the Experience Across Our Signature Rooms
              </h2>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(17,17,17,0.06)]">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-50 text-xs uppercase tracking-[0.2em] text-slate-500">
                    <tr>
                      <th className="px-4 py-4">Room</th>
                      <th className="px-4 py-4">Guests</th>
                      <th className="px-4 py-4">Direct Price</th>
                      <th className="px-4 py-4">Booking.com</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.room} className="border-t border-slate-200">
                        <td className="px-4 py-4 font-semibold text-slate-900">{row.room}</td>
                        <td className="px-4 py-4">{row.guests}</td>
                        <td className="px-4 py-4">{row.directPrice}</td>
                        <td className="px-4 py-4">{row.bookingCom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </Section>

        <Section className="bg-white">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
                ROOM HIGHLIGHTS
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Operational and Pricing Notes
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                The current architecture separates room categories from physical inventory and preserves direct pricing verification.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#fcfaf7_0%,#f8f2e8_100%)] p-6 shadow-[0_12px_30px_rgba(17,17,17,0.06)]"
                  >
                    <div className="flex size-12 items-center justify-center rounded-full bg-amber-50 text-amber-800">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </Container>
        </Section>

        <Section className="bg-[linear-gradient(180deg,#f8f4eb_0%,#f5ede2_100%)]">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
                BOOKING INFORMATION
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Everything You Need to Plan Your Stay
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {bookingDetails.map((detail) => (
                <div key={detail.title} className="rounded-[24px] border border-white/70 bg-white/85 p-5 shadow-[0_12px_32px_rgba(17,17,17,0.06)]">
                  <h3 className="text-base font-semibold text-slate-900">{detail.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{detail.value}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section className="bg-white py-8">
          <Container>
            <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,#2f3f39_0%,#3e5048_100%)] p-8 text-white shadow-[0_24px_80px_rgba(17,17,17,0.14)] sm:p-10 lg:p-14">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                RESERVE YOUR STAY
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Let the calm, comfort and elegance of Lauren Palace become your next escape.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                Whether you are visiting for business, leisure or family travel, our rooms and suites offer a refined home away from home.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button type="button" className="rounded-full bg-amber-900 px-6 text-white hover:bg-amber-800">
                  Book Your Stay
                </Button>
                <Button type="button" variant="outline" className="rounded-full border-white/40 bg-white/10 px-6 text-white hover:bg-white/20">
                  Contact Us
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </div>
  )
}
