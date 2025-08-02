"use client"
import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

const textPhrases = [
  {
    title: "Our Story",
    subtitle: "Discover the passion and vision behind WilderBeach Resort",
  },
  {
    title: "Your Escape",
    subtitle: "Experience luxury and tranquility at our beachfront paradise",
  },
  {
    title: "Unforgettable Moments",
    subtitle: "Create cherished memories with us at WilderBeach",
  },
  {
    title: "Nature & Luxury",
    subtitle: "Where pristine beaches meet world-class hospitality",
  },
]

export default function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const textControls = useAnimationControls()
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    const animateText = async () => {
      if (!isMounted.current) return

      await textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      })

      await new Promise((resolve) => setTimeout(resolve, 3000))

      if (!isMounted.current) return

      await textControls.start({
        opacity: 0,
        y: -50,
        transition: { duration: 0.6, ease: "easeIn" },
      })
    }

    animateText()
  }, [currentIndex, textControls])

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textPhrases.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[70vh] overflow-hidden">
    
      <Image
        src="/about/about.jpg"
        alt="Luxury Accommodations"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-ocean-950/30 z-0" />

      {/* Text */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-ocean-500 max-w-4xl mx-auto px-4">
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 50 }}
            animate={textControls}
            className="text-2xl md:text-5xl font-bold mb-6"
          >
            {textPhrases[currentIndex].title}
          </motion.h1>
          <motion.p
            key={`subtitle-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={textControls}
            className="text-xl md:text-2xl text-white/90"
          >
            {textPhrases[currentIndex].subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
