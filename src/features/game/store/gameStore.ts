import { create } from "zustand";
import { persist } from "zustand/middleware";

const MAX_VALUES: Record<string, number> = {
  Combat: 9,
  Endurance: 9,
  WitAndWiles: 6,
  Starvation: 8,
  Day: 7,
  Week: 10,
};

type GameState = {
  resources: Record<string, number>;
  setResources: (newResources: Record<string, number>) => void;
  modifyResources: (modResources: Record<string, number>) => void;
  isEmptyStore: () => boolean;
};

const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      resources: {
        Combat: 8,
        Endurance: 9,
        WitAndWiles: 0,
        Food: 0,
        Gold: 0,
        Starvation: 0,
        Day: 1,
        Week: 1,
      },
      setResources: (newResources) => {
        set((state) => {
          const updatedResources = { ...state.resources };

          Object.entries(newResources).forEach(([key, value]) => {
            if (updatedResources[key] !== undefined) {
              updatedResources[key] = Math.max(0, value);
            }
          });

          return { resources: updatedResources };
        });
      },
      modifyResources: (modResources) => {
        set((state) => {
          const updatedResources = { ...state.resources };

          Object.entries(modResources).forEach(([key, value]) => {
            if (updatedResources[key] !== undefined) {
              const newValue = updatedResources[key] + value;

              updatedResources[key] = Math.max(
                0,
                Math.min(MAX_VALUES[key] ?? Infinity, newValue),
              );
            }
          });

          if (updatedResources.day > 7) {
            updatedResources.day = 1;
            updatedResources.week = Math.min(
              updatedResources.week + 1,
              MAX_VALUES.week,
            );
          }

          return { resources: updatedResources };
        });
      },
      isEmptyStore: () => {
        const resources = get().resources;
        const total = Object.entries(resources)
          .filter(([key]) => !["day", "week", "witAndWiles"].includes(key))
          .reduce((sum, [, value]) => sum + value, 0);

        return total === 0;
      },
    }),
    {
      name: "barbarian-prince-stats",
    },
  ),
);

export default useGameStore;
