export interface Award {
  badgeImage: string
  title: string
  winner: string | null
}

// Update `winner` and the month in `title` each month.
export const awards: Award[] = [
  { badgeImage: 'mvp.png',      title: 'MVP DE ABRIL',      winner: null },
  { badgeImage: 'atacante.png', title: 'ATACANTE DE ABRIL', winner: null },
  { badgeImage: 'defensor.png', title: 'DEFENSOR DE ABRIL', winner: null },
  { badgeImage: 'apoiador.png', title: 'APOIADOR DE ABRIL', winner: null },
  { badgeImage: 'snipador.png', title: 'SNIPADOR DE ABRIL', winner: null },
]
