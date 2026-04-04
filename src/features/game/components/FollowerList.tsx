import useGameStore from "../store/gameStore";
import type { Follower } from "../types/GameType";
import FollowerCard from "./FollowerCard";

function FollowerList() {
  const { followers, addFollower } = useGameStore();
  const defaultFollower = { title: "", combat: 0, endurance: 0, payPerDay: 0 };

  return (
    <>
      <button
        className="text-bold pointer mt-3 mx-1"
        onClick={() => addFollower(defaultFollower)}
      >
        ➕ Follower
      </button>

      {followers.map((follower: Follower) => (
        <FollowerCard key={follower.id} follower={follower} />
      ))}
    </>
  );
}

export default FollowerList;
