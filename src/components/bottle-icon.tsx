type BottleIconProps = {
  color: string
  className?: string
}

/**
 * Simple perfume bottle illustration. Real product photos will replace this
 * once the catalogue is wired up; for now the colour hints at the juice.
 */
export function BottleIcon({ color, className }: BottleIconProps) {
  return (
    <svg
      viewBox="0 0 64 80"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="26" y="2" width="12" height="10" rx="2" fill="#27272a" />
      <rect x="28" y="12" width="8" height="6" fill="#a1a1aa" />
      <path
        d="M14 26c0-4.4 3.6-8 8-8h20c4.4 0 8 3.6 8 8v44c0 3.3-2.7 6-6 6H20c-3.3 0-6-2.7-6-6V26z"
        fill={color}
      />
      <path
        d="M14 26c0-4.4 3.6-8 8-8h20c4.4 0 8 3.6 8 8v44c0 3.3-2.7 6-6 6H20c-3.3 0-6-2.7-6-6V26z"
        fill="url(#bottle-shine)"
      />
      <rect x="20" y="36" width="24" height="14" rx="2" fill="#fafafa" fillOpacity="0.85" />
      <defs>
        <linearGradient id="bottle-shine" x1="14" y1="18" x2="50" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" stopOpacity="0.35" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
