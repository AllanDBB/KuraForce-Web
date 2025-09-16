'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  isSpecialGuest?: boolean
}

const teamMembers: TeamMember[] = [
  {
    name: "Carolina",
    role: "Manufacturing Engineer",
    description: "Passionate about aerodynamics and precision engineering, Carolina leads our technical innovation with expertise in CAD design and performance optimization.",
    image: "/KuraMembers/Carolina.jpg"
  },
  {
    name: "David",
    role: "Team Leader",
    description: "David brings as a visionary leader, guiding our team with a focus on collaboration and innovation.",
    image: "/KuraMembers/David.jpg"
  },
  {
    name: "Esteban",
    role: "Design Engineer",
    description: "Esteban focuses on testing and optimization, analyzing every detail to push the boundaries of speed and efficiency in our F1 car design.",
    image: "/KuraMembers/Esteban.jpg"
  },
  {
    name: "Geicob",
    role: "Resource Manager",
    description: "Geicob drives our resource strategy, combining cutting-edge technology with creative solutions to achieve motorsport excellence.",
    image: "/KuraMembers/Geicob.jpg"
  },
  {
    name: "Mariana",
    role: "Marketing Manager",
    description: "Mariana oversees our marketing strategies, ensuring that our team's achievements are effectively communicated to the world.",
    image: "/KuraMembers/Mariana.jpg"
  },
  {
    name: "Felipe",
    role: "Graphic Designer",
    description: "Felipe brings our brand to life with stunning visuals and creative designs, ensuring a strong identity for our team.",
    image: "/KuraMembers/Felipe.png"
  }

]

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-white relative overflow-hidden">
      {/* Racing lines background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-32 h-0.5 bg-gradient-to-r from-green-racing/40 to-transparent" />
        <div className="absolute bottom-40 right-0 w-28 h-0.5 bg-gradient-to-l from-green-secondary/40 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-20 h-0.5 bg-gradient-to-r from-green-racing/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-4xl md:text-5xl lg:text-6xl text-green-racing mb-6">
            THE RACING CREW
          </h2>
          <p className="body-large text-xl md:text-2xl text-green-dark/80 max-w-3xl mx-auto">
            Meet the passionate engineers driving Costa Rican excellence in STEM Racing
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {/* First Row - 3 members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.filter(member => !member.isSpecialGuest).slice(0, 3).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl shadow-xl border border-green-racing/10 p-8 transition-all duration-300 hover:shadow-2xl hover:border-green-racing/30 hover:-translate-y-2">
                  {/* Member Photo */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full rounded-full object-cover border-4 border-green-racing/20 shadow-lg"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="heading-tertiary text-xl font-bold text-green-racing mb-2">
                      {member.name}
                    </h3>
                    <p className="caption text-green-secondary text-base font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="body-regular text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Racing accent */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-green-gradient rounded-b-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Second Row - 3 members centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.filter(member => !member.isSpecialGuest).slice(3, 6).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl shadow-xl border border-green-racing/10 p-8 transition-all duration-300 hover:shadow-2xl hover:border-green-racing/30 hover:-translate-y-2">
                  {/* Member Photo */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full rounded-full object-cover border-4 border-green-racing/20 shadow-lg"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="heading-tertiary text-xl font-bold text-green-racing mb-2">
                      {member.name}
                    </h3>
                    <p className="caption text-green-secondary text-base font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="body-regular text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Racing accent */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-green-gradient rounded-b-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}