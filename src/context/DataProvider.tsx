import { useEffect, useState } from "react";
import eventDataOriginal from "../features/events/data/eventData_old";
import eventData42th from "../features/events/data/eventData";
import eventDataUltimate from "../features/events/data/eventData_new";
import ruleDataOriginal from "../features/rule/data/ruleData_old";
import ruleData42th from "../features/rule/data/ruleData";
import ruleDataUltimate from "../features/rule/data/ruleData_new";
import { DataContext } from "./DataContext";
import type { Edition } from "@/features/game/types/GameType";
import useGameStore from "@/features/game/store/gameStore";

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
  const [edition, setEdition] = useState<Edition>("ultimate");
  const { resetStore } = useGameStore();

  useEffect(() => {
    localStorage.removeItem("barbarian-prince");
    resetStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edition]);

  return (
    <DataContext.Provider
      value={{
        edition,
        setEdition,
        eventData: eventDataMap[edition] ?? [],
        ruleData: ruleDataMap[edition] ?? [],
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
