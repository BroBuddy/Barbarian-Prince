import { useState, useEffect } from "react";
import useGameStore from "../store/gameStore";
import Card from "@/components/Card";
import TokenGrid from "./TokenGrid";

export type Token = { label: number };

const GOLD_ROWS: Token[][] = [
  [100, 200, 300, 400, 500, 600].map((v) => ({ label: v })),
  [10, 20, 30, 40, 50, 60, 70, 80, 90].map((v) => ({ label: v })),
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => ({ label: v })),
];

const FOOD_ROWS: Token[][] = [
  [10, 20, 30, 40, 50, 60, 70, 80, 90].map((v) => ({ label: v })),
  [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => ({ label: v })),
];

const allTokens = (rows: Token[][]): number[] =>
  rows.flat().map((t) => t.label);

const valueToActive = (
  rows: Token[][],
  total: number,
): Record<number, boolean> => {
  const active: Record<number, boolean> = {};
  let remaining = total;

  for (const token of allTokens(rows).sort((a, b) => b - a)) {
    if (token <= remaining) {
      active[token] = true;
      remaining -= token;
    } else {
      active[token] = false;
    }
  }

  return active;
};

const calcTotal = (active: Record<number, boolean>): number =>
  Object.entries(active)
    .filter(([, on]) => on)
    .reduce((sum, [val]) => sum + Number(val), 0);

const CharacterInventory = () => {
  const resources = useGameStore((state) => state.resources);
  const setResources = useGameStore((state) => state.setResources);

  const [goldActive, setGoldActive] = useState<Record<number, boolean>>(() =>
    valueToActive(GOLD_ROWS, resources.Gold),
  );
  const [foodActive, setFoodActive] = useState<Record<number, boolean>>(() =>
    valueToActive(FOOD_ROWS, resources.Food),
  );

  useEffect(() => {
    setGoldActive(valueToActive(GOLD_ROWS, resources.Gold));
  }, []);

  useEffect(() => {
    setFoodActive(valueToActive(FOOD_ROWS, resources.Food));
  }, []);

  const handleGold = (value: number) => {
    const next = { ...goldActive, [value]: !goldActive[value] };
    setGoldActive(next);
    setResources({ Gold: calcTotal(next) });
  };

  const handleFood = (value: number) => {
    const next = { ...foodActive, [value]: !foodActive[value] };
    setFoodActive(next);
    setResources({ Food: calcTotal(next) });
  };

  return (
    <Card title="Inventory">
      <div className="flex flex-col mx-3">
        <div className="text-center">
          <span className="text-bold pb-2">💰 Gold</span>

          <TokenGrid
            rows={GOLD_ROWS}
            active={goldActive}
            color="#a16207"
            onToggle={handleGold}
          />
        </div>

        <div className="text-center my-3">
          <span className="text-bold pb-2">🍖 Food</span>

          <TokenGrid
            rows={FOOD_ROWS}
            active={foodActive}
            color="#15803d"
            onToggle={handleFood}
          />
        </div>
      </div>
    </Card>
  );
};

export default CharacterInventory;
