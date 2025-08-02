"use client"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Rachel Green",
    location: "Gorakhpur",
    rating: 5,
    text: "WilderBeach Resort exceeded all our expectations. The service was impeccable, the views were breathtaking, and every detail was perfect. We can't wait to return!",
    image: "/about/gues1.jpg",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    name: "Ross Geller",
    location: "Kanpur",
    rating: 5,
    text: "An absolutely magical experience. From the moment we arrived, we were treated like royalty. The spa treatments were divine and the dining was world-class.",
   image: "/about/guest2.jpg",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    id: 3,
    name: "Phoebe Buffay",
    location: "Banaras",
    rating: 5,
    text: "This resort is paradise on earth. The staff went above and beyond to make our honeymoon unforgettable. The sunset views from our villa were simply stunning.",
    image: "/about/guest3.jpg",
    color: "from-purple-500 to-purple-600",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
            <Star className="h-6 w-6 text-tropical-600 fill-current" />
          </div>
                  <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
              What Our Guests Say
            </span>
          </h2>
        
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our guests about their unforgettable experiences at WilderBeach
            Resort.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm 
              hover:-translate-y-2 relative overflow-hidden">
                {/* Colored top border */}
                <div className={`h-1 w-full bg-gradient-to-r ${testimonial.color}`} />

                <CardContent className="p-8 relative">
                  {/* Quote icon with colored background */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} mb-6 shadow-lg`}
                  >
                    <Quote className="h-6 w-6 text-white" />
                  </div>

                  {/* Rating stars */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current mr-1" />
                    ))}
                    <span className="ml-2 text-sm font-medium text-slate-600">{testimonial.rating}.0</span>
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-slate-700 leading-relaxed mb-8 text-lg font-medium italic relative">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author info */}
                  <div className="flex items-center">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-4 ring-4 ring-white shadow-lg"
                      />
                    
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${testimonial.color} rounded-full ring-2 ring-white`}
                      />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                      <p className="text-slate-500 font-medium">{testimonial.location}</p>
                    </div>
                  </div>

                  {/* Decorative element */}
                  {/* <div
                    className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${testimonial.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  /> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 cursor-pointer">
            <Star className="h-4 w-4 fill-current" />
            <span>Read More Reviews</span>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
