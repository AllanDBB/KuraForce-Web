"use client";
import Player from 'lottie-react';
import f1Lottie from '../assets/f1-lottie-real.json' assert { type: 'json' };

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Natural Background with Organic Patterns */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(21, 50, 35, 0.9) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(30, 60, 40, 0.8) 0%, transparent 40%),
            radial-gradient(circle at center, rgba(15, 40, 25, 0.7) 0%, transparent 60%),
            linear-gradient(135deg, #0f1419 0%, #1a332a 25%, #153523 50%, #0a1f15 75%, #000000 100%)
          `
        }}
      >
        {/* Cinematic F1 Car Lottie Animation */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '60%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          maxWidth: '700px',
          opacity: 0.22,
          filter: 'blur(1.5px) drop-shadow(0 8px 32px #e2c04488)',
          pointerEvents: 'none',
          zIndex: 1
        }}>
          <Player
            animationData={f1Lottie}
            autoplay
            loop
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        {/* Organic Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(252, 248, 227, 0.03) 0%, transparent 30%),
              radial-gradient(circle at 80% 60%, rgba(34, 100, 60, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 40% 80%, rgba(245, 240, 215, 0.02) 0%, transparent 35%)
            `
          }}
        ></div>
        
        {/* Subtle Leaf-like Patterns */}
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            background: `
              repeating-conic-gradient(from 0deg at 25% 25%, transparent 0deg, rgba(34, 100, 60, 0.02) 45deg, transparent 90deg),
              repeating-conic-gradient(from 180deg at 75% 75%, transparent 0deg, rgba(252, 248, 227, 0.01) 60deg, transparent 120deg)
            `,
            animationDuration: '12s'
          }}
        ></div>
      </div>

      {/* Natural Elements System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Organic Flow Lines */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              repeating-linear-gradient(
                25deg,
                transparent 0px,
                transparent 8px,
                rgba(34, 100, 60, 0.02) 8px,
                rgba(34, 100, 60, 0.02) 12px
              ),
              repeating-linear-gradient(
                -35deg,
                transparent 0px,
                transparent 12px,
                rgba(252, 248, 227, 0.01) 12px,
                rgba(252, 248, 227, 0.01) 16px
              )
            `,
            animation: 'organicFlow 20s ease-in-out infinite'
          }}
        ></div>

        {/* Floating Nature Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              background: i % 3 === 0 
                ? 'rgba(252, 248, 227, 0.4)' 
                : i % 3 === 1 
                ? 'rgba(34, 100, 60, 0.3)'
                : 'rgba(245, 240, 215, 0.2)',
              borderRadius: i % 2 === 0 ? '50%' : '2px',
              top: `${15 + (i * 7)}%`,
              left: `${8 + (i * 8)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + i * 2}s`,
              filter: 'blur(0.5px)'
            }}
          ></div>
        ))}

        {/* Subtle Energy Streams */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-0 animate-pulse"
            style={{
              width: '1px',
              height: '60%',
              left: `${15 + i * 25}%`,
              top: '20%',
              background: i % 2 === 0 
                ? 'linear-gradient(to bottom, transparent 0%, rgba(34, 100, 60, 0.1) 30%, rgba(52, 120, 80, 0.2) 50%, rgba(34, 100, 60, 0.1) 70%, transparent 100%)'
                : 'linear-gradient(to bottom, transparent 0%, rgba(252, 248, 227, 0.05) 30%, rgba(245, 240, 215, 0.1) 50%, rgba(252, 248, 227, 0.05) 70%, transparent 100%)',
              animationDelay: `${i * 3}s`,
              animationDuration: '10s',
              filter: 'blur(1px)'
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Hero Title */}
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-transparent bg-clip-text"
          style={{
            fontFamily: 'var(--font-racing)',
            backgroundImage: `
              linear-gradient(
                135deg,
                #fcf8e3 0%,
                #ffffff 20%,
                #f5f0d7 40%,
                #fcf8e3 60%,
                #ffffff 80%,
                #e8e2d0 100%
              )
            `,
            backgroundSize: '200% 200%',
            animation: 'naturalShine 6s ease-in-out infinite, gentleFloat 8s ease-in-out infinite',
            textShadow: '0 0 40px rgba(252, 248, 227, 0.3), 0 0 80px rgba(34, 100, 60, 0.2)',
            letterSpacing: '-0.02em'
          }}
        >
          KURA FORCE
        </h1>

        {/* Subtitle with Natural Styling */}
        <div className="mb-8">
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light mb-4"
            style={{
              fontFamily: 'var(--font-accent)',
              color: '#d4d8d4',
              letterSpacing: '0.12em',
              textShadow: '0 0 25px rgba(34, 100, 60, 0.4)',
              fontWeight: '300'
            }}
          >
            F1 IN SCHOOLS
          </h2>
          
          {/* Organic Separator */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
            <div 
              className="w-4 h-4 rounded-full animate-pulse shadow-lg"
              style={{
                background: 'radial-gradient(circle, #fcf8e3 40%, #e2c044 100%)',
                boxShadow: '0 0 12px 2px #e2c04488',
                animationDuration: '3s'
              }}
            ></div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-green-600 to-transparent"></div>
          </div>
          
          {/* Costa Rica Badge */}
          <p 
            className="text-lg italic font-light relative gold-shine-seq"
            style={{
              fontFamily: 'DM Sans, Arial, sans-serif',
              letterSpacing: '0.05em',
              fontWeight: 500,
              display: 'inline-block'
            }}
          >
          {/* Costa */}
          {['C','o','s','t','a'].map((char, i) => (
            <span
              key={i}
              className="gold-shine-letter"
              style={{ animationDelay: `${i * 0.35}s` }}
            >{char}</span>
          ))}
          {/* Custom space */}
          <span style={{ display: 'inline-block', width: '0.5em' }}></span>
          {/* Rica */}
          {['R','i','c','a'].map((char, i) => (
            <span
              key={i + 5}
              className="gold-shine-letter"
              style={{ animationDelay: `${(i + 5) * 0.35}s` }}
            >{char}</span>
          ))}
          </p>
        </div>

        {/* Elegant Description */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p 
            className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-6"
            style={{
              fontFamily: 'var(--font-primary)',
              color: '#c8ccc8',
              lineHeight: '1.9',
              fontWeight: '300'
            }}
          >
            &ldquo;Where precision engineering meets extreme speed, 
            and every innovation represents a step towards excellence.&rdquo;
          </p>
          
          <p 
            className="text-base md:text-lg opacity-80"
            style={{
              fontFamily: 'var(--font-accent)',
              color: '#a8aca8',
              lineHeight: '1.7',
              fontWeight: '400'
            }}
          >
            We are more than a team: we are visionaries of the future of motorsport.
          </p>
        </div>

        {/* Elegant Action Buttons */}
      </div>

      {/* Natural Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-10 h-10 border border-stone-300/40 rounded-full flex items-center justify-center animate-bounce backdrop-blur-sm">
            <div className="w-2 h-2 bg-gradient-to-b from-stone-200 to-green-600 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute -inset-2 border border-green-700/20 rounded-full animate-ping"></div>
        </div>
        <p 
          className="mt-3 text-xs text-stone-300/80 uppercase tracking-[0.2em] font-light"
          style={{ fontFamily: 'var(--font-accent)' }}
        >
          Discover More
        </p>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        .gold-shine-seq {
          /* Ensures inline-block for letter spans */
        }
        .gold-shine-letter {
          display: inline-block;
          color: #bfae6a;
          position: relative;
          animation: goldLetter 5s linear infinite;
        }
        @keyframes goldLetter {
          0%, 100% {
            color: #bfae6a;
            text-shadow: none;
          }
          40% {
            color: #d6cfa2;
            text-shadow: 0 0 1px #ffe58a, 0 0 2px #fffbe6;
          }
          60% {
            color: #f7f3d6;
            text-shadow: 0 0 2px #fffbe6, 0 0 3px #ffe58a;
          }
        }
        @keyframes naturalShine {
          0%, 100% { 
            background-position: 0% 0%; 
          }
          25% { 
            background-position: 100% 25%; 
          }
          50% { 
            background-position: 50% 100%; 
          }
          75% { 
            background-position: 25% 50%; 
          }
        }
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg); 
          }
          33% { 
            transform: translateY(-8px) scale(1.01) rotate(0.5deg); 
          }
          66% { 
            transform: translateY(-4px) scale(1.005) rotate(-0.3deg); 
          }
        }
        @keyframes organicFlow {
          0% { 
            transform: translateX(-50px) translateY(-30px) rotate(0deg); 
          }
          50% { 
            transform: translateX(20px) translateY(40px) rotate(2deg); 
          }
          100% { 
            transform: translateX(60px) translateY(-10px) rotate(-1deg); 
          }
        }
      `}</style>
    </section>
  );
}
