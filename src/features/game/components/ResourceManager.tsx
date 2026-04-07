import { getDayAndWeek } from "@/lib/formatters";
import useGameStore from "../store/gameStore";
import {
  BadgeCent,
  Beef,
  Heart,
  Lightbulb,
  Swords,
  Utensils,
} from "lucide-react";
import type { ReactNode } from "react";

const iconSize = 16;

const resourceIcons: Record<string, ReactNode> = {
  Combat: <Swords size={iconSize} />,
  Endurance: <Heart size={iconSize} />,
  Starvation: <Utensils size={iconSize} />,
  WitAndWiles: <Lightbulb size={iconSize} />,
  Food: <Beef size={iconSize} />,
  Gold: <BadgeCent size={iconSize} />,
};

const ResourceManager = () => {
  const resources = useGameStore((state) => state.resources);
  const totalCombat = useGameStore((state) => state.getTotalCombat());
  const displayResources = Object.entries(resources).filter(
    ([key]) => !["Mounted"].includes(key),
  );

  return (
    <div className="flex flex-row justify-around w-full">
      {displayResources.map(([key, value]) => {
        const displayValue = key === "Combat" ? totalCombat : value;

        return (
          <div key={key} className="flex flex-row gap-1 pt-2 pb-1">
            <span>{resourceIcons[key] || ""}</span>
            <span className="text-bold ml-1">
              {key === "Day" ? getDayAndWeek(value as number) : displayValue}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ResourceManager;
