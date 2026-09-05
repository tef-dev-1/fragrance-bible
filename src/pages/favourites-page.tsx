import { CloneCatalogue } from '@/components/clone-catalogue'
import { PageHeading } from '@/components/page-heading'
import { clones } from '@/data/clones'

const favouriteIds = new Set([
  'french-avenue-liquid-brun',
  'maison-alhambra-kismet-angel',
  'lattafa-oud-for-glory',
  'maison-alhambra-baroque-rouge-540',
  'zimaya-vanilla-tobacco',
  'paris-corner-emir-side-show',
  'maison-alhambra-toscano-leather',
  'fragrance-world-aventus-layton',
])

const favourites = clones.filter((clone) => favouriteIds.has(clone.id))

export function FavouritesPage() {
  return (
    <main>
      <PageHeading
        title="The Fragrance Bible Favourites"
        description="A short list of standout clones we keep coming back to — close matches, strong value, and easy to wear."
      />
      <CloneCatalogue clonesOverride={favourites} />
    </main>
  )
}
