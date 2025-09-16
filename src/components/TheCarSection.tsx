'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TheCarSection() {
  const [currentRender, setCurrentRender] = useState(0)
  
  const renderImages = [
    '/render fondo bonito/r1 fondo.png',
    '/render fondo bonito/r2 fondo.png',
    '/render fondo bonito/r3 fondo.png',
    '/render fondo bonito/r4 fondo.png',
    '/render fondo bonito/r5 fondo.png',
    '/render fondo bonito/r6 fondo.png',
    '/render fondo bonito/r7 fondo.png',
    '/render fondo bonito/r8 fondo.png',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRender((prev) => (prev + 1) % renderImages.length)
    }, 4000) // Change image every 4 seconds (slower)

    return () => clearInterval(interval)
  }, [renderImages.length])

  return (
    <section id="the-car" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="racing-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22643c" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#racing-grid)" />
        </svg>
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
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-green-gradient mx-auto mb-6 rounded-full"
          />
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="heading-primary text-4xl md:text-6xl lg:text-7xl text-green-racing mb-6"
          >
            THE CAR
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="body-large text-green-dark/80 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Engineering precision meets aerodynamic excellence. Our F1 car represents 
            countless hours of design, testing, and innovation by our talented team.
          </motion.p>
        </motion.div>

        {/* Car Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Circular Car Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-green-racing/20 border-dashed"
              />
              
              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-green-secondary/30"
              />
              
              {/* Inner Circle with Car */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square bg-gradient-to-br from-slate-100 via-white to-slate-200 rounded-full p-3 shadow-2xl shadow-green-racing/30 border-4 border-green-racing/20"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 ring-2 ring-green-racing/10">
                  {/* Subtle grid pattern background */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #22643c 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  <motion.div
                    key={currentRender}
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center p-1"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={renderImages[currentRender]}
                        alt="Kura Force F1 Car"
                        fill
                        className="object-contain scale-150"
                        priority
                      />
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Racing Lines Effect */}
                  <motion.div
                    animate={{ x: [-400, 400] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="absolute top-1/3 left-0 w-24 h-0.5 bg-gradient-to-r from-transparent via-green-racing/50 to-transparent"
                  />
                  <motion.div
                    animate={{ x: [-400, 400] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }}
                    className="absolute bottom-1/3 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-green-secondary/40 to-transparent"
                  />
                  <motion.div
                    animate={{ x: [-400, 400] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 2 }}
                    className="absolute top-2/3 left-0 w-16 h-0.5 bg-gradient-to-r from-transparent via-green-racing/30 to-transparent"
                  />
                </div>
                
                {/* Enhanced Glowing Effect */}
                <div className="absolute inset-0 rounded-full bg-green-racing/5 blur-2xl opacity-60" />
                <div className="absolute inset-2 rounded-full bg-green-secondary/5 blur-xl opacity-40" />
              </motion.div>
              
              {/* Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {renderImages.map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: currentRender === index ? 1.2 : 1,
                      backgroundColor: currentRender === index ? '#22643c' : '#d1d5db'
                    }}
                    className="w-2 h-2 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Car Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-secondary text-3xl md:text-4xl text-green-racing mb-4">
                Precision Engineering
              </h3>
              <p className="body-regular text-green-dark/70 text-lg leading-relaxed">
                Every component of our F1 car has been meticulously designed and tested 
                to achieve optimal performance on the track.
              </p>
            </div>
            
            {/* Specifications */}
            <div className="space-y-4">
              {[
                { label: 'Aerodynamics', value: 'Optimized for maximum downforce' },
                { label: 'Weight', value: 'Minimal weight, maximum strength' },
                { label: 'Materials', value: 'Advanced composite materials' },
                { label: 'Design', value: 'Computer-aided precision engineering' }
              ].map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border border-green-racing/10"
                >
                  <div className="w-2 h-2 bg-green-racing rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-racing caption">{spec.label}</p>
                    <p className="text-green-dark/70 caption text-sm">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 w-16 h-16 border-2 border-green-racing/20 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-10 w-12 h-12 border-2 border-green-secondary/20 rounded-full"
      />
    </section>
  )
}