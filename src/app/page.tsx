import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import TeamSection from '@/components/TeamSection'
import AboutSection from '@/components/AboutSection'
import WhatWeDoSection from '@/components/WhatWeDoSection'
import SponsorsSection from '@/components/SponsorsSection'
import SupportSection from '@/components/SupportSection'
import MeetOurMediaSection from '@/components/MeetOurMediaSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TeamSection />
      <AboutSection />
      <WhatWeDoSection />
      <SponsorsSection />
      <SupportSection />
      <MeetOurMediaSection />
      <Footer />
    </main>
  )
}