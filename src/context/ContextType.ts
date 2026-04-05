import type { eventData } from "../features/events/data/eventData";
import type { ruleData } from "../features/rule/data/ruleData";

export type Edition = "original" | "42th";

export interface DataContextType {
  edition: Edition;
  setEdition: (e: Edition) => void;
  eventData: typeof eventData;
  ruleData: typeof ruleData;
}
