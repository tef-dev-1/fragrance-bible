import { EuFlag, UsFlag } from '@/components/flags'
import type { Region } from '@/data/clones'
import { cn } from '@/lib/utils'

type CurrencyToggleProps = {
  value: Region
  onChange: (region: Region) => void
}

const options: Array<{ value: Region; label: string; Flag: typeof UsFlag }> = [
  { value: 'us', label: 'Show US prices in dollars', Flag: UsFlag },
  { value: 'eu', label: 'Show EU prices in euros', Flag: EuFlag },
]

export function CurrencyToggle({ value, onChange }: CurrencyToggleProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Price region"
      className="inline-flex rounded-full border border-zinc-200 bg-white p-1 shadow-sm"
    >
      {options.map(({ value: option, label, Flag }) => {
        const active = option === value
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            onClick={() => onChange(option)}
            className={cn(
              'grid h-6 w-11 cursor-pointer place-items-center rounded-full transition-colors',
              active ? 'bg-blue-600 shadow-inner' : 'hover:bg-zinc-100',
            )}
          >
            <Flag className={cn('h-3 w-4 rounded-[1px]', active ? 'shadow' : 'opacity-80')} />
          </button>
        )
      })}
    </div>
  )
}
