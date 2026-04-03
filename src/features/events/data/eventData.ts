import type { Event } from "../types/EventType";

export const eventData: Event[] = [
  {
    tag: "e001",
    title: "The Adventure Begins",
    type: "story",
    desc: "Evil events have overtaken your Northlands Kingdom. Your father, King Hendryc Arath, is dead – assassinated by rivals to the throne. These usurpers now hold the palace with their mercenary royal guard. You have escaped and must collect 500 gold pieces to raise a force to smash them and retake your heritage. Furthermore, the usurpers have powerful friends overseas. If you can't return to take them out in ten weeks, their allies will arm, and you will lose your kingdom forever. Now consult r202 to determine your starting attributes (r201) as the Barbarian Prince, and then return to this event and read on: To escape the mercenary royal guard, your loyal body servant Ogab smuggled you into a merchant caravan to the southern border. Roll 1d6 to see where the caravan takes you, while poor Ogab faces the wrath of the royal guards back home.",
    note: "If you finish daily actions on any hex north of the Tragoth River, the mercenary royal guardsmen may find you. After any normal events are concluded, but before you take your evening meal (see r215), you must roll 1d6: on a 4 or more (3 or more if you are in Ogon or Weshor) go to e002.",
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
          ["5", "escape r335", "escape r315", "surprised r308"],
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
  {
    tag: "e046",
    title: "Gateway to Darkness",
    type: "location",
    desc: "You have discovered one of the dreaded black portals. Any follower in your party who joined you south of the Tragoth River will instantly recognize it. If you can't recognize it, or decide not to use it, this event ends. The Gateway to Darkness is timeless and feeds on death. If you enter it, you must abandon all your followers and mounts, since it only accepts one living creature at a time. As you step in, a gateway guardian (ev7 cs7) strikes first at you in combat (r220). You must fight to the death, you cannot escape. If you kill the guardian, you emerge from the other side of the gateway into the same hex you left, however, you have travelled 2d6 days backwards in time; reverse the time track by that many days. You have lost your followers because they are stuck in the future, in another part of the time stream. Even though you have travelled backwards in time, all the gold, possessions, etc. you acquired still apply, for the gateway thrives on paradoxes. You can enter the portal more than once, if you wish. However, each time you enter there, is a new guardian waiting within, plus all the ones you previously killed have come back to life. Therefore, the second time you enter there are always two guardians, the third time there are always three guardians, and so on. Having once entered the portal, you know its secret too, and can use it even if you have no longer have any followers from south of the Tragoth.",
  },
  {
    tag: "e047",
    title: "Mirror of Reversal",
    type: "combat",
    desc: "You see an old mirror, and looking into it, discover yourself twisted into an evil shape. This thing leaps from the mirror and attacks you, getting the first strike in combat (r220). It has the same combat skill and endurance as yourself and has the same possessions and gold. If you have any followers, you can call for their aid in the battle, but for each strike a follower makes on the mirror-thing, roll 1d6: on a 5 or 6, the follower strikes you by accident (mistaking you for your double). If you kill the creature, the battle ends, and you permanently add one (+1) to your wit & wiles by gaining a fuller understanding of yourself in this contest. In addition, you double your possessions and wealth, naturally, by gaining all that the mirror-thing possessed.",
  },
  {
    tag: "e048",
    title: "Fugitive",
    type: "npc",
    desc: "You encounter a person trying to avoid local justice. He or she will join your party as an ally but will desert whenever you encounter any constables (unless your party elects to fight and kill them all) or whenever you enter any settlement. Instead, you can immediately elect to fight the fugitive; if you do so, see r300. If you are north of the Tragoth River, see e025, otherwise roll 1d6 to see exactly who you meet.",
    tables: [
      {
        type: "roll-table",
        label: "Fugitive",
        cols: ["Roll 1d6", "Result"],
        rows: [
          [
            "1",
            "Swordsman adventurer (ev7 cs7 wc1) – Roll 1d6 again: on a 6, she is a swordswoman (ev6 cs7 wc4), and you become lovers (r228).",
          ],
          [
            "2",
            "Runaway slave (ev4 cs2) – Roll 1d6 again: on a 6, she is a slave woman and you become lovers (r228). She can act as a local guide within 5 hexes in any direction of where you found her.",
          ],
          [
            "3",
            "Priest (ev3 cs3 wc10) – He gives you half (½) his wealth in gratitude (r225) and can act as a guide for you if you desire.",
          ],
          [
            "4",
            "Magician (ev2 cs3 wc5) – He will give you free advice that may lead to treasure. According to his information, it is 1d6 hexes away in a random direction (r204g). Once there, consult e026 for how to find the treasure.",
          ],
          [
            "5",
            "Merchant (ev3 cs2) – He can act as a guide if you desire, and will help you bargain properly for purchases as long as he remains in your party. As a result, you only end up paying half (½) the normal price for anything you buy or any bribes you make, rounded up. Hiring and paying followers must still be at the normal rates. Roll 1d6 again: on a 5 or 6, he has a horse as well.",
          ],
          [
            "6",
            "Army deserter (ev4 cs4 wc2) – Roll 1d6 again: on a 5 or 6, he also has a horse.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e049",
    title: "Travelling Minstrel",
    type: "npc",
    desc: "You meet a minstrel (ev3 cs2 wc4). You can ignore him and end this event or invite him to dinner (r215). In the latter case, you must give him 1 food unit or he deserts; if fed, he'll sing a tale that night that prevents anyone in your party from deserting, no matter what events happened today, and even if your followers are not properly fed or lodged (r217). After the meal and music, you may start a conversation, if you wish (r341). If he joins your party, his ability to prevent desertions can be used just once more during the game, on any day you wish.",
  },
  {
    tag: "e050",
    title: "Local Constabulary",
    type: "encounter",
    desc: 'This event only applies if you are within 3 hexes of a settlement, otherwise there is no event. If the nearest settlement is Ogon (0101) or Weshor (1501), see e002 instead. You encounter 1d6+1 local law enforcement officers (c5 e4 w4). Roll 1d6: on a 5 or 6, they are mounted. If they are on foot instead, add two (+2) to the number of officers encountered. Select your option below and roll the die. Add two (+2) to the roll if you have visited the nearest settlement before and did not leave it by an escape (r218). If you escaped, you are undoubtedly a "wanted" man, so you get no bonus. If you have never visited the nearest settlement before, you can add one (+1) to the roll.',
    note: "* If your party has mounts, and the constabulary does not, you can use escape mounted (r312) instead of rolling to resolve the evade option; if your party all have winged mounts and/or flying ability, you can use escape flying (r313) instead. † You may surrender instead of fighting – move to the nearest settlement and see e060.",
    tables: [
      {
        type: "roll-table",
        label: "Local Constabulary",
        cols: ["roll", "talk", "evade*", "fight"],
        rows: [
          ["1", "surprised r308", "attacked† r306", "surprised r308"],
          ["2", "attacked† r306", "hide r320", "attacked† r307"],
          ["3", "bribe-pass (10) r322", "escape r311", "attacked† r306"],
          ["4", "bribe-pass (15) r323", "escape r315", "attack r305"],
          ["5", "pass r329", "hide r318", "attacked† r304"],
          ["6", "attacked† r306", "attacked† r305", "surprise r303"],
          ["7", "pass r325", "pass r325", "surprise r302"],
          ["8", "pass r326", "pass r325", "surprise r301"],
        ],
      },
    ],
  },
  {
    tag: "e051",
    title: "Bandits",
    type: "combat",
    desc: "You are ambushed by bandits, who surprise you in combat (r220). The number of bandits (ev4 cs5 wc1) exceeds the number of characters in your party by two, including the leader (ev6 cs6 wc15).",
  },
  {
    tag: "e052",
    title: "Goblins",
    type: "encounter",
    desc: "You sight a band of 2d6 goblins (ev3 cs3 wc1) in the distance. You can see an additional member of the band, who seems to be their hobgoblin leader (ev5 cs6 wc5). You saw them first, so you can either escape (r218) from the area or attempt to follow them (r219). If you follow them, after the follow movement, roll 1d6: if you roll over your wit & wiles, the band discovers you and attacks, but your party will get the first strike in combat (r220); if you roll equal to or under your wit & wiles, you remain out of sight – roll 1d6 to see where they lead you: 1: e054; 2–6: e053.",
  },
  {
    tag: "e053",
    title: "Campsite",
    type: "location",
    desc: "Roll 2d6 on the list below for the campsite location. You may then elect to fight the characters encountered at the campsite, or not. If you don't, unless otherwise indicated in a previous event, you must hide (r218) in the hex until tomorrow. If you elect to fight the characters encountered and kill them, you gain control of their campsite.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll 2d6", "Result"],
        rows: [
          [
            "2",
            "The campsite is at a small altar; if you gain control, see e043.",
          ],
          [
            "3",
            "The campsite is at an unknown ruins; if you gain control, see e064.",
          ],
          [
            "4",
            "The campsite is outside the entrance to cave tombs; if you gain control, see e028.",
          ],
          [
            "5",
            "The campsite is the rendezvous point of another party of the same size; you must roll 1d6: over your wit & wiles, they discover you and attack, although you get the first strike in combat (r220); equal to or under your wit & wiles, they don't discover you – roll 2d6 on this list again.",
          ],
          ["6–8", "The campsite in in open ground; no special event here."],
          [
            "9",
            "The campsite is hidden by terrain and vegetation; if you gain control of it, roll again to see exactly where it is (if this result occurs again, roll again until you get another result).",
          ],
          [
            "10",
            "The campsite is at a small building; if you gain control, you may choose to investigate. Roll 1d6 for event: 1: e042; 2: e037; 3: e038; 4: e039; 5–6: nothing.",
          ],
          [
            "11",
            "The campsite is near a place where you sense magic; if you gain control, you must immediately roll 1d6: 1: e032; 2: e036; 3: e043; 4: e044; 5: e045; 6: e046.",
          ],
          [
            "12",
            "The campsite is near a place of hidden magic; if you gain control and have a druid, priest, monk, magician, witch, or wizard in your party, roll 1d6: 1: e041; 2: e036; 3: e043; 4: e044; 5: e045; 6: e046. If you do not have one of these characters with you, do not roll.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e054",
    title: "Goblin Keep",
    type: "location",
    desc: "You see a fortified tower, the keep of a Goblin King. The area is swarming with hundreds of goblins. You decide to flee, but a band of goblins has already seen you. They charge forward with screams and howls. If you are unable to escape from this hex (r218) for any reason or decide not to resist, you are captured; see e061. If you try to escape, first make your escape move (r218), then roll 1d6 to see if you elude your pursuers. If your wit & wiles exceeds the roll, you lose them and the event ends; otherwise, you must either surrender (go to e061 and return to the keep hex) or fight them. If you fight, roll 1d6×3 for the number of goblins (ev3 cs3 wc1) plus their hobgoblin leader (ev5 cs6 wc4). You can strike first in combat (r220), but you cannot escape – you must fight to the death or else surrender (e061). If you kill them all, your escape is made good, and this event ends. If you return to the hex of the Goblin King's keep any time later in the game, you will be captured automatically by the goblins (e061).",
  },
  {
    tag: "e055",
    title: "Orcs",
    type: "encounter",
    desc: "You sight a band of 2d6 orcs a ways off. One is a chieftain (ev6 cs5 wc7) and the rest are warriors (ev5 cs4 wc1). You can either fight (r303), escape (r218) from the area or attempt to follow them (r219). If you follow them, after the follow movement, roll 1d6: over your wit & wiles, the orcs discover you and attack, but your party gets first strike in combat (r220); equal to or under your wit & wiles, they don't discover you – roll 1d6 to see where they lead you: 1: e056; 2–6: e053. If they lead you to a campsite, you can either avoid them by escaping to an adjacent hex (r218) or you can make a surprise attack in combat (r220) against them at their campsite.",
  },
  {
    tag: "e056",
    title: "Orc Tower",
    type: "location",
    desc: "You see the dark tower of an orc warlord. The area is teeming with orcs and worse things. You are spotted by a war patrol, made up of 1d6+1 orcs (ev5 cs5 wc2) and led by a demi-troll (ev7 cs8 wc10). You can surrender to them (e061), try to escape (r218) or attack (r306).",
  },
  {
    tag: "e057",
    title: "Troll",
    type: "combat",
    desc: "A huge stone-skinned troll confronts your party. Roll 1d6: over your wit & wiles, the troll (ev8 cs8 wc15) strikes first in combat (r220); equal to or under your wit & wiles, you strike first. The troll's skin has regenerative properties, allowing it to automatically heal 1 wound at the end of each round until you bring it to zero (0) wounds. If you kill the troll, its stone skin is a valuable item. When you have an opportunity to buy food at a settlement or from merchants, you can sell the Trollskin for 50 gold. It is also known that Count Drogat of Drogat Castle will treasure the gift should you manage to get a personal audience with him. The Trollskin counts as 1 load for transport.",
  },
  {
    tag: "e058",
    title: "Band of Dwarves",
    type: "encounter",
    desc: "You encounter a group of 1d6+1 dwarves (ev6 cs5 wc10). If your party has fewer members than the dwarf band, you spot them first, and can either follow them (r219), hide (r218b), or escape from them (r218a) as you wish, or encounter them, using one of the three options below. If your party is equal in size or larger, they spot you first and you must encounter them.",
    note: "* If your party has mounts, you can use escape mounted (r312) instead of rolling to resolve the evade option. FOLLOWING: After following the band of dwarves, roll 1d6: equal to or over your wit & wiles, they discover you and attack, striking first in combat (r220); under your wit & wiles, the dwarves do not discover your party – roll 1d6 to see where they end the day: 1: dwarf mines, e059; 2–6: campsite, e053.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["roll", "talk", "evade*", "fight"],
        rows: [
          ["1", "inquiry r342", "escape r311", "surprise r302"],
          ["2", "bribe-join (30) r331", "escape r314", "surprise r303"],
          ["3", "bribe-hire (10) r332", "escape r315", "attack r304"],
          ["4", "hirelings r339", "hide r317", "attack r305"],
          ["5", "pass r328", "hide r319", "attacked r306"],
          ["6", "attacked r306", "attacked r306", "surprised r308"],
        ],
      },
    ],
  },
  {
    tag: "e059",
    title: "Dwarf Mines",
    type: "location",
    desc: "You see the entrance to a great underground castle mined out of the earth by dwarves. Dwarven constables and patrols quickly intercept your party. Roll 1d6, subtracting one (−1) if there is a dwarf in your party, and adding one (+1) if there is an elf: over your wit & wiles, you and your party are arrested immediately, see e060; equal to or under your wit & wiles, they let you pass and you enter the incredible castle mines. There you can undertake any actions and activities allowed in a castle (r203), including Seek an Audience with the Dwarf Lord (r211g) who rules the mines. Like any castle, you must spend the normal amounts for food (r215) and lodging (r217). Anyone you meet or hire in the mines will be dwarves. If you have a dwarf in your party, add one (+1) to Seek News & Information (r209) rolls here.",
  },
  {
    tag: "e059a",
    title: "Audience with the Dwarf Lord",
    type: "location",
    desc: "You have an audience with the Lord of the mines. Roll 1d6 for the result, and add one (+1) if you give a gemstone (e142) to the Dwarf Lord.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll 1d6", "Result"],
        rows: [
          ["1", "He is insulted; see e060 immediately."],
          [
            "2",
            "He hears your story, but remains stone-faced – unwilling or unable to help. However, you are free to seek further audiences with him.",
          ],
          [
            "3",
            "He hears your story and gives you free food and lodging for tonight, as a distinguished (if dispossessed) visitor from the north. You are free to seek further audiences with him.",
          ],
          [
            "4",
            "He hears your pleas with favour, and gives you a purse of 50 gold pieces. You cannot seek further audiences with him until next week.",
          ],
          [
            "5",
            "He hears your story with interest and tells you rumours of lost dwarf mines 1d6 hexes away in a random direction (r204g). If you go there, see e067. You cannot seek further audiences with him.",
          ],
          [
            "6+",
            "If your party includes a dwarf, he will support your cause. If not, he dismisses you, and refuses any further audiences until you have a dwarf in your party. If he supports your cause, he will give you gems (e142), and one of his trusted dwarf warriors (ev7 cs6) to join your party. You cannot seek further audiences with him.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e060",
    title: "Arrested",
    type: "event",
    desc: "You and your party are arrested by an overwhelming force and cannot resist. You are thrown in jail – roll 1d6 for the gravity of the sentence: 1 or less: e061; 2: e062; 3–4: e063; 5–6: e060a.",
  },
  {
    tag: "e060a",
    title: "Minor Offence",
    type: "event",
    desc: "You are held overnight, along with your entire party, although the jailers do provide food and lodging, of a sort. In the morning, you are fined 10 gold, plus a jailing cost of 2 gold per character (including yourself) and 1 gold per mount. Any you pay for are released, the others are left in jail and lost permanently. If you cannot pay for anyone's release (not even yourself), you are all imprisoned (e063).",
  },
  {
    tag: "e061",
    title: "Marked for Death",
    type: "event",
    desc: 'You are found guilty of a very grave offence, and the death penalty is demanded. Until then, you and your party are imprisoned. All your money, possessions, and mounts are confiscated and permanently lost. You are provided with food and "lodging" while in prison. At the start of each day in prison, roll 1d6: on a 1, you manage to escape (see below for details); on a 6, you must finally meet the headsman and are put to death; on a 2–5, your imprisonment continues.',
    tables: [
      {
        type: "simple-list",
        label: "Escape",
        rows: [
          [
            "If you escape from prison, roll 1d6 for each other character in your party imprisoned with you: 1–2: they are part of the escape and join you; 3–6: they are unable to join the escape or have already been executed. Once the size of your party is set, use the escape rules (r218) to determine where you end up. The escape takes the entire day, and afterwards, you must prepare for the evening meal (r215).",
          ],
        ],
      },
    ],
  },
  {
    tag: "e062",
    title: "Thrown in the Dungeon",
    type: "event",
    desc: "You are thrown into a deep dungeon. Other members of your party are imprisoned or sold as slaves, and are permanently lost to you (except for a true love, see r228). You lose all wealth, possessions, and mounts. While in the dungeon, you are provided with food and lodging (of a sort). At the start of each day in the dungeon, roll 2d6 and add one (+1) for each full week you have been in the dungeon: on an 11 or more, you escape (r218) that day; on a 10 or less, you continue to languish in captivity. Each full week (7 days) you spend in the dungeon inflicts 1 poisoned wound on you, due to unhealthy conditions, disease, and gradual weakness and starvation. While you languish in the dungeon, you do not need to make a poisoned wound roll (see r222b) every evening like you normally would. If you escape, it takes the entire day, with just enough time to reclaim your broadsword, Bonebiter, but no other wealth, mounts, or other possessions. After escaping, you must find food (r215).",
  },
  {
    tag: "e063",
    title: "Imprisoned",
    type: "event",
    desc: "You and your party are imprisoned. All your money, possessions, and mounts are confiscated and lost permanently. Whilst in prison, you are provided with food and lodging (if you can call it that). At the start of each day, roll 1d6 and add one (+1) for each full week you have been in prison: on a 6 or more, you escape; on a 5 or less, you remain captive. If you escape, roll 1d6 for each follower in your party: on a 1 or 2, they escape with you; on a 3 or more, they cannot escape and are lost to you permanently. When you escape, see r218. The escape takes the entire day, and after escaping, you must find food for the main meal (r215).",
  },
  {
    tag: "e064",
    title: "Ruins",
    type: "location",
    desc: "You discover hidden ruins. You can undertake a search action in them (r208) on any following day you are in the hex, just as if they were ruins marked on the map.",
  },
  {
    tag: "e065",
    title: "Hidden Village",
    type: "location",
    desc: "You discover a previously unknown village. You can undertake any normal actions there, as if it were a village on the map (r203), including for food (r215) and lodging (r217). However, due to the isolation of this settlement, you cannot Seek News (r209) here.",
  },
  {
    tag: "e066",
    title: "Secret Temple",
    type: "location",
    desc: "You find a secret temple of an obscure and feared cult. Before you can do anything, a large group of guardian monks surrounds you. Roll 1d6: equal to or over your wit & wiles, you and your party are arrested – see e060 and subtract one (−1) from the roll when resolving that event; under your wit & wiles, you talk your way past the guardians, and you can stay at the temple as if it were a normal temple marked on the map, including for food (r215) and lodging (r217) and all daily actions allowed at a temple (r203). If you later return to this temple, the guardians will continue to permit you free entrance, with no new die rolls needed. However, if you kill anyone while in this temple hex, or escape (r218) from it, the next time you enter, you are immediately arrested by the guardian monks; see e060 and subtract two (−2) from the roll when resolving that event.",
  },
  {
    tag: "e067",
    title: "Abandoned Mines",
    type: "location",
    desc: "You come across seemingly abandoned mines that look like they were once inhabited by dwarves. You can avoid them, ending this event, or you can enter and investigate further. If you enter, roll 1d6 for what you find within: 1: e059; 2: e051; 3: e046; 4: e045; 5–6: e028.",
  },
  {
    tag: "e068",
    title: "Wizard's Abode",
    type: "location",
    desc: "You discover a wizard's home. Roll 1d6: 1–2: e023 (but the wizard has 1d6 henchmen and wc110 instead); 3–4: e016 and roll 1d6 for your approach: even is friendly, odd is raid; 5–6: e068a.",
  },
  {
    tag: "e068a",
    title: "Wizard Tower",
    type: "location",
    desc: "A great wizard's tower looms before you. The ruling wizard is jealous, and will tolerate no rivals – any magicians, witches, or wizards in your party must either desert or be arrested, unless you elect to have your whole party escape (r218) from the hex. Otherwise, you can stay as if it were a castle for the purposes of food (r215) and lodging (r217). On subsequent days, you can Study History (r229) or Seek an Audience with the wizard (r211e), but you cannot Seek News (r209), Hire Followers (r210), or Visit a Tavern (r294) or Market (r298).",
  },
  {
    tag: "e068b",
    title: "Audience with the Wizard",
    type: "location",
    desc: "You have private discussions with the wizard that rules here. Roll 1d6, subtracting one (−1) from the roll for each additional audience.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll", "Result"],
        rows: [
          ["0", "He is angered by your interruptions, e062."],
          [
            "1",
            "He hears your story, but remains stone-faced and unwilling or unable to help.",
          ],
          [
            "2",
            "He hears your story and offers you some clues that might help you in your quest, e147.",
          ],
          [
            "3",
            "He listens to your story and gives you a magical gift that might be of some aid; see e195.",
          ],
          [
            "4",
            "He listens intently and shares with you legends of lost ages, e176.",
          ],
          [
            "5",
            "He decides to help you in your quest, but only if you help him. If you agree, he gives you his raven familiar, which adds one (+1) to your wit & wiles whilst in your party, and the wizard also enchants your sword (e186). In return, when you acquire any additional magical items (e183–e196), roll 1d6: on a 5 or 6, the wizard wants it for his collection and the raven flies off with the item.",
          ],
          [
            "6",
            "The wizard listens to your story with growing anger. Upon learning the names of the Northern usurpers, he declares that they were the very ones who did him ill deeds many years ago. He immediately uses his powerful magic to transport you and his army to the Northland capital to retake your throne. You immediately win.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e069",
    title: "Wounded Warrior",
    type: "npc",
    desc: "You come across a heroic fighter (ev6 cs7) near death from 5 wounds. If you remain with him while he rests and heals, or carry him while he heals, he will join your party as an ally, at no cost except food (r215) and lodging (r217) as necessary.",
  },
  {
    tag: "e070",
    title: "Halfling Town",
    type: "location",
    desc: "You come across a hidden and unknown town of halflings with small buildings and inns nested amongst the gentle, rolling hills. You can Seek News (r209) and Visit the Tavern (r294) or Market (r298), but you cannot Hire Followers (r210), because the halflings in this town enjoy their armchairs and pipeweed a bit too much. The usual rules for food (r215) and lodging (r217) apply. Halflings have a great love of gossip, news, and new faces, so any day you devote to Seek News & Information (r209), you and your party will be wined and dined so much that you need not buy any food for your evening meal – you've already had more than enough! If you kill any halflings while in this town, you will be arrested immediately; see e060 and subtract one (−1) from the roll for that event. If you kill any other characters or escape (r218) while here, for the rest of the game the halflings here will dislike you; you will no longer be wined and dined when seeking news, and you must deduct one (−1) from Seek News and Seek an Audience (r211d) rolls in this town.",
  },
  {
    tag: "e070a",
    title: "Audience with the Halfling Mayor",
    type: "location",
    desc: "You are invited to a private discussion with the Halfling Mayor. Roll 1d6, adding one (+1) to the roll if your party includes a halfling or wizard.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll 1d6", "Result"],
        rows: [
          [
            "1",
            "He is insulted; see e060 immediately, adding two (+2) to the roll.",
          ],
          [
            "2",
            "He hears your story with interest and gives your entire party free food but cannot see how he might help you. However, you are free to seek further audiences with him.",
          ],
          [
            "3",
            "He hears your story and gives you free food and lodging for tonight and as long as you stay in the halfling town. You are free to seek further audiences with him.",
          ],
          [
            "4",
            "He hears your story and gives your entire party free food and lodging for as long as you stay in the halfling town. He also shares some information you might find interesting; roll on r209, adding two (+2) to the roll. You cannot seek further audiences with him until next week.",
          ],
          [
            "5",
            "He listens to your story with interest, writes you a Letter of Recommendation (e157) to the Mayor of the nearest town and a purse of 40 gold. You cannot seek further audiences with him until you have used the letter. Your party is fed for free this evening.",
          ],
          [
            "6+",
            "If your party includes a halfling or wizard, the mayor will be convinced to support your cause. If not, he dismisses you, and refuses further audiences until you have such a character in your party. If he supports your cause, he will give you wealth 25 and his adventurous nephew will join as a member of your party who is S3, E6. You cannot seek further audiences with him but your party is fed and lodged for free this evening.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e071",
    title: "Band of Elves",
    type: "encounter",
    desc: "You encounter a band of 1d6+1 elves (ev4 cs5 wc7). You have three options, but due to the greater wisdom of elves, subtract one (−1) from your wit & wiles during this event.",
    note: "* Subtract one (−1) from the roll if your party includes an elf; add one (+1) if your party includes a dwarf; add one (+1) if the event occurs in a forest hex. † If the elves join your party, see r007a for their unique abilities. ‡ If the party is not in forest, you may use escape mounted (r312) instead of rolling to resolve the evade option. § Elves are excellent archers, so they will each start with a ranged attack (see r220g) with cs6 for the attack, unless they are surprised.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["roll*", "talk†", "evade‡", "fight§"],
        rows: [
          ["0", "follow e071a", "pass r325", "surprise r301"],
          ["1", "inquiry r342", "escape (fly) r313", "surprise r302"],
          ["2", "inquiry r342", "escape r315", "attack r305"],
          ["3", "conversation r341", "hide r318", "attacked r306"],
          ["4", "pass r325", "hide r320", "attacked r307"],
          ["5", "follow e071a", "attacked r306", "surprised r308"],
          ["6", "surprised r309", "surprised r309", "surprised r310"],
          ["7+", "surprised r309", "escape (fly) r313", "attack r305"],
        ],
      },
    ],
  },
  {
    tag: "e071a",
    title: "Follow the Elves",
    type: "encounter",
    desc: "The elves bid you to follow them. If you do not, return to the list above and choose either the evade or fight option instead. If you do follow the elves, make a follow move (r219) and then roll 1d6 for where you end the day: 1: elf haven (e166); 2–6: campsite (e053). If you end up at a campsite, you may share it peacefully with the elves, eating your own food (see r215, including hunting if allowable). On the next day, you can select any daily action, or you can continue to follow the elves. If you follow them, make the follow move and roll again for where you end the day. Thus, you may follow the elves for several days before they reach an elf haven. Alternatively, you can fight the elves for control of their campsite at the end of any day but before the evening meal. The elves are able to strike first in this combat with cs6 ranged attacks (see r220g).",
  },
  {
    tag: "e072",
    title: "Contest",
    type: "event",
    desc: "The Lord is holding a contest in the courtyard today. To enter you must fight and win 3 fights in a row by yourself to face the Arena Champion. You may receive no help from your party, but you may use any of your possessions during the battle. Winning earns you 10 gold in the 1st round, 50 gold in the 2nd round, and 100 gold in the 3rd round. If you lose in any round, the arena's healers restore you to full health, but you are disqualified and forfeit any contest winnings from previous rounds. If you survive the 3rd round, the healers restore you fully before the main event against the Champion (ev8 cs8). If you defeat the Champion, you win 200 gold and gain an immediate audience (r211).",
    note: "* If you knock the Champion unconscious and then spare his life, you forfeit half (½) your total contest winnings, but still gain an audience with the Lord; roll 1d6: on a 3 or more, the Champion joins your party as a loyal ally.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll 1d6", "Opponent"],
        rows: [
          ["1", "Wolf (ev3 cs3)."],
          [
            "2",
            "Wild boar (ev4 cs5) (cs8 in 1st round due to it charging at you).",
          ],
          ["3", "Great hunting cat (ev3 cs6)."],
          ["4", "Mercenary (ev4 cs5)."],
          ["5", "Amazon (ev5 cs6)."],
          ["6", "Warrior monk (ev6 cs6)."],
        ],
      },
    ],
  },
  {
    tag: "e073",
    title: "Witch",
    type: "npc",
    desc: "You encounter a witch. Roll 1d6: 1–4: she is an old witch (ev3 cs1 wc10); 5–6: she is a young witch (ev4 cs2 wc5). Roll 1d6 again: over your wit & wiles, the witch is hostile; equal to your wit & wiles, the witch ignores you and the event ends; under your wit & wiles, the witch is friendly. HOSTILE WITCH: Your party must escape (r218) immediately. Roll 1d6 for each character in the party, including yourself: on a 6, the character is transfigured into a frog and is lost. If you are turned into a frog, any surviving lover, magician, witch, or wizard in your party can turn you back, though you will have lost all luck (r202a). Otherwise, you will remain a frog permanently and lose the game. FRIENDLY WITCH: Roll 1d6 to determine her actions: 1–2: she joins your party as an ally (r334); 3–4: she can be hired to join your party (r333); 5–6: she gives you a gift, e195. If the young witch joins your party, roll 1d6 again: on a 6, you become lovers (r228). A witch in your party may forage for healing herbs (see r293) in any hex that permits hunting.",
  },
  {
    tag: "e073a",
    title: "Witch's Spell",
    type: "magic",
    desc: "Once per combat, the witch may cast a spell of transfiguration instead of making a normal strike. Before one of her attacks, roll 1d6 for each character in the opposing party with cs7 or lower: on a 5 or 6, that character is turned into a frog.",
  },
  {
    tag: "e074",
    title: "Spiders",
    type: "combat",
    desc: "You are trapped by the webs of 1d6 giant spiders (ev3 cs4). Their webs trap your party, and the combat skill of each character is reduced by one (−1). The spiders only inflict poisoned wounds. It is very likely that you are surprised too (r309). If you kill the spiders, you can harvest their venom. It takes the venom of three spiders to make one vial of poison drug (e185).",
  },
  {
    tag: "e075",
    title: "Wolves",
    type: "combat",
    desc: "This event is postponed until after your finish your evening meal (r215). In the cover of night, your party is attacked by a pack of 2d6+1 wolves (ev3 cs3) on the hunt. They may surprise you (r309). You cannot escape from the wolf attack, but at the start of the combat roll 1d6 and add one (+1) for each follower with you, one (+1) for each food unit you throw to the wolves, and two (+2) for each mount you sacrifice to them. If the total is greater than the number of wolves, they leave you alone; otherwise, they attack. At the end of each combat round, if any wolves are still left alive, one of your mounts will be killed. Since materials being transported (see r206) by the mount have been unloaded for the night, only the mount itself is lost, not what it carried. Wolf pelts may be collected (r223) and sold at market for 3 gold each (see r298a). Each pelt counts as 1 load.",
  },
  {
    tag: "e076",
    title: "Great Hunting Cat",
    type: "combat",
    desc: "A great hunting cat (ev3 cs6) leaps into your party and surprises you in combat (r220d), selecting one victim at random (r343) to target for the duration of the combat. If the cat kills this character, it vanishes back into the wilds with the victim and any wealth or possessions they were carrying. The victim's mount (if any) is also killed in the attack, but left behind. When in combat with the cat, the victim cannot escape (r218), but the rest of your party can. If you defeat the great cat, you may attempt to skin it (r223) and sell the pelt at market for 8 gold (see r298a). The pelt counts as 1 load.",
  },
  {
    tag: "e077",
    title: "Herd of Wild Horses",
    type: "event",
    desc: "You surprise a herd of wild horses. Each character in your party can capture one, giving you that many additional mounts. However, you must spend tomorrow resting (r203) in order to break and train the horses. If you have a druid, magician, witch, or wizard in your party, roll 1d6: on a 3 or more, that character successfully casts a spell to train the animals instantly, no extra day of rest required. You may sell any of the horses to a willing buyer.",
  },
  {
    tag: "e078",
    title: "Bad Going",
    type: "event",
    desc: "The terrain is rough and maintaining your footing is difficult. You must either halt for the day to explore alternate routes, or you risk injuries. If you continue normal travel today, then roll 1d6−4: on a 1 or more, that many random characters (r343) in your party have sustained 1 wound. If your party is travelling on mounts, such as horses, roll 1d6−3: on a 1 or more, that many horses have broken legs and must be killed after the move. This may require you to reorganize loads (see r206) and/or cache items you are carrying (r214). If this event occurs after your last travel move for the day, the difficult terrain applies for any travel (see r204) on the following day. If some action other than travel is selected for tomorrow, you are presumed to explore alternate routes in the course of that other action, thus ending this event.",
  },
  {
    tag: "e079",
    title: "Heavy Rains",
    type: "weather",
    desc: "Cold, driving rains hinder man and beast. You must stop moving today and roll 1d6 for each character in your party: on a 5 or 6, the character catches cold and suffers one wound. At the start of tomorrow, roll 1d6: on a 4 or more, the rains continue. If you have any mounts they may catch pneumonia – roll once for each: on a 5 or 6, they fall sick and die. You can lead animals at walking speed, including animals used to transport loads (see r206) without risk. If you travel at all, any characters who haven't yet caught cold must risk it. At the start of the day after tomorrow, the weather will clear and the rain will stop, unless this event occurs again in the meantime.",
  },
  {
    tag: "e080",
    title: "Pixies",
    type: "magic",
    desc: "A group of small, flying sprites called pixies appear and dance around. Unless you have a druid, magician, wizard, witch, elf, or halfling in your party they will dance away and end the encounter. If your party includes any one of these characters, the pixies may stop to grant you a boon, roll 1d6: 1: nothing of use; 2: they give you advice that may lead to treasure 1d6 hexes away in a random direction (r204g) – once there, see e026; 3: they lead you to an ancient cache, e038; 4–5: they provide a magical gift, e195; 6: they give you a winged pegasus mount, e188.",
  },
  {
    tag: "e081",
    title: "Mounted Patrol",
    type: "encounter",
    desc: "You encounter a mounted patrol of 1d6 soldiers (ev5 cs6 wc4). One of the men is the leader and has wealth 10 instead. Your options are:",
    note: "* If your party all have winged mounts and/or flying ability, you can use escape flying (r313) instead of rolling for the evade option.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["roll", "talk", "evade*", "fight"],
        rows: [
          ["1", "inquiry r342", "escape (mtd) r312", "surprise r302"],
          ["2", "pass r327", "escape (mtd) r312", "attack r305"],
          ["3", "bribe-pass (10) r322", "escape r314", "attack r305"],
          ["4", "bribe-pass (8) r324", "hide r318", "attacked r306"],
          ["5", "attacked r306", "attacked r306", "attacked r306"],
          ["6", "surprised r308", "surprised r308", "surprised r308"],
        ],
      },
    ],
  },
  {
    tag: "e082",
    title: "Spectre",
    type: "magic",
    desc: "An unearthly spectre from the astral plane appears in the midst of your party, casting a hideous miasma in all directions. One character in your party is the spectre's victim (see r343, but you must roll for any druids, magicians, monks, priests, witches, or wizards in your party first). The victim is turned to smoke and taken by the spectre to the astral plane, never to be seen again. If you are the victim, you are lost and the game ends. However, since a spectre is a magical being, it can be turned away using any possession that protects against magic attacks or injury.",
  },
  {
    tag: "e083",
    title: "Wild Boar Charges",
    type: "combat",
    desc: "A huge wild boar (ev4 cs5)* charges toward your party, surprising you in combat (r220). Determine which character in your party is the target of this charge (r343). The boar continues selecting a victim each round until you escape or kill it. If you kill the boar, roll 2d6 for the number of delicious food units it provides.",
    note: "* The boar has a combat skill of 8 for its first strike because of its fearsome charge.",
  },
  {
    tag: "e084",
    title: "Bear Comes to Dinner",
    type: "combat",
    desc: "You are about to sit down for a meal when a large, ferocious black bear (ev5 cs6) wanders into your campsite! The bear will randomly attack one character (r343) after another in your party until all are killed, the bear is killed, or you escape. The bear strikes first in combat (r220). If you kill the bear, a bear pelt may be sold at a market for 8 gold (see r298a). The pelt counts as 1 load for transport.",
  },
  {
    tag: "e085",
    title: "Narrow Ledges",
    type: "event",
    desc: "Your party is passing along narrow ledges and paths that overhang cliffs that plunge into deep gorges. Roll 2d6 for each character on foot in the party: if a 12 is rolled, that character slips and falls to his death. Roll 1d6 for each mount in your party without wings: on a 6, the mount stumbles and falls to its death, carrying away any rider and loads on it. If you entered the hex mounted, your entire party must be considered on mounts for this purpose. If you personally slip, or your mount falls over the edge, you are presumed to catch a ledge somewhere down the cliff and survive; roll 1d6+1 for the number of wounds suffered in the fall. Next, roll 1d6 to see if your party finds you: on a 5 or 6, they do; on a 4 or less, your party does not find you, and they disappear with all the mounts, possessions, and wealth they were carrying.",
  },
  {
    tag: "e086",
    title: "High Pass",
    type: "event",
    desc: "In order to leave the hex by any direction except that which you entered, you must travel through a very high, alpine pass. On your next travel action (r204), unless you leave by the hex you entered, you must take the high pass as long as you aren't lost. When you travel the high pass, roll 2d6 for the effects of high winds, sub-freezing temperatures, snow, etc.",
    note: "* Due to terrible conditions, you cannot cache spare wealth and possessions here. They must be abandoned in the snows and lost entirely.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll 2d6", "Effect"],
        rows: [
          ["≤7", "No effect; travel is not hindered."],
          ["8", "Each character in the party suffers 1 wound due to cold."],
          ["9", "Each character suffers 2 wounds; mounts die, no caches.*"],
          ["10", "Each character suffers 3 wounds; mounts die, no caches.*"],
          ["11+", "Each character suffers 4 wounds; mounts die, no caches.*"],
        ],
      },
    ],
  },
  {
    tag: "e087",
    title: "Impassable Woods",
    type: "event",
    desc: "You find the forest becomes thicker and thicker along this route, until further travel is impossible. You can only leave this hex by travelling back to the hex from which you came (r204). However, if entered from another direction, this hex could be passable.",
  },
  {
    tag: "e088",
    title: "Rock Fall",
    type: "event",
    desc: "As you travel along through a steep-sided gorge, a rock fall begins, threatening your entire party. Roll 1d6 for each character; mounts without riders are rolled for separately.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll 1d6", "Effect"],
        rows: [
          ["1–4", "Rocks miss; no effect."],
          [
            "5",
            "Character suffers 1 wound from flying rock chips; mount without a rider is caught by rolling boulder, breaks a leg, and must be killed.",
          ],
          [
            "6",
            "Character is hit by a heavy rock; roll 1d6+1 for wounds suffered; mount without a rider is hit and killed instantly, and all its load lost beneath the rocks.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e089",
    title: "Impassable Morass",
    type: "event",
    desc: "The swamp turns into an impassable morass of weeds, quicksand, water, and muck. You can leave this hex only by moving back to the hex you came from (r204). However, if entered from a different direction, this hex might be passable; only this particular route is blocked.",
  },
  {
    tag: "e090",
    title: "Quicksand",
    type: "event",
    desc: "Your party stumbles into quicksand. Roll 1d6 on the list below for each character or mount. If a character is riding a mount, you can either roll for both together as a character, or the character can sacrifice the mount and its load in order to jump from it to safety.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll 1d6", "Effect"],
        rows: [
          [
            "1–3",
            "Character or mount struggles out of the quicksand without harm.",
          ],
          [
            "4",
            "Character or mount escapes only if another character or mount is already free to pull it out; otherwise, it sinks and dies.",
          ],
          [
            "5",
            "Character struggles out using vines and roots; mount is lost with everything it carries.",
          ],
          [
            "6",
            "Character or mount is trapped in the deepest part, cannot get free, and automatically is lost with everything carried.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e091",
    title: "Poison Snake",
    type: "combat",
    desc: "Your party unknowingly walks over the nest of a poison snake. One character (see r343) is bit and suffers 1d6 poisoned wounds.",
  },
  {
    tag: "e092",
    title: "Flood",
    type: "weather",
    desc: "Rains swell the waters of the marsh. You and your party are stranded on a small knoll, unable to travel further today. In the morning, roll 1d6: on a 5 or 6, the waters subside and you can travel again (r204); on a 4 or less, you remain stranded and cannot make any travel, escape (r218), or follow (r219) actions that day, nor hunt (r215). Continue to roll the die at the start of each day until travel is possible once more.",
  },
  {
    tag: "e093",
    title: "Poison Plants",
    type: "event",
    desc: "You notice poison plants around you today, often a sign of greater evil. You cannot hunt (r215) today; roll 1d6 for an additional event: 1: e034; 2: e032; 3: e033; 4: e074; 5–6: no event.",
  },
  {
    tag: "e094",
    title: "Crocodiles",
    type: "combat",
    desc: "A bask of 1d6 very large and very hungry crocodiles (ev6 cs4) attack your party. If you are in a swamp, you cannot escape in battle (see r220e). Crocodiles always strike first in combat (r220), and in a swamp they gain surprise as well.",
  },
  {
    tag: "e095",
    title: "Mounts at Risk",
    type: "event",
    desc: "The strain of travelling is exhausting your mounts. Roll 1d6 for each mount in your party.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll 1d6", "Effect"],
        rows: [
          ["1–4", "Mount is still in fair condition, no special effect."],
          [
            "5",
            "Mount is failing, unless it is allowed to rest (r203) for 1 day, it will die after tomorrow.",
          ],
          [
            "6",
            "Mount is in serious condition; cannot continue, must be killed.",
          ],
        ],
      },
    ],
  },
  {
    tag: "e096",
    title: "Mounts Die",
    type: "event",
    desc: "The adverse conditions finally take their toll on your mounts. All the mounts, including winged ones, must roll at the end of each day until they die or recover. 1d6 is used.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["Roll 1d6", "Effect"],
        rows: [
          ["1", "Mount recovering; do not roll any further for it."],
          [
            "2",
            "Mount recovering; if it did not travel today, do not roll further; if it did travel today, it is still failing, roll again at the end of tomorrow.",
          ],
          [
            "3",
            "Mount still failing, but not dead yet; roll again at the end of tomorrow.",
          ],
          ["4–6", "Mount dies now."],
        ],
      },
    ],
  },
  {
    tag: "e097",
    title: "Marsh Gas and Rot",
    type: "event",
    desc: "Your entire party has unwittingly travelled into an area full of flesh-rot disease and mind-destroying marsh gas. Roll 2d6 for each character: on a 2–5, the character escapes; on a 6 or more, the character dies a mindless and raving idiot while his flesh rots from his bones before his eyes. Roll for yourself first, since the game ends if you die, regardless of the fate of the rest in your party.",
  },
  {
    tag: "e098",
    title: "Dragon",
    type: "encounter",
    desc: "You encounter a huge, winged, fire-breathing dragon (ev12 cs11). Roll 1d6: on a 1 or 2, you have found it in its lair, which has both wealth 110 and wealth 60; on a 3 or more, it has only wealth 30. If you must fight it in combat (r220) you cannot escape. Choose from the options below and roll 1d6, adding one (+1) if this is the dragon's lair.",
    note: "NOTE: If you kill the dragon, its eye counts as a trophy and is greatly valued by High Priests of temples across the land, and may be of assistance in gaining an audience. The Dragon's Eye counts as 1 load to transport (r206). In addition, a Dragon's Eye can be sold for 20 gold to any merchant or in any town, castle, or temple whenever you buy food.",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["roll", "talk", "evade", "fight"],
        rows: [
          ["1", "pass r329", "escape (fly) r313", "surprise r302"],
          ["2", "pass r329", "escape r315", "surprise r303"],
          ["3", "attacked r307", "hide r318", "attack r305"],
          ["4", "attacked r307", "hide r320", "attacked r306"],
          ["5", "surprised r308", "attacked r306", "surprised r308"],
          ["6", "surprised r309", "surprised r308", "surprised r309"],
          ["7", "asleep e098a", "asleep e098a", "asleep e098a"],
        ],
      },
    ],
  },
  {
    tag: "e098a",
    title: "Dragon Asleep",
    type: "encounter",
    desc: "You have found the dragon asleep on its hoard of treasure. You may attack the dragon (r303) or try to steal part of the hoard. If you wish to steal some treasure, roll 1d6: over your wit & wiles, the dragon awakes, see r306; equal to your wit & wiles, you can't get any treasure from under the dragon's huge claws, but you may try again; under your wit & wiles, you manage to steal gold worth wc25.",
  },
  {
    tag: "e099",
    title: "Roc",
    type: "encounter",
    desc: "A gigantic bird, the legendary roc (ev8 cs10), swoops down on your party from above. You can choose to evade or fight the monstrous avian. However, you may instead attempt to tame it (see e099a), a difficult and dangerous process!",
    tables: [
      {
        type: "roll-table",
        label: "Roc",
        cols: ["roll", "evade", "fight"],
        rows: [
          ["1", "escape (fly) r313", "surprise r301"],
          ["2", "escape (fly) r313", "surprise r303"],
          ["3", "hide r317", "attack r304"],
          ["4", "hide r319", "attack r305"],
          ["5", "attack r305", "attacked r306"],
          ["6", "surprised r308", "surprised r308"],
        ],
      },
    ],
  },
  {
    tag: "e099a",
    title: "Tame the Roc",
    type: "encounter",
    desc: 'If you elect to attempt to tame the roc, you will need to sacrifice 4 food units or a mount as bait. Then roll 1d6 and add your wit & wiles to the result (you may also add two (+2) if you have a druid, magician, witch, or wizard in your party): on an 8 or less, the roc immediately attacks (r306); on a 9 or 10, the roc grabs the food and flies away; on an 11 or more, you have tamed the giant roc – from now on, the roc will act as a winged mount for up to 2 characters but will not land in any settlement hex, and may find food at night "on the wing" instead of needing to be fed.',
    note: "NOTE: If you kill the roc, you can cut off its beak as a trophy. Count Drogat of Drogat Castle especially prizes this item, and it may help you gain an audience with him. Carrying the Roc's Beak counts as 1 load (see r206). Alternatively, the beak can be sold for 35 gold pieces to any merchant, or in any town, castle, or temple whenever you buy food.",
  },
  {
    tag: "e100",
    title: "Griffon",
    type: "encounter",
    desc: "You meet a winged griffon (ev6 cs8 wc12). The griffon is intelligent, and could serve both as a member of your party and as a winged mount for another character. However, griffons are normally quite independent and ferocious, and this one looks especially unfriendly, if not hostile! Your options are:",
    note: "NOTE: If you kill the griffon, you can remove one of its claws and carry it as a trophy and extra possession. A Griffon's Claw is especially valued by Lady Aeravir of Aeravir Castle, and may help you gain an audience with her. Alternatively, the claw can be sold for 25 gold to any merchant or in any town, castle, or temple whenever you buy food.",
    tables: [
      {
        type: "roll-table",
        label: "Griffon",
        cols: ["roll", "talk", "evade", "fight"],
        rows: [
          ["1", "inquiry r342", "escape (fly) r313", "surprise r303"],
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
    tag: "e101",
    title: "Harpies",
    type: "encounter",
    desc: "You encounter harpies (ev4 cs5 wc4)*, dirty, nasty bird-women known to occasionally ally with humans. Roll 1d6 for the number of harpies you encounter: 1–3: 1 harpy; 4–5: 2 harpies; 6: 3 harpies. Your options are:",
    note: '* Harpies attack with cs5, but because they can fly, they have cs6 when defending. NOTE: If the harpy(s) join your party, she has her own wings and can travel airborne without needing a winged mount. She also counts as travelling on a normal mount because the wings allow her to make long "air-lifted" hops as well. If you ever enter a settlement, you must roll 1d6 before your evening meal: on a 4 or less, see e017.',
    tables: [
      {
        type: "roll-table",
        label: "Harpies",
        cols: ["roll", "talk", "evade", "fight"],
        rows: [
          ["1", "inquiry r342", "escape (fly) r313", "surprise r302"],
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
    tag: "e102",
    title: "Light Rainstorm",
    type: "weather",
    desc: "You must land immediately, and cannot travel further today due to heavy cloud cover and bad weather.",
  },
  {
    tag: "e103",
    title: "Bad Headwinds",
    type: "weather",
    desc: "You cannot move faster than two hexes while flying today. If this event occurs after you have travelled to the third hex today, you must land in the last hex (second hex entered) instead, and end your travel there.",
  },
  {
    tag: "e104",
    title: "Good Tailwinds",
    type: "weather",
    desc: "You can fly one extra hex today if you wish. Normal travel rules (r204) apply when moving into this extra fourth hex.",
  },
  {
    tag: "e105",
    title: "Storm Clouds Ahead",
    type: "weather",
    desc: "You can land immediately, in the hex you just entered, and avoid any risk. Alternately, if you continue flying today (assuming you have any airborne travel remaining), before checking for lost or a travel event (r204), roll 1d6 for what happens as you try to fly on: 1: e103; 2: e102; 3: e079; 4–5: no effect; 6: e105a.",
  },
  {
    tag: "e105a",
    title: "Violent Weather",
    type: "weather",
    desc: "Your party is blown out of control by massive winds and end up 1d3 hexes away (see r204g for the direction). When you crash land in the last hex, your flying mount is killed and you suffer 1d6 wounds. All other followers are blown off course and lost permanently.",
  },
  {
    tag: "e106",
    title: "Heavy Overcast",
    type: "weather",
    desc: "Thick clouds obscure your vision. You realize you are becoming lost. Roll for a random heading (r204g) and move 1 hex in that direction. Now roll 1d6 for each additional character or unridden mount in your party: on a 6, that character/mount disappears into the fog and is lost from your party. Finally, the dark sky will force you and the remainder of your party to land in the new hex; no further travel today is possible.",
  },
  {
    tag: "e107",
    title: "Falcon Scout",
    type: "npc",
    desc: "A friendly falcon joins your party if you offer it 1 food unit immediately. For the rest of today, you cannot get lost (r205). Tonight, at the evening meal (r215), if you offer it a second food unit, roll 1d6: on a 5 or less, the falcon will stay through tomorrow with your party as a guide (r205a). This can continue day after day, provided you feed it a food unit at the evening meal and roll anything but a 6. The falcon can only act as a guide, it has no combat skill or endurance value, and any wound will kill it. Normal desertion rules for guides do not apply to the falcon.",
  },
  {
    tag: "e108",
    title: "Hawkmen Attack",
    type: "combat",
    desc: "You encounter a group of 1d6+1 hawkmen (ev5 cs7 wc7) who swoop down and surprise your party in combat (r220). You cannot escape from combat, but must fight to the death or surrender. If you surrender, they capture you and take you to their incredible castle that floats amongst the clouds (e117a) above an adjacent hex (see r204g for the direction). You are then thrown into a dungeon (e062).",
  },
  {
    tag: "e109",
    title: "Wild Pegasus",
    type: "encounter",
    desc: "You encounter a wild pegasus. Each character in your party is allowed one attempt to capture it – roll 1d6: on a 5 or more (4 or more for a magician, witch, or wizard, and 3 or more for a druid), the character captures the pegasus and adds it as a winged mount to your party.",
  },
  {
    tag: "e110",
    title: "Air Spirit",
    type: "magic",
    desc: "You encounter an air spirit, but will only recognize it as such if there is a druid, magician, monk, priest, witch, or wizard in your party. If you can't recognize it, this event ends. If you recognize the spirit, you can attempt communication if you wish. To talk to the air spirit, roll 1d6: equal to or over your wit & wiles, communication fails, the air spirit becomes confused and blows you 1d6 hexes in a random direction (r204g) – move your party to this new hex and continue with your daily actions (r203); under your wit & wiles, you successfully talk with the air spirit and it agrees to help you in your quest – roll 2d6, and move up to that many hexes immediately, without risk of getting lost, and with no new travel events except for the hex where you land, where you must roll for a terrain travel event (r204).",
  },
  {
    tag: "e111",
    title: "Storm Demon",
    type: "magic",
    desc: "You are attacked by a powerful demon of storms. If you have any druids, magicians, monks, priests, witches, or wizards in your party, each can attempt to stop the demon by rolling 1d6: on a 6, the demon attack is blocked; on a 1–5, there is no effect on the attack. If you are unable to block the attack, your entire party is blown away to be lost or killed. You crash in an adjacent hex (r204g), where your winged mount is killed, and you suffer 1d6 wounds. Your wealth and possessions you carried are intact, but that of the rest of your party is lost to you.",
  },
  {
    tag: "e112",
    title: "Meet Eagle Clan",
    type: "encounter",
    desc: "While airborne, you encounter 1d6 eagles (ev3 cs4 wc1) in flight. Your options are listed below. If your party has characters other than humans or elves, and flying creatures other than pegasus mounts, you cannot follow, but can only choose to evade or fight (druids, magicians, monks, priests, witches, and wizards are presumed human unless specified as some other race when first encountered).",
    note: "* If you select follow, see r319 for procedure for a follow move today, and then roll for an event. If you elect to follow, you must abandon all members of your party without winged mounts or flying ability.",
    tables: [
      {
        type: "roll-table",
        label: "Meet Eagle Clan",
        cols: ["roll", "evade", "follow*", "fight"],
        rows: [
          ["1", "pass r325", "ambush e113", "attack r304"],
          ["2", "pass r325", "hunt e114", "attacked r305"],
          ["3", "pass r326", "hunt e114", "attacked r306"],
          ["4", "pass r326", "eyrie e115", "attacked r306"],
          ["5", "conversation r341", "eyrie e115", "surprised r308"],
          ["6", "inquiry r342", "allies e116", "surprised r309"],
        ],
      },
    ],
  },
  {
    tag: "e113",
    title: "Eagle Ambush",
    type: "combat",
    desc: "The eagles lead you to a craggy area, when 1d6 more eagles suddenly appear! All eagles make a surprise attack on your party (r220).",
  },
  {
    tag: "e114",
    title: "Eagle Hunt",
    type: "event",
    desc: "The eagles join your party for the hunt. This ends all travel today; for the evening meal (r215) you can hunt regardless of hex type, and add one (+1) to your combat skill to do so. You and the eagles camp on a high crag tonight, and you do not count as landing in this hex for a travel event. The following morning, the eagles leave, ending the event. You can then either land in the hex (and consult the terrain Travel Table (r207) for a possible event immediately) before pursuing any action you wish (r203), or you can leave the hex by travel (r204). If you leave the hex, instructions from the eagles act as if you had a guide for that day only.",
  },
  {
    tag: "e115",
    title: "Eagle Eyrie",
    type: "location",
    desc: 'The eagles lead you to their eyrie, where you meet their clan and make friends. Tonight, you receive free food (r215) for your entire party. Do not roll for landing in the hex as the eagle eyrie replaces the normal travel event. Later on, you can return here for a free meal, but only if you enter this hex by airborne travel and do not make a normal landing (but instead land in the eyrie). When you are ready to depart, roll 1d6: on a 4–6, an eagle (cs4 ev3) joins your party – it will act as a guide and not desert (r205a). This eagle is able to feed itself each day "on the wing," and it will not enter a settlement hex, but will re-join your party back in the wilds.',
  },
  {
    tag: "e116",
    title: "Eagle Allies",
    type: "event",
    desc: 'The eagles lead you to their high council (see e115 for details on the eagle eyrie) and, after hearing your tale, they agree to support your quest for the Northlands kingdom. After tonight\'s council, a feast is thrown for your party, providing a free meal (r215) on behalf of the eagle clan. When you are ready to depart, you are given a warrior band of 2d6 eagles (ev3 cs4) to join your party, and may act as guides if you wish and will not desert (see r205a). The eagles are able to feed themselves each day "on the wing," and will not enter a settlement hex, but will re-join your party back in the wilds.',
  },
  {
    tag: "e117",
    title: "Castle in the Clouds",
    type: "location",
    desc: "You see the wonderous sight of an enormous castle floating amidst the clouds! You may fly past, ending the event. Otherwise, if you elect to investigate, roll 1d6.",
    tables: [
      {
        type: "roll-table",
        label: "Castle in the Clouds",
        cols: ["Roll 1d6", "Result"],
        rows: [
          ["1", "It is a giant's castle; see e118 but the giant has w110."],
          ["2", "The castle is deserted. You may search it as a ruins (r208)."],
          ["3", "Everyone in the castle is dead from a plague! See e133."],
          ["4–6", "It is a hawkman castle, e117a."],
        ],
      },
    ],
  },
  {
    tag: "e117a",
    title: "Hawkman Castle",
    type: "location",
    desc: "You have found a floating hawkmen castle. When you arrive, if you have not been brought here by the hawkmen, roll 1d6: over your wit & wiles, you are captured (e062); equal to or under your wit & wiles, they let you pass and you enter the magnificent castle. Due to the remote nature of the castle, you cannot perform most daily actions normally allowed in castles, but you can Study History (r229), Seek Alms (r295), and Attempt Robbery (r297) here. You can also Seek an Audience with the ruling Hawk Lord (r211h). Like any castle, you must spend the normal amounts for food (r215) and lodging (r217), and anyone you meet in the castle will be a hawkman.",
  },
  {
    tag: "e117b",
    title: "Audience with the Hawk Lord",
    type: "location",
    desc: "You are brought before the mighty Hawk Lord, ruler of this castle. Roll 1d6.",
    tables: [
      {
        type: "roll-table",
        label: "Audience with the Hawk Lord",
        cols: ["Roll 1d6", "Result"],
        rows: [
          [
            "1",
            "He is insulted and orders you thrown in a cell immediately, e062.",
          ],
          [
            "2",
            "He hears your story, but is unconcerned by the problems in the north. However, you are free to seek audiences with him again.",
          ],
          [
            "3",
            "He hears your story and holds a feast for your party, giving you free food and lodging as his guests for the night. You are free to seek audiences with him again.",
          ],
          [
            "4",
            "The Hawk Lord holds a feast for you tonight as his guests so you have free food and lodging for your party. During the feast, the Lord discusses with you some information you may find useful; see e147. You may not seek audiences with him again.",
          ],
          [
            "5",
            "The Hawk Lord agrees to help your campaign. You are feasted and lodged tonight and tomorrow given a retinue of 1d6 hawkmen bodyguards (ev5 cs7) who join your party at no cost but will leave if you enter any settlement. You may not seek an audience again.",
          ],
          [
            "6",
            "On learning that you are alive, he reveals that he was an old friend of your father. The Hawk Lord (ev8 cs8) immediately forms an advance war band of 6 hawkmen (ev5 cs7) and will lead it himself! You are fed a huge feast and lodged tonight, and fly north at first light. As soon as you enter any hex north of Tragoth River and resolve any travel events, you establish a bridgehead where the Hawk Lord's army can then land and you have won the game!",
          ],
        ],
      },
    ],
  },
  {
    tag: "e118",
    title: "Giant",
    type: "encounter",
    desc: "You encounter a 12-foot-tall giant (ev8 cs9 wc10), with a large, bushy head, and carrying a very big club. Your options are: If the giant joins your party, he is too big to be carried on any mount, so you can't use mounted travel (r204) while he is with your party. In addition, he eats double the normal amount of food (r215) each day. The giant will not enter any village, town, or temple for fear of frightening the locals, but will find food for himself and re-join your party when you return to the wilds. In a castle, he must be lodged in his own room (r217).",
    tables: [
      {
        type: "roll-table",
        label: "Giant",
        cols: ["roll", "talk", "evade", "fight"],
        rows: [
          ["1", "inquiry r342", "escape (fly) r313", "surprise r301"],
          ["2", "plead comrades r337", "escape (mtd) r312", "surprise r302"],
          ["3", "looter r340", "hide r316", "attack r304"],
          ["4", "pass r328", "hide r317", "attack r305"],
          ["5", "attacked r306", "hide r319", "attacked r306"],
          ["6", "surprised r308", "hide r320", "attacked r306"],
        ],
      },
    ],
  },
  {
    tag: "e119",
    title: "Flash Flood",
    type: "weather",
    desc: "Your party is travelling down into a valley when suddenly you hear a roar as a wall of water rushes toward you. Rains elsewhere have caused a flash flood! Roll 1d6 for each member of your party: on a 5 or 6, the character can't scramble up the embankment fast enough, and is carried away by the rushing water and permanently lost, along with any mount, wealth, and possessions he was carrying. If you are washed away in the flood, you suffer 1d6 wounds, any mount you were riding is killed, and you can only salvage 1 load from whatever you were carrying (r206). All the rest is lost, and you are so far separated from your party that they give you up for dead and go on their own way.",
  },
  {
    tag: "e120",
    title: "Exhaustion",
    type: "event",
    desc: "The burning days and freezing nights sap the strength of your party. Mounts cannot be ridden, and the load capacity of all men and mounts (r206) is halved (½). Each character in your party suffers one wound. No rest or healing of wounds (r222) is allowed until you leave the desert, or are in an oasis hex. Mounts recover normal abilities whenever your leave the desert and rest one day, or rest one day at an oasis.",
  },
  {
    tag: "e121",
    title: "Sunstroke",
    type: "weather",
    desc: "The heat of the sun is unexpected. Roll 1d6 for each character and mount in your party: on a 6, they collapse from sunstroke. Collapsed mounts must be left to die, but characters that collapse must be carried, if possible, even if it means other loads must be abandoned (see r206). Should you suffer sunstroke, other characters in the party will carry you, if possible; otherwise, they will have to leave you behind. If you suffer sunstroke and are not carried for the rest of the day, you suffer 1d6 wounds, and revive in time for the evening meal (r215), but you cannot hunt today. If your party carries any sunstroke victims, there is no effect except that sunstroke victims cannot participate in hunting. All characters recover from sunstroke for the evening meal.",
  },
  {
    tag: "e122",
    title: "Raftsmen",
    type: "npc",
    desc: "If you are not next to a river, there is no event. You meet raftsmen at the side of the river; for 2 gold pieces they will transport you and any members of your party across, along with your mounts. Alternately, starting tomorrow, you can hire them for travel up or down the river (see r213 for details) for 2 gold per day.",
  },
  {
    tag: "e123",
    title: "Knight at the Bridge",
    type: "encounter",
    desc: "You find a small bridge across the river. However, an armoured knight (ev8 cs8 wc30) stands in the middle, challenging any who wish to cross to personally engage him in combat (r220). If you refuse the combat and end travel for the day, roll 1d6 for each character in your party: on a 6, that character deserts on account of your cowardice. If you enter combat, roll 1d6 at the start of each round: on a 4 or more, you strike first; on a 3 or less, the knight strikes first. If either of you are knocked unconscious, the duel ends. If you are knocked unconscious, crossing is prohibited and travel ends for the day. If the knight is knocked unconscious, you can either leave him here and continue to travel, or you can halt for the day, treat his wounds, and invite him to join your party as an ally, in exchange for food (r215) and lodging (r217). You may give up the combat and end travel for the day after any combat round, without invoking the usual escape procedure.",
  },
  {
    tag: "e124",
    title: "Raft",
    type: "event",
    desc: "You cross the river using a quickly-built raft. Roll 1d6 to determine if any unfortunate incident occurs during the crossing: 1–2: nothing happens; 3: e094; 4: e125; 5: e126; 6: e127.",
  },
  {
    tag: "e125",
    title: "Raft Overturns",
    type: "event",
    desc: "The raft is caught in an eddy, hits a rock, and overturns. Everyone in your party, including mounts, swims to shore. Unfortunately, all wealth and all possessions not carried by characters are permanently lost.",
  },
  {
    tag: "e126",
    title: "Raft Caught in Current",
    type: "event",
    desc: "Your raft is swept swiftly downriver. Move 1 hex downriver (see r213), then roll 1d6 for each mount and character in your party: on a 6, they were washed overboard and drown. If you fall overboard, you can swim to shore, losing all your wealth, possessions, and mount, while your party and raft vanishes downriver and is permanently lost to you.",
  },
  {
    tag: "e127",
    title: "Raft in Rough Water",
    type: "event",
    desc: "Your raft hits a stretch of white water, and all food stores on it are washed overboard. Thankfully, all characters, mounts, wealth, and possessions survive the rough going. With the rapids behind you, your party can land or continue (as appropriate to your action) without further incident.",
  },
  {
    tag: "e128",
    title: "Merchant",
    type: "npc",
    desc: "You meet a friendly merchant. You can either pass by and ignore him, ending this encounter, you can stop to chat and barter, or you can attempt to rob him (see e128a). If you stop to barter, roll 2d6.",
    tables: [
      {
        type: "roll-table",
        label: "Merchant",
        cols: ["Roll 2d6", "Result"],
        rows: [
          ["2", "The merchant has a pegasus mount for sale for 50 gold."],
          [
            "3",
            "The merchant mentions seeing some old cave tombs in a random adjacent hex (204g); if you investigate, see e028.",
          ],
          [
            "4",
            "The merchant has cure-poison vials (e181) for sale, 10 gold each.",
          ],
          [
            "5",
            "The merchant mentions a farm nearby; if you go look, see e009.",
          ],
          [
            "6",
            "The merchant has food for sale: 1 gold per 2 food units. He has 8 food in stock. He is also buying: 1 gold per 3 food units.",
          ],
          [
            "7",
            "The merchant may outwit you! Roll 1d6: over your wit & wiles, you spend 10 gold needlessly (or all your gold if you have less).",
          ],
          [
            "8",
            "The merchant has healing potions (e180) for sale, 5 gold each.",
          ],
          ["9", "The merchant has 2 horses for sale, 6 gold pieces each."],
          ["10", "The merchant has a coffle of slaves for sale; see e163."],
          [
            "11",
            "The merchant provides some final clues about a treasure; see e147.",
          ],
          ["12", "Learn unique secrets from the merchant; see e162."],
        ],
      },
    ],
  },
  {
    tag: "e128a",
    title: "Rob Merchant",
    type: "combat",
    desc: "You may choose to attack and rob the merchant (ev3 cs2 wc60), striking first in combat (r220). The merchant has 1d6−2 underlings (ev4 cs5 wc4) with him. If this event takes place in any settlement, at the end of each combat round, roll 1d6: on a 5 or 6, 1d6+1 local guards (ev4 cs5 wc2) arrive to defend the merchant. If you choose to surrender to the guards, see e063.",
  },
  {
    tag: "e129",
    title: "Merchant Caravan",
    type: "encounter",
    desc: "You meet a merchant caravan setting up camp for the night. You may halt for the day to talk and trade with them, or you can ignore them and end this event. If you stop, roll 2d6 on the list below.",
    tables: [
      {
        type: "roll-table",
        label: "Merchant Caravan",
        cols: ["Roll 2d6", "Result"],
        rows: [
          ["2", "Learn unique secrets from various caravan members, e162."],
          [
            "3",
            "Learn of a monastery in this hex; if you investigate, see e066.",
          ],
          [
            "4",
            "Merchants have an anti-poison amulet (e187) for sale for 25 gold.",
          ],
          [
            "5",
            "Merchants noticed farms in this hex; if you investigate, see e009.",
          ],
          ["6", "Meet an independent merchant in the caravan, e128."],
          ["7", "Caravan guards grow hostile; you must flee the hex (r218)."],
          ["8", "Caravan healer has potions (e180) for sale; 6 gold each."],
          ["9", "Caravan has 6 spare horses for sale, 7 gold pieces each."],
          ["10", "Caravan has a coffle of slaves for sale, e163."],
          [
            "11",
            "Talk with caravan guards gives you hints to a treasure, e147.",
          ],
          [
            "12",
            "Caravan passed a nearby ruin yesterday in an adjacent hex (see r204g for the direction).",
          ],
        ],
      },
    ],
  },
  {
    tag: "e130",
    title: "Meet a High Lord",
    type: "encounter",
    desc: "You meet a high and powerful Lord, attended by 2d6+1 bodyguards (ev6 cs6). Roll 1d6 for the Lord's identity.",
    tables: [
      {
        type: "roll-table",
        label: "Lord's Identity",
        cols: ["Roll 1d6", "Lord"],
        rows: [
          ["1", "Baron of Huldra Castle"],
          ["2", "Count Drogat of Drogat Castle"],
          ["3", "Lady Aeravir of Aeravir Castle"],
          ["4", "High Priest of a temple"],
          ["5–6", "Town Mayor"],
        ],
      },
      {
        type: "roll-table",
        label: "Meet a High Lord",
        cols: ["roll", "talk", "evade", "fight§"],
        rows: [
          ["1", "pass r327", "escape (mtd) r312", "surprise r303"],
          ["2", "pass r329", "escape r314", "attack r305"],
          ["3", "arrested* e060", "escape r315", "attacked r306"],
          ["4", "audience†", "hide r317", "attacked r306"],
          ["5", "inquiry‡ r342", "hide r319", "attacked r307"],
          ["6", "attacked r307", "attacked r306", "surprised r309"],
        ],
      },
    ],
  },
  {
    tag: "E131",
    title: "The Secret of Jakor's Keep",
    type: "story",
    desc: "You learn that Jakor, a mighty Northern Lord who was allied with your ancestors, and dead many long centuries now, was in fact a powerful wizard. Even after all this time, a legend persists that Jakor did not really die, and that his spirit still roams his decaying keep. It could be that the restless shade of Jakor could help you regain your lost throne.",
    note: "Travel to Jakor's Keep (0901). Must be accompanied by a magician, witch, or wizard. Complete a Search Ruins (R208) action first. Spend 40 gold at any town or castle for a silver pentagram to add +1 to the roll. Destroy an unused resurrection necklace (E192) during the invocation to add +2 to the roll.",
    tables: [
      {
        type: "roll-table",
        label: "Invoke the Spirit (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "Nothing happens; the legend was nothing more than a story."],
          [
            "2",
            "The ritual requires sacrificing a party member's life. If you do, roll again with +2, but all remaining followers desert you.",
          ],
          ["3", "The spectre of Jakor appears. See E034A."],
          [
            "4–5",
            "Jakor's spirit appears and listens to your tale; he gives you a magical gift. See E195.",
          ],
          [
            "6+",
            "The shade of Jakor appears wreathed in flames. He reveals the ancestors of the usurpers caused his demise. He raises an undead army and you retake your kingdom. You win the game!",
          ],
        ],
      },
    ],
  },
  {
    tag: "E132",
    title: "Organized Search",
    type: "event",
    desc: "If alone, you spend the day fruitlessly searching the ruins and find nothing. If you have followers in your party, roll 1d6: if you roll less than the size of your party, the help pays off — roll again immediately on R208.",
  },
  {
    tag: "E133",
    title: "Plague",
    type: "encounter",
    desc: "After considerable searching during the day, you and your party find a variety of items among the many skeletons, worth 50 gold pieces in all. Tonight, just before you start the evening meal (R215), an ancient curse awakens a plague of mind-madness.",
    note: "Roll 1d6 for each party member: on a 3 or more, the character dies. Survivors must immediately flee (R218) and camp elsewhere. Mounts are unaffected; survivors may take all mounts, possessions, and wealth. If you are a victim yourself, your Northern blood lets you survive — you awake the next morning having gone without food (R216), with all followers dead or fled with your wealth and possessions.",
  },
  {
    tag: "E134",
    title: "Unstable Ruins",
    type: "encounter",
    desc: "The ruins contain many unstable walls and rocks, making your search very dangerous. You can either give up searching and do nothing else today, or continue.",
    note: "If you continue, roll 1d6 for each party member: on a 6, that character suffers 2d6 wounds from falling rocks. If any character survives the day unwounded, consult R208 and roll again immediately (which can lead to this result again). Each subsequent day you search, all party members must risk the rubble again.",
  },
  {
    tag: "E135",
    title: "An Ancient Inscription",
    type: "event",
    desc: "Along a palisade of broken columns, you find an ancient inscription. If your party includes a magician, monk, priest, witch, or wizard, the words can be deciphered. If none can decipher the inscription, there is no event.",
    tables: [
      {
        type: "roll-table",
        label: "Decipher Inscription (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "E042"],
          ["2", "E043"],
          ["3", "E044"],
          ["4", "E045"],
          ["5", "E046"],
          ["6", "E047"],
        ],
      },
    ],
  },
  {
    tag: "E136",
    title: "Hidden Treasures",
    type: "treasure",
    desc: "You uncover the remains of an old and decaying palace treasure room.",
    tables: [
      {
        type: "roll-table",
        label: "Long-Forgotten Contents (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "E037"],
          ["2", "E038"],
          ["3", "E039"],
          ["4", "E044"],
          ["5", "500 gold"],
          ["6", "Nothing of use"],
        ],
      },
    ],
  },
  {
    tag: "E137",
    title: "Inhabitants",
    type: "encounter",
    desc: "You encounter things living in the ruins.",
    tables: [
      {
        type: "roll-table",
        label: "Encounter (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "E032"],
          ["2", "E051"],
          ["3", "E052"],
          ["4", "E055"],
          ["5", "E057"],
          ["6", "E082"],
        ],
      },
    ],
  },
  {
    tag: "E138",
    title: "Unclean",
    type: "combat",
    desc: "The ruins are unclean and have horrible, gruesome creatures populating them. If you survive the encounter, you can immediately consult R208 again to continue your search, or stop for the day and eat your evening meal (R215).",
    tables: [
      {
        type: "roll-table",
        label: "Encounter (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "E032"],
          ["2", "E033"],
          ["3", "E034"],
          ["4", "E056"],
          ["5", "E082"],
          ["6", "E098"],
        ],
      },
    ],
  },
  {
    tag: "E139",
    title: "Minor Treasure",
    type: "treasure",
    desc: "You uncover a minor treasure.",
    tables: [
      {
        type: "roll-table",
        label: "Minor Treasure (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "WC25"],
          ["2", "WC60"],
          ["3", "E038"],
          ["4", "E039"],
          ["5", "E140"],
          ["6", "E140"],
        ],
      },
    ],
  },
  {
    tag: "E140",
    title: "Magic Box",
    type: "item",
    desc: "You find a magic box, but you can only open it if you have a magician, witch, or wizard in your party. Until then, you may carry it with you as it is relatively light. Once such a character joins your party, the box can be opened.",
    tables: [
      {
        type: "roll-table",
        label: "Box Contents (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "E141"],
          ["2", "E142"],
          ["3", "WC60"],
          ["4", "WC110"],
          ["5", "E195"],
          ["6", "Nothing but rubbish"],
        ],
      },
    ],
  },
  {
    tag: "E141",
    title: "Hydra's Teeth",
    type: "item",
    desc: "Roll 2d6 for the number of teeth inside. The magician/witch/wizard explains that whenever you scatter these teeth on the ground, that number of undead warriors (EV4 CS5) will rise and fight at your command for one combat (R220). At the end of combat, they turn to dust. You can scatter the teeth at any time, including at the start or in the middle of combat.",
  },
  {
    tag: "E142",
    title: "Gems",
    type: "treasure",
    desc: "The box contains a horde of gems worth WC200 (roll for wealth 100 twice). If you have a magician, witch, or wizard in your party, they also recognize a vision gem (E041) amongst the horde.",
  },
  {
    tag: "E143",
    title: "Secret of the Temples",
    type: "story",
    desc: "You learn the secret of all temple priests — a weakness for the Chaga drug. This is available in any town where you buy food, for 2 gold pieces a serving. If you buy a serving and offer it to a temple priest when you Make an Offering (R212), you can add +1 to the offering roll. Similarly, if you offer the drug when you Seek an Audience with a High Priest (R211C), you can add +1 to that roll as well.",
  },
  {
    tag: "E144",
    title: "The Secret of the Baron of Huldra Castle",
    type: "story",
    desc: "You learn that the Baron of Huldra Castle is actually a double bastard, and has imprisoned the true heir to the castle with a hill tribe in the Wredwrock Badlands (hex 1611).",
    note: "To rescue the heir you must travel to the Wredwrock Badlands and defeat the hill tribe. Requires a druid, magician, priest, witch, or wizard to cast a spell; OR a magic sword (E186) or shield of light (E193) to impress the tribesmen; OR a charisma talisman (E189); OR a death mist flask (E190). Alternatively, fight through 3d6+1 hillmen (EV5 CS4), surprising them (R220), then escape (R218) with the true heir (EV7 CS5). Once at Huldra Castle: either Seek an Audience (R211I) and roll 10+ to depose the Baron, or make a sneak attack on 6 bodyguards (EV6 CS6) then the Baron (EV8 CS6, strikes first). Success wins the game with the new Baron's army.",
  },
  {
    tag: "E145",
    title: "The Secret of Lady Aeravir",
    type: "story",
    desc: "The Lady of Aeravir Castle is the priestess of a local temple cult that requires virginity. You discover she is actually quite promiscuous, and can use this to your advantage if you gain an audience with her. Add +1 when you Seek an Audience with the Lady (R211K), and if you receive it, you may roll twice for the results of the audience and select whichever you prefer. However, Lady Aeravir detests blackmail — you must escape from the hex (R218) at the end of the day after using this knowledge, and never return.",
  },
  {
    tag: "E146",
    title: "The Secret of Count Drogat",
    type: "story",
    desc: "You learn that Count Drogat, Lord of Drogat Castle, is actually an undead creature who lives on the suffering, pain, and death of others. Secretly, the Count is very vulnerable to foulbane, a rare plant purchasable as a special daily action from food merchants at Duffyd Temple (hex 2018) for 1 gold piece.",
    note: "Using foulbane when you Seek an Audience with Count Drogat (R211J) adds +1 to your roll, and if you gain an audience you may ignore the first result and try again (must abide by the second). The foulbane is then discarded. While at Drogat Castle, you may use a second sprig of foulbane instead of a normal daily action to arrange a heist of the Count's personal jewels — escape (R218) at day's end with WC110, but can never return.",
  },
  {
    tag: "E147",
    title: "Clue to Treasure",
    type: "treasure",
    desc: "You gain information about a nearby treasure 1d6 hexes away in a random direction (R204G). When you reach that hex and spend a day searching for it like a cache (R214), roll 2d6 on the table below.",
    tables: [
      {
        type: "roll-table",
        label: "Treasure Found (2d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "E066"],
          ["3", "E037"],
          ["4", "E038"],
          ["5", "E039"],
          ["6", "E040"],
          ["7", "E030"],
          ["8", "WC110"],
          ["9", "E139"],
          ["10", "E140"],
          ["11", "E136"],
          ["12+", "E054"],
        ],
      },
    ],
  },
  {
    tag: "E148",
    title: "Seneschal Requires Bribe",
    type: "npc",
    desc: "You must pay a bribe of 1d6×10 gold pieces to the seneschal to gain an audience with the Lord. If you pay this bribe, you can Seek an Audience again and add +8 to the roll. If you elect not to pay, you cannot seek further audiences with this Lord.",
  },
  {
    tag: "E149",
    title: "Must Learn Court Manners",
    type: "event",
    desc: "Your Northern manners brand you as a boor. You are turned away as unpresentable. After you spend 10 gold pieces for better clothes in any town or castle, you can try again for an audience. Until then, you cannot seek further audiences with this Lord. Once you have spent the coin for better clothes, this event can still occur again, meaning you must further improve your appearance.",
  },
  {
    tag: "E150",
    title: "Pay Your Respects",
    type: "npc",
    desc: "You gain an audience, pay your respects, tell your tales, and receive a purse worth WC50 (see R226). You cannot seek further audiences again here tomorrow, but after that you may try again.",
  },
  {
    tag: "E151",
    title: "Find Favour",
    type: "npc",
    desc: "You gain an audience and are heard favourably. Your entire party is given free food (R215) and lodging (R217) tonight. In the morning, you are gifted 1d6×100 gold pieces, plus an escort of cavalrymen that guides you and remains with you during the day you leave the hex. The escort is so strong that you will automatically defeat and kill anything you meet in combat, without using the normal combat procedure.",
  },
  {
    tag: "E152",
    title: "Noble Ally",
    type: "story",
    desc: "You gain an audience and are heard with interest. The Lord decides to support your cause fully, and prepares to march his army to the Northlands with you to help you regain your throne. You have fulfilled your quest and won the game!",
  },
  {
    tag: "E153",
    title: "Master of the Household",
    type: "npc",
    desc: "You encounter the Master of the Household, who prevents you from receiving an audience. If you bribe him (6 gold in a village; 10 gold in a town/castle; 1 food unit in a halfling town), you can try for an audience on some future day. Otherwise, he takes a dislike to you, and you can never seek an audience in this hex again.",
  },
  {
    tag: "E154",
    title: "Meet Lord's Daughter",
    type: "npc",
    desc: "You meet the Lord's beautiful daughter.",
    tables: [
      {
        type: "roll-table",
        label: "Her Attitude (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          [
            "1–2",
            "She hates you. See E060. You cannot seek audiences again in this hex.",
          ],
          [
            "3",
            "You dally with her, but she is reserved; this attempt for an audience ends with no result, but you can try again another day.",
          ],
          [
            "4",
            "She is reserved, so you bow and pass on; you can seek an audience again immediately.",
          ],
          [
            "5",
            "She takes a liking to you in conversation — roll again immediately to seek an audience here, and add +1 to the roll.",
          ],
          [
            "6",
            "She falls in love with you (R228); roll again immediately to seek an audience here, and add +4 to the roll. If you then leave the hex, she leaves with you. You are accused of kidnapping and wanted throughout the land (R224) in every settlement south of the Tragoth River. To aid your quest, your new lover has acquired horses for your entire party and brings her personal jewellery worth wealth 200 (R225, roll twice for WC100).",
          ],
        ],
      },
    ],
  },
  {
    tag: "E155",
    title: "Audience with a High Priest",
    type: "npc",
    desc: "You have a private discussion with the wizened High Priest.",
    tables: [
      {
        type: "roll-table",
        label: "High Priest Reaction (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "The High Priest is insulted. See E060 immediately."],
          [
            "2",
            "He hears your pleas, but remains unmoved; you gain nothing and cannot seek further audiences in this hex until next week.",
          ],
          [
            "3",
            "The High Priest hears your pleas, and suggests you Make an Offering (R212) at a temple tomorrow or later. You cannot seek further audiences in this hex until you have done so. If you made an offering at any temple within the last three days, you may immediately roll again.",
          ],
          [
            "4",
            "The High Priest listens and offers to help with your offerings at the temple tomorrow. If you agree and Make an Offering (R212) tomorrow, add +2 to your roll. You cannot seek further audiences in this hex until you Make an Offering here.",
          ],
          [
            "5",
            "The High Priest agrees to provide modest support for your quest, and gives you WC110. You cannot seek further audiences here.",
          ],
          [
            "6",
            "The High Priest provides full support; he gives you 200 gold plus WC110. However, you cannot seek further audiences with him.",
          ],
        ],
      },
    ],
  },
  {
    tag: "E156",
    title: "Audience with the Town Mayor",
    type: "npc",
    desc: "You have private discussions with the Mayor.",
    tables: [
      {
        type: "roll-table",
        label: "Mayor Reaction (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "He is insulted. See E060 immediately."],
          [
            "2",
            "He hears your story, but remains stone-faced, unwilling or unable to help. You are free to seek audiences with him again any day.",
          ],
          [
            "3",
            "He hears your story and gives you free food and lodging for tonight as a distinguished visitor from the north. You are free to seek audiences with him again any day.",
          ],
          [
            "4",
            "He hears your pleas with favour, and gives you a Letter of Recommendation (E157) to the Lord of the nearest castle. You cannot seek further audiences with him until next week at the earliest.",
          ],
          [
            "5",
            "He hears your story with interest, gives you a Letter of Recommendation (E157) to the Lord of the nearest castle, and 50 gold for expenses. You cannot seek further audiences with him until you have used the letter.",
          ],
          [
            "6",
            "If your party includes a monk or priest, the Mayor supports your cause for religious reasons and gives you a letter of recommendation to any castle or temple you request, wealth 100, and his trusted assistant (EV4 CS4). You cannot seek another audience with him until you have used the letter, or the assistant is killed or leaves by means other than your dismissal. If you have no monk or priest, he dismisses you and refuses further audiences until you have one.",
          ],
        ],
      },
    ],
  },
  {
    tag: "E157",
    title: "Letter of Recommendation",
    type: "item",
    desc: "You are given a properly-signed and sealed letter that provides an introduction to the appropriate Lord. This allows you to add +2 to your dice roll when you Seek an Audience (R211) with that Lord at the hex of their residence.",
  },
  {
    tag: "E158",
    title: "Hostile Guards",
    type: "combat",
    desc: "You leave the rest of your party in an atrium and are confronted by 2 hostile guards (EV6 CS5 WC7). If you pay 20 gold as a bribe they will let you pass — roll again to Seek an Audience (R211) here. Otherwise, they attack you, getting the first strike in combat (R220). Regardless of whether you win or lose, you must immediately escape from this hex (R218).",
    note: "In a village (E158A): You are cornered alone by 2 hostile guards (CS4 EV5 WC6). Bribe costs 10 gold. Roll again for Seek an Audience (R211A) if you pay. Otherwise they attack with first strike (R220); you must escape (R218) either way.",
  },
  {
    tag: "E159",
    title: "Must Purify Yourself",
    type: "event",
    desc: "You must Make an Offering (R212) at a temple before you can Seek an Audience (R211C) again in this hex. The offering can be made at any temple. This result does not prevent you from seeking audiences elsewhere before making this offering. If you make the required offering and then try for another audience in this hex, your devotion is noted and you can add +2 to the Seek an Audience roll.",
  },
  {
    tag: "E160",
    title: "Audience with Lady Aeravir",
    type: "npc",
    desc: "You are allowed a semi-private interview with the ruler of Aeravir Castle.",
    tables: [
      {
        type: "roll-table",
        label: "Lady Aeravir's Reaction (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          [
            "1",
            "Lady Aeravir listens graciously, but is uninterested in the problems of the Northlands; you come away with nothing, and you cannot seek further audiences with her.",
          ],
          [
            "2",
            "The Lady listens to your story, but seems distracted; the audience ends without a favourable result, but you can seek an audience with her again another day.",
          ],
          [
            "3",
            "The Lady takes pity on you; she gifts you WC60 to help in your quest, but decrees that you cannot seek another audience with her.",
          ],
          [
            "4",
            "Lady Aeravir finds you favourably endowed with virtue. You and your party are invited to eat (R215) and lodge (R217) here as often as you please. In addition, she gifts you WC110 to help on your quest, but declares that should you seek another audience, you will be refused.",
          ],
          [
            "5",
            "The Lady has seductive charms; 1d6 days pass before you return to your senses! After advancing the time track, roll 1d6 on this table again. Your entire party has been living in the castle, but any true love (R228) has deserted in despair, and you cannot roll for her return until after you leave this hex.",
          ],
          [
            "6",
            "Lady Aeravir decides to support your cause fully. She gives you 1d6×150 gold, an escort of 3 stalwart knights (EV6 CS7), mounts for your entire party, and 1 spare pack-horse. Tonight she holds a grand feast providing food (R215) and lodging (R217) free. Any wounded party members are fully healed by her healers, even poisoned wounds.",
          ],
        ],
      },
    ],
  },
  {
    tag: "E161",
    title: "Audience with Count Drogat",
    type: "npc",
    desc: "You are allowed a semi-private audience with the ruler of Drogat Castle. Roll 1d6 for the result, and add +1 if you have a Trollskin and give it to the Count.",
    tables: [
      {
        type: "roll-table",
        label: "Count Drogat's Reaction (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          [
            "1",
            "The Count's eyes glow like red coals — you are his next victim. See E061!",
          ],
          [
            "2",
            "The Count listens with half an ear, but the audience ends with no result; you can seek further audiences some other day.",
          ],
          [
            "3",
            "The Count is in a humorous mood; he gives you flippant advice and sends you forth. You must leave Drogat Castle tomorrow, and are advised to never seek an audience with the Count again unless you carry a letter of recommendation.",
          ],
          [
            "4",
            "The Count takes an interest in your situation, and provides you with 100 gold and a treasure worth WC110 to further your cause.",
          ],
          [
            "5",
            "If you personally have killed at least 5 men or creatures, the Count takes an interest and provides 300 gold, a treasure of WC110, and two winged pegasus mounts. Otherwise, you are dismissed and cannot seek further audiences until you have achieved five personal kills. You are advised to never seek another audience, since the Count was in one of his rare, good moods.",
          ],
          [
            "6",
            "The Count listens to your story with interest. Upon learning the names of the Northern usurpers, he declares that they were the very ones who did him ill deeds many years ago. He immediately rallies his army to your cause, and uses his powerful magic to transport you, your party, and his army to the Northland capital to retake your throne. You immediately win!",
          ],
        ],
      },
    ],
  },
  {
    tag: "E162",
    title: "Learn Secrets",
    type: "story",
    desc: "You finally accumulate enough hints and bits of unrelated information to learn of the important secrets of this region.",
    tables: [
      {
        type: "roll-table",
        label: "Secret Learned (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "E147"],
          ["2", "E143"],
          ["3", "E176"],
          ["4", "E144"],
          ["5", "E145"],
          ["6", "E146"],
        ],
      },
    ],
  },
  {
    tag: "E163",
    title: "Slave Market",
    type: "settlement",
    desc: "You can purchase slaves at the auction block. Porter slaves (R206) are available for 1d6 gold per porter — they need no wages and will function even if not fed (R215), but each day without food halves their carrying capacity (rounded down); when capacity reaches zero, they die. Slave girls are available for 2d6+2 gold each; each functions as a Gift of Charm (E182) as long as she is fed properly (R215). Slave girls who are not fed lose this ability until fed regularly for as many days as they missed meals; normal starvation risks (R216) apply each day without food. For each girl bought, roll 2d6: on a 12 exactly, you fall for her, freeing her as your true love (R228). Finally, on the market you find an old warrior available for 1d6 gold (add +2 to his price if you did not already buy porters or slave girls). If you buy and free him, he becomes a willing party member at no pay. Roll 1d6+1 for his combat skill and 1d6+1 for his endurance.",
  },
  {
    tag: "E164",
    title: "Giant Lizard",
    type: "combat",
    desc: "A thundering giant lizard (EV12 CS10) that shakes the earth as it walks attacks you, but you strike first in combat (R220). Escape is only possible if you have mounts; those without cannot escape.",
  },
  {
    tag: "E165",
    title: "The Imp of Pelgar",
    type: "story",
    desc: "You learn that the town of Pelgar was destroyed after the townsfolk reneged on a deal struck with an infernal imp. The imp is rumoured to still inhabit the ruins, lording over the imprisoned souls of the townsfolk who reneged on him.",
    note: "Travel to the ruins of Pelgar (hex 2009) with either a magician, monk, priest, witch, or wizard in your party, OR a resistance talisman (E184) to protect you from the imp's foul magic. After you Search Ruins (R208), you may roll 1d6 to attempt to strike your own bargain.",
    tables: [
      {
        type: "roll-table",
        label: "Strike a Bargain (1d6)",
        cols: ["Roll", "Result"],
        rows: [
          [
            "1",
            'Nothing happens — the "Imp of Pelgar" is just a bedtime story…',
          ],
          [
            "2",
            "The imp (EV3 CS4 WC110) appears and attacks you with its powerful magic. It is only hurt by wounds from a magic sword or strikes from a magician, monk, priest, witch, or wizard.",
          ],
        ],
      },
    ],
  },
];
