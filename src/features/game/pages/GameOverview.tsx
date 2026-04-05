import Card from "@/components/Card";
import { type Edition, useData } from "@/context/DataContext";
import { Link } from "react-router-dom";
import { BookOpen, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

type EditionType = {
  id: Edition;
  label: string;
  icon: ReactNode;
};

const editions: EditionType[] = [
  {
    id: "original" as Edition,
    label: "Original",
    icon: <BookOpen size={20} />,
  },
  {
    id: "42th" as Edition,
    label: "42nd Edition",
    icon: <Sparkles size={20} />,
  },
];

function GameOverview() {
  const { edition, setEdition } = useData();

  return (
    <>
      <Card title="Choose your Edition">
        <div className="flex gap-3 mx-5 my-3">
          {editions.map((e: EditionType) => (
            <button
              key={e.id}
              onClick={() => setEdition(e.id)}
              className={`flex-1 p-4 pointer text-left transition-colors ${
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
          You are the Barbarian Prince, a lone ruler cast into a harsh and
          unforgiving world. Your kingdom is gone, your power broken—but your
          fate is not yet sealed. Every decision you make shapes your story, and
          every roll of the dice may lead you closer to glory… or ruin.
        </p>
        <p>
          You have ten weeks to prove your worth. By the end of your journey,
          you must stand north of the Tragoth River with no less than
          <strong className="mx-1">500 gold</strong>
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
