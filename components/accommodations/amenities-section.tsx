"use client"

import { motion } from "framer-motion"
import {
  Wifi,
  Car,
  Coffee,
  Waves,
  Utensils,
  Dumbbell,
  SpadeIcon as Spa,
  Shield,
  Phone,
  Shirt,
  Wind,
  Tv,
} from "lucide-react"

const amenities = [
  { icon: Wifi, name: "Free WiFi", description: "High-speed internet throughout the resort" },
  { icon: Car, name: "Valet Parking", description: "Complimentary valet service" },
  { icon: Coffee, name: "24/7 Room Service", description: "Gourmet dining delivered to your room" },
  { icon: Waves, name: "Pool Access", description: "Multiple pools including infinity pools" },
  { icon: Utensils, name: "Fine Dining", description: "Award-winning restaurants on-site" },
  { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art equipment and classes" },
  { icon: Spa, name: "Spa Services", description: "Full-service spa and wellness center" },
  { icon: Shield, name: "24/7 Security", description: "Round-the-clock security and safety" },
  { icon: Phone, name: "Concierge", description: "Personal concierge service" },
  { icon: Shirt, name: "Laundry Service", description: "Daily housekeeping and laundry" },
  { icon: Wind, name: "Air Conditioning", description: "Climate control in all rooms" },
  { icon: Tv, name: "Entertainment", description: "Smart TVs with streaming services" },
]

export default function AmenitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-ocean-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-950 mb-6">World-Class Amenities</h2>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            Every detail has been carefully considered to ensure your stay exceeds expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4">
                <amenity.icon className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
                <h3 className="font-bold text-ocean-950 mb-2">{amenity.name}</h3>
                <p className="text-sm text-ocean-700 leading-relaxed">{amenity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
