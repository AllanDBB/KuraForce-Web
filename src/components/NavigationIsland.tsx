'use client'

import { useState, useEffect } from 'react'

export default function NavigationIsland() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Team', href: '#team' },
    { name: 'Projects', href: '#projects' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Desktop Island Navigation */}
      <div className="hidden lg:block">
        <nav className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50 mt-8">
          <div 
            className={`
              flex items-center justify-center gap-12 
              backdrop-blur-sm shadow-lg
              rounded-full px-64 py-28 
              transition-all duration-300 ease-in-out
              ${isScrolled ? 'backdrop-blur-md shadow-xl' : ''}
            `}
          >
      {/* Logo */}
            <div className="flex items-center gap-3 pr-8">
              <span 
                className="text-xl font-semibold tracking-wide"
                style={{ 
                  fontFamily: 'DM Sans, Arial, sans-serif',
                  color: '#fcf8e3',
                  letterSpacing: '0.04em'
                }}
              >
                KURA
              </span>
              <div className="w-1 h-4 bg-gradient-to-b from-yellow-100 to-green-700 rounded-full" />
              <span 
                className="text-xl font-semibold tracking-wide"
                style={{ 
                  fontFamily: 'DM Sans, Arial, sans-serif',
                  color: '#22643c',
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
                  relative text-sm font-medium transition-all duration-200 px-6 py-4
                  ${activeItem === item.name 
                    ? 'text-white' 
                    : 'text-white/60 hover:text-white/90'
                  }
                `}
                style={{ fontFamily: 'DM Sans, Arial, sans-serif' }}
              >
                {item.name}
                {activeItem === item.name && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-200 rounded-full" />
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
            className="flex items-center backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg gap-2"
          >
            {menuItems.slice(0, 4).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`
                  px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200
                  ${activeItem === item.name
                    ? 'bg-white/20 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
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
