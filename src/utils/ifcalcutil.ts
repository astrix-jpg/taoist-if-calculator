import { bldataBase, blMultiplier } from "../data/beastBloodLineData";
import { beastRankBonus } from "../data/beastRankData";
import { domainAttrData } from "../data/domainIFData";
import type { BeastDataType } from "../types/beastDataType";
import type { UserIfInput } from "../types/userIfInput";

const calculateIf = (
  userInputData: UserIfInput,
  selectedBeastData: BeastDataType
): { beastTotalIf: number; unmountTotalIfloss: number } => {
  let blGain = 0;
  if (userInputData.beastBloodLineLevel > 0) {
    const beastBloodLineLevelMultiplier = blMultiplier.find(
      (x) => x.level === userInputData.beastBloodLineLevel
    );
    const beastStartBaseBlData = bldataBase.find(
      (x) => x.rank === selectedBeastData.Star
    );
    if (beastBloodLineLevelMultiplier && beastStartBaseBlData) {
      blGain =
        beastBloodLineLevelMultiplier.factor * beastStartBaseBlData.attrGain;
    }
  }

  let beastRankMultiplier = 0;
  if (userInputData.beastRank > 0) {
    const beastbonus = beastRankBonus.find(
      (x) => x.rank == userInputData.beastRank
    );
    if (beastbonus) {
      beastRankMultiplier = beastbonus.bonus;
    }
  }

  const beastLE = calculateBeastStatGain(
    selectedBeastData.LE,
    selectedBeastData.LE_gain,
    userInputData.beastLevel,
    beastRankMultiplier,
    userInputData.numberOfBeast,
    blGain,
    userInputData.beastSkillLE
  );

  const beastSTR = calculateBeastStatGain(
    selectedBeastData.STR,
    selectedBeastData.STR_gain,
    userInputData.beastLevel,
    beastRankMultiplier,
    userInputData.numberOfBeast,
    blGain,
    userInputData.beastSkillSTR
  );

  const beastVE = calculateBeastStatGain(
    selectedBeastData.VE,
    selectedBeastData.VE_gain,
    userInputData.beastLevel,
    beastRankMultiplier,
    userInputData.numberOfBeast,
    blGain,
    userInputData.beastSkillVE
  );

  const beastDEX = calculateBeastStatGain(
    selectedBeastData.DEX,
    selectedBeastData.DEX_gain,
    userInputData.beastLevel,
    beastRankMultiplier,
    userInputData.numberOfBeast,
    blGain,
    userInputData.beastSkillDEX
  );

  const boostedBeastLE = calculateBeastStatGainWithBoost(
    beastLE,
    userInputData.allianceLEBoostPerc +
      userInputData.xuanBoostPerc +
      userInputData.heavenSkillLEBoostPerc
  );
  const boostedBeastSTR = calculateBeastStatGainWithBoost(
    beastSTR,
    userInputData.allianceSTRBoostPerc +
      userInputData.xuanBoostPerc +
      userInputData.heavenSkillSTRBoostPerc
  );

  const boostedBeastVE = calculateBeastStatGainWithBoost(
    beastVE,
    userInputData.allianceVEBoostPerc +
      userInputData.xuanBoostPerc +
      userInputData.heavenSkillVEBoostPerc
  );

  const boostedBeastDEX = calculateBeastStatGainWithBoost(
    beastDEX,
    userInputData.allianceDEXBoost + userInputData.xuanBoostPerc
  );

  const beastLE_IF = calculateBeastStatGainedIF(boostedBeastLE, 5);
  const beastSTR_IF = calculateBeastStatGainedIF(boostedBeastSTR, 5);
  const beastVE_IF = calculateBeastStatGainedIF(boostedBeastVE, 15);
  const beastDEX_IF = calculateBeastStatGainedIF(boostedBeastDEX, 3);

  const healthBoostLE = applyTalismanboost(
    boostedBeastLE,
    userInputData.fallenSwordBoostPerc
  );
  const healthBoostSTR = applyTalismanboost(
    boostedBeastSTR,
    userInputData.robeBoostPerc
  );
  const healthBoostVE = applyTalismanboost(
    boostedBeastVE,
    userInputData.guardingHatBoostPerc
  );

  const elementalBonus = calculateElementalBonus(
    userInputData.personalElementalValue,
    userInputData.beastSkillElemental,
    userInputData.talismanElementBoostPerc
  );

  let total =
    beastLE_IF +
    beastSTR_IF +
    beastVE_IF +
    beastDEX_IF +
    healthBoostLE +
    healthBoostSTR +
    healthBoostVE +
    elementalBonus;

  let ifLoss = 0;
  if (userInputData.isServantMounted) {
    const domainData = domainAttrData.find(
      (x) => x.domain === userInputData.mountedServantRegion
    );

    if (domainData) {
      const mightFactor =
        domainData.data.find((x) => x.attr === "M")?.factor ?? 0;
      const intellectFactor =
        domainData.data.find((x) => x.attr === "I")?.factor ?? 0;
      const commandFactor =
        domainData.data.find((x) => x.attr === "C")?.factor ?? 0;
      const insightFactor =
        domainData.data.find((x) => x.attr === "S")?.factor ?? 0;
      const mightToIF = calculateAttrToIF(
        userInputData.mountedMight,
        mightFactor
      );
      const intellectToIf = calculateAttrToIF(
        userInputData.mountedInsight,
        intellectFactor
      );

      const commandToIF = calculateAttrToIF(
        userInputData.mountedCommand,
        commandFactor
      );

      const insightToIF = calculateAttrToIF(
        userInputData.mountedInsight,
        insightFactor
      );
      ifLoss = mightToIF + intellectToIf + commandToIF + insightToIF;
    }
  }
  if (ifLoss > 0) {
    total = total - ifLoss;
  }
  return {
    beastTotalIf: Math.floor(total),
    unmountTotalIfloss: Math.floor(ifLoss),
  };
};

function calculateBeastStatGain(
  beastBase: number,
  perLevelGain: number,
  level: number,
  beastRankMultiplier: number, // e.g. 1.2 for +20%
  beastcount: number,
  bloodLineGain: number, // like `blGain` in your example
  beastSkillGain: number // like `userInputData.beastSkillLE`
): number {
  const countBonus = Math.min(beastcount, 15) * 0.1;

  const levelgain =
    beastBase + (perLevelGain * level - perLevelGain) + bloodLineGain;

  const total =
    levelgain * (1 + beastRankMultiplier) * (1 + countBonus) + beastSkillGain;

  return total;
}

function calculateElementalBonus(
  elementalStat: number,
  elementalBeastBoost: number,
  elementalTalismanBoost: number
) {
  return (
    elementalStat * (elementalBeastBoost / 100) * (elementalTalismanBoost / 100)
  );
}

function calculateBeastStatGainWithBoost(stat: number, boost: number) {
  return stat * (1 + boost / 100);
}

function calculateBeastStatGainedIF(beaststat: number, factor: number) {
  return beaststat * factor;
}

function applyTalismanboost(stat: number, boost: number) {
  return stat * (boost / 100);
}

function calculateAttrToIF(attribute: number, factor: number) {
  return (attribute / 500) * factor;
}
export { calculateIf };
