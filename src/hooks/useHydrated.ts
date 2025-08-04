'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to avoid hydration mismatch by ensuring component is fully hydrated
 * before showing client-side only content
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return hydrated
}
