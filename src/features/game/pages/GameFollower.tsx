import Card from "@/components/Card";
import FollowerCard from "../components/FollowerCard";
import useGameStore from "../store/gameStore";
import type { Follower } from "../types/GameType";
import TokenButton from "../components/TokenButton";
import { FOLLOWER_DEFINITIONS } from "../data/followerData";

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
