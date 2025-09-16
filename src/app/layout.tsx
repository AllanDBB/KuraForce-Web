import './globals.css'
import type { Metadata } from 'next'
import { Orbitron, Montserrat, Inter, Playfair_Display } from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-racing',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Kura Force - STEM Racing Costa Rica',
  description: 'Where precision engineering meets extreme speed. Kura Force represents the future of motorsport engineering, combining innovation, precision, and Costa Rican excellence on the global stage.',
  keywords: 'STEM Racing, Costa Rica, Engineering, Motorsport, Racing, Innovation, Kura Force',
  authors: [{ name: 'Kura Force Team' }],
  openGraph: {
    title: 'Kura Force - STEM Racing Costa Rica',
    description: 'Where precision engineering meets extreme speed. Costa Rican excellence in STEM Racing competition.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${orbitron.variable} ${montserrat.variable} ${inter.variable} ${playfair.variable}`}
    >
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}