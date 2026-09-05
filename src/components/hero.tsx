export function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-zinc-100/80">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-6 pb-8 text-center">
        <h1 className="font-heading text-5xl leading-[0.95] font-extrabold tracking-tight text-black sm:text-6xl">
          <span className="block">The Fragrance</span>
          <span className="block">Bible</span>
        </h1>

        <p className="mt-4 max-w-xl font-heading text-[13px] leading-relaxed text-black">
          Discover affordable fragrance alternatives inspired by your{' '}
          <strong className="font-bold text-brand">favourite designer fragrances</strong>
        </p>
      </div>
    </section>
  )
}
