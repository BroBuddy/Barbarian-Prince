import useGameStore from "../../game/store/gameStore";
import Card from "@/components/Card";
import TokenButton from "@/components/TokenButton";
import { BadgeCent, Beef } from "lucide-react";

const GOLD_STEPS = [-100, -10, -1, 1, 10, 100];
const FOOD_STEPS = [-10, -1, 1, 10];

const MAX_GOLD = 500;
const MAX_FOOD = 90;

const CharacterResources = () => {
  const resources = useGameStore((state) => state.resources);
  const setResources = useGameStore((state) => state.setResources);

  const gold = Number(resources.Gold);
  const food = Number(resources.Food);

  const handleGold = (delta: number) => {
    setResources({ Gold: Math.max(0, Number(resources.Gold) + delta) });
  };

  const handleFood = (delta: number) => {
    setResources({ Food: Math.max(0, Number(resources.Food) + delta) });
  };

  const isGoldDisabled = (step: number) =>
    (step > 0 && gold >= MAX_GOLD) || (step < 0 && gold <= 0);

  const isFoodDisabled = (step: number) =>
    (step > 0 && food >= MAX_FOOD) || (step < 0 && food <= 0);

  return (
    <Card title="Resources">
      <div className="flex flex-col gap-4 mx-1">
        <div className="flex items-center gap-8">
          <BadgeCent />

          <div className="flex flex-wrap gap-2">
            {GOLD_STEPS.map((step) => {
              const disabled = isGoldDisabled(step);
              return (
                <TokenButton
                  key={step}
                  label={step > 0 ? `+${step}` : step}
                  color={disabled ? "#9ca3af" : "#a16207"}
                  onClick={() => !disabled && handleGold(step)}
                  disabled={disabled}
                />
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <Beef />

          <div className="flex flex-wrap gap-2">
            {FOOD_STEPS.map((step) => {
              const disabled = isFoodDisabled(step);
              return (
                <TokenButton
                  key={step}
                  label={step > 0 ? `+${step}` : step}
                  color={disabled ? "#9ca3af" : "#15803d"}
                  onClick={() => !disabled && handleFood(step)}
                  disabled={disabled}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CharacterResources;
