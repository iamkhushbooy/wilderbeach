"use client"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Crown, Waves } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Luxury Accommodations",
    description:
      "Indulge in our meticulously designed suites, villas with breathtaking ocean views and world-class amenities.",
    image: "/luxuary/l1.png",
    link: "/accommodations",
    icon: Crown,
    gradient: "from-luxury-500 to-luxury-700",
    glowColor: "glow-luxury",
  },
  {
    title: "World-Class Dining",
    description:
      "Savor exquisite cuisine crafted by renowned chefs using finest local ingredients, innovative techniques.",
    image: "/luxuary/l3.png",
    link: "/dining",
    icon: Sparkles,
    gradient: "from-coral-500 to-sunset-600",
    glowColor: "glow-coral",
  },
  {
    title: "Endless Adventures",
    description:
      "From thrilling water sports to relaxing spa treatments, discover your perfect adventure in paradise.",
    image: "/luxuary/l2.png",
    link: "/activities",
    icon: Waves,
    gradient: "from-ocean-500 to-tropical-600",
    glowColor: "glow-ocean",
  },

]

export default function FeaturedSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">

      {/* Background Gradient Bubbles like FeaturedSection */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-ocean-400 to-tropical-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-coral-400 to-paradise-400 rounded-full blur-3xl" />
      </div>

      {/* Floating Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-10 w-4 h-4 bg-paradise-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 w-6 h-6 bg-coral-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-40 left-20 w-5 h-5 bg-tropical-400 rounded-full opacity-50"
        />
      </div>


      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Sparkles className="h-12 w-12 text-ocean-500 mx-auto mb-4" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
              Experience Pure Luxury
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover what makes WilderBeach Resort the ultimate destination for those seeking extraordinary experiences
            and unparalleled comfort in a tropical paradise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Left for even index, right for odd index
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-700 group h-full border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} className="relative">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  {/* Floating Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className={`absolute top-6 right-6 p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} ${feature.glowColor} shadow-xl`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                </div>

                <CardContent className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-ocean-600 group-hover:to-tropical-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">{feature.description}</p>

                    <Link href={feature.link}>
                      <Button
                        variant="outline"
                        className={`group/btn border-2 bg-gradient-to-r ${feature.gradient} text-white border-transparent hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl px-6 py-3`}
                      >
                        Discover More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-ocean-600 via-tropical-500 to-luxury-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-600/90 via-tropical-500/90 to-luxury-600/90" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Paradise?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Book your stay today and discover why WilderBeach Resort is the world's most extraordinary destination.
              </p>
              <Link href="/booking">
                <Button
                  size="lg"
                  className="bg-white text-ocean-600 hover:bg-gray-100 px-10 py-4 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Crown className="mr-3 h-6 w-6" />
                  Book Your Escape
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}