import Card from "@/components/Card";
import { Link } from "react-router-dom";

function Game() {
  return (
    <>
      <div className="text-center mt-2">
        <img src="/images/barbarian_prince.png" alt="Barbarian Prince" />
      </div>

      <Card title="Barbarian Prince">
        <p>
          <strong>This game will be a new experience.</strong> You are about to
          become a character – the Barbarian Prince – in a story that changes
          each game. This is a solitaire game, meaning you play it alone. In
          this “story game,” you read one numbered entry after another. Each
          entry describes a new situation, or provides rules about the choices
          and actions you can make. There are hundreds of events and situations,
          so each game will be a new, fresh experience.
        </p>
        <p>
          The entries are divided into events (e000 numbers) that advance the
          “plot” of the story, and rules/references (r000 numbers) that describe
          situations or choices that often come up during the game.
        </p>
        <p>
          You can learn this game as you play – simply start with the first
          event (
          <Link to="/event/e001" className="text-purple">
            e001
          </Link>
          ) and read each entry as necessary. For convenience, all the rules are
          collected together in the beginning of this booklet, and the major
          tables collected as reference cards. The most important rules entries
          are <Link to="/rule/r203">r203</Link>,{" "}
          <Link to="/rule/r204">r204</Link>,
          <Link className="ml-1" to="/rule/r215">
            r215
          </Link>
          , <Link to="/rule/r220">r220</Link>, and{" "}
          <Link to="/rule/r225">r225</Link>. You may wish to briefly review
          these rules first, if you wish to understand the basic mechanics of
          play before you start. If you are an experienced gamer, you can read
          all the rules entries first (<Link to="/rule/r201">r201</Link> to{" "}
          <Link to="/rule/r229">r229</Link>), and then just refer to them later
          as you play.
        </p>
      </Card>

      <div className="text-center mt-2">
        <img src="/images/image_004.png" alt="Barbarian Prince" className="" />
      </div>

      <Card title="How to Play">
        <p>
          <strong>Barbarian Prince</strong> is a realistic adventure game. You
          play the game in days. Each day starts with you selecting a daily
          action (see <Link to="/rule/r203">r203</Link>), such as travelling to
          a new hex on the map (see <Link to="/rule/r204">r204</Link>).
          Depending on the action you selected, you will be referred to a list,
          often in the form of a table, where you roll one or two dice. The dice
          roll and list may then point you to a special event entry, which you
          read in the Event Booklet and resolve. Unless instructed otherwise,
          you should make choices before rolling to resolve,to preserve the
          element of surprise. Likewise, it’s recommended that you avoid reading
          the outcomes for other results –to aid you in this, dice results are
          bolded, so you can more easily jump to the outcome.
        </p>
        <p>
          After all events (if any) are resolved for your daily action, you must
          then eat your evening meal (see <Link to="/rule/r215">r215</Link>)
          and, if in a village, town, castle, or temple hex, you must also
          purchase lodging (see <Link to="/rule/r217">r217</Link>).
        </p>
        <p>
          This ends the day, and you continue play with the start of the next
          day, where you select another action, and so on. The game continues
          until either you win (see below), you are killed, or 70 days (10
          weeks) elapse. If you haven’t won within 70 days, the game is
          automatically lost!
        </p>
        <p>
          Many events may lead to fighting, described in the combat rules (
          <Link to="/rule/r220">r220</Link>). You may also have additional
          characters (see <Link to="/rule/r201">r201</Link>) join your party.
          These followers are especially useful in fights, and some may even
          have special knowledge or abilities to aid you in certain events.
          Magicians, monks, priests, witches, and wizards are especially useful
          to have in your party.
        </p>
        <p>
          All events are self-explanatory, and will usually refer to the main
          rules entry that describes how they are resolved. Once you’ve read the
          rules a couple of times you won’t need to refer to them again unless
          you have a specific question. Remember, Barbarian Prince is a
          realistic game, so when in doubt about a situation, imagine yourself
          acting out the event in real life, and select the resolution that
          seems most realistic to you.
        </p>
        <p>
          how to win: You have 10 weeks to complete your quest and finish any
          day in a hex north of the Tragoth River with 500 gold in your
          possession. How you achieve this is up to you… and the capricious will
          of the dice.
        </p>
        <p>
          To start the game, go to event{" "}
          <Link to="/event/e001" className="text-purple">
            e001
          </Link>
          .
        </p>
      </Card>

      <div className="text-center mt-2">
        <img src="/images/image_005.png" alt="Barbarian Prince" className="" />
      </div>

      <Card title="Edge of the Game Map">
        <p>
          During the game, the Barbarian Prince cannot leave the game map. If an
          event or rule would normally land him off the map, he simply stops at
          the map edge instead. In other cases, rumoured treasures and other
          locations may be off the game map, in which case they are inaccessible
          to the Barbarian Prince, and are ignored.
        </p>
      </Card>

      <div className="text-center mt-2">
        <img src="/images/image_001.png" alt="Barbarian Prince" className="" />
      </div>
    </>
  );
}

export default Game;
