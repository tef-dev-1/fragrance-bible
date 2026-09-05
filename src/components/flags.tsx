type FlagProps = { className?: string }

export function UsFlag({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y} width="20" height="1" fill="#b22234" />
      ))}
      <rect width="8" height="7" fill="#3c3b6e" />
    </svg>
  )
}

export function EuFlag({ className }: FlagProps) {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2
    return { cx: 10 + Math.cos(angle) * 4, cy: 7 + Math.sin(angle) * 4 }
  })
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" fill="#003399" />
      {stars.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r="0.7" fill="#ffcc00" />
      ))}
    </svg>
  )
}
