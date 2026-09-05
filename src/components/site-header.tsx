import { EuFlag, UsFlag } from '@/components/flags'
import type { Region } from '@/data/clones'

type SiteHeaderProps = { region: Region }

export function SiteHeader({ region }: SiteHeaderProps) {
  const Flag = region === 'us' ? UsFlag : EuFlag
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-tight text-zinc-900">
          <span className="grid size-6 place-items-center rounded-sm bg-black text-white" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
              <path d="M9 3h6v3h-6zM7 7h10l2 13H5z" />
            </svg>
          </span>
          Clonespreadsheet.com
        </a>
        <nav className="flex items-center gap-4 font-mono text-[10px] text-zinc-700">
          <Flag className="h-3 w-4 rounded-[1px] shadow-sm" />
          <a href="#suggest" className="hover:text-zinc-950 hover:underline">
            Suggest new clone
          </a>
          <a href="#report" className="hidden hover:text-zinc-950 hover:underline sm:inline">
            Report an issue
          </a>
        </nav>
      </div>
    </header>
  )
}
