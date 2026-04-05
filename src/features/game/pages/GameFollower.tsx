import Card from "@/components/Card";
import FollowerCard from "../components/FollowerCard";
import useGameStore from "../store/gameStore";
import type { Follower } from "../types/GameType";
import TokenButton from "../components/TokenButton";

const FOLLOWER_DEFINITIONS: Omit<Follower, "id" | "payPerDay">[] = [
  { title: "Amazon", combat: 6, endurance: 5 },
  { title: "Druid", combat: 6, endurance: 7 },
  { title: "Dwarf", combat: 3, endurance: 3 },
  { title: "Elf", combat: 5, endurance: 5 },
  { title: "Fugitive", combat: 2, endurance: 4 },
  { title: "Giant", combat: 9, endurance: 8 },
  { title: "Griffon", combat: 8, endurance: 6 },
  { title: "Halfling", combat: 3, endurance: 6 },
  { title: "Harpy", combat: 5, endurance: 4 },
  { title: "Mercenary", combat: 5, endurance: 4 },
  { title: "Minstrel", combat: 2, endurance: 3 },
  { title: "Hermit Monk", combat: 3, endurance: 6 },
  { title: "Travelling Monk", combat: 4, endurance: 5 },
  { title: "Warrior Monk", combat: 6, endurance: 6 },
  { title: "Priest", combat: 3, endurance: 3 },
  { title: "Swordsman", combat: 5, endurance: 4 },
  { title: "Warrior", combat: 7, endurance: 6 },
  { title: "Old Witch", combat: 1, endurance: 3 },
  { title: "Young Witch", combat: 2, endurance: 4 },
  { title: "Wizard", combat: 4, endurance: 4 },
];

function GameFollower() {
  const { followers, addFollower } = useGameStore();

  const handleAdd = (followerTemplate: Omit<Follower, "id" | "payPerDay">) => {
    addFollower({ ...followerTemplate, payPerDay: 0 });
  };

  return (
    <>
      {followers.map((follower: Follower) => (
        <FollowerCard key={follower.id} follower={follower} />
      ))}

      <Card title="Add Follower">
        <div className="flex flex-wrap mx-5 my-3" style={{ gap: 1 }}>
          {FOLLOWER_DEFINITIONS.map((follower) => (
            <TokenButton
              key={follower.title}
              label={follower.title}
              isActive={false}
              color="#1d4ed8"
              onClick={() => handleAdd(follower)}
            />
          ))}
        </div>
      </Card>
    </>
  );
}

export default GameFollower;
