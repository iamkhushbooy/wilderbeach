"use client"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="shadow-2xl border-0">
        <CardHeader className="text-center pb-2">
          <h3 className="text-2xl font-bold text-ocean-950 mb-2">Send us a Message</h3>
          <p className="text-ocean-700">We'll get back to you within 24 hours</p>
        </CardHeader>

        <CardContent className="p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label className="block text-sm font-semibold text-ocean-800 mb-2">First Name *</label>
                <Input
                  placeholder="your firstname"
                  className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label className="block text-sm font-semibold text-ocean-800 mb-2">Last Name *</label>
                <Input
                  placeholder="your lastname"
                  className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
                  required
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-ocean-800 mb-2">Email Address *</label>
              <Input
                type="email"
                placeholder="wilderbeach@example.com"
                className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-ocean-800 mb-2">Phone Number</label>
              <Input
                type="number"
                placeholder="+91 6265040030 "
                className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label className="block text-sm font-semibold text-ocean-800 mb-2">Subject</label>
              <select className="w-full h-12 border border-ocean-300 rounded-md px-3 focus:border-ocean-500 focus:ring-ocean-500 bg-white text-ocean-700">
                <option value="">Select a subject</option>
                <option value="reservation">Reservation Inquiry</option>
                <option value="dining">Dining Reservations</option>
                <option value="activities">Activities & Experiences</option>
                <option value="events">Events & Weddings</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label className="block text-sm font-semibold text-ocean-800 mb-2">Message *</label>
              <Textarea
                placeholder="Tell us about your dream vacation or ask us any questions..."
                rows={6}
                className="border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500 resize-none"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              >
              <Button
                type="submit"
                className="w-full h-12 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold text-lg flex items-center justify-center"
                >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
