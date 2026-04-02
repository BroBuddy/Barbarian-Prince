export type Travel = {
  id: number;
  terrain: TravelTerrain;
  color: string;
  lost: string;
  event: string;
  hunt: boolean | null;
  fodder: boolean | null;
  matrix: string[][];
};

export type TravelTerrain =
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
