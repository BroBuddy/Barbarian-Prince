import Card from "@/components/Card";
import useGameStore from "@/features/game/store/gameStore";
import type { Enemy } from "@/features/game/types/GameType";
import { enemyData } from "../data/enemyData";
import TokenButton from "@/components/TokenButton";
import EnemyCard from "../components/EnemyCard";

function EnemyPage() {
  const { enemies, addEnemy } = useGameStore();

  const handleAdd = (enemyItem: Omit<Enemy, "id" | "wealthCode">) => {
    addEnemy({ ...enemyItem, wealthCode: 0 });
  };

  return (
    <>
      {enemies.map((enemy: Enemy) => (
        <EnemyCard key={enemy.id} enemy={enemy} />
      ))}

      <Card title="Add Enemy">
        <div className="flex flex-wrap mx-5 my-3 gap-2">
          {enemyData.map((enemy) => (
            <TokenButton
              key={enemy.title}
              label={enemy.title}
              isActive={false}
              color="#1d4ed8"
              onClick={() => handleAdd(enemy)}
            />
          ))}
        </div>
      </Card>
    </>
  );
}

export default EnemyPage;
