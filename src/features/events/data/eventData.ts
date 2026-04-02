import type { Event } from "../types/EventType";

export const eventData: Event[] = [
  {
    tag: "e001",
    title: "The Adventure Begins",
    type: "story",
    desc: "Evil events have overtaken your Northlands Kingdom. Your father, King Hendryc Arath, is dead – assassinated by rivals to the throne. These usurpers now hold the palace with their mercenary royal guard. You have escaped and must collect 500 gold pieces to raise a force to smash them and retake your heritage. Furthermore, the usurpers have powerful friends overseas. If you can't return to take them out in ten weeks, their allies will arm, and you will lose your kingdom forever. Now consult r202 to determine your starting attributes (r201) as the Barbarian Prince, and then return to this event and read on: To escape the mercenary royal guard, your loyal body servant Ogab smuggled you into a merchant caravan to the southern border. Roll 1d6 to see where the caravan takes you, while poor Ogab faces the wrath of the royal guards back home.",
    note: "IMPORTANT NOTE: If you finish daily actions on any hex north of the Tragoth River, the mercenary royal guardsmen may find you. After any normal events are concluded, but before you take your evening meal (see r215), you must roll 1d6: on a 4 or more (3 or more if you are in Ogon or Weshor) go to e002.",
    tables: [
      {
        type: "roll-table",
        label: "Starting Location",
        cols: ["Roll 1d6", "Location"],
        rows: [
          ["1", "Ogon (0101)"],
          ["2", "hex 0701"],
          ["3", "Ruins of Jakor's Keep (0901)"],
          ["4", "hex 1301"],
          ["5", "hex 1801"],
          ["6", "Weshor (1501)"],
        ],
      },
    ],
  },
  {
    tag: "e002",
    title: "Mercenary Royal Guardsmen",
    type: "encounter",
    desc: "Roll 1d6: on a 1, go to e200. Otherwise, 1d6 mercenary thugs (ev4 cs5 wc4), dressed by the Northern usurpers as their royal guardsmen, are riding swiftly toward you on horseback! Your options are:",
    note: "* If your entire party has mounts, add one (+1) to the roll. If your party has winged mounts and/or flying ability, you can use escape flying (r313) instead of rolling for the evade option. You can abandon un-mounted members of the party.",
    tables: [
      {
        type: "roll-table",
        label: "Mercenary Royal Guardsmen",
        cols: ["roll", "talk", "evade*", "fight"],
        rows: [
          ["1", "pass r327", "attacked r307", "surprise r300"],
          ["2", "pass r328", "attack r306", "surprise r301"],
          ["3", "pass r329", "attack r304", "surprise r303"],
          ["4", "bribe-pass (15) r323", "hide r318", "attack r304"],
          ["5", "bribe-pass (25) r323", "escape r311", "attack r305"],
          ["6+", "attacked r306", "escape (mtd) r312", "attacked r306"],
        ],
      },
    ],
  },
  {
    tag: "e003",
    title: "Swordsman",
    type: "npc",
    desc: "You meet a swordsman adventurer (ev6 cs6 wc7). (Roll 1d6: on a 5 or 6, the adventurer is female.) Mounted on a sturdy horse, the adventurer takes an active interest in your party. Your options are:",
    note: "* If the swordswoman joins your party, roll 1d6: on a 6, she becomes your lover (r228). † If your party has winged mounts and/or flying ability, you can use escape flying (r313) instead of rolling for the evade option.",
    tables: [
      {
        type: "roll-table",
        label: "Swordsman",
        cols: ["roll", "talk*", "evade†", "fight"],
        rows: [
          ["1", "converse r341", "escape (mtd) r312", "surprise r303"],
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
    tag: "e004",
    title: "Mercenary Band",
    type: "encounter",
    desc: "You observe a small band of mercenaries approaching. Their leader (ev6 cs6 wc50) is mounted on a horse, followed by 1d6 men (ev4 cs5 wc4). If there are 1 or 2 troopers with him, they are mounted, otherwise they are on foot. Your options are:",
    note: "* If your entire party has mounts, add one (+1) to the roll. If your party has winged mounts and/or flying ability, you can use escape flying (r313) instead of rolling to resolve the evade option. You can abandon un-mounted members of the party for this.",
    tables: [
      {
        type: "roll-table",
        label: "Mercenary Band",
        cols: ["roll", "talk", "evade*", "fight"],
        rows: [
          ["1", "conversation r341", "hide r319", "surprise r301"],
          ["2", "bribe-hire (20) r332", "pass r328", "surprise r302"],
          ["3", "hirelings r338", "pass r329", "surprise r303"],
          ["4", "hirelings r339", "hide r317", "attack r304"],
          ["5", "looters r340", "pass r327", "attack r305"],
          ["6+", "attacked r306", "escape (mtd) r312", "attack r306"],
        ],
      },
    ],
  },
  {
    tag: "e005",
    title: "Amazons",
    type: "encounter",
    desc: "You see a group of 1d6+1 Amazon warriors (ev5 cs6 wc4) approaching, all on foot. They are blood-sisters, and will only ever hire out together, serve together, and if any are abandoned or left behind, all will desert you together. Your options are:",
    note: "* If your party has mounts, you can use escape mounted (r312) instead of rolling to resolve the evade option.",
    tables: [
      {
        type: "roll-table",
        label: "Amazons",
        cols: ["roll", "talk", "evade*", "fight"],
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
    tag: "e006",
    title: "Dwarf",
    type: "npc",
    desc: "You encounter a dwarf warrior (ev7 cs6 wc21). First, roll 1d6 to see if he is alone or accompanied by friends, then choose an interact option.",
    note: "* If the dwarf is alone, add one (+1) to the die roll. † If your party has mounts, you can use escape mounted (r312) instead of rolling to resolve the evade option. ‡ If the dwarf(s) join your party as a result of this conversation, they will reveal the location of ancient dwarf mines 1d6 hexes away (see r204g to determine a random direction). If you go there, then after any normal travel events, roll 1d6 for what you find: 1: e064; 2–3: e059; 4–5: e067; 6: e028.",
    tables: [
      {
        type: "roll-table",
        label: "Dwarf Companions",
        cols: ["Roll 1d6", "Result"],
        rows: [
          ["1–2", "The dwarf is alone."],
          [
            "3",
            "The dwarf is a merchant; see e128 to find what he has for sale.",
          ],
          ["4", "The dwarf is with one dwarf friend (ev6 cs5 wc12)."],
          ["5", "The dwarf is with 1d6 dwarf friends (ev6 cs5 wc12)."],
          [
            "6",
            "The dwarf is the leader of a band; see e058 for the number of dwarves, and use that event to resolve the interaction below.",
          ],
        ],
      },
      {
        type: "roll-table",
        label: "Dwarf",
        cols: ["roll*", "talk", "evade†", "fight"],
        rows: [
          ["1", "surprised r308", "bribe (5) r322", "surprised r308"],
          ["2", "bribe-hire (20) r332", "pass r328", "attacked r306"],
          ["3", "looters r340", "escape r314", "attacked r306"],
          ["4", "hirelings r338", "escape r315", "attack r305"],
          ["5", "hirelings r339", "escape r311", "attack r305"],
          ["6", "conversation‡ r341", "attacked r306", "attack r304"],
          ["7", "ally‡ r334", "escape r311", "surprise r303"],
        ],
      },
    ],
  },
  {
    tag: "e007",
    title: "Elf",
    type: "npc",
    desc: "You encounter an elf (ev5 cs5 wc15) on foot. First, roll 1d6: on a 5 or 6, the elf is female. Then roll 1d6 on the list below to determine additional characteristics. Choose an interact option from the list below and roll. However, due to the greater wisdom of elves, subtract one (−1) from your own wit & wiles for any rolls made in this encounter.",
    note: "* If the event occurs in a forest, add two (+2) to the roll. † If a female elf joins your party, roll 1d6: on a 6, she becomes your lover (r228). ‡ If the party is not in forest, you may use escape mounted (r312) instead of rolling to resolve the evade option.",
    tables: [
      {
        type: "roll-table",
        label: "Elf Characteristics",
        cols: ["Roll 1d6", "Result"],
        rows: [
          ["1", "No additional characteristics."],
          [
            "2",
            "The elf is the leader of band of elves; see e071 for the number of elves in the band, and use that event to resolve the option selected.",
          ],
          [
            "3",
            "The elf is a magician with a flask of death mist (e190); if forced to fight and allowed a surprise attack (r220d), the elf will use it.",
          ],
          [
            "4",
            "The elf is a magician carrying a cure-poison vial (e181), and has an assistant (ev3 cs3 wc2).",
          ],
          [
            "5",
            "The elf is a sage of an Elvish forest cult with a healing potion (e180).",
          ],
          ["6", "The elf is travelling with a friend (ev4 cs4 wc7)."],
        ],
      },
      {
        type: "roll-table",
        label: "Elf",
        cols: ["roll*", "talk†", "evade‡", "fight"],
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
    tag: "e007a",
    title: "Elf Abilities",
    type: "npc",
    desc: "All elves are excellent archers, so they gain one (+1) to their combat skill when making ranged attacks (r220g). If the elf joins your party, add one (+1) to your wit & wiles whilst he or she is with you, on account of the sage advice and extensive knowledge elves provide. An elf may also act as a guide (r205a) in any forest hex.",
  },
  {
    tag: "e008",
    title: "Halfling",
    type: "npc",
    desc: "You encounter a stout halfling (ev6 cs3 wc4). You can attack him, talk with him, or pass by and end the encounter. If you attack him, you strike first in combat (r220), but after each round, if the halfling is still alive, roll 1d6: on a 2 or more, the halfling has escaped into the brush and the combat is over. If you pause to talk with him, you find he's a long-winded fellow like most halflings, and you cannot travel further today. Any other daily actions still undone will remain undone. To resolve the talk, roll 1d6.",
    tables: [
      {
        type: "roll-table",
        label: "Halfling Talk",
        cols: ["Roll 1d6", "Result"],
        rows: [
          ["1", "Banal conversation and many irrelevancies waste your time."],
          [
            "2",
            "The halfling tells you the location of his home in an adjacent hex; roll for the direction (r204g). If you enter that hex, see e070 after any normal travel events are finished.",
          ],
          [
            "3",
            "General inquiries are needed; see r342 and add two (+2) to the roll.",
          ],
          [
            "4",
            "Whilst he smokes a long pipe, some extended conversation results; see r341 and add two (+2) to the roll.",
          ],
          [
            "5",
            "The halfling has choice gossip and very useful information, roll 1d6: 1–3: e147; 4–6: e162.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e008a",
    title: "Halfling Abilities",
    type: "npc",
    desc: "Because halflings have excellent aim with their sling, they gain one (+1) to their combat skill when making ranged attacks (r220g).",
  },
  {
    tag: "e009",
    title: "Farm",
    type: "settlement",
    desc: "You spot a small farm ahead. You may detour around it, but that will consume the rest of the day, ending all travel for today. Alternately, you can go up to it. If you decide to approach the farm, first roll 1d6: under your wit & wiles, you may roll on the table below first, then choose to make a friendly approach or a raid; equal to or over your wit & wiles, you must choose a friendly approach or raid first and then roll on the table below. If you select a raid and remain in this hex at the end of the day, you may be attacked by a vengeful mob tomorrow morning, before you have a chance to select your daily action. At that time, roll 1d6: on a 5 or more, see e017; on a 4 or less, there is no mob or event.",
    tables: [
      {
        type: "roll-table",
        label: "Type of Farm",
        cols: ["Roll 2d6", "Event"],
        rows: [
          ["2–3", "e012"],
          ["4", "e011"],
          ["5", "e014"],
          ["6", "e010"],
          ["7", "e011"],
          ["8", "e013"],
          ["9", "e015"],
          ["10", "e012"],
          ["11+", "e016"],
        ],
      },
    ],
  },
  {
    tag: "e010",
    title: "Starving Farmer",
    type: "settlement",
    desc: "The farmer had a ruined harvest; his family is now starving. He begs the charity of 5 food units from you. If you have them, but refuse, all your followers are disgusted by your evil temper; roll 1d6 for each at the start of tomorrow: on a 3 or more, that follower deserts you. If you grant the charity, or don't have 5 food units, there is no further event, and the encounter ends.",
    tables: [
      {
        type: "simple-list",
        label: "Options",
        rows: [
          [
            "Friendly approach: The farmer had a ruined harvest; his family is now starving. He begs the charity of 5 food units from you. If you have them, but refuse, all your followers are disgusted by your evil temper; roll 1d6 for each at the start of tomorrow: on a 3 or more, that follower deserts you. If you grant the charity, or don't have 5 food units, there is no further event, and the encounter ends.",
          ],
          [
            "Raid: The farmer and his family are quickly killed without combat, but you find he was poor and starving – no food or money are gained.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e011",
    title: "Peaceful Farmer",
    type: "settlement",
    desc: "The farmer is generous, provides food and lodging for your entire party tonight at no cost. Tomorrow morning, he will sell you food units at the rate of 4 units per gold piece and will sell as much as you wish to buy. Finally, when you leave the hex, roll 1d6: on a 6, the farmer's youngest son (ev4 cs3) joins you for the adventurous life and can act as a guide within two hexes of the farm in any direction.",
    tables: [
      {
        type: "simple-list",
        label: "Options",
        rows: [
          [
            "Friendly approach: The farmer is generous, provides food and lodging for your entire party tonight at no cost. Tomorrow morning, he will sell you food units at the rate of 4 units per gold piece and will sell as much as you wish to buy. Finally, when you leave the hex, roll 1d6: on a 6, the farmer's youngest son (ev4 cs3) joins you for the adventurous life and can act as a guide within two hexes of the farm in any direction.",
          ],
          [
            "Raid: The farmer and his family (ev7 cs4 wc1) fight back; see r330 for combat situation. If you kill them, you gain 1d6×4 food units as plunder.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e012",
    title: "Farmer with Protector",
    type: "settlement",
    desc: "The farmer warns you off his land but will sell you food at 2 units per gold piece, in any amount you desire. Regardless of whether you buy or not, the event then ends, and you go on your way.",
    tables: [
      {
        type: "simple-list",
        label: "Options",
        rows: [
          [
            "Friendly approach: The farmer warns you off his land but will sell you food at 2 units per gold piece, in any amount you desire. Regardless of whether you buy or not, the event then ends, and you go on your way.",
          ],
          [
            "Raid: The farmer and his family (ev6 cs4 wc1) send up smoke signals and bolt the doors, locking you in to a combat (r220); your party strikes first. Roll 1d6: on a 3 or more, the Protector (ev5 cs6 wc25) arrives and bursts in with 4 henchmen (ev5 cs5 wc4), and striking first on the next round. If you kill all your opponents in the raid, you can find the treasure the farmer tried to hide, e040.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e013",
    title: "Rich Peasant Family",
    type: "settlement",
    desc: "The family provides food (r215) and lodging (r217) as if you are in town, with the same penalties if you refuse to pay. The family may have stables – roll 1d6: on a 4 or more, they do. If they have stables, they have 1d6 horses for sale for 1d6×2 gold pieces per horse. They will also sell food at 2 food units per gold piece.",
    tables: [
      {
        type: "simple-list",
        label: "Options",
        rows: [
          [
            "Friendly approach: The family provides food (r215) and lodging (r217) as if you are in town, with the same penalties if you refuse to pay. The family may have stables – roll 1d6: on a 4 or more, they do. If they have stables, they have 1d6 horses for sale for 1d6×2 gold pieces per horse. They will also sell food at 2 food units per gold piece.",
          ],
          [
            "Raid: The family has four retainers (ev4 cs4 wc1). You must fight these in combat (r306), and if you kill them, then you must fight a second battle against the family itself (ev6 cs5 wc30) (r305). If you kill all opponents, then you gain 1d6×6 food units and 1d3 horses as plunder.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e014",
    title: "Hostile Reaver Clan",
    type: "settlement",
    desc: "The hostile clan is composed of a leader (ev5 cs5 wc10) and 1d6+2 clan members (ev4 cs4 wc4).",
    tables: [
      {
        type: "simple-list",
        label: "Options",
        rows: [
          [
            "Friendly approach: If the clan equals or outnumbers your party, they will attempt a surprise attack (r307). If you outnumber the clan, they will bar the house and bid you pass. You can then pass on or make general inquiries. If you select the latter, see r342, but any reavers who do not join your party will automatically attempt a surprise attack (r307). If they do, those reavers who joined will not participate in that combat.",
          ],
          [
            "Raid: There is a battle between your party and the clan; see r330.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e015",
    title: "Friendly Reaver Clan",
    type: "settlement",
    desc: "The friendly clan is composed of a leader (ev4 cs5 wc7) and 1d6+1 clan members (ev4 cs4 wc4).",
    tables: [
      {
        type: "simple-list",
        label: "Options",
        rows: [
          [
            "Friendly approach: The clan leader will discuss terms with you, r342. Unless combat results, he will also sell food at 2 units per gold piece, and horses at 6 gold each, regardless of whether he joins your party or not.",
          ],
          [
            "Raid: There is a battle between your party and the clan; see r330.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e016",
    title: "Magician's Home",
    type: "magic",
    desc: "The magician (ev5 cs3) insists you stay the night and tell him of your adventures. You must provide your own food for the day, as he has a small larder. He may be willing to discuss joining your party; see r342 if you wish to try. If you don't, or do and avoid a combat situation, he will give you a magic gift – consult r225, then roll on Line B of the Treasure Table (r226) for the item received.",
    tables: [
      {
        type: "simple-list",
        label: "Options",
        rows: [
          [
            "Friendly approach: The magician (ev5 cs3) insists you stay the night and tell him of your adventures. You must provide your own food for the day, as he has a small larder. He may be willing to discuss joining your party; see r342 if you wish to try. If you don't, or do and avoid a combat situation, he will give you a magic gift – consult r225, then roll on Line B of the Treasure Table (r226) for the item received.",
          ],
          [
            "Raid: The magician calls upon his powers to scatter your party to the wind. You suffer 1d6 wounds, one of which is poisoned. All of your followers flee, deserting you. You must abandon everything you cannot carry yourself. You will save any mount you are riding, and its loads, but no other mounts can be saved. A magician in your party can counter the effects by rolling a 5 or 6 on 1d6. If you have the Resistance Talisman (e184) you can block the spell and destroy the magician, at the cost of destroying the talisman. If you do, roll 1d6 for the wealth code of the magician: 1: wc5; 2–3: wc25; 4–5: wc60; 6: wc110.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e016a",
    title: "Magician's Enchantment",
    type: "magic",
    desc: "If the magician joins your party, in combat he may forfeit his attack for one round to enchant all weapons carried by your party, adding one (+1) to their combat skill. The magic lasts until the end of the combat.",
  },
  {
    tag: "e017",
    title: "Peasant Mob in Hot Pursuit",
    type: "combat",
    desc: "A large mob of angry farmers and villagers are after you! You're trapped and must fight your way out. There are 2d6×2 peasants (ev2 cs2) plus a leader (ev2 cs3 wc2). See r330 for the exact combat situation.",
  },
  {
    tag: "e018",
    title: "Priest",
    type: "npc",
    desc: "You encounter a local priest (ev3 cs3 wc15) leading a donkey by the reins. He seems aloof and not disposed to conversation, but he might be afraid of you. You can let him pass, ending this encounter, or select one of two options below.",
    note: "NOTE: If you do kill the priest in combat, roll 1d6: on a 5 or 6, he curses you with the 'Mark of Cain.' You must immediately roll 1d6 for each follower in your party: if you roll over your wit & wiles, that follower immediately deserts you. In addition, all monks and priests in the future will recognize the mark and will not join your party, and you can never seek an audience with the High Priest of any temple marked on the map. You may still do so with High Priests of any secret unmarked temples you find.",
    tables: [
      {
        type: "roll-table",
        label: "Priest",
        cols: ["roll", "talk", "fight"],
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
    tag: "e018a",
    title: "Mark of Cain",
    type: "event",
    desc: "If you do kill the priest in combat, roll 1d6: on a 5 or 6, he curses you with the 'Mark of Cain.' You must immediately roll 1d6 for each follower in your party: if you roll over your wit & wiles, that follower immediately deserts you. In addition, all monks and priests in the future will recognize the mark and will not join your party, and you can never seek an audience with the High Priest of any temple marked on the map. You may still do so with High Priests of any secret unmarked temples you find.",
  },
  {
    tag: "e018b",
    title: "Priest Abilities",
    type: "npc",
    desc: "If the priest joins your party, the holy protection he provides means all undead creatures (spectres, ghosts, warrior wraiths, vampires, etc.) must subtract one (−1) from their combat skill during attacks against your party.",
  },
  {
    tag: "e019",
    title: "Hermit Monk",
    type: "npc",
    desc: "You encounter a hermit monk (ev6 cs3) meditating in the wilderness. He seems to be ignoring you. You can select one of the options below.",
    note: "* Unless a priest or monk is with your party, reduce your wit & wiles by one (−1) temporarily when resolving these events, hermit monks listen poorly. † The encounter is not as it first appeared; roll 1d6 and resolve: 1–3: e020; 4–6: e021.",
    tables: [
      {
        type: "roll-table",
        label: "Hermit Monk",
        cols: ["roll", "talk", "evade", "fight"],
        rows: [
          ["1", "inquiry r342", "pass r325", "attack r305"],
          ["2", "conversation r341", "pass r325", "attack r305"],
          ["3", "plead comrades* r336", "pass r325", "attacked r306"],
          ["4", "plead comrades* r336", "pass r326", "attacked r306"],
          ["5", "pass r325", "surprised r310", "attacked r307"],
          ["6", "pass r325", "monk†", "surprised r308"],
        ],
      },
    ],
  },
  {
    tag: "e020",
    title: "Travelling Monk",
    type: "npc",
    desc: "You encounter a travelling monk (ev5 cs4 wc4). Roll 1d6: on a 5 or 6, he's accompanied by a second monk of equal ability. He seems eager to talk. Your options are:",
    tables: [
      {
        type: "roll-table",
        label: "Travelling Monk",
        cols: ["roll", "talk", "evade", "fight"],
        rows: [
          ["1", "conversation r341", "pass r325", "surprise r302"],
          ["2", "conversation r341", "pass r325", "attack r304"],
          ["3", "inquiry r342", "pass r326", "attack r305"],
          ["4", "plead comrades r336", "inquiry r342", "attack r305"],
          ["5", "plead comrades r336", "inquiry r342", "attacked r306"],
          ["6", "surprised r309", "escape r311", "attacked r306"],
        ],
      },
    ],
  },
  {
    tag: "e021",
    title: "Warrior Monks",
    type: "encounter",
    desc: "You encounter a party of grim-looking monks (ev6 cs6 wc10), bearing the armour and weaponry of a powerful military order. Roll 2d6 and take half (½) the total, rounded up, for the number in the group. Roll 1d6 again: on a 4 or more, they are all mounted as well. Your options are:",
    note: "* If your party has mounts, and the warrior monks do not, you may use escape mounted (r312) instead of rolling to resolve the evade option; if your party all have winged mounts and/or flying ability, you can use escape flying (r313).",
    tables: [
      {
        type: "roll-table",
        label: "Warrior Monks",
        cols: ["roll", "talk", "evade*", "fight"],
        rows: [
          ["1", "conversation r341", "pass r325", "surprise r301"],
          ["2", "inquiry r342", "hide r317", "surprise r302"],
          ["3", "pass r329", "hide r319", "attack r304"],
          ["4", "bribe-pass (10) r323", "escape r315", "attack r305"],
          ["5", "attacked r306", "bribe (10) r324", "attacked r306"],
          ["6", "attacked r306", "pass r329", "attacked r306"],
        ],
      },
    ],
  },
  {
    tag: "e022",
    title: "Druid",
    type: "npc",
    desc: "You encounter a druid (ev4 cs4 wc10) – a nature priest usually found in a forest. Roll 1d6: on a 6, the druid is female. The druid will ignore you and the encounter ends unless you wish to approach and select an option below. If the druid joins your party, roll 1d6 to see if he or she is carrying any useful healing remedies: 1: none; 2–4: 1d3 healing herbs; 5: e180; 6: e181.",
    note: "* If you roll a r335 or r340 on any of the talk tables, see r338 instead.",
    tables: [
      {
        type: "roll-table",
        label: "Druid",
        cols: ["roll", "talk*", "fight"],
        rows: [
          ["1", "plead comrades r336", "surprise r301"],
          ["2", "plead comrades r336", "surprise r303"],
          ["3", "plead comrades r337", "attack r304"],
          ["4", "conversation r341", "attack r305"],
          ["5", "inquiry r342", "attack r305"],
          ["6", "pass r325", "attacked r306"],
        ],
      },
    ],
  },
  {
    tag: "e022a",
    title: "Druid Abilities",
    type: "npc",
    desc: "In a forest hex, a druid can act as a guide (see r205a) and does not need an evening meal provided (r215), as they can always find food. However, the druid will leave your party if you enter any town or castle except halfling or elven. If you encounter any wolves (e075), wild boar (e083) or a hunting cat (e076), roll 1d6: on a 4 or more, the druid casts a spell to calm the animal(s) and they leave peacefully. A druid in your party may forage for healing herbs (see r293). In combat, the druid can use a lightning bolt attack (see e022b).",
  },
  {
    tag: "e022b",
    title: "Druid's Lightning Bolt",
    type: "magic",
    desc: "In combat, the druid may attack with a lightning bolt instead of a normal strike. Before the druid's attack, roll 1d6: on a 5 or 6, he invokes a powerful bolt from the sky – roll 1d6 for the number of wounds the target suffers. In combat against the druid, the lightning strikes a random character in your party (see r343); and if the druid has any wounds when he successfully casts the lightning bolt, he automatically escapes after it strikes.",
  },
  {
    tag: "e023",
    title: "Wizard",
    type: "npc",
    desc: "You meet a wizard (ev4 cs4 wc60), joined by a henchman (ev4 cs5 wc4). Roll 1d6: on a 3 or more, they are mounted on horses. The wizard seems old, but still active and perhaps quite powerful. If the wizard joins your party, during the evening meal he confides in you that he knows the location of a valuable treasure. According to his information, it is 1d6 hexes away in a random direction (r204g). Once there, consult e026 for how to find the treasure.",
    tables: [
      {
        type: "roll-table",
        label: "Wizard",
        cols: ["roll", "talk", "evade", "fight"],
        rows: [
          ["1", "inquiry r342", "pass r325", "attack r305"],
          ["2", "inquiry r342", "pass r325", "attacked r306"],
          ["3", "conversation r341", "bribe-pass r321", "see e024"],
          ["4", "see e024", "escape r314", "see e024"],
          ["5", "pass r328", "escape r313", "surprised r308"],
          ["6", "ally r334", "see e024", "attacked r307"],
        ],
      },
    ],
  },
  {
    tag: "e023a",
    title: "Wizard's Fireballs",
    type: "magic",
    desc: "In combat (r220), the wizard may choose to strike with fireballs instead of making a normal attack. Before the wizard's strike, roll 1d6: on a 5 or 6, he slings a volley of fireballs – roll 1d3 for the number of wounds each character in the opposing party suffers. If you are in combat against a wizard, he will attempt to use fireballs before each of his attacks; if he has any wounds when he successfully casts the fireballs, he automatically escapes when the last fireball hits.",
  },
  {
    tag: "e024",
    title: "Wizard Attack",
    type: "magic",
    desc: "The wizard attempts to use magic and take control of you and your party. Roll 1d6: if you roll equal to or over your wit & wiles, his attack is successful and all your followers become slaves of the wizard and are lost to you – he captures all their wealth, possessions, and mounts too; if you roll under your wit & wiles, he fails to capture them, and your entire party escapes instead (r218). If your followers became slaves, roll 1d6 again: if you roll over your wit & wiles, you too are captured by the wizard; if you roll equal to or under your wit & wiles, you escape (r218). If you are captured, you lose all your possessions, wealth, and mount. Each day you are a slave, instead of a normal daily action, you can do nothing – you are being moved around by the wizard. Roll for a random direction (r204g); he will only move 1 hex per day. For every 3 days you spend as a wizard's slave, you suffer 1 wound due to starvation and overwork. At the end of each day as a slave (including the end of the day you are captured), you can roll 1d6 for an escape attempt: on a 6, you escape immediately (r218); on a 1, you are caught trying to escape and suffer 1 wound from the wizard's cruel punishment; on a 2–5, no suitable escape opportunity arises. If you finally escape, you do so only with your broadsword – forced to leave behind all money, food, and followers.",
  },
  {
    tag: "e025",
    title: "Wizard's Apprentice",
    type: "npc",
    desc: "You meet the wizard's young apprentice (ev4 cs3), who is eager to leave the confines of the tower. He will join your party if you let him, and he has brought a magical item to help – roll on Line B of the Treasure Table (r226). He might also know of clues to a nearby treasure, but is not all that clear on the details; see e026 and subtract one (−1) from the roll. The apprentice is still practicing his magical studies; at the start of an event, roll 1d6: on a 5 or 6, the apprentice recalls his studies and can serve as a wizard (see e023) for the duration of the event. If you let the apprentice join your party, you must escape the wizard's tower (r218a) and then roll 1d6: if you roll over your wit & wiles, the wizard sends out fireballs (e023a) after you in anger. You can never return to the tower.",
  },
  {
    tag: "e026",
    title: "Search for Treasure",
    type: "treasure",
    desc: "You believe you have found the proper location of a treasure. You now must spend one day searching for the precise spot. At the end of that day, roll 1d6: 1–2: the information was bogus and you found nothing; 3: e027; 4: e028; 5: e029; 6: clues suggest the treasure is in a random adjacent hex (r204g) – after you arrive there, roll on this event again.",
  },
  {
    tag: "e027",
    title: "Ancient Treasure",
    type: "treasure",
    desc: "You find an ancient treasure (wc110), long thought to be lost; see r225. Roll 1d6: on a 1 or 2, it is protected by a trap (r227).",
  },
  {
    tag: "e028",
    title: "Cave Tombs",
    type: "location",
    desc: "Amid the howling winds on a craggy cliff, you find caves, and within the caves, the tombs of an ancient race. You can decide to avoid them, ending this event, or you can continue inward and investigate the tombs. If you continue inward, roll 1d6 (if you have a dwarf with you, roll twice and choose either result): 1: e030; 2: e031; 3: e032; 4: e033; 5: e034; 6: e029.",
  },
  {
    tag: "e029",
    title: "Danger & Treasure",
    type: "treasure",
    desc: "You sense that both danger and treasure are close at hand. Roll 1d6: 1: e028; 2: e032; 3: e036; 4: e037; 5: e038; 6: e044.",
  },
  {
    tag: "e030",
    title: "Mummies",
    type: "combat",
    desc: "You discover dried mummies of a long-lost race. Although a scholar may be interested, you aren't, because amid the dust and rot you find just 1 gold piece! However, if you are in a desert hex, roll 1d6: on a 4 or more, 1d3 mummies (ev4 cs5) arise and attack (r308)! Due to their rotting flesh, all the wounds they inflict are poisoned (r222).",
  },
  {
    tag: "e031",
    title: "Looted Burial Chamber",
    type: "treasure",
    desc: "You find the partially looted burial chamber of a long-dead prince. Under his tomb you find an undiscovered secret compartment, but it has a trap lock. Roll 1d6: under your wit & wiles, you have outwitted the trap; equal to or over your wit & wiles, see r227 for the injuries it may inflict. If you survive the trap (if any), you find a treasure worth wc50 and a decayed enamel box holding a very old Gift of Charm (e182) – roll 1d6: on a 5 or 6, the gift crumbles into worthless dust as you lift it from the box; on a 4 or less, the Gift of Charm is still good.",
  },
  {
    tag: "e032",
    title: "Ghosts",
    type: "combat",
    desc: "A group of 1d6+1 ghosts (ev2 cs4)* surprise you in combat (r220). They are guarding an ancient altar. If you kill all the ghosts, you can investigate the altar, if you wish. If you do, roll 1d6: 1: e037; 2: e039; 3: e041; 4: e042; 5: e044; 6: nothing.",
    note: "* If there is a priest in your party, the ghosts have cs3.",
  },
  {
    tag: "e033",
    title: "Warrior Wraiths",
    type: "combat",
    desc: "Shadowy wraiths of 1d3+2 long-dead warriors (ev9 cs6)* assault your party, striking first in combat (r220) against you. If all are killed, you find they are guarding plunder from an ancient battle, roll 1d6 to determine the wealth code of this treasure: 1: wc25; 2: wc50; 3: wc60; 4: wc70; 5–6: wc100; see r225 for details.",
    note: "* If there is a priest in your party, the wraiths have cs5.",
  },
  {
    tag: "e034",
    title: "Spectre of the Inner Tomb",
    type: "combat",
    desc: "Looking around the atrium of an old tomb, you notice a hidden passage to the interior. You pass within, but it is a long hall, taking the rest of the day to explore. You sense the presence of a restless spectre. You can either retreat now or continue. If you retreat, the event ends. If you continue, then at the end of the day, before the evening meal, you finally reach the inner tomb to find…",
  },
  {
    tag: "e034a",
    title: "The Spectre",
    type: "combat",
    desc: "From out of the darkness, the spectre appears. Roll 1d6: on a 6, see e200c; on a 5 or less, the spectre (ev3 cs7)* can only be hurt by poisoned wounds (normal wounds have no effect) or by wounds from a magic sword. A magician, monk, priest, witch, or wizard will have magical weapons that can harm the phantasmal creature. If you kill the spectre, roll 1d6 for the wealth of the treasure it guarded: 1: wc5; 2: wc12; 3–4: wc25; 5: wc60; 6: wc110; see r225 for details.",
    note: "* If there is a priest in your party, the spectre has cs6.",
  },
  {
    tag: "e035",
    title: "Spell of Chaos",
    type: "magic",
    desc: "A guardian spell of chaos is activated as your party passes within. If you have a wizard, magician, or witch with you, roll 1d6: on a 4 or more, they have magical protection that renders the spell harmless; on a 3 or less, or don't have one of these characters with you, then you and your entire party become mindless idiots. They will all wander away, so you lose all followers and possessions except for your own mount, and any wealth and possessions you personally carry. You do not eat an evening meal and begin to suffer the effects of starvation (r216). At the start of tomorrow, roll 1d6−1 for the number of days you remain mindless and wandering: if the result is 0, you have recovered; otherwise, each day, move one hex in a random direction (r204g). You have no travel events while wandering and will not eat. When your mind finally returns, you can begin to recover normal function again at the start of the next day.",
  },
  {
    tag: "e036",
    title: "Golem at the Gate",
    type: "combat",
    desc: "You become separated from the rest of your party during the search. You notice the gateway of a ruined temple and pass through it. A huge golem (ev8 cs6) appears before you, made entirely of living stone. It raises its sword and strikes first in combat (r220). If you kill the golem, roll 1d6 for the next event: 1: e038; 2: e040; 3: e043; 4: e044; 5: e046; 6: e027. If you escape (r220e) from the golem in combat, you lose the rest of your followers and all mounts; only you make it out, with just the items and personal wealth you have on you. If you defeat the golem and survive subsequent events without escaping (r218), you re-join your party for the evening meal (r215).",
  },
  {
    tag: "e037",
    title: "Broken Chest",
    type: "treasure",
    desc: "You find a chest with a broken and cracked lid. Sorting through old mouldering cloths, roll 1d6 to see what you find: 1: e180; 2: e181; 3: e182; 4: e184; 5: e186; 6: e189.",
  },
  {
    tag: "e038",
    title: "Cache Under Stone",
    type: "treasure",
    desc: "By chance, you overturn a stone slab. Jumping back as it crashes to the ground, you see you've uncovered an old cache of rotting food and other items. Roll 1d6 to see if there's anything of value here: 1: e180; 2: e181; 3: e182; 4: e185; 5: e187; 6: e190.",
  },
  {
    tag: "e039",
    title: "Treasure Chest",
    type: "treasure",
    desc: "You find a locked chest and know that it may be trapped. If you decide to open it, roll 1d6: on a 3 or more, it does have a trap lock (r227). If you survive the trap (if any), and open the chest, roll 1d6: on a 6, the chest is empty; on a 5 or less, it contains a treasure worth wc60 (see r225 for details) – the treasure may include a special possession (if you roll a pegasus winged mount, it is instead an item with a winged pegasus emblem; roll 1d6 again and refer to Line A of the Treasure Table for the actual item found).",
  },
  {
    tag: "e040",
    title: "Treasure Chest",
    type: "treasure",
    desc: "You find a locked treasure chest protected by a trap. You can either ignore it or attempt to open it anyway. If you try to open it, roll 1d6: if you roll over your wit & wiles, you have bungled and sprung the trap (r227). If you survive the sprung trap (if any), and open the chest, roll 1d6 to determine the wealth code of the contents (see r225 for details): 1: wc5; 2: wc25; 3: wc50; 4: wc60; 5: wc70; 6: wc100. Any result that includes a pegasus winged mount as a possession actually is a pegasus talisman, which you can keep. Whenever you have any magician, wizard, witch, priest, or monk in your party, they can help you use the talisman to call upon an actual pegasus (e188), which will immediately appear and serve as your mount (see r204d for details on airborne travel).",
  },
  {
    tag: "e041",
    title: "Vision Gem",
    type: "magic",
    desc: "You find a large, fixed stone with multiple facets. You gaze into it without thinking and find you can see elsewhere. Roll 1d6 for what it is you discover: 1: e143; 2: e144; 3: e145; 4: e146; 5: e147; 6: e176.",
  },
  {
    tag: "e042",
    title: "Alcove of Sending",
    type: "magic",
    desc: "You find a small alcove inscribed with runes. If your party includes a magician, witch, or wizard, the runes can be deciphered, and the alcove's secret put to use. Otherwise, this event ends. The secret of the alcove is simple: it sends voices and thoughts. Using it, you can command an audience with either a High Priest (e155), the Mayor of a town (e156), Lady Aeravir of Aeravir Castle (e160), or Count Drogat of Drogat Castle (e161). You are temporarily transported to that location for the audience, and will return at the end of that day, just before the evening meal, regardless of where you are. Followers given from an audience cannot return with you and are lost. After use, the alcove needs many months to recharge, so it cannot be used again during the game (another alcove, if found, could be).",
  },
  {
    tag: "e043",
    title: "Small Altar",
    type: "magic",
    desc: "You find a modest, stone altar with an arcane symbol carved onto it, and an artifact resting on the altar top. Roll 1d6 to determine what item has been placed there: 1: e186; 2: e189; 3: e191; 4: e192; 5: e193; 6: e194. There appears to be a spell of protection shimmering around the altar. If your party includes a magician, witch, or wizard, then they recognize the symbol, and can determine the nature of the protective magic – roll 1d6 on the list below and then decide if you want to approach the altar. If your party does not include a magician, witch, or wizard, then to retrieve the item, you must approach the altar before rolling for the effect on the list below. You can also choose not to risk it, turn back, and end the event.",
    tables: [
      {
        type: "roll-table",
        label: "Altar Protection",
        cols: ["Roll 1d6", "Effect"],
        rows: [
          [
            "1–2",
            "Magic shock field – No one can pass through and reach the altar, and anyone who tries automatically suffers 1 wound when repulsed.",
          ],
          [
            "3–4",
            "Magic fire – Roll 1d6 and suffer that many wounds as you breach the spell's boundary. You can then retreat without reaching the altar, or brave the fire further to recover the item, and roll 1d6 again for the wounds suffered from this prolonged exposure.",
          ],
          [
            "5",
            "Poison air – Roll 1d6 and suffer that many poisoned wounds, but the item on the altar can be recovered in the process.",
          ],
          [
            "6",
            "Fear spell – The magic aura makes anyone who approaches fear a great evil protecting the altar, while in reality the fear spell can do no harm. Roll 1d6: on a 6, you and your party run from the altar without retrieving the item; on a 5 or less, you steel yourself to the fear inside, take the item, and return without injury.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e044",
    title: "High Altar",
    type: "magic",
    desc: "You find a high altar of godly power. If any character in your party is a priest or monk, he will know the invocations to use at this altar. You can ask him to perform the rites and roll 1d6 to see what happens. If you do not ask him, or your party lacks such a follower, the event ends.",
    tables: [
      {
        type: "roll-table",
        label: "High Altar",
        cols: ["Roll 1d6", "Result"],
        rows: [
          ["1", "The monk or priest is engulfed in godly fires and dies."],
          [
            "2",
            "Lightning and earthquakes destroy the high altar; roll 1d6 for each character in your party, and suffer that many wounds due to flying stones and fire. Lose 1 luck.",
          ],
          [
            "3",
            "The monk or priest is struck with 1 wound and discovers it was the altar to the wrong god; more invocations are impossible here.",
          ],
          [
            "4",
            "The voices of the gods sound forth with a riddle only you can understand. Gain 1 luck point. No more invocations are possible.",
          ],
          [
            "5",
            "The voices of the gods give a prophecy that seems to promise a treasure; see e147.",
          ],
          [
            "6",
            "A radiant god appears, issuing thunderbolts and flames, pledging support to your cause. In an astral vision, you see the gods striking down the usurpers to your throne and telling Northlands priests that your reign shall be holy. You will regain your throne and win the game if you can return alive to the Northlands (any hex north of the Tragoth River) within the next 30 days. However, directly experiencing the power of the gods has weakened your human form, permanently reducing your endurance by one (−1). In gratitude for the godly support, you must give all your money away to the gods of the altar instantly or be struck down dead.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e045",
    title: "Arch of Travel",
    type: "magic",
    desc: "You find a metal-banded archway inscribed with runes. If any character in your party is a magician, witch, or wizard, the runes can be read and the arch used, if you wish. Otherwise, the event ends. If you can use the arch, you can travel through it instead of making a normal daily travel action. Travelling through the arch allows you to make a magical transfer to any other hex on the map that you wish. However, you travel forward in time as well, as 1d6 days pass when you use the arch; advance the time track by that many days and continue play by rolling for a possible travel event in the new hex (r204). You cannot get lost by travelling through the arch. As long as your party continues to have a magician, witch, or wizard, you can return to this hex and use the arch again and again. However, arch travel is one way only, from the arch to another hex, and never the other way around!",
  },
];
