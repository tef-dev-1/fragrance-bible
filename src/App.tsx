import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { CloneCard } from '@/components/clone-card'
import { CurrencyToggle } from '@/components/currency-toggle'
import { Hero } from '@/components/hero'
import { SiteHeader } from '@/components/site-header'
import { Input } from '@/components/ui/input'
import { clones, type Region } from '@/data/clones'

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export default function App() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState<Region>('eu')

  const results = useMemo(() => {
    const needle = normalize(query.trim())
    if (!needle) return clones
    return clones.filter((clone) =>
      normalize(
        `${clone.original.house} ${clone.original.name} ${clone.clone.house} ${clone.clone.name}`,
      ).includes(needle),
    )
  }, [query])

  return (
    <div className="min-h-dvh bg-white text-zinc-900">
      <SiteHeader region={region} />
      <main>
        <Hero />

        <section className="mx-auto max-w-7xl px-4 pt-4 pb-16">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-full max-w-xs">
              <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search any fragrance to find its clone."
                aria-label="Search fragrances"
                className="h-8 rounded-full border-zinc-300 pr-9 pl-4 font-heading text-[10px] shadow-sm md:text-[10px]"
              />
              <Search
                className="pointer-events-none absolute top-1/2 right-3 size-3.5 -translate-y-1/2 text-zinc-400"
                aria-hidden="true"
              />
            </div>

            <p className="font-heading text-sm text-zinc-800">
              Clones found: <span className="font-bold">{results.length}</span>
            </p>

            <CurrencyToggle value={region} onChange={setRegion} />
          </div>

          {results.length === 0 ? (
            <div className="mx-auto mt-12 max-w-md rounded-md border border-dashed border-zinc-300 p-8 text-center font-heading">
              <p className="text-sm font-semibold text-zinc-900">No clones match “{query}”.</p>
              <p className="mt-1 text-xs text-zinc-600">
                Try the designer house or the clone name, like “Aventus” or “Lattafa”.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {results.map((clone) => (
                <CloneCard key={clone.id} clone={clone} region={region} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
