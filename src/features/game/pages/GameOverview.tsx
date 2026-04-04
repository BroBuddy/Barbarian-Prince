import Card from "@/components/Card";
import { Link } from "react-router-dom";

function GameOverview() {
  return (
    <>
      <Card title="Barbarian Prince">
        <p>
          You are the Barbarian Prince, a lone ruler in a harsh world. Each game
          tells a different story shaped by your choices.
        </p>
        <p>
          <strong>Goal:</strong> Complete your quest within 10 weeks. End a day
          north of the Tragoth River with 500 gold. How you achieve this is up
          to you… and the dice.
        </p>
      </Card>

      <Card title="Rules">
        <p>
          <strong>Core Rules:</strong>
        </p>
        <ul className="mx-5">
          <li>
            <Link to="/rule/r203">Daily Actions</Link>
          </li>
          <li>
            <Link to="/rule/r204">Travel</Link>
          </li>
          <li>
            <Link to="/rule/r215">Food</Link>
          </li>
          <li>
            <Link to="/rule/r220">Combat</Link>
          </li>
          <li>
            <Link to="/rule/r225">Acquiring Treasure</Link>
          </li>
        </ul>
        <p>
          <strong>Advanced Rules:</strong>
        </p>
        <ul className="mx-5">
          <li>
            Read <Link to="/rule/r201">r201</Link> –{" "}
            <Link to="/rule/r229">r229</Link> before starting, or discover them
            during play.
          </li>
        </ul>
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
