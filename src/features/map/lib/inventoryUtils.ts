import type { Token } from "@/features/character/components/CharacterInventory";

export const GOLD_ROWS: Token[][] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => ({ label: v })),
  [10, 20, 30, 40, 50, 60, 70, 80, 90].map((v) => ({ label: v })),
  [100, 200, 300, 400, 500].map((v) => ({ label: v })),
];

export const FOOD_ROWS: Token[][] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => ({ label: v })),
  [10, 20, 30, 40, 50, 60, 70, 80, 90].map((v) => ({ label: v })),
];

export type RowActive = Record<number, number | null>;

export const valueToRowActive = (rows: Token[][], total: number): RowActive => {
  const active: RowActive = {};
  let remaining = total;

  rows.forEach((row, ri) => {
    const sorted = [...row.map((t) => t.label)].sort((a, b) => b - a);
    const match = sorted.find((v) => v <= remaining);
    if (match !== undefined) {
      active[ri] = match;
      remaining -= match;
    } else {
      active[ri] = null;
    }
  });

  return active;
};

export const calcTotal = (active: RowActive): number =>
  Object.values(active).reduce<number>((sum, v) => sum + (v ?? 0), 0);
