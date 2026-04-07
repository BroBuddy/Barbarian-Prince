import { useMemo } from "react";
import useGameStore from "../../game/store/gameStore";
import Card from "@/components/Card";
import TokenButton from "../../../components/TokenButton";
import { BadgeCent, Beef } from "lucide-react";
import {
  valueToRowActive,
  GOLD_ROWS,
  FOOD_ROWS,
  calcTotal,
} from "@/features/map/lib/inventoryUtils";

export type Token = { label: number };

const CharacterResources = () => {
  const resources = useGameStore((state) => state.resources);
  const setResources = useGameStore((state) => state.setResources);

  const goldActive = useMemo(
    () => valueToRowActive(GOLD_ROWS, Number(resources.Gold)),
    [resources.Gold],
  );

  const foodActive = useMemo(
    () => valueToRowActive(FOOD_ROWS, Number(resources.Food)),
    [resources.Food],
  );

  const handleGold = (rowIndex: number, value: number) => {
    const next = {
      ...goldActive,
      [rowIndex]: goldActive[rowIndex] === value ? null : value,
    };
    setResources({ Gold: calcTotal(next) });
  };

  const handleFood = (rowIndex: number, value: number) => {
    const next = {
      ...foodActive,
      [rowIndex]: foodActive[rowIndex] === value ? null : value,
    };
    setResources({ Food: calcTotal(next) });
  };

  return (
    <Card title="Resources">
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 mx-1">
          {GOLD_ROWS.map((row, ri) => (
            <div key={ri} className="flex flex-row items-center gap-5">
              {ri === 0 && <BadgeCent />}
              {ri !== 0 && <div style={{ width: "24px" }} />}

              <div className="flex flex-wrap gap-2">
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
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 my-2 mx-1">
          {FOOD_ROWS.map((row, ri) => (
            <div key={ri} className="flex flex-row items-center gap-5">
              {ri === 0 && <Beef />}

              {ri !== 0 && <div style={{ width: "24px" }} />}
              <div className="flex flex-wrap gap-2">
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
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CharacterResources;
