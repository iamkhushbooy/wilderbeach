"use client"

import { motion } from "framer-motion"
import { Calendar, Users, MapPin, Star, Shield } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export default function BookingSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      {/* Booking Summary */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <h3 className="text-xl font-bold text-ocean-950">Booking Summary</h3>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Selected Room */}
          <div className="border-b pb-4 border-ocean-200">
            <div className="flex items-start space-x-4">
              <Image
                src="/placeholder.svg?height=80&width=120&text=Beach+Villa"
                alt="Beach Villa"
                width={120}
                height={80}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-ocean-950">Beach Villa</h4>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-paradise-500 fill-current" />
                  <span className="text-sm text-ocean-700 ml-1">4.9 rating</span>
                </div>
                <p className="text-sm text-ocean-700 mt-1">Private pool, beach access</p>
              </div>
            </div>
          </div>

          {/* Stay Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-ocean-600 mr-2" />
                <span className="text-sm text-ocean-700">Check-in</span>
              </div>
              <span className="font-semibold text-ocean-950">Dec 15, 2024</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-ocean-600 mr-2" />
                <span className="text-sm text-ocean-700">Check-out</span>
              </div>
              <span className="font-semibold text-ocean-950">Dec 20, 2024</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-4 w-4 text-ocean-600 mr-2" />
                <span className="text-sm text-ocean-700">Guests</span>
              </div>
              <span className="font-semibold text-ocean-950">2 Adults</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-ocean-600 mr-2" />
                <span className="text-sm text-ocean-700">Duration</span>
              </div>
              <span className="font-semibold text-ocean-950">5 nights</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Price Breakdown */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <h3 className="text-xl font-bold text-ocean-950">Price Breakdown</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span className="text-ocean-700">Room rate (5 nights)</span>
            <span className="font-semibold text-ocean-950">$2,995</span>
          </div>

          <div className="flex justify-between">
            <span className="text-ocean-700">Resort fee</span>
            <span className="font-semibold text-ocean-950">$150</span>
          </div>

          <div className="flex justify-between">
            <span className="text-ocean-700">Taxes & fees</span>
            <span className="font-semibold text-ocean-950">$377</span>
          </div>

          <div className="border-t pt-4 border-ocean-200">
            <div className="flex justify-between text-lg font-bold">
              <span className="text-ocean-950">Total</span>
              <span className="text-ocean-600">$3,522</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Included Amenities */}
      <Card className="shadow-lg border-0">
        <CardHeader>
          <h3 className="text-xl font-bold text-ocean-950">Included</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[
              "Complimentary WiFi",
              "Daily housekeeping",
              "Access to all pools",
              "Fitness center access",
              "24/7 concierge service",
              "Airport transfer",
            ].map((amenity, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-tropical-500 rounded-full mr-3" />
                <span className="text-sm text-ocean-700">{amenity}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Badge */}
      <Card className="shadow-lg border-0 bg-tropical-50 border-tropical-200">
        <CardContent className="p-4">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-tropical-600 mr-3" />
            <div>
              <p className="text-sm font-semibold text-tropical-800">Secure Booking</p>
              <p className="text-xs text-tropical-700">SSL encrypted & PCI compliant</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cancellation Policy */}
      <Card className="shadow-lg border-0">
        <CardContent className="p-4">
          <h4 className="font-semibold text-ocean-950 mb-2">Cancellation Policy</h4>
          <p className="text-xs text-ocean-700 leading-relaxed">
            Free cancellation until 48 hours before check-in. After that, the first night will be charged.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
