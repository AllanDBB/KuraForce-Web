'use client'

import { useState, useEffect } from 'react'

export default function NavigationIsland() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')
  const [isOnDarkSection, setIsOnDarkSection] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      
      // Detectar secciones oscuras vs claras
      const heroHeight = window.innerHeight
      const whoWeAreStart = heroHeight
      const whatWeDoStart = whoWeAreStart + window.innerHeight
      
      // Secciones oscuras: Hero, Who We Are
      // Secciones claras: What We Do, Sponsors
      const isDarkSection = scrollY < whatWeDoStart
      setIsOnDarkSection(isDarkSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Team', href: '#team' },
    { name: 'About Us', href: '#who-we-are' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact-info' }
  ]

  return (
    <>
      {/* Desktop Island Navigation */}
      <div className="hidden lg:block">
        <nav className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50 mt-8">
          <div 
            className={`
              flex items-center justify-center gap-12 
              shadow-lg
              rounded-full px-80 py-36 
              transition-all duration-500 ease-in-out
              ${isScrolled ? 'shadow-xl' : ''}
              ${isOnDarkSection ? 'bg-black/20 backdrop-blur-sm' : 'bg-white/95 border border-green-100'}
            `}
          >
      {/* Logo */}
            <div className="flex items-center gap-3 pr-8">
              <span 
                className={`text-xl font-semibold tracking-wide transition-colors duration-500 ${
                  isOnDarkSection ? 'text-[#fcf8e3]' : 'text-green-800'
                }`}
                style={{ 
                  fontFamily: 'DM Sans, Arial, sans-serif',
                  letterSpacing: '0.04em'
                }}
              >
                KURA
              </span>
              <div className="w-1 h-4 bg-gradient-to-b from-yellow-100 to-green-700 rounded-full" />
              <span 
                className={`text-xl font-semibold tracking-wide transition-colors duration-500 ${
                  isOnDarkSection ? 'text-[#22643c]' : 'text-green-600'
                }`}
                style={{ 
                  fontFamily: 'DM Sans, Arial, sans-serif',
                  letterSpacing: '0.04em'
                }}
              >
                FORCE
              </span>
            </div>

            {/* Navigation Items */}
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`
                  relative text-sm font-medium transition-all duration-500 px-6 py-4
                  ${activeItem === item.name 
                    ? (isOnDarkSection ? 'text-white' : 'text-green-700') 
                    : (isOnDarkSection ? 'text-white/60 hover:text-white/90' : 'text-green-600/70 hover:text-green-700')
                  }
                `}
                style={{ fontFamily: 'DM Sans, Arial, sans-serif' }}
              >
                {item.name}
                {activeItem === item.name && (
                  <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-colors duration-500 ${
                    isOnDarkSection ? 'bg-yellow-200' : 'bg-green-600'
                  }`} />
                )}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <div 
            className={`flex items-center rounded-2xl px-8 py-5 shadow-lg gap-4 transition-all duration-500 ${
              isOnDarkSection ? 'bg-black/30 backdrop-blur-sm' : 'bg-white/95 border border-green-100'
            }`}
          >
            {menuItems.slice(0, 5).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`
                  px-3 py-2 text-xs font-medium rounded-lg transition-all duration-500
                  ${activeItem === item.name
                    ? (isOnDarkSection ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700')
                    : (isOnDarkSection ? 'text-white/60 hover:text-white hover:bg-white/10' : 'text-green-600/70 hover:text-green-700 hover:bg-green-50')
                  }
                `}
                style={{ fontFamily: 'DM Sans, Arial, sans-serif' }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
