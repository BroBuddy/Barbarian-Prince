import useGameStore from "../store/gameStore";
import NumberStepper from "./NumberStepper";
import ResourceSelector from "./ResourceSelector";

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
  { name: "Day", max: 70 },
];

const ResourceEditor = () => {
  const resources = useGameStore((state) => state.resources);
  const setResources = useGameStore((state) => state.setResources);

  const handleSet = (resource: string, value: number) => {
    setResources({ [resource]: value });
  };

  return (
    <div className="flex flex-col">
      {BOX_RESOURCES.map(({ name, max, color }) => {
        const value = resources[name];

        const isLarge = name === "Food" || name === "Gold" || name === "Day";

        return (
          <div key={name} className="flex flex-col items-center mb-4">
            <span className="text-white mb-1">
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
    </div>
  );
};

export default ResourceEditor;
