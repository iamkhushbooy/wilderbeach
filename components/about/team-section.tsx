// "use client"

// import { motion } from "framer-motion"
// import { Linkedin, Twitter, Mail } from "lucide-react"
// import Image from "next/image"

// const teamMembers = [
//   {
//     id: 1,
//     name: "James Wilder",
//     position: "Founder & CEO",
//     image: "/placeholder.svg?height=300&width=300&text=James+Wilder",
//     bio: "Visionary founder with over 30 years in luxury hospitality. James established WilderBeach Resort with a dream to create the world's most extraordinary beachfront sanctuary.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "james@wilderbeach.com",
//     },
//   },
//   {
//     id: 2,
//     name: "Sarah Martinez",
//     position: "General Manager",
//     image: "/placeholder.svg?height=300&width=300&text=Sarah+Martinez",
//     bio: "Award-winning hospitality professional with expertise in luxury resort operations. Sarah ensures every guest experience exceeds expectations through her attention to detail.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "sarah@wilderbeach.com",
//     },
//   },
//   {
//     id: 3,
//     name: "David Chen",
//     position: "Director of Operations",
//     image: "/placeholder.svg?height=300&width=300&text=David+Chen",
//     bio: "Operations expert with a passion for sustainable tourism. David oversees all resort operations while maintaining our commitment to environmental responsibility.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "david@wilderbeach.com",
//     },
//   },
//   {
//     id: 4,
//     name: "Maria Rodriguez",
//     position: "Guest Experience Director",
//     image: "/placeholder.svg?height=300&width=300&text=Maria+Rodriguez",
//     bio: "Dedicated to creating memorable experiences for every guest. Maria leads our concierge and guest services teams with warmth and professionalism.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "maria@wilderbeach.com",
//     },
//   },
//   {
//     id: 5,
//     name: "Thomas Anderson",
//     position: "Head of Sustainability",
//     image: "/placeholder.svg?height=300&width=300&text=Thomas+Anderson",
//     bio: "Environmental scientist committed to preserving our natural paradise. Thomas leads our sustainability initiatives and conservation programs.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "thomas@wilderbeach.com",
//     },
//   },
//   {
//     id: 6,
//     name: "Elena Petrov",
//     position: "Wellness Director",
//     image: "/placeholder.svg?height=300&width=300&text=Elena+Petrov",
//     bio: "Certified wellness expert with a holistic approach to health and relaxation. Elena oversees our spa and wellness programs with expertise and care.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       email: "elena@wilderbeach.com",
//     },
//   },
// ]

// export default function TeamSection() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-ocean-50 to-white">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-ocean-950 mb-6">Meet Our Team</h2>
//           <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
//             Our passionate team of hospitality professionals is dedicated to making your stay at WilderBeach Resort
//             truly exceptional.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={member.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
//             >
//               <div className="relative overflow-hidden">
//                 <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
//                   <Image
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     width={300}
//                     height={300}
//                     className="w-full h-64 object-cover"
//                   />
//                 </motion.div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-ocean-950 mb-2">{member.name}</h3>
//                 <p className="text-ocean-600 font-semibold mb-4">{member.position}</p>
//                 <p className="text-ocean-700 leading-relaxed mb-6 text-sm">{member.bio}</p>

//                 <div className="flex space-x-4">
//                   <motion.a
//                     href={member.social.linkedin}
//                     whileHover={{ scale: 1.2, y: -2 }}
//                     className="bg-ocean-100 hover:bg-ocean-200 p-2 rounded-full transition-colors duration-300"
//                   >
//                     <Linkedin className="h-4 w-4 text-ocean-600" />
//                   </motion.a>
//                   <motion.a
//                     href={member.social.twitter}
//                     whileHover={{ scale: 1.2, y: -2 }}
//                     className="bg-ocean-100 hover:bg-ocean-200 p-2 rounded-full transition-colors duration-300"
//                   >
//                     <Twitter className="h-4 w-4 text-ocean-600" />
//                   </motion.a>
//                   <motion.a
//                     href={`mailto:${member.social.email}`}
//                     whileHover={{ scale: 1.2, y: -2 }}
//                     className="bg-ocean-100 hover:bg-ocean-200 p-2 rounded-full transition-colors duration-300"
//                   >
//                     <Mail className="h-4 w-4 text-ocean-600" />
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "James Wilder",
    position: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300&text=James+Wilder",
    bio: "Visionary founder with over 30 years in luxury hospitality. James established WilderBeach Resort with a dream to create the world's most extraordinary beachfront sanctuary.",
    social: { linkedin: "#", twitter: "#", email: "james@wilderbeach.com" },
    cardBg: "from-blue-50 to-indigo-100",
    hoverBorder: "border-blue-500",
    socialBg: "bg-blue-100",
    socialHoverBg: "bg-blue-600",
    socialIconColor: "text-blue-600",
    socialIconHoverColor: "text-white",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    position: "General Manager",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+Martinez",
    bio: "Award-winning hospitality professional with expertise in luxury resort operations. Sarah ensures every guest experience exceeds expectations through her attention to detail.",
    social: { linkedin: "#", twitter: "#", email: "sarah@wilderbeach.com" },
    cardBg: "from-emerald-50 to-teal-100",
    hoverBorder: "border-emerald-500",
    socialBg: "bg-emerald-100",
    socialHoverBg: "bg-emerald-600",
    socialIconColor: "text-emerald-600",
    socialIconHoverColor: "text-white",
  },
  {
    id: 3,
    name: "David Chen",
    position: "Director of Operations",
    image: "/placeholder.svg?height=300&width=300&text=David+Chen",
    bio: "Operations expert with a passion for sustainable tourism. David oversees all resort operations while maintaining our commitment to environmental responsibility.",
    social: { linkedin: "#", twitter: "#", email: "david@wilderbeach.com" },
    cardBg: "from-purple-50 to-pink-100",
    hoverBorder: "border-purple-500",
    socialBg: "bg-purple-100",
    socialHoverBg: "bg-purple-600",
    socialIconColor: "text-purple-600",
    socialIconHoverColor: "text-white",
  },
  {
    id: 4,
    name: "Maria Rodriguez",
    position: "Guest Experience Director",
    image: "/placeholder.svg?height=300&width=300&text=Maria+Rodriguez",
    bio: "Dedicated to creating memorable experiences for every guest. Maria leads our concierge and guest services teams with warmth and professionalism.",
    social: { linkedin: "#", twitter: "#", email: "maria@wilderbeach.com" },
    cardBg: "from-yellow-50 to-orange-100",
    hoverBorder: "border-yellow-500",
    socialBg: "bg-yellow-100",
    socialHoverBg: "bg-yellow-600",
    socialIconColor: "text-yellow-600",
    socialIconHoverColor: "text-white",
  },
  {
    id: 5,
    name: "Thomas Anderson",
    position: "Head of Sustainability",
    image: "/placeholder.svg?height=300&width=300&text=Thomas+Anderson",
    bio: "Environmental scientist committed to preserving our natural paradise. Thomas leads our sustainability initiatives and conservation programs.",
    social: { linkedin: "#", twitter: "#", email: "thomas@wilderbeach.com" },
    cardBg: "from-red-50 to-rose-100",
    hoverBorder: "border-red-500",
    socialBg: "bg-red-100",
    socialHoverBg: "bg-red-600",
    socialIconColor: "text-red-600",
    socialIconHoverColor: "text-white",
  },
  {
    id: 6,
    name: "Elena Petrov",
    position: "Wellness Director",
    image: "/placeholder.svg?height=300&width=300&text=Elena+Petrov",
    bio: "Certified wellness expert with a holistic approach to health and relaxation. Elena oversees our spa and wellness programs with expertise and care.",
    social: { linkedin: "#", twitter: "#", email: "elena@wilderbeach.com" },
    cardBg: "from-cyan-50 to-blue-100",
    hoverBorder: "border-cyan-500",
    socialBg: "bg-cyan-100",
    socialHoverBg: "bg-cyan-600",
    socialIconColor: "text-cyan-600",
    socialIconHoverColor: "text-white",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full blur-3xl"></div>
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
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
               <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          </motion.h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Our passionate team of hospitality professionals is dedicated to making your stay at WilderBeach Resort
            truly exceptional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              className={`bg-gradient-to-br ${member.cardBg} rounded-3xl shadow-xl transition-all duration-500 overflow-hidden group border border-white/20 hover:${member.hoverBorder}`}
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} className="w-full h-64 relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-3xl"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{member.name}</h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-lg font-semibold text-slate-700 mb-2">{member.position}</p>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`${member.socialBg} hover:${member.socialHoverBg} p-3 rounded-full transition-all duration-300 flex items-center justify-center`}
                  >
                    <Linkedin
                      className={`h-5 w-5 ${member.socialIconColor} group-hover:${member.socialIconHoverColor} transition-colors duration-300`}
                    />
                  </motion.a>
                  <motion.a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`${member.socialBg} hover:${member.socialHoverBg} p-3 rounded-full transition-all duration-300 flex items-center justify-center`}
                  >
                    <Twitter
                      className={`h-5 w-5 ${member.socialIconColor} group-hover:${member.socialIconHoverColor} transition-colors duration-300`}
                    />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.social.email}`}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`${member.socialBg} hover:${member.socialHoverBg} p-3 rounded-full transition-all duration-300 flex items-center justify-center`}
                  >
                    <Mail
                      className={`h-5 w-5 ${member.socialIconColor} group-hover:${member.socialIconHoverColor} transition-colors duration-300`}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
