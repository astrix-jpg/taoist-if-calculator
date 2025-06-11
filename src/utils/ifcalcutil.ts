import type { BeastDataType } from "../types/beastDataType";
import type { UserIfInput } from "../types/userIfInput";

const calculateIf = (
  userInputData: UserIfInput,
  selectedBeastData: BeastDataType
): { beastTotalIf: number; unmountTotalIfloss: number } => {
    console.log(userInputData,selectedBeastData,'toCalculate');
  return {
    beastTotalIf: 444444,
    unmountTotalIfloss: 5555,
  };
};

export {calculateIf}