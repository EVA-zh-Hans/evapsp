import games from '../../data/games.json'

export interface Release {
  version: string
  file: string
  url: string
  note?: { zh?: string; en?: string }
}

export interface Game {
  id: string
  slug: string
  status: 'done' | 'working' | 'planned' | 'not-planned'
  year: number | null
  nameJa: string
  nameZh: string
  nameEn: string
  repoUrl?: string
  paratranzUrl?: string
  serials: string[]
  releases?: Release[]
}

export function useGames() {
  const bySlug = (slug: string): Game | undefined =>
    (games as Game[]).find((g) => g.slug === slug)
  const byStatus = (status: Game['status']): Game[] =>
    (games as Game[]).filter((g) => g.status === status)
  return { games: games as Game[], bySlug, byStatus }
}
