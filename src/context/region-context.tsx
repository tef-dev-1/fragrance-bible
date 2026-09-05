import { createContext, useContext } from 'react'
import type { Region } from '@/data/clones'

export type RegionContextValue = {
  region: Region
  setRegion: (region: Region) => void
}

export const RegionContext = createContext<RegionContextValue | null>(null)

export function useRegion() {
  const value = useContext(RegionContext)
  if (!value) {
    throw new Error('useRegion must be used within RegionContext')
  }
  return value
}
