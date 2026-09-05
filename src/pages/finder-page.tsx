import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CloneCatalogue } from '@/components/clone-catalogue'
import { PageHeading } from '@/components/page-heading'

export function FinderPage() {
  const [params] = useSearchParams()
  const initialQuery = useMemo(() => params.get('q') ?? '', [params])

  return (
    <main>
      <PageHeading
        title="Fragrance Finder"
        description="Search any designer, niche, or clone name to find a cheaper alternative."
      />
      <CloneCatalogue
        key={initialQuery}
        initialQuery={initialQuery}
        searchPlaceholder="Search perfumes, houses, clones..."
      />
    </main>
  )
}
