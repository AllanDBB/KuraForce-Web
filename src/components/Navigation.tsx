'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface NavigationProps {
  isDark?: boolean
}

export default function Navigation({ isDark = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#team', label: 'Team' },
    { href: '#about', label: 'About' },
    { href: '#the-car', label: 'The Car' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#contact', label: 'Contact' },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isScrolled = scrollY > 50

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-green-racing/10 shadow-lg shadow-green-racing/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/logo.png"
                alt="Kura Force Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className={`text-xl md:text-2xl font-black heading-primary transition-colors duration-300 ${
                isScrolled ? 'text-green-racing' : 'text-white'
              }`}>
                KURA FORCE
              </div>
              <div className={`hidden sm:block text-xs font-medium caption tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-green-secondary' : 'text-white/80'
              }`}>
                STEM RACING
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 text-sm font-semibold caption transition-all duration-300 rounded-lg group ${
                  isScrolled 
                    ? 'text-green-dark hover:text-white hover:bg-green-racing' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
                
                {/* Hover underline effect */}
                <motion.div
                  className={`absolute bottom-0 left-1/2 h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ${
                    isScrolled ? 'bg-green-racing' : 'bg-white'
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '70%' }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-3 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-green-racing hover:bg-green-racing/10' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 flex flex-col justify-center space-y-1"
            >
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0,
                }}
                className="w-full h-0.5 bg-current origin-center transition-all duration-300"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                className="w-full h-0.5 bg-current transition-all duration-300"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0,
                }}
                className="w-full h-0.5 bg-current origin-center transition-all duration-300"
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden"
            >
              <div className={`py-4 space-y-2 border-t transition-colors duration-300 ${
                isScrolled ? 'border-green-racing/20' : 'border-white/20'
              }`}>
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium caption rounded-lg transition-all duration-300 ${
                      isScrolled
                        ? 'text-green-dark hover:text-white hover:bg-green-racing'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Racing accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="h-1 bg-green-gradient origin-left"
      />
    </motion.nav>
  )
}