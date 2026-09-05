import { PageHeading } from '@/components/page-heading'

export function AboutPage() {
  return (
    <main>
      <PageHeading
        title="About"
        description="The Fragrance Bible is a catalogue of affordable clones and perfume dupes inspired by luxury designer and niche scents."
      />
      <section className="mx-auto max-w-3xl px-4 py-10 font-heading text-sm leading-relaxed text-zinc-700">
        <p>
          Search the database for a designer cologne, then compare price, similarity, and the house making the
          alternative. The goal is simple: help you find something that smells close without the luxury markup.
        </p>
        <p className="mt-4">
          Listings are illustrative. Always check the seller, batch, and your own skin chemistry before you buy.
        </p>
      </section>
    </main>
  )
}
