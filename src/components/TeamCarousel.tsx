'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

// Team Carousel Component
function TeamCarousel() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const nextMember = () => {
    setFocusedIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setFocusedIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const focusOnMember = (index: number) => {
    setFocusedIndex(index);
  };

  return (
    <div ref={carouselRef} className="relative w-full max-w-6xl mx-auto px-4">
      {/* Main Container */}
      <div className="relative flex items-center justify-between gap-8" style={{ minHeight: '500px' }}>
        
        {/* Left Side - Circular Carousel */}
        <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: '520px', height: '520px' }}>
          {/* Outer decorative rings */}
          <div 
            className="absolute rounded-full border border-green-100/50"
            style={{ width: '500px', height: '500px' }}
          ></div>
          <div 
            className="absolute rounded-full border border-green-200/30"
            style={{ width: '440px', height: '440px' }}
          ></div>
          
          {teamMembers.map((member, index) => {
            const angle = (index * 360) / teamMembers.length + (focusedIndex * -45); // Rotación continua
            const radius = 180; // Radio del círculo (aumentado más)
            const isFocused = index === focusedIndex;
            
            // No mostrar el miembro enfocado en el círculo (está en el centro)
            if (isFocused) return null;
            
            // Calcular posición en el círculo
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            // Distancia angular desde la posición principal (derecha)
            const distanceFromMain = Math.abs(((angle % 360) + 360) % 360);
            const normalizedDistance = Math.min(distanceFromMain, 360 - distanceFromMain) / 180;
            
            return (
              <div
                key={index}
                className="absolute cursor-pointer transition-all duration-1000 ease-in-out"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  zIndex: 20 - Math.floor(normalizedDistance * 10)
                }}
                onClick={() => focusOnMember(index)}
              >
                <div 
                  className="relative rounded-full flex items-center justify-center shadow-xl transition-all duration-1000 overflow-hidden border-4 bg-white w-20 h-20 border-green-400"
                  style={{
                    boxShadow: '0 8px 24px rgba(34, 100, 60, 0.15)',
                    filter: `blur(${normalizedDistance * 1.5}px) brightness(${0.6 + normalizedDistance * 0.3}) saturate(${0.5 + normalizedDistance * 0.4})`,
                    opacity: 0.4 + normalizedDistance * 0.4,
                    scale: '0.9'
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className={
                      "object-cover w-full h-full rounded-full transition-all duration-1000" +
                      (member.name === "Mariana" || member.name === "Fabricio" ? " object-[center_20%]" : "") +
                      (member.name === "Carolina" ? " object-[center_30%]" : "") +
                      (member.name === "Esteban" ? " object-[center_25%]" : "")
                    }
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                
                {/* Name label */}
                <div 
                  className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  style={{
                    opacity: 0.6 + normalizedDistance * 0.3
                  }}
                >
                  <p 
                    className="text-xs font-semibold px-2 py-1 bg-white/80 rounded-full shadow-sm"
                    style={{ color: '#22643c' }}
                  >
                    {member.name}
                  </p>
                </div>
              </div>
            );
          })}
          
          {/* Centro del círculo - Foto grande del miembro enfocado */}
          <div 
            className="absolute w-40 h-40 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border-4 border-green-700 bg-white transition-all duration-1000"
            style={{
              boxShadow: '0 20px 64px rgba(34, 100, 60, 0.3), 0 0 0 8px rgba(34, 100, 60, 0.1)',
              zIndex: 50
            }}
          >
            <Image
              src={teamMembers[focusedIndex].image}
              alt={teamMembers[focusedIndex].name}
              width={160}
              height={160}
              className={
                "object-cover w-full h-full rounded-full transition-all duration-1000" +
                (teamMembers[focusedIndex].name === "Mariana" || teamMembers[focusedIndex].name === "Fabricio" ? " object-[center_20%]" : "") +
                (teamMembers[focusedIndex].name === "Carolina" ? " object-[center_30%]" : "") +
                (teamMembers[focusedIndex].name === "Esteban" ? " object-[center_25%]" : "")
              }
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Right Side - Featured Member Card */}
        <div className="flex-1 min-h-[450px] flex items-center">
          <div 
            className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-2xl transition-all duration-1000 transform hover:scale-[1.02] relative overflow-hidden"
            style={{
              boxShadow: '0 30px 90px rgba(34, 100, 60, 0.15), 0 15px 45px rgba(34, 100, 60, 0.1)',
              border: '1px solid rgba(34, 100, 60, 0.08)',
              background: 'linear-gradient(135deg, #ffffff 0%, #fefffe 50%, #f9fffe 100%)'
            }}
          >
            {/* Decorative top border */}
            <div 
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{
                background: 'linear-gradient(90deg, #22643c 0%, #34a853 50%, #22643c 100%)'
              }}
            ></div>
            
            {/* Card Header */}
            <div className="relative p-10 pb-6 pt-12">
              {/* Subtle background pattern */}
              <div 
                className="absolute top-0 left-0 right-0 h-32 rounded-t-3xl opacity-20"
                style={{
                  background: `
                    radial-gradient(circle at 20% 50%, rgba(34, 100, 60, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(52, 168, 83, 0.08) 0%, transparent 50%),
                    linear-gradient(135deg, rgba(34, 100, 60, 0.05) 0%, transparent 100%)
                  `
                }}
              ></div>
              
              <div className="relative text-center">
                {/* Name with enhanced typography */}
                <h3 
                  className="text-4xl font-black mb-5 leading-tight tracking-tight"
                  style={{ 
                    color: '#22643c',
                    fontFamily: 'var(--font-racing)',
                    textShadow: '0 2px 4px rgba(34, 100, 60, 0.1)'
                  }}
                >
                  {teamMembers[focusedIndex].name}
                </h3>
                
                {/* Enhanced role badge */}
                <div 
                  className="inline-flex items-center text-sm font-bold px-6 py-3 rounded-xl mb-4 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #22643c 0%, #34a853 50%, #1a4d2e 100%)',
                    color: 'white',
                    boxShadow: '0 6px 20px rgba(34, 100, 60, 0.3), 0 2px 8px rgba(34, 100, 60, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Subtle shine effect */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                      animation: 'shine 3s ease-in-out infinite'
                    }}
                  ></div>
                  <span className="relative z-10">{teamMembers[focusedIndex].role}</span>
                </div>
              </div>
            </div>
            
            {/* Card Content */}
            <div className="px-10 pb-8">
              {/* Description with better spacing */}
              <div className="text-center mb-8">
                <p 
                  className="text-base leading-relaxed font-medium"
                  style={{ 
                    color: '#4a5568', 
                    lineHeight: '1.7',
                    fontFamily: 'var(--font-primary)'
                  }}
                >
                  {teamMembers[focusedIndex].description}
                </p>
              </div>
              
              {/* Social Link */}
              <div className="text-center mb-2">
                <a 
                  href={teamMembers[focusedIndex].instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #22643c 0%, #34a853 50%, #1a4d2e 100%)',
                    boxShadow: '0 8px 25px rgba(34, 100, 60, 0.3)'
                  }}
                >
                  {/* Animated gradient overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-green-500 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  ></div>
                  
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="relative z-10">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.268.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  
                  <span className="relative z-10">Follow</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-12 gap-8">
        {/* Previous Button */}
        <button
          onClick={prevMember}
          className="group flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-green-100"
          style={{
            boxShadow: '0 8px 25px rgba(34, 100, 60, 0.1)'
          }}
        >
          <svg 
            width="24" 
            height="24" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            className="text-green-700 transition-colors duration-300 group-hover:text-green-600"
            style={{ strokeWidth: '2.5' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center gap-3">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => focusOnMember(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === focusedIndex 
                  ? 'bg-green-700 scale-125 shadow-lg' 
                  : 'bg-green-200 hover:bg-green-400'
              }`}
              style={{
                boxShadow: index === focusedIndex ? '0 4px 12px rgba(34, 100, 60, 0.4)' : 'none'
              }}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextMember}
          className="group flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-green-100"
          style={{
            boxShadow: '0 8px 25px rgba(34, 100, 60, 0.1)'
          }}
        >
          <svg 
            width="24" 
            height="24" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            className="text-green-700 transition-colors duration-300 group-hover:text-green-600"
            style={{ strokeWidth: '2.5' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TeamCarousel;
