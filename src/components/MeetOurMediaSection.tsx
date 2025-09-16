'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MeetOurMediaSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@kuraforce", 
      url: "https://www.instagram.com/kuraforce?igsh=NXpkY2FtdDFzdHg=",
      description: "Follow our journey and daily updates",
      icon: "IG"
    },
    {
      name: "TikTok",
      handle: "@kuraforce",
      url: "https://share.google/ZAg6OsrC1ngRGoF3r",
      description: "Behind the scenes content",
      icon: "TT"
    },
    {
      name: "YouTube",
      handle: "@KuraForce",
      url: "https://www.youtube.com/@KuraForce",
      description: "Racing videos and tutorials",
      icon: "YT"
    }
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/2.mp4" type="video/mp4" />
        </video>
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-dark/95 via-carbon-black/95 to-green-racing/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary text-5xl md:text-6xl lg:text-7xl text-gradient-white-green mb-6">
            FOLLOW THE RACE
          </h2>
          <p className="body-large text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Join our racing community and experience the adrenaline of STEM Racing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          
          {/* Social Media Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="block p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-green-secondary/50 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3 flex justify-center">
                    {social.icon === "IG" && (
                      <svg className="w-8 h-8 text-green-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {social.icon === "TT" && (
                      <svg className="w-8 h-8 text-green-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.142-1.986-1.142-3.338h-3.073v13.168c0 1.876-1.524 3.4-3.4 3.4s-3.4-1.524-3.4-3.4 1.524-3.4 3.4-3.4c.353 0 .693.057 1.013.162V7.257a6.985 6.985 0 0 0-1.013-.074c-3.77 0-6.827 3.058-6.827 6.827 0 3.77 3.058 6.827 6.827 6.827 3.77 0 6.827-3.058 6.827-6.827V9.084c1.412.85 3.057 1.297 4.729 1.297V7.257c-.884 0-1.722-.199-2.47-.563-.748-.364-1.377-.881-1.891-1.512z"/>
                      </svg>
                    )}
                    {social.icon === "YT" && (
                      <svg className="w-8 h-8 text-green-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-secondary transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-green-secondary font-medium mb-2">
                    {social.handle}
                  </p>
                  <p className="text-white/70 text-sm">
                    {social.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-4"
        >
          <p className="body-large text-lg text-white/80">
            Join us on our journey to represent Costa Rica at the highest level of STEM Racing
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <span>Engineering Excellence</span>
            <span>Costa Rican Pride</span>
            <span>Global Competition</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}