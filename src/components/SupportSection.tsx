'use client'

import { motion } from 'framer-motion'

interface SupportOption {
  title: string
  subtitle: string
  description: string
  features: string[]
  ctaText: string
  ctaAction: string
  icon: string
  gradient: string
}

const supportOptions: SupportOption[] = [
  {
    title: "SPONSORSHIP PACKAGES",
    subtitle: "Partner with us for maximum visibility",
    description: "Join forces with Kura Force and showcase your brand on the international stage of STEM Racing.",
    features: [
      "Logo on race car",
      "Social media presence", 
      "Event partnerships",
      "Brand visibility at competitions"
    ],
    ctaText: "Contact for Partnership",
    ctaAction: "mailto:forcekura@gmail.com?subject=Sponsorship Partnership Inquiry",
    icon: "PARTNER",
    gradient: "from-green-racing to-green-secondary"
  },
  {
    title: "DIRECT DONATIONS",
    subtitle: "Every contribution brings us closer to Singapore 2025",
    description: "Support our journey to represent Costa Rica at the highest level of STEM Racing competition.",
    features: [
      "Direct team support",
      "Equipment funding",
      "Travel assistance",
      "Competition preparation"
    ],
    ctaText: "Donate Now",
    ctaAction: "mailto:forcekura@gmail.com?subject=Donation Inquiry",
    icon: "FUND",
    gradient: "from-green-secondary to-green-racing"
  },
  {
    title: "SINPE MÓVIL",
    subtitle: "The fastest way to support us from Costa Rica",
    description: "Quick and secure mobile donations for Costa Rican supporters using the national mobile payment system.",
    features: [
      "Instant transfers",
      "Secure payments",
      "Costa Rican platform",
      "Direct team funding"
    ],
    ctaText: "Send SINPE",
    ctaAction: "tel:8831-1022",
    icon: "MOBILE",
    gradient: "from-green-secondary to-green-dark"
  }
]

export default function SupportSection() {
  return (
    <section id="support" className="section-padding bg-white relative overflow-hidden">
      {/* F1 Speed Lines Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-0 w-32 h-0.5 bg-gradient-to-r from-green-racing/40 to-transparent" />
          <div className="absolute top-40 right-0 w-24 h-0.5 bg-gradient-to-l from-green-secondary/40 to-transparent" />
          <div className="absolute bottom-60 left-1/4 w-20 h-0.5 bg-gradient-to-r from-green-secondary/40 to-transparent" />
          <div className="absolute bottom-32 right-1/3 w-28 h-0.5 bg-gradient-to-l from-green-racing/40 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="heading-secondary text-4xl md:text-5xl lg:text-6xl text-green-racing mb-6"
          >
            HOW TO SUPPORT US
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="body-large text-xl md:text-2xl text-green-dark/80 max-w-3xl mx-auto"
          >
            Help us represent Costa Rica at the highest level
          </motion.p>
        </motion.div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {supportOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative p-8 bg-white rounded-3xl shadow-lg border border-green-racing/10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green-racing/20 group-hover:border-green-racing/30 overflow-hidden h-full">
                
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Speed Lines Effect */}
                <div className="absolute inset-0 speed-lines opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-xl md:text-2xl font-bold heading-tertiary text-green-racing mb-6 group-hover:text-green-secondary transition-all duration-300"
                >
                  {option.icon}
                </motion.div>

                {/* Title */}
                <h3 className="heading-tertiary text-2xl md:text-3xl text-green-racing mb-4 group-hover:text-green-secondary transition-colors duration-300">
                  {option.title}
                </h3>

                {/* Subtitle */}
                <p className="text-lg md:text-xl font-semibold text-green-secondary mb-4 group-hover:text-green-racing transition-colors duration-300">
                  {option.subtitle}
                </p>

                {/* Description */}
                <p className="body-regular text-green-dark/80 mb-6 leading-relaxed group-hover:text-green-dark transition-colors duration-300">
                  {option.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (featureIndex * 0.1) }}
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

                {/* CTA Button */}
                <motion.a
                  href={option.ctaAction}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full text-center px-6 py-4 bg-gradient-to-r ${option.gradient} text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-racing/30 caption`}
                >
                  {option.ctaText}
                </motion.a>

                {/* Special Note for SINPE */}
                {option.title === "SINPE MÓVIL" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="mt-4 p-3 bg-green-racing/5 rounded-lg border border-green-racing/20"
                  >
                    <p className="text-sm text-green-racing text-center caption">
                      <span className="font-bold">8831-1022</span>
                    </p>
                    <p className="text-xs text-green-dark/60 text-center mt-1">
           
                    </p>
                  </motion.div>
                )}

                {/* Accent Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute bottom-0 left-0 h-2 bg-gradient-to-r ${option.gradient} group-hover:h-3 transition-all duration-300`}
                />

                {/* Corner Decorations */}
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-green-racing/20 group-hover:border-green-racing/60 transition-colors duration-300" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-green-racing/20 group-hover:border-green-racing/60 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="max-w-4xl mx-auto p-8 bg-light-gradient rounded-3xl border border-green-racing/20">
            <h3 className="heading-tertiary text-2xl md:text-3xl text-green-racing mb-4">
              Every Contribution Matters
            </h3>
            <p className="body-large text-lg text-green-dark/80 mb-6">
              Whether you're a major sponsor or making a small donation, your support helps us 
              push the boundaries of engineering excellence and represent Costa Rica with pride 
              on the international stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:forcekura@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-green-gradient text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg caption"
              >
                Contact Us
              </motion.a>
              <motion.a
                href="https://instagram.com/kura.force"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-green-racing text-green-racing font-semibold rounded-full transition-all duration-300 hover:bg-green-racing hover:text-white caption"
              >
                Follow Our Journey
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}