const DEFAULT = {
  1: 5,
  2: 4,
  3: 3
}

const NOVICE = {
  1: 5,
  2: 4,
  3: 3,
  4: 2
}

const IRON = {
  1: 5,
  2: 4,
  3: 3,
  4: 2,
  5: 1
}

const BRONZE = {
  1: 6,
  2: 4,
  3: 3,
  4: 2,
  5: 1,
  6: 1
}

const SILVER = {
  1: 6,
  2: 5,
  3: 4,
  4: 3,
  5: 2,
  6: 1
}

const GOLD = {
  1: 7,
  2: 6,
  3: 5,
  4: 4,
  5: 3,
  6: 2
}

const PLATINUM = {
  1: 8,
  2: 7,
  3: 6,
  4: 5,
  5: 4,
  6: 3
}

const BRILLIANT = {
  1: 9,
  2: 8,
  3: 6,
  4: 5,
  5: 4,
  6: 3
}

const SAPPHIRE = {
  1: 10,
  2: 9,
  3: 8,
  4: 7,
  5: 6,
  6: 5
}

export interface IRank {
  [key: string]: number
}

export enum Ranks {
  DEFAULT,
  NOVICE,
  IRON,
  BRONZE,
  SILVER,
  GOLD,
  PLATINUM,
  BRILLIANT,
  SAPPHIRE
}

export interface IRanks {
  [Ranks.NOVICE]: IRank
  [Ranks.IRON]: IRank
  [Ranks.BRONZE]: IRank
  [Ranks.SILVER]: IRank
  [Ranks.GOLD]: IRank
  [Ranks.PLATINUM]: IRank
  [Ranks.BRILLIANT]: IRank
  [Ranks.SAPPHIRE]: IRank
  [Ranks.DEFAULT]: IRank
}

export const RANKS: IRanks = {
  [Ranks.NOVICE]: NOVICE,
  [Ranks.IRON]: IRON,
  [Ranks.BRONZE]: BRONZE,
  [Ranks.SILVER]: SILVER,
  [Ranks.GOLD]: GOLD,
  [Ranks.PLATINUM]: PLATINUM,
  [Ranks.BRILLIANT]: BRILLIANT,
  [Ranks.SAPPHIRE]: SAPPHIRE,
  [Ranks.DEFAULT]: DEFAULT
}
