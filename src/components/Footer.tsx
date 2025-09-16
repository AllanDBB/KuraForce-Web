'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t-4 border-green-gradient">
      {/* Racing Green Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-green-gradient" />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="heading-secondary text-3xl md:text-4xl text-green-racing mb-2"
            >
              KURA FORCE
            </motion.h3>
            <p className="text-lg text-green-secondary font-medium caption">
              STEM RACING
            </p>
            <div className="mt-4 w-16 h-1 bg-green-gradient mx-auto md:mx-0 rounded-full" />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-green-racing mb-4 caption">
              Follow Our Journey
            </h4>
            <div className="flex justify-center space-x-4">
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/kuraforce?igsh=NXpkY2FtdDFzdHg="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-green-racing/10 text-green-racing rounded-full hover:bg-green-racing hover:text-white transition-all duration-300 group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              
              {/* TikTok */}
              <motion.a
                href="https://share.google/ZAg6OsrC1ngRGoF3r"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-green-racing/10 text-green-racing rounded-full hover:bg-green-racing hover:text-white transition-all duration-300 group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.142-1.986-1.142-3.338h-3.073v13.168c0 1.876-1.524 3.4-3.4 3.4s-3.4-1.524-3.4-3.4 1.524-3.4 3.4-3.4c.353 0 .693.057 1.013.162V7.257a6.985 6.985 0 0 0-1.013-.074c-3.77 0-6.827 3.058-6.827 6.827 0 3.77 3.058 6.827 6.827 6.827 3.77 0 6.827-3.058 6.827-6.827V9.084c1.412.85 3.057 1.297 4.729 1.297V7.257c-.884 0-1.722-.199-2.47-.563-.748-.364-1.377-.881-1.891-1.512z"/>
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="https://www.youtube.com/@KuraForce"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-green-racing/10 text-green-racing rounded-full hover:bg-green-racing hover:text-white transition-all duration-300 group"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>
              
              {/* Email */}
              <motion.a
                href="mailto:forcekura@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-green-racing/10 text-green-racing rounded-full hover:bg-green-racing hover:text-white transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/AllanDBB"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-green-racing/10 text-green-racing rounded-full hover:bg-green-racing hover:text-white transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-green-racing mb-4 caption">
              Quick Links
            </h4>
            <div className="space-y-2">
              {[
                { href: '#team', label: 'Our Team' },
                { href: '#about', label: 'About Us' },
                { href: '#sponsors', label: 'Sponsors' },
                { href: '#support', label: 'Support Us' },
                { href: '#contact', label: 'Contact' }
              ].map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -5, color: '#22643c' }}
                  className="block text-green-dark/70 hover:text-green-racing transition-all duration-300 caption"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="my-8 h-px bg-gradient-to-r from-transparent via-green-racing/30 to-transparent"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          {/* Costa Rica Flag Colors */}
          <div className="flex justify-center space-x-1 mb-4">
            <div className="w-8 h-2 bg-blue-600 rounded-sm" />
            <div className="w-8 h-2 bg-white border border-gray-200 rounded-sm" />
            <div className="w-8 h-2 bg-red-600 rounded-sm" />
            <div className="w-8 h-2 bg-white border border-gray-200 rounded-sm" />
            <div className="w-8 h-2 bg-blue-600 rounded-sm" />
          </div>

          {/* Copyright */}
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="body-regular text-green-racing font-medium"
          >
            Ingeniería, velocidad y visión. © 2025 Kura Force Team
          </motion.p>
          
          <p className="caption text-green-dark/60 text-sm">
            Representing Costa Rica in STEM Racing with pride and excellence
          </p>

          {/* Developer Credit */}
          <p className="caption text-green-dark/50 text-xs">
            Website developed with ❤️ by{' '}
            <a 
              href="https://github.com/AllanDBB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-racing hover:text-green-secondary transition-colors underline"
            >
              Allan B.
            </a>
          </p>

          {/* STEM Racing Badge */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-racing/5 border border-green-racing/20 rounded-full"
          >
            <div className="w-3 h-3 bg-green-racing rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-racing caption">
              STEM Racing Official Team
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Racing Elements */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-racing via-green-secondary to-green-racing opacity-20" />
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-racing/20" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-racing/20" />
      
      {/* Speed lines */}
      <motion.div
        animate={{ x: [-100, 1200] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-green-racing/40 to-transparent"
      />
    </footer>
  )
}