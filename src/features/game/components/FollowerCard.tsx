import useGameStore from "../store/gameStore";
import type { Follower, FollowerTypes } from "../types/GameType";
import ResourceSelector from "./ResourceSelector";
import styles from "./FollowerCard.module.scss";

const LABELS: FollowerTypes = {
  combat: "Combat",
  endurance: "Endurance",
  payPerDay: "Pay / Day",
};

const STAT_COLORS = {
  combat: "#b91c1c",
  endurance: "#15803d",
  payPerDay: "#a16207",
} as const;

function FollowerCard({ follower }: { follower: Follower }) {
  const { updateFollower, removeFollower } = useGameStore();

  return (
    <div className={styles.followerCard}>
      <button
        className={styles.followerRemove}
        onClick={() => removeFollower(follower.id)}
        title="Entfernen"
      >
        ❌
      </button>

      <input
        value={follower.title}
        placeholder="Name"
        onChange={(e) => updateFollower(follower.id, { title: e.target.value })}
      />

      {(["combat", "endurance", "payPerDay"] as const).map((field) => (
        <div key={field} className="my-2">
          <span className="text-bold">{LABELS[field]}</span>

          <ResourceSelector
            max={9}
            value={follower[field]}
            color={STAT_COLORS[field]}
            onChange={(val) => updateFollower(follower.id, { [field]: val })}
          />
        </div>
      ))}
    </div>
  );
}

export default FollowerCard;
