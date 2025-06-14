import beastNameData from "../data/beastDataLookup";
import beastDataRaw from "../data/beastDataRaw";
import type { BeastDataLookup, BeastDataType } from "./beastDataType";

export const beastData: readonly BeastDataType[] = beastDataRaw
  .map(
    (data): BeastDataType => ({
      Star: Number(data.Star),
      LE: Number(data.LE),
      STR: Number(data.STR),
      VE: Number(data.VE),
      DEX: Number(data.DEX),
      LE_gain: Number(data.LE_gain),
      STR_gain: Number(data.STR_gain),
      VE_gain: Number(data.VE_gain),
      DEX_gain: Number(data.DEX_gain),
      ServantIds: data.ServantIds,
      Region_Boost: data.Region_Boost,
      Region: data.Region,
      BeastId: Number(data.BeastId),
    })
  )
  .sort((a, b) => b.Star - a.Star);

export const beastLookupData: readonly BeastDataLookup[] = beastNameData
  .map(
    (data): BeastDataLookup => ({
      Name: data.Name,
      Star: Number(data.Star),
      BeastId: Number(data.BeastId),
    })
  )
  .sort((a, b) => b.Star - a.Star);
