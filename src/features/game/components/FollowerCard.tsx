import useGameStore from "../store/gameStore";
import type { Follower } from "../types/GameType";
import ResourceSelector from "./ResourceSelector";

const LABELS: Record<keyof Omit<Follower, "id" | "title">, string> = {
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
    <div style={styles.card}>
      <button
        style={styles.removeBtn}
        onClick={() => removeFollower(follower.id)}
        title="Entfernen"
      >
        ×
      </button>

      <input
        style={styles.titleInput}
        value={follower.title}
        placeholder="Name"
        className="text-white"
        onChange={(e) => updateFollower(follower.id, { title: e.target.value })}
      />

      {(["combat", "endurance", "payPerDay"] as const).map((field) => (
        <div key={field} style={styles.statRow}>
          <span style={styles.statLabel}>{LABELS[field]}</span>
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

const styles = {
  card: {
    position: "relative" as const,
    display: "flex",
    justifyAlign: "center",
    flexDirection: "column" as const,
    marginBottom: "10px",
  },
  removeBtn: {
    position: "absolute" as const,
    top: "13px",
    right: "0px",
    background: "none",
    border: "none",
    fontSize: "30px",
    cursor: "pointer",
    color: "var(--red)",
  },
  titleInput: {
    background: "none",
    border: "none",
    borderBottom: "none",
    fontSize: "14px",
    color: "var(--white)",
    outline: "none",
    marginTop: "20px",
    width: "100%",
  },
  statRow: {
    display: "flex",
    flexDirection: "column" as const,
  },
  statLabel: {
    fontSize: "14px",
    textAlign: "left",
    color: "var(--white)",
    marginTop: "12px",
  },
} as const;
