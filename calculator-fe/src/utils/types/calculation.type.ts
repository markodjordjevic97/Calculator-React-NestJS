export type CalculatorLayoutType = {
  id: number;
  symbol: string;
  type: string;
};

export type CalculateRequest = {
  prevValue: string;
  operation: string;
  currValue: string;
};
