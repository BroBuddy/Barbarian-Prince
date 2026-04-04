import type { EventType } from "@/features/events/types/EventType";
import type { RuleType } from "@/features/rule/types/RuleType";

export type EmojiType = RuleType | EventType;

export const getEmojiIcon: Record<RuleType | EventType, string> = {
  encounter: "👥",
  combat: "⚔️",
  treasure: "💰",
  action: "🎯",
  character: "🧙",
  food: "🍖",
  movement: "🗺️",
  reference: "📋",
  special: "✨",
  location: "📍",
  weather: "🌦️",
  magic: "🔮",
  item: "🎒",
  event: "📖",
  story: "📜",
  npc: "🧑",
  settlement: "🏘️",
  optional: "✨",
  quest: "📜",
};

export const REGION_NAMES: Record<number, string> = {
  1: "Northwest",
  2: "North",
  3: "Northeast",
  4: "West",
  5: "Center",
  6: "East",
  7: "Southwest",
  8: "South",
  9: "Southeast",
};
