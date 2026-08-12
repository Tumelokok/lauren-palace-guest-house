import Image from "next/image"
import { CalendarDays, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Container from "@/src/components/layout/Container"

/**
 * Premium hero section for the Lauren Palace Guest House landing page.
 *
 * The layout is intentionally editorial and hospitality-focused, presenting the
 * property as an elegant alternative to generic booking platforms.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f5f0_0%,#f3eee7_100%)] py-10 sm:py-14 lg:min-h-screen lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,162,122,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(63,76,71,0.12),transparent_28%)]" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="animate-[fade-in_700ms_ease-out]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
              WELCOME TO LAUREN PALACE GUEST HOUSE
            </p>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Luxury Guest House in Vanderbijlpark
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              Discover a refined stay shaped by tranquillity, thoughtful comfort,
              and gracious hospitality. Our elegant rooms offer a peaceful retreat
              for business and leisure travellers seeking a memorable place to
              unwind.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                className="rounded-full bg-amber-900 px-6 text-white hover:bg-amber-800"
              >
                Book Your Stay
              </Button>

              <Button
                type="button"
                variant="outline"
                className="rounded-full border-slate-300 bg-white/80 px-6 text-slate-900 hover:bg-slate-100"
              >
                Explore Rooms
              </Button>
            </div>
          </div>

          <div className="relative animate-[fade-in_900ms_ease-out]">
            <div className="group relative overflow-hidden rounded-[32px] bg-white p-2 shadow-[0_24px_80px_rgba(17,17,17,0.12)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.04),rgba(17,17,17,0.28))] opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Elegant guest house bedroom interior"
                width={1200}
                height={840}
                className="h-[420px] w-full rounded-[24px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
            </div>

            <div className="absolute -bottom-6 left-4 max-w-[240px] rounded-2xl border border-white/60 bg-white/92 p-4 shadow-[0_16px_40px_rgba(17,17,17,0.14)] backdrop-blur-sm sm:-bottom-8 sm:left-6">
              <div className="text-sm font-semibold tracking-[0.22em] text-amber-800">
                ★★★★★
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Trusted by Guests
              </p>
              <p className="mt-1 text-sm text-slate-600">9.2/10 Guest Rating</p>
              <p className="mt-1 text-xs text-slate-500">Verified Reviews</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 max-w-5xl rounded-[28px] border border-white/70 bg-white/90 p-4 shadow-[0_20px_60px_rgba(17,17,17,0.12)] backdrop-blur-lg sm:mt-10 sm:p-5 lg:-mt-6 lg:p-6">
          <div className="grid gap-3 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <CalendarDays className="size-4 text-amber-800" />
                Check-in
              </label>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600">
                Select date
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <CalendarDays className="size-4 text-amber-800" />
                Check-out
              </label>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600">
                Select date
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                <Users className="size-4 text-amber-800" />
                Guests
              </label>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-600">
                2 Guests
              </div>
            </div>

            <div className="flex items-end">
              <Button
                type="button"
                className="w-full rounded-2xl bg-amber-900 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-800"
              >
                Search Availability
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
