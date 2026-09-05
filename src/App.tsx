import { useState } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { SiteHeader } from '@/components/site-header'
import { RegionContext } from '@/context/region-context'
import type { Region } from '@/data/clones'
import { AboutPage } from '@/pages/about-page'
import { BestMatchesPage } from '@/pages/best-matches-page'
import { BestRatedPage } from '@/pages/best-rated-page'
import { DesignerDetailPage } from '@/pages/designer-detail-page'
import { DesignersPage } from '@/pages/designers-page'
import { FavouritesPage } from '@/pages/favourites-page'
import { FinderPage } from '@/pages/finder-page'
import { FragrancesPage } from '@/pages/fragrances-page'
import { HomePage } from '@/pages/home-page'
import { HouseDetailPage } from '@/pages/house-detail-page'
import { HousesPage } from '@/pages/houses-page'
import { NoteDetailPage } from '@/pages/note-detail-page'
import { NotesPage } from '@/pages/notes-page'

function Layout() {
  const [region, setRegion] = useState<Region>('eu')

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      <div className="min-h-dvh bg-white text-zinc-900">
        <SiteHeader />
        <Outlet />
      </div>
    </RegionContext.Provider>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/fragrances" element={<FragrancesPage />} />
        <Route path="/fragrances/designers" element={<DesignersPage />} />
        <Route path="/fragrances/designers/:house" element={<DesignerDetailPage />} />
        <Route path="/fragrances/houses" element={<HousesPage />} />
        <Route path="/fragrances/houses/:house" element={<HouseDetailPage />} />
        <Route path="/fragrances/best-matches" element={<BestMatchesPage />} />
        <Route path="/fragrances/best-rated" element={<BestRatedPage />} />
        <Route path="/fragrances/favourites" element={<FavouritesPage />} />
        <Route path="/finder" element={<FinderPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/notes/:slug" element={<NoteDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
