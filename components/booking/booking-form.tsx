"use client"

import { motion } from "framer-motion"
import { Calendar, Users, CreditCard, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function BookingForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="shadow-2xl border-0">
        <CardHeader>
          <h2 className="text-2xl font-bold text-ocean-950">Reservation Details</h2>
          <p className="text-ocean-700">Complete your booking information below</p>
        </CardHeader>

        <CardContent className="p-8 space-y-8">
          {/* Dates & Guests */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ocean-950 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-ocean-600" />
              Dates & Guests
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Check-in Date</label>
                <Input type="date" className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Check-out Date</label>
                <Input type="date" className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Adults</label>
                <select className="w-full h-12 border border-ocean-300 rounded-md px-3 bg-white text-ocean-700">
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Children</label>
                <select className="w-full h-12 border border-ocean-300 rounded-md px-3 bg-white text-ocean-700">
                  <option value="0">0 Children</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Rooms</label>
                <select className="w-full h-12 border border-ocean-300 rounded-md px-3 bg-white text-ocean-700">
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                </select>
              </div>
            </div>
          </div>

          {/* Room Selection */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ocean-950">Room Selection</h3>
            <div className="space-y-4">
              {[
                { name: "Ocean View Suite", price: "$299/night", popular: false },
                { name: "Beach Villa", price: "$599/night", popular: true },
                { name: "Presidential Suite", price: "$999/night", popular: false },
              ].map((room, index) => (
                <label
                  key={room.name}
                  className="flex items-center p-4 border border-ocean-200 rounded-xl hover:bg-ocean-50 cursor-pointer"
                >
                  <input type="radio" name="room" className="mr-4 text-ocean-600 focus:ring-ocean-500" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-ocean-950">{room.name}</span>
                      {room.popular && (
                        <span className="bg-ocean-100 text-ocean-800 px-2 py-1 rounded-full text-xs font-semibold">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <span className="text-ocean-700">{room.price}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Guest Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ocean-950 flex items-center">
              <Users className="h-5 w-5 mr-2 text-ocean-600" />
              Guest Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">First Name</label>
                <Input
                  placeholder="John"
                  className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Last Name</label>
                <Input
                  placeholder="Doe"
                  className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Phone</label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
                />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ocean-950">Special Requests</h3>
            <textarea
              placeholder="Any special requests or preferences..."
              rows={4}
              className="w-full border border-ocean-300 rounded-md p-3 resize-none focus:border-ocean-500 focus:ring-ocean-500 text-ocean-700"
            />
          </div>

          {/* Payment Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-ocean-950 flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-ocean-600" />
              Payment Information
            </h3>

            <div className="bg-ocean-50 border border-ocean-200 rounded-xl p-4">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-ocean-600 mr-2" />
                <span className="text-sm text-ocean-800 font-semibold">Secure Payment Processing</span>
              </div>
              <p className="text-sm text-ocean-700 mt-1">
                Your payment information is encrypted and secure. We accept all major credit cards.
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ocean-800 mb-2">Card Number</label>
              <Input
                placeholder="1234 5678 9012 3456"
                className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Expiry Month</label>
                <select className="w-full h-12 border border-ocean-300 rounded-md px-3 bg-white text-ocean-700">
                  <option value="">Month</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Expiry Year</label>
                <select className="w-full h-12 border border-ocean-300 rounded-md px-3 bg-white text-ocean-700">
                  <option value="">Year</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={2024 + i}>
                      {2024 + i}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ocean-800 mb-2">CVV</label>
                <Input
                  placeholder="123"
                  className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
                />
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="space-y-4">
            <label className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-3 rounded border-ocean-300 text-ocean-600 focus:ring-ocean-500"
              />
              <span className="text-sm text-ocean-700">
                I agree to the{" "}
                <a href="#" className="text-ocean-600 hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-ocean-600 hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <label className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-3 rounded border-ocean-300 text-ocean-600 focus:ring-ocean-500"
              />
              <span className="text-sm text-ocean-700">
                I would like to receive promotional emails and special offers from WilderBeach Resort
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full h-14 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold text-lg">
              Complete Reservation
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
