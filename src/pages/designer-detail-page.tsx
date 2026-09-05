import { useParams } from 'react-router-dom'
import { CloneCatalogue } from '@/components/clone-catalogue'
import { PageHeading } from '@/components/page-heading'
import { clones } from '@/data/clones'

export function DesignerDetailPage() {
  const { house = '' } = useParams()
  const name = decodeURIComponent(house)
  const matches = clones.filter((clone) => clone.original.house === name)

  return (
    <main>
      <PageHeading
        title={name}
        description={`Affordable clones inspired by ${name}.`}
      />
      {matches.length === 0 ? (
        <p className="mx-auto max-w-7xl px-4 py-10 font-heading text-sm text-zinc-600">
          No clones found for this house.
        </p>
      ) : (
        <CloneCatalogue clonesOverride={matches} />
      )}
    </main>
  )
}
