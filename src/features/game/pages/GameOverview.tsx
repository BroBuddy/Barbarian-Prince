import Card from "@/components/Card";
import { Link } from "react-router-dom";

function GameOverview() {
  return (
    <>
      <Card title="Barbarian Prince">
        <p>
          You are the Barbarian Prince, a lone ruler cast into a harsh and
          unforgiving world. Your kingdom is gone, your power broken—but your
          fate is not yet sealed. Every decision you make shapes your story, and
          every roll of the dice may lead you closer to glory… or ruin.
        </p>
        <p>
          You have ten weeks to prove your worth. By the end of your journey,
          you must stand north of the Tragoth River with no less than 500 gold
          in your possession. Whether you achieve this through conquest,
          cunning, exploration, or sheer luck is entirely up to you—but time is
          never on your side.
        </p>
        <p>
          Each day, you must choose how to <Link to="/rule/r203">act</Link>. You
          may <Link to="/rule/r204">travel</Link> across dangerous lands, search
          for <Link to="/rule/r215">food</Link> to survive, engage in{" "}
          <Link to="/rule/r220">combat</Link> with those who oppose you, or seek
          out <Link to="/rule/r225">treasure</Link> to build your wealth. Every
          action consumes precious time, and every choice carries risk. Neglect
          your supplies, and you may starve. Seek battle, and you may fall.
          Chase riches, and you may lose everything.
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

export default GameOverview;
