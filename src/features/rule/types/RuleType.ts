import type { TableType } from "@/features/events/types/EventType";

export interface Rule {
  tag: string;
  title: string;
  type: RuleType;
  desc?: string;
  note?: string;
  tables?: TableType[];
}

export type RuleItem = Pick<Rule, "tag" | "title">;

export type RuleType =
  | "action" // daily actions (r203, r208–r214)
  | "character" // character stats, wounds, death (r201, r202, r221)
  | "combat" // combat mechanics (r220, r300–r310)
  | "encounter" // encounter resolution (r330–r343)
  | "food" // food, starvation, lodging (r215, r216, r217)
  | "movement" // travel, lost, transport (r204, r205, r206)
  | "reference" // lookup tables (r207, r226, r231–r281)
  | "treasure" // acquiring & distributing wealth (r225, r226, r227)
  | "special"; // misc mechanics: cache, escape, love, raft (r213, r214, r218, r228)
