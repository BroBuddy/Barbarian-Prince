import useGameStore from "../store/gameStore";
import FollowerCard from "./FollowerCard";

const styles = {
  list: {
    display: "flex",
    flexDirection: "column" as const,
  },
  addBtn: {
    background: "none",
    border: "none",
    padding: "8px 12px",
    color: "var(--white)",
    cursor: "pointer",
    fontWeight: "bold",
    textAlign: "left" as const,
  },
} as const;

function FollowerList() {
  const { followers, addFollower } = useGameStore();

  return (
    <div style={styles.list}>
      {followers.map((f) => (
        <FollowerCard key={f.id} follower={f} />
      ))}

      <button
        style={styles.addBtn}
        onClick={() =>
          addFollower({ title: "", combat: 0, endurance: 0, payPerDay: 0 })
        }
      >
        + Follower
      </button>
    </div>
  );
}

export default FollowerList;
