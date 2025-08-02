"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-ocean-950 mb-6">A Vision of Paradise</h2>
            <div className="space-y-4 text-lg text-ocean-700 leading-relaxed">
              <p>
                Founded in 1985 by visionary hotelier James Wilder, WilderBeach Resort began as a dream to create the
                world's most extraordinary beachfront sanctuary. What started as a small collection of beachside
                cottages has evolved into a world-renowned luxury destination.
              </p>
              <p>
                Our commitment to excellence, sustainability, and authentic hospitality has earned us recognition as one
                of the world's premier resort destinations. Every detail, from our architectural design to our
                personalized service, reflects our dedication to creating unforgettable experiences.
              </p>
              <p>
                Today, WilderBeach Resort continues to set new standards in luxury hospitality, welcoming guests from
                around the globe to experience the perfect harmony of natural beauty and refined elegance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Resort History"
              width={800}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
