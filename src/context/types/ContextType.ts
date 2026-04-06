import type { eventData } from "@/features/events/data/eventData_old";
import type { Edition } from "@/features/game/types/GameType";
import type { ruleData } from "@/features/rule/data/ruleData_old";

export interface DataContextType {
  edition: Edition;
  setEdition: (e: Edition) => void;
  eventData: typeof eventData;
  ruleData: typeof ruleData;
}
