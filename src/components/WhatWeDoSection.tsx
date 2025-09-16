'use client'

import { motion } from 'framer-motion'

interface ServiceCard {
  title: string
  description: string
  icon: string
  features: string[]
  gradient: string
}

const services: ServiceCard[] = [
  {
    title: "Design",
    description: "Advanced CAD modeling and aerodynamic optimization",
    icon: "DESIGN",
    features: [
      "3D CAD Modeling",
      "Aerodynamic Analysis",
      "Performance Simulation",
      "Design Optimization"
    ],
    gradient: "from-green-racing to-green-secondary"
  },
  {
    title: "Manufacturing", 
    description: "Precision 3D printing and fabrication with quality control",
    icon: "BUILD",
    features: [
      "3D Printing Excellence",
      "Quality Control",
      "Material Testing",
      "Precision Assembly"
    ],
    gradient: "from-green-secondary to-green-dark"
  },
  {
    title: "Testing",
    description: "Performance analysis and optimization for maximum speed",
    icon: "TEST",
    features: [
      "Performance Testing",
      "Data Analysis",
      "Speed Optimization",
      "Track Simulation"
    ],
    gradient: "from-green-dark to-green-racing"
  },
  {
    title: "Innovation",
    description: "Pushing boundaries of engineering excellence",
    icon: "INNOVATE",
    features: [
      "Research & Development",
      "Technology Integration",
      "Creative Solutions",
      "Future Concepts"
    ],
    gradient: "from-green-racing to-green-secondary"
  }
]

export default function WhatWeDoSection() {
  return (
    <section id="whatwedo" className="section-padding bg-light-gradient">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary text-4xl md:text-5xl lg:text-6xl text-gradient-green mb-6">
            WHAT WE DO
          </h2>
          <p className="body-large text-xl md:text-2xl text-green-dark/80 max-w-3xl mx-auto">
            Engineering excellence through innovation, precision, and passion for motorsport.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-green-racing/10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-racing/20 group-hover:border-green-racing/30 overflow-hidden">
                
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Speed Lines Effect */}
                <div className="absolute inset-0 speed-lines opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-xl md:text-2xl font-bold heading-tertiary text-green-racing mb-6 group-hover:text-green-secondary transition-all duration-300"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="heading-tertiary text-2xl md:text-3xl text-green-racing mb-4 group-hover:text-green-secondary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="body-regular text-green-dark/80 mb-6 leading-relaxed group-hover:text-green-dark transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm caption text-green-dark/70 group-hover:text-green-dark transition-colors duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className="w-2 h-2 bg-green-secondary rounded-full mr-3 group-hover:bg-green-racing transition-colors duration-300"
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:h-2 transition-all duration-300`}
                />

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-green-racing/20 group-hover:border-green-racing/60 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-green-racing/20 group-hover:border-green-racing/60 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="body-large text-lg md:text-xl text-green-dark/80 mb-8 max-w-2xl mx-auto">
            Ready to see our engineering excellence in action? Discover how we're pushing 
            the boundaries of STEM Racing competition.
          </p>
          
          <motion.a
            href="#sponsors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-green-gradient text-white font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-racing/30 caption"
          >
            Meet Our Partners
            <motion.svg
              whileHover={{ x: 5 }}
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}