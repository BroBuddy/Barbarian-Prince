import type { TerrainType } from "./TerrainType";

export type Phase = "lost_check" | "lost" | "event_check" | "event" | null;

export interface MoveModalType {
  phase: Phase;
  fromTerrain: TerrainType;
  toTerrain: TerrainType;
  targetCol: number;
  targetRow: number;
  roll?: number;
  die1?: number;
  die2?: number;
  eventId?: string;
}
