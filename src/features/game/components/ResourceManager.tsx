import useGameStore from "../store/gameStore";

const resourceIcons: Record<string, string> = {
  Combat: "⚔️",
  Endurance: "❤️",
  WitAndWiles: "🧠",
  Food: "🍖",
  Gold: "💰",
  Starvation: "💀",
  Day: "☀️",
  Week: "📅",
};

const ResourceManager = () => {
  const resources = useGameStore((state) => state.resources);
  const displayResources = Object.entries(resources);

  return (
    <div className="flex flex-row flex-wrap">
      {displayResources.map(([key, value]) => (
        <div key={key} className="flex flex-row items-center p-2">
          <span>{resourceIcons[key] || ""}</span>
          <span className="text-bold ml-1">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ResourceManager;
