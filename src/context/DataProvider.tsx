import { useEffect, useState } from "react";
import { eventData as eventDataOriginal } from "../features/events/data/eventData_old";
import { eventData as eventData42th } from "../features/events/data/eventData";
import { eventData as eventDataUltimate } from "../features/events/data/eventData_new";
import { ruleData as ruleDataOriginal } from "../features/rule/data/ruleData_old";
import { ruleData as ruleData42th } from "../features/rule/data/ruleData";
import { ruleData as ruleDataUltimate } from "../features/rule/data/ruleData_new";
import { DataContext } from "./DataContext";
import type { Edition } from "@/features/game/types/GameType";

const eventDataMap = {
  original: eventDataOriginal,
  "42th": eventData42th,
  ultimate: eventDataUltimate,
};

const ruleDataMap = {
  original: ruleDataOriginal,
  "42th": ruleData42th,
  ultimate: ruleDataUltimate,
};

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [edition, setEdition] = useState<Edition>("original");

  useEffect(() => {
    localStorage.removeItem("barbarian-prince");
  }, [edition]);

  return (
    <DataContext.Provider
      value={{
        edition,
        setEdition,
        eventData: eventDataMap[edition],
        ruleData: ruleDataMap[edition],
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
