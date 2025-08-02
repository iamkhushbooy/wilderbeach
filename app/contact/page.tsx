import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import MapSection from "@/components/contact/map-section"

export const metadata: Metadata = {
  title: "Contact Us - WilderBeach Resort",
  description:
    "Get in touch with WilderBeach Resort. Find our location, contact information, and send us a message for reservations or inquiries.",
}

export default function ContactPage() {
  return (
    <div className="bg-slate-100">
      <ContactHero />
      <div className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <MapSection />
    </div>
  )
}
