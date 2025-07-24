'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Island Navigation */}
      <nav 
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 animate-island-float ${
          isScrolled 
            ? 'w-[95%] max-w-6xl' 
            : 'w-[90%] max-w-5xl'
        }`}
      >
        <div 
          className={`relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 transition-all duration-500 ${
            isScrolled 
              ? 'shadow-2xl shadow-black/30 bg-black/30' 
              : 'shadow-xl shadow-black/20'
          }`}
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(0, 0, 0, 0.3) 0%, 
                rgba(0, 84, 60, 0.2) 25%, 
                rgba(0, 0, 0, 0.4) 50%,
                rgba(255, 102, 0, 0.15) 75%,
                rgba(0, 0, 0, 0.3) 100%
              )
            `,
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 102, 0, 0.1)
            `
          }}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <span 
                className="text-xl lg:text-2xl font-black text-transparent bg-clip-text"
                style={{
                  fontFamily: 'var(--font-racing)',
                  backgroundImage: 'linear-gradient(45deg, var(--color-orange-primary), var(--color-orange-neon))',
                  textShadow: '0 0 20px rgba(255, 102, 0, 0.4)'
                }}
              >
                KURA
              </span>
              <span 
                className="text-xl lg:text-2xl font-black text-transparent bg-clip-text"
                style={{
                  fontFamily: 'var(--font-racing)',
                  backgroundImage: 'linear-gradient(45deg, var(--color-emerald-green), var(--color-neon-green))',
                  textShadow: '0 0 20px rgba(0, 84, 60, 0.4)'
                }}
              >
                FORCE
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {['Inicio', 'Equipo', 'Tecnología', 'Innovación', 'Portfolio', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-white/90 hover:text-white text-sm font-medium transition-all duration-300 rounded-lg group"
                  style={{ fontFamily: 'var(--font-accent)' }}
                >
                  {item}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-emerald-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-emerald-500 group-hover:w-3/4 transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                className="relative px-5 py-2.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-orange-500 text-white text-sm font-bold rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                <span className="relative z-10">ÚNETE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-emerald-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden relative w-10 h-10 text-white/90 hover:text-white transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`absolute inset-0 flex flex-col justify-center items-center transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 translate-y-0' : '-translate-y-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100 mt-1'}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-90 translate-y-0' : 'translate-y-1 mt-1'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div 
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(0, 0, 0, 0.4) 0%, 
                rgba(0, 84, 60, 0.3) 50%, 
                rgba(0, 0, 0, 0.4) 100%
              )
            `,
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `
          }}
        >
          <div className="flex flex-col gap-2">
            {['Inicio', 'Equipo', 'Tecnología', 'Innovación', 'Portfolio', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-3 text-white/90 hover:text-white text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10"
                style={{ fontFamily: 'var(--font-accent)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="mt-4 px-4 py-3 bg-gradient-to-r from-emerald-600 to-orange-500 text-white text-sm font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              ÚNETE A LA EXCELENCIA
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
