import type { Metadata } from "next"
import BookingHero from "@/components/booking/booking-hero"
import BookingForm from "@/components/booking/booking-form"
import BookingSummary from "@/components/booking/booking-summary"

export const metadata: Metadata = {
  title: "Book Your Stay - WilderBeach Resort",
  description:
    "Reserve your luxury accommodation at WilderBeach Resort. Choose your dates, select your perfect room, and prepare for paradise.",
}

export default function BookingPage() {
  return (
    <>
      {/* <BookingHero /> */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* <BookingForm /> */}
            </div>
            <div>
              {/* <BookingSummary /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
