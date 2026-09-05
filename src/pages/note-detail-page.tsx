import { Link, useParams } from 'react-router-dom'
import { PageHeading } from '@/components/page-heading'
import { getNote } from '@/data/notes'

export function NoteDetailPage() {
  const { slug = '' } = useParams()
  const note = getNote(slug)

  if (!note) {
    return (
      <main>
        <PageHeading title="Note not found" description="That note is not in the glossary yet." />
        <p className="mx-auto max-w-7xl px-4 py-8">
          <Link to="/notes" className="font-heading text-sm text-red-600 hover:underline">
            Back to notes
          </Link>
        </p>
      </main>
    )
  }

  return (
    <main>
      <PageHeading title={note.name} description={`${note.family} note`} />
      <section className="mx-auto max-w-3xl px-4 py-10 font-heading">
        <p className="text-sm leading-relaxed text-zinc-700">{note.summary}</p>
        <Link to="/notes" className="mt-6 inline-block text-sm text-red-600 hover:underline">
          All notes
        </Link>
      </section>
    </main>
  )
}
