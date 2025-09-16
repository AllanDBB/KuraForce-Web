'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Sponsor {
  name: string
  logo: string
  tier: 'diamante' | 'platino' | 'oro' | 'plata' | 'bronce' | 'uncategory'
}

const sponsors: Sponsor[] = [
  // DIAMANTE
  { name: 'ALLORO', logo: '/Patrocinadores SR WF/Alloro Jungle Villas.png', tier: 'diamante' },
  { name: 'SOLVEK', logo: '/Patrocinadores SR WF/Logo Soltek_page-0001.jpg', tier: 'diamante' },
  { name: 'UNED', logo: '/Patrocinadores SR WF/UNED.png', tier: 'diamante' },
  
  // PLATINO
  { name: 'Grupo BM', logo: '/Patrocinadores SR WF/BM Supermercado.jpg', tier: 'platino' },
  
  // ORO
  { name: 'Monterrera', logo: '/Patrocinadores SR WF/Monterrera.jpeg', tier: 'oro' },
  { name: 'RFA', logo: '/Patrocinadores SR WF/RFA.png', tier: 'oro' },
  { name: 'NUTRIBALANC', logo: '/Patrocinadores SR WF/logo nutribalan-C_page-0001.jpg', tier: 'oro' },
  { name: 'El Rayo', logo: '/Patrocinadores SR WF/ElRayo_Simbolo+logotipo negro.png', tier: 'oro' },
  { name: 'Oceánica', logo: '/Patrocinadores SR WF/oceanica-01 (1).jpg', tier: 'oro' },
  
  // PLATA
  { name: 'RICOH', logo: '/Patrocinadores SR WF/Ricoh.png', tier: 'plata' },
  
  // BRONCE
  { name: 'Coope Tarrazú', logo: '/Patrocinadores SR WF/Coope Tarrazú.jpg', tier: 'bronce' },
  { name: 'J y P Excursiones', logo: '/Patrocinadores SR WF/JYP.jpg', tier: 'bronce' },
  { name: 'Constructora V y V', logo: '/Patrocinadores SR WF/VYH.jpg', tier: 'bronce' },
  
  // UNCATEGORY (Sin categoría)
  { name: 'AutoStar', logo: '/Patrocinadores SR WF/Autostar.png', tier: 'uncategory' },
  { name: 'Auto Mercado', logo: '/Patrocinadores SR WF/Automercado.png', tier: 'uncategory' },
  { name: 'ProSport', logo: '/Patrocinadores SR WF/Logo ProSport_page-0001.jpg', tier: 'uncategory' },
  { name: 'Valentina', logo: '/Patrocinadores SR WF/Valentina-logo.png', tier: 'uncategory' },
]

const tierConfig = {
  diamante: {
    title: 'DIAMANTE',
    color: 'blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    size: 'large'
  },
  platino: {
    title: 'PLATINO',
    color: 'gray-400',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    textColor: 'text-gray-600',
    size: 'large'
  },
  oro: {
    title: 'ORO',
    color: 'yellow-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-600',
    size: 'medium'
  },
  plata: {
    title: 'PLATA',
    color: 'gray-300',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    textColor: 'text-gray-500',
    size: 'medium'
  },
  bronce: {
    title: 'BRONCE',
    color: 'orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-600',
    size: 'small'
  },
  uncategory: {
    title: 'SIN CATEGORÍA',
    color: 'green-racing',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-600',
    size: 'small'
  }
}

const getSponsorsByTier = (tier: string) => {
  return sponsors.filter(sponsor => sponsor.tier === tier)
}

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="section-padding bg-white speed-lines">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-4xl md:text-5xl lg:text-6xl text-gradient-green mb-6 relative">
            <span className="relative z-10">OUR SPONSORS</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-green-gradient w-full" />
          </h2>
          
          <p className="body-large text-xl md:text-2xl text-green-dark/80 max-w-4xl mx-auto">
            <span className="font-bold text-green-racing">SPEED</span> meets innovation with our incredible sponsors. 
            Together, we're accelerating the future of Costa Rican motorsport.
          </p>
        </div>

        {/* Sponsors by Tier */}
        <div className="space-y-16">
          {Object.entries(tierConfig).map(([tier, config], tierIndex) => {
            const tierSponsors = getSponsorsByTier(tier)
            if (tierSponsors.length === 0) return null

            return (
              <div
                key={tier}
                className="space-y-8"
              >
                {/* Tier Title */}
                <div className="text-center">
                  <h3 className={`heading-tertiary text-2xl md:text-3xl lg:text-4xl ${config.textColor} mb-2`}>
                    {config.title}
                  </h3>
                  <div className={`w-24 h-1 bg-${config.color} mx-auto rounded-full`} />
                </div>

                {/* Sponsors Grid */}
                <div className={`flex flex-wrap justify-center gap-6 ${
                  config.size === 'large' ? 'gap-8' : config.size === 'medium' ? 'gap-6' : 'gap-4'
                }`}>
                  {tierSponsors.map((sponsor, index) => (
                    <div
                      key={sponsor.name}
                      className={`relative p-6 ${config.bgColor} ${config.borderColor} border-2 rounded-2xl overflow-hidden flex items-center justify-center ${
                        config.size === 'large' ? 'h-32 w-80' : config.size === 'medium' ? 'h-28 w-72' : 'h-24 w-64'
                      }`}
                    >
                      {/* Logo Container */}
                      <div className="relative z-10 h-full w-full flex items-center justify-center">
                        {sponsor.logo.endsWith('.pdf') || sponsor.logo.endsWith('.eps') || sponsor.logo.endsWith('.ai') || (sponsor.logo.includes('/KuraMembers/logo.png')) ? (
                          // Fallback for PDF/EPS/AI files or placeholder logos
                          <div className={`text-center ${config.textColor}`}>
                            <div className={`text-${config.size === 'large' ? 'xl' : config.size === 'medium' ? 'lg' : 'base'} font-bold heading-tertiary leading-tight`}>
                              {sponsor.name}
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            <Image
                              src={sponsor.logo}
                              alt={sponsor.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="body-large text-lg md:text-xl text-green-dark/80 mb-8 max-w-2xl mx-auto">
            Ready to join our team and accelerate Costa Rican motorsport excellence? 
            Let's create something extraordinary together.
          </p>
          
          <a
            href="mailto:forcekura@gmail.com?subject=Sponsorship Interest - Kura Force"
            className="inline-flex items-center px-8 py-4 bg-green-gradient text-white font-semibold rounded-full text-lg caption"
          >
            Become a Sponsor
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Racing Line Decorations */}
      <div className="absolute left-0 top-1/2 w-20 h-0.5 bg-gradient-to-r from-green-racing/60 to-transparent" />
      <div className="absolute right-0 top-1/3 w-16 h-0.5 bg-gradient-to-l from-green-secondary/60 to-transparent" />
    </section>
  )
}