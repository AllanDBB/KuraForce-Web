'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const stats = [
    { number: "6", label: "Team Members", icon: "TEAM" },
    { number: "100%", label: "Dedication", icon: "POWER" },
    { number: "1", label: "Dream", icon: "TARGET" }
  ]

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/1.mp4" type="video/mp4" />
          <source src="/2.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-dark/95 via-carbon-black/90 to-green-racing/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="heading-primary text-5xl md:text-6xl lg:text-7xl text-green-secondary mb-8"
          >
            WHO WE ARE
          </motion.h2>

          {/* Main Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="body-large text-2xl md:text-3xl text-white/90 leading-relaxed mb-8"
          >
            We are <span className="text-green-secondary font-semibold">Kura Force</span>, 
            a passionate team of young engineers from Costa Rica competing in STEM Racing.
          </motion.p>

          {/* Mission Statement */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="body-large text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-16"
          >
            Our team represents the future of motorsport engineering, combining 
            innovation, precision, and Costa Rican excellence on the global stage.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-green-racing/30 hover:border-green-racing/50 transition-all duration-300"
              >
                <div className="text-2xl font-bold heading-tertiary text-green-secondary mb-4">{stat.icon}</div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2, type: 'spring', bounce: 0.4 }}
                  viewport={{ once: true }}
                  className="heading-primary text-4xl md:text-5xl lg:text-6xl text-green-secondary racing-glow mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="caption text-lg md:text-xl text-white/80 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-10 right-10 w-4 h-4 border border-green-secondary/40 transform rotate-45"
        />
        
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-20 left-8 w-6 h-6 border border-green-secondary/40"
        />

        {/* Racing Lines */}
        <div className="absolute top-1/4 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-green-secondary/60 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-16 h-0.5 bg-gradient-to-l from-transparent via-green-secondary/60 to-transparent" />
      </motion.div>

      {/* Parallax Racing Stripes */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -150]) }}
        className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-green-racing/30 to-transparent"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 100]) }}
        className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-green-secondary/30 to-transparent"
      />
    </section>
  )
}