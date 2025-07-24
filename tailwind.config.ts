import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Aston Martin Racing Color Palette
        racing: {
          green: '#003824',
          forest: '#004225',
          emerald: '#00543C',
        },
        orange: {
          primary: '#FF6600',
          neon: '#FF4500',
          warm: '#FF8533',
        },
        carbon: {
          black: '#0D0D0D',
          dark: '#1A1A1A',
          light: '#2D2D2D',
        },
        // Custom gradients
        gradient: {
          racing: 'linear-gradient(135deg, #003824, #00543C)',
          orange: 'linear-gradient(135deg, #FF6600, #FF4500)',
          carbon: 'linear-gradient(135deg, #0D0D0D, #1A1A1A)',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fadeInUp': 'fadeInUp 1s ease-out',
        'slideInLeft': 'slideInLeft 1s ease-out',
        'slideInRight': 'slideInRight 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FF6600, 0 0 10px #FF6600, 0 0 15px #FF6600' },
          '100%': { boxShadow: '0 0 10px #FF6600, 0 0 20px #FF6600, 0 0 30px #FF6600' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'racing-gradient': 'linear-gradient(135deg, #003824 0%, #00543C 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6600 0%, #FF4500 100%)',
        'carbon-gradient': 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 100%)',
      },
    },
  },
  plugins: [],
}

export default config
