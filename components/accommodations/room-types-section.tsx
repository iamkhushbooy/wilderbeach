"use client"
import { motion } from "framer-motion"
import { Wifi, Car, Coffee, Waves, Utensils, Dumbbell, Users, Bed, Bath, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const roomTypes = [
  {
    id: 1,
    name: "Ocean View Suite",

    period: "per night",
    image: "/luxuary/room1.jpg",
    description: "Elegant suite with panoramic ocean views and private balcony",
    features: ["Ocean View", "Private Balcony", "King Bed", "Mini Bar", "Work Desk"],
    specs: { guests: 2, bedrooms: 1, bathrooms: 1, size: "650 sq ft" },
    amenities: [Wifi, Coffee, Utensils],
  },
  {
    id: 2,
    name: "Beach Villa",

    period: "per night",
   image: "/luxuary/room2.jpg",
    description: "Spacious villa with direct beach access and private pool",
    features: ["Private Pool", "Beach Access", "Full Kitchen", "Garden View", "Outdoor Dining"],
    specs: { guests: 4, bedrooms: 2, bathrooms: 2, size: "1200 sq ft" },
    amenities: [Wifi, Car, Waves, Dumbbell],
  },
  {
    id: 3,
    name: "Presidential Suite",

    period: "per night",
    image: "/luxuary/room3.jpg",
    description: "Ultimate luxury with panoramic views and butler service",
    features: ["Panoramic View", "Butler Service", "Jacuzzi", "Private Dining", "Wine Cellar"],
    specs: { guests: 6, bedrooms: 3, bathrooms: 3, size: "2000 sq ft" },
    amenities: [Wifi, Coffee, Utensils, Car, Waves, Dumbbell],
  },
  {
    id: 4,
    name: "Garden Pavilion",

    period: "per night",
    image: "/luxuary/room1.jpg",
    description: "Tranquil retreat surrounded by tropical gardens",
    features: ["Garden View", "Private Terrace", "Outdoor Shower", "Meditation Space"],
    specs: { guests: 2, bedrooms: 1, bathrooms: 1, size: "800 sq ft" },
    amenities: [Wifi, Coffee, Waves],
  },
  {
    id: 5,
    name: "Overwater Bungalow",

    period: "per night",
    image: "/luxuary/room2.jpg",
    description: "Iconic overwater experience with glass floor panels",
    features: ["Glass Floor", "Direct Ocean Access", "Sunset Deck", "Snorkeling Gear"],
    specs: { guests: 2, bedrooms: 1, bathrooms: 1, size: "900 sq ft" },
    amenities: [Wifi, Waves, Coffee, Utensils],
  },
  {
    id: 6,
    name: "Family Resort Suite",

    period: "per night",
    image: "/luxuary/room3.jpg",
    description: "Perfect for families with connecting rooms and kid-friendly amenities",
    features: ["Connecting Rooms", "Kids Play Area", "Kitchenette", "Family Balcony"],
    specs: { guests: 6, bedrooms: 2, bathrooms: 2, size: "1400 sq ft" },
    amenities: [Wifi, Coffee, Utensils, Dumbbell],
  },
]

export default function RoomTypesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
              Choose Your Perfect Stay
            </span>
          </h2>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            From intimate suites to spacious villas, each accommodation is designed to provide the ultimate in comfort
            and luxury.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  {/* <div className="absolute top-4 right-4 bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {room.lassName="text-xs">/{room.period}</span>
                  </div> */}
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-ocean-950 mb-2">{room.name}</h3>
                  <p className="text-ocean-700 mb-4">{room.description}</p>

                  {/* Room Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-ocean-50 rounded-lg">
                    <div className="flex items-center text-sm text-ocean-700">
                      <Users className="h-4 w-4 mr-2 text-ocean-600" />
                      {room.specs.guests} Guests
                    </div>
                    <div className="flex items-center text-sm text-ocean-700">
                      <Bed className="h-4 w-4 mr-2 text-ocean-600" />
                      {room.specs.bedrooms} Bedroom{room.specs.bedrooms > 1 ? "s" : ""}
                    </div>
                    <div className="flex items-center text-sm text-ocean-700">
                      <Bath className="h-4 w-4 mr-2 text-ocean-600" />
                      {room.specs.bathrooms} Bathroom{room.specs.bathrooms > 1 ? "s" : ""}
                    </div>
                    <div className="flex items-center text-sm text-ocean-700">
                      <Maximize className="h-4 w-4 mr-2 text-ocean-600" />
                      {room.specs.size}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-ocean-800 mb-2">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-ocean-100 text-ocean-800 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                      {room.features.length > 3 && (
                        <span className="text-xs text-ocean-600">+{room.features.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-ocean-800 mb-2">Amenities</h4>
                    <div className="flex space-x-2">
                      {room.amenities.map((Amenity, idx) => (
                        <div key={idx} className="p-2 bg-ocean-50 rounded-lg">
                          <Amenity className="h-4 w-4 text-ocean-600" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href="/booking" className="flex-1">
                      <Button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold">
                        Book Now
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="px-4 bg-transparent text-ocean-700 border-ocean-300 hover:bg-ocean-50"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
