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
    <div className={styles.card}>
      <button
        className={styles.removeBtn}
        onClick={() => removeFollower(follower.id)}
        title="Entfernen"
      >
        ❌
      </button>

      <input
        className={styles.titleInput}
        value={follower.title}
        placeholder="Name"
        onChange={(e) => updateFollower(follower.id, { title: e.target.value })}
      />

      {(["combat", "endurance", "payPerDay"] as const).map((field) => (
        <div key={field} className={styles.statRow}>
          <span className={styles.statLabel}>{LABELS[field]}</span>

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
