export type TreasureCell = string;

export interface TreasureTable {
  dieRolls: string[];
  rows: {
    wealthCode: string;
    cells: TreasureCell[];
  }[];
}
