import { Link } from 'react-router-dom'
import { PageHeading } from '@/components/page-heading'
import { clones } from '@/data/clones'

const houses = [...new Set(clones.map((clone) => clone.clone.house))].sort((a, b) => a.localeCompare(b))

export function HousesPage() {
  return (
    <main>
      <PageHeading
        title="Clone houses"
        description="The brands making the affordable alternatives — Lattafa, Armaf, Maison Alhambra, and more."
      />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {houses.map((house) => {
            const matches = clones.filter((clone) => clone.clone.house === house)
            return (
              <li key={house}>
                <Link
                  to={`/fragrances/houses/${encodeURIComponent(house)}`}
                  className="block rounded-md border border-zinc-200 bg-white px-4 py-3 font-heading transition-shadow hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-zinc-950">{house}</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    {matches.length} fragrance{matches.length === 1 ? '' : 's'}
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
