type BrandLogoProps = {
  className?: string
}

/** Rectangular cologne bottle with a cylindrical cap, used as the site mark. */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 40 76"
      className={className}
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="12" y="0" width="16" height="22" rx="5" />
      <rect x="16" y="22" width="8" height="4" />
      <rect x="4" y="26" width="32" height="50" rx="2.5" />
    </svg>
  )
}
