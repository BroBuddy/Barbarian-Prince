import Card from "@/components/Card";
import useGameStore from "@/features/game/store/gameStore";
import type { Enemy, WealthCode } from "@/features/game/types/GameType";
import EnemyCard from "../components/EnemyCard";
import { Plus } from "lucide-react";

function EnemyPage() {
  const { enemies, addEnemy } = useGameStore();
  const enemyPos = enemies.length + 1;

  const handleAdd = () => {
    const defaultEnemy = {
      title: `#${enemyPos} Enemy`,
      combat: 0,
      endurance: 0,
      wealthCode: 0 as WealthCode,
    };

    addEnemy(defaultEnemy);
  };

  return (
    <>
      {enemies.map((enemy: Enemy) => (
        <EnemyCard key={enemy.id} enemy={enemy} />
      ))}

      <div className="pointer" onClick={() => handleAdd()}>
        <Card>
          <div className="flex justify-center items-center">
            <Plus size={30} />
            <span className="text-dark-grey text-bold text-xl ml-1">Enemy</span>
          </div>
        </Card>
      </div>
    </>
  );
}

export default EnemyPage;
