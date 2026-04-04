import useGameStore from "../store/gameStore";
import type { Follower } from "../types/GameType";
import FollowerCard from "./FollowerCard";
import styles from "./FollowerList.module.scss";

function FollowerList() {
  const { followers, addFollower } = useGameStore();
  const defaultFollower = { title: "", combat: 0, endurance: 0, payPerDay: 0 };

  return (
    <div className={styles.list}>
      <button
        className={styles.addBtn}
        onClick={() => addFollower(defaultFollower)}
      >
        ➕ Follower
      </button>

      {followers.map((follower: Follower) => (
        <FollowerCard key={follower.id} follower={follower} />
      ))}
    </div>
  );
}

export default FollowerList;
