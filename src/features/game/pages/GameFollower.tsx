import FollowerCard from "../components/FollowerCard";
import useGameStore from "../store/gameStore";
import type { Follower } from "../types/GameType";

function GameFollower() {
  const { followers, addFollower } = useGameStore();
  const defaultFollower = { title: "", combat: 0, endurance: 0, payPerDay: 0 };

  return (
    <>
      <button
        className="text-bold text-white pointer mt-5 pt-3 mx-1"
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

export default GameFollower;
