import Card from "@/components/Card";
import FollowerCard from "../components/FollowerCard";
import useGameStore from "../../game/store/gameStore";
import type { Follower } from "../../game/types/GameType";
import { Plus } from "lucide-react";

function FollowerPage() {
  const { followers, addFollower } = useGameStore();
  const followerPos = followers.length + 1;

  const handleAdd = () => {
    const defaultFollower = {
      title: `#${followerPos} Follower`,
      combat: 0,
      endurance: 0,
      payPerDay: 0,
      mounted: false,
    };

    addFollower(defaultFollower);
  };

  return (
    <>
      {followers.map((follower: Follower) => (
        <FollowerCard key={follower.id} follower={follower} />
      ))}

      <div className="pointer" onClick={() => handleAdd()}>
        <Card>
          <div className="flex justify-center my-1">
            <Plus size={30} />
          </div>
        </Card>
      </div>
    </>
  );
}

export default FollowerPage;
