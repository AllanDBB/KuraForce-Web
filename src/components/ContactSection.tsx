'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:forcekura@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section 
      id="contact"
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
          <source src="/2.mp4" type="video/mp4" />
          <source src="/1.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay with Green Tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-carbon-black/80 via-green-dark/70 to-carbon-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon-black/60 via-transparent to-carbon-black/40" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              className="heading-primary text-5xl md:text-6xl lg:text-7xl text-gradient-gold mb-8"
            >
              CONTACT INFO
            </motion.h2>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-md border border-gold/30 rounded-2xl glass-effect hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">📧</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-1 caption">Email</h3>
                    <a 
                      href="mailto:kuraforcecr@gmail.com"
                      className="text-white/90 hover:text-gold transition-colors duration-300 body-regular"
                    >
                      kuraforcecr@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Instagram */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-md border border-gold/30 rounded-2xl glass-effect hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">📱</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-1 caption">Instagram</h3>
                    <a 
                      href="https://instagram.com/kura.force" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-gold transition-colors duration-300 body-regular"
                    >
                      @kura.force
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 backdrop-blur-md border border-gold/30 rounded-2xl glass-effect hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gold mb-1 caption">Location</h3>
                    <p className="text-white/90 body-regular">Costa Rica</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="flex space-x-4 pt-4"
            >
              <motion.a
                href="mailto:kuraforcecr@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gold/20 text-gold rounded-full hover:bg-gold hover:text-carbon-black transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </motion.a>
              
              <motion.a
                href="https://instagram.com/kura.force"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gold/20 text-gold rounded-full hover:bg-gold hover:text-carbon-black transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="p-8 bg-white/10 backdrop-blur-md border border-gold/30 rounded-3xl glass-effect space-y-6"
            >
              <h3 className="heading-tertiary text-2xl md:text-3xl text-gold mb-6">
                Send us a message
              </h3>

              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-white/80 text-sm font-medium mb-2 caption">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold/50 focus:bg-white/15 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-white/80 text-sm font-medium mb-2 caption">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold/50 focus:bg-white/15 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-white/80 text-sm font-medium mb-2 caption">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold/50 focus:bg-white/15 transition-all duration-300"
                  placeholder="How can we help?"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-white/80 text-sm font-medium mb-2 caption">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-gold/50 focus:bg-white/15 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, partnership idea, or how you'd like to support Kura Force..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-gold to-green-secondary text-carbon-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 caption"
              >
                Send Message 🚀
              </motion.button>
            </motion.form>
          </motion.div>
        </div>

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
          className="absolute top-10 right-10 w-6 h-6 border border-gold/40 transform rotate-45"
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
          className="absolute bottom-20 left-8 w-4 h-4 border border-green-secondary/40"
        />
      </motion.div>

      {/* Racing Lines */}
      <div className="absolute top-1/4 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-16 h-0.5 bg-gradient-to-l from-transparent via-green-secondary/60 to-transparent" />
    </section>
  )
}