import useGameStore from "../store/gameStore";
import type { Follower } from "../types/GameType";
import TokenButton from "./TokenButton";
import styles from "./FollowerCard.module.scss";
import Card from "@/components/Card";
import { Coins, Heart, Swords, UserMinus } from "lucide-react";

const STAT_COLORS = {
  combat: "#b91c1c",
  endurance: "#15803d",
  payPerDay: "#a16207",
} as const;

const STAT_ICONS = {
  combat: <Swords />,
  endurance: <Heart />,
  payPerDay: <Coins />,
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
        <UserMinus />
      </button>

      <div className="flex flex-col">
        {(["combat", "endurance", "payPerDay"] as const).map((field) => (
          <div key={field} className="flex flex-row mb-1 mx-1">
            <span className="flex items-center mr-2">{STAT_ICONS[field]}</span>

            <div className="flex flex-wrap gap-1">
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
