import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { BrandLogo } from '@/components/brand-logo'
import { cn } from '@/lib/utils'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'font-heading text-[13px] tracking-wide text-zinc-600 transition-colors hover:text-zinc-950',
    isActive && 'text-zinc-950',
  )

const dropdownItems = [
  { to: '/fragrances/designers', label: 'Designers' },
  { to: '/fragrances/best-rated', label: 'Best Rated' },
  { to: '/fragrances/favourites', label: 'The Fragrance Bible Favourites' },
] as const

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-8 px-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <BrandLogo className="h-10 w-auto text-brand" />
          <span className="leading-tight">
            <span className="block font-heading text-[15px] font-semibold tracking-[0.12em] text-zinc-700 uppercase">
              The Fragrance Bible
            </span>
            <span className="block font-heading text-[10px] leading-snug font-medium text-brand">
              The ultimate scent guide
            </span>
          </span>
        </Link>

        <nav className="ml-auto flex items-center gap-6" aria-label="Primary">
          <div ref={menuRef} className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 font-heading text-[13px] tracking-wide text-zinc-600 transition-colors hover:text-zinc-950"
              aria-expanded={open}
              aria-haspopup="menu"
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              Fragrances
              <ChevronDown className={cn('size-3.5 text-zinc-500 transition-transform', open && 'rotate-180')} />
            </button>
            {open ? (
              <ul
                id={menuId}
                role="menu"
                className="absolute top-full right-0 z-50 mt-2 min-w-[16.5rem] rounded-md border border-zinc-200 bg-white py-1.5 shadow-lg"
              >
                {dropdownItems.map((item) => (
                  <li key={item.label} role="none">
                    <NavLink
                      to={item.to}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'block px-3 py-2 font-heading text-[13px] text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950',
                          isActive && 'bg-zinc-50 text-zinc-950',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <NavLink to="/finder" className={navLinkClass}>
            Fragrance Finder
          </NavLink>
          <NavLink to="/notes" className={navLinkClass}>
            Notes
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
