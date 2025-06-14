import type { BeastBloodline, BloodLineMultiplier } from "../types/beastBloodline";

export const bldataBase:BeastBloodline[] = [
  {
    rank: 1,
    attrGain: 85,
  },
  {
    rank: 2,
    attrGain: 91,
  },
  {
    rank: 3,
    attrGain: 150,
  },
  {
    rank: 4,
    attrGain: 215,
  },
  {
    rank: 5,
    attrGain: 280,
  },
  {
    rank: 6,
    attrGain: 440,
  },
];

export const blMultiplier: BloodLineMultiplier[] = [
  {
    level: 1,
    factor: 1,
  },
  {
    level: 2,
    factor: 2,
  },
  {
    level: 3,
    factor: 4,
  },
  {
    level: 4,
    factor: 8,
  },
  {
    level: 5,
    factor: 12,
  },
  {
    level: 6,
    factor: 24,
  },
];
