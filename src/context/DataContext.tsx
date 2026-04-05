import { createContext, useContext, useState } from "react";
import { eventData as eventData42 } from "../features/events/data/eventData";
import { eventData as eventDataOld } from "../features/events/data/eventData_old";
import { ruleData as ruleData42 } from "../features/rule/data/ruleData";
import { ruleData as ruleDataOld } from "../features/rule/data/ruleData_old";

export type Edition = "original" | "42th";

interface DataContextType {
  edition: Edition;
  setEdition: (e: Edition) => void;
  eventData: typeof eventData42;
  ruleData: typeof ruleData42;
}

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [edition, setEdition] = useState<Edition>("42th");

  const value: DataContextType = {
    edition,
    setEdition,
    eventData: edition === "42th" ? eventData42 : eventDataOld,
    ruleData: edition === "42th" ? ruleData42 : ruleDataOld,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within DataProvider");
  return ctx;
}
