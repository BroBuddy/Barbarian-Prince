import Card from "@/components/Card";
import { Link } from "react-router-dom";

function Game() {
  return (
    <>
      <Card title="Barbarian Prince">
        <p>
          This game will be a new experience. You are about to become a
          character in a story - a story that changes each game. You are the
          Barbarian Prince. This is a solitaire game; you play it alone. In this
          “story game” you read one numbered section after another. Each
          describes a new situation, or provides rules about the choices and
          actions you can make. There are hundreds of events and situation, so
          each game will be a new, fresh experience.
        </p>
        <p>
          The sections are divided into events (e000 numbers) that advance the
          “plot” of the story, and rules/reference (r000 numbers) sections that
          describe situations or choices that often occur.
        </p>
        <p>
          You can learn this game as you play, simply start with the first event
          (<Link to="/event/e001">e001</Link>) and read each section as
          necessary. For convenience, all the rules are collected together in
          the beginning of this booklet, and the major charts and tables
          provided on a special sheet. The most important rules sections are
          r203, r204, r215, r220, and r225. You may wish to briefly review these
          first, if you wish to understand the basic mechanics of play before
          you start. If you are an experienced gamer, you can read all the rules
          sections first (r201 to r228), and then just refer to them later as
          you play.
        </p>
        <p>
          The small metal token is used to mark your current location on the
          map.
        </p>
      </Card>
      <Card title="How to Play">
        <p>
          Barbarian Prince is a realistic adventure game. You play the game in
          days. Each day starts with you selecting an action (r203), such as
          travelling to a new hex on the map. Depending on the action selected,
          you will be referred to a chart, where you roll one or two dice. The
          dice roll and chart may then indicate a special event section, which
          you then resolve.
        </p>
        <p>
          After all events (if any) are resolved for your daily action, you must
          then eat your main (evening) meal, as described in the food rules
          (r215), and if in a town, castle, or temple hex, you must also
          purchase lodging (r217).
        </p>
        <p>
          This ends the day, and you continue play with the start of the next
          day, where you select another action, etc. The game continues until
          either you are killed, or 70 days (10 weeks) elapse. If you haven’t
          won after 70 days, the game is automatically lost!
        </p>
        <p>
          Many events may lead to fighting, described in the combat rules
          (r220). You may also have additional characters (r201) join your
          “party.” These additional characters are especially useful in fights,
          although some may have special knowledge or abilities useful in
          certain events. Magicians, wizards, witches, priests and monks are
          especially useful people to have in your party.
        </p>
        <p>
          All events are self explanatory, and refer to the main rules section
          that describes how they are resolved. Once you’ve read the rules a
          couple of times you won’t need to refer to them again unless you have
          a specific question. Remember, Barbarian Prince is a realistic game,
          so when in doubt about a situation, imagine yourself acting out the
          event in real life, and select the resolution that seems most
          realistic to you.
        </p>
        <p>
          <span className="text-purple">To start the game, go to event</span>{" "}
          <Link to="/event/e001">e001</Link>.
        </p>
      </Card>
      <Card title="Edge of the Game Map">
        <p>
          During the game, the Barbarian Prince cannot leave the game map. If an
          event or rule would normally land him off the map, he simply stops at
          the map edge instead. In other cases, rumoured treasures and other
          locations may be off the game map, in which case they are inaccessible
          to the Barbarian Prince, and are ignored.
        </p>
      </Card>
      <Card title="Credits">
        <p>
          Barbarian Prince is copyright ©1981 by Heritage USA. Designed and
          developed by Arnold Hendrick, Cover painting by Frank Cirocco, map,
          rule illustrations and graphics by Cynthia Sims Millan, typography by
          Arnold Hendrick, figure design by Max Carr, map hexgrid and number
          system courtesy of Simulations Publications, Inc.
        </p>
        <p>
          Graphic re-visioning by Todd Sanders, using, in part, additional
          material by Boardgamegeek.com users: Jumbit, AngusBull, wrrlykam
          (David Bate) and Brewtal Legend (Julian Jimenez).
        </p>
      </Card>
    </>
  );
}

export default Game;
