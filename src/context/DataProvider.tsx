import { useState } from "react";
import { eventData as eventData42 } from "../features/events/data/eventData";
import { eventData as eventDataOld } from "../features/events/data/eventData_old";
import { ruleData as ruleData42 } from "../features/rule/data/ruleData";
import { ruleData as ruleDataOld } from "../features/rule/data/ruleData_old";
import { DataContext } from "./DataContext";
import type { Edition } from "./ContextType";

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [edition, setEdition] = useState<Edition>("42th");

  return (
    <DataContext.Provider
      value={{
        edition,
        setEdition,
        eventData: edition === "42th" ? eventData42 : eventDataOld,
        ruleData: edition === "42th" ? ruleData42 : ruleDataOld,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
