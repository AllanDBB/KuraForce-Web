'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import NavigationIsland from '@/components/NavigationIsland';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <NavigationIsland />
      <Hero />

      {/* Our Team Section */}
      <section id="team" className="min-h-screen flex flex-col items-center justify-center py-20 px-4" style={{
        background: `
          linear-gradient(135deg, #f8fffe 0%, #f0f9f6 25%, #ffffff 50%, #f5fdf9 75%, #ffffff 100%)
        `
      }}>
        <div className="max-w-6xl mx-auto text-center">
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
        <div className="max-w-4xl mx-auto text-center">
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
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-8"
              style={{
                fontFamily: 'var(--font-racing)',
                background: 'linear-gradient(135deg, #22643c 0%, #34a853 30%, #1a4d2e 60%, #22643c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em'
              }}
            >
              WHAT WE DO
            </h2>
            <div className="flex justify-center items-center w-full">
              <p 
                className="text-lg md:text-xl max-w-3xl text-center"
                style={{
                  fontFamily: 'var(--font-accent)',
                  color: '#4a5568',
                  lineHeight: '1.7',
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                Engineering excellence through innovation, precision, and passion for motorsport.
              </p>
              <div className="h-25"></div>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 justify-items-center">
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
                className="bg-white/90 backdrop-blur-sm rounded-xl border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 px-4 py-6 flex flex-col items-center justify-center text-center"
              >
                <div 
                  className="text-4xl font-light text-green-700 mb-4"
                  style={{ 
                    fontFamily: 'var(--font-racing)',
                    textShadow: '0 2px 4px rgba(34, 100, 60, 0.15)'
                  }}
                >
                  {activity.symbol}
                </div>
                <h3 
                  className="text-base font-bold text-green-700 mb-4"
                  style={{ 
                    fontFamily: 'var(--font-racing)',
                    letterSpacing: '0.02em'
                  }}
                >
                  {activity.title}
                </h3>
                <p 
                  className="text-xs text-gray-600 leading-snug flex-1 flex items-center justify-center text-center"
                  style={{ 
                    fontFamily: 'var(--font-primary)',
                    lineHeight: '1.4'
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

          {/* Racing Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "TechCorp", category: "Technology Partner" },
              { name: "SpeedWorks", category: "Engineering Support" },
              { name: "InnovateCR", category: "Innovation Hub" },
              { name: "RaceTech", category: "Racing Solutions" },
              { name: "FutureForge", category: "Manufacturing" },
              { name: "VelocityLab", category: "Research Partner" },
              { name: "PrecisionCo", category: "Precision Tools" },
              { name: "AeroFlow", category: "Aerodynamics" }
            ].map((sponsor, index) => (
              <div 
                key={index}
                className="group relative p-5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fffe 50%, #f0f9f6 100%)',
                  border: '2px solid rgba(34, 100, 60, 0.1)',
                  boxShadow: '0 4px 20px rgba(34, 100, 60, 0.06)',
                  animation: `cardFloat ${4 + index * 0.3}s ease-in-out infinite`
                }}
              >
                {/* Speed Lines on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-xl">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${25 + i * 20}%`,
                        right: '-15px',
                        width: '25px',
                        height: '1px',
                        background: 'linear-gradient(90deg, #22643c 0%, transparent 100%)',
                        animation: 'speedDash 1s ease-out infinite',
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <div 
                      className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:rotate-6 transition-transform duration-500"
                      style={{
                        background: 'linear-gradient(135deg, #22643c 0%, #34a853 100%)',
                        boxShadow: '0 6px 20px rgba(34, 100, 60, 0.25)'
                      }}
                    >
                      <span className="text-white text-lg font-bold">
                        {sponsor.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 
                    className="font-black text-base mb-2 group-hover:text-green-700 transition-colors duration-300"
                    style={{ 
                      color: '#22643c',
                      fontFamily: 'var(--font-racing)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {sponsor.name}
                  </h3>
                  <p 
                    className="text-xs font-medium"
                    style={{ color: '#4a5568' }}
                  >
                    {sponsor.category}
                  </p>
                </div>

                {/* Racing Number */}
                <div 
                  className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #22643c 0%, #34a853 100%)',
                    color: 'white'
                  }}
                >
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Racing Animations */}
        <style jsx>{`
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
        `}</style>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="w-full max-w-6xl mx-auto py-12">
          {/* Main Content - Responsive container with improved alignment */}
          <div className="flex flex-row items-center justify-between w-full mx-auto flex-nowrap gap-0">
            {/* Social Links - Left */}
            <div className="flex flex-row items-center gap-2 order-1 m-0 p-0">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
              >
                <svg
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-gray-600 group-hover:text-green-600 transition-colors"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            {/* Brand Section - Right */}
            <div className="flex flex-col items-end text-right order-2 m-0 p-0">
              <h3 
                className="text-2xl font-black mb-2"
                style={{
                  fontFamily: 'var(--font-racing)',
                  color: '#22643c',
                  letterSpacing: '-0.01em'
                }}
              >
                KURA FORCE
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Costa Rican F1 Racing Team
              </p>
            </div>
          </div>

          {/* Copyright - Simple Line */}
          <div className="border-t border-gray-100 mt-10 pt-6 text-center">
            <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-primary)' }}>
              © 2025 Kura Force. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Team Carousel Component
function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map each member to an image from KuraMembers
  const teamMembers = [
    {
      name: "Mariana",
      role: "Marketing Manager",
      description: "Leads the team's marketing strategy, brand presence, and public relations to ensure Kura Force stands out on and off the track.",
      image: "/KuraMembers/Mariana.jpg",
      instagram: "https://instagram.com/m_muribe"
    },
    {
      name: "David",
      role: "Team Manager",
      description: "Coordinates all team operations, manages schedules, and ensures every member is aligned for peak performance.",
      image: "/KuraMembers/David.jpg",
      instagram: "https://instagram.com/dcascante_com"
    },
    {
      name: "Carolina",
      role: "Manufacturing Engineer",
      description: "Oversees the fabrication and assembly of car components, guaranteeing quality and precision in every detail.",
      image: "/KuraMembers/Carolina.png",
      instagram: "https://instagram.com/whos._cbm"
    },
    {
      name: "Esteban",
      role: "Design Engineer",
      description: "Responsible for the technical design and CAD modeling of the car, focusing on innovation and aerodynamic efficiency.",
      image: "/KuraMembers/Alguien1.jpg",
      instagram: "https://instagram.com/itz.cubzzz"
    },
    {
      name: "Geicob",
      role: "Resource Manager",
      description: "Manages team resources, logistics, and budgeting to ensure smooth operations and optimal allocation of materials.",
      image: "/KuraMembers/Alguien2.jpg",
      instagram: "https://instagram.com/geicob_bm"
    },
    {
      name: "Felipe",
      role: "Graphic Designer",
      description: "Creates all visual materials, from car liveries to presentations, maintaining a strong and cohesive team identity.",
      image: "/KuraMembers/Alguien3.jpg",
      instagram: "https://instagram.com/pipesaenzz"
    },
    {
      name: "Verónica",
      role: "Team Guest",
      description: "Special guest and former team leader, providing guidance and sharing experience with the current Kura Force team.",
      image: "/KuraMembers/Verónica.jpg",
      instagram: "https://instagram.com/vero_ques"
    },
    {
      name: "Fabricio",
      role: "Team Guest",
      description: "Special guest and former technology lead, supporting the team with insights on innovation and engineering.",
      image: "/KuraMembers/Fabricio.jpg",
      instagram: "https://instagram.com/fzamora14"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(teamMembers.length / 3)) % Math.ceil(teamMembers.length / 3));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-3xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Slides */}
          {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="flex justify-center items-center min-h-[420px] py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {teamMembers.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, memberIndex) => (
                    <div key={memberIndex} className="flex justify-center">
                      <div className="relative group w-full max-w-[300px]">
                        {/* Avatar flotante con imagen */}
                        <div 
                          className="relative z-20 w-28 h-28 mx-auto mb-3 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-110 overflow-hidden border-4 border-green-700 bg-white"
                          style={{
                            boxShadow: '0 8px 32px rgba(34, 100, 60, 0.2), 0 0 0 6px rgba(34, 100, 60, 0.05)'
                          }}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={112}
                            height={112}
                            className={
                              "object-cover w-full h-full rounded-full" +
                              (member.name === "Mariana" || member.name === "Fabricio" ? " object-[center_20%]" : "")
                            }
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>

                        {/* Semi-card content */}
                        <div 
                          className="relative bg-white rounded-2xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 flex flex-col justify-between"
                          style={{
                            width: '100%',
                            height: '260px',
                            marginTop: '-1.5rem',
                            boxShadow: '0 12px 40px rgba(34, 100, 60, 0.08), 0 4px 16px rgba(34, 100, 60, 0.04)',
                            border: '1px solid rgba(34, 100, 60, 0.1)',
                            padding: '20px 16px 16px 16px'
                          }}
                        >
                          {/* Gradiente sutil en la parte superior */}
                          <div 
                            className="absolute top-0 left-0 right-0 h-12 rounded-t-2xl opacity-30"
                            style={{
                              background: 'linear-gradient(135deg, rgba(34, 100, 60, 0.05) 0%, transparent 100%)'
                            }}
                          ></div>
                          
                          {/* Contenido principal - perfectamente distribuido */}
                          <div className="relative z-10 text-center flex flex-col justify-between h-full">
                            {/* Header section */}
                            <div className="flex flex-col items-center pt-2">
                              <h3 
                                className="text-lg font-bold mb-2 leading-tight"
                                style={{ color: '#22643c' }}
                              >
                                {member.name}
                              </h3>
                              
                              <div 
                                className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full"
                                style={{
                                  background: 'linear-gradient(135deg, #22643c 0%, #34a853 100%)',
                                  color: 'white',
                                  boxShadow: '0 4px 12px rgba(34, 100, 60, 0.2)'
                                }}
                              >
                                {member.role}
                              </div>
                            </div>
                            
                            {/* Content section - Centrado verticalmente */}
                            <div className="flex-1 flex items-center justify-center px-1">
                              <p 
                                className="text-center leading-relaxed text-xs"
                                style={{ color: '#4a5568', lineHeight: '1.4' }}
                              >
                                {member.description}
                              </p>
                            </div>
                            
                            {/* Footer section */}
                            <div className="flex flex-col items-center gap-2">
                              {/* Separador elegante */}
                              <div className="w-10 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                              
                              <div className="flex justify-center gap-2">
                                <a 
                                  href={member.instagram} 
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                  style={{
                                    background: 'linear-gradient(135deg, #22643c 0%, #34a853 100%)',
                                    color: '#fff'
                                  }}
                                >
                                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.268.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border-2 border-green-100 hover:border-green-300"
        style={{ zIndex: 10 }}
      >
        <svg width="18" height="18" fill="none" stroke="#22643c" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border-2 border-green-100 hover:border-green-300"
        style={{ zIndex: 10 }}
      >
        <svg width="18" height="18" fill="none" stroke="#22643c" strokeWidth="2" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-green-600 scale-125 shadow-lg' 
                : 'bg-green-200 hover:bg-green-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
