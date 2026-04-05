import useGameStore from "../store/gameStore";
import type { Follower, FollowerTypes } from "../types/GameType";
import TokenButton from "./TokenButton";
import styles from "./FollowerCard.module.scss";
import Card from "@/components/Card";

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
    <Card title={follower.title || "Follower"}>
      <button
        className={styles.followerRemove}
        onClick={() => removeFollower(follower.id)}
        title="Entfernen"
      >
        ❌
      </button>

      <div className="flex flex-col items-center mx-3">
        <input
          value={follower.title}
          placeholder="Name"
          onChange={(e) =>
            updateFollower(follower.id, { title: e.target.value })
          }
        />

        {(["combat", "endurance", "payPerDay"] as const).map((field) => (
          <div key={field} className="my-2 text-center">
            <span className="text-bold">{LABELS[field]}</span>

            <div
              className="flex flex-wrap"
              style={{
                gap: 1,
              }}
            >
              {Array.from({ length: 9 }, (_, i) => i + 1).map((val) => (
                <TokenButton
                  key={val}
                  label={val}
                  isActive={follower[field] === val}
                  color={STAT_COLORS[field]}
                  onClick={() =>
                    updateFollower(follower.id, {
                      [field]: follower[field] === val ? 0 : val,
                    })
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default FollowerCard;
