"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import Image from "next/image"
const galleryCategories = ["All", "Wildlife", "Rooms", "Dining","Beach & Pools", "Events"] 
const galleryImages = [
  {
    id: 1,
    src: "/images/g1.png",
    alt: "Wildlife",
    category: "Wildlife",
  },
  {
    id: 2,
    src: "/images/g4.png",
    alt: "Wildlife",
   category: "Wildlife",
  },
  {
    id: 3,
  src: "/images/g3.png",
    alt: "Wildlife",
    category: "Activities",
  },
  {
    id: 4,
    src: "/images/g2.png",
    alt: "Spa Treatment Room",
    category: "Rooms",
  },
  {
    id: 5,
  src: "/images/g5.png",
     alt: "Spa Treatment Room",
    category: "Rooms",
  },
  {
    id: 6,
  src: "/images/g6.png",
     alt: "Spa Treatment Room",
    category: "Rooms",
  },
  {
    id: 7,
  src: "/images/g7.png",
    alt: "Fine Dining Restaurant",
    category: "Dining",
  },
  {
    id: 8,
     src: "/images/g7.png",
   alt: "Fine Dining Restaurant",
    category: "Dining",
  },
  {
    id: 9,
      src: "/images/g7.png",
    alt: "Sunset Yoga Session",
    category: "Activities",
  },
  {
    id: 10,
       src: "/images/g7.png",
    alt: "Couples Massage",
    category: "Spa & Wellness",
  },
  {
    id: 11,
     src: "/images/g7.png",
    alt: "Private Beach",
    category: "Beach & Pools",
  },
  {
    id: 12,
    src: "/images/g7.png",
    alt: "Corporate Event",
    category: "Events",
  },
]
export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory,
  )

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = filteredImages.find((img) => img.id === selectedImage)

  return (
    <section className="py-10 bg-white">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
                       <h2 className="text-2xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
             Photo Gallery
            </span>
          </h2>
          
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto mb-8">
            Browse through our collection of stunning photographs showcasing the beauty and luxury of our resort.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-luxury-600 text-white shadow-lg"
                    : "bg-ocean-100 text-ocean-700 hover:bg-ocean-200 shadow-md hover:shadow-lg"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(image.id)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-luxury-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImageData.src || "/placeholder.svg"}
                  alt={selectedImageData.alt}
                  width={800}
                  height={600}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white font-bold text-lg">{selectedImageData.alt}</h3>
                  <p className="text-white/80 text-sm">{selectedImageData.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
