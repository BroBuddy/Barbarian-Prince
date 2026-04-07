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
          <em>
            "Evil events have overtaken your Northlands Kingdom. Your father,
            old King Hendryc Arath, is dead - assassinated by rivals to the
            throne, led by your own evil brother. These usurpers now hold the
            palace with their mercenary royal guard. You have escaped to the
            south and must collect <strong>500 gold</strong> pieces to raise an
            army to smash them and retake your heritage. Furthermore, the
            usurpers have powerful friends overseas and in the Cult of Dark
            Wizards of the South. If you can't return across the Tragoth River
            to take them out in ten weeks, their allies will arm and you will
            lose your kingdom forever. The way will not be easy, but you have
            your stubborn Northlands will and your great sword ‘Bonebiter’ to
            aid you in your quest..."
          </em>
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

export default GamePage;
