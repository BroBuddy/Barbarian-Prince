import Card from "@/components/Card";
import FollowerCard from "../components/FollowerCard";
import useGameStore from "../store/gameStore";
import type { Follower } from "../types/GameType";
import TokenButton from "../components/TokenButton";

const FOLLOWER_NAMES: string[] = [
  "Amazon", // e005
  "Apprentice", // e025
  "Druid", // e022
  "Dwarf", // e006
  "Elf", // e007
  "Fugitive",
  "Giant", // e118
  "Griffon", // e100
  "Halfling", // e008
  "Harpy", // e101
  "Mercenary", // e004
  "Monk", // e020
  "Priest", // e018
  "Swordsman", // e003
  "Warrior", // e069
  "Witch", // e073
  "Wizard", // e023
];

function GameFollower() {
  const { followers, addFollower } = useGameStore();

  const handleAdd = (name: string) => {
    addFollower({ title: name, combat: 0, endurance: 0, payPerDay: 0 });
  };

  return (
    <>
      {followers.map((follower: Follower) => (
        <FollowerCard key={follower.id} follower={follower} />
      ))}

      <Card title="Add Follower">
        <div
          className="flex flex-wrap mx-5 my-3"
          style={{
            gap: 1,
          }}
        >
          {FOLLOWER_NAMES.map((name) => (
            <TokenButton
              key={name}
              label={name}
              isActive={false}
              color="#1d4ed8"
              onClick={() => handleAdd(name)}
            />
          ))}
        </div>
      </Card>
    </>
  );
}

export default GameFollower;
