export type Travel = {
  id: number;
  terrain: TravelTerrain;
  color: string;
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
  | "On Road";
