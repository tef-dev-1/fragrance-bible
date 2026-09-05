import { CloneCatalogue } from '@/components/clone-catalogue'
import { PageHeading } from '@/components/page-heading'
import { clones } from '@/data/clones'

const ranked = [...clones].sort((a, b) => b.similarity - a.similarity)

export function BestMatchesPage() {
  return (
    <main>
      <PageHeading
        title="Best matches"
        description="Clones ranked by reported scent similarity, from closest dupes to looser interpretations."
      />
      <CloneCatalogue clonesOverride={ranked} />
    </main>
  )
}
