export interface TerrainType {
  tag: string;
  title: string;
  lost: number | null;
  event: number | null;
  hunt: boolean;
  fodder: boolean;
  events: string[][];
}
