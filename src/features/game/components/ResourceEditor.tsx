import useGameStore from "../store/gameStore";
import ResourceSelector from "./ResourceSelector";

type BoxResource = {
  name: string;
  max: number;
};

const BOX_RESOURCES: BoxResource[] = [
  { name: "Combat", max: 9 },
  { name: "Endurance", max: 9 },
  { name: "Starvation", max: 9 },
  { name: "WitAndWiles", max: 6 },
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
    <div className="flex flex-col mt-2 mx-10">
      {BOX_RESOURCES.map(({ name, max }) => {
        const value = resources[name];

        const isLarge = name === "Food" || name === "Gold" || name === "Day";

        return (
          <div key={name} className="flex flex-col items-start mb-3">
            <span className="text-white">{name}</span>

            {isLarge ? (
              <div className="flex items-center gap-2">
                <button
                  style={{ border: "none" }}
                  onClick={() => handleSet(name, Math.max(0, value - 1))}
                  className="px-3 py-1 bg-dark-grey text-white"
                >
                  -
                </button>

                <input
                  type="number"
                  value={value}
                  min={0}
                  max={max}
                  onChange={(e) =>
                    handleSet(name, Math.min(max, Number(e.target.value)))
                  }
                  className="w-6 text-center"
                />

                <button
                  style={{ border: "none" }}
                  onClick={() => handleSet(name, Math.min(max, value + 1))}
                  className="px-3 py-1 bg-dark-grey text-white"
                >
                  +
                </button>
              </div>
            ) : (
              <ResourceSelector
                max={max}
                value={value}
                onChange={(val) => handleSet(name, val)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ResourceEditor;
