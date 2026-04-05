import { useState } from "react";
import useGameStore from "../store/gameStore";
import Card from "@/components/Card";
import TokenButton from "./TokenButton";

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

type RowActive = Record<number, number | null>;

const valueToRowActive = (rows: Token[][], total: number): RowActive => {
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

const calcTotal = (active: RowActive): number =>
  Object.values(active).reduce<number>((sum, v) => sum + (v ?? 0), 0);

const CharacterInventory = () => {
  const resources = useGameStore((state) => state.resources);
  const setResources = useGameStore((state) => state.setResources);

  const [goldActive, setGoldActive] = useState<RowActive>(() =>
    valueToRowActive(GOLD_ROWS, resources.Gold),
  );
  const [foodActive, setFoodActive] = useState<RowActive>(() =>
    valueToRowActive(FOOD_ROWS, resources.Food),
  );

  const handleGold = (rowIndex: number, value: number) => {
    const next = {
      ...goldActive,
      [rowIndex]: goldActive[rowIndex] === value ? null : value,
    };
    setGoldActive(next);
    setResources({ Gold: calcTotal(next) });
  };

  const handleFood = (rowIndex: number, value: number) => {
    const next = {
      ...foodActive,
      [rowIndex]: foodActive[rowIndex] === value ? null : value,
    };
    setFoodActive(next);
    setResources({ Food: calcTotal(next) });
  };

  return (
    <Card title="Inventory">
      <div className="flex flex-col mx-3">
        <div className="text-center">
          <span className="text-bold pb-2">💰 Gold</span>

          <div
            className="flex flex-col mt-2"
            style={{
              gap: 2,
            }}
          >
            {GOLD_ROWS.map((row, ri) => (
              <div
                key={ri}
                className="flex flex-wrap justify-center"
                style={{
                  gap: 2,
                }}
              >
                {row.map(({ label }) => (
                  <TokenButton
                    key={label}
                    label={label}
                    isActive={goldActive[ri] === label}
                    color="#a16207"
                    onClick={() => handleGold(ri, label)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center my-3">
          <span className="text-bold pb-2">🍖 Food</span>

          <div
            className="flex flex-col mt-2"
            style={{
              gap: 2,
            }}
          >
            {FOOD_ROWS.map((row, ri) => (
              <div
                key={ri}
                className="flex flex-wrap justify-center"
                style={{
                  gap: 2,
                }}
              >
                {row.map(({ label }) => (
                  <TokenButton
                    key={label}
                    label={label}
                    isActive={foodActive[ri] === label}
                    color="#15803d"
                    onClick={() => handleFood(ri, label)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CharacterInventory;
