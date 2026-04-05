import { terrainData } from "../data/terrainData";
import type { TerrainType } from "../types/TerrainType";

function getTerrainData(tag: string) {
  return terrainData.find((t) => t.tag === tag);
}

function rollD6(): number {
  return Math.floor(Math.random() * 6) + 1;
}

function roll2D6(): number {
  return rollD6() + rollD6();
}

function rollLost(terrain: TerrainType): { roll: number; isLost: boolean } {
  if (terrain.lost === null) return { roll: 0, isLost: false };
  const roll = roll2D6();
  return { roll, isLost: roll >= terrain.lost };
}

function rollEvent(terrain: TerrainType): { roll: number; hasEvent: boolean } {
  if (terrain.event === null) return { roll: 0, hasEvent: false };
  const roll = roll2D6();
  return { roll, hasEvent: roll >= terrain.event };
}

function getEvent(terrain: TerrainType, die1: number, die2: number): string {
  return terrain.events[die1 - 1][die2 - 1];
}

export { getTerrainData, rollD6, roll2D6, rollLost, rollEvent, getEvent };
