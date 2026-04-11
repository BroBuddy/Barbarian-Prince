import Card from "@/components/Card";
import { Link } from "react-router-dom";
import { useData } from "@/context/data/useData";
import { editions } from "../data/editionData";
import type { EditionType } from "../types/GameType";

function GamePage() {
  const { edition, setEdition } = useData();

  return (
    <>
      <Card title="Choose your Edition">
        <div className="flex gap-2 mx-5 my-3">
          {editions.map((e: EditionType) => (
            <button
              key={e.id}
              onClick={() => setEdition(e.id)}
              className={`flex-1 p-2 pointer text-left ${
                edition === e.id ? "text-red" : "text-dark-grey"
              }`}
            >
              <div className="text-bold mb-2">{e.label}</div>
              {e.icon}
            </button>
          ))}
        </div>
      </Card>

      <Card title="Barbarian Prince">
        <p>
          Barbarian Prince is a realistic adventure game. You play the game in
          days. Each day starts with you selecting an{" "}
          <Link to="/rule/r203">action</Link>, such as travelling to a new hex
          on the map. Depending on the action selected, you will be referred to
          a chart, where you roll one or two dice. The dice roll and chart may
          then indicate a special event section, which you then resolve.
        </p>
        <p>
          After all events (if any) are resolved for your daily action, you must
          then eat your main (evening) meal, as described in the{" "}
          <Link to="/rule/r215">food</Link> rules, and if in a town, castle, or
          temple hex, you must also purchase{" "}
          <Link to="/rule/r217">lodging</Link>. This ends the day, and you
          continue play with the start of the next day, where you select another
          action, etc. The game continues until either you are killed, or 70
          days (10 weeks) elapse. If you haven’t won after 70 days, the game is
          automatically lost!
        </p>
        <p>
          Many events may lead to fighting, described in the{" "}
          <Link to="/rule/r217">combat</Link> rules. You may also have
          additional <Link to="/rule/r201">characters</Link> join your “party.”
          These additional characters are especially useful in fights, although
          some may have special knowledge or abilities useful in certain events.
          Magicians, wizards, witches, priests and monks are especially useful
          people to have in your party. All events are self explanatory, and
          refer to the main rules section that describes how they are resolved.
          Once you’ve read the rules a couple of times you won’t need to refer
          to them again unless you have a specific question. Remember, Barbarian
          Prince is a realistic game, so when in doubt about a situation,
          imagine yourself acting out the event in real life, and select the
          resolution that seems most realistic to you.
        </p>
        <p>
          <Link to="/event/e001" className="text-purple">
            Start your adventure
          </Link>
        </p>
      </Card>
    </>
  );
}

export default GamePage;
