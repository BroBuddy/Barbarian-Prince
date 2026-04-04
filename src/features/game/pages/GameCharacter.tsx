import useGameStore from "../store/gameStore";
import NumberStepper from "../components/NumberStepper";
import ResourceSelector from "../components/ResourceSelector";
import Card from "@/components/Card";

type BoxResource = {
  name: string;
  max: number;
  color?: string;
};

const BOX_RESOURCES: BoxResource[] = [
  { name: "Combat", max: 9, color: "#b91c1c" },
  { name: "Endurance", max: 9, color: "#15803d" },
  { name: "Starvation", max: 9, color: "#1d4ed8" },
  { name: "WitAndWiles", max: 6, color: "#a16207" },
  { name: "Food", max: 100 },
  { name: "Gold", max: 600 },
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
        <div className="flex items-center"></div>

        {BOX_RESOURCES.map(({ name, max, color }) => {
          const value = resources[name];

          const isLarge = name === "Food" || name === "Gold" || name === "Day";

          return (
            <div key={name} className="flex flex-col mx-5 my-3">
              <span className="text-bold mb-1">
                {name === "WitAndWiles" ? "Wit & Wiles" : name}
              </span>

              {isLarge ? (
                <NumberStepper
                  value={value}
                  max={max}
                  onChange={(val) => handleSet(name, val)}
                />
              ) : (
                <ResourceSelector
                  max={max}
                  value={value}
                  onChange={(val) => handleSet(name, val)}
                  color={color}
                />
              )}
            </div>
          );
        })}
      </Card>
    </>
  );
};

export default GameCharacter;
