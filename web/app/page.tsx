import Amenities from "@/src/components/home/Amenities"
import CtaBanner from "@/src/components/home/CtaBanner"
import FeaturedRooms from "@/src/components/home/FeaturedRooms"
import Faq from "@/src/components/home/Faq"
import GalleryPreview from "@/src/components/home/GalleryPreview"
import GuestExperience from "@/src/components/home/GuestExperience"
import Hero from "@/src/components/home/Hero"
import LocationPreview from "@/src/components/home/LocationPreview"
import Testimonials from "@/src/components/home/Testimonials"
import WhyChooseUs from "@/src/components/home/WhyChooseUs"
import Footer from "@/src/components/layout/Footer"
import Header from "@/src/components/layout/Header"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />

      <main>
        <Hero />
        <WhyChooseUs />
        <FeaturedRooms />
        <GuestExperience />
        <Amenities />
        <GalleryPreview />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <LocationPreview />
      </main>

      <Footer />
    </div>
  )
}
