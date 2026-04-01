import type { Event } from "../types/EventType";

export const eventData: Event[] = [
  {
    id: "e001",
    title: "The Adventure Begins",
    tag: "event",
    desc: "Evil events have overtaken your Northlands Kingdom. Your father, the old king, is dead - assassinated by rivals to the throne. These usurpers now hold the palace with their mercenary royal guard. You have escaped, and must collect 500 gold pieces to raise a force to smash them and retake your heritage. Furthermore, the usurpers have powerful friends overseas. If you can't return to take them out in ten weeks, their allies will arm and you will lose your kingdom forever. Now consult r201 to determine the starting attributes (r202) of yourself as the Barbarian Prince, and then return to this event and read the paragraph below: To escape the mercenary royal guard, your loyal body servant Ogab smuggled you into a merchant caravan to the southern border.",
    note: "If you finish actions for a day on any hex north of the Tragoth River, the mercenary royal guardsmen may find you. See e002 after normal events are concluded, but before you take your evening meal (r215).",
    tables: [
      {
        type: "simple-list",
        label: "Starting location (1d6)",
        rows: [
          ["1", "Ogon (0101)"],
          ["2", "hex (0701)"],
          ["3", "Ruins of Jakor's Keep (0901)"],
          ["4", "hex (1301)"],
          ["5", "Weshor (1501)"],
          ["6", "hex (1901)"],
        ],
      },
    ],
  },
  {
    id: "e002",
    title: "Mercenary Royal Guardsmen",
    tag: "combat",
    desc: "Roll one die, subtract three (-3), then add one (+1) if you are in Ogon (0101) or Weshor (1501). If the result is one (1) or more, this event occurs. If the result is zero (0) or less, no event occurs. Mercenary thugs, dressed by the usurpers as their royal guardsmen, are riding toward you! Roll one die for the number of men, each of which has combat skill 5, endurance 4, wealth 4.",
    note: "If your entire party has mounts, add one (+1) to die roll. If your party all have winged mounts and/or flying ability, you can use a flying escape (r313) instead of rolling for the evade option.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "pass r327", "attacked r307", "surprise r300"],
          ["2", "pass r328", "attack r306", "surprise r301"],
          ["3", "pass r329", "attack r304", "surprise r303"],
          ["4", "bribe to pass (15) r323", "hide r318", "attack r304"],
          ["5", "bribe to pass (25) r323", "escape r311", "attack r305"],
          ["6", "attacked r306", "escape mtd r312", "attacked r306"],
          ["7", "—", "escape mtd r312", "—"],
        ],
      },
    ],
  },
  {
    id: "e003",
    title: "Swordsman",
    tag: "encounter",
    desc: "You meet a swordsman adventurer. He is mounted on a horse with combat skill 6, endurance 6, and wealth 7. Sitting there on his horse he takes an active interest in your party.",
    note: "If your party all have winged mounts and/or flying ability, you can use a flying escape (r313) instead of rolling for the evade option.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "converse r341", "escape mtd r312", "surprise r303"],
          ["2", "converse r341", "escape r315", "attack r304"],
          ["3", "looter r340", "hide r317", "attack r305"],
          ["4", "hireling r339", "bribe (5) r322", "attacked r306"],
          ["5", "hireling r333", "pass r325", "attacked r307"],
          ["6", "bribe (10) r332", "pass r325", "surprised r308"],
        ],
      },
    ],
  },
  {
    id: "e004",
    title: "Mercenary Band",
    tag: "combat",
    desc: "You observe a small band of mercenaries approaching. The leader is mounted on a horse, with combat skill 6, endurance 6, wealth 50. Roll one die for the number of men with him, each having combat skill 5, endurance 4, wealth 4. Troopers are mounted if there are one or two, on foot otherwise.",
    note: "If your party has any mounts, add one (+1) to your die roll for the evade option, results higher than 6 are considered 6. If your party all have winged mounts and/or flying ability, you can use a flying escape (r313) instead.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "conversation r341", "hide r319", "surprise r301"],
          ["2", "bribe to hire (20) r332", "pass r328", "surprise r302"],
          ["3", "hirelings r338", "pass r329", "surprise r303"],
          ["4", "hirelings r339", "hide r317", "attack r304"],
          ["5", "looters r340", "pass r327", "attack r305"],
          ["6", "attacked r306", "escape mtd r312", "attack r306"],
        ],
      },
    ],
  },
  {
    id: "e005",
    title: "Amazons",
    tag: "encounter",
    desc: "You see a group of Amazon warriors approaching, all on foot. The number in the group is one die roll plus one (+1). All are combat skill 6, endurance 5, wealth 4. They are blood-sisters, and will always hire out together, serve together, and if any are abandoned or left behind all will desert you.",
    note: "If your party has mounts, you may use escape mounted (r312) instead of rolling the die when using the evade option.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "conversation r341", "escape r311", "surprise r302"],
          ["2", "hirelings r338", "escape r314", "surprise r303"],
          ["3", "hirelings r339", "escape r315", "attack r304"],
          ["4", "looters r340", "hide r319", "attack r305"],
          ["5", "pass r327", "pass r328", "attacked r306"],
          ["6", "attacked r306", "hide r317", "battle r330"],
        ],
      },
    ],
  },
  {
    id: "e006",
    title: "Dwarf",
    tag: "encounter",
    desc: "You encounter a Dwarf Warrior with combat skill 6, endurance 7, and wealth 21. First select one of the three options below (talk, evade, fight). Then, before rolling a die to resolve the option, first roll one die to see if he is alone or accompanied by friends.",
    note: "If Dwarf(s) join your party, they will reveal the location of ancient Mines. Roll one die for direction (1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW) and a second for distance in hexes. At the mines roll one die: 1-2→e059; 3-4→e064; 5→e056; 6→e028.",
    tables: [
      {
        type: "simple-list",
        label: "Companion roll (1d6)",
        rows: [
          ["1-3", "Dwarf is alone"],
          ["4", "One friend: CS 5, End 6, Wealth 12"],
          ["5", "1d6 friends: CS 5, End 6, Wealth 12 each"],
          ["6", "Leader of a band — see e058"],
        ],
      },
      {
        type: "roll-table",
        label: "Options (add +1 if Dwarf is alone)",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "surprised r308", "bribe (5) r322", "surprised r308"],
          ["2", "bribe to hire (10) r332", "pass r328", "attacked r306"],
          ["3", "looter r340", "escape r314", "attacked r306"],
          ["4", "hirelings r339", "escape r315", "attack r305"],
          ["5", "hirelings r333", "escape r311", "attack r305"],
          ["6", "conversation r341", "attacked r306", "attack r304"],
          ["7", "ally r334", "escape r311", "surprise r303"],
        ],
      },
    ],
  },
  {
    id: "e007",
    title: "Elf",
    tag: "encounter",
    desc: "You encounter an Elf on foot, with combat skill 5, endurance 5, wealth 15. After you select your option, roll one die to determine his additional characteristics. Due to the greater wisdom of Elves, subtract one (-1) from your own wit & wiles throughout this event. However, if the Elf joins your party, add one (+1) to your wit & wiles while he is in the party.",
    note: "If the event occurs in a forest, add two (+2) to the die roll. If the party is not in forest, you may use escape mounted (r312) instead of rolling the die for the evade option.",
    tables: [
      {
        type: "simple-list",
        label: "Characteristics roll (1d6)",
        rows: [
          ["1", "No additional characteristics"],
          ["2", "Leader of an Elven Band — see e071"],
          ["3", "Magician with a nerve gas bomb e190"],
          [
            "4",
            "Magician with cure-poison vial (e181) and assistant CS 3, End 3, Wealth 2",
          ],
          ["5", "Priest of an Elvish forest cult with a healing potion (e180)"],
          ["6", "Has a friend travelling with him: CS 4, End 4, Wealth 7"],
        ],
      },
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "inquiry r342", "hide r317", "surprise r302"],
          ["2", "conversation r341", "hide r318", "attack r305"],
          ["3", "inquiry r342", "escape r314", "attacked r306"],
          ["4", "conversation r341", "escape r315", "attacked r306"],
          ["5", "escapee r335", "escape r315", "surprised r308"],
          ["6", "plead comrades r336", "pass r326", "battle r330"],
          ["7", "pass r328", "pass r329", "surprised r309"],
          ["8", "pass r329", "surprised r310", "surprised r310"],
        ],
      },
    ],
  },
  {
    id: "e008",
    title: "Halfling",
    tag: "encounter",
    desc: "You encounter a halfling with combat skill 3, endurance 6, and wealth 4. You can attack him, talk with him, or pass by and end the encounter. If you attack, you strike first in combat (r220), but after each round roll one die — a 2 or higher means the halfling has escaped into the brush if still alive. If you pause to talk, you cannot travel further today and any other daily actions still undone will remain undone.",
    tables: [
      {
        type: "simple-list",
        label: "Talk result (1d6)",
        rows: [
          [
            "1",
            "Banal conversation and many irrelevancies — nothing accomplished",
          ],
          [
            "2",
            "Halfling tells you location of his village in an adjacent hex (roll 1d6 for direction). If you enter that hex, see e070",
          ],
          ["3", "General inquiries — see r342"],
          ["4-5", "Extended conversation results — see r341"],
          ["6", "Choice gossip — roll again: 1-3→e147; 4-6→e162"],
        ],
      },
    ],
  },
  {
    id: "e009",
    title: "Farm",
    tag: "location",
    desc: "You spot a small farm ahead. You may detour around it (consuming the rest of the day), or you can approach. If you approach, decide whether to make it a friendly approach or a raid before rolling. If you select a raid and remain in this hex at the end of today, you may be attacked by a revengeful mob tomorrow morning — roll one die, if 5 or higher see e017.",
    tables: [
      {
        type: "simple-list",
        label: "Farm type (2d6)",
        rows: [
          ["2-3", "e012 — Farmer with Protector"],
          ["4", "e011 — Peaceful Farmer"],
          ["5", "e014 — Hostile Reaver Clan"],
          ["6", "e010 — Starving Farmer"],
          ["7", "e011 — Peaceful Farmer"],
          ["8", "e013 — Rich Peasant Family"],
          ["9", "e015 — Friendly Reaver Clan"],
          ["10", "e012 — Farmer with Protector"],
          ["11-12", "e016 — Magician's Home"],
        ],
      },
    ],
  },
  {
    id: "e010",
    title: "Starving Farmer",
    tag: "location",
    desc: "Friendly Approach: farmer had a ruined harvest, his family is now starving. He begs the charity of 5 food units from you. If you refuse this although you have them, all your followers are disgusted — roll one die for each at the start of tomorrow, a 3 or higher means that follower deserts you. If you grant the charity, or don't have 5 food units, there is no special event and the encounter ends. Raid: farmer and his family are quickly killed, no combat necessary, but you find he was poor and starving — no food or money are gained.",
  },
  {
    id: "e011",
    title: "Peaceful Farmer",
    tag: "location",
    desc: "Friendly Approach: farmer is generous, provides food and lodging for your entire party tonight at no cost. Tomorrow morning, he will sell you food units at the rate of 4 units per gold piece, and will sell as much as you wish to buy. Finally, when you leave the hex, roll one die — if the result is 6 the farmer's youngest son joins you for the adventurous life. He is combat skill 3, endurance 4, wealth 0, and can act as a guide within two hexes of the location of the farm. Raid: farmer and his family fight back. Together they count as combat skill 4, endurance 7, wealth 1, see r330 for combat situation. If you kill them all, you gain four times (4x) one die roll in food units as plunder.",
  },
  {
    id: "e012",
    title: "Farmer with Protector",
    tag: "location",
    desc: "Friendly Approach: farmer warns you off his land, but will sell you food at 2 units per gold piece, in any quantity you desire. Regardless of whether you buy or not, the event will then end. Raid: farmer and his family bolt doors and send smoke signals. Farmer and family count as combat skill 4, endurance 7, wealth 2 — your party strikes first (r220). After each round roll one die — a 3 or higher means the Protector arrives with his men and strikes first on the next round. The Protector is combat skill 6, endurance 5, wealth 25; his four men are each combat skill 5, endurance 5, wealth 4. If you kill all opponents, find the farmer's hidden treasure — see e040.",
  },
  {
    id: "e013",
    title: "Rich Peasant Family",
    tag: "location",
    desc: "Friendly Approach: family provides food and lodging as if you are in town (see r215 and r217 for costs), with the same penalties if you refuse to pay. Family may have stables — roll one die, result of 4 or more means they do. If they have stables, roll again for number of horses available for sale, then roll one die and double it for the price per horse. They also sell food at 2 food units per gold piece, unlimited. Raid: family has four retainers (CS 4, End 4, Wealth 1 each). Fight them (r306), then if you win fight the family itself (r305; overall CS 5, End 6, Wealth 30). If you kill everyone, gain six times (6x) one die roll in food units as bonus plunder.",
  },
  {
    id: "e014",
    title: "Hostile Reaver Clan",
    tag: "combat",
    desc: "Roll one die and add two (+2) for the number of clan members. The leader is combat skill 5, endurance 5, wealth 10; other clan members are combat skill 4, endurance 4, wealth 4. Friendly Approach: if clan equals or outnumbers your party, they will attempt a surprise attack (r307). If you outnumber the clan, they bar the house and bid you pass on. You can pass on or make general inquiries (r342) — but any reavers who do not join your party will automatically attempt a surprise attack (r307), while those who joined will not participate. Raid: battle between your party and the clan — see r330.",
  },
  {
    id: "e015",
    title: "Friendly Reaver Clan",
    tag: "encounter",
    desc: "Roll one die and add one (+1) for the number of clan members. The leader is combat skill 5, endurance 4, wealth 7; other clan members are combat skill 4, endurance 4, wealth 4. Friendly Approach: clan leader will discuss terms with you (r342). Unless combat results, he will also sell food at 2 units per gold piece and horses at 6 gold pieces each, regardless of whether he joins your party or not. Raid: there is a battle between your party and the clan — see r330.",
  },
  {
    id: "e016",
    title: "Magician's Home",
    tag: "location",
    desc: "Friendly Approach: magician insists you stay the night and tell him of your adventures to date. You must provide your own food for the day. He may be willing to discuss joining your party (CS 3, End 5) — see r342 if you wish to try. If you don't, or do and avoid combat, he will give you a magic gift — roll once on line B of the Treasure Table (r226). Raid: magician calls upon his powers to defeat and destroy your party. Roll one die for the number of wounds you suffer, one of which is poisoned. All followers die or flee. You must abandon everything you cannot carry yourself, saving only your mount and its loads. If you have the Resistance Talisman (e184) you can stop his powers and destroy the magician — roll one die for his wealth code: 1→5; 2-3→25; 4-5→60; 6→110.",
  },
  {
    id: "e017",
    title: "Peasant Mob in Pursuit",
    tag: "combat",
    desc: "A large mob of angry farmers and villagers are after you! You are trapped and must fight your way out. Roll two dice and double the sum — this is the number of men in the mob. One of these is the leader, with combat skill 3, endurance 2, wealth 2; all the others are combat skill 2, endurance 2. See r330 for the exact combat situation.",
  },
  {
    id: "e018",
    title: "Priest",
    tag: "encounter",
    desc: "You encounter a local Priest riding on a donkey (equivalent to a horse as a mount), with combat skill 3, endurance 3, wealth 25. He seems aloof and not disposed to conversation, but he may be afraid of you. You can let him pass, ending this encounter, or select one of the two options below.",
    note: "If you fight the Priest and kill him, roll one die — on a 5 or 6 he casts upon you the 'mark of Cain'. Roll one die for each follower; any time the roll is greater than your wit & wiles that follower deserts immediately. All Monks and Priests in future will recognise the mark and will not join your party. You can never attempt an audience (r211) with the high priest of any temple marked on the map.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Fight"],
        rows: [
          ["1", "plead comrade r336", "surprise r301"],
          ["2", "plead comrade r336", "surprise r303"],
          ["3", "plead comrade r337", "attack r304"],
          ["4", "conversation r341", "attack r305"],
          ["5", "inquiry r342", "attack r305"],
          ["6", "pass r325", "attack r306"],
        ],
      },
    ],
  },
  {
    id: "e019",
    title: "Hermit Monk",
    tag: "encounter",
    desc: "You encounter a hermit monk meditating in the wilderness, with combat skill 3, endurance 6, wealth 0. He seems to be ignoring you.",
    note: "Unless a priest or monk is with your party, reduce your wit & wiles by one (-1) temporarily when resolving plead comrades options — hermit monks listen poorly. On evade roll of 6, the monk is not what he seemed — see e022, select a new option, and resolve the event accordingly.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "inquiry r342", "pass r325", "attack r305"],
          ["2", "conversation r341", "pass r325", "attack r305"],
          ["3", "plead comrades r336", "pass r325", "attacked r306"],
          ["4", "plead comrades r336", "pass r326", "attacked r306"],
          ["5", "pass r325", "surprised r310", "attacked r307"],
          ["6", "pass r325", "monk → e022", "surprised r308"],
        ],
      },
    ],
  },
  {
    id: "e020",
    title: "Travelling Monk",
    tag: "encounter",
    desc: "You encounter a travelling monk, who has combat skill 4, endurance 5, wealth 4. Roll one die — if the result is 5 or 6 he is accompanied by a companion monk of equal abilities. He seems eager to talk.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "conversation r341", "pass r325", "surprise r302"],
          ["2", "conversation r341", "pass r325", "attack r304"],
          ["3", "inquiry r342", "pass r326", "attack r305"],
          ["4", "plead comrades r336", "inquiry r342", "attack r305"],
          ["5", "plead comrades r337", "inquiry r342", "attacked r306"],
          ["6", "surprised r309", "escape r311", "attacked r306"],
        ],
      },
    ],
  },
  {
    id: "e021",
    title: "Warrior Monks",
    tag: "combat",
    desc: "You encounter a party of monks belonging to a powerful military order, who have weapons and armor. Each monk is combat skill 6, endurance 6, wealth 10. Roll two dice and halve the total (rounding fractions up) for the number in the group. Roll one die again — if the result is 4 or higher they are all mounted as well.",
    note: "If your party has mounts and the warrior monks do not, you may use escape mounted (r312) instead of rolling the die for the evade option. If your party all have winged mounts and/or flying ability, you can use a flying escape (r313) instead.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "conversation r341", "pass r325", "surprise r301"],
          ["2", "inquiry r342", "hide r317", "surprise r302"],
          ["3", "pass r329", "hide r319", "attack r304"],
          ["4", "bribe to pass (10) r323", "escape r315", "attack r305"],
          ["5", "attacked r306", "bribe (10) r324", "attacked r306"],
          ["6", "roll again", "pass r329", "attacked r306"],
        ],
      },
    ],
  },
  {
    id: "e022",
    title: "Monks — Reference",
    tag: "event",
    desc: "You have encountered a monk or monks. Roll one die again for the event.",
    tables: [
      {
        type: "simple-list",
        label: "Roll (1d6)",
        rows: [
          ["1-2", "e019 — Hermit Monk"],
          ["3-4", "e020 — Travelling Monk"],
          ["5-6", "e021 — Warrior Monks"],
        ],
      },
    ],
  },
  {
    id: "e023",
    title: "Wizard",
    tag: "encounter",
    desc: "You meet a Wizard with combat skill 4, endurance 4, and wealth 60. A henchman with combat skill 5, endurance 4, and wealth 4 accompanies him. Roll one die — if the result is 3 or higher, they are mounted on horses. The wizard seems old, but still active and perhaps quite powerful.",
    note: "If the wizard joins your party, see also e025. Wizard Fireballs: before each strike by the wizard in combat (r220), roll one die. If the result is 5 or 6, he strikes with a fireball spell — roll one die for the number of wounds each character in your party suffers. If the wizard has any wounds, he will automatically escape when the fireball strikes.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "inquiry r342", "pass r325", "attack r305"],
          ["2", "inquiry r342", "pass r325", "attacked r306"],
          ["3", "conversation r341", "bribe-pass (5) r321", "see e024"],
          ["4", "see e024", "escape r314", "see e024"],
          ["5", "pass r328", "escape r313", "surprised r308"],
          ["6", "ally r334", "see e024", "attacked r307"],
        ],
      },
    ],
  },
  {
    id: "e024",
    title: "Wizard Attack",
    tag: "magic",
    desc: "Wizard attempts to use magic and take control of you and your party. Roll one die — if the result equals or exceeds your wit & wiles, his attack is successful. All your followers become slaves of the wizard and are lost to you. He captures all their wealth, possessions, and mounts. If he fails to capture them, your entire party escapes instead (r218). If your followers became slaves, roll one die again — if the result exceeds your wit & wiles, you too are captured. If captured, you lose all your possessions, wealth, and mount. Each day as a slave, instead of a normal daily action, roll one die for the direction of his travel (1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW) — he moves one hex per day. Every three days as a slave you suffer one wound. At the end of each day as a slave, roll one die for an escape attempt: 6 = escape (r218), 1 = caught trying to escape and suffer one extra wound, any other result = no effect. If you finally escape, you do so only with yourself and your weapons, without any money, food, or followers.",
  },
  {
    id: "e025",
    title: "Wizard Advice",
    tag: "treasure",
    desc: "The wizard, now a member of your party, confides during the evening meal that he knows of a valuable treasure. According to his information, the treasure is in a certain direction (roll one die: 1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW) and a certain distance away (roll one die for distance in hexes). Once you reach that hex, consult e026 for how to find the treasure.",
  },
  {
    id: "e026",
    title: "Search for Treasure",
    tag: "treasure",
    desc: "You believe you have found the proper location of a treasure. You must spend one day searching for the precise spot, as if you were trying to find a cache (see r214). At the end of that day, roll one die.",
    tables: [
      {
        type: "simple-list",
        label: "Search result (1d6)",
        rows: [
          ["1", "e027 — Ancient Treasure"],
          ["2", "e028 — Cave Tombs"],
          ["3", "e029 — Danger and Treasure"],
          ["4-5", "Bogus information — nothing is found"],
          [
            "6",
            "Clues suggest treasure is in an adjacent hex — roll 1d6 for direction (1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW), then apply this event again when you arrive",
          ],
        ],
      },
    ],
  },
  {
    id: "e027",
    title: "Ancient Treasure",
    tag: "treasure",
    desc: "You find an ancient treasure, long lost. It is wealth code 110 — see r225.",
  },
  {
    id: "e028",
    title: "Cave Tombs",
    tag: "location",
    desc: "Amid the howling winds on a craggy cliff you find caves, and within the caves the tombs of an ancient race. You can decide to avoid them, ending this event, or you can continue inward and investigate the tombs.",
    tables: [
      {
        type: "simple-list",
        label: "Inside the tombs (1d6)",
        rows: [
          ["1", "e030 — Mummies"],
          ["2", "e031 — Looted Tomb"],
          ["3", "e032 — Ghosts"],
          ["4", "e033 — Warrior Wraiths"],
          ["5", "e034 — Spectre of the Inner Tomb"],
          ["6", "e029 — Danger and Treasure"],
        ],
      },
    ],
  },
  {
    id: "e029",
    title: "Danger and Treasure",
    tag: "treasure",
    desc: "You sense that both danger and treasures are near. Roll one die and see that event.",
    tables: [
      {
        type: "simple-list",
        label: "Roll (1d6)",
        rows: [
          ["1", "e028 — Cave Tombs"],
          ["2", "e032 — Ghosts"],
          ["3", "e036 — Golem at the Gate"],
          ["4", "e037 — Broken Chest"],
          ["5", "e038 — Cache under Stone"],
          ["6", "e044 — High Altar"],
        ],
      },
    ],
  },
  {
    id: "e030",
    title: "Mummies",
    tag: "location",
    desc: "You discover dried mummies of a long lost race. Although a scholar may be interested, you aren't, because amid the dust and rot you find just one (1) gold piece!",
  },
  {
    id: "e031",
    title: "Looted Tomb",
    tag: "treasure",
    desc: "You find a partially looted tomb of a dead Prince. Under his sarcophagus you find a secret compartment, but it has a trap lock. Roll one die — if your wit & wiles exceed the die roll, you have outwitted the trap, otherwise see r227 for injuries it may inflict. In either case, you find a treasure with wealth code 50, plus a Gift of Charm (e182). However, the Gift of Charm is very old — roll one die, if the result is 5 or 6 it turns to dust as you lift it from the compartment, and is therefore worthless.",
  },
  {
    id: "e032",
    title: "Ghosts",
    tag: "combat",
    desc: "A group of ghosts surprise you in combat (r220). Roll one die and add one (+1) for the number of ghosts, each of which is combat value 4, endurance 2. They are guarding an ancient altar. If you kill all the ghosts, you can investigate the altar if you wish.",
    tables: [
      {
        type: "simple-list",
        label: "Altar investigation (1d6)",
        rows: [
          ["1", "e037 — Broken Chest"],
          ["2", "e039 — Treasure Chest"],
          ["3", "e041 — Vision Gem"],
          ["4", "e042 — Alcove of Sending"],
          ["5", "e044 — High Altar"],
          ["6", "Nothing"],
        ],
      },
    ],
  },
  {
    id: "e033",
    title: "Warrior Wraiths",
    tag: "combat",
    desc: "Wraiths of long dead super warriors assault your party, and strike first in combat (r220) against you. Roll one die for the number of wraiths, which is always two or more (die roll of one is considered two instead). Each Wraith has a combat value of 6, endurance 9. If all are killed, you find they are guarding plunder from an ancient battle — roll one die to determine the wealth code of this treasure: 1→25; 2→50; 3→60; 4→70; 5-6→100. See r225 for details.",
  },
  {
    id: "e034",
    title: "Spectre of the Inner Tomb",
    tag: "combat",
    desc: "Looking around the atrium of an old tomb, you notice a hidden passage to the interior. You pass within, but it is a long hall, taking the rest of the day to explore. You sense the presence of a Spectre. You can either retreat now, or continue. If you retreat, the event ends. If you continue, at the end of the day, before the evening meal, you finally reach the inner tomb and find the Spectre. It has combat value 7, endurance 3, but is only hurt by poison wounds (normal wounds have no effect) or by wounds from a magic sword. Any priest, monk, magician, wizard, or witch will have magical weapons that are poison to the Spectre. If you kill the Spectre, roll one die to determine the wealth code of the treasure it guarded: 1→5; 2→12; 3-4→25; 5→60; 6→110. See r225 for details.",
  },
  {
    id: "e035",
    title: "Spell of Chaos",
    tag: "magic",
    desc: "A guardian spell of chaos is activated as your party passes within. You and your entire party become mindless idiots. All wander away, so you lose all followers and possessions except for your own mount, and any wealth and possessions you personally carry. You do not eat an evening meal, and begin to suffer the effects of starvation (r216). At the start of tomorrow, roll one die and subtract one (-1) for the number of days you remain mindless and wandering. If the result is zero, you have recovered. If the result is any other number, each day roll one die for the direction you wander (1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW), at one hex per day. You have no travelling events while wandering, and will not eat. When your mind finally returns, you can begin to function normally again at the start of the next day.",
  },
  {
    id: "e036",
    title: "Golem at the Gate",
    tag: "combat",
    desc: "You become separated from the rest of your party during the search. You notice the gateway of a ruined temple, and pass through it. A huge golem appears before you, made entirely of living stone. It raises its sword and strikes first in combat (r220). It is combat skill 6, endurance 8. If you escape (r220e) from the Golem in combat, you lose the rest of your followers and all mounts — only you, your possessions and your wealth on your body survive. If you defeat the Golem and survive subsequent events without making an escape (r218) you will rejoin your party at the evening meal (r215).",
    tables: [
      {
        type: "simple-list",
        label: "After killing the Golem (1d6)",
        rows: [
          ["1", "e038 — Cache under Stone"],
          ["2", "e040 — Treasure Chest (trapped)"],
          ["3", "e043 — Small Altar"],
          ["4", "e044 — High Altar"],
          ["5", "e046 — Gateway to Darkness"],
          ["6", "e027 — Ancient Treasure"],
        ],
      },
    ],
  },
  {
    id: "e037",
    title: "Broken Chest",
    tag: "treasure",
    desc: "You find a chest with a broken and cracked lid. Sorting through old mouldering cloths, you find an item — roll one die.",
    tables: [
      {
        type: "simple-list",
        label: "Contents (1d6)",
        rows: [
          ["1", "e180 — Healing Potion"],
          ["2", "e181 — Cure Poison Vial"],
          ["3", "e182 — Gift of Charm"],
          ["4", "e184 — Resistance Talisman"],
          ["5", "e186 — Magic Sword"],
          ["6", "e189 — Charisma Talisman"],
        ],
      },
    ],
  },
  {
    id: "e038",
    title: "Cache under Stone",
    tag: "treasure",
    desc: "By chance you overturn a stone slab, jumping back as it crashes to the ground. You see that it uncovers an old cache of rotting food and other items. Roll one die.",
    tables: [
      {
        type: "simple-list",
        label: "Contents (1d6)",
        rows: [
          ["1", "e180 — Healing Potion"],
          ["2", "e181 — Cure Poison Vial"],
          ["3", "e182 — Gift of Charm"],
          ["4", "e185 — Poison Drug"],
          ["5", "e187 — Anti-Poison Amulet"],
          ["6", "e190 — Nerve Gas Bomb"],
        ],
      },
    ],
  },
  {
    id: "e039",
    title: "Treasure Chest",
    tag: "treasure",
    desc: "You find a locked chest. You know the lock may be trapped. If you decide to open it, roll one die — if the result is 3 or higher it does have a trap lock, see r227. If you survive the trap (if any) and open the chest, roll one die. If the result is 6 the chest is empty, otherwise it has a treasure with a wealth of 60. This may include a special possession, but if that possession is a pegasus winged mount, it is actually an item with a pegasus emblem — roll again with one die and consult line A on the Treasure Table (r225) for the actual item found.",
  },
  {
    id: "e040",
    title: "Treasure Chest (trapped)",
    tag: "treasure",
    desc: "You find a locked treasure chest protected by a trap. You can either ignore it, or attempt to open it anyway. If you try to open it, roll one die — if the die roll exceeds your wit & wiles you have bungled and sprung the trap, see r227. If you survive the sprung trap (if any), you can now open it — roll one die to determine the wealth code of the contents: 1→5; 2→25; 3→50; 4→60; 5→70; 6→100. See r225 for details. Any result that includes a pegasus winged mount as a possession is actually a pegasus talisman — whenever you have any magician, wizard, witch, priest or monk in your party, they can help you use the talisman to call upon an actual pegasus winged mount (see r204).",
  },
  {
    id: "e041",
    title: "Vision Gem",
    tag: "magic",
    desc: "You find a large, fixed stone with multiple facets. You gaze into it without thinking, and find you can look elsewhere. Roll one die for what you discover.",
    tables: [
      {
        type: "simple-list",
        label: "Discovery (1d6)",
        rows: [
          ["1", "e143 — Secret of the Temples"],
          ["2", "e144 — Secret of Baron Huldra"],
          ["3", "e145 — Secret of Lady Aeravir"],
          ["4", "e146 — Secret of Count Drogat"],
          ["5", "e147 — Clue to Treasure"],
          ["6", "Nothing of value"],
        ],
      },
    ],
  },
  {
    id: "e042",
    title: "Alcove of Sending",
    tag: "magic",
    desc: "You find a small alcove inscribed with runes. If your party includes a magician, wizard or witch the runes can be deciphered, and the alcove's secret put to use. Otherwise, this event ends. The secret of the alcove is simple: it sends voices and thoughts. Using it you can command an audience with one of the following. For the audience you are temporarily transported to that location, and will return at the end of that day, just before the evening meal, regardless of where you are. Followers given from an audience cannot return with you, and are lost. After use the alcove needs many months to recharge, so it cannot be used again during the game.",
    tables: [
      {
        type: "simple-list",
        label: "Audience destinations",
        rows: [
          ["—", "High Priest (e155)"],
          ["—", "Mayor of a Town (e156)"],
          ["—", "Lady Aeravir of Aeravir Castle (e160)"],
          ["—", "Count Drogat of Drogat Castle (e161)"],
        ],
      },
    ],
  },
  {
    id: "e043",
    title: "Small Altar",
    tag: "magic",
    desc: "You find a small altar, on which is displayed an item — roll one die. However, there is also a magic spell shimmering around the altar. If your party includes a magician, wizard, or witch you can determine the nature of the spell by rolling one die. Otherwise, you only discover the spell by actually risking it to reach the altar. Alternately, you can avoid the altar and end this event without ever trying to recover the item.",
    tables: [
      {
        type: "simple-list",
        label: "Item on altar (1d6)",
        rows: [
          ["1", "e186 — Magic Sword"],
          ["2", "e189 — Charisma Talisman"],
          ["3", "e191 — Resistance Ring"],
          ["4", "e192 — Resurrection Necklace"],
          ["5", "e193 — Shield of Light"],
          ["6", "e194 — Royal Helm of the Northlands"],
        ],
      },
      {
        type: "simple-list",
        label: "Spell type (1d6)",
        rows: [
          [
            "1-2",
            "Magic shock field — no one can pass through; anyone who tries automatically suffers one wound when repulsed",
          ],
          [
            "3-4",
            "Magic fire — roll one die and suffer that many wounds entering the spell. You can then retreat without reaching the altar, or brave the fire further, recover the item, and roll one die again for additional wounds",
          ],
          [
            "5",
            "Poison air — roll one die and suffer that many poison wounds, but the item on the altar can be recovered in the process",
          ],
          [
            "6",
            "Fear spell — harmless; it has made your party afraid but in reality the fear spell can do you no harm. Walk to the altar, recover the item, and return without injury",
          ],
        ],
      },
    ],
  },
  {
    id: "e044",
    title: "High Altar",
    tag: "magic",
    desc: "You find a high altar of godly power. If any character in your party is a priest or monk, he will know the invocations to use at this altar. You may ask him to make the invocation and roll one die to see what happens. If you don't ask him, or your party lacks such a follower, the event ends.",
    tables: [
      {
        type: "simple-list",
        label: "Invocation result (1d6)",
        rows: [
          ["1", "Monk or priest is engulfed in godly fires and dies"],
          [
            "2",
            "Lightning and earthquakes destroy the high altar — roll one die for each character in your party and suffer that many wounds due to flying stones and fire",
          ],
          [
            "3",
            "Monk or priest struck with one wound, discovers it was the altar to the wrong god — no more invocations are possible there",
          ],
          [
            "4",
            "Voice of the gods sounds forth, gives you an impossible riddle and a prophecy none can understand — no more invocations are possible",
          ],
          [
            "5",
            "Voices of the gods give a prophecy that seems to promise a treasure — see e147",
          ],
          [
            "6",
            "One of the gods appears, pledging support to your cause. You will win the game if you return alive to the Northlands (any hex north of the Tragoth River) within the next 30 days. However, your endurance is permanently reduced by one (-1), and you must give all your money away to the gods of the altar instantly or be struck down dead",
          ],
        ],
      },
    ],
  },
  {
    id: "e045",
    title: "Arch of Travel",
    tag: "magic",
    desc: "You find a metal-banded archway inscribed with runes. If any character in your party is a magician, wizard or witch the runes can be read, and the arch used if you wish. Otherwise, the event ends. If you can use the arch, you can travel through it instead of making a normal daily travel action (see r204). Travel through the arch allows you to make a magical transfer to any other hex on the map, as you wish. However, you travel forward in time as well — roll one die for the number of extra days which pass, advance the time track by that many days and continue play. You cannot get lost by travelling through the arch. As long as your party continues to have a magician, wizard or witch you can return to this hex and use the arch again and again. However, arch travel is only one-way, from the arch to another hex — you cannot travel from any hex to the arch.",
  },
  {
    id: "e046",
    title: "Gateway to Darkness",
    tag: "magic",
    desc: "You have found one of the dreaded black portals. Any follower in your party who joined you south of the Tragoth River will instantly recognize it. If you can't recognize it, or decide not to use it, this event ends. The Gateway to Darkness feeds on death, and is timeless. If you enter it, you must abandon all your followers and mounts, since it only accepts one living creature at a time. As you step in, a guardian creature with combat skill 7, endurance 7 strikes first at you in combat (r220). You must fight to the death — you cannot escape. If you kill the guardian, you can then re-emerge from the other side of the gateway into the same hex you left. However, you have travelled backwards in time — roll two dice and subtract the total from the number of days elapsed in the game. You have lost your followers because they are stuck in the future, though all the gold, possessions, etc. you acquired still apply. You can enter the portal more than once — each time you enter there is one additional guardian waiting within, plus all previously dead ones have come back to life.",
  },
  {
    id: "e047",
    title: "Mirror of Reversal",
    tag: "combat",
    desc: "You see an old mirror, and looking into it, discover yourself twisted into evil shape. This thing leaps from the mirror and attacks you, getting the first strike in combat (r220). It has the same combat skill and endurance as yourself, and has the same possessions and gold. If you have any followers, you can call for their aid in the battle, but for each strike a follower makes, roll one die — a 5 or 6 means the follower strikes you by accident (mistaking you for your double). If you kill the mirror-thing, the battle ends, and you permanently add one (+1) to your wit & wiles, due to gaining a fuller understanding of yourself in this contest. In addition, you will double your possessions and wealth, by gaining that of the mirror-thing.",
  },
  {
    id: "e048",
    title: "Fugitive",
    tag: "encounter",
    desc: "You encounter a person trying to avoid local justice. He or she will join your party as an ally, but will desert whenever you encounter any Constables (unless your party elects to fight them and kills them all) or whenever you enter any town, castle or temple. Instead, you can immediately elect to fight the character encountered — see r300. Roll one die to see exactly who you meet.",
    tables: [
      {
        type: "simple-list",
        label: "Identity (1d6)",
        rows: [
          [
            "1",
            "Swordsman adventurer: CS 7, End 7, Wealth 1. Roll again — 6 means she is a swordswoman (End 6, Wealth 4) and you become lovers (r228)",
          ],
          [
            "2",
            "Runaway slave: CS 2, End 4, Wealth 0. Roll again — 6 means she is a slave woman and you become lovers (r228). She can act as a local guide within 5 hexes of where you found her",
          ],
          [
            "3",
            "Priest: CS 3, End 3, Wealth 10. Gives you half his wealth in gratitude (r225) and can act as a guide if you desire",
          ],
          [
            "4",
            "Magician: CS 3, End 2, Wealth 5. Will give you free advice as well — see e025",
          ],
          [
            "5",
            "Merchant: CS 2, End 3, Wealth 0. Can act as a guide and helps you bargain — you only pay half the normal price for anything you buy or any bribes you make (round fractions up). Hiring and paying followers still at normal rates. Roll again — 5 or higher means he has a horse",
          ],
          [
            "6",
            "Army deserter: CS 4, End 4, Wealth 2. Roll again — 5 or higher means he has a horse as his mount also",
          ],
        ],
      },
    ],
  },
  {
    id: "e049",
    title: "Travelling Minstrel",
    tag: "encounter",
    desc: "You meet a musician. You can ignore him and end this event, or invite him to dinner (r215). In the latter case, you must give him one food unit or he deserts, but if fed he'll sing a tale that night that prevents any of your party from deserting, no matter what events happened today, even if your followers are not properly fed or lodged. After the songs and the meal, you may start a conversation if you wish — see r341. If he ends up joining your party, his ability to prevent desertions can be used just once more during the game, on any day you wish.",
  },
  {
    id: "e050",
    title: "Local Constabulary",
    tag: "combat",
    desc: "This event only applies if you are within three (3) hexes of a town, castle, or temple. Otherwise there is no event. If the nearest town/castle/temple is Ogon (0101) or Weshor (1501), see e002 instead. You encounter local law enforcement officers. First roll one die to see if they are mounted (5 or higher = mounted). Next roll one die for how many you encounter, adding one (+1) to the roll if they are mounted, or three (+3) if they are on foot. Each constable is combat skill 5, endurance 4, wealth 4. Now select your option and roll the die. Add two (+2) to the die roll if you have visited the nearest town/castle/temple before and did not leave by an escape (r218). If you have never visited the nearest town/castle/temple before, add one (+1) to the die roll.",
    note: "If your party has mounts and the constabulary does not, you may use escape mounted (r312) instead of rolling the die for the evade option. If your party all have winged mounts and/or flying ability, you can use a flying escape (r313) instead.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "surprised r308", "attacked r306", "surprised r308"],
          ["2", "attacked r306", "hide r320", "attacked r307"],
          ["3", "bribe-pass (10) r322", "escape r311", "attacked r306"],
          ["4", "bribe-pass (15) r323", "escape r315", "attack r305"],
          ["5", "pass r329", "hide r318", "attacked r304"],
          ["6", "attacked r306", "attacked r305", "surprise r303"],
          ["7", "pass r325", "pass r325", "surprise r302"],
          ["8", "pass r326", "pass r325", "surprise r301"],
        ],
      },
    ],
  },
  {
    id: "e051",
    title: "Bandits",
    tag: "combat",
    desc: "You are ambushed by bandits, who surprise you in combat (r220). The number of bandits exceeds the number of characters in your party by two. One of the bandits is the leader, with combat skill 6, endurance 6, wealth 15. The rest are combat skill 5, endurance 4, wealth 1.",
  },
  {
    id: "e052",
    title: "Goblins",
    tag: "combat",
    desc: "You sight a band of Goblins in the distance. Roll two dice for the number in the band, each is combat skill 3, endurance 3, wealth 1. In addition, they are led by an additional Hobgoblin with combat skill 6, endurance 5, wealth 5. You saw them first, so you can either escape (r218) from the area, or attempt to follow them (r219). If you follow them, after the follow movement (r219) roll one die. If the result exceeds your wit & wiles the band discovers you and attacks, but your party will get the first strike in combat (r220).",
    tables: [
      {
        type: "simple-list",
        label: "If followed, where they lead (1d6)",
        rows: [
          ["1", "e054 — Goblin Keep"],
          ["2-6", "e053 — Campsite"],
        ],
      },
    ],
  },
  {
    id: "e053",
    title: "Campsite",
    tag: "location",
    desc: "Roll two dice for the campsite location. You may now elect to fight the characters encountered at the campsite, or not. If you don't, unless otherwise indicated in a previous event, you must hide (r218) in the hex until tomorrow. If you elect to fight the characters encountered, and kill them, you gain control of their campsite.",
    tables: [
      {
        type: "simple-list",
        label: "Campsite location (2d6)",
        rows: [
          ["2", "Campsite at a small altar — when you gain control see e043"],
          [
            "3",
            "Campsite at previously unknown ruins — if you gain control see e064",
          ],
          [
            "4",
            "Campsite at the entrance to cave tombs — if you gain control see e028",
          ],
          [
            "5",
            "Campsite is rendezvous with another group of the same size — group is now double its original size; roll one die, if it exceeds your wit & wiles they discover you and attack (you get first strike); if not, roll two dice again and refer to this listing again",
          ],
          ["6-8", "Campsite in open ground — no special event"],
          [
            "9",
            "Campsite hidden by terrain and vegetation — if you gain control, roll again to see exactly where it is (reroll this result if it occurs again)",
          ],
          [
            "10",
            "Campsite at a small building — if you gain control you can investigate, roll one die: 1→e042; 2→e037; 3→e038; 4→e039; 5-6→nothing",
          ],
          [
            "11",
            "Campsite near a place where you sense magic — if you gain control you must immediately roll one die: 1→e032; 2→e036; 3→e043; 4→e044; 5→e045; 6→e046",
          ],
          [
            "12",
            "Campsite near a place of hidden magic — if you gain control and have a priest, monk, magician, wizard or witch in your party, roll one die: 1→e022; 2→e036; 3→e043; 4→e044; 5→e045; 6→e046",
          ],
        ],
      },
    ],
  },
  {
    id: "e054",
    title: "Goblin Keep",
    tag: "location",
    desc: "You see a fortified tower keep of a Goblin King. The area is swarming with hundreds of Goblins. You decide you should escape, but a band of Goblins has already seen you. They charge forward with screams and howls. If you are unable to escape from this hex for any reason (see r218) or decide not to resist, you are captured — see e061. If you try to escape, first make your escape move (r218). Then roll one die to see if you elude the pursuing Goblins. If your wit & wiles is greater than the die roll, you lose them and the event ends. Otherwise, you must either surrender (go to e061 and return to the keep hex), or fight them. If you fight, roll one die three times for the number of Goblins (each CS 3, End 3, Wealth 1), plus one Hobgoblin leader (CS 6, End 5, Wealth 4). You can strike first in combat (r220). You cannot escape from combat — you must kill or be killed. If you return to the hex with the Goblin King's keep any time later in the game, you will be captured automatically — see e061.",
  },
  {
    id: "e055",
    title: "Orcs",
    tag: "combat",
    desc: "You sight a band of Orcs in the distance. Roll two dice for the number in the band. One is a chieftain with combat skill 5, endurance 6, and wealth 7. The rest are warriors, combat skill 4, endurance 5, and wealth 1. You can either escape (r218) from the area, or attempt to follow them (r219). If you follow them, after the follow movement roll one die. If the result exceeds your wit & wiles the Orcs discover you and attack, but your party gets first strike in combat (r220). If they lead you to a campsite, you can either avoid them by escaping to an adjacent hex (r218) or make a surprise attack in combat (r220) against them at their campsite.",
    tables: [
      {
        type: "simple-list",
        label: "If followed, where they lead (1d6)",
        rows: [
          ["1", "e056 — Orc Tower"],
          ["2-6", "e053 — Campsite"],
        ],
      },
    ],
  },
  {
    id: "e056",
    title: "Orc Tower",
    tag: "location",
    desc: "You see the dark tower of an Orc Warlord. The area is full of Orcs and worse things. An Orc war-patrol led by a demi-Troll of combat skill 8, endurance 7, and wealth 10 spots you. Roll one die and add one (+1) for the number of Orcs in the patrol also, each has combat skill 5, endurance 5, wealth 2. You can either surrender to them (go to e061) or try to escape.",
  },
  {
    id: "e057",
    title: "Troll",
    tag: "combat",
    desc: "A huge stone-skinned Troll confronts your party. Roll one die — if the troll exceeds your wit & wiles, it strikes first in combat (r220), otherwise you strike first. The Troll is combat skill 8, endurance 8, wealth 15. Furthermore, the Troll's skin has regenerative properties — it automatically cures one wound at the end of each combat round you fight against it. If you kill the troll, its stone-skin is a valuable item. Whenever you have an opportunity to buy food at a town, castle, temple, or from merchants you can sell the skin for 50 gold. It is also known that Count Drogat of Drogat Castle will treasure the gift should you manage to get a personal audience with him.",
  },
  {
    id: "e058",
    title: "Band of Dwarves",
    tag: "encounter",
    desc: "You encounter a group of dwarves. Each dwarf is combat skill 5, endurance 6, wealth 10. Roll one die and add one (+1) for the number of dwarves in the band. If your party has fewer members than the dwarf band, you spot them first, and can either follow them (r219), hide or escape from them (r218) as you wish, or meet them using one of the three options below. If your party is equal in size or larger, they spot you first and you must meet them.",
    note: "If following: after follow movement (r219) roll one die. If the result equals or exceeds your wit & wiles the dwarves discover you and attack, striking first in combat (r220). If they don't discover you, roll one die for their destination.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "inquiry r342", "escape r311", "surprise r302"],
          ["2", "bribe-join (30) r331", "escape r314", "surprise r303"],
          ["3", "bribe-hire (10) r332", "escape r315", "attack r304"],
          ["4", "hirelings r339", "hide r317", "attack r305"],
          ["5", "pass r328", "hide r319", "attacked r306"],
          ["6", "attacked r306", "attacked r306", "surprised r308"],
        ],
      },
      {
        type: "simple-list",
        label: "Follow destination (1d6)",
        rows: [
          ["1", "e059 — Dwarf Mines"],
          ["2-6", "e053 — Campsite"],
        ],
      },
    ],
  },
  {
    id: "e059",
    title: "Dwarf Mines",
    tag: "location",
    desc: "You see a great underground castle inhabited by Dwarves. Dwarven constables and patrols intercept your party. Roll one die. If the die roll exceeds your wit & wiles, you and your party are arrested immediately — see e060. Otherwise, you are passed, and enter the castle mines. There you can undertake any actions and activities normally allowed in a castle (r203). This includes seeking an audience with the Dwarf King who rules there (r211, use Huldra Castle table). Like any castle, you must spend the normal amounts for food (r215) and lodging (r217).",
  },
  {
    id: "e060",
    title: "Arrested",
    tag: "event",
    desc: "You and your party are arrested by an overwhelming force, and cannot resist. You are put into jail — roll one die for the gravity of the offence.",
    tables: [
      {
        type: "simple-list",
        label: "Offence gravity (1d6)",
        rows: [
          ["1 or less", "e061 — Marked for Death"],
          ["2", "e062 — Thrown in the Dungeon"],
          ["3-4", "e063 — Imprisoned"],
          ["5-6", "e060a — Minor Offence"],
        ],
      },
    ],
  },
  {
    id: "e060a",
    title: "Minor Offence",
    tag: "event",
    desc: "You are held overnight, along with your entire party, although the jailers provide food and lodging for all. Tomorrow you are assessed 10 gold pieces fine, plus jailing cost of 2 gold pieces per character (including yourself) and 1 gold piece per mount. Any whom you pay for are released. Any whom you do not pay for are left in jail and lost. If you cannot pay for anyone's release (not even yourself), you and your party are imprisoned — see e063.",
  },
  {
    id: "e061",
    title: "Marked for Death",
    tag: "event",
    desc: "You and your party have committed a very grave offence. The death penalty is demanded. Until then, you and your party are imprisoned. All your money, possessions and mounts are confiscated and permanently lost. You are provided with food and lodging while in prison. At the start of each day in prison roll one die: 1 means you manage to escape (see below for details), 6 means you must finally meet the headsman and are put to death. Any other die roll means you continue to languish in prison. Escapes: if you escape from prison, roll one die for each other character in your party who were imprisoned near you: 1-2 = they are part of the escape and join you; 3-6 = they are unable to join the escape, or have already been executed. Now that the size of your party is determined, use the escape rules (r218) to determine where you end up. The escape takes the entire day, after it you must prepare for the evening meal (r215).",
  },
  {
    id: "e062",
    title: "Thrown in the Dungeon",
    tag: "event",
    desc: "You are thrown into a deep dungeon. Other members of your party are imprisoned or sold as slaves, and therefore are permanently lost (unless a lover, see r228). You lose all your wealth, possessions and mounts. While in the dungeon, you are provided with food and lodging (of a sort). At the start of each day in the dungeon roll two dice — a result of 2 or 3 means you escape (see r218) that day, any other result means you continue to languish in captivity. Every full week (seven days) you spend in the Dungeon inflicts one poisoned wound on you, due to unhealthy conditions, disease, and gradual weakness and starvation. If you escape, it takes the entire day. After it, you must find food for your evening meal (r215).",
  },
  {
    id: "e063",
    title: "Imprisoned",
    tag: "event",
    desc: "You and your party are imprisoned. All your money, possessions and mounts are confiscated and lost. While in prison, you are provided with food and lodging. At the start of each day roll one die — 1 means you escape, any other result means you continue to remain captive. If you escape, roll one die again for each character in your party: another 1 means they escape with you, any other result means they cannot escape and are lost. When you escape, including any followers, see r218 for procedure. The escape takes the entire day, after it you must find food for the evening meal (r215).",
  },
  {
    id: "e064",
    title: "Ruins",
    tag: "location",
    desc: "You discover hidden ruins. You can undertake a search action in them (r208) on any following day you are in the hex, just as if they were ruins marked on the map.",
  },
  {
    id: "e065",
    title: "Hidden Town",
    tag: "location",
    desc: "You discover a previously unknown town. You can undertake any normal actions there, as if it were a town on the map (r203). You are also in a town for food (r215) and lodging (r217). However, due to the isolation of this town, you cannot seek news and information (r209) here.",
  },
  {
    id: "e066",
    title: "Secret Temple",
    tag: "location",
    desc: "You find a secret temple, of an obscure and feared cult. Before you can do anything a large group of guardian monks surrounds you. Roll one die — if the result equals or exceeds your wit & wiles you and your party are arrested, see e060 and subtract one (-1) from the die roll when resolving that event. If the result is less than your wit & wiles you talk your way past the guardians, and you can stay at the temple as if it were a normal temple marked on the map. Thus the rules for food (r215) and lodging (r217) at a temple apply, as well as your ability to undertake daily actions allowed at a temple (r203). If you later return to this temple, the guardians will continue to permit you free entrance, with no new die rolls needed. However, if you kill anyone while in this temple hex, or escape from it, the next time you enter, you must begin this event afresh, including a new die roll.",
  },
  {
    id: "e067",
    title: "Abandoned Mines",
    tag: "location",
    desc: "You come across apparently abandoned mines. It looks like they were once inhabited by dwarves. You can avoid them, ending this event, or you can enter them and investigate further.",
    tables: [
      {
        type: "simple-list",
        label: "Inside the mines (1d6)",
        rows: [
          ["1", "e059 — Dwarf Mines (still inhabited)"],
          ["2", "e051 — Bandits"],
          ["3", "e046 — Gateway to Darkness"],
          ["4", "e045 — Arch of Travel"],
          ["5-6", "e028 — Cave Tombs"],
        ],
      },
    ],
  },
  {
    id: "e068",
    title: "Wizard's Abode",
    tag: "location",
    desc: "You come across a wizard's home. Roll one die for the type of encounter.",
    tables: [
      {
        type: "simple-list",
        label: "Type (1d6)",
        rows: [
          ["1-2", "e023 — Wizard"],
          ["3", "e024 — Wizard Attack"],
          [
            "4",
            "e016 — Magician's Home (roll 1d6: even = friendly approach, odd = raid)",
          ],
          ["5-6", "e068a — Wizard Tower"],
        ],
      },
    ],
  },
  {
    id: "e068a",
    title: "Wizard Tower",
    tag: "location",
    desc: "A great wizard's tower looms before you. It is just like a castle for all game purposes, including food (r215) and lodging (r217). However, the ruling wizard is jealous, and will tolerate no rivals. Any magicians, wizards or witches in your party will either desert or be arrested, unless you elect to have your whole party escape (r218) from the hex. If you stay, on subsequent days you can perform any daily actions normally allowed at a castle (r203), but if you seek an audience with the ruler (r211) use the temple and high priest tables.",
  },
  {
    id: "e069",
    title: "Wounded Warrior",
    tag: "encounter",
    desc: "You come across a heroic fighter near death. He was combat skill 7, endurance 6, wealth 0, but he has five wounds. If you remain with him while he rests and heals, or carry him while he heals, as part of your party, he will join your party as an ally, at no cost except food (r215) and lodging (r217) as necessary.",
  },
  {
    id: "e070",
    title: "Halfling Town",
    tag: "location",
    desc: "You come across a hidden and unknown town of halflings. You can undertake any normal actions (r203) in this town, but normal rules for food (r215) and lodging (r217) apply. However, halflings have a great love of gossip, news and new faces — any day you spend doing a seek news and information action (r209), you and your party will be wined and dined so much that you need not buy any food for your evening meal. If you kill any character while in the halfling town, or must escape from the town, for the rest of the game the halflings will dislike you. You will no longer be wined and dined when seeking news and information. Any time you seek news and information (r209), hire followers (r210), or seek an audience (r211) in the town, you must suffer an extra minus one (-1) to your dice roll when resolving these actions.",
  },
  {
    id: "e071",
    title: "Elven Band",
    tag: "encounter",
    desc: "You encounter a band of elves. Roll one die and add one (+1) for the number of elves in the band. Each elf is combat skill 5, endurance 4, and wealth 7. You have three options.",
    note: "If your party includes an elf, subtract one (-1) from your die roll. If your party includes a dwarf, add one (+1) to your die roll.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["0", "follow e072", "pass r325", "surprise r301"],
          ["1", "inquiry r342", "escape-fly r313", "surprise r302"],
          ["2", "inquiry r342", "escape r315", "attack r305"],
          ["3", "conversation r341", "hide r318", "attacked r306"],
          ["4", "pass r325", "hide r320", "attacked r307"],
          ["5", "follow e072", "attacked r306", "surprised r308"],
          ["6", "surprised r309", "surprised r309", "surprised r310"],
          ["7", "surprised r309", "escape-fly r313", "attack r305"],
        ],
      },
    ],
  },
  {
    id: "e072",
    title: "Following an Elven Band",
    tag: "event",
    desc: "The elves bid that you follow them. If you do not, refer back to e071 and select either the evade or fight option. If you do follow the elves, after making a follow move (r219) roll one die to see where you end the day. If you end up at a campsite, you may peacefully share the campsite with the elves, eating your own food (r215, including hunting where possible). On the following day you can select any daily action, or you can continue to follow the elves instead. Alternately, you can fight the elves for control of their campsite at the end of any day (before the evening meal r215) — the elves are able to strike first in this combat (r220).",
    tables: [
      {
        type: "simple-list",
        label: "Destination (1d6)",
        rows: [
          ["1", "e165 — Elven Town"],
          ["2", "e166 — Elven Castle"],
          ["3-6", "e053 — Campsite"],
        ],
      },
    ],
  },
  {
    id: "e073",
    title: "Witch",
    tag: "encounter",
    desc: "You encounter a witch with combat skill 1, endurance 3, wealth 5. Roll one die — if it exceeds your wit & wiles she is hostile; if the roll is equal she ignores you and the event ends; if the roll is less she is friendly. Hostile Witch: your party must escape (r218) immediately. Roll one die for each character in the party, including yourself — if a 6 occurs the character was turned into a frog before he or she escaped, and is lost. If you are turned into a frog, any lover, magician, wizard, or friendly witch surviving in your party can turn you back. Otherwise, you will remain a frog for years, and lose the game.",
    tables: [
      {
        type: "simple-list",
        label: "Friendly witch actions (1d6)",
        rows: [
          ["1-2", "Joins your party as an ally (r334)"],
          ["3-4", "Can be hired to join your party (r333)"],
          ["5-6", "Gives you a gift — see e195"],
        ],
      },
    ],
  },
  {
    id: "e074",
    title: "Spiders",
    tag: "combat",
    desc: "Giant spiders trap you — roll one die for the number of spiders. Their webs trap your party, and the combat skill of each character is reduced by one. Each spider has combat skill 4, endurance 3, and inflicts only poisoned wounds. It is very likely that you are surprised also — see r309.",
  },
  {
    id: "e075",
    title: "Wolves",
    tag: "combat",
    desc: "This event is postponed until after you finish your evening meal (r215). Ignore this event if in any town, castle or temple. At night a hunting pack of wolves attacks your party. Roll three dice for the number of wolves, each of which is combat skill 3, endurance 3. They may surprise you — see r309. At the end of each combat round, if any wolves are still left alive, one of your mounts will be killed by the wolves. Since materials being transported (r206) by the mount have been unloaded for the night, only the mount itself is lost, not what it carries. You cannot escape from the wolf attack.",
  },
  {
    id: "e076",
    title: "Great Hunting Cat",
    tag: "combat",
    desc: "Ignore this event if you are in a town, castle or temple. You are surprised by a great hunting cat, with combat skill 6, endurance 3. It surprises you in combat (r220) and selects one victim (see r343). As soon as the cat kills this victim it disappears into the wilds, carrying off the victim and any wealth or possessions the victim might carry. The victim's mount (if any) is killed, but left behind. When in combat with the cat, the victim cannot escape, but the rest of your party may escape combat.",
  },
  {
    id: "e077",
    title: "Herd of Wild Horses",
    tag: "event",
    desc: "Ignore this event if you are in a town, castle, temple or swamp hex. You surprise a herd of wild horses. Each character in your party can capture one, giving you that many additional mounts. However, you must spend tomorrow resting (r203) in order to train the captures. If you have a magician, wizard or witch in your party, that character can cast a spell that trains the animals instantly — no extra day of rest is needed.",
  },
  {
    id: "e078",
    title: "Bad Going",
    tag: "weather",
    desc: "Ignore this event unless your party is travelling on mounts without wings (r204) such as horses. Ignore this event regardless of mounts if your party travelled along a road, or entered a village, castle or temple. Terrain is difficult for horses. You must either halt for the day to explore alternate routes, or you risk injuries. If you continue normal travel today, roll one die and subtract three (-3). If the result is 1 or more, that many horses have broken legs or thrown shoes, and are lost as mounts after the move. This may require you to reorganize transport loads (r206) and/or cache items you are carrying (r214). If this event occurs after your last travel move for the day, the difficult terrain applies for any travel (r204) on the following day. If some other action (r203) than travel is selected for tomorrow, you are presumed to explore alternate routes in the course of that other action, thus ending this event.",
  },
  {
    id: "e079",
    title: "Heavy Rains",
    tag: "weather",
    desc: "Cold, driving rains hinder man and beast. You must stop moving today, and roll one die for each character in your party. If the result is 5 or 6, the character catches cold, and suffers one wound. At the start of tomorrow, roll one die. A result of 4 or higher means the rains continue — if you use any mounts they may catch pneumonia, roll once for each, they fall sick and die on a 5 or 6. You can lead animals at walking speed, including animals used to transport loads (r206) without risk. If you travel at all (r204) any characters who haven't yet caught cold must risk it. At the start of the day after tomorrow the weather will clear and the rain will stop, unless this event occurs again in the meantime.",
  },
  {
    id: "e080",
    title: "Pixies",
    tag: "magic",
    desc: "A group of small, flying sprites called pixies appear and dance around you and your party. Unless you have a magician, wizard, witch, elf or halfling in your party they will dance away and end the encounter. If your party includes any one of these characters, the pixies may stop to grant you a boon — roll one die.",
    tables: [
      {
        type: "simple-list",
        label: "Boon (1d6)",
        rows: [
          ["1", "Nothing of use"],
          ["2", "Advice — see e025"],
          ["3", "Lead you to ancient cache — see e038"],
          ["4-5", "Provide magic gift — see e195"],
          ["6", "Give you a winged pegasus mount — see e188"],
        ],
      },
    ],
  },
  {
    id: "e081",
    title: "Mounted Patrol",
    tag: "combat",
    desc: "You encounter a mounted patrol of soldiers. Roll one die for the number in the patrol, each of which is combat skill 6, endurance 5, wealth 4. One of the men is the leader, and has wealth 10 instead.",
    note: "If your party all have winged mounts and/or flying ability, you can use a flying escape (r313) instead of rolling for the evade option.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "inquiry r342", "escape-mtd r312", "surprise r302"],
          ["2", "pass r327", "escape-mtd r312", "attack r305"],
          ["3", "bribe-pass (10) r322", "escape r314", "attack r305"],
          ["4", "bribe-pass (8) r324", "hide r318", "attacked r306"],
          ["5", "attacked r306", "attacked r306", "attacked r306"],
          ["6", "surprised r308", "surprised r308", "surprised r308"],
        ],
      },
    ],
  },
  {
    id: "e082",
    title: "Spectre",
    tag: "magic",
    desc: "An unearthly spectre from the astral plane appears in the midst of your party, casting a hideous miasma in all directions. One character in your party is the spectre's victim (r343 — magicians, wizards, witches, priests and monks must be first choices as victims). The victim is turned to smoke and taken by the spectre to the astral plane, never to be seen again. If you are the victim, you are lost and the game ends. However, a spectre is a magical being, and can be stopped using any possession that protects against magic attacks or injury.",
  },
  {
    id: "e083",
    title: "Wild Boar Charges",
    tag: "combat",
    desc: "A huge wild boar charges toward your party. It has surprised you in combat (r220). The boar normally has combat skill 5, endurance 4, but its surprise strike is made with combat skill 8 because of its fearsome charge. Determine which character in your party is the target of this charge (r343). The boar continues selecting victims until you escape or kill it. If you kill the boar, roll two dice for the number of food units it provides.",
  },
  {
    id: "e084",
    title: "Bear Comes to Dinner",
    tag: "combat",
    desc: "Ignore this event if you are in a town, castle, temple, friendly farm, in desert, or guest of any character who provides a free meal. You are about to sit down for a meal when a large, black bear wanders into your campsite. The bear will randomly attack one character (r343) after another in your party until all are killed, the bear is killed, or you escape. The bear strikes first in combat (r220), and has combat skill 5, endurance 5.",
  },
  {
    id: "e085",
    title: "Narrow Ledges",
    tag: "weather",
    desc: "Your party is passing along narrow ledges and paths that overhang cliffs that plunge into deep gorges. Roll two dice for each character on foot in the party — if a 12 is rolled that character slips and falls to his death. Roll one die for each mount in your party without wings — a 6 means the mount stumbles and falls to its death, carrying away any rider and loads on it. If you entered the hex mounted, your entire party must be considered on mounts for this purpose. If you personally slip, or your mount falls over the edge, you are presumed to catch a ledge somewhere down the cliff and survive, but roll one die and add one (+1) for the number of wounds suffered in the fall. Next roll one die to see if your party finds you — a 5 or higher indicates they do, and the wounds are the only effect. Any lower roll means the rest of your party does not find you, and disappears with all the mounts, possessions and wealth they were carrying.",
  },
  {
    id: "e086",
    title: "High Pass",
    tag: "weather",
    desc: "In order to leave the hex by any direction except that which you entered, you must travel through a very high, alpine pass. On your next travel action (r204) — unless you leave by the hex you entered — you must take the high pass as long as you aren't lost. When you travel the high pass, roll two dice for the effects of high winds, sub-freezing temperatures, snow, etc.",
    tables: [
      {
        type: "simple-list",
        label: "Weather effects (2d6)",
        rows: [
          ["7 or less", "No effect — travel is not hindered"],
          ["8", "Each character in party suffers 1 wound due to cold"],
          ["9", "Each character suffers 2 wounds; mounts die; no caches*"],
          ["10", "Each character suffers 3 wounds; mounts die; no caches*"],
          ["11", "Each character suffers 4 wounds; mounts die; no caches*"],
          [
            "12",
            "Each character suffers 4 wounds and 1 poison wound; mounts die; no caches*",
          ],
        ],
      },
    ],
    note: "* Due to terrible conditions, if your transport ability (r206) is reduced due to loss of characters or mounts, you cannot cache spare wealth and possessions — they must be abandoned in the snows and lost entirely.",
  },
  {
    id: "e087",
    title: "Impassable Woods",
    tag: "weather",
    desc: "You find the forest becomes thicker and thicker along this route, until further travel is impossible. You can only leave this hex by travelling to the hex from which you came (r204). In other words, any further moves must be backwards. However, if entered from another direction this hex could be passable.",
  },
  {
    id: "e088",
    title: "Rock Fall",
    tag: "weather",
    desc: "As you travel along through a steep-sided gorge a rock fall begins, threatening your entire party. Roll one die for each character; mounts without riders are rolled for separately.",
    tables: [
      {
        type: "simple-list",
        label: "Rock fall result (1d6)",
        rows: [
          ["1-4", "Rocks miss — no effect"],
          [
            "5",
            "Character suffers one wound from flying rock chips; riderless mount is caught by rolling boulder, breaks a leg and must be killed",
          ],
          [
            "6",
            "Character hit by heavy rock — roll one die and add one (+1) for wounds suffered; riderless mount is hit and killed instantly, and all its load is buried beneath the rocks and also lost",
          ],
        ],
      },
    ],
  },
  {
    id: "e089",
    title: "Impassable Morass",
    tag: "weather",
    desc: "You discover the swamp turns into an impassable morass of weeds, quicksand, water and muck. You can leave this hex only by moving to the hex you came from (r204). In other words, your next move must be backwards. However, the hex might be passable if entered from another direction. Only this particular route is blocked.",
  },
  {
    id: "e090",
    title: "Quicksand",
    tag: "weather",
    desc: "Your party stumbles into quicksand. Roll one die for each character or mount. If a character is riding a mount, you can either roll for both together as a character, or the character can sacrifice the mount and its load in order to jump from it to safety.",
    tables: [
      {
        type: "simple-list",
        label: "Quicksand result (1d6)",
        rows: [
          [
            "1-3",
            "Character or mount struggles out of the quicksand without harm",
          ],
          [
            "4",
            "Character or mount escapes only if another character or mount is already free to pull it out — otherwise it sinks and dies",
          ],
          [
            "5",
            "Character struggles outward using vines and tree roots, but a mount is lost with everything it carries",
          ],
          [
            "6",
            "Character or mount is trapped in deepest part — cannot win free, and automatically is lost with everything carried",
          ],
        ],
      },
    ],
  },
  {
    id: "e091",
    title: "Poison Snake",
    tag: "combat",
    desc: "Your party unknowingly walks over the lair of a poison snake. One character (use r343 to select victim) suffers snakebite poison wounds — roll one die for the number of poison wounds received.",
  },
  {
    id: "e092",
    title: "Flood",
    tag: "weather",
    desc: "Rains swell the water level of the marsh and cause flooding. You and your party are stranded on a small knoll, unable to travel further today. At the start of tomorrow, roll one die. If the result is 5 or higher, the waters subside so you can travel again (r204), otherwise you remain stranded and cannot make any travel (r204), escape (r218) or follow (r219) actions that day. Keep on rolling the die at the start of each day until travel is possible once more.",
  },
  {
    id: "e093",
    title: "Poison Plants",
    tag: "weather",
    desc: "You notice poison plants around you today, often a sign of greater evil. You cannot hunt for food (r215) today. Roll one die for an additional event.",
    tables: [
      {
        type: "simple-list",
        label: "Additional event (1d6)",
        rows: [
          ["1", "e034 — Spectre of the Inner Tomb"],
          ["2", "e032 — Ghosts"],
          ["3", "e033 — Warrior Wraiths"],
          ["4", "e074 — Spiders"],
          ["5-6", "No additional event"],
        ],
      },
    ],
  },
  {
    id: "e094",
    title: "Crocodiles",
    tag: "combat",
    desc: "Very large and very hungry crocodiles attack your party. Roll one die for the number of crocodiles, each of which is combat skill 4, endurance 6. If you are in a swamp, you cannot escape from them in battle. The crocs always strike first in combat (r220), and in swamp achieve surprise as well.",
  },
  {
    id: "e095",
    title: "Mounts at Risk",
    tag: "event",
    desc: "The strain of travelling is exhausting your mounts. Roll one die for each mount in your party.",
    tables: [
      {
        type: "simple-list",
        label: "Mount condition (1d6)",
        rows: [
          ["1-4", "Mount still in fair condition — no special effect"],
          [
            "5",
            "Mount failing — unless it is allowed to rest (r203) one day, it will die after tomorrow",
          ],
          [
            "6",
            "Mount in serious condition — cannot continue further, must be killed",
          ],
        ],
      },
    ],
  },
  {
    id: "e096",
    title: "Mounts Die",
    tag: "event",
    desc: "The adverse conditions finally take their toll on your mounts. All the mounts, including winged ones, must roll at the end of each day until they die or recover. One die is used.",
    tables: [
      {
        type: "simple-list",
        label: "Daily mount roll (1d6)",
        rows: [
          ["1", "Mount recovering — do not roll any further for it"],
          [
            "2",
            "Mount recovering if it did not travel today — do not roll further; if the mount did travel today, it is still failing, roll again at the end of tomorrow",
          ],
          [
            "3",
            "Mount still failing, but not dead yet — roll again at the end of tomorrow",
          ],
          ["4-6", "Mount dies now"],
        ],
      },
    ],
  },
  {
    id: "e097",
    title: "Marsh Gas and Rot",
    tag: "weather",
    desc: "Your entire party has unwittingly travelled into an area full of flesh-rot disease and mind-destroying marsh gas. Roll one die for each character. If a 1 results the character escapes; any other result means the character dies a mindless and raving idiot while his flesh rots from his bones before his eyes. Roll for yourself first, since if you die the game ends, regardless of the fate of the rest in your party.",
  },
  {
    id: "e098",
    title: "Dragon",
    tag: "combat",
    desc: "You encounter a huge, winged, fire-breathing Dragon with combat skill 10 and endurance 11. Roll one die — if the result is 1 or 2 you have found it at its lair, which has wealth 110 and wealth 60 both. With any other roll, it has only wealth 30. If you must fight it in combat (r220) you cannot escape.",
    note: "If you kill the Dragon, the Dragon's eye is greatly valued by high priests of the temples throughout the land, and may be of assistance in gaining an audience. Carrying the Dragon's eye counts as one load for transport purposes (r206).",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Evade", "Fight"],
        rows: [
          ["1", "escape flying r313", "surprise r302"],
          ["2", "escape r315", "surprise r303"],
          ["3", "hide r318", "attack r305"],
          ["4", "hide r320", "attacked r306"],
          ["5", "attacked r306", "surprised r308"],
          ["6", "surprised r308", "surprised r309"],
        ],
      },
    ],
  },
  {
    id: "e099",
    title: "Roc",
    tag: "combat",
    desc: "You encounter the Roc, a gigantic bird, which swoops down on your party. The roc is combat skill 9, endurance 8, and wealth 10.",
    note: "If you kill the Roc, you can cut off its beak and transport it as one load (r206). Count Drogat of Drogat Castle especially prizes this item, and it may help you gain an audience with him. In addition, the beak can be sold to any merchant, or in any town, castle, or temple whenever you buy food. The beak is worth 35 gold.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Evade", "Fight"],
        rows: [
          ["1", "escape flying r313", "surprise r301"],
          ["2", "escape flying r313", "surprise r303"],
          ["3", "hide r317", "attack r304"],
          ["4", "hide r319", "attack r305"],
          ["5", "attack r305", "attacked r306"],
          ["6", "surprised r308", "surprised r308"],
        ],
      },
    ],
  },
  {
    id: "e100",
    title: "Griffon",
    tag: "encounter",
    desc: "You meet a winged Griffon, which has combat skill 7, endurance 6, wealth 12. The Griffon is intelligent, and could serve both as a member of your party and as a winged mount for another character. However, Griffons are normally quite independent and ferocious, and this one looks especially unfriendly, if not hostile!",
    note: "If you kill the Griffon, you can remove its claws and carry them as an extra possession. They are especially valued by Lady Aeravir of Aeravir Castle, and may help you gain an audience with her.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "inquiry r342", "escape-fly r313", "surprise r303"],
          ["2", "plead comrades r337", "escape r315", "attack r305"],
          ["3", "attacked r306", "hide r317", "attack r305"],
          ["4", "attacked r307", "hide r318", "attacked r306"],
          ["5", "surprised r308", "pass r325", "attacked r306"],
          ["6", "surprised r309", "attacked r306", "surprised r308"],
        ],
      },
    ],
  },
  {
    id: "e101",
    title: "Harpy",
    tag: "encounter",
    desc: "You encounter a Harpy, a bird-woman with combat skill 5, endurance 4, and wealth 4. Harpies are known as dirty, nasty things, but occasionally have allied with humans for mutual gain.",
    note: "If the Harpy joins your party, she has her own wings, and can travel airborne without a winged mount if desired. She also counts as travelling on a normal mount because the wings allow her to make long airlifted hops as well.",
    tables: [
      {
        type: "roll-table",
        label: "Options",
        cols: ["Die", "Talk", "Evade", "Fight"],
        rows: [
          ["1", "inquiry r342", "escape-fly r313", "surprise r302"],
          ["2", "pass r329", "pass r325", "attack r304"],
          ["3", "looter r340", "pass r326", "attack r305"],
          ["4", "looter r340", "pass r327", "attack r305"],
          ["5", "surprised r308", "pass r328", "attack r306"],
          ["6", "surprised r310", "pass r329", "surprised r309"],
        ],
      },
    ],
  },
  {
    id: "e102",
    title: "Light Rainstorm",
    tag: "weather",
    desc: "You must land immediately, and cannot travel further today due to low ceiling, heavy cloud cover, and bad weather.",
  },
  {
    id: "e103",
    title: "Bad Headwinds",
    tag: "weather",
    desc: "You cannot move faster than two hexes flying today. If this event occurs after you have travelled to the third hex today, you must land in the last hex (second hex entered) instead, and end your travel there.",
  },
  {
    id: "e104",
    title: "Good Tailwinds",
    tag: "weather",
    desc: "You can fly one extra hex today if you wish. Normal travel rules (r204) apply when moving into this extra fourth hex.",
  },
  {
    id: "e105",
    title: "Storm Clouds Ahead",
    tag: "weather",
    desc: "You can land immediately, in the hex you just entered, and avoid any risk. Alternately, if you continue flying today, before checking for lost or a travel event, roll one die for what happens as you try to fly on.",
    tables: [
      {
        type: "simple-list",
        label: "Continue flying (1d6)",
        rows: [
          ["1", "e103 — Bad Headwinds"],
          ["2", "e102 — Light Rainstorm"],
          ["3", "e079 — Heavy Rains"],
          ["4-5", "No effect"],
          ["6", "e105a — Violent Weather"],
        ],
      },
    ],
  },
  {
    id: "e105a",
    title: "Violent Weather",
    tag: "weather",
    desc: "Your party is blown out of control by gigantic winds. Roll one die for the direction you are blown (1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW) instead of making your normal travel move, then roll one die again and halve the number (round fractions up) for the number of hexes you are blown. You crash into the final hex — your flying mount is killed and you roll one die for wounds suffered. All other members of your party are blown off course and lost to you.",
  },
  {
    id: "e106",
    title: "Heavy Overcast",
    tag: "weather",
    desc: "Thick, black clouds obscure your vision. You realize you are becoming lost. Roll one die for direction (1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW), and move one hex in that direction. Now roll one die for each additional character or unridden mount in your party — a 6 means that character or mount disappears into the overcast and is lost from your party. Finally, the overcast will force you and the remainder of your party to land in the new hex — no further travel today is possible.",
  },
  {
    id: "e107",
    title: "Falcon Scout",
    tag: "encounter",
    desc: "A friendly Falcon joins your party if you offer it one unit of food (r215) right now. For the rest of today you cannot get lost. Tonight, at the evening meal (r215), if you offer it a second food unit, and then roll anything other than a 6 on one die, the Falcon will remain throughout tomorrow with your party as a guide also. This can continue day after day provided you feed it a food unit at the evening meal and roll anything but a six. The falcon can only act as a guide — it has no combat skill or endurance value, and any wound will kill it.",
  },
  {
    id: "e108",
    title: "Hawkmen Attack",
    tag: "combat",
    desc: "You encounter a group of hawkmen who swoop down on your party. Roll one die for the number of hawkmen, each is combat skill 7, endurance 5, wealth 7. They surprise your party in combat (r220). You cannot escape from combat, but must fight to the death.",
  },
];
