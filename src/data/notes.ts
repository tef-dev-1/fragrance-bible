export type FragranceNote = {
  slug: string
  name: string
  family: string
  summary: string
}

export const notes: FragranceNote[] = [
  {
    slug: 'bergamot',
    name: 'Bergamot',
    family: 'Citrus',
    summary: 'A bright, slightly bitter citrus note from Calabrian bergamot peel. It often opens fresh clones of designer colognes.',
  },
  {
    slug: 'vanilla',
    name: 'Vanilla',
    family: 'Gourmand',
    summary: 'Warm, sweet, and creamy. A backbone in dupes of Tobacco Vanille, Angels’ Share, and other dessert-leaning scents.',
  },
  {
    slug: 'oud',
    name: 'Oud',
    family: 'Wood',
    summary: 'A smoky, resinous wood note. Clone houses often use a smoother oud accord to echo Initio and niche Middle Eastern fragrances.',
  },
  {
    slug: 'amber',
    name: 'Amber',
    family: 'Oriental',
    summary: 'A sweet, resinous blend rather than a single material. It gives body to evening clones and “elixir” style bottles.',
  },
  {
    slug: 'sandalwood',
    name: 'Sandalwood',
    family: 'Wood',
    summary: 'Creamy, milky wood used in Santal 33 alternatives and many modern woody-fresh dupes.',
  },
  {
    slug: 'leather',
    name: 'Leather',
    family: 'Animalic',
    summary: 'Smoky suede or darker saddle leather. Central to Ombré Leather clones and tobacco-leather hybrids.',
  },
  {
    slug: 'rose',
    name: 'Rose',
    family: 'Floral',
    summary: 'From fresh dew to jammy Turkish rose. It sweetens many Lattafa and Maison Alhambra compositions.',
  },
  {
    slug: 'pineapple',
    name: 'Pineapple',
    family: 'Fruity',
    summary: 'A juicy, slightly metallic fruit note made famous by Aventus and the many Club de Nuit-style clones that follow it.',
  },
]

export function getNote(slug: string) {
  return notes.find((note) => note.slug === slug)
}
