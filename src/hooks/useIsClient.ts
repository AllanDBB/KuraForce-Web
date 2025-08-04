import { useEffect, useState } from 'react'

/**
 * Force immediate hydration by checking if window is available
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
