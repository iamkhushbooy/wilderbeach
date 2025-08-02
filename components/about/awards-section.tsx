"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Medal, Leaf, Shield, Users, Globe, Heart } from "lucide-react"
import Image from "next/image"

const awards = [
  {
    id: 1,
    title: "World's Best Resort",
    organization: "Travel + Leisure",
    year: "2023",
    description: "Recognized as the world's premier luxury resort destination.",
    icon: Trophy,
    image: "/placeholder.svg?height=100&width=100",
    gradient: "from-yellow-400 via-amber-500 to-orange-600",
    iconBg: "bg-gradient-to-br from-yellow-300 to-orange-400",
    iconColor: "text-white",
    shadow: "shadow-orange-300",
  },
  {
    id: 2,
    title: "Sustainable Tourism Award",
    organization: "Green Globe Certification",
    year: "2023",
    description: "Excellence in environmental stewardship and sustainable practices.",
    icon: Leaf,
    image: "/placeholder.svg?height=100&width=100",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    iconBg: "bg-gradient-to-br from-emerald-300 to-teal-400",
    iconColor: "text-white",
    shadow: "shadow-teal-300",
  },
  {
    id: 3,
    title: "Best Luxury Spa Resort",
    organization: "Spa & Wellness Association",
    year: "2022",
    description: "Outstanding wellness facilities and spa treatments.",
    icon: Star,
    image: "/placeholder.svg?height=100&width=100",
    gradient: "from-purple-400 via-violet-500 to-pink-600",
    iconBg: "bg-gradient-to-br from-purple-300 to-pink-400",
    iconColor: "text-white",
    shadow: "shadow-pink-300",
  },
  {
    id: 4,
    title: "Culinary Excellence Award",
    organization: "International Culinary Institute",
    year: "2022",
    description: "Recognition for exceptional dining experiences and culinary innovation.",
    icon: Award,
    image: "/placeholder.svg?height=100&width=100",
    gradient: "from-red-400 via-rose-500 to-fuchsia-600",
    iconBg: "bg-gradient-to-br from-red-300 to-fuchsia-400",
    iconColor: "text-white",
    shadow: "shadow-fuchsia-300",
  },
  {
    id: 5,
    title: "Best Beach Resort",
    organization: "Condé Nast Traveler",
    year: "2021",
    description: "Readers' choice award for best beachfront resort experience.",
    icon: Medal,
    image: "/placeholder.svg?height=100&width=100",
    gradient: "from-blue-400 via-sky-500 to-cyan-600",
    iconBg: "bg-gradient-to-br from-blue-300 to-cyan-400",
    iconColor: "text-white",
    shadow: "shadow-cyan-300",
  },
  {
    id: 6,
    title: "Hospitality Excellence",
    organization: "World Tourism Organization",
    year: "2021",
    description: "Outstanding service and guest satisfaction ratings.",
    icon: Trophy,
    image: "/placeholder.svg?height=100&width=100",
    gradient: "from-indigo-400 via-purple-500 to-violet-600",
    iconBg: "bg-gradient-to-br from-indigo-300 to-violet-400",
    iconColor: "text-white",
    shadow: "shadow-violet-300",
  },
]

const certifications = [
  {
    name: "Green Globe Certified",
    icon: Leaf,
    gradient: "from-green-400 to-emerald-500",
    iconColor: "text-white",
    iconBg: "bg-gradient-to-br from-green-300 to-emerald-400",
  },
  {
    name: "ISO 14001 Environmental Management",
    icon: Shield,
    gradient: "from-blue-400 to-cyan-500",
    iconColor: "text-white",
    iconBg: "bg-gradient-to-br from-blue-300 to-cyan-400",
  },
  {
    name: "LEED Gold Certified Buildings",
    icon: Award,
    gradient: "from-yellow-400 to-orange-500",
    iconColor: "text-white",
    iconBg: "bg-gradient-to-br from-yellow-300 to-orange-400",
  },
  {
    name: "Fair Trade Tourism Certified",
    icon: Users,
    gradient: "from-purple-400 to-pink-500",
    iconColor: "text-white",
    iconBg: "bg-gradient-to-br from-purple-300 to-pink-400",
  },
  {
    name: "Carbon Neutral Resort",
    icon: Globe,
    gradient: "from-gray-400 to-slate-500",
    iconColor: "text-white",
    iconBg: "bg-gradient-to-br from-gray-300 to-slate-400",
  },
  {
    name: "Marine Stewardship Council",
    icon: Heart,
    gradient: "from-sky-400 to-indigo-500",
    iconColor: "text-white",
    iconBg: "bg-gradient-to-br from-sky-300 to-indigo-400",
  },
]

export default function AwardsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements - more vibrant and dynamic */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-5 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl animate-blob-1"></div>
        <div className="absolute bottom-5 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full blur-3xl animate-blob-2"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full blur-3xl animate-blob-3"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full blur-3xl animate-blob-4"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
              Awards
            </span>
          </h2>
        
          </motion.h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has been recognized by leading travel and hospitality organizations worldwide.
          </p>
        </motion.div>

        {/* Awards Grid - more vibrant cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: `0 25px 50px -12px rgba(var(--${award.shadow.replace("shadow-", "").replace("-300", "")}-500-rgb), 0.25)`,
                transition: { duration: 0.3 },
              }}
              className={`bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group border border-white/20 relative overflow-hidden`}
            >
              {/* Stronger background gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              ></div>

              <div className="flex flex-col items-center justify-center mb-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-24 h-24 rounded-full ${award.iconBg} flex items-center justify-center shadow-lg mb-3 transition-all duration-300`}
                >
                  <Image
                    src={award.image || "/placeholder.svg"}
                    alt={award.organization}
                    width={70}
                    height={70}
                    className="rounded-lg object-contain drop-shadow-md"
                  />
                </motion.div>
                <div className="flex items-center space-x-2">
                  <award.icon className={`h-7 w-7 ${award.iconColor}`} />
                  <span className="text-lg font-bold text-slate-700">{award.year}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                {award.title}
              </h3>
              <p className="text-slate-600 font-semibold mb-3">{award.organization}</p>
              <p className="text-slate-700 text-sm leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications - more vibrant cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
          <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent text-center mb-8">
            Certifications & Memberships
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                className={`bg-gradient-to-br from-white to-slate-50 rounded-xl p-4 text-center border border-slate-200 hover:border-slate-300 transition-all duration-300 group relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
                ></div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${cert.iconBg} rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 relative z-10`}
                >
                  <cert.icon className={`h-8 w-8 ${cert.iconColor}`} />
                </motion.div>
                <p className="text-md font-semibold text-slate-800 relative z-10">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
     
    </section>
  )
}
