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
};
