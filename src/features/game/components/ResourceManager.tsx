import useGameStore from "../store/gameStore";

const resourceIcons: Record<string, string> = {
  Combat: "⚔️",
  Endurance: "❤️",
  Starvation: "💀",
  WitAndWiles: "🧠",
  Food: "🍖",
  Gold: "💰",
  Day: "☀️",
};

function getDayAndWeek(day: number) {
  const week = Math.ceil(day / 7);
  const dayOfWeek = ((day - 1) % 7) + 1;
  return { week, dayOfWeek };
}

const ResourceManager = () => {
  const resources = useGameStore((state) => state.resources);
  const displayResources = Object.entries(resources);

  return (
    <div className="flex flex-row flex-wrap">
      {displayResources.map(([key, value]) => (
        <div key={key} className="flex flex-row px-1 pb-1 pt-2">
          <span>{resourceIcons[key] || ""}</span>
          <span className="text-bold ml-1">
            {key === "Day"
              ? `D${getDayAndWeek(value).dayOfWeek} · W${getDayAndWeek(value).week}`
              : value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ResourceManager;
