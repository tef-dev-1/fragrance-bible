import { CloneCatalogue } from '@/components/clone-catalogue'
import { PageHeading } from '@/components/page-heading'

export function FragrancesPage() {
  return (
    <main>
      <PageHeading
        title="Fragrances"
        description="Browse every clone in the catalogue — designer originals on one side, affordable alternatives on the other."
      />
      <CloneCatalogue />
    </main>
  )
}
