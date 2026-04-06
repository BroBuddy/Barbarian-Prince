import useGameStore from "../../game/store/gameStore";
import type { Follower } from "../../game/types/GameType";
import TokenButton from "../../../components/TokenButton";
import styles from "./FollowerCard.module.scss";
import Card from "@/components/Card";
import { ChessKnight, Coins, Heart, Swords, Trash } from "lucide-react";

const STAT_COLORS = {
  combat: "#b91c1c",
  endurance: "#15803d",
  payPerDay: "#a16207",
  mounted: "#1d4ed8",
} as const;

const STAT_ICONS = {
  combat: <Swords />,
  endurance: <Heart />,
  payPerDay: <Coins />,
  mounted: <ChessKnight />,
} as const;

function FollowerCard({ follower }: { follower: Follower }) {
  const { updateFollower, removeFollower } = useGameStore();

  return (
    <Card title={follower.title || "Follower"}>
      <button
        className={styles.followerRemove}
        onClick={() => removeFollower(follower.id)}
        title="Remove"
      >
        <Trash />
      </button>

      <div className="flex flex-col">
        {(["combat", "endurance", "payPerDay"] as const).map((field) => (
          <div key={field} className="flex flex-row mb-1 mx-1">
            <span className="flex items-center mr-2">{STAT_ICONS[field]}</span>

            <div className="flex flex-wrap gap-1">
              {Array.from(
                { length: field === "payPerDay" ? 5 : 9 },
                (_, i) => i + 1,
              ).map((val) => (
                <TokenButton
                  key={val}
                  label={val}
                  isActive={follower[field] === val}
                  color={STAT_COLORS[field]}
                  onClick={() => {
                    if (follower[field] !== val) {
                      updateFollower(follower.id, { [field]: val });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-row mb-1 mx-1">
          <span className="flex items-center mr-2">
            {STAT_ICONS["mounted"]}
          </span>

          <div className="flex flex-wrap gap-1">
            {[false, true].map((val) => (
              <TokenButton
                key={String(val)}
                label={val ? "Yes" : "No"}
                isActive={follower.mounted === val}
                color={STAT_COLORS["mounted"]}
                onClick={() =>
                  updateFollower(follower.id, {
                    mounted: follower.mounted === val ? false : val,
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FollowerCard;
