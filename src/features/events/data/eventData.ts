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
];
