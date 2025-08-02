"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function GalleryHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      
      <Image
        src="/images/gallery-hero.png"
        alt="Resort Gallery"
        fill
        className="object-cover"
        priority
      />
   

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Visual Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Explore the beauty and luxury of WilderBeach Resort through our stunning gallery
          </motion.p>
        </div>
      </div>
    </section>
  )
}
