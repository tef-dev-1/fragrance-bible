import { Link } from 'react-router-dom'
import { PageHeading } from '@/components/page-heading'
import { clones } from '@/data/clones'

const houses = [...new Set(clones.map((clone) => clone.original.house))].sort((a, b) =>
  a.localeCompare(b),
)

export function DesignersPage() {
  return (
    <main>
      <PageHeading
        title="Designers"
        description="The luxury and niche scents these clones are inspired by. Pick a house to see its dupes."
      />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {houses.map((house) => {
            const matches = clones.filter((clone) => clone.original.house === house)
            return (
              <li key={house}>
                <Link
                  to={`/fragrances/designers/${encodeURIComponent(house)}`}
                  className="block rounded-md border border-zinc-200 bg-white px-4 py-3 font-heading transition-shadow hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-zinc-950">{house}</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    {matches.length} clone{matches.length === 1 ? '' : 's'}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
