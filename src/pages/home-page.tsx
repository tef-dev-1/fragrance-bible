import { Hero } from '@/components/hero'
import { CloneCatalogue } from '@/components/clone-catalogue'

export function HomePage() {
  return (
    <main>
      <Hero />
      <CloneCatalogue sectionTitle="Trending Fragrances" />
    </main>
  )
}
