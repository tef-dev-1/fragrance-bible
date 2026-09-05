import { ArrowUpRight } from 'lucide-react'
import { BottleIcon } from '@/components/bottle-icon'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import type { Clone, Region } from '@/data/clones'

type CloneCardProps = {
  clone: Clone
  region: Region
}

const formatters: Record<Region, Intl.NumberFormat> = {
  eu: new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }),
  us: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
}

export function CloneCard({ clone, region }: CloneCardProps) {
  const { deal, retail } = clone.price[region]
  const discount = Math.round((1 - deal / retail) * 100)
  const format = formatters[region]

  return (
    <Card className="gap-0 rounded-md py-0 ring-zinc-200 transition-shadow hover:shadow-md">
      <div className="flex h-24 items-center justify-center pt-4">
        <BottleIcon color={clone.color} className="h-16 w-14 drop-shadow-sm" />
      </div>
      <CardContent className="flex flex-col gap-2 px-3 pt-3 pb-4 font-heading">
        <div>
          <h3 className="text-[13px] leading-tight font-bold text-zinc-950">
            Clone of &ldquo;{clone.original.house} - {clone.original.name}&rdquo;
          </h3>
          <p className="mt-1 text-[10px] italic text-zinc-600">
            {clone.clone.house} - {clone.clone.name}
          </p>
        </div>

        <Badge className="h-4 rounded-sm bg-emerald-100 px-1.5 text-[9px] font-semibold text-emerald-700">
          {discount}% OFF
        </Badge>

        <p className="text-[12px] text-zinc-900">
          {format.format(deal)}{' '}
          <span className="ml-1 text-[10px] text-zinc-400 line-through">{format.format(retail)}</span>
        </p>

        <p className="text-[10px] text-zinc-700">{clone.similarity}% similarity</p>

        <a
          href={clone.dealUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-1 inline-flex w-fit items-center gap-0.5 text-[10px] font-medium text-emerald-600 hover:text-emerald-700 hover:underline"
        >
          View Deal
          <ArrowUpRight className="size-3" />
        </a>
      </CardContent>
    </Card>
  )
}
