import type { TableType } from "@/features/events/types/EventType";

export interface Rule {
  tag: string;
  title: string;
  type: RuleType;
  desc?: string;
  note?: string;
  optional?: string;
  linkedRules?: string[];
  tables?: TableType[];
  requiresHex?: string[];
}

export type RuleItem = Pick<Rule, "tag" | "title">;

export type RuleType =
  | "action"
  | "character"
  | "combat"
  | "encounter"
  | "food"
  | "movement"
  | "reference"
  | "treasure"
  | "special"
  | "optional"
  | "quest";
