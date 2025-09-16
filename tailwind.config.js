/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'racing': ['var(--font-racing)', 'Orbitron', 'monospace'],
        'accent': ['var(--font-accent)', 'Montserrat', 'sans-serif'],
        'secondary': ['var(--font-secondary)', 'Inter', 'sans-serif'],
        'primary': ['var(--font-primary)', 'Playfair Display', 'serif'],
      },
      colors: {
        // Colores Primarios
        'green-racing': '#22643c',
        'green-secondary': '#34a853',
        'green-dark': '#1a4d2e',
        'green-light': '#4ade80',
        'green-accent': '#16a34a',
        // Colores Neutros
        'white-pure': '#ffffff',
        'carbon-black': '#0D0D0D',
        'gray-light': '#f8f9fa',
        'gray-dark': '#374151',
        // Colores para Sponsors
        'diamond': '#B9F2FF',
        'platinum': '#E5E7EB',
        'sponsor-green': '#22643c',
        'silver': '#C0C0C0',
        'bronze': '#CD7F32',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f1419 0%, #1a332a 25%, #153523 50%, #0a1f15 75%, #000000 100%)',
        'light-gradient': 'linear-gradient(135deg, #f8fffe 0%, #f0f9f6 25%, #ffffff 50%, #f5fdf9 75%, #ffffff 100%)',
        'green-gradient': 'linear-gradient(135deg, #22643c 0%, #34a853 100%)',
        'racing-gradient': 'linear-gradient(135deg, #1a4d2e 0%, #22643c 100%)',
      },
      spacing: {
        'section': '6rem',
        'section-md': '8rem',
        'section-lg': '10rem',
      },
      letterSpacing: {
        'racing-tight': '-0.02em',
        'racing-normal': '-0.01em',
        'racing-wide': '0.02em',
      },
      lineHeight: {
        'body-large': '1.8',
        'body-regular': '1.7',
      },
    },
  },
  plugins: [],
}