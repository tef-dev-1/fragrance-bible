export type Region = 'us' | 'eu'

export type Clone = {
  id: string
  /** The expensive designer or niche fragrance being cloned. */
  original: { house: string; name: string }
  /** The affordable alternative. */
  clone: { house: string; name: string }
  /** Prices are per region; the retail price is the original's price. */
  price: Record<Region, { deal: number; retail: number }>
  /** Scent similarity, 0-100. */
  similarity: number
  /** Bottle liquid colour used for the illustration. */
  color: string
  dealUrl: string
}

const entries: Array<
  Omit<Clone, 'id' | 'price' | 'dealUrl'> & { eur: [number, number]; usd: [number, number] }
> = [
  { original: { house: 'Parfums de Marly', name: 'Althaïr' }, clone: { house: 'French Avenue', name: 'Liquid Brun' }, eur: [51.86, 225.99], usd: [54.99, 265.0], similarity: 99, color: '#c2410c' },
  { original: { house: 'JPG', name: 'Ultra Male' }, clone: { house: 'Le Falcone', name: 'Qannas' }, eur: [43.56, 101.99], usd: [46.5, 118.0], similarity: 91, color: '#1d4ed8' },
  { original: { house: 'Louis Vuitton', name: 'Pacific Chill' }, clone: { house: 'French Avenue', name: 'Pinnace' }, eur: [51.34, 300.0], usd: [54.99, 325.0], similarity: 90, color: '#10b981' },
  { original: { house: 'Kilian', name: "Angels' Share" }, clone: { house: 'Maison Alhambra', name: 'Kismet Angel' }, eur: [35.27, 245.0], usd: [32.99, 275.0], similarity: 99, color: '#d4a017' },
  { original: { house: 'Parfums de Marly', name: 'Greenley' }, clone: { house: 'Lattafa', name: 'Sherif' }, eur: [35.37, 220.0], usd: [37.99, 240.0], similarity: 92, color: '#4d7c0f' },
  { original: { house: 'Creed', name: 'Aventus' }, clone: { house: 'Armaf', name: 'Club de Nuit Intense Man' }, eur: [29.9, 335.0], usd: [31.99, 375.0], similarity: 88, color: '#111827' },
  { original: { house: 'Tom Ford', name: 'Tobacco Vanille' }, clone: { house: 'Zimaya', name: 'Vanilla Tobacco' }, eur: [38.5, 250.0], usd: [39.99, 295.0], similarity: 94, color: '#78350f' },
  { original: { house: 'Dior', name: 'Sauvage Elixir' }, clone: { house: 'Afnan', name: '9pm Elixir' }, eur: [36.9, 145.0], usd: [38.99, 165.0], similarity: 90, color: '#334155' },
  { original: { house: 'Maison Francis Kurkdjian', name: 'Baccarat Rouge 540' }, clone: { house: 'Maison Alhambra', name: 'Baroque Rouge 540' }, eur: [33.4, 285.0], usd: [34.99, 325.0], similarity: 95, color: '#f97316' },
  { original: { house: 'Xerjoff', name: 'Naxos' }, clone: { house: 'Lattafa', name: 'Khamrah' }, eur: [32.99, 245.0], usd: [34.99, 270.0], similarity: 87, color: '#b45309' },
  { original: { house: 'Initio', name: 'Oud for Greatness' }, clone: { house: 'Lattafa', name: 'Oud for Glory' }, eur: [39.9, 335.0], usd: [42.99, 375.0], similarity: 96, color: '#1e1b4b' },
  { original: { house: 'Chanel', name: 'Bleu de Chanel' }, clone: { house: 'Armaf', name: 'Club de Nuit Sillage' }, eur: [34.5, 149.0], usd: [36.99, 165.0], similarity: 89, color: '#1e3a8a' },
  { original: { house: 'Parfums de Marly', name: 'Layton' }, clone: { house: 'Fragrance World', name: 'Aventus Layton' }, eur: [28.9, 235.0], usd: [29.99, 265.0], similarity: 93, color: '#7c2d12' },
  { original: { house: 'Nishane', name: 'Hacivat' }, clone: { house: 'Lattafa', name: 'Ameer Al Oudh' }, eur: [31.7, 240.0], usd: [33.99, 265.0], similarity: 85, color: '#0f766e' },
  { original: { house: 'YSL', name: 'Y EDP' }, clone: { house: 'Lattafa', name: 'Asad' }, eur: [26.4, 118.0], usd: [27.99, 130.0], similarity: 90, color: '#0c4a6e' },
  { original: { house: 'Amouage', name: 'Interlude Man' }, clone: { house: 'Al Haramain', name: 'Amber Oud Gold' }, eur: [42.9, 310.0], usd: [44.99, 350.0], similarity: 86, color: '#92400e' },
  { original: { house: 'Roja', name: 'Elysium' }, clone: { house: 'Lattafa', name: 'Emeer' }, eur: [33.5, 425.0], usd: [35.99, 475.0], similarity: 91, color: '#0ea5e9' },
  { original: { house: 'Byredo', name: 'Gypsy Water' }, clone: { house: 'Lattafa', name: 'Odyssey Mandarin Sky' }, eur: [29.9, 220.0], usd: [31.99, 245.0], similarity: 84, color: '#f59e0b' },
  { original: { house: 'Le Labo', name: 'Santal 33' }, clone: { house: 'Dossier', name: 'Woody Sandalwood' }, eur: [36.0, 235.0], usd: [39.0, 265.0], similarity: 92, color: '#a16207' },
  { original: { house: 'Mancera', name: 'Cedrat Boise' }, clone: { house: 'Rasasi', name: 'Hawas' }, eur: [38.9, 155.0], usd: [41.99, 175.0], similarity: 88, color: '#0284c7' },
  { original: { house: 'Versace', name: 'Eros' }, clone: { house: 'Maison Alhambra', name: 'Eros Fire' }, eur: [22.9, 95.0], usd: [24.99, 108.0], similarity: 93, color: '#0891b2' },
  { original: { house: 'Dior', name: 'Homme Intense' }, clone: { house: 'Zimaya', name: 'Adventurous' }, eur: [31.9, 135.0], usd: [33.99, 150.0], similarity: 89, color: '#3f3f46' },
  { original: { house: 'Tom Ford', name: 'Ombré Leather' }, clone: { house: 'Maison Alhambra', name: 'Toscano Leather' }, eur: [27.5, 165.0], usd: [29.99, 185.0], similarity: 94, color: '#5b21b6' },
  { original: { house: 'Parfums de Marly', name: 'Herod' }, clone: { house: 'Alexandria', name: 'Tobacco Vanille Absolu' }, eur: [45.0, 235.0], usd: [48.99, 265.0], similarity: 87, color: '#7f1d1d' },
  { original: { house: 'Creed', name: 'Green Irish Tweed' }, clone: { house: 'Armaf', name: 'Tres Nuit' }, eur: [24.9, 280.0], usd: [26.99, 315.0], similarity: 90, color: '#166534' },
  { original: { house: 'Maison Margiela', name: 'By the Fireplace' }, clone: { house: 'Zimaya', name: 'Fire Gaze' }, eur: [30.9, 138.0], usd: [32.99, 155.0], similarity: 91, color: '#ea580c' },
  { original: { house: 'Xerjoff', name: 'Erba Pura' }, clone: { house: 'Maison Alhambra', name: 'Kismet Fruity' }, eur: [33.9, 235.0], usd: [35.99, 265.0], similarity: 92, color: '#facc15' },
  { original: { house: 'Louis Vuitton', name: 'Imagination' }, clone: { house: 'Lattafa', name: 'Yara Moi' }, eur: [29.9, 300.0], usd: [31.99, 325.0], similarity: 86, color: '#1e40af' },
  { original: { house: 'Initio', name: 'Side Effect' }, clone: { house: 'Paris Corner', name: 'Emir Side Show' }, eur: [36.9, 310.0], usd: [38.99, 350.0], similarity: 95, color: '#6d28d9' },
  { original: { house: 'Kilian', name: 'Black Phantom' }, clone: { house: 'Lattafa', name: 'Fakhar Black' }, eur: [28.5, 245.0], usd: [29.99, 275.0], similarity: 84, color: '#0a0a0a' },
  { original: { house: 'Parfums de Marly', name: 'Pegasus' }, clone: { house: 'Fragrance World', name: 'Pegasus Kiss' }, eur: [27.9, 225.0], usd: [29.99, 265.0], similarity: 90, color: '#e2e8f0' },
  { original: { house: 'Dolce & Gabbana', name: 'The One EDP' }, clone: { house: 'Zimaya', name: 'Alpha Blue' }, eur: [23.9, 98.0], usd: [25.99, 112.0], similarity: 88, color: '#b91c1c' },
]

const slug = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const clones: Clone[] = entries.map(({ eur, usd, ...rest }) => {
  const id = slug(`${rest.clone.house}-${rest.clone.name}`)
  return {
    ...rest,
    id,
    price: {
      eu: { deal: eur[0], retail: eur[1] },
      us: { deal: usd[0], retail: usd[1] },
    },
    dealUrl: `https://example.com/deals/${id}`,
  }
})
