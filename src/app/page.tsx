'use client';

import { useState, useEffect } from 'react';
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
    </main>
  );
}
