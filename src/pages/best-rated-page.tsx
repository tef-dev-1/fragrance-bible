import { CloneCatalogue } from '@/components/clone-catalogue'
import { PageHeading } from '@/components/page-heading'
import { clones } from '@/data/clones'

const ranked = [...clones].sort((a, b) => b.similarity - a.similarity)

export function BestRatedPage() {
  return (
    <main>
      <PageHeading
        title="Best Rated"
        description="The highest-similarity clones in the catalogue, ranked from closest match to more interpretive takes."
      />
      <CloneCatalogue clonesOverride={ranked} />
    </main>
  )
}
