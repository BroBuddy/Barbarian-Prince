import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Enemy, Follower, WealthCode } from "../types/GameType";

export const WEALTH_CODES: WealthCode[] = [
  0,
  1,
  2,
  4,
  5,
  7,
  10,
  12,
  15,
  21,
  25,
  30,
  50,
  60,
  70,
  110,
  "a",
  "b",
  "c",
];

function clamp(value: number, min = 0, max = 9): number {
  return Math.max(min, Math.min(max, value));
}

function isValidWealthCode(value: unknown): value is WealthCode {
  return WEALTH_CODES.includes(value as WealthCode);
}

const MAX_VALUES: Record<string, number> = {
  Combat: 9,
  Endurance: 9,
  Starvation: 9,
  WitAndWiles: 6,
  Food: 100,
  Gold: 600,
  Day: 70,
  Week: 10,
};

type GameState = {
  playerPosition: { col: number; row: number } | null;
  setPlayerPosition: (col: number, row: number) => void;
  clearPlayerPosition: () => void;

  resources: Record<string, number>;
  setResources: (newResources: Record<string, number>) => void;
  modifyResources: (modResources: Record<string, number>) => void;
  isEmptyStore: () => boolean;
  getTotalCombat: () => number;
  getTotalPayPerDay: () => number;
  nextDay: () => void;

  followers: Follower[];
  addFollower: (data: Omit<Follower, "id">) => void;
  updateFollower: (id: string, data: Partial<Omit<Follower, "id">>) => void;
  removeFollower: (id: string) => void;

  enemies: Enemy[];
  addEnemy: (data: Omit<Enemy, "id">) => void;
  updateEnemy: (id: string, data: Partial<Omit<Enemy, "id">>) => void;
  removeEnemy: (id: string) => void;
};

const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      playerPosition: null,
      setPlayerPosition: (col, row) => set({ playerPosition: { col, row } }),
      clearPlayerPosition: () => set({ playerPosition: null }),

      // ── Resources ──────────────────────────────────────────────────────

      resources: {
        Combat: 8,
        Endurance: 9,
        Starvation: 0,
        WitAndWiles: 0,
        Food: 0,
        Gold: 0,
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

          return { resources: updatedResources };
        });
      },

      nextDay: () => {
        set((state) => {
          const totalPay = get().getTotalPayPerDay();
          const nextDayNum = state.resources.Day + 1;
          const updatedResources = { ...state.resources };

          updatedResources.Gold = Math.max(0, state.resources.Gold - totalPay);

          if (nextDayNum > 7) {
            updatedResources.Day = 1;
            updatedResources.Week = Math.min(
              state.resources.Week + 1,
              MAX_VALUES.Week,
            );
          } else {
            updatedResources.Day = Math.min(nextDayNum, MAX_VALUES.Day);
          }

          return { resources: updatedResources };
        });
      },

      isEmptyStore: () => {
        const resources = get().resources;
        const total = Object.entries(resources)
          .filter(([key]) => !["Day", "Week", "WitAndWiles"].includes(key))
          .reduce((sum, [, value]) => sum + value, 0);

        return total === 0;
      },

      getTotalCombat: () => {
        const state = get();
        const aliveFollowersCombat = state.followers.reduce(
          (sum, f) => sum + f.combat,
          0,
        );

        return Math.max(
          0,
          state.resources.Combat +
            aliveFollowersCombat -
            state.resources.Starvation,
        );
      },

      getTotalPayPerDay: () => {
        return get().followers.reduce((sum, f) => sum + f.payPerDay, 0);
      },

      // ── Followers ──────────────────────────────────────────────────────

      followers: [],

      addFollower: (data) => {
        const follower: Follower = {
          id: crypto.randomUUID(),
          title: data.title.trim(),
          combat: clamp(data.combat),
          endurance: clamp(data.endurance),
          payPerDay: clamp(data.payPerDay),
        };

        set((state) => ({ followers: [follower, ...state.followers] }));
      },

      updateFollower: (id, data) => {
        set((state) => {
          const updatedFollowers = state.followers.map((f) => {
            if (f.id !== id) return f;
            return {
              ...f,
              ...(data.title !== undefined && { title: data.title.trim() }),
              ...(data.combat !== undefined && {
                combat: clamp(data.combat),
              }),
              ...(data.endurance !== undefined && {
                endurance: clamp(data.endurance),
              }),
              ...(data.payPerDay !== undefined && {
                payPerDay: clamp(data.payPerDay),
              }),
            };
          });

          return { followers: updatedFollowers };
        });
      },

      removeFollower: (id) => {
        set((state) => ({
          followers: state.followers.filter((f) => f.id !== id),
        }));
      },

      // ── Enemies ────────────────────────────────────────────────────────

      enemies: [],

      addEnemy: (data) => {
        if (!isValidWealthCode(data.wealthCode)) {
          console.warn(`Ungültiger wealthCode: ${data.wealthCode}`);
          return;
        }
        const enemy: Enemy = {
          id: crypto.randomUUID(),
          title: data.title.trim(),
          combat: clamp(data.combat),
          endurance: clamp(data.endurance),
          wealthCode: data.wealthCode,
        };

        set((state) => ({ enemies: [enemy, ...state.enemies] }));
      },

      updateEnemy: (id, data) => {
        if (
          data.wealthCode !== undefined &&
          !isValidWealthCode(data.wealthCode)
        ) {
          console.warn(`Ungültiger wealthCode: ${data.wealthCode}`);
          return;
        }

        set((state) => ({
          enemies: state.enemies.map((e) => {
            if (e.id !== id) return e;

            return {
              ...e,
              ...(data.title !== undefined && { title: data.title.trim() }),
              ...(data.combat !== undefined && { combat: clamp(data.combat) }),
              ...(data.endurance !== undefined && {
                endurance: clamp(data.endurance),
              }),
              ...(data.wealthCode !== undefined && {
                wealthCode: data.wealthCode,
              }),
            };
          }),
        }));
      },

      removeEnemy: (id) => {
        set((state) => ({
          enemies: state.enemies.filter((e) => e.id !== id),
        }));
      },
    }),
    {
      name: "barbarian-prince-store",
    },
  ),
);

export default useGameStore;
