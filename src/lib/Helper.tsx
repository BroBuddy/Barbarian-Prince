import type { EventType } from "@/features/events/types/EventType";
import type { RuleType } from "@/features/rule/types/RuleType";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const ruleTypeEmoji: Record<RuleType | EventType, string> = {
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

export function tagToPath(tag: string): string {
  const lower = tag.toLowerCase();
  if (lower.startsWith("e")) return `/event/${lower}`;
  if (lower.startsWith("r")) return `/rule/${lower}`;
  return `/`;
}

export function getLinkClass(tag: string): string {
  const base = "flex flex-row";

  if (tag.toLowerCase().startsWith("e")) {
    return `${base} text-purple`;
  }

  return base;
}

export function parseLinks(text: string): React.ReactNode {
  const parts = text.split(/([Ee]\d{3,4}[a-zA-Z]?|[Rr]\d{3,4}[a-zA-Z]?)/g);

  return parts.map((part, i) => {
    if (/^[Ee]\d{3,4}[a-zA-Z]?$/.test(part)) {
      return (
        <Link
          key={i}
          to={`/event/${part.toLowerCase()}`}
          className="text-purple"
        >
          {part}
        </Link>
      );
    }
    if (/^[Rr]\d{3,4}[a-zA-Z]?$/.test(part)) {
      return (
        <Link key={i} to={`/rule/${part.toLowerCase()}`}>
          {part}
        </Link>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
