type PageHeadingProps = {
  title: string
  description: string
}

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <div className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="font-heading text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl font-heading text-sm leading-relaxed text-zinc-600">{description}</p>
      </div>
    </div>
  )
}
