'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import NavigationIsland from '@/components/NavigationIsland';
import TeamCarousel from '@/components/TeamCarousel';

// VideoBackground Component
interface VideoBackgroundProps {
  src: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, className = "" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(0.3) contrast(1.2)',
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(15, 20, 25, 0.8) 0%, 
              rgba(26, 51, 42, 0.7) 25%, 
              rgba(21, 53, 35, 0.8) 50%, 
              rgba(10, 31, 21, 0.9) 75%, 
              rgba(0, 0, 0, 0.8) 100%
            )
          `,
        }}
      ></div>
    </div>
  );
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple client-side loading animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <NavigationIsland />
      <Hero />

      {/* Our Team Section */}
      <section id="team" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden" style={{
        background: `
          linear-gradient(135deg, #f8fffe 0%, #f0f9f6 25%, #ffffff 50%, #f5fdf9 75%, #ffffff 100%)
        `
      }}>
        {/* ...no background pattern, just gradient... */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Section Header */}
          <div className="mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
              style={{
                fontFamily: 'var(--font-racing)',
                background: 'linear-gradient(135deg, #22643c 0%, #34a853 50%, #1a4d2e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em'
              }}
            >
              OUR TEAM
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
              <div 
                className="w-4 h-4 rounded-full animate-pulse"
                style={{
                  background: 'radial-gradient(circle, #22643c 40%, #34a853 100%)',
                  boxShadow: '0 0 12px 2px rgba(34, 100, 60, 0.3)',
                  animationDuration: '3s'
                }}
              ></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
            </div>
            
            <div className="flex justify-center">
              <p 
                className="text-lg md:text-xl font-light max-w-3xl leading-relaxed text-center"
                style={{
                  fontFamily: 'var(--font-accent)',
                  color: '#2d5a3d',
                  lineHeight: '1.8'
                }}
              >
                Meet the exceptional individuals who drive innovation, engineering excellence, 
                and competitive spirit at <span className="font-semibold text-green-700">Kura Force</span>.
              </p>
            </div>
          </div>

          {/* Team Carousel */}
          <TeamCarousel />
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden" style={{
        background: `linear-gradient(135deg, #0f1419 0%, #1a332a 25%, #153523 50%, #0a1f15 75%, #000000 100%)`
      }}>
        {/* Video Background */}
        <VideoBackground src="/1.mp4" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Section Header */}
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-16"
            style={{
              fontFamily: 'var(--font-racing)',
              background: 'linear-gradient(135deg, #fcf8e3 0%, #ffffff 50%, #e8e2d0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em'
            }}
          >
            WHO WE ARE
          </h2>

          {/* Content */}
          <div className="max-w-3xl mx-auto mb-20">
            <p 
              className="text-xl md:text-2xl leading-relaxed mb-16 text-center"
              style={{
                fontFamily: 'var(--font-primary)',
                color: '#c8ccc8',
                lineHeight: '1.8'
              }}
            >
              We are <span style={{ color: '#22643c', fontWeight: 'bold' }}>Kura Force</span>, 
              a passionate team of young engineers from Costa Rica competing in F1 in Schools.
            </p>
            
            <p 
              className="text-lg leading-relaxed text-center"
              style={{
                fontFamily: 'var(--font-accent)',
                color: '#a8aca8',
                lineHeight: '1.7'
              }}
            >
              Our team represents the future of motorsport engineering, combining innovation, 
              precision, and Costa Rican excellence on the global stage.
            </p>
          </div>
          <div className="h-16"></div>
          {/* Team Stats */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { number: "8", label: "Team Members" },
                { number: "100%", label: "Dedication" },
                { number: "1", label: "Dream" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div 
                    className="text-4xl md:text-5xl font-black mb-3"
                    style={{ color: '#22643c' }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-sm uppercase tracking-wider"
                    style={{ color: '#a8b3a8' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden" style={{
        background: `linear-gradient(135deg, #f8fffe 0%, #f0f9f6 25%, #ffffff 50%, #f5fdf9 75%, #ffffff 100%)`
      }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header - Mejorado para mejor sinergia tipográfica */}
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{
                fontFamily: 'var(--font-racing)',
                background: 'linear-gradient(135deg, #22643c 0%, #34a853 30%, #1a4d2e 60%, #22643c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.02em',
                textShadow: '0 4px 8px rgba(34, 100, 60, 0.1)'
              }}
            >
              WHAT WE DO
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-8 rounded-full"></div>
            <div className="flex justify-center items-center w-full">
              <p 
                className="text-lg md:text-xl max-w-3xl text-center font-medium"
                style={{
                  fontFamily: 'var(--font-primary)',
                  color: '#2d3748',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  width: '100%',
                  letterSpacing: '0.01em'
                }}
              >
                Engineering excellence through innovation, precision, and passion for motorsport.
              </p>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 justify-items-center">
            {/* ...existing code... */}
            {/* ...existing activity cards... */}
            {[
              {
                title: "Design",
                desc: "Advanced CAD modeling and aerodynamic optimization using cutting-edge engineering software",
                symbol: "∇"
              },
              {
                title: "Manufacturing", 
                desc: "Precision 3D printing and fabrication with state-of-the-art technology and quality control",
                symbol: "◊"
              },
              {
                title: "Testing",
                desc: "Comprehensive wind tunnel analysis and performance data collection for optimal results",
                symbol: "≡"
              },
              {
                title: "Competition",
                desc: "Representing Costa Rica with pride in international F1 in Schools championships",
                symbol: "◈"
              }
            ].map((activity, index) => (
              <div 
                key={index} 
                className="bg-white/95 backdrop-blur-sm rounded-xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-6 py-8 flex flex-col items-center justify-center text-center"
              >
                <div 
                  className="text-5xl font-light text-green-700 mb-6"
                  style={{ 
                    fontFamily: 'var(--font-racing)',
                    textShadow: '0 2px 4px rgba(34, 100, 60, 0.15)'
                  }}
                >
                  {activity.symbol}
                </div>
                <h3 
                  className="text-xl font-black text-green-800 mb-5"
                  style={{ 
                    fontFamily: 'var(--font-racing)',
                    letterSpacing: '0.015em',
                    textShadow: '0 1px 2px rgba(34, 100, 60, 0.1)'
                  }}
                >
                  {activity.title}
                </h3>
                <p 
                  className="text-sm text-gray-700 leading-relaxed flex-1 flex items-center justify-center text-center font-medium"
                  style={{ 
                    fontFamily: 'var(--font-primary)',
                    lineHeight: '1.6',
                    letterSpacing: '0.005em'
                  }}
                >
                  {activity.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Quote */}
          <div className="h-12"></div>
          <div className="flex flex-col items-center justify-center w-full">
            <blockquote 
              className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6 text-center w-full"
              style={{
                color: '#22643c',
                fontFamily: 'var(--font-accent)',
                lineHeight: '1.8',
                textAlign: 'center',
                width: '100%'
              }}
            >
              &ldquo;Engineering the future, one innovation at a time.&rdquo;
            </blockquote>
            <cite 
              className="text-sm font-semibold uppercase tracking-wider text-center w-full"
              style={{ 
                color: '#4a5568',
                textAlign: 'center',
                width: '100%'
              }}
            >
              — Team Kura Force
            </cite>
          </div>
        </div>
      </section>

      {/* ...existing code... */}
      {/* Sponsors Section */}
      <section id="sponsors" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden" style={{
        background: `
          linear-gradient(135deg, #f8fffe 0%, #f0f9f6 25%, #ffffff 50%, #f5fdf9 75%, #ffffff 100%)
        `
      }}>
        {/* F1 Speed Lines Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Diagonal Speed Lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-8"
              style={{
                width: '1px',
                height: '100%',
                left: `${i * 12}%`,
                background: 'linear-gradient(45deg, transparent 0%, #22643c 30%, transparent 70%)',
                transform: `skewX(-20deg) translateX(${i * 15}px)`,
                animation: `speedLine ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
          
          {/* Horizontal Racing Stripes */}
          <div 
            className="absolute inset-0 opacity-3"
            style={{
              background: `
                repeating-linear-gradient(
                  0deg,
                  transparent 0px,
                  transparent 60px,
                  #22643c 60px,
                  #22643c 61px
                )
              `,
              animation: 'raceStripes 10s linear infinite'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 relative"
              style={{
                fontFamily: 'var(--font-racing)',
                background: 'linear-gradient(135deg, #22643c 0%, #34a853 30%, #1a4d2e 60%, #22643c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
                textShadow: '4px 4px 12px rgba(34, 100, 60, 0.2)'
              }}
            >
              OUR SPONSORS
              {/* Speed Effect */}
              <div 
                className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                style={{
                  width: '40px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #22643c 0%, transparent 100%)',
                  animation: 'speedBurst 2s ease-in-out infinite'
                }}
              ></div>
            </h2>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
              <div 
                className="relative w-5 h-5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, #22643c 40%, #34a853 100%)',
                  boxShadow: '0 0 12px 3px rgba(34, 100, 60, 0.3)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              >
                {/* Racing Tire Effect */}
                <div className="absolute inset-1 rounded-full border-2 border-white/30" style={{ animation: 'spin 2s linear infinite' }}></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
            </div>
            
            <p 
              className="text-lg md:text-xl font-light max-w-4xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'var(--font-accent)',
                color: '#2d5a3d',
                lineHeight: '1.8'
              }}
            >
              <span className="font-black text-xl text-green-700">SPEED</span> meets innovation with our incredible sponsors. 
              Together, we&apos;re <span className="font-semibold text-green-700 relative border-b-2 border-green-600">
                accelerating
              </span> the future of <span className="font-bold text-green-800">Costa Rican motorsport</span>.
            </p>
          </div>

          {/* Racing Grid Layout - Sponsors por categorías */}
          <div className="mb-16 flex flex-col items-center mt-12">
            {/* Gold Sponsors */}
            <div className="mb-16 w-full max-w-4xl">
              <h3 className="text-2xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-racing)', color: '#B8860B' }}>
                GOLD SPONSORS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 justify-items-center">
                {[
                  { name: "TechCorp", category: "Technology Partner", tier: "gold", image: "/KuraMembers/Mariana.jpg" },
                  { name: "SpeedWorks", category: "Engineering Support", tier: "gold", image: "/KuraMembers/David.jpg" },
                  { name: "InnovateMax", category: "Innovation Hub", tier: "gold", image: "/KuraMembers/Carolina.png" }
                ].map((sponsor, index) => (
                  <div 
                    key={index}
                    className="relative p-2 rounded-xl transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #fff9e6 0%, #fef7cd 50%, #fef3b8 100%)',
                      border: '2px solid rgba(184, 134, 11, 0.2)',
                      boxShadow: '0 6px 25px rgba(184, 134, 11, 0.1)',
                      minHeight: '120px',
                      width: '100%',
                      maxWidth: '180px'
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center h-full">
                      <div className="mb-1 flex justify-center">
                        <div 
                          className="w-18 h-18 rounded-full flex items-center justify-center overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)',
                            boxShadow: '0 8px 25px rgba(184, 134, 11, 0.3)'
                          }}
                        >
                          <Image
                            src={sponsor.image}
                            alt={sponsor.name}
                            width={64}
                            height={64}
                            className="object-contain rounded-full"
                            onError={(e) => {
                              e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="64" height="64" fill="#ffffff"/>
                                  <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="22" fill="#B8860B" font-weight="bold">
                                    ${sponsor.name.charAt(0)}
                                  </text>
                                </svg>
                              `)}`;
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-center flex-grow flex flex-col justify-between">
                        <div>
                          <h3 
                            className="font-black text-sm mb-0"
                            style={{ 
                              color: '#B8860B',
                              fontFamily: 'var(--font-racing)',
                              letterSpacing: '-0.01em'
                            }}
                          >
                            {sponsor.name}
                          </h3>
                          <p 
                            className="text-xs font-medium mb-1"
                            style={{ color: '#4a5568' }}
                          >
                            {sponsor.category}
                          </p>
                        </div>
                        <button 
                          className="w-full py-1.5 px-2 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105"
                          style={{
                            background: 'linear-gradient(135deg, #B8860B 0%, #DAA520 100%)',
                            color: 'white',
                            boxShadow: '0 4px 12px rgba(184, 134, 11, 0.3)'
                          }}
                          onClick={() => {
                            if (typeof window !== 'undefined') {
                              window.open(`https://www.${sponsor.name.toLowerCase()}.com`, '_blank')
                            }
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Espacio adicional entre Gold y Silver */}
            <div className="h-8"></div>

            {/* Silver Sponsors */}
            <div className="mb-16 w-full max-w-5xl mt-32">
              <h3 className="text-xl font-bold text-center mb-16" style={{ fontFamily: 'var(--font-racing)', color: '#C0C0C0' }}>
                SILVER SPONSORS
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 justify-items-center">
                {[
                  { name: "InnovateCR", category: "Innovation Hub", tier: "silver", image: "/KuraMembers/Alguien1.jpg" },
                  { name: "RaceTech", category: "Racing Solutions", tier: "silver", image: "/KuraMembers/Alguien2.jpg" },
                  { name: "FutureForge", category: "Manufacturing", tier: "silver", image: "/KuraMembers/Alguien3.jpg" },
                  { name: "SpeedFlow", category: "Aerodynamics", tier: "silver", image: "/KuraMembers/Verónica.jpg" }
                ].map((sponsor, index) => (
                  <div 
                    key={index}
                    className="relative p-2 rounded-xl transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 50%, #e8eaed 100%)',
                      border: '2px solid rgba(192, 192, 192, 0.2)',
                      boxShadow: '0 4px 20px rgba(192, 192, 192, 0.08)',
                      minHeight: '120px',
                      width: '100%',
                      maxWidth: '160px'
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center h-full">
                      <div className="mb-1 flex justify-center">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, #C0C0C0 0%, #D3D3D3 100%)',
                            boxShadow: '0 6px 20px rgba(192, 192, 192, 0.25)'
                          }}
                        >
                          <Image
                            src={sponsor.image}
                            alt={sponsor.name}
                            width={56}
                            height={56}
                            className="object-contain rounded-full"
                            onError={(e) => {
                              e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="56" height="56" fill="#ffffff"/>
                                  <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" fill="#C0C0C0" font-weight="bold">
                                    ${sponsor.name.charAt(0)}
                                  </text>
                                </svg>
                              `)}`;
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-center flex-grow flex flex-col justify-between">
                        <div>
                          <h3 
                            className="font-black text-sm mb-0"
                            style={{ 
                              color: '#6b7280',
                              fontFamily: 'var(--font-racing)',
                              letterSpacing: '-0.01em'
                            }}
                          >
                            {sponsor.name}
                          </h3>
                          <p 
                            className="text-xs font-medium mb-1"
                            style={{ color: '#4a5568' }}
                          >
                            {sponsor.category}
                          </p>
                        </div>
                        <button 
                          className="w-full py-1.5 px-2 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105"
                          style={{
                            background: 'linear-gradient(135deg, #C0C0C0 0%, #D3D3D3 100%)',
                            color: 'white',
                            boxShadow: '0 3px 10px rgba(192, 192, 192, 0.3)'
                          }}
                          onClick={() => {
                            if (typeof window !== 'undefined') {
                              window.open(`https://www.${sponsor.name.toLowerCase()}.com`, '_blank')
                            }
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Espacio adicional entre Silver y Bronze */}
            <div className="h-8"></div>

            {/* Bronze Sponsors */}
            <div className="w-full max-w-4xl mt-20">
              <h3 className="text-lg font-bold text-center mb-16" style={{ fontFamily: 'var(--font-racing)', color: '#CD7F32' }}>
                BRONZE SPONSORS
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 justify-items-center">
                {[
                  { name: "VelocityLab", category: "Research Partner", tier: "bronze", image: "/KuraMembers/Fabricio.jpg" },
                  { name: "PrecisionCo", category: "Precision Tools", tier: "bronze", image: "/KuraMembers/logo.png" },
                  { name: "AeroFlow", category: "Aerodynamics", tier: "bronze", image: "/KuraMembers/Mariana.jpg" },
                  { name: "FastTrack", category: "Track Support", tier: "bronze", image: "/KuraMembers/David.jpg" }
                ].map((sponsor, index) => (
                  <div 
                    key={index}
                    className="relative p-2 rounded-xl transition-all duration-300 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #fff8f0 0%, #fef5e7 50%, #fef0d9 100%)',
                      border: '2px solid rgba(205, 127, 50, 0.15)',
                      boxShadow: '0 3px 15px rgba(205, 127, 50, 0.06)',
                      minHeight: '120px',
                      width: '100%',
                      maxWidth: '160px'
                    }}
                  >
                    <div className="relative z-10 flex flex-col items-center h-full">
                      <div className="mb-1 flex justify-center">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, #CD7F32 0%, #D2691E 100%)',
                            boxShadow: '0 4px 15px rgba(205, 127, 50, 0.2)'
                          }}
                        >
                          <Image
                            src={sponsor.image}
                            alt={sponsor.name}
                            width={56}
                            height={56}
                            className="object-contain rounded-full"
                            onError={(e) => {
                              e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                                  <rect width="56" height="56" fill="#ffffff"/>
                                  <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="20" fill="#CD7F32" font-weight="bold">
                                    ${sponsor.name.charAt(0)}
                                  </text>
                                </svg>
                              `)}`;
                            }}
                          />
                        </div>
                      </div>
                      <div className="text-center flex-grow flex flex-col justify-between">
                        <div>
                          <h3 
                            className="font-black text-sm mb-0"
                            style={{ 
                              color: '#CD7F32',
                              fontFamily: 'var(--font-racing)',
                              letterSpacing: '-0.01em'
                            }}
                          >
                            {sponsor.name}
                          </h3>
                          <p 
                            className="text-xs font-medium mb-1"
                            style={{ color: '#4a5568' }}
                          >
                            {sponsor.category}
                          </p>
                        </div>
                        <button 
                          className="w-full py-1.5 px-2 rounded-lg text-xs font-semibold transition-all duration-300 hover:scale-105"
                          style={{
                            background: 'linear-gradient(135deg, #CD7F32 0%, #D2691E 100%)',
                            color: 'white',
                            boxShadow: '0 2px 8px rgba(205, 127, 50, 0.3)'
                          }}
                          onClick={() => {
                            if (typeof window !== 'undefined') {
                              window.open(`https://www.${sponsor.name.toLowerCase()}.com`, '_blank')
                            }
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ...existing code... */}
      </section>

      {/* Contact Info Section */}
      <section id="contact-info" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden" style={{
        background: `linear-gradient(135deg, #0f1419 0%, #1a332a 25%, #153523 50%, #0a1f15 75%, #000000 100%)`
      }}>
        {/* Video Background */}
        <VideoBackground src="/2.mp4" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Section Header */}
          <div className="mb-16">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-8"
              style={{
                fontFamily: 'var(--font-racing)',
                background: 'linear-gradient(135deg, #fcf8e3 0%, #ffffff 50%, #e8e2d0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em'
              }}
            >
              CONTACT INFO
            </h2>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div 
                className="w-5 h-5 rounded-full animate-pulse"
                style={{
                  background: 'radial-gradient(circle, #fcf8e3 40%, #ffffff 100%)',
                  boxShadow: '0 0 15px 3px rgba(252, 248, 227, 0.4)',
                  animationDuration: '2s'
                }}
              ></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
            
            <p 
              className="text-lg md:text-xl font-light max-w-4xl mx-auto leading-relaxed"
              style={{
                fontFamily: 'var(--font-accent)',
                color: '#c8ccc8',
                lineHeight: '1.8'
              }}
            >
              Ready to connect with Costa Rica&apos;s fastest rising F1 engineering team? 
              Let&apos;s <span className="font-semibold text-yellow-200">accelerate</span> together.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Email Contact */}
            <div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(252, 248, 227, 0.1)'
              }}
            >
              <div className="mb-6">
                <div 
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #fcf8e3 0%, #ffffff 100%)',
                    boxShadow: '0 6px 20px rgba(252, 248, 227, 0.3)'
                  }}
                >
                  <svg width="24" height="24" fill="#22643c" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
              </div>
              <h3 
                className="text-xl font-black mb-3"
                style={{ 
                  color: '#fcf8e3',
                  fontFamily: 'var(--font-racing)'
                }}
              >
                EMAIL US
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ color: '#a8aca8' }}
              >
                General inquiries and collaboration
              </p>
              <a 
                href="mailto:contact@kuraforce.com"
                className="text-yellow-200 hover:text-yellow-100 font-medium transition-colors duration-300"
              >
                contact@kuraforce.com
              </a>
            </div>

            {/* Social Media */}
            <div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(252, 248, 227, 0.1)'
              }}
            >
              <div className="mb-6">
                <div 
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #fcf8e3 0%, #ffffff 100%)',
                    boxShadow: '0 6px 20px rgba(252, 248, 227, 0.3)'
                  }}
                >
                  <svg width="24" height="24" fill="#22643c" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.268.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
              <h3 
                className="text-xl font-black mb-3"
                style={{ 
                  color: '#fcf8e3',
                  fontFamily: 'var(--font-racing)'
                }}
              >
                FOLLOW US
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ color: '#a8aca8' }}
              >
                Stay updated with our journey
              </p>
              <a 
                href="https://instagram.com/kuraforce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-200 hover:text-yellow-100 font-medium transition-colors duration-300"
              >
                @kuraforce
              </a>
            </div>

            {/* Location */}
            <div 
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(252, 248, 227, 0.1)'
              }}
            >
              <div className="mb-6">
                <div 
                  className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, #fcf8e3 0%, #ffffff 100%)',
                    boxShadow: '0 6px 20px rgba(252, 248, 227, 0.3)'
                  }}
                >
                  <svg width="24" height="24" fill="#22643c" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>
              <h3 
                className="text-xl font-black mb-3"
                style={{ 
                  color: '#fcf8e3',
                  fontFamily: 'var(--font-racing)'
                }}
              >
                FIND US
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ color: '#a8aca8' }}
              >
                Proudly representing
              </p>
              <p className="text-yellow-200 font-medium">
                Costa Rica
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Support Us Section */}
      <section id="sponsor-us" className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 overflow-hidden" style={{
        background: `linear-gradient(135deg, #f8fffe 0%, #f0f9f6 25%, #ffffff 50%, #f5fdf9 75%, #ffffff 100%)`
      }}>
        {/* F1 Speed Lines Background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: '2px',
                height: '100%',
                left: `${i * 16.66}%`,
                background: 'linear-gradient(45deg, transparent 0%, #22643c 20%, transparent 80%)',
                transform: `skewX(-15deg) translateX(${i * 20}px)`,
                animation: `speedLine ${4 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Section Header */}
          <div className="mb-12">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
              style={{
                fontFamily: 'var(--font-racing)',
                background: 'linear-gradient(135deg, #22643c 0%, #34a853 30%, #1a4d2e 60%, #22643c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em'
              }}
            >
              SUPPORT OUR MISSION
            </h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
              <div 
                className="w-4 h-4 rounded-full animate-pulse"
                style={{
                  background: 'radial-gradient(circle, #22643c 40%, #34a853 100%)',
                  boxShadow: '0 0 12px 2px rgba(34, 100, 60, 0.3)',
                  animationDuration: '3s'
                }}
              ></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
            </div>
            
            
          </div>

          {/* Sponsorship Options Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            
            {/* Sponsorship Packages */}
            <div className="relative group">
              {/* Background Glow Effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"
              ></div>
              
              {/* Main Card */}
              <div className="relative bg-white/98 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-green-100/50 hover:border-green-300/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-4xl overflow-hidden">
                {/* Racing Lines Background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-transparent transform rotate-45"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-green-500 to-transparent transform rotate-45"></div>
                </div>
                
                {/* Icon Section */}
                <div className="relative mb-8">
                  <div 
                    className="w-24 h-24 mx-auto rounded-3xl mb-6 flex items-center justify-center group-hover:scale-105 transition-all duration-500 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #22643c 0%, #34a853 50%, #1a4d2e 100%)',
                      boxShadow: '0 20px 40px rgba(34, 100, 60, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                    }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                    
                    <svg width="48" height="48" fill="white" viewBox="0 0 24 24" className="relative z-10">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center mb-8">
                  <h3 
                    className="text-2xl font-black mb-4 bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent"
                    style={{
                      fontFamily: 'var(--font-racing)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    SPONSORSHIP PACKAGES
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium text-base">
                    Partner with us for maximum visibility on our race car, competitions, and digital platforms. 
                    <span className="text-green-700 font-semibold">Professional motorsport marketing.</span>
                  </p>
                </div>
                
                {/* Features List */}
                <div className="mb-8 space-y-3">
                  {[
                    'Logo on race car',
                    'Social media presence',
                    'Event partnerships'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="text-center">
                  <a 
                    href="mailto:contact@kuraforce.com?subject=Sponsorship Package Information"
                    className="relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group-hover:from-green-700 group-hover:to-green-600 overflow-hidden"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      letterSpacing: '0.02em'
                    }}
                  >
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Donations */}
            <div className="relative group lg:scale-105">
              {/* Background Glow Effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-400 rounded-3xl blur opacity-25 group-hover:opacity-35 transition-all duration-500"
              ></div>
              
              {/* Main Card */}
              <div className="relative bg-white/98 backdrop-blur-lg rounded-3xl p-10 shadow-3xl border border-green-200/70 hover:border-green-300/80 transition-all duration-500 hover:-translate-y-4 hover:shadow-4xl overflow-hidden">
                {/* Racing Lines Background */}
                <div className="absolute top-0 left-0 w-40 h-40 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-transparent transform -rotate-45"></div>
                  <div className="absolute inset-3 bg-gradient-to-br from-green-400 to-transparent transform -rotate-45"></div>
                </div>
        
                
                {/* Icon Section */}
                <div className="relative mb-8 mt-4">
                  <div 
                    className="w-24 h-24 mx-auto rounded-3xl mb-6 flex items-center justify-center group-hover:scale-105 transition-all duration-500 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #22643c 0%, #34a853 50%, #1a4d2e 100%)',
                      boxShadow: '0 25px 50px rgba(34, 100, 60, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                    }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                    
                    <svg width="48" height="48" fill="white" viewBox="0 0 24 24" className="relative z-10">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 17L6 14.41l1.41-1.42L11 16.59l6.59-6.59L19 11.41l-8.41 8.41z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center mb-8">
                  <h3 
                    className="text-2xl font-black mb-4 bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent"
                    style={{ 
                      fontFamily: 'var(--font-racing)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    DIRECT DONATIONS
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium text-base">
                    Every contribution brings us closer to <span className="text-green-700 font-bold">Singapore 2025</span>. 
                    Help us represent Costa Rica with pride!
                  </p>
                  
                  {/* Foundation Info */}
                  <div className="bg-gradient-to-r from-green-50 to-green-50 rounded-2xl p-5 mb-6 border border-green-200/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-full opacity-30 transform translate-x-10 -translate-y-10"></div>
                    <p className="text-sm font-bold text-green-900 mb-2">FUNDAPYMES Foundation</p>
                    <p className="text-xs text-green-700 leading-relaxed">
                      Reg: 3-006-828845 • Supporting SMEs & Innovation
                    </p>
                  </div>
                </div>
                
                {/* Bank Accounts */}
                <div className="space-y-4 mb-8">
                  <div className="bg-gradient-to-r from-green-50 to-green-50 rounded-xl p-4 border border-green-200/50 hover:border-green-300/50 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xs font-bold text-green-700">COLONES ACCOUNT</p>
                    </div>
                    <p className="text-sm font-mono text-green-900 tracking-wider bg-white/50 rounded-lg px-3 py-2">CR86011610300057668679</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-50 rounded-xl p-4 border border-green-200/50 hover:border-green-300/50 transition-colors duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-xs font-bold text-green-700">USD ACCOUNT</p>
                    </div>
                    <p className="text-sm font-mono text-green-900 tracking-wider bg-white/50 rounded-lg px-3 py-2">CR18011610400057668831</p>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-xs text-gray-600">
                    Send receipt to: <span className="font-bold text-green-700 bg-green-50 px-2 py-1 rounded">8831-1022</span>
                  </p>
                </div>
              </div>
            </div>

            {/* SINPE Móvil */}
            <div className="relative group">
              {/* Background Glow Effect */}
              <div 
                className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all duration-500"
              ></div>
              
              {/* Main Card */}
              <div className="relative bg-white/98 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-green-100/50 hover:border-green-300/70 transition-all duration-500 hover:-translate-y-3 hover:shadow-4xl overflow-hidden">
                {/* Racing Lines Background */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-tl from-green-600 to-transparent transform -rotate-45"></div>
                  <div className="absolute inset-2 bg-gradient-to-tl from-green-500 to-transparent transform -rotate-45"></div>
                </div>
                
                {/* Icon Section */}
                <div className="relative mb-8">
                  <div 
                    className="w-24 h-24 mx-auto rounded-3xl mb-6 flex items-center justify-center group-hover:scale-105 transition-all duration-500 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #22643c 0%, #34a853 50%, #1a4d2e 100%)',
                      boxShadow: '0 20px 40px rgba(34, 100, 60, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                    }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                    
                    <svg width="48" height="48" fill="white" viewBox="0 0 24 24" className="relative z-10">
                      <path d="M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3-4H9V6h6v10z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center mb-8">
                  <h3 
                    className="text-2xl font-black mb-4 bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent"
                    style={{ 
                      fontFamily: 'var(--font-racing)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    SINPE MÓVIL
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 font-medium text-base">
                    The <span className="text-green-700 font-bold">fastest</span> way to support us from Costa Rica. 
                    Instant, secure, available 24/7.
                  </p>
                </div>
                
                {/* SINPE Number */}
                <div className="bg-gradient-to-br from-green-50 via-white to-green-50 rounded-2xl p-8 mb-8 border border-green-200/50 relative overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-green-100 rounded-full opacity-20 transform -translate-x-12 -translate-y-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <p className="text-sm font-bold text-green-700">SINPE MÓVIL</p>
                    </div>
                    <p 
                      className="text-4xl font-black text-center mb-3 bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent"
                      style={{ 
                        fontFamily: 'var(--font-racing)',
                        letterSpacing: '0.1em'
                      }}
                    >
                      8831-1022
                    </p>
                    <p className="text-xs text-green-600 text-center">
                      Available from any Costa Rican bank
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 space-y-2">
                  {[
                    'Instant transfer',
                    'No additional fees',
                    '24/7 availability'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button 
                    onClick={() => {
                      if (typeof navigator !== 'undefined' && navigator.clipboard) {
                        navigator.clipboard.writeText('88311022');
                        // You could add a toast notification here
                      }
                    }}
                    className="relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-green-600 via-green-700 to-green-600 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group-hover:from-green-700 group-hover:to-green-600 overflow-hidden"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      letterSpacing: '0.02em'
                    }}
                  >

                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>          

        </div>
      </section>

      {/* Global Racing Animations for Team & Sponsors + F1 Checkered Flag */}
      <style jsx global>{`
        @keyframes speedLine {
          0% { transform: skewX(-15deg) translateX(-50px); opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { transform: skewX(-15deg) translateX(100vw); opacity: 0; }
        }
        @keyframes raceStripes {
          0% { transform: translateX(-80px); }
          100% { transform: translateX(80px); }
        }
        @keyframes speedBurst {
          0% { transform: translateX(-15px); opacity: 0; }
          30% { opacity: 0.7; }
          70% { opacity: 0.7; }
          100% { transform: translateX(30px); opacity: 0; }
        }
        @keyframes speedDash {
          0% { transform: translateX(-8px); opacity: 0; width: 15px; }
          40% { opacity: 1; width: 25px; }
          100% { transform: translateX(25px); opacity: 0; width: 5px; }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes checkered-move {
          0% { background-position: 0 0; }
          100% { background-position: 48px 48px; }
        }
        .animate-checkered-move {
          animation: checkered-move 6s linear infinite;
        }
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          50% { transform: translateX(200%) rotate(45deg); }
          100% { transform: translateX(-100%) rotate(45deg); }
        }
        @keyframes flagWave {
          0%, 100% { transform: skewX(0deg); }
          25% { transform: skewX(-2deg); }
          75% { transform: skewX(2deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-45deg); }
          100% { transform: translateX(200%) skewX(-45deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 100, 60, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 100, 60, 0.6); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        /* Advanced shadow utilities */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        .shadow-4xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
        
        /* Glassmorphism effect */
        .glass-effect {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        /* Premium gradients */
        .premium-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        /* Hover effects */
        .card-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Racing line animations */
        .racing-lines::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          animation: shine 3s infinite;
        }
      `}</style>

      {/* Simple Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2025 Kura Force. All rights reserved.
            </p>
            
            {/* GitHub Link */}
            <a 
              href="https://github.com/AllanDBB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
