"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function ActivitiesHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const textPhrases = [
    {
      title: "Wildlife Safari",
      subtitle: "Track tigers in their natural habitat",
    },
    {
      title: "Nature Trail Expedition",
      subtitle: "Walk, cycle & discover hidden gems",
    },
    {
      title: "Cultural Immersion",
      subtitle: "Immerse in tribal culture & crafts",
    },
    {
      title: "Adventure Photography",
      subtitle: "Capture the wild beauty of the jungle",
    },
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textPhrases.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [textPhrases.length])
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src="/images/activites-hero.png"
        alt="Resort Activities"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-4">
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        
            className="text-2xl md:text-5xl font-bold mb-6 text-gray-100"
          >
            {textPhrases[currentIndex].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            {textPhrases[currentIndex].subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  )
}