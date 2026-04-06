import useGameStore from "../../game/store/gameStore";
import Card from "@/components/Card";
import CharacterInventory from "../components/CharacterInventory";
import TokenButton from "../../../components/TokenButton";
import {
  ChessKnight,
  Heart,
  Lightbulb,
  Sun,
  Swords,
  Utensils,
} from "lucide-react";
import type { ReactNode } from "react";

type BoxResource = {
  name: string;
  icon: ReactNode;
  max: number;
  color: string;
};

const STAT_RESOURCES: BoxResource[] = [
  { name: "Combat", icon: <Swords />, max: 9, color: "#b91c1c" },
  { name: "Endurance", icon: <Heart />, max: 9, color: "#15803d" },
  { name: "Starvation", icon: <Utensils />, max: 9, color: "#1d4ed8" },
  { name: "WitAndWiles", icon: <Lightbulb />, max: 6, color: "#1d4ed8" },
];

const CharacterPage = () => {
  const resources = useGameStore((state) => state.resources);
  const setResources = useGameStore((state) => state.setResources);
  const nextDay = useGameStore((state) => state.nextDay);

  const handleSet = (resource: string, value: number) => {
    setResources({ [resource]: value });
  };

  return (
    <>
      <button
        onClick={nextDay}
        className="flex items-center text-bold text-white pointer mt-2 pt-3 mx-1"
      >
        <Sun /> <span className="ml-1">Next Day</span>
      </button>

      <Card title="Cal Arath">
        {STAT_RESOURCES.map(({ name, icon, max, color }) => (
          <div key={name} className="flex flex-row m-1">
            <span className="flex items-center mr-2">{icon}</span>

            <div className="flex flex-wrap gap-1">
              {Array.from({ length: max }, (_, i) => i + 1).map((val) => (
                <TokenButton
                  key={val}
                  label={val}
                  isActive={resources[name] === val}
                  color={color as string}
                  onClick={() =>
                    handleSet(name, resources[name] === val ? 0 : val)
                  }
                />
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-row mb-1 mx-1">
          <span className="flex items-center mr-2">
            <ChessKnight />
          </span>

          <div className="flex flex-wrap gap-1">
            {[false, true].map((val) => (
              <TokenButton
                key={String(val)}
                label={val ? "Yes" : "No"}
                isActive={resources["Mounted"] === val}
                color="#1d4ed8"
                onClick={() => setResources({ Mounted: val })}
              />
            ))}
          </div>
        </div>
      </Card>

      <CharacterInventory />
    </>
  );
};

export default CharacterPage;
