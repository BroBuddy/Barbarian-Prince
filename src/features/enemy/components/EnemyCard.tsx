import Card from "@/components/Card";
import useGameStore from "@/features/game/store/gameStore";
import type { Enemy } from "@/features/game/types/GameType";
import { Coins, Heart, Swords, Trash } from "lucide-react";
import TokenButton from "@/components/TokenButton";

const WEALTH_VALUES: number[] = [
  1, 2, 4, 5, 7, 10, 12, 15, 21, 25, 30, 50, 60, 70,
];

const STAT_COLORS = {
  combat: "#b91c1c",
  endurance: "#15803d",
  wealthCode: "#a16207",
} as const;

const STAT_ICONS = {
  combat: <Swords />,
  endurance: <Heart />,
  wealthCode: <Coins />,
} as const;

function EnemyCard({ enemy }: { enemy: Enemy }) {
  const { updateEnemy, removeEnemy } = useGameStore();

  return (
    <Card title={enemy.title || "Enemy"}>
      <button
        className="cardBtn"
        onClick={() => removeEnemy(enemy.id)}
        title="Remove"
      >
        <Trash />
      </button>

      <div className="flex flex-col">
        {(["combat", "endurance", "wealthCode"] as const).map((field) => (
          <div key={field} className="flex flex-row mb-1 mx-1">
            <span className="flex items-center mr-2">{STAT_ICONS[field]}</span>

            <div
              style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
            >
              <div className="flex gap-2" style={{ width: "max-content" }}>
                {(field === "wealthCode"
                  ? WEALTH_VALUES
                  : Array.from({ length: 12 }, (_, i) => i + 1)
                ).map((val) => (
                  <TokenButton
                    key={val}
                    label={val}
                    isActive={enemy[field] === val}
                    color={STAT_COLORS[field]}
                    onClick={() =>
                      updateEnemy(enemy.id, {
                        [field]:
                          enemy[field] === val ? undefined : (val as number),
                      })
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default EnemyCard;
