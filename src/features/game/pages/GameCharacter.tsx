import useGameStore from "../store/gameStore";
import Card from "@/components/Card";
import CharacterInventory from "../components/CharacterInventory";
import TokenButton from "../components/TokenButton";

type BoxResource = {
  name: string;
  max: number;
  color?: string;
};

const STAT_RESOURCES: BoxResource[] = [
  { name: "Combat", max: 9, color: "#b91c1c" },
  { name: "Endurance", max: 9, color: "#15803d" },
  { name: "Starvation", max: 9, color: "#1d4ed8" },
  { name: "WitAndWiles", max: 6, color: "#1d4ed8" },
];

const GameCharacter = () => {
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
        className="text-bold text-white pointer mt-5 pt-3 mx-1"
      >
        ☀️ Next Day
      </button>

      <Card title="Cal Arath">
        {STAT_RESOURCES.map(({ name, max, color }) => (
          <div key={name} className="flex flex-col items-center m-3">
            <span className="text-bold mb-1">
              {name === "WitAndWiles" ? "Wit & Wiles" : name}
            </span>

            <div style={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
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
      </Card>

      <CharacterInventory />
    </>
  );
};

export default GameCharacter;
