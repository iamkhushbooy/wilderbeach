"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Star, ChevronRight, Play, Camera, Award, Shield, Heart } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
interface ActivityCardProps {
  activity: {
    id: number
    title: string
    subtitle: string
    description: string
    image: string
    duration: string
    groupSize: string
    rating: number
        category: string
    highlights: string[]
    difficulty: string
  }
  index: number
}

const activities = [
  {
    id: 1,
    title: "Jeep Safari Adventure",
    subtitle: "Track tigers in their natural habitat",
    description:
      "Experience the thrill of spotting majestic tigers and diverse wildlife in their pristine natural environment with our expert guides.",
    image: "/images/jeep.png",
    duration: "6 hours",
    groupSize: "8 people max",
    rating: 4.9,
    
    category: "Wildlife Safari",
    highlights: ["Tiger spotting", "Expert guides", "Photo opportunities", "Breakfast included"],
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Nature Trail Expedition",
    subtitle: "Walk, cycle & discover hidden gems",
    description:
      "Explore secret trails, discover exotic flora and fauna, and connect with nature through guided walks and cycling adventures.",
      image: "/images/natural.png",
    duration: "4 hours",
    groupSize: "12 people max",
    rating: 4.8,
        category: "Nature Connect",
    highlights: ["Bird watching", "Secret spots", "Small groups", "Flexible timing"],
    difficulty: "Moderate",
  },
  {
    id: 3,
    title: "Bush Dinner Experience",
    subtitle: "Dine under the stars in the wild",
    description:
      "Enjoy gourmet meals in the heart of nature with our unique bush dining experiences, from riverside picnics to starlit dinners.",
       image: "/images/dinner.png",
    duration: "3 hours",
    groupSize: "20 people max",
    rating: 5.0,
    
    category: "Unique Dinner",
    highlights: ["Riverside picnics", "Starlit dinners", "Poolside BBQ", "Local cuisine"],
    difficulty: "Easy",
  },
  {
    id: 4,
    title: "Cultural Immersion",
    subtitle: "Immerse in tribal culture & crafts",
    description:
      "Connect with local communities, learn traditional crafts, and experience authentic tribal culture through interactive workshops.",
   image: "/images/vibrant.png",
    duration: "5 hours",
    groupSize: "15 people max",
    rating: 4.7,
    
    category: "Cultural",
    highlights: ["Handmade pottery", "Tribal jewelry", "Fresh produce", "Local stories"],
    difficulty: "Easy",
  },
  {
    id: 5,
    title: "Art & Wellness Retreat",
    subtitle: "Unleash creativity in nature",
    description:
      "Combine artistic expression with wellness activities in our serene natural setting, perfect for relaxation and creativity.",
    image: "/images/workshop.png",
    duration: "4 hours",
    groupSize: "10 people max",
    rating: 4.9,
    
    category: "Creative",
    highlights: ["Pottery making", "Gond painting", "Kids program", "Meditation"],
    difficulty: "Easy",
  },
  {
    id: 6,
    title: "Adventure Photography",
    subtitle: "Capture the wild beauty",
    description:
      "Learn professional photography techniques while exploring the most photogenic spots in the wilderness with photographers.",
   image: "/images/jeep.png",
    duration: "8 hours",
    groupSize: "6 people max",
    rating: 4.8,
    
    category: "Photography",
    highlights: ["Professional guidance", "Equipment provided", "Golden hour shots", "Wildlife photography"],
    difficulty: "Moderate",
  },
]

const categoryColors = {
  "Wildlife Safari": "from-green-500 to-emerald-600",
  "Nature Connect": "from-blue-500 to-cyan-600",
  "Unique Dinner": "from-orange-300 to-red-400",
  Cultural: "from-purple-500 to-pink-600",
  Creative: "from-indigo-500 to-purple-600",
  Photography: "from-yellow-500 to-orange-600",
}

const difficultyColors = {
  Easy: "bg-green-100 text-green-800",
  Moderate: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
}

const ActivityCard = ({ activity, index }: ActivityCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <Card
        className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="relative overflow-hidden h-80">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={activity.image || "/placeholder.svg"}
              alt={activity.title}
              fill
              className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-tropical-100 animate-pulse" />
            )}
          </motion.div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge
              className={`bg-gradient-to-r ${categoryColors[activity.category as keyof typeof categoryColors]} text-white border-0 px-3 py-1 font-semibold`}
            >
              {activity.category}
            </Badge>
          </div>



          {/* Hover Actions */}
          {/* <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/20 flex items-center justify-center"
              >
                <div className="flex space-x-4">
                  <motion.button
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Play className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Camera className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence> */}

          {/* Bottom Info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="font-semibold">{activity.rating}</span>
              </div>
              <Badge className={`${difficultyColors[activity.difficulty as keyof typeof difficultyColors]} border-0`}>
                {activity.difficulty}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-8">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-ocean-600 transition-colors duration-300">
              {activity.title}
            </h3>
            <p className="text-ocean-600 font-semibold text-lg mb-3">{activity.subtitle}</p>
            <p className="text-gray-600 leading-relaxed">{activity.description}</p>
          </div>

          {/* Activity Details */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4 text-ocean-500" />
              <span>{activity.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-4 h-4 text-ocean-500" />
              <span>{activity.groupSize}</span>
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
            <div className="grid grid-cols-2 gap-2">
              {activity.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-center space-x-2 text-sm text-gray-600"
                >
                  <div className="w-1.5 h-1.5 bg-ocean-500 rounded-full" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
           <Link href={'/contact'}>
            <Button className="w-full bg-gradient-to-r from-ocean-600 to-tropical-600 hover:from-ocean-700 hover:to-tropical-700 text-white font-semibold py-3 text-lg group">
              Book Experience
              <motion.div className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </Button>
           </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function BookingSection() {
  const heroRef = useRef<HTMLElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: isClient ? heroRef : undefined,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-tropical-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-ocean-400/20 to-tropical-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-coral-400/20 to-paradise-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-luxury-400/10 to-sunset-400/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-24 left-10 w-4 h-4 bg-paradise-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 w-6 h-6 bg-coral-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-40 left-20 w-5 h-5 bg-tropical-400 rounded-full opacity-50"
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-10 overflow-hidden">
        <motion.div style={{ y }} className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Badge className="bg-gradient-to-r from-ocean-500 to-tropical-500 text-white border-0 px-6 py-2 text-lg font-semibold">
                🌟 Premium Experiences
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
              >
              
              <span className=" text-2xl md:text-5xl font-bold mb-8 block bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600  bg-clip-text text-transparent">
              Choose Your Adventure
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
            >
              Curated experiences designed for every explorer. From wildlife safaris to cultural immersions, discover
              activities that create lasting memories.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
            >
              {[
                { icon: Award, number: "10+", label: "Activities" },
                { icon: Shield, number: "24/7", label: "Support" },
                { icon: Star, number: "4.9", label: "Rating" },
                { icon: Heart, number: "100%", label: "Safe" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-ocean-600" />
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-ocean-600 to-tropical-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Activities Grid */}
      <section className="relative z-10 ">
        <div className="max-w-8xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {activities.map((activity, index) => (
              <ActivityCard key={activity.id} activity={activity} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore?</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Book your perfect adventure today and create memories that will last a lifetime.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-white text-ocean-600 hover:bg-gray-100 font-semibold px-10 py-4 text-lg shadow-xl"
                     >
                    Book Now
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-ocean-600 bg-transparent font-semibold px-10 py-4 text-lg"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
