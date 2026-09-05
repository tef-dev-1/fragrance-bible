import { Link } from 'react-router-dom'
import { PageHeading } from '@/components/page-heading'
import { notes } from '@/data/notes'

export function NotesPage() {
  return (
    <main>
      <PageHeading
        title="Notes"
        description="A short glossary of the accords you will see again and again in designer scents and their clones."
      />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link
                to={`/notes/${note.slug}`}
                className="block rounded-md border border-zinc-200 bg-white px-4 py-3 font-heading transition-shadow hover:shadow-md"
              >
                <p className="text-[10px] font-medium tracking-wide text-zinc-500 uppercase">{note.family}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-950">{note.name}</p>
                <p className="mt-1 line-clamp-2 text-xs text-zinc-600">{note.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
