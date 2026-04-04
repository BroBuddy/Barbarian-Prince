import useGameStore from "../store/gameStore";
import type { Follower } from "../types/GameType";
import FollowerCard from "./FollowerCard";

function FollowerList() {
  const { followers, addFollower } = useGameStore();
  const defaultFollower = { title: "", combat: 0, endurance: 0, payPerDay: 0 };

  return (
    <div className="flex flex-col">
      <button
        className="text-bold pointer my-2"
        onClick={() => addFollower(defaultFollower)}
      >
        ➕ Follower
      </button>

      <div>
        {followers.map((follower: Follower) => (
          <FollowerCard key={follower.id} follower={follower} />
        ))}
      </div>
    </div>
  );
}

export default FollowerList;
