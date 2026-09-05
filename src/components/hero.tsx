import { CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-zinc-100/80">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-6 pb-8 text-center">
        <h1 className="font-heading text-5xl leading-[0.95] font-extrabold tracking-tight text-zinc-950 sm:text-6xl">
          <span className="block">
            Frang<span className="text-zinc-400">rance</span>
          </span>
          <span className="block">
            Bi<span className="text-zinc-400">ble</span>
          </span>
        </h1>

        <Badge
          variant="outline"
          className="mt-3 h-6 gap-1.5 border-zinc-300 bg-white px-3 font-heading text-[10px] font-semibold tracking-wide text-zinc-800 uppercase"
        >
          <CheckCircle2 className="text-zinc-700" />
          Trusted by 700,000+ fragrance lovers
        </Badge>

        <p className="mt-3 max-w-xl font-heading text-[11px] leading-relaxed text-zinc-700">
          Discover affordable fragrance clones and perfume dupes inspired by luxury designer and niche
          scents. Search the Clone Fragrance Spreadsheet to find high-quality cologne alternatives that
          smell amazing without the expensive price tag.
        </p>

        <h2 className="mt-4 font-heading text-lg font-extrabold tracking-tight text-zinc-950 sm:text-xl">
          How to Find the Best <span className="text-zinc-400">Perfume Dupes</span>
        </h2>
        <p className="mt-1 max-w-xl font-heading text-[10px] leading-relaxed text-zinc-700">
          Search through the <strong className="font-bold text-zinc-900">Clone Fragrance Database</strong>{' '}
          and Find Cheaper alternatives to expensive Designer &amp; Niche scents. Fragrance clones, also known
          as perfume dupes, are <strong className="font-bold text-zinc-900">affordable</strong> alternatives
          to expensive designer scents. To find the{' '}
          <strong className="font-bold text-zinc-900">best perfume</strong> dupes, using a fragrance database
          like this allows you to quickly discover high-quality alternatives without overspending.
        </p>
      </div>
    </section>
  )
}
