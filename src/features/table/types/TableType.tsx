export type Table = {
  id: number;
  terrain: TableTerrain;
  color: string;
  lost: string;
  event: string;
  hunt: boolean | null;
  fodder: boolean | null;
  matrix: string[][];
};

export type TableTerrain =
  | "Countryside"
  | "Farmland"
  | "Hills"
  | "Forest"
  | "Swamp"
  | "Mountains"
  | "Desert"
  | "On Road"
  | "Airborne"
  | "Cross River";
