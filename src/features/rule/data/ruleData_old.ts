import type { Rule } from "../types/RuleType";

const ruleData: Rule[] = [
  {
    tag: "r201",
    title: "Characters",
    type: "character",
    desc: "Each character in the game has a combat skill, an endurance value, and a wealth code. Each is rated numerically, with higher numbers being better. If no wealth code is given, it is presumed to be zero (no wealth). The characters include yourself (the Barbarian Prince, see r202), any followers who join your “party, ” and any men, women, creatures or animals encountered in the course of the game. Characters can be friendly or hostile, intelligent or unintelligent. When a character joins your party, note his (or her) vital statistics as needed. You can voluntarily dismiss or abandon members of your party if you wish (sometimes expedient when making an escape, or when food or money is short). Other characters encountered during events need not be permanently recorded. Unless they join your party, these other characters simply go on their way, and “disappear” from the game.",
  },
  {
    tag: "r202",
    title: "Your Character",
    type: "character",
    desc: "You begin play as the Barbarian Prince, Cal Arath, rightful heir to the throne of the Northlands Kingdom. Few humans can match your skill with trusty Bonebiter, your broadsword: you have combat skill 8. Life in the harsh northlands has developed your powerful body and magnificent physique: you have endurance 9. Alas, in making your escape, you could only grab a few coins; your wealth code is 2 (see r225 for determine exactly how many gold pieces your have). In addition, you have a “wit & wiles” rating, reflecting your ability to react quickly to situations, think your way out of trouble, and convince people. Roll one die to determine this “wit & wiles.” If the result is 1, consider it 2 instead. If you have played the game before and won, you may wish an extra challenge by using a wit & wiles rating one less than your previous value; if you lost before, use a wit & wiles one higher than the previous value.",
    tables: [
      {
        type: "simple-list",
        label: "Starting Stats",
        rows: [
          ["Combat Skill", "8"],
          ["Endurance", "9"],
          ["Wealth Code", "2"],
          ["Wit & Wiles", "Roll 1d6 (min 2)"],
        ],
      },
    ],
  },
  {
    tag: "r203",
    title: "Daily Actions",
    type: "action",
    desc: "At the start of each day, you select one action for yourself. All followers perform the same action. Normally limited to one action per day, though some events allow a bonus action.",
    tables: [
      {
        type: "simple-list",
        label: "Actions (any hex)",
        rows: [
          ["Rest", "Heal wounds (r222) and improve hunting (r215)"],
          ["Travel", "Move to a new hex (r204)"],
          ["Search Cache", "Search for a previously placed cache (r214)"],
        ],
      },
      {
        type: "simple-list",
        label: "Actions (restricted hexes)",
        rows: [
          ["Seek News & Information", "Town, castle, or temple (r209)"],
          ["Seek to Hire Followers", "Town or castle (r210)"],
          ["Seek Audience", "Town, castle, or temple (r211)"],
          ["Submit Offering", "Temple only (r212)"],
          ["Search Ruins", "Ruins only (r208)"],
        ],
      },
    ],
  },
  {
    tag: "r204",
    title: "Travel",
    type: "movement",
    desc: "You can travel to new hexes as a daily action. Travel hex by hex; you cannot skip or jump any hex unless a special event allows it.",
    tables: [
      {
        type: "simple-list",
        label: "Travel Speeds",
        rows: [
          ["On foot (any unmounted character)", "1 hex/day"],
          ["Fully mounted party", "1–2 hexes/day"],
          ["Winged mounts (airborne)", "Up to 3 hexes/day"],
          ["Winged mounts (short hop)", "1–2 hexes/day (ground entry)"],
        ],
      },
    ],
    note: "See r204a–r204f for sub-rules on speed, getting lost, roads, airborne travel, river crossings, and time.",
  },
  {
    tag: "r204a",
    title: "Travel Speeds",
    type: "movement",
    desc: "If any character in your party is without a mount (on foot), the entire party travels “on foot” at the speed of one hex per day. If everyone in your party is mounted (presumably on horses, mules, or similar beasts), the party as a whole can travel either one or two hexes per day. If the entire party is riding winged mounts, the party can instead use airborne travel up to three hexes per day. When airborne, the party flies for the entire day, and lands in the land hex entered to camp for the night. If your party has winged mounts, you can instead ride or “short hop” one or two hexes per day, as if you were mounted in the normal fashion. In this case, you enter each hex on the ground.",
  },
  {
    tag: "r204b",
    title: "Travel Events",
    type: "movement",
    desc: "Each time you attempt to enter a new hex, an event may occur. Find the terrain type you attempted to enter on the Travel Table (r207) and read to the “Event” column. Roll two dice. If the total equals or exceeds the number listed, an event occurs. Roll one die and read across to the proper “Event Reference” number listed for that die roll. Then go that event section.",
  },
  {
    tag: "r204c",
    title: "Roads",
    type: "movement",
    desc: "If you leave a hex via a road, you can never get lost — you are following the road. Use the “Road” line on the Travel Table (r207) for new events. If no road travel event occurs, then consult the Travel Table again for an event in the terrain you entered, consulting the proper line for the type of terrain in the hex. If a road event does occur, you need not consult the table again for a normal “terrain” travel event unless you wish.",
  },
  {
    tag: "r204d",
    title: "Airborne Travel",
    type: "movement",
    desc: "If you are flying (not short-hopping), each hex entered requires that you use the “airborne” line on the Travel Table, instead of the normal line for that terrain type. In the last hex you enter for the day, if no airborne travel event occurs, then you must consult a normal “terrain” type event for the hex where you land (last hex entered). Unlike road travel, the terrain type event must be consulted for the hex where you finally land (which, due to airborne events, might be different from where you intended to land!).",
  },
  {
    tag: "r204e",
    title: "River Crossing",
    type: "movement",
    desc: "If your travel takes you over a river, you must first consult the Travel Table (r207) for getting over the river without getting lost (r205), and then for a possible event crossing the river, by using the “River” line of the table. If this doesn’t prevent you from crossing, you then enter the hex on the other side, check for getting lost moving into that hex, and any travel events for the terrain entered there. If you are flying, you can fly over a river and ignore all crossing problems (do not check for getting lost crossing the river, and do not check for river crossing events).",
  },
  {
    tag: "r204f",
    title: "Travel Events and Time",
    type: "movement",
    desc: "An event that occurs during travel will normally consume the rest of the day. You cannot move any further that day, unless the event allows or requires some sort of extra movement. The only exception is events that are resolved purely through combat (r220), and you killed all those encountered. In addition, events where just talk or negotiate occurred only take a few minutes. You can continue travel afterwards if you have any speed remaining, and wish to continue.",
  },
  {
    tag: "r205",
    title: "Lost",
    type: "movement",
    desc: "Each time you attempt to leave a hex there is a danger of becoming lost. Consult the Travel Table (r207) for the terrain you are leaving and roll two dice. If the total equals or exceeds the 'Lost' number, your party is lost and cannot travel further that day.",
    note: "Sub-rules: r205a Local Guide (-1 to lost roll), r205b Self-Guiding Moves (roads/rafts never lost), r205c Airborne Lost (drift roll), r205d River Crossing lost.",
  },
  {
    tag: "r205a",
    title: "Local Guide",
    type: "movement",
    desc: "Your party of followers may include a guide. If it does, subtract one (-1) from your dice roll for getting lost. This means it is more difficult to get lost if you have a guide. However, if you get lost despite your guide, roll one die. If the result is “4” or higher, the guide deserts out of mortification for his failure, or in fear of your anger! If you have more than one guide, only one will desert (the one you selected as guide for the day), but you are still lost even if you have additional guides available.",
  },
  {
    tag: "r205b",
    title: "Self-Guiding Moves",
    type: "movement",
    desc: "If your party is leaving a hex by travelling along a road, you can never get lost. If you are travelling by raft (r213, only allowed as a result of certain special events) you cannot get lost. There is no need to roll dice for getting lost, although travel events can still occur.",
  },
  {
    tag: "r205c",
    title: "Airborne and Lost",
    type: "movement",
    desc: "If your party is flying (using an airborne move), use the airborne line on the Travel Table (r207) instead of the normal terrain line, to see whether you are lost. If you get lost while making airborne travel, there is danger of extra “wander” and “drift.” Roll one die, if the result is 4 or more, roll one die again and move one hex in that direction (1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW) before landing.",
  },
  {
    tag: "r205d",
    title: "River Crossing",
    type: "movement",
    desc: "If your party is trying to cross a river, first check to see if you get lost in the crossing. If you do, this represents an inability to find a proper crossing place (ford, place to swim, materials for a raft, etc.). There is no travel event afterwards. If you are following a road or airborne; you can cross a river automatically. Crossing by road implies that a permanent bridge exists there (such as one between hexes 1318 and 1319). Once you cross the river, you must still check for getting lost in the terrain of the new hex you are trying to enter. If you get lost after you cross the river, you count as across the river, but are still in the hex where you started the move. Tomorrow you can try again to enter a hex on the opposite side of the river. For example, if you start in 1017, try to cross to 1118, and cross the river but get lost going into 1118, you end your move back in 1017. However, you are now over the river, so tomorrow you can try to enter either 1016, 1117 or 1118, which are all over the river, and next to the place where you start.",
  },
  {
    tag: "r206",
    title: "Transport",
    type: "movement",
    desc: "Any food, gold, and possessions acquired must be carried. Each item has a weight in 'loads'. Anything that cannot be carried must be left behind or cached (r214).",
    tables: [
      {
        type: "simple-list",
        label: "Weights",
        rows: [
          ["1 food unit", "1 load"],
          ["100 gold pieces (or fraction)", "1 load"],
          ["1 person carried", "20 loads"],
          ["Weapons", "0 loads"],
        ],
      },
      {
        type: "simple-list",
        label: "Transport Capacities",
        rows: [
          ["Man on foot / porter", "10 loads"],
          ["Mount (unridden)", "30 loads"],
          ["Mount (ridden)", "rider + 10 loads"],
        ],
      },
    ],
  },
  {
    tag: "r207",
    title: "Travel Table",
    type: "reference",
    desc: "",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [
          ["r207a", "Farmland"],
          ["r207b", "Countryside"],
          ["r207c", "Forest"],
          ["r207d", "Hills"],
          ["r207e", "Swamp"],
          ["r207f", "Mountains"],
          ["r207g", "Desert"],
          ["r207h", "On Road"],
          ["r207i", "Airborne"],
          ["r207j", "Cross River"],
        ],
      },
    ],
  },
  {
    tag: "r207a",
    title: "Farmland",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: 10+"], ["Event: 8+"], ["Hunt: ✅"], ["Fodder: ✅"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e009", "e009", "e009", "e009", "e009", "e009"],
          ["e018", "e018", "e022", "e022", "e023", "e130"],
          ["e003", "e004", "e005", "e006", "e007", "e008"],
          ["e128", "e128", "e128", "e128", "e129", "e017"],
          ["e049", "e048", "e032", "e081", "e050", "e050"],
          ["e078", "e078", "e079", "e079", "e009", "e009"],
        ],
      },
    ],
  },
  {
    tag: "r207b",
    title: "Countryside",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: 9+"], ["Event: 9+"], ["Hunt: ✅"], ["Fodder: ✅"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e003", "e004", "e005", "e006", "e007", "e008"],
          ["e009", "e009", "e050", "e018", "e022", "e023"],
          ["e052", "e055", "e057", "e051", "e054", "e052"],
          ["e077", "e075", "e075", "e075", "e076", "e081"],
          ["e044", "e046", "e067", "e064", "e068", "e069"],
          ["e078", "e078", "e078", "e078", "e079", "e079"],
        ],
      },
    ],
  },
  {
    tag: "r207c",
    title: "Hills",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: 8+"], ["Event: 10+"], ["Hunt: ✅"], ["Fodder: ✅"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e003", "e004", "e005", "e006", "e007", "e008"],
          ["e098", "e102", "e023", "e051", "e068", "e022"],
          ["e028", "e028", "e058", "e070", "e055", "e056"],
          ["e076", "e076", "e076", "e075", "e128", "e128"],
          ["e118", "e052", "e059", "e067", "e066", "e064"],
          ["e078", "e078", "e078", "e085", "e079", "e079"],
        ],
      },
    ],
  },
  {
    tag: "r207d",
    title: "Forest",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: 8+"], ["Event: 9+"], ["Hunt: ✅"], ["Fodder: ✅"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e003", "e004", "e005", "e006", "e007", "e008"],
          ["e074", "e074", "e073", "e009", "e051", "e128"],
          ["e071", "e071", "e052", "e082", "e080", "e080"],
          ["e083", "e083", "e084", "e084", "e076", "e075"],
          ["e165", "e166", "e065", "e064", "e087", "e087"],
          ["e078", "e078", "e078", "e078", "e079", "e079"],
        ],
      },
    ],
  },
  {
    tag: "r207e",
    title: "Swamp",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: 5+"], ["Event: 10+"], ["Hunt: ✅"], ["Fodder: ❌"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e003", "e004", "e005", "e006", "e007", "e008"],
          ["e022", "e009", "e073", "e051", "e051", "e074"],
          ["e034", "e082", "e164", "e052", "e057", "e098"],
          ["e091", "e091", "e094", "e094", "e092", "e092"],
          ["e089", "e089", "e089", "e090", "e064", "e093"],
          ["e078", "e078", "e078", "e095", "e095", "e097"],
        ],
      },
    ],
  },
  {
    tag: "r207f",
    title: "Mountains",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: 7+"], ["Event: 9+"], ["Hunt: ❌"], ["Fodder: ❌"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e003", "e004", "e005", "e006", "e007", "e008"],
          ["e099", "e100", "e023", "e068", "e101", "e102"],
          ["e028", "e028", "e058", "e055", "e052", "e054"],
          ["e078", "e078", "e079", "e079", "e088", "e065"],
          ["e085", "e085", "e086", "e086", "e086", "e095"],
          ["e118", "e052", "e059", "e067", "e066", "e064"],
        ],
      },
    ],
  },
  {
    tag: "r207g",
    title: "Desert",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: 6+"], ["Event: 10+"], ["Hunt: ❌"], ["Fodder: ❌"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e022", "e129", "e128", "e051", "e023", "e068"],
          ["e028", "e082", "e055", "e003", "e004", "e028"],
          ["e005", "e120", "e120", "e120", "e067", "e066"],
          ["e034", "e164", "e164", "e091", "e091", "e120"],
          ["e064", "e064", "e121", "e121", "e121", "e093"],
          ["e078", "e078", "e078", "e078", "e096", "e096"],
        ],
      },
    ],
  },
  {
    tag: "r207h",
    title: "On Road",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: Never"], ["Event: 9+"], ["Hunt: ❌"], ["Fodder: ❌"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e018", "e022", "e023", "e073", "e009", "e009"],
          ["e050", "e051", "e051", "e051", "e003", "e003"],
          ["e004", "e004", "e005", "e006", "e006", "e008"],
          ["e007", "e007", "e057", "e130", "e128", "e128"],
          ["e049", "e048", "e081", "e128", "e129", "e129"],
          ["e078", "e078", "e079", "e079", "e128", "e129"],
        ],
      },
    ],
  },
  {
    tag: "r207i",
    title: "Airborne",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: 12+"], ["Event: 10+"], ["Hunt: ❌"], ["Fodder: ❌"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e102", "e102", "e103", "e103", "e104", "e104"],
          ["e112", "e112", "e112", "e112", "e108", "e108"],
          ["e106", "e106", "e105", "e105", "e079", "e079"],
          ["e107", "e109", "e077", "e101", "e110", "e111"],
          ["e099", "e098", "e100", "e101", "e064", "e065"],
          ["e281", "e281", "e281", "e281", "e281", "e281"],
        ],
      },
    ],
  },
  {
    tag: "r207j",
    title: "Cross River",
    type: "reference",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [["Lost: 8+"], ["Event: 10+"], ["Hunt: ❌"], ["Fodder: ❌"]],
      },
      {
        type: "roll-table",
        label: "Matrix (6x6)",
        cols: ["1", "2", "3", "4", "5", "6"],
        rows: [
          ["e003", "e004", "e005", "e006", "e007", "e008"],
          ["e122", "e122", "e122", "e009", "e051", "e074"],
          ["e123", "e123", "e057", "e057", "e052", "e055"],
          ["e094", "e094", "e091", "e091", "e075", "e084"],
          ["e083", "e076", "e077", "e124", "e124", "e124"],
          ["e122", "e122", "e122", "e125", "e126", "e127"],
        ],
      },
    ],
  },
  {
    tag: "r208",
    title: "Searching Ruins",
    type: "action",
    desc: "As a daily action, you spend the day searching ruins with your party. To see what happens during your search, roll 2d6.",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Event"],
        rows: [
          ["2", "e133"],
          ["3", "e135"],
          ["4", "e136"],
          ["5", "e137"],
          ["6", "e139"],
          ["7", "e131"],
          ["8", "e132"],
          ["9", "e134"],
          ["10", "e138"],
          ["11", "e135"],
          ["12", "e035"],
        ],
      },
    ],
  },
  {
    tag: "r209",
    title: "Seeking News and Information",
    type: "action",
    desc: "Spend the day in taverns, streets and markets talking and learning. Roll 2d6. Add +1 if you spend 5+ gold. Add +1 if your Wit & Wiles is 5 or higher.",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["2", "No news of note, nothing seems to be happening."],
          [
            "3",
            "Discover thieves' den, pillage it while they're out, gain 50 gold.",
          ],
          [
            "4",
            "Rumours of secret rites at nearest temple; add +1 to Offerings (r212) rolls there from now on.",
          ],
          [
            "5",
            "Feel at home; always add +1 to r209 or r210 rolls in this hex in future.",
          ],
          [
            "6",
            "A large caravan is in town; if you visit them today, see e129.",
          ],
          [
            "7",
            "Discover cheaper lodgings and food; pay half normal price in this hex.",
          ],
          ["8", "A cutpurse picks your pocket; lose half your wealth."],
          ["9", "Attract attention of local constabulary; see e050."],
          [
            "10",
            "Discover residence of local magician; if you visit him today, see e016 (friendly).",
          ],
          [
            "11",
            "Discover local thieves' guild; invited to join a 200 gold theft tonight. Must escape (r218). Pay 10% (20 gold) or never return to hex.",
          ],
          [
            "12",
            "Secret informant offers info for 10 gold. Roll 1d6: 1-worthless; 2-e147; 3-e143; 4-e144; 5-e145; 6-e146.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r210",
    title: "Seeking to Hire Followers",
    type: "action",
    desc: "Spend the day posting notices and inquiring at taverns about hired help. Roll 2d6 for results.",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          [
            "2",
            "Freeman joins at no cost (food/lodging only). Combat skill 3, endurance 4.",
          ],
          ["3", "Lancer with horse: 3 gold/day. Combat skill 5, endurance 5."],
          [
            "4",
            "One or two mercenaries: 2 gold/day each. Combat skill 4, endurance 4.",
          ],
          ["5", "Horse dealer in area; buy horses (mounts) at 10 gold each."],
          ["6", "Local guide (r205): 2 gold/day. Combat skill 2, endurance 3."],
          [
            "7",
            "Henchmen: roll 1d6 for number available. Combat skill 3, endurance 3. 1 gold/day each.",
          ],
          ["8", "Slave market; see e163."],
          [
            "9",
            "Nothing available; gain news — see r209 but subtract -1 from roll.",
          ],
          ["10", "Honest horse dealer; buy horses (mounts) at 7 gold each."],
          [
            "11",
            "Runaway boy or girl joins at no cost (food/lodging only). Combat skill 1, endurance 3.",
          ],
          [
            "12",
            "Porters (any quantity): ½ gold/day each. Plus local guide (r205): 2 gold/day, combat skill 1, endurance 2.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r211",
    title: "Seeking an Audience with the Local Lord",
    type: "encounter",
    desc: "Spend the day trying to gain admission to the hall or court for an interview with the town mayor, high priest, or castle lord. Roll 2d6 and consult the appropriate table.",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [
          ["r211a", "Audience at any Town"],
          ["r211b", "Audience at any Temple"],
          ["r211c", "Audience with Baron of Huldra Castle"],
          ["r211d", "Audience with Count Drogat of Drogat Castle"],
          ["r211e", "Audience with Lady Aeravir of Aeravir Castle"],
        ],
      },
    ],
    note: "Temple modifier: +1 if party includes priests or monks. -2 if party includes magicians, wizards, or witches (or dismiss them first). Huldra Castle modifier: +1 if you dismiss any wizard, magician, or witch to take service with the Baron.",
  },
  {
    tag: "r211a",
    title: "Audience at any Town",
    type: "encounter",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["2", "Grievously insult the town council; e062."],
          ["3", "Slanderous aside about mayor's wife blamed on you; e060."],
          ["4", "Meet hostile guards; e158."],
          ["5", "Encounter the Master of the Household; e153."],
          ["6–8", "Audience refused today, you may try again."],
          ["9–10", "Audience permitted; e156."],
          ["11", "Meet daughter of the mayor; e154."],
          ["12", "Audience permitted; e156."],
        ],
      },
    ],
  },
  {
    tag: "r211b",
    title: "Audience at any Temple",
    type: "encounter",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["2", "Anger temple guards; e063."],
          ["3", "Priestess resents a lewd remark; e060."],
          ["4", "Encounter hostile guards; e158."],
          ["5", "Audience refused today, you may try again."],
          ["6", "Must purify yourself; e159."],
          ["7", "Audience refused today, you may try again."],
          [
            "8",
            "Allowed audience if you give temple a Dragon's Eye (e155); otherwise deal with Master of the Household (e153).",
          ],
          ["9", "Permitted to pay your respects; e150."],
          ["10", "Must purify yourself; e159."],
          ["11+", "Audience permitted; e155."],
        ],
      },
    ],
  },
  {
    tag: "r211c",
    title: "Audience with Baron of Huldra Castle",
    type: "encounter",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["2", "Audience permanently refused, cannot try again."],
          ["3", "Meet Baron's Daughter; e154."],
          ["4", "Must learn court manners; e149."],
          ["5", "Confronted by hostile guards; e158."],
          ["6–7", "Audience refused today, you may try again."],
          ["8", "Encounter the Master of the Household; e153."],
          ["9", "Seneschal requires a bribe; e148."],
          ["10–11", "Pay your respects to the Baron; e150."],
          ["12", "Find favour in the eyes of the Baron; e151."],
          ["13+", "Baron becomes your Noble ally; e152."],
        ],
      },
    ],
  },
  {
    tag: "r211d",
    title: "Audience with Count Drogat of Drogat Castle",
    type: "encounter",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["2", "You are the Count's next victim; e061."],
          ["3", "Captain of the Guard dislikes your haircut; e062."],
          ["4", "Meet the daughter of the Count; e154."],
          ["5", "Encounter the Master of the Household; e153."],
          ["6", "Confronted by hostile guards; e158."],
          [
            "7",
            "Gain audience (e161) if you give the Roc's Beak to the Doorman; otherwise arrested (e060).",
          ],
          ["8", "Seneschal requires a bribe; e148."],
          ["9", "Must learn court manners; e149."],
          ["10", "Find favour in the eyes of the Count; e151."],
          ["11+", "Audience granted with Count; e161."],
        ],
      },
    ],
  },
  {
    tag: "r211e",
    title: "Audience with Lady Aeravir of Aeravir Castle",
    type: "encounter",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["2", "You insult the Lady's dignity; arrested e060."],
          ["3", "Must purify yourself first; e159."],
          ["4", "Untoward remark makes the guards hostile; e158."],
          ["5", "Must learn better court manners; e149."],
          ["6", "Meet the Master of the Household; e153."],
          [
            "7",
            "Gain audience (e160) if you give the Griffon's Claw; otherwise audience refused, may try again.",
          ],
          ["8", "Audience refused, but you may try again."],
          ["9", "Seneschal requires a bribe; e148."],
          ["10", "Audience granted; e160."],
          ["11", "Meet daughter of the Lady Aeravir; e154."],
          ["12+", "Audience granted; e160."],
        ],
      },
    ],
  },
  {
    tag: "r212",
    title: "Make an Offering at a Temple",
    type: "action",
    desc: "Spend the day preparing and giving an offering at the temple altar. Only permitted at a temple hex. Must spend at least 1 gold piece. Add +1 to roll if you spend 10+ gold pieces. Roll 2d6 for result.",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          [
            "2",
            "Magnificent error in rites; temple becomes impure and abandoned for the rest of the game. Arrested and sentenced to death; e061.",
          ],
          ["3", "Good Omens, but no special result."],
          [
            "4",
            "Bad Omens — travelling under a curse. Roll 1d6 per follower; any result except '1' means they desert. Cannot seek to hire followers (r210) in this hex for the rest of the game.",
          ],
          [
            "5",
            "High Priest insulted by your northern manners; arrested e060.",
          ],
          [
            "6",
            "Good Omens; receive free food (r215) and lodging (r217) tonight.",
          ],
          [
            "7",
            "Favourable Omens; if you try Offerings again tomorrow, add +1 to your roll. Otherwise no effect.",
          ],
          [
            "8",
            "Gods favour your questions; priests assign a monk to your party. Combat skill 2, endurance 3. Serves as guide when leaving this or any adjacent hex only.",
          ],
          [
            "9",
            "Special omen and riddle provides a clue to treasures; see e147.",
          ],
          [
            "10",
            "Fall in love with priestess (r229). Immediately escape (r218) with her; can never return to this hex. Combat skill 2, endurance 4, wealth 100 in stolen temple treasures.",
          ],
          ["11", "The High Priest requires an audience with you; see e155."],
          [
            "12–13",
            "High Priest talks with you; roll 1d6: 1–2: e144; 3–4: e145; 5–6: e146. Alternatively use his influence tomorrow and add +3 to your Offerings roll.",
          ],
          [
            "14+",
            "Gods declare your cause a religious crusade. Staff of Command given to you — bring it to any hex north of the Tragoth River to win the game. Two warrior monks (combat skill 5, endurance 6) with mounts join your party.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r213",
    title: "Rafting on the Rivers",
    type: "movement",
    desc: "You may use raft travel along rivers instead of normal hex travel. Ride the raft until you select a different daily action or roll '12' on 2d6 after each day's travel (raft reaches a stopping point). Travel on river hex-sides. At end of day, camp in either adjacent hex of your choice. Check once for a Rafting travel event (r207) then once for an event in the hex where you halt.",
    tables: [
      {
        type: "simple-list",
        label: "Raft Speed",
        rows: [
          ["Downriver", "3 hex-sides/day"],
          ["Upriver", "2 hex-sides/day"],
        ],
      },
      {
        type: "simple-list",
        label: "River Directions",
        rows: [
          ["Tragoth River", "Flows east to west"],
          ["Nesser River", "Flows north to south"],
          ["Dienstal Branch", "Flows from marsh into the Nesser"],
          [
            "Largos River",
            "Flows out of the marsh toward the northeast (off map)",
          ],
        ],
      },
    ],
    note: "You can never get lost while rafting. Travel events can still occur.",
  },
  {
    tag: "r214",
    title: "Cache",
    type: "action",
    desc: "If you leave possessions or money behind, you can place them in a hidden cache (buried, hidden with citizens, under a magic or holy spell, etc.). Note the hex and contents. Food may never be cached. Gold and other possessions may be cached unless otherwise indicated.",
    tables: [
      {
        type: "roll-table",
        label: "ROll (1d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["1–4", "Cache found intact; recover all items placed there."],
          [
            "5",
            "Unable to find the cache; landmarks have disappeared. May try again in the future.",
          ],
          ["6", "Cache found but looted; nothing remains."],
        ],
      },
    ],
    note: "Recovering a cache takes a full daily action (r203) and includes a possible travel event for the hex terrain (r207).",
  },
  {
    tag: "r215",
    title: "Food",
    type: "food",
    desc: "After all actions and events for the day are finished, you and your party must eat their main meal. This may include hunting, using food stores, or purchasing a meal. Mounts may also require food.",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [
          ["r215a", "Food Units"],
          ["r215b", "Hunting"],
          ["r215c", "Populated Regions and Hunting"],
          ["r215d", "Purchased Meals"],
          ["r215e", "Food Stores"],
          ["r215f", "Animal Fodder"],
        ],
      },
    ],
    note: "Food stores cost 1 gold per unit when purchased in a town, castle, or village (only if you spent the entire day there). Cost of food is separate from lodging (r217).",
  },
  {
    tag: "r215a",
    title: "Food Units",
    type: "food",
    desc: "For convenience, food is counted in “units.” Each unit is sufficient to feed one man for one day. Mounts require two units per day if they are unable to forage for their own fodder. If there is no water available (in a desert hex with no oasis) then the food requirement doubles for men and mounts, to represent the need to carry water supplies also.",
  },
  {
    tag: "r215b",
    title: "Hunting",
    type: "food",
    desc: "If you are in a farmland, countryside, forest, hill or swamp hex you can hunt for food. Any one character in your party can be the hunter. Total his combat skill and half (1⁄2) his current endurance (his endurance minus wounds), round fractions down, and then subtract from that the roll of two dice. The result is the number of food units gained by hunting. If the character can act as a guide, add one to the total. If the total is zero or less, then the hunting was unsuccessful. If the dice roll was “12” exactly, the hunter himself was hurt, regardless of success or failure, roll one die for the number of wounds he suffered. If knocked unconscious or killed, the hunt automatically fails and the hunter dies unless hunting with others.",
    note: "If your party rested today in the hex, you can send additional characters to hunt. Each additional character hunting adds one (+1) to the skill + endurance level of your hunt. The actual skill and endurance of the additional hunters is not counted. However, if the additional hunters are guides, for each guide, add one (+1) extra as well.",
  },
  {
    tag: "r215c",
    title: "Populated Regions and Hunting",
    type: "food",
    desc: "If you hunt in a farmland hex, each time roll one die for a possible event, which occurs after the hunt is finished, but before the evening meal is eaten: 1, 2, 3, 4-nothing; 5-peasant mob in pursuit, see e017; 6-pursued by constabulary, see e050 add two (+2) to the die roll in that event.",
    note: "Hunting is prohibited in any hex with a town, castle, or temple.",
  },
  {
    tag: "r215d",
    title: "Purchased Meals",
    type: "food",
    desc: "If you are in a town, castle, or village you can purchase food for each character in your party. Normal cost is 1 gold piece per character for food that day. Animals cost 1 gold piece per day to feed at the stables of the town/ castle/village. If you don’t purchase food, you must eat stores, as hunting is prohibited in these hexes.",
  },
  {
    tag: "r215e",
    title: "Food Stores",
    type: "food",
    desc: "Food units can be stored and transported (r206) by yourself, other characters, and/or mounts. Food stores can be purchased in a town, castle or village for 1 gold piece per food unit, but only if you spent the entire day in the hex. Each food unit is one (1), load to transport.",
  },
  {
    tag: "r215f",
    title: "Animal Fodder",
    type: "food",
    desc: "Animals can graze and eat fodder for themselves in any terrain where hunting is possible except swamps (i.e., in farmland, countryside, forest, or hills). No hunting, stores or purchases are necessary. If you spend the entire day in a town, castle or temple hex you must stable your animals which cost one (1) gold piece for food, unless you provide the stable with food stores (two units per animal) to feed them.",
  },
  {
    tag: "r216",
    title: "Starvation",
    type: "food",
    desc: "If you cannot provide food each day for characters or mounts, starvation will affect their loyalty and performance.",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [
          ["r216a", "Follower Starvation"],
          ["r216b", "Character Starvation Effects"],
          ["r216c", "Mount Starvation"],
        ],
      },
    ],
  },
  {
    tag: "r216a",
    title: "Follower Starvation",
    type: "food",
    desc: "If followers are not fed, they may desert. Roll two dice for each follower, and subtract your wit & wiles from the total. If the result is 4 or more the character deserts your party. Otherwise he stays and suffers from the character starvation effects (see r216b below). If you have food units, or money to purchase it (in a town, castle or temple) you cannot voluntarily withhold food from your followers unless you go without yourself as well. If there is insufficient food for all, either you withhold it from all (including yourself) or share out what is available to all (this prevents the effects of character starvation in r216b, but does not eliminate the risk of desertion described above).",
  },
  {
    tag: "r216b",
    title: "Character Starvation Effects",
    type: "food",
    desc: "If a character goes, without food for a day, on the following day his ability to carry loads (r206) is halved, with fractions rounded down, and his combat skill is reduced by one. If he goes without food again, load carrying and combat skill is reduced again. When food is available and eaten again, each day’s normal meal also eliminates the effect of one day of starvation. A double meal can be eaten to eliminate the effect of two days of starvation, but triple or larger meals have no additional effect. A character cannot die of starvation within the scope of the game, but after a certain point progressive starvation makes him nearly worthless!",
  },
  {
    tag: "r216c",
    title: "Mount Starvation",
    type: "food",
    desc: "If animals (mounts) in the party go without food, their carrying capacity is halved for each day of starvation, just like characters. When carrying capacity reaches zero, the mount dies. If a winged mount goes without food, it is unable to fly. Unlike characters, as soon as a mount gets a normal meal, it recovers from all starvation effects.",
  },
  {
    tag: "r217",
    title: "Lodging in Towns, Castles and Temples",
    type: "food",
    desc: "If your party finishes the day in a town, castle or temple hex, after eating you normally buy lodging for your party. Each room costs 1 gold piece for the night. You and any priests, monks, magicians, wizards, or witches in your party each require a single room. All other followers can share, two per room, if you wish. Animals are placed in stables at one gold piece per mount.",
    note: "If you decide to not purchase rooms (due to lack of funds, or a desire to save money), you must roll two dice for each character in your party, and then subtract your wit & wiles from the result. If the total is “4” or more, the character deserts - he refuses to serve such a penurious leader! If a mount is without stables, roll one die for each mount, a 4 or higher means thieves steal the mount during the night, it is permanently lost.",
  },
  {
    tag: "r218",
    title: "Escape and Hiding",
    type: "special",
    desc: "Many events lead to your party escaping or hiding from encountered characters.",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [
          ["r218a", "Escape"],
          ["r218b", "Hiding"],
        ],
      },
    ],
  },
  {
    tag: "r218a",
    title: "Escape",
    type: "special",
    desc: "When your party escapes, you move randomly to one of the six adjacent hexes. Roll one die to determine which direction to go: 1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW. Your party is now in that hex for the rest of the day. No new event occurs because you have entered that hex, but any events still pending must be determined, and after all event effects are resolved, you must eat for the day (r215). ",
    note: "Escapes across a river are prohibited, roll again for another route. However, if your entire party has winged mounts able to fly, you can fly over the river and escape that way, do not roll again. Similarly, you cannot escape off the map, roll again for a different direction.",
  },
  {
    tag: "r218b",
    title: "Hiding",
    type: "special",
    desc: "Sometimes your party escapes an encounter by hiding. In this case, you remain in the hex of the event, but are hiding there for the rest of the day. No further travel is possible, nor can you do any other actions. You cannot hunt for food (r215) while hiding, but mounts can forage for their fodder (r215) in the right types of terrain. While in hiding you still eat (r215) and lodge (r217) normally in a town, castle or temple.",
  },
  {
    tag: "r219",
    title: "Following",
    type: "special",
    desc: "In some events, you may secretly follow, or “trail” the characters you encounter. If you encounter mounted characters, your party must be mounted to follow; if you encountered winged, flying characters your party must have winged mounts to follow. When you follow, roll one die to determine which direction the chase will lead: 1-N, 2-NE, 3-SE, 4-S, 5-SW, 6-NW. Your party moves to that hex during the day. All remaining normal travel or actions during the day are ended (even if uncompleted) because you are following instead. Next, consult the event that permitted following to see what happens next. This normally requires another die or dice roll.",
    note: "Sometimes after you follow characters to one hex, you may be required to follow them again before the day ends. In this case, roll the die once more for direction. Unless events indicate otherwise, after a day following the characters you must either attack them in combat (r306) or leave them alone and abandon the chase in order to make your own camp and have your evening meal (r215).",
  },
  {
    tag: "r220",
    title: "Combat",
    type: "combat",
    desc: "Combat is fought in rounds and continues until one side escapes or is wiped out. At the start of each round, decide which of your characters faces each encountered character.",
    tables: [
      {
        type: "simple-list",
        label: "",
        rows: [
          ["r220a", "Combat Procedure"],
          ["r220b", "Selecting Opponents"],
          ["r220c", "Strikes"],
          ["r220d", "Surprise"],
          ["r220e", "Escape"],
          ["r220f", "Routs"],
        ],
      },
    ],
  },
  {
    tag: "r220a",
    title: "Combat Procedure",
    type: "combat",
    desc: "Combat is fought in rounds, and continues until one side escapes or is wiped out. At the start of each round, you decide which of your characters will face each character encountered. After the opponents are matched against each other, then all characters on one side strike, and results are applied, followed by all characters on the other side striking back, and results are applied. You and your characters may strike first or second each round, depending on the circumstances of the event.",
  },
  {
    tag: "r220b",
    title: "Selecting Opponents",
    type: "combat",
    desc: "Each character in your party is matched against one encountered character. Each should select a different enemy. If one side has extra characters, you decide which the extra face. They can all face one opponent, or each can face a different one, provided each character has at least one opponent to face.",
  },
  {
    tag: "r220c",
    title: "Strikes",
    type: "combat",
    desc: "When facing multiple opponents, a character can strike at only one each round, but can select which one to strike against. If two or more characters both face an opponent, both strike at him, but each strike is resolved separately. To resolve a strike, take the combat skill of the striker, and subtract from it the combat skill of the target character. If the target has better skill, the result will be a negative number. Next roll two dice, and add the result of the skill comparison to the dice roll. Finally, add or subtract any special modifiers that apply to the total. These special modifiers are:",
    note: "Take the total that results, and consult the Combat Table (r220c). If one of the listed numbers has occurred, the target suffers the number of wounds indicated. If a number results that is not listed on the combat table, the strike missed and no wounds are inflicted. Example: A Dwarf (combat skill 6, endurance 7) strikes at the Barbarian Prince (combat skill 8, endurance 9) who has one wound. The Dwarf takes his 6 skill, subtracts the Prince’s 8, for “-2”, then rolls two dice and gets a “10”. No special modifiers apply, so the overall result is 8, which means one wound. The Prince now has two wounds, when it is his turn to strike back. The Prince rolls “7”, so his calculation is 8-6+7-1=8, and thus also inflicts one wound. Note that the two wounds of the Prince caused the “-1” special modifier to be applied.",
    tables: [
      {
        type: "simple-list",
        label: "Strike Resolution (r220c)",
        rows: [
          ["Base", "Striker's combat skill − Target's combat skill"],
          ["+ Dice", "Add roll of 2d6"],
          ["+2 modifier", "Target has wounds ≥ half his endurance"],
          ["-1 modifier", "Striker has one or more wounds"],
          [
            "-1 modifier",
            "Striker has wounds ≥ half his endurance (in addition to above)",
          ],
        ],
      },
      {
        type: "roll-table",
        label: "Combat Table (r220c)",
        cols: ["Result", "Wounds Inflicted"],
        rows: [
          ["-1, 3, 5, 8, 11", "1 wound"],
          ["10, 12, 13, 17", "2 wounds"],
          ["14", "3 wounds"],
          ["16, 18, 19", "5 wounds"],
          ["20", "6 wounds"],
          ["Any other", "Miss — no wounds"],
        ],
      },
    ],
  },
  {
    tag: "r220b",
    title: "Surprise",
    type: "combat",
    desc: "If characters achieve surprise in combat, they are allowed one “free” bonus strike at the start of the combat. Then, when the first round starts, the characters with surprise strike first each round.",
  },
  {
    tag: "r220e",
    title: "Escape",
    type: "combat",
    desc: "In a round of battle, instead of striking with characters you may attempt to flee (escape) the battle. Either all or none escape, you cannot leave some behind. When an escape attempt occurs, none of your characters strike. Instead, roll one die. A “4” or higher result allows a successful escape; see r218. If anything else occurs, the battle continues. You can attempt to escape as often as you wish, until you finally succeed.",
  },
  {
    tag: "r220f",
    title: "Routs",
    type: "combat",
    desc: "You can attempt to frighten your enemy into running away from the combat, if you wish. Each time you kill one character in the enemy group, after you finish all strikes, you roll one die. If a “6” occurs the enemy routs, and the battle ends. All surviving enemy characters flee and disappear, so you can’t take their wealth. Otherwise, it is just as if you killed them all. Opposing characters with a combat skill or endurance of 9 or higher are never subject to rout, they will always fight to the death.",
  },
  {
    tag: "r221",
    title: "Wounds and Endurance",
    type: "character",
    desc: "Every character has an endurance value — the number of wounds needed to kill that character. Wounds are caused by combat and other events.",
    tables: [
      {
        type: "simple-list",
        label: "Wound Thresholds",
        rows: [
          [
            "Serious Wound",
            "Wounds ≥ half endurance → combat strike modifiers apply",
          ],
          [
            "Unconscious",
            "Wounds = endurance − 1 → combat skill becomes 0, totally helpless",
          ],
          [
            "Death",
            "Wounds ≥ endurance → character dies. If the Prince dies, game over.",
          ],
        ],
      },
      {
        type: "simple-list",
        label: "Prince Falls Unconscious (r221b)",
        rows: [
          [
            "Followers react",
            "Roll 1d6: 4+ = carry him along; 3 or less = all desert, taking all money and possessions.",
          ],
          ["Transport", "If carried, Prince counts as 20 loads (r206)."],
        ],
      },
    ],
  },
  {
    tag: "r222",
    title: "Rest and Healing Wounds",
    type: "action",
    desc: "You and your party can rest during a day (r203). You must check for an encounter as if travelling into the hex you occupy (r207). If no event involves combat or requires an escape, each character heals 1 wound. You can rest day after day until all wounds are healed. You can never improve endurance beyond a character's original value.",
    note: "Poison wounds cannot be healed by rest — they remain until a special possession provides a cure or the character dies. A character can be wounded and healed any number of times provided he avoids death.",
  },
  {
    tag: "r225",
    title: "Acquiring Treasure",
    type: "treasure",
    desc: "Whenever you kill all characters encountered, your party may take their wealth. Compare each defeated character's wealth code with a 1d6 roll on the Treasure Table (r226) to determine gold pieces. The wealth code is the average result.",
    tables: [
      {
        type: "simple-list",
        label: "Treasure Rules",
        rows: [
          [
            "Defeated characters",
            "Roll 1d6 per character on Treasure Table (r226) using their wealth code.",
          ],
          [
            "Fixed gold events",
            "Some events provide a fixed number of gold pieces directly.",
          ],
          [
            "Wealth code events",
            "Some events reference a wealth code — roll 1d6 on Treasure Table (r226).",
          ],
          [
            "Special Possessions",
            "A letter code (A/B/C) on the Treasure Table means a special item was also found — roll again on the table and consult the letter code line for the specific event.",
          ],
        ],
      },
      {
        type: "simple-list",
        label: "Distributing Acquisitions",
        rows: [
          [
            "Your choice",
            "You decide which characters receive what part of the treasure.",
          ],
          [
            "Follower property",
            "Any money or possession given to a follower becomes his personal property — you cannot take it back.",
          ],
          [
            "Recovery",
            "You can recover a dead follower's wealth unless you had to escape or have already left.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r226",
    title: "Treasure Table",
    type: "reference",
    desc: "Roll 1d6 and cross-reference with the character's wealth code to determine gold pieces. A letter code (A/B/C) alongside a gold amount means a special possession was also found — roll again on this table using the letter code row.",
    tables: [
      {
        type: "roll-table",
        label: "Wealth Codes 0–10",
        cols: ["🎲", "0", "1", "2", "4", "5", "7", "10"],
        rows: [
          ["1", "—", "0", "0", "2", "2", "3", "6"],
          ["2", "—", "0", "1", "3", "3+A", "4", "8"],
          ["3", "—", "1", "2", "4", "4", "6", "9"],
          ["4", "—", "1", "2", "4", "6+A", "8", "11"],
          ["5", "—", "2", "3", "2", "7", "10", "12"],
          ["6", "—", "2", "4", "6", "8+A", "11", "14"],
        ],
      },
      {
        type: "roll-table",
        label: "Wealth Codes 12–50",
        cols: ["🎲", "12", "15", "21", "25", "30", "50"],
        rows: [
          ["1", "5", "10", "15", "20+A", "23", "40"],
          ["2", "9+C", "12", "18", "22", "27", "45"],
          ["3", "11+A", "14", "20", "24+A", "29", "48"],
          ["4", "12", "16", "22", "26", "31", "52"],
          ["5", "15+A", "18", "24", "28+A", "33", "55"],
          ["6", "20", "20", "27", "30", "37", "60"],
        ],
      },
      {
        type: "roll-table",
        label: "Wealth Codes 60–110",
        cols: ["🎲", "60", "70", "100", "110"],
        rows: [
          ["1", "45+A", "55", "85", "80+B"],
          ["2", "50+C", "60", "90", "90+C"],
          ["3", "55", "65", "95", "100+B"],
          ["4", "60+B", "70", "100", "110+A"],
          ["5", "70+A", "80", "110", "130+C"],
          ["6", "80", "90", "120", "150+A"],
        ],
      },
      {
        type: "roll-table",
        label: "Special Possessions (A / B / C)",
        cols: ["🎲", "A", "B", "C"],
        rows: [
          ["1", "e180", "e180", "e186"],
          ["2", "e181", "e186", "e188"],
          ["3", "e182", "e187", "e189"],
          ["4", "e183", "e188", "e191"],
          ["5", "e184", "e190", "e192"],
          ["6", "e185", "e193", "e194"],
        ],
      },
    ],
  },
  {
    tag: "r227",
    title: "Trap Locks",
    type: "special",
    desc: "To open or enter an item with a trap lock, you must survive the trap. You can have someone else open it, but then that person is entitled to whatever is within. Roll 1d6 to determine what happens.",
    tables: [
      {
        type: "roll-table",
        label: "Roll (1d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["1", "Poison needle — inflicts 1 poisoned wound."],
          ["2", "Burning acid explodes — roll 1d6 for wounds suffered."],
          ["3", "Poison gas bursts — roll 1d6 for poison wounds suffered."],
          [
            "4",
            "Plague dust — roll 1d6, halve result (round up) = wounds suffered at end of each day until recovery. After each day's wounds, roll 1d6: 4+ = recovered.",
          ],
          ["5", "Flying spikes and knives — roll 1d6 + 3 for wounds suffered."],
          ["6", "Trap malfunctions — no wounds suffered."],
        ],
      },
    ],
  },
  {
    tag: "r228",
    title: "True Love",
    type: "special",
    desc: "You may fall in love with a female and vice versa. Your true love will always accompany you in your party until death or unavoidable circumstance parts you. She will never desert you regardless of food or money, and you can never voluntarily abandon her.",
    tables: [
      {
        type: "simple-list",
        label: "Reuniting After Separation",
        rows: [
          ["Daily roll", "Roll 2d6 at end of each day while separated."],
          ["10 or 11", "True love has found you and rejoins your party."],
          ["12", "She died trying to find or protect you."],
          [
            "On reunion",
            "Roll 2d6: 9+ = she acquired a horse mount on her own journeys. 12 exactly = she has a winged Pegasus mount.",
          ],
        ],
      },
      {
        type: "simple-list",
        label: "Advantages and Special Cases",
        rows: [
          [
            "Wit & Wiles bonus",
            "While true love accompanies you, Wit & Wiles is increased by +1.",
          ],
          [
            "Eternal Triangle",
            "If you acquire a second 'true love', neither counts as a true love and all bonuses are lost.",
          ],
          [
            "Triangle desertion",
            "Each day a competing true love would desert, roll 1d6: 3+ = she stays that day; 2 or less = she leaves. Last remaining becomes your true love again.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r230",
    title: "Raft Travel Events",
    type: "reference",
    desc: "When a raft travel event occurs (r213), roll 2d6 and refer to the appropriate event section.",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Event"],
        rows: [
          ["2", "e125"],
          ["3", "e126"],
          ["4", "e018"],
          ["5", "e129"],
          ["6", "e127"],
          ["7", "e128"],
          ["8", "r232"],
          ["9", "e051"],
          ["10", "e094"],
          ["11", "e091"],
          ["12", "e126"],
        ],
      },
    ],
  },
  {
    tag: "r231",
    title: "Travelling Event References",
    type: "reference",
    desc: "When the Travel Table (r201) or an event references one of these numbers, find the appropriate number on the list, roll one die, and read across to get the appropriate event section.",
  },
  {
    tag: "r232",
    title: "Raft Travel Reference",
    type: "reference",
    tables: [
      {
        type: "roll-table",
        label: "",
        cols: ["🎲", "Event"],
        rows: [
          ["1", "e003"],
          ["2", "e004"],
          ["3", "e005"],
          ["4", "e006"],
          ["5", "e007"],
          ["6", "e008"],
        ],
      },
    ],
  },
  {
    tag: "r281",
    title: "Special Travel Reference",
    type: "reference",
    desc: "Refer to the Travel Table (r207) and roll 1d6. Using the appropriate line for the terrain type you occupy, read across to the Event References column for that die roll. This produces a Travel Event Reference (r231–r280).",
  },
  {
    tag: "r300",
    title: "Surprise",
    type: "combat",
    desc: "Your party surprises the characters encountered in combat (r220).",
  },
  {
    tag: "r301",
    title: "Surprise",
    type: "combat",
    desc: "Roll 1d6. If your Wit & Wiles equals or exceeds the die roll, your party surprises the characters encountered. Otherwise you strike first in combat (r220).",
  },
  {
    tag: "r302",
    title: "Surprise",
    type: "combat",
    desc: "Roll 1d6. If your Wit & Wiles exceeds the die roll, your party surprises the characters encountered. Otherwise you strike first in combat (r220).",
  },
  {
    tag: "r303",
    title: "Surprise",
    type: "combat",
    desc: "Roll 1d6. If the number of characters in your party is less than the roll, your party surprises the characters encountered. Otherwise you strike first in combat (r220).",
  },
  {
    tag: "r304",
    title: "Attack",
    type: "combat",
    desc: "Your party strikes first in combat (r220) against the characters.",
  },
  {
    tag: "r305",
    title: "Attack",
    type: "combat",
    desc: "Roll 1d6. If your Wit & Wiles equals or exceeds the die roll, you strike first in combat (r220). Otherwise the characters encountered strike first.",
  },
  {
    tag: "r306",
    title: "Attacked",
    type: "combat",
    desc: "Roll 1d6. If your Wit & Wiles exceeds the die roll, you strike first in combat (r220). Otherwise the characters encountered strike first.",
  },
  {
    tag: "r307",
    title: "Attacked",
    type: "combat",
    desc: "Characters encountered strike first in combat (r220) against your party.",
  },
  {
    tag: "r308",
    title: "Surprised",
    type: "combat",
    desc: "Roll 1d6. If your Wit & Wiles equals or exceeds the die roll, you sense danger and the characters encountered strike first against your party in combat (r220). Otherwise you fail to sense danger and they surprise your party.",
  },
  {
    tag: "r309",
    title: "Surprised",
    type: "combat",
    desc: "Roll 1d6. If your Wit & Wiles exceeds the die roll, you sense danger and the characters encountered strike first against your party in combat (r220). Otherwise you fail to sense danger and they surprise you and your party.",
  },
  {
    tag: "r310",
    title: "Surprised",
    type: "combat",
    desc: "Characters encountered surprise your party and cause combat (r220).",
  },
  {
    tag: "r311",
    title: "Escape",
    type: "combat",
    desc: "Your party escapes to an adjacent hex (r218).",
  },
  {
    tag: "r312",
    title: "Escape Mounted",
    type: "combat",
    desc: "You ride away. If your entire party has mounts, you can escape to an adjacent hex (r218). If some of your party lack mounts, they can be abandoned to permit the rest to escape, or your entire party is unable to escape (r330).",
  },
  {
    tag: "r313",
    title: "Escape Flying",
    type: "combat",
    desc: "You can fly away. If your entire party has winged mounts or is able to fly, you can escape to an adjacent hex (r218). If some of your party are unable to fly, they can be abandoned to permit the rest to escape, or your entire party does not escape (r330).",
  },
  {
    tag: "r314",
    title: "Escape",
    type: "combat",
    desc: "They don't look too bright — you try to talk your way past them. Roll 1d6. If your Wit & Wiles equals or exceeds the die roll, your party escapes to an adjacent hex (r218). Otherwise return to the previous event section and select another option.",
  },
  {
    tag: "r315",
    title: "Escape",
    type: "combat",
    desc: "With a few well-chosen words you might throw them off — you decide it's worth a try. Roll 1d6. If your Wit & Wiles exceeds the die roll, your party escapes to an adjacent hex (r218). Otherwise return to the previous event section and select another option.",
  },
  {
    tag: "r316",
    title: "Hide",
    type: "combat",
    desc: "Your party hides in this hex (r218).",
  },
  {
    tag: "r317",
    title: "Hide",
    type: "combat",
    desc: "You think quickly and try to hide. Roll 1d6. If your Wit & Wiles equals or exceeds the roll, your party hides in this hex (r218). Otherwise return to the previous section and select another option — you couldn't think of a good hiding place fast enough.",
  },
  {
    tag: "r318",
    title: "Hide",
    type: "combat",
    desc: "You decide to try hiding. Roll 1d6. If your Wit & Wiles exceeds the die roll, your party hides in this hex (r218). Otherwise you couldn't think fast enough — return to the previous section and select another option.",
  },
  {
    tag: "r319",
    title: "Hide",
    type: "combat",
    desc: "You look around for enough cover to hide your party. Roll 1d6. If the number of characters in your party is equal to or less than the die roll, you can hide (r218) in this hex. Otherwise return to the previous section and select another option. You cannot abandon members of your party to allow the rest to hide — those abandoned will reveal your hiding place.",
  },
  {
    tag: "r320",
    title: "Hide",
    type: "combat",
    desc: "You look around for cover. Roll 1d6. If the number of characters in your party is less than the die roll, you can hide (r218) in this hex. Otherwise return to the previous event section and select another option. You cannot abandon members of your party to allow the rest to hide.",
  },
  {
    tag: "r321",
    title: "Bribe to Pass",
    type: "encounter",
    desc: "If you pay the amount of gold indicated, characters encountered will let you pass and the encounter ends. Otherwise they become hostile and try to stop you — see r330 and add +1 to your dice roll there.",
  },
  {
    tag: "r322",
    title: "Bribe to Pass",
    type: "encounter",
    desc: "Characters encountered have a nasty look, but if you pay the amount of gold indicated they will pass your party and the event will end. Otherwise go to r330 and prepare to battle.",
  },
  {
    tag: "r323",
    title: "Bribe to Pass",
    type: "encounter",
    desc: "Characters encountered seem unsavory — you don't know what to expect, except that if you pay the amount of gold demanded you can pass and the event ends. Otherwise there is risk of ambush and surprise — go to r330 and subtract -1 from your dice roll there.",
  },
  {
    tag: "r324",
    title: "Bribe to Pass",
    type: "encounter",
    desc: "Characters encountered have weapons drawn, putting you at a disadvantage. You can either pay the amount of gold they demand and end this event, or you can let them attack and strike first in combat (r220).",
  },
  {
    tag: "r325",
    title: "Pass",
    type: "encounter",
    desc: "Characters lose interest in your party — encounter and event ends now.",
  },
  {
    tag: "r326",
    title: "Pass",
    type: "encounter",
    desc: "You think you can lull their suspicions. Roll 1d6. If your Wit & Wiles equals or exceeds the roll, the characters encountered let your party pass and the event ends. Otherwise see r330 and add +1 to your dice roll there.",
  },
  {
    tag: "r327",
    title: "Pass",
    type: "encounter",
    desc: "Characters encountered look nasty but slow on the uptake — you'll try to talk your way past. Roll 1d6. If your Wit & Wiles equals or exceeds the roll, the characters let your party pass and the event ends. Otherwise go to r330.",
  },
  {
    tag: "r328",
    title: "Pass",
    type: "encounter",
    desc: "Characters encountered look rough, but you try to talk your way out of a fight. Roll 1d6. If your Wit & Wiles exceeds the roll, they let your party pass and the event ends. Otherwise see r330.",
  },
  {
    tag: "r329",
    title: "Pass",
    type: "encounter",
    desc: "Characters encountered have an unpleasant gleam in their eyes. You try to create a favorable impression anyway. Roll 1d6. If your Wit & Wiles exceeds the roll they let your party pass and the event ends. Otherwise go to r330 and subtract -1 from your dice roll there.",
  },
  {
    tag: "r330",
    title: "Battle Reference",
    type: "encounter",
    desc: "You are forced to fight with the characters encountered. Roll 2d6 and go to the appropriate section.",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Section"],
        rows: [
          ["2 or less", "r310"],
          ["3", "r309"],
          ["4", "r308"],
          ["5", "r307"],
          ["6", "r306"],
          ["7", "r305"],
          ["8", "r304"],
          ["9", "r303"],
          ["10", "r302"],
          ["11", "r301"],
          ["12 or more", "r300"],
        ],
      },
    ],
  },
  {
    tag: "r331",
    title: "Bribe to Join",
    type: "encounter",
    desc: "Characters encountered are looking for easy money. They will join your party if you pay the gold requested. If you don’t pay, roll one die:",
    note: "If they are paid and do join, they will remain until you fail to give them an equal share of any new gold acquired (equal share is at least as much as you get yourself), or until any member of your party is abandoned or killed. If either of these happens, even if in the midst of combat, these unreliable mercenaries will immediately abandon your party and disappear!",
    tables: [
      {
        type: "roll-table",
        label: "Roll (1d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["1–3", "Characters ignore you and event ends."],
          ["4", "r321"],
          ["5", "r322"],
          ["6", "r323"],
        ],
      },
    ],
  },
  {
    tag: "r332",
    title: "Bribe to Hire",
    type: "encounter",
    desc: "Character(s) will hire as henchmen for 2 gold per day, provided you pay them the bonus in gold they request. Daily pay starts tomorrow. The characters will remain in your party as long as they are paid, or until you abandon them. If more than one character is encountered, you must hire all or none as a group. The bonus is paid to the group as a whole. If you abandon one of the group, all will leave, they only work as a group. If you don’t hire them, roll one die:",
    tables: [
      {
        type: "roll-table",
        label: "Roll (1d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["1–2", "Characters ignore you and event ends."],
          ["3", "r321"],
          ["4", "r322"],
          ["5", "r323"],
          ["6", "r324"],
        ],
      },
    ],
  },
  {
    tag: "r333",
    title: "Hirelings",
    type: "encounter",
    desc: "Character(s) encountered need a job! They will hire on with your party at 2 gold per day, provided you pay today’s wages right now. They will remain with your party as long as they are paid every day at the evening meal (r215). If there is more than one, you can hire some or all, as desired. If you don’t hire any of them, roll one die:",
    tables: [
      {
        type: "roll-table",
        label: "Roll (1d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["1–4", "r325"],
          ["5", "r326"],
          ["6", "r327"],
        ],
      },
    ],
  },
  {
    tag: "r334",
    title: "Ally",
    type: "encounter",
    desc: "You discover the character(s) know about your quest to regain your throne, and they too have a personal grudge against the usurpers there. They will join your party as followers and remain with you at no cost beyond food and lodging.",
  },
  {
    tag: "r335",
    title: "Escape",
    type: "encounter",
    desc: "Character(s) encountered are fleeing someone. They will join your party if you permit it at no cost to you (other than food and lodging), but will disappear whenever you enter any town, castle or temple hex.",
  },
  {
    tag: "r336",
    title: "Plead Comrades",
    type: "encounter",
    desc: "You try to talk the character(s) into joining your party, as they seem sympathetic and interested. Roll 1d6. If your Wit & Wiles equals or exceeds the roll, they will join as followers. Otherwise they leave and the event ends.",
  },
  {
    tag: "r337",
    title: "Plead Comrades",
    type: "encounter",
    desc: "The character(s) encountered look unsavory, but willing to talk - you try to convince them to join your party. Roll one die, if your wit & wiles exceed the roll, they join as followers. Otherwise, roll one die again:",
    tables: [
      {
        type: "roll-table",
        label: "Roll (1d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["1", "r325"],
          ["2", "r330"],
          ["3", "r340"],
          ["4–5", "r341"],
          ["6", "r342"],
        ],
      },
    ],
  },
  {
    tag: "r338",
    title: "Convince Hirelings",
    type: "encounter",
    desc: "Character(s) encountered look dubiously at you, but you try to convince them to join your party as henchmen. Roll 1d6. If your Wit & Wiles equals or exceeds the die roll, they join as henchmen at 1 gold per day. If your Wit & Wiles exactly equaled the die roll, pay 2 gold per day instead. Today's pay must be given immediately. If more than one is encountered, you can hire some instead of all. Those not hired, or if you fail, will pass by and the event ends.",
  },
  {
    tag: "r339",
    title: "Convince Hirelings",
    type: "encounter",
    desc: "Character(s) encountered look askance at you, and will pass you by (event ends) unless you stop to talk. If you stop to talk, you decide you should convince them to join your party as henchmen. Roll one die; if your wit & wiles exceeds the die roll, they will join at 2 gold pieces per day, with today’s pay due right now. You can hire some instead of all if you desire. If you stopped to talk, but failed to convince them to join as hirelings, roll one die to determine their attitude:",
    tables: [
      {
        type: "roll-table",
        label: "Roll (1d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["1–3", "r325"],
          ["4–6", "r330"],
        ],
      },
    ],
  },
  {
    tag: "r340",
    title: "Looter",
    type: "encounter",
    desc: "Character(s) encountered look like they are in need of money. You can let them pass (encounter ends) or try to convince them to join you. If you try to convince them, roll one die. If your wit & wiles equals or exceeds the die roll, they will join your party. They will remain as long as they get an equal share in any new gold you acquire (i.e., each gets as least as much as you). If you deny them their share, it is as if you failed to convince them to join, see below. If you fail to convince them to join (or later deny them an equal share in gold) they may become hostile, roll one die:",
    tables: [
      {
        type: "roll-table",
        label: "Roll (1d6)",
        cols: ["🎲", "Result"],
        rows: [
          [
            "1–2",
            "They attack you personally in combat (r220) and have the first strike.",
          ],
          [
            "3–4",
            "They attack your party in combat (r220); see r330 for situation.",
          ],
          ["5–6", "They depart angry but without fighting — event ends."],
        ],
      },
    ],
  },
  {
    tag: "r341",
    title: "Conversation",
    type: "encounter",
    desc: "In an extended period of talking, you gradually discover the interests and attitudes of the character(s) you encountered. This takes a good deal of time, you cannot travel any further today, and any other daily actions unfinished cannot be completed either. For the results of the talk, roll two dice:",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          [
            "2",
            "A hired assassin surprises you into combat (r220) and always strikes at you personally.",
          ],
          ["3", "Bandits, who may surprise you; see r308."],
          [
            "4",
            "Arrogant and surly — the conversation turns into an argument; r305.",
          ],
          [
            "5",
            "Character(s) need 10 gold now (r331); if they join, they will leave your party at the next town, castle or temple you enter.",
          ],
          ["6", "Character(s) ask for 5 gold now and employment; see r332."],
          ["7", "Character(s) willing to hire as henchmen; see r333."],
          ["8", "Character(s) looking for fun and profit; see r338."],
          ["9", "Character(s) fugitive from local justice; see r335."],
          [
            "10",
            "Character(s) down on luck, looking for a turn in fortunes; see r336.",
          ],
          ["11", "Character(s) obviously plundering mercenaries; see r340."],
          ["12", "Character(s) discover a common cause with you; see r334."],
        ],
      },
    ],
  },
  {
    tag: "r342",
    title: "General Inquiry",
    type: "encounter",
    desc: "You are unsure of attitudes, and make some general inquiries to determine what these encountered characters seem interested in. Roll two dice:",
    tables: [
      {
        type: "roll-table",
        label: "Roll (2d6)",
        cols: ["🎲", "Result"],
        rows: [
          ["2", "You unwittingly give insult; see r309."],
          ["3", "You are forced into combat unwillingly; see r330."],
          ["4", "Character(s) interested in loot; see r340."],
          ["5", "Character(s) attempt attack on you; see r306."],
          ["6", "Character(s) uninterested in you; see r325."],
          [
            "7",
            "Character(s) reveal themselves gradually — you can either talk further (r341) or let them pass (r325).",
          ],
          ["8", "Character(s) are for hire; see r333."],
          ["9", "Character(s) may be for hire; see r339."],
          ["10", "Character(s) may be sympathetic to your cause; see r337."],
          ["11", "Character(s) uninterested but may be for hire; see r338."],
          [
            "12",
            "Character(s) aloof but might consider joining you; see r336.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r343",
    title: "Victim Selection",
    type: "encounter",
    desc: "One character in your party is the victim or target of the attack. If your party is just you, then you are the target. Otherwise select characters in your party one by one in any order you choose. When you select a character, roll 1d6. If the result is '6' that character is the target. Otherwise select another character and try again. Continue going through the characters in your party more than once if necessary, until the target is selected.",
  },
];

export default ruleData;
