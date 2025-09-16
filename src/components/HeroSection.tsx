'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../../public/f1-lottie.json'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-dark/20 via-transparent to-carbon-black/40" />
      
      {/* Lottie Animation Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-full h-full max-w-4xl opacity-30">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Speed Lines Effect */}
      <div className="absolute inset-0 speed-lines opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="heading-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-white-green racing-glow"
          >
            KURA FORCE
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2"
          >
            <h2 className="heading-secondary text-2xl sm:text-3xl md:text-4xl text-white/90">
              STEM RACING
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-green-secondary font-medium"
            >
              Costa Rica
            </motion.p>
          </motion.div>

          {/* Epic Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="body-large text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            Where precision engineering meets extreme speed, and every innovation 
            represents a step towards excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#team"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-gradient text-white font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-racing/30 caption"
            >
              Meet the Team
            </motion.a>
            
            <motion.a
              href="#support"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-green-secondary text-green-secondary font-semibold rounded-full text-lg transition-all duration-300 hover:bg-green-secondary hover:text-white hover:shadow-2xl hover:shadow-green-secondary/30 caption"
            >
              Support Us
            </motion.a>
          </motion.div>
        </motion.div>

      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-20 bg-green-secondary/30 transform rotate-12 blur-sm" />
      <div className="absolute bottom-40 right-16 w-1 h-16 bg-green-racing/40 transform -rotate-12 blur-sm" />
      <div className="absolute top-1/3 right-8 w-3 h-3 bg-green-racing rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-12 w-2 h-2 bg-green-accent rounded-full animate-pulse delay-1000" />
    </section>
  )
}