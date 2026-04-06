import type { Rule } from "../types/RuleType";

export const ruleData: Rule[] = [
  // ─── CHARACTERS ───────────────────────────────────────────────
  {
    tag: "r201",
    title: "Characters",
    type: "character",
    desc: 'Each character in the game has a Combat Skill (S), an Endurance value (E), and a Wealth (W). Each is rated numerically, with higher numbers being better. If no wealth is given, it is presumed to be zero. The characters include yourself (the Barbarian Prince, see r202), followers who join your "party," and any others encountered in the course of the game. They can be friendly or hostile, intelligent or unintelligent. When a character joins your party, note their statistics as needed. You can voluntarily dismiss or abandon members of your party if you wish (sometimes expedient when making an escape, or when food or money is short). Other characters encountered during events need not be permanently recorded.',
    note: "You also can opt to include and track Experience or XP (r237) as a way of increasing stats and skills.",
  },
  {
    tag: "r202",
    title: "Your Character",
    type: "character",
    desc: "You are Cal Arath, Barbarian Prince, with Skill 8, Endurance 9, Wealth 4. Roll 1D3+2 for your Wit & Wiles rating.",
    optional: true,
  },

  // ─── DAILY ACTIONS ────────────────────────────────────────────
  {
    tag: "r203",
    title: "Daily Actions",
    type: "action",
    desc: "At the start of each day, select one action. Followers support and help you. Normally limited to one action per day unless an event grants a bonus action.",
    subRules: [
      { tag: "r204", title: "Travel to a new hex" },
      { tag: "r222", title: "Rest in current hex" },
      { tag: "r214", title: "Search for a cache" },
      { tag: "r208", title: "Search a Ruins" },
      { tag: "r209", title: "Seek News & Information" },
      { tag: "r210", title: "Seek to Hire Followers" },
      { tag: "r211", title: "Seek Audience with Lord" },
      { tag: "r212", title: "Make an Offering" },
      { tag: "r223", title: "Beg" },
      { tag: "r224", title: "Attempt Thievery" },
      { tag: "r229", title: "Study History" },
      { tag: "r230", title: "Visit Tavern" },
      { tag: "r231", title: "Visit Market" },
      { tag: "r232", title: "Borrow Money" },
      { tag: "r233", title: "Seek Employment" },
      { tag: "r240", title: "Combat Training" },
    ],
  },

  // ─── MOVEMENT ─────────────────────────────────────────────────
  {
    tag: "r204",
    title: "Travel",
    type: "movement",
    desc: "Move hex by hex across the map. Each time you try to leave a hex, check for getting lost (r205), then check for a travel event (r204b).",
    subRules: [
      { tag: "r204a", title: "Travel Speeds" },
      { tag: "r204b", title: "Travel Events" },
      { tag: "r204c", title: "Roads" },
      { tag: "r204d", title: "Airborne Travel" },
      { tag: "r204e", title: "Crossing Rivers" },
      { tag: "r204f", title: "Travel Events & Time" },
    ],
    optional: true,
    linkedRules: ["r205", "r207"],
  },
  {
    tag: "r204a",
    title: "Travel Speeds",
    type: "movement",
    desc: "On foot: 1 hex/day. Wagon: 1 hex/day (roads or farmland only). Mounted: 1–2 hexes/day. Airborne: up to 3 hexes/day.",
  },
  {
    tag: "r204b",
    title: "Travel Events",
    type: "movement",
    desc: "Each day when entering a hex, remaining in one, or resting: roll 2D6 on the Travel Table (r207). If the result equals or exceeds the Event number, an event occurs.",
    linkedRules: ["r207"],
  },
  {
    tag: "r204c",
    title: "Roads",
    type: "movement",
    desc: "Roads increase travel speed by 1 hex. On foot: up to 2 hexes/day. Mounted: up to 3 hexes/day. Use the 'On Road' table for events, then check terrain of the hex entered (with -1 to roll if a road event occurred).",
  },
  {
    tag: "r204d",
    title: "Airborne Travel",
    type: "movement",
    desc: "The party flies for the entire day and lands in the last hex entered. Use the 'Airborne' table instead of terrain. In the last hex, if no airborne event occurs, check for a normal terrain event.",
  },
  {
    tag: "r204e",
    title: "Crossing Rivers",
    type: "movement",
    desc: "Check for lost (r205) before reaching the river, then roll again for lost crossing (r205d). If successful, check for a Crossing River event. Flying ignores all river crossing checks.",
    linkedRules: ["r205", "r205d"],
  },
  {
    tag: "r204f",
    title: "Travel Events & Time",
    type: "movement",
    desc: "A travel event normally consumes the rest of the day. Exceptions: events resolved purely through combat where all enemies are killed, or events involving only brief talk.",
    optional: true,
  },
  {
    tag: "r205",
    title: "Lost",
    type: "movement",
    desc: "Each time you try to leave a hex, roll 2D6 vs the Lost number for that terrain (r207). If equal or greater, you are lost and cannot travel further that day. Modify by -1 for each successive day attempting the same direction.",
    subRules: [
      { tag: "r205a", title: "Local Guide" },
      { tag: "r205b", title: "Self-Guiding Moves" },
      { tag: "r205c", title: "Airborne & Lost" },
      { tag: "r205d", title: "Cross a River" },
    ],
    linkedRules: ["r207"],
  },
  {
    tag: "r205a",
    title: "Local Guide",
    type: "movement",
    desc: "A guide subtracts -1 from lost rolls. If you get lost despite the guide, roll 1D6 — on a 6 the guide deserts.",
  },
  {
    tag: "r205b",
    title: "Self-Guiding Moves",
    type: "movement",
    desc: "Leaving a hex via road or from any habitation: can never get lost. Raft travel (r213): can never get lost.",
    linkedRules: ["r213"],
  },
  {
    tag: "r205c",
    title: "Airborne & Lost",
    type: "movement",
    desc: "Use the Airborne table for lost rolls when flying. If lost while airborne, roll 1D6 — on 4+ drift one hex in a random direction.",
  },
  {
    tag: "r205d",
    title: "Cross a River",
    type: "movement",
    desc: "Getting lost crossing means no suitable crossing can be found. Road or airborne crossings are automatic. Wagons cannot cross a river unless by road.",
  },
  {
    tag: "r206",
    title: "Transport",
    type: "movement",
    desc: "All food, gold, and possessions must be carried. Items have a weight in 'loads'. Anything beyond capacity must be left behind or cached (r214).",
    subRules: [
      { tag: "r206a", title: "Loads" },
      { tag: "r206b", title: "Transport Capacities" },
    ],
    linkedRules: ["r214"],
  },
  {
    tag: "r206a",
    title: "Loads",
    type: "movement",
    desc: "1 food unit = 1 load. Every 100 gold = 1 load. A person carried = 20 loads. A halfling = 10 loads. Weapons do not count as loads.",
  },
  {
    tag: "r206b",
    title: "Transport Capacities",
    type: "movement",
    desc: "On foot: 10 loads per character. Mount: 30 loads, or rider + 10 loads. Wagon: 60 loads (three men; non-drivers can rest).",
  },
  {
    tag: "r207",
    title: "Travel Tables",
    type: "reference",
    desc: "All travel tables for terrain and habitation hexes are in the Reference Booklet. Shows chances of travel event, getting lost, hunting availability, and fodder for mounts.",
    linkedRules: ["r204b", "r205", "r215b", "r215f"],
  },

  // ─── HEX ACTIONS ──────────────────────────────────────────────
  {
    tag: "r208",
    title: "Searching a Ruins",
    type: "action",
    desc: "Spend the day searching an ancient ruin. Roll 2D6 and consult the Ruins table. Special (*) events apply only in named ruins on the map (e.g. Jakor's Keep hex 0901).",
    requiresHex: ["ruins"],
    optional: true,
    linkedRules: ["r207"],
  },
  {
    tag: "r209",
    title: "Seek News & Information",
    type: "action",
    desc: "Spend the day in taverns, streets and markets talking to locals. Roll 2D6. Subtract -1 in a village. Add +1 if you spend 5 gold or your Wit & Wiles is 5+.",
    requiresHex: ["village", "town", "castle"],
    tables: [
      {
        type: "roll-table",
        label: "News & Information Results",
        cols: ["Roll", "Result"],
        rows: [
          ["1–2", "No news of note."],
          [
            "3",
            "Rumours of nearby ruins. Roll 1D6 for direction and distance.",
          ],
          [
            "4",
            "Rumours of secret rites at nearest temple — +1 to Making Offerings (r212) there.",
          ],
          [
            "5",
            "Feel at home — always +1 to r209 or r210 in this hex from now on.",
          ],
          [
            "6",
            "Talk to merchants — roll an additional time at the market (r231) here.",
          ],
          [
            "7",
            "Discover cheaper lodgings and food — half price (round up), +1 to r230.",
          ],
          [
            "8",
            "Encounter — roll immediately for a Travel event at this habitation (r207).",
          ],
          ["9", "Find offer of local employment — see r233 with +1 to roll."],
          [
            "10",
            "Hear rumours of local lord — +1 to Seeking an Audience (r211) here.",
          ],
          [
            "11",
            "Shady contacts — spend 5 gold to add +1 to Wit & Wiles for r224 tonight or tomorrow.",
          ],
          [
            "12",
            "Valuable rumours — roll 1D6: 1–2 Habitation event; 3: e066; 4: e067; 5: e068; 6: idle gossip.",
          ],
          [
            "13+",
            "Secret informant offers info for 10 gold. Roll 1D6: 1 worthless; 2: e143; 3: e144; 4: e145; 5: e146; 6: e147.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r210",
    title: "Seek to Hire Followers",
    type: "action",
    desc: "Spend the day posting notices and visiting agents. Roll 2D6 and consult the table.",
    requiresHex: ["village", "town", "castle"],
    tables: [
      {
        type: "roll-table",
        label: "Hire Followers Results",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Freeman joins at no cost — S4, E4."],
          ["3", "Lancer with horse — 2 gold/day, S5, E5."],
          ["4", "1–2 Mercenaries — 2 gold/day each, S5, E4."],
          ["5", "Swordsman — 3 gold/day, S6, E5."],
          ["6", "Local guide (r205) — 1 gold/day, S2, E3."],
          ["7", "Henchmen — roll 1D6 for number, 1 gold/day each, S4, E4."],
          ["8", "Nothing available — see r209 with -1 to roll."],
          ["9", "Slave market — see e163 (or e007 at Elf Haven)."],
          [
            "10",
            "Fugitive joins (e048). Must escape habitation (r218) tonight.",
          ],
          ["11", "Runaway boy or girl joins at no cost — S1, E3."],
          [
            "12",
            "Porters (S1, E2) at ½ gold/day each + local guide 1 gold/day, S2, E2.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r211",
    title: "Seek Audience with Lord",
    type: "action",
    desc: "Spend the day trying to gain admission to the hall or court of the local ruler. Use the appropriate sub-table for the location.",
    requiresHex: ["village", "town", "castle", "temple"],
    subRules: [
      { tag: "r211a", title: "Audience at a Village" },
      { tag: "r211b", title: "Audience at a Town" },
      { tag: "r211c", title: "Audience at a Temple" },
      { tag: "r211d", title: "Audience with Baron Huldra (hex 1212)" },
      { tag: "r211e", title: "Audience with Count Drogat (hex 0323)" },
      { tag: "r211f", title: "Audience with Lady Aeravir (hex 1923)" },
      { tag: "r211g", title: "Audience at a Dwarf Mine" },
      { tag: "r211h", title: "Audience at a Wizard's Tower" },
      { tag: "r211i", title: "Audience at a Halfling Village" },
      { tag: "r211j", title: "Audience at a Cloud Castle" },
      { tag: "r211k", title: "Audience at a Giant's Castle" },
      { tag: "r211l", title: "Audience at an Elf Haven" },
    ],
  },
  {
    tag: "r211a",
    title: "Audience at a Village",
    type: "action",
    requiresHex: ["village"],
    tables: [
      {
        type: "roll-table",
        label: "Audience at a Village",
        cols: ["Roll", "Result"],
        rows: [
          ["2–3", "Insult the village council — see e060a."],
          ["4", "Meet hostile guards — see e158 (only 10 gold bribe needed)."],
          ["5", "Encounter the Master of the Household — see e153."],
          ["6–8", "Audience refused today, may try again later."],
          ["9–10", "Audience permitted — see e177."],
          ["11", "Meet daughter of the village elder — see e154."],
          [
            "12",
            "Audience permitted — see e177 (or r241a if completed, +1 to roll).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r211b",
    title: "Audience at a Town",
    type: "action",
    requiresHex: ["town"],
    tables: [
      {
        type: "roll-table",
        label: "Audience at a Town",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Grievously insult the town council — see e062."],
          [
            "3",
            "Slanderous aside about mayor's wife blamed on you — see e060.",
          ],
          ["4", "Meet hostile guards — see e158."],
          ["5", "Encounter the Master of the Household — see e153."],
          ["6–8", "Audience refused today, may try again later."],
          ["9–10", "Audience permitted — see e156."],
          ["11", "Meet daughter of the mayor — see e154."],
          [
            "12",
            "Audience permitted — see e156 (or r241b if completed, +1 to roll).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r211c",
    title: "Audience at a Temple",
    type: "action",
    requiresHex: ["temple"],
    note: "Priests or monks in party: +1 to roll. Magicians, wizards or witches: must dismiss them or -2 to roll.",
    tables: [
      {
        type: "roll-table",
        label: "Audience at a Temple",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Anger temple guards — see e063."],
          ["3", "Priestess resents a lewd remark — see e060."],
          ["4", "Encounter hostile guards — see e158."],
          ["5", "Audience refused today, may try again later."],
          ["6", "You must purify yourself — see e159."],
          ["7", "Audience refused today, may try again."],
          [
            "8",
            "Audience (e155) if you give a Dragon's eye; otherwise deal with Master of Household (e153).",
          ],
          [
            "9",
            "Permitted to pay respects (e150) or temple healers heal all wounds for free.",
          ],
          ["10", "You must purify yourself — see e159."],
          ["11+", "Audience permitted — see e155 (or r241c)."],
        ],
      },
    ],
  },
  {
    tag: "r211d",
    title: "Audience with Baron Huldra",
    type: "action",
    requiresHex: ["1212"],
    note: "+1 to roll for each wizard/magician/witch dismissed to serve the Baron (max +3).",
    tables: [
      {
        type: "roll-table",
        label: "Audience with Baron Huldra (hex 1212)",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Audience permanently refused."],
          ["3", "Meet the Baron's Daughter — see e154."],
          ["4", "Must learn court manners — see e149."],
          ["5", "Confronted by hostile guards — see e158."],
          ["6", "Audience refused today, may try again later."],
          ["7", "Encounter the Master of the Household — see e153."],
          ["8", "Seneschal requires a bribe — see e148."],
          ["9", "Pay your respects to the Baron — see e150."],
          ["10", "Find favour in the eyes of the Baron — see e151."],
          ["11+", "Audience granted — see e152 (or r241d)."],
        ],
      },
    ],
  },
  {
    tag: "r211e",
    title: "Audience with Count Drogat",
    type: "action",
    requiresHex: ["0323"],
    tables: [
      {
        type: "roll-table",
        label: "Audience with Count Drogat (hex 0323)",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "You are the Count's next victim — see e061."],
          ["3", "Captain of the Guard dislikes your haircut — see e062."],
          ["4", "Meet the companion of the Count — see e170."],
          ["5", "Encounter the Master of the Household — see e153."],
          ["6", "Confronted by hostile guards — see e158."],
          [
            "7",
            "Audience (e161) if you give a Roc's beak to the doorman; otherwise arrested (e060).",
          ],
          ["8", "Seneschal requires a bribe — see e148."],
          ["9", "Must learn court manners — see e149."],
          ["10", "Find favour in the eyes of the Count — see e151."],
          ["11+", "Audience granted — see e161 (or r241e)."],
        ],
      },
    ],
  },
  {
    tag: "r211f",
    title: "Audience with Lady Aeravir",
    type: "action",
    requiresHex: ["1923"],
    tables: [
      {
        type: "roll-table",
        label: "Audience with Lady Aeravir (hex 1923)",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Insult the Lady's dignity — arrested, see e060."],
          ["3", "Must purify yourself first — see e159."],
          ["4", "Untoward remark makes guards hostile — see e158."],
          ["5", "Must learn better court manners — see e149."],
          ["6", "Meet the Master of the Household — see e153."],
          [
            "7",
            "Audience (e160) if you give a Griffon's claw; otherwise refused, may try again.",
          ],
          ["8", "Audience refused, may try again."],
          ["9", "Seneschal requires a bribe — see e148."],
          ["10", "Audience granted — see e160 (or r241f)."],
          ["11", "Meet ward of Lady Aeravir — see e154."],
          [
            "12+",
            "Audience granted — see e160 (or r241f, +1 to roll if completed).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r211g",
    title: "Audience at a Dwarf Mine",
    type: "action",
    requiresHex: ["dwarf-mine"],
    note: "+1 if dwarf in party; -2 if elf; +1 if you give a gemstone worth 30+ gold (e142).",
    tables: [
      {
        type: "roll-table",
        label: "Audience at a Dwarf Mine",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Insult the race of dwarves — see e063."],
          ["3", "Remark about beard length causes offense — see e060."],
          ["4", "Audience permanently refused."],
          ["5", "Confronted by hostile dwarf guards — see e158."],
          ["6–7", "Audience refused today, may try again later."],
          ["8", "Encounter the Master of the Household — see e153."],
          ["9", "Seneschal requires a bribe — see e148."],
          ["10", "Pay your respects to the Dwarf Lord — see e150."],
          ["11+", "Audience permitted — see e059a (or r241g)."],
        ],
      },
    ],
  },
  {
    tag: "r211h",
    title: "Audience at a Wizard's Tower",
    type: "action",
    requiresHex: ["wizard-tower"],
    note: "+1 to roll if you dismissed any magicians, wizards or witches.",
    tables: [
      {
        type: "roll-table",
        label: "Audience at a Wizard's Tower",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Wizard is allied to the usurpers — see e061."],
          ["3", "Wizard thinks you beneath his attention — see e060."],
          ["4", "Encounter hostile guards — see e158."],
          ["5", "Audience refused today, may try again later."],
          ["6", "Meet the wizard's apprentice — see e025."],
          ["7", "Audience refused today, may try again later."],
          [
            "8",
            "Audience (e068b) if you give creature trophies; otherwise deal with Master of Household (e153).",
          ],
          ["9", "Permitted to pay your respects — see e150."],
          ["10", "Meet the wizard's apprentice — see e025."],
          ["11+", "Audience permitted — see e068b (or r241h)."],
        ],
      },
    ],
  },
  {
    tag: "r211i",
    title: "Audience at a Halfling Village",
    type: "action",
    requiresHex: ["halfling-village"],
    note: "+1 to roll if your party contains a halfling, elf or wizard.",
    tables: [
      {
        type: "roll-table",
        label: "Audience at a Halfling Village",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Insult the town council — see e063."],
          [
            "3",
            "Remark about mayor's wife's weight blamed on you — see e060a.",
          ],
          [
            "4",
            "Encounter the Master of the Household (e153) — bribe of just 1 food unit needed.",
          ],
          [
            "5–6",
            "Mayor is having a nap. Audience refused, may try again later.",
          ],
          [
            "7",
            "Mayor's housekeeper directs you to a tavern. Visit tavern (r230) for +1 to next attempt.",
          ],
          ["8–10", "Audience permitted — see e070a (or r241i)."],
          [
            "11",
            "A feast is given in your honour — party receives free food tonight.",
          ],
          [
            "12+",
            "Audience permitted — see e070a (or r241i, +1 to roll if completed).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r211j",
    title: "Audience at a Cloud Castle",
    type: "action",
    requiresHex: ["cloud-castle"],
    note: "Party combined Skill 20+: +1 to roll. Skill 40+: +3 to roll.",
    tables: [
      {
        type: "roll-table",
        label: "Audience at a Cloud Castle",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Hawk Lord despises all men from below — see e063."],
          ["3", "Insult the Captain of the Guard — see e062."],
          [
            "4",
            "Must prove yourself in combat (e072). If you beat the champion, see e117a.",
          ],
          ["5", "Audience permanently refused."],
          ["6", "Confronted by hostile Hawk guards — see e158."],
          [
            "7",
            "Audience (e117a) if you dismiss a Roc, Griffon or Eagle from party; otherwise arrested (e060).",
          ],
          ["8", "Seneschal requires a bribe — see e148."],
          ["9", "Pay respects to the Lord — see e150."],
          ["10", "Find favour in the eyes of the Lord — see e151."],
          ["11+", "Audience granted — see e117a (or r241j)."],
        ],
      },
    ],
  },
  {
    tag: "r211k",
    title: "Audience at a Giant's Castle",
    type: "action",
    requiresHex: ["giant-castle"],
    note: "Party combined Skill 30+: +1 to roll. Also have a giant in party: +2 total.",
    tables: [
      {
        type: "roll-table",
        label: "Audience at a Giant's Castle",
        cols: ["Roll", "Result"],
        rows: [
          ["2–4", "Giant Chieftain wants to feast on your bones — see e061."],
          ["5", "Giants laugh at your plight. Audience permanently refused."],
          [
            "6",
            "Must prove yourself vs Giant's champion (S9, E8). If you win, audience granted (e118b).",
          ],
          [
            "7",
            "Audience (e118b) if you pay 50 gold or give a magical item; otherwise arrested (e060).",
          ],
          ["8", "Seneschal requires a bribe — see e148."],
          ["9", "Pay your respects to the Chieftain — see e150."],
          ["10", "Find favour in the eyes of the Giant — see e151."],
          ["11+", "Audience granted — see e118b (or r241k)."],
        ],
      },
    ],
  },
  {
    tag: "r211l",
    title: "Audience at an Elf Haven",
    type: "action",
    requiresHex: ["elf-haven"],
    note: "+1 to roll if elf in party; -2 if dwarf in party.",
    tables: [
      {
        type: "roll-table",
        label: "Audience at an Elf Haven",
        cols: ["Roll", "Result"],
        rows: [
          ["0–3", "Insult the Elf King — see e062."],
          ["4", "Confronted by Elf guards — see e158."],
          ["5", "Must learn better court manners — see e149."],
          ["6", "Meet the Master of the Household — see e153."],
          [
            "7",
            "Audience (e166a) if you have a wizard or give a magical item; otherwise refused, may try again.",
          ],
          ["8", "Audience refused, may try again later."],
          ["9", "Seneschal requires a bribe — see e148."],
          ["10", "Audience granted — see e166a (or r241l)."],
          ["11", "Meet daughter of the Elf King — see e154."],
          [
            "12+",
            "Audience granted — see e166a (or r241l, +1 to roll if completed).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r212",
    title: "Make an Offering at a Temple",
    type: "action",
    desc: "Spend the day preparing and making an offering. Must spend at least 1 gold. Spend 10 gold for +1 to roll. Roll 2D6.",
    requiresHex: ["temple"],
    tables: [
      {
        type: "roll-table",
        label: "Temple Offering Results",
        cols: ["Roll", "Result"],
        rows: [
          [
            "2",
            "Magnificent error — temple abandoned for rest of game. Sentenced to death (e061).",
          ],
          ["3", "High Priest insulted — arrested (e060)."],
          [
            "4",
            "Bad Omens — roll 1D6 for each follower, all but a '1' result desert you.",
          ],
          ["5", "Good Omens — no special result."],
          ["6", "Good Omens — free food (r215) and lodging (r217) tonight."],
          [
            "7",
            "Favourable Omens — +1 to roll if you Make an Offering again tomorrow.",
          ],
          [
            "8",
            "Gods favour you — a monk (S2, E3) joins your party as guide for this and adjacent hexes.",
          ],
          ["9", "Special omen and riddle provides treasure clue — see e147."],
          [
            "10",
            "Fall in love with priestess (r228). Escape (r218) immediately. She is S2, E4, W100.",
          ],
          ["11", "High Priest requires an audience — see e155 (or r241c)."],
          [
            "12–13",
            "High Priest talks with you — roll 1D6: 1–2 e144; 3–4 e145; 5–6 e146. Or +3 to tomorrow's offering.",
          ],
          [
            "14+",
            "Gods declare a crusade — Staff of Command placed in your hands. Bring it north of Tragoth River to win. Gain 2 warrior monks (S5, E6, W2) with mounts.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r213",
    title: "Rafting on the Rivers",
    type: "movement",
    desc: "Raft travel moves along river hex sides. Speed: 4 hex sides/day downriver, 3 upriver. At end of day check for a Rafting event, then check for event in the halt hex. Roll 12 on 2D6 after each day to check if raft stops.",
    note: "Tragoth flows east–west. Nesser flows north–south. Dienstal Branch feeds into Nesser from the marsh. Largos flows northeast from the marsh.",
  },
  {
    tag: "r214",
    title: "Cache",
    type: "action",
    desc: "Leave possessions or money in a hidden cache. Food may never be cached. Note the hex and contents. To recover, spend a daily action and roll 1D6.",
    tables: [
      {
        type: "roll-table",
        label: "Cache Recovery",
        cols: ["Roll", "Result"],
        rows: [
          ["1–4", "Cache found intact — all items recovered."],
          ["5", "Unable to find cache — try again tomorrow."],
          ["6", "Cache found but looted — nothing remains."],
        ],
      },
    ],
  },

  // ─── FOOD ─────────────────────────────────────────────────────
  {
    tag: "r215",
    title: "Food",
    type: "food",
    desc: "After all actions and events, you and your party must eat their main meal. This may include hunting, using stores, or purchasing. Mounts may also require food.",
    subRules: [
      { tag: "r215a", title: "Food Units" },
      { tag: "r215b", title: "Hunting and Fishing" },
      { tag: "r215c", title: "Populated Regions & Hunting" },
      { tag: "r215d", title: "Purchase Meals" },
      { tag: "r215e", title: "Food Stores" },
      { tag: "r215f", title: "Animal Fodder" },
      { tag: "r215g", title: "Selling & Stealing Food" },
    ],
  },
  {
    tag: "r215a",
    title: "Food Units",
    type: "food",
    desc: "1 unit feeds 1 man for 1 day. Mounts require 2 units/day if unable to forage. In a desert with no oasis, food requirement doubles for men and mounts.",
  },
  {
    tag: "r215b",
    title: "Hunting and Fishing",
    type: "food",
    desc: "Hunt in farmland, countryside, forest, hill or swamp. Total: hunter's Skill + half Endurance (round down) - 2D6 roll = food units gained. If result is 0 or less, hunt fails. If dice roll is exactly 2, see e083. If roll is exactly 12, hunter is wounded (roll 1D6 for wounds). Fishing: 1D6-1 food units, no wound risk.",
    note: "Resting allows additional hunters, each adding +1 to the total.",
  },
  {
    tag: "r215c",
    title: "Populated Regions & Hunting",
    type: "food",
    desc: "Hunting is prohibited in habitation hexes. In farmland, roll 1D6 after hunt: 1–4 nothing; 5 peasant mob (e017); 6 constabulary (e050 +2 to roll).",
  },
  {
    tag: "r215d",
    title: "Purchase Meals",
    type: "food",
    desc: "Buy food in habitation hexes at 1 gold/character/day. Alone at a temple: priests give free food.",
  },
  {
    tag: "r215e",
    title: "Food Stores",
    type: "food",
    desc: "Food stores can be purchased in town, castle or village for 1 gold/unit (only if you spent the entire day there). Each unit = 1 load.",
  },
  {
    tag: "r215f",
    title: "Animal Fodder",
    type: "food",
    desc: "Animals graze freely in village, farmland, countryside, forest or hills. In town, castle or temple: pay 1 gold/mount at a stable, or provide 2 food units per animal.",
  },
  {
    tag: "r215g",
    title: "Selling & Stealing Food",
    type: "food",
    desc: "Sell food at market (r231) in villages, towns or castles. Steal food by rolling 1D6 — if result is less than Wit & Wiles, gain that many food units. Failure: e050 in town/castle, e017 in village.",
  },
  {
    tag: "r216",
    title: "Starvation",
    type: "food",
    desc: "If followers are not fed, roll 2D6 for each and subtract Wit & Wiles. Result 4+: desertion. Otherwise the character suffers starvation effects.",
    subRules: [
      { tag: "r216a", title: "Follower Starvation" },
      { tag: "r216b", title: "Character Starvation" },
      { tag: "r216c", title: "Mount Starvation" },
    ],
  },
  {
    tag: "r216a",
    title: "Follower Starvation",
    type: "food",
    desc: "Roll 2D6 - Wit & Wiles for each unfed follower. Result 4+: deserts. Otherwise suffers starvation effects (r216b). Cannot voluntarily withhold food from followers unless you go without yourself.",
  },
  {
    tag: "r216b",
    title: "Character Starvation",
    type: "food",
    desc: "Each day without food: carry capacity -2, Skill -1 (min 1). Normal meals reverse one day of starvation. A double meal reverses two days. Character dies after 5 days of starvation.",
  },
  {
    tag: "r216c",
    title: "Mount Starvation",
    type: "food",
    desc: "Each day without food: carry capacity -6. Winged mounts cannot fly. At zero capacity the mount dies. A normal meal immediately reverses all starvation effects.",
  },
  {
    tag: "r217",
    title: "Lodging",
    type: "action",
    desc: "In a habitation at end of day: buy lodging. 1 gold/room. Priests, monks, magicians, wizards and witches each need a single room; other followers share two per room. Mounts: 1 gold/animal at stable (includes fodder). Temple gives free lodging to a lone wounded character.",
    note: "May purchase a dwelling: 40 gold (village), 50 gold (town), 60 gold (castle). +10 gold for a stable in town or castle. Provides safe lodging for 4 characters (and 2 horses with stable).",
    requiresHex: ["village", "town", "castle", "temple"],
  },
  {
    tag: "r218",
    title: "Escape & Hiding",
    type: "encounter",
    subRules: [
      { tag: "r218a", title: "Escape" },
      { tag: "r218b", title: "Hiding" },
    ],
  },
  {
    tag: "r218a",
    title: "Escape",
    type: "encounter",
    desc: "Move to a random adjacent hex. No new event for entering that hex, but pending events must still be resolved. Cannot escape across a river (unless entire party has winged mounts) or off the map.",
  },
  {
    tag: "r218b",
    title: "Hiding",
    type: "encounter",
    desc: "Remain in the hex but in hiding for the rest of the day. No travel or other actions. Cannot hunt while hiding. Mounts can still forage. Still eat (r215) and lodge (r217) normally.",
  },
  {
    tag: "r219",
    title: "Following",
    type: "encounter",
    desc: "Roll 1D6 for a random direction and move there — all remaining travel ends. Consult the event that permitted following to see what happens next. After a day following, you must either attack or abandon the chase.",
    note: "Must be mounted to follow mounted characters; must be able to fly to follow flying characters.",
  },

  // ─── COMBAT ───────────────────────────────────────────────────
  {
    tag: "r220",
    title: "Combat",
    type: "combat",
    desc: "Combat is fought in rounds. Each round: match characters against opponents, one side strikes, apply results, then other side strikes. You can always choose to attack even if not given the option explicitly.",
    subRules: [
      { tag: "r220a", title: "Selecting Opponents" },
      { tag: "r220b", title: "Strikes" },
      { tag: "r220c", title: "Combat Table" },
      { tag: "r220d", title: "Surprise" },
      { tag: "r220e", title: "Escape from Combat" },
      { tag: "r220f", title: "Routs" },
      { tag: "r220g", title: "Defending" },
      { tag: "r220h", title: "Mounted Combat" },
      { tag: "r220i", title: "Ranged Combat" },
    ],
  },
  {
    tag: "r220a",
    title: "Selecting Opponents",
    type: "combat",
    desc: "Each character matches against one enemy. Extra characters can all face one opponent or spread across different ones. A man-sized character can have a maximum of 4 opponents in a round.",
  },
  {
    tag: "r220b",
    title: "Strikes",
    type: "combat",
    desc: "To resolve a strike: (Striker Skill - Target Skill) + 2D6 + modifiers. Consult Combat Table (r220c) for wounds inflicted.",
    tables: [
      {
        type: "simple-list",
        label: "Strike Modifiers",
        rows: [
          ["+2", "Target has wounds ≥ half Endurance (unless *)"],
          ["+1", "Striker is mounted, target is not"],
          ["-2", "Target chose only to Defend (r220g)"],
          ["-2", "Striker has wounds ≥ half Endurance (unless *)"],
        ],
      },
    ],
  },
  {
    tag: "r220c",
    title: "Combat Table",
    type: "combat",
    note: "If a character rolls a '2', reduce wounds inflicted by -2. If a '12', increase wounds inflicted by +2.",
    tables: [
      {
        type: "roll-table",
        label: "Combat Table",
        cols: ["Total", "Wounds Inflicted"],
        rows: [
          ["3, 6, 8, 11", "1 wound"],
          ["10, 12, 13", "2 wounds"],
          ["14, 17", "3 wounds"],
          ["16, 18, 19", "5 wounds"],
          ["20+", "6 wounds"],
          ["Any other", "Miss — no wounds"],
        ],
      },
    ],
  },
  {
    tag: "r220d",
    title: "Surprise",
    type: "combat",
    desc: "Characters achieving surprise get one free bonus strike at the start of combat. Then in round 1, the surprising characters strike first.",
  },
  {
    tag: "r220e",
    title: "Escape from Combat",
    type: "combat",
    desc: "Instead of attacking, attempt to flee. All or none escape — you cannot leave some behind. None of your characters may strike when attempting escape. Roll 1D6: 1–3 fail; 4 pursued (r344); 5+ escape (r218).",
  },
  {
    tag: "r220f",
    title: "Routs",
    type: "combat",
    desc: "Attempt to frighten enemies at the start of combat (only if your total Skill is at least twice theirs) or after each kill. Roll 1D6 (+1 per previous rout attempt, or if your Skill total is 3x theirs). On 6+, enemies rout. Characters with Skill or Endurance 9+, or magical/undead creatures, never rout.",
  },
  {
    tag: "r220g",
    title: "Defending",
    type: "combat",
    desc: "You or a party member (not encountered characters) may choose to only block strikes without attacking. Their attacker suffers -2 to their strike.",
  },
  {
    tag: "r220h",
    title: "Mounted Combat",
    type: "combat",
    desc: "A mounted character gains +1 Skill when attacking (not defending against) an unmounted opponent. No modifier if both are mounted or in a habitation.",
  },
  {
    tag: "r220i",
    title: "Ranged Combat",
    type: "combat",
    desc: "Available if you have more characters than the enemy, or if you surprised them. Do not subtract target Skill or wound modifiers for the target (own wound modifiers still apply). Elves and halflings get +1 Skill with ranged.",
    tables: [
      {
        type: "simple-list",
        label: "Ranged Combat Size Modifiers",
        rows: [
          ["-3", "Target larger than a man"],
          ["-4", "Target man-sized"],
          ["-5", "Target smaller than a man"],
        ],
      },
    ],
  },
  {
    tag: "r221",
    title: "Wounds & Endurance",
    type: "combat",
    desc: "Every character has an Endurance value equal to the wounds needed to kill them.",
    subRules: [
      { tag: "r221a", title: "Serious Wounding" },
      { tag: "r221b", title: "Unconsciousness" },
      { tag: "r221c", title: "Death" },
      { tag: "r221d", title: "Magical or Undead Creatures" },
    ],
  },
  {
    tag: "r221a",
    title: "Serious Wounding",
    type: "combat",
    desc: "When wounds equal or exceed half of a character's Endurance, they are seriously wounded. Combat strike modifiers apply (r220b).",
  },
  {
    tag: "r221b",
    title: "Unconsciousness",
    type: "combat",
    desc: "When wounds reach one less than Endurance, the character falls unconscious. Skill becomes zero. If the Barbarian Prince falls unconscious, roll 1D6 for followers: 1–3 they desert (taking all money and possessions); 4–6 they carry you (counts as 20 loads).",
  },
  {
    tag: "r221c",
    title: "Death",
    type: "combat",
    desc: "When wounds equal or exceed Endurance, the character dies. If the Barbarian Prince dies, you lose the game.",
  },
  {
    tag: "r221d",
    title: "Magical or Undead Creatures",
    type: "combat",
    desc: "Indicated by * next to their Endurance. Do not suffer combat modifiers from wounds and do not fall unconscious. Fight until Endurance reaches 0.",
  },
  {
    tag: "r222",
    title: "Rest & Healing",
    type: "action",
    desc: "Rest as a daily action. Check for encounters (r207). If no combat or escape event occurs, each character heals 1 wound. Resting indoors in a habitation: no travel event roll, heals 2 wounds (free at a temple).",
    note: "A character can be wounded and healed any number of times, but Endurance can never exceed its original value.",
    linkedRules: ["r222a"],
  },
  {
    tag: "r222a",
    title: "Poison Wounds",
    type: "combat",
    desc: "Poison wounds cannot be healed by rest. At end of each day, roll 1D6 per poisoned character (+1 if rested today): 1 festers (+1 poison wound); 2–5 no change; 6 weakens (-1 poison wound).",
  },
  {
    tag: "r223",
    title: "Begging",
    type: "action",
    desc: "If alone and impoverished, beg in a habitation. Roll 1D6 (+1 at a temple).",
    requiresHex: ["village", "town", "castle", "temple"],
    tables: [
      {
        type: "roll-table",
        label: "Begging Results",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "Run-in with constabulary — see e050."],
          ["2", "No one takes pity — fruitless day."],
          ["3", "Find 1 gold piece in the gutter."],
          ["4", "Collect small coins — gain Wealth 2."],
          ["5", "Good day — collect Wealth 4."],
          ["6", "Rich man takes pity — gain Wealth 7 in gold."],
          ["7", "Priests take you in — free food and lodging until you leave."],
        ],
      },
    ],
  },

  // ─── THIEVERY & TREASURE ──────────────────────────────────────
  {
    tag: "r224",
    title: "Attempt Thievery",
    type: "action",
    desc: "Takes place at night after daily action and evening meal. Spend all day preparing for full Wit & Wiles, or attempt after another action with -2 to Wit & Wiles. Can join a thieves' guild in a town (20 gold + Wit & Wiles roll).",
    requiresHex: ["town", "castle", "temple"],
    subRules: [
      { tag: "r224a", title: "Rob a House" },
      { tag: "r224b", title: "Rob a Castle or Temple" },
      { tag: "r224c", title: "Rob an Inn" },
      { tag: "r224d", title: "Rob a Stranger" },
    ],
  },
  {
    tag: "r224a",
    title: "Rob a House",
    type: "action",
    desc: "In a town: roll 1D6 vs Wit & Wiles. Success: rob the house. Failure: face 1D6 guards (S4, E4, W4). If guards encountered, must escape hex (r218a) — wanted as a thief in this town.",
    requiresHex: ["town"],
    tables: [
      {
        type: "roll-table",
        label: "House Loot (1D6)",
        cols: ["Roll", "Wealth"],
        rows: [
          ["1", "10"],
          ["2", "30"],
          ["3", "50"],
          ["4", "e040"],
          ["5", "100"],
          ["6", "110"],
        ],
      },
    ],
  },
  {
    tag: "r224b",
    title: "Rob a Castle or Temple",
    type: "action",
    desc: "Roll 1D6 vs Wit & Wiles (-1 if employed as castle guard). Failure: face 2D6 guards (S5, E4, W4). Success or after defeating guards: grab loot and escape hex (r218a). Returning later means immediate attack by 2D6 guards.",
    requiresHex: ["castle", "temple"],
    note: "Special habitations — Dwarf Mines: guards S6, E7, W10; loot Wealth 200. Wizard's Tower: 2D6+1 Skeletons (S5, E4*); loot Wealth 110. Giant's Castle: 1D3 giants (S8, E7, W10); loot Wealth 110 + 50. Elf Haven: guards S5, E5, W7; loot Wealth 60 (roll twice).",
    tables: [
      {
        type: "roll-table",
        label: "Castle/Temple Loot (1D6, -1 if temple)",
        cols: ["Roll", "Wealth"],
        rows: [
          ["0", "10"],
          ["1", "e040"],
          ["2", "70"],
          ["3–4", "100"],
          ["5+", "110"],
        ],
      },
    ],
  },
  {
    tag: "r224c",
    title: "Rob an Inn",
    type: "action",
    desc: "Rob an inn to gain 1D3 horses and 2D6 food. Same Wit & Wiles roll as r224a. Failure: face 2 bouncers (S5, E4, W4).",
    requiresHex: ["village", "town", "castle"],
  },
  {
    tag: "r224d",
    title: "Rob a Stranger",
    type: "action",
    desc: "Lurk in a dark alley. Roll 1D6 vs Wit & Wiles to identify the target first. Roll 2D6 for victim type. After your surprise attack, each subsequent combat round roll 1D6 — on a 1, 1D3 constables (S5, E4, W4) join the fight.",
    tables: [
      {
        type: "roll-table",
        label: "Victim Type (2D6)",
        cols: ["Roll", "Victim"],
        rows: [
          ["2", "Dwarf — S6, E7, W21"],
          [
            "3",
            "Priest — S2, E3, W2. Slaying a priest risks unholy mark (e018).",
          ],
          [
            "4",
            "Amazon — S6, E5, W4. After 1 round, blood sister arrives (also S6, E5, W4).",
          ],
          ["5", "Thief — S4, E3, W25"],
          ["6", "Vagabond — S3, E3, W1"],
          ["7", "Townsman — S3, E3, W15"],
          ["8", "Soldier — S5, E5, W4"],
          ["9", "Swordsman — S6, E7, W7"],
          [
            "10",
            "Nobleman — S5, E6, W21. Roll 1D6: 1–3 servants arrive (S4, E4, W2); 4–6 alone.",
          ],
          [
            "11",
            "Magician — S4, E4, W60. See e016 for magic after surprise round.",
          ],
          ["12", "Elf — S5, E5, W12. Roll 1D6: 5+ means fireballs (e023)."],
        ],
      },
    ],
  },
  {
    tag: "r225",
    title: "Acquiring Treasure",
    type: "treasure",
    desc: "After killing enemies, take their wealth. Compare wealth code with 1D6 roll on the Treasure Table (r226) for actual gold. Special items (letter codes A, B, C) require a second roll on r226.",
    subRules: [
      { tag: "r225a", title: "Special Possessions" },
      { tag: "r225b", title: "Distributing Acquisitions" },
      { tag: "r225c", title: "Animal Pelts and Furs" },
    ],
    linkedRules: ["r226"],
  },
  {
    tag: "r225a",
    title: "Special Possessions",
    type: "treasure",
    desc: "A letter code (A, B, C) alongside gold means a special item has been found. Roll again on the Treasure Table and consult the appropriate letter code line for the event describing the item.",
  },
  {
    tag: "r225b",
    title: "Distributing Acquisitions",
    type: "treasure",
    desc: "You decide who receives treasure. You may keep everything. Money given to a follower becomes their property — you cannot reclaim it unless they die. A true love (r228) always adds her Wealth to your total.",
  },
  {
    tag: "r225c",
    title: "Animal Pelts and Furs",
    type: "treasure",
    desc: "A successful hunt gains pelts equal to half the food units obtained (round down). Each pelt = 1 load. Sold at Markets (r231). Wolves, great cats and bears may also yield furs — see the relevant event.",
  },
  {
    tag: "r226",
    title: "Treasure Table",
    type: "reference",
    tables: [
      {
        type: "roll-table",
        label: "Treasure Table (Wealth Code × 1D6)",
        cols: ["Wealth Code", "1", "2", "3", "4", "5", "6"],
        rows: [
          [
            "0",
            "No gold",
            "No gold",
            "No gold",
            "No gold",
            "No gold",
            "No gold",
          ],
          ["1", "0", "0", "1", "1", "2", "2"],
          ["2", "0", "1", "2", "2", "3", "4"],
          ["4", "2", "3", "4", "4", "5", "6"],
          ["5", "2", "3+A", "4", "6+A", "7", "8+A"],
          ["7", "3", "4", "6", "8", "10", "11"],
          ["10", "6", "8", "9", "11", "12", "14"],
          ["12", "5", "9+C", "11+A", "12", "15+A", "20"],
          ["15", "10", "12", "14", "16", "18", "20"],
          ["21", "15", "18", "20", "22", "24", "27"],
          ["25", "20+A", "22", "24+A", "26", "28+A", "30"],
          ["30", "23", "27", "29", "31", "33", "37"],
          ["50", "40", "45", "48", "52", "55", "60"],
          ["60", "45+A", "50+C", "55", "60+B", "70+A", "80"],
          ["70", "55", "60", "65", "70", "80", "90"],
          ["100", "85", "90", "95", "100", "110", "120"],
          ["110", "80+B", "90+C", "100+B", "110+A", "130+C", "150+A"],
          ["A", "e180", "e181", "e182", "e183", "e184", "e185"],
          ["B", "e196", "e186", "e187", "e188", "e190", "e193"],
          ["C", "e186", "e188", "e189", "e191", "e192", "e194"],
        ],
      },
    ],
  },
  {
    tag: "r227",
    title: "Trap Locks",
    type: "special",
    desc: "To open a trapped item, survive the trap. You can have someone else open it — they are then entitled to its contents. Roll 1D6.",
    tables: [
      {
        type: "roll-table",
        label: "Trap Results",
        cols: ["Roll", "Result"],
        rows: [
          ["1", "Poison needle — 1 poisoned wound."],
          ["2", "Burning acid — roll 1D6 for wounds suffered."],
          ["3", "Poison gas — roll 1D6 for poison wounds suffered."],
          [
            "4",
            "Plague dust — roll 1D3 wounds at end of day, repeated each day until recovery (roll 1D6 after wounds: 4+ recover).",
          ],
          ["5", "Flying spikes and knives — roll 1D6+3 for wounds suffered."],
          ["6", "Trap malfunctions — no wounds."],
        ],
      },
    ],
  },
  {
    tag: "r228",
    title: "True Love",
    type: "special",
    desc: "Your true love will never desert you regardless of food, money, or lodging. She shares your room (r217). You can never voluntarily abandon her. If separated, roll 2D6 each day once free: 10–11 she rejoins; 12 she died trying to find you.",
    subRules: [
      { tag: "r228a", title: "Advantages of Love" },
      { tag: "r228b", title: "The Eternal Triangle" },
    ],
    optional: true,
    linkedRules: ["r234"],
  },
  {
    tag: "r228a",
    title: "Advantages of Love",
    type: "special",
    desc: "While your true love accompanies you, Wit & Wiles is +1. If she is killed in combat, gain +2 Skill for the rest of that battle. Afterward, spend the rest of that day and the next building a funeral pyre. For the rest of the game, +1 Skill against the same enemy type.",
  },
  {
    tag: "r228b",
    title: "The Eternal Triangle",
    type: "special",
    desc: "If you acquire a second true love, neither counts as true love and the effects cease. When desertion would occur, roll 1D6 for each: 3–6 she stays; 1–2 she leaves. When only one remains, she becomes your real true love again.",
  },
  {
    tag: "r229",
    title: "Study History",
    type: "action",
    desc: "Spend the day reading ancient scrolls in a castle or temple. Roll 2D6 (+1 if Wit & Wiles 5+; +1 if wizard, monk, priest or elf in party).",
    requiresHex: ["castle", "temple"],
    optional: true,
    linkedRules: ["r234"],
    tables: [
      {
        type: "roll-table",
        label: "Study History Results",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "Plague dust in old scrolls — see r227 result 4."],
          ["3", "Annoy archivist — see e060a."],
          ["4", "Library exhausted — cannot choose this action here again."],
          ["5–7", "Research proves fruitless — may continue tomorrow."],
          [
            "8",
            "Research going well — +1 to roll if you choose this action tomorrow.",
          ],
          [
            "9",
            "Discover local maps — subtract -2 from lost rolls (r205) in surrounding 2 hexes.",
          ],
          [
            "10",
            "Discover character knowledge — roll 1D6: 1–2 arcane rituals (magician); 3–4 holy writ (priest); 5–6 nature lore (druid).",
          ],
          ["11+", "Learn secrets and legends of the Southlands — see e162."],
        ],
      },
    ],
  },

  // ─── SOCIAL ───────────────────────────────────────────────────
  {
    tag: "r230",
    title: "Visit Tavern",
    type: "action",
    desc: "After any daily action (but before the evening meal) in a village, town or castle. Spend 1 gold minimum. Spend 3 gold for +1 to roll. Roll 2D6 (-1 in a village).",
    requiresHex: ["village", "town", "castle"],
    tables: [
      {
        type: "roll-table",
        label: "Tavern Results",
        cols: ["Roll", "Result"],
        rows: [
          ["1–2", "Sleepy tavern — nothing exciting."],
          [
            "3",
            "Drinking competition — spend 3 gold. Roll 2D6 vs Endurance (+1 in Dwarf Mine/Halfling village). Win: 6 gold (10 in Dwarf Mine). Roll 12: take a wound.",
          ],
          [
            "4",
            "Tavern brawl — 1D3+1 drunks (S3, E3, W4). A drunk with a wound: roll 1D6, on 5–6 they flee.",
          ],
          [
            "5",
            "Gambling — wager up to 20 gold (village) / 50 gold (town or castle). Roll 1D6 vs Wit & Wiles.",
          ],
          [
            "6",
            "Drunken night — spend 2 gold, take a wound for your head, no follower pay tonight.",
          ],
          ["7", "Quiet night — no special event (Dwarf Mine: see result 3)."],
          [
            "8",
            "Supper & rooms — half price food and lodging for as long as you stay.",
          ],
          ["9", "Local gossip — roll on r209 (+1 to result)."],
          ["10", "Many meetings — roll 2D6 for an encounter."],
          [
            "11",
            "Read local notices — roll on r210 or r233, or roll 1D6 for days until special event.",
          ],
          ["12+", "Rumors — roll 1D6: 1–2 e147; 3–4 e162; 5–6 e176."],
        ],
      },
    ],
  },
  {
    tag: "r231",
    title: "Visit Market",
    type: "action",
    desc: "Spend the day visiting the market. Roll 2D6 twice and apply both results (unless first roll is 2). Subtract -1 from both rolls in a village. Can also sell food or animal pelts (r215b).",
    requiresHex: ["village", "town", "castle"],
    tables: [
      {
        type: "roll-table",
        label: "Market Results",
        cols: ["Roll", "Result"],
        rows: [
          ["1–2", "Market is closed today."],
          ["3", "Cutpurse — lose half your gold."],
          [
            "4",
            "Horse dealer — buy horses for 8 gold (sell for 5) or wagon for 10 gold.",
          ],
          ["5", "Apothecary — see e175 (or blacksmith — see r242)."],
          [
            "6",
            "Animal trader — horses for 7 gold each. In village/castle: also e197. In town: buys pelts for +2 gold each.",
          ],
          [
            "7",
            "Food market — buy or sell food: 2 units/gold (3 units/gold in a village).",
          ],
          ["8", "Nothing available — see r209 (-1 to roll)."],
          [
            "9",
            "Map for sale — acts as guide (r205a) for surrounding 2 hexes, costs 8 gold.",
          ],
          ["10", "Meet independent merchant — see e128."],
          [
            "11",
            "Magical trader — buys creature trophies at 50% above worth. Sells a Treasure A item for 2D6+1 gold. Buys magical items: A (2D6), B (4D6), C (6D6).",
          ],
          ["12", "Slave market — see e163 (or r210 +1 at Elf Haven)."],
        ],
      },
    ],
  },
  {
    tag: "r232",
    title: "Borrow from a Moneylender",
    type: "action",
    desc: "Borrow 10 gold in a town. Repay 10+1D6 gold after 7 days or when leaving. Fail to repay: roll 1D6 vs Wit & Wiles. Success: avoid for one more day or flee. Failure: face lender's henchman (S7, E6, W2).",
    requiresHex: ["town"],
  },
  {
    tag: "r233",
    title: "Seek an Honest Job",
    type: "action",
    desc: "If alone (or with a lover) in a village, town or castle, roll 1D6 vs Wit & Wiles for success. Roll 1D6 for the job available. While working no other daily action is possible except visiting a tavern (r230).",
    requiresHex: ["village", "town", "castle"],
    subRules: [{ tag: "r233a", title: "Message Delivery" }],
    note: "* Each day on guard/patrol jobs: roll 1D6: 1–3 quiet; 4 hurt in training (1 wound); 5 thief (S4, E4, W15) r309; 6+ bandit attack 1D3+1 (S5, E4, W4) r305.",
    tables: [
      {
        type: "roll-table",
        label: "Village Jobs (1D6)",
        cols: ["Roll", "Job"],
        rows: [
          ["1–2", "Part-time menial work — food and lodging only."],
          ["3–4", "Farm work — free food and lodging + 1 gold/day."],
          ["5", "Tavern bouncer — free food and lodging + 2 gold/day."],
          ["6", "Message delivery — see r233a."],
        ],
      },
      {
        type: "roll-table",
        label: "Town Jobs (1D6)",
        cols: ["Roll", "Job"],
        rows: [
          ["1", "Part-time menial work — food and lodging only."],
          ["2", "Common work — free food and lodging + 1 gold/day."],
          ["3", "Tavern bouncer — free food and lodging + 2 gold/day."],
          ["4", "Town guard* — free food and lodging + 2 gold/day."],
          ["5", "Private bodyguard* — free food and lodging + 3 gold/day."],
          ["6", "Message delivery — see r233a."],
        ],
      },
      {
        type: "roll-table",
        label: "Castle Jobs (1D6)",
        cols: ["Roll", "Job"],
        rows: [
          ["1–2", "Castle guard* — free food and lodging + 2 gold/day."],
          [
            "3",
            "Personal bodyguard* — free food and lodging + 3 gold/day. After a week: +2 to Audience (r211).",
          ],
          [
            "4–5",
            "Mounted patrolman* — free food, lodging, a horse + 3 gold/day.",
          ],
          ["6", "Message delivery — see r233a."],
        ],
      },
    ],
  },
  {
    tag: "r233a",
    title: "Message Delivery",
    type: "action",
    desc: "Deliver a message to the nearest habitation. Receive a horse if you don't have one. Leave tomorrow. Payment: 3 gold per hex (by shortest route). Roll 1D6 on delivery: 1–2 reply needed (same pay); 3–4 gain Letter of Recommendation (e157); 5–6 no further event.",
  },

  // ─── OPTIONAL RULES ───────────────────────────────────────────
  {
    tag: "r234",
    title: "Victory",
    type: "optional",
    optional: true,
    desc: "Standard victory: collect 500 gold and return across the Tragoth River within 70 days. Alternative victories: collect 5 different (Ψ) story events and return north; reach 500 XP and return north; or (fairy tale ending) have a True Love for 4 weeks and 100 gold to settle down.",
    linkedRules: ["r235", "r237", "r228"],
  },
  {
    tag: "r235",
    title: "Luck",
    type: "optional",
    optional: true,
    desc: "Start the game with 3 Luck points. Once per day, spend 1 Luck point to re-roll any dice result and use whichever result is more advantageous. Luck can be gained through XP (r237) or (Ψ) events or falling in love (r228).",
    note: "If using Luck, it is advised to set Wit & Wiles to 3 (or 4 for an easier game) rather than rolling 1D3+2.",
    linkedRules: ["r237", "r228"],
  },
  {
    tag: "r236",
    title: "Advantages",
    type: "optional",
    optional: true,
    desc: "Start the game with one advantage from the list below. More can be gained through XP (r237).",
    linkedRules: ["r237"],
    tables: [
      {
        type: "simple-list",
        label: "Available Advantages",
        rows: [
          [
            "Agility",
            "+1 to escape combat roll (r220e) if alone or with one other character.",
          ],
          [
            "Barter",
            "Pay half gold for bribes (r321–r324, r331–r332) and daily hireling payments (r333, r338–r339).",
          ],
          [
            "Constitution",
            "At end of a battle, immediately heal 1 wound taken in that battle.",
          ],
          [
            "Hunter",
            "+1 to Hunt total (r215b). If wounded on a hunt, roll 1D6 — wounds negated on 4+.",
          ],
          [
            "Keen Senses",
            "+1 to Wit & Wiles when rolling for surprise/ambush (r308–r309). Treat r310 as r309.",
          ],
          [
            "Leader",
            "+1 to Wit & Wiles when rolling for follower desertion (r216a, r217, r336–r337).",
          ],
          [
            "Old Friend",
            "One character encountered in a hex ending 01–08 who can join via Talk becomes a loyal ally (r334).",
          ],
          [
            "Persuasion",
            "+1 to Wit & Wiles when rolling on r314–r315 or r326–r329.",
          ],
          [
            "Ranger",
            "Specify a terrain type — +1 to Lost rolls (r205) in that terrain.",
          ],
          [
            "Stealth",
            "+1 to Wit & Wiles when rolling to Hide (r317–r318) or Attempting Thievery (r224).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r237",
    title: "Experience Points (XP)",
    type: "optional",
    optional: true,
    desc: "Cal Arath gains XP by: 5XP at end of each week; 5XP first time entering a named Castle or Ruins hex; 5XP for [Site] or (Ψ) events; XP from defeating enemies (total Skill+Endurance of defeated, doubled for magical, divided by surviving party size).",
    linkedRules: ["r236", "r238", "r239", "r241"],
    tables: [
      {
        type: "roll-table",
        label: "XP Milestones",
        cols: ["XP Total", "Reward"],
        rows: [
          [
            "50, 150, 250, 350, 450",
            "Choose: new Advantage (r236), new Combat Tactic (r239), or gain 2 Luck points (r235).",
          ],
          ["100, 400", "+1 to Skill."],
          ["200", "+1 to Endurance."],
          ["300", "+1 to Wit & Wiles."],
          ["500", "Return across the Tragoth River to win the game instantly."],
        ],
      },
    ],
  },
  {
    tag: "r238",
    title: "Increased Danger",
    type: "optional",
    optional: true,
    desc: "If using XP (r237): from the start of Week 6, add +1 to the horizontal number on Travel Tables (r207), making result range 2–7. Characters marked with † become more dangerous — for each 100 XP you have, add +1 to both their Skill and Endurance.",
    linkedRules: ["r237", "r207"],
  },
  {
    tag: "r239",
    title: "Combat Tactics",
    type: "optional",
    optional: true,
    desc: "Start with 1 Combat Tactic chosen from r345–r348. Each tactic can only be used once per combat. Additional tactics can be gained through XP (r237) or Training (r240). The number in brackets at the start of a tactic indicates how many tactics you must already have before gaining it.",
    linkedRules: [
      "r237",
      "r240",
      "r345",
      "r346",
      "r347",
      "r348",
      "r349",
      "r350",
      "r351",
      "r352",
      "r353",
      "r354",
    ],
  },
  {
    tag: "r240",
    title: "Combat Training",
    type: "action",
    optional: true,
    desc: "Daily action in a town or castle. Costs 4 gold/day (town) or 5 gold/day (castle). Roll 2D6 each day and add to a running total. If you roll 11 or 12, instead of adding, take 1D6 wounds. Total reaches 30: gain a new Combat Tactic (r239). Total reaches 6× current Skill: raise Skill by +1. Maximum +3 Skill from training.",
    requiresHex: ["town", "castle", "dwarf-mine", "elf-haven"],
    note: "Can also train at a Dwarf Mine (with a dwarf in party) or Elf Haven (with an elf in party) for 3 gold/day. If employed at a castle and have a quiet day, training costs nothing on a roll of 5–6.",
    linkedRules: ["r239"],
  },

  // ─── QUESTS ───────────────────────────────────────────────────
  {
    tag: "r241",
    title: "Completing a Quest",
    type: "quest",
    desc: "Quests are not daily actions and can only be accessed from another section. Roll 1D6 and consult the appropriate table. 'Investigate' quests require a daily action rolling 1D6 + Wit & Wiles until the target number is reached. Rolling a 6 on any Investigate roll ends the trail — quest fails.",
    subRules: [
      { tag: "r241a", title: "Quest for a Village" },
      { tag: "r241b", title: "Quest for a Town" },
      { tag: "r241c", title: "Quest for a Temple" },
      { tag: "r241d", title: "Quest for Baron Huldra (hex 1212)" },
      { tag: "r241e", title: "Quest for Count Drogat (hex 0323)" },
      { tag: "r241f", title: "Quest for Lady Aeravir (hex 1923)" },
      { tag: "r241g", title: "Quest for a Dwarf Lord" },
      { tag: "r241h", title: "Quest for a Wizard" },
      { tag: "r241i", title: "Quest for a Halfling Village" },
      { tag: "r241j", title: "Quest for a Hawk Lord" },
      { tag: "r241k", title: "Quest for a Giant Chieftain" },
      { tag: "r241l", title: "Quest for the Elf King" },
      { tag: "r241m", title: "Quest for a Thieves' Guild" },
      { tag: "r241n", title: "Quest for a Tavern" },
      { tag: "r241o", title: "Quest for a Merchant" },
    ],
  },
  {
    tag: "r241a",
    title: "Quest for a Village",
    type: "quest",
    requiresHex: ["village"],
    tables: [
      {
        type: "roll-table",
        label: "Village Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1",
            "Bandits camped in random adjacent hex threatening the village. Kill them (e051, 1D6+2 bandits) for 25 gold (5XP).",
          ],
          [
            "2",
            "Wolves killing livestock. Kill them for 30 gold (5XP). Each day roll 1D6: on 1–3 see e075 (r304).",
          ],
          [
            "3",
            "Deliver a message to the nearest village or town. Earn 3 gold per hex (shortest route).",
          ],
          ["4", "Roll 1D6: 1–3 r241n; 4–6 r241o."],
          [
            "5",
            "Collect rare herbs from nearest forest hex for the village healer. Roll 1D6-3 per day (+2 if druid/witch in party). Earn 20 gold for 10 herbs.",
          ],
          [
            "6",
            "A mysterious beanstalk has appeared. Earn 25 gold to climb and investigate — see e430 (5XP).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241b",
    title: "Quest for a Town",
    type: "quest",
    requiresHex: ["town"],
    tables: [
      {
        type: "roll-table",
        label: "Town Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1",
            "Strange lights from the local graveyard. Investigate for 20 gold — see e435 (5XP).",
          ],
          [
            "2",
            "Escaped prisoner in random adjacent hex. Search like a cache (r214). Return head for 40 gold.",
          ],
          [
            "3",
            "Deliver a message to the nearest town or castle. Earn 4 gold per hex (shortest route).",
          ],
          [
            "4",
            "Fetch rare ingredients from nearest temple for the apothecary. Reward: 30 gold + 2 free potions (e175) (5XP).",
          ],
          [
            "5",
            "Town guard hiring extra men — see r233 Town result 4, +1 to daily roll.",
          ],
          [
            "6",
            "Investigate theft: Investigate (15) for 50 gold. Each day roll 1D6: on 1–2 see e173. Success: see e173 (+1 in number, r303).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241c",
    title: "Quest for a Temple",
    type: "quest",
    requiresHex: ["temple"],
    tables: [
      {
        type: "roll-table",
        label: "Temple Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1",
            "Escort a monk (S4, E5, W4) to the closest mountain hex for a day's meditation and return. Reward: +2 to Making Offerings (r212) (5XP).",
          ],
          [
            "2",
            "Guard a priest (S3, E3, W25) to the nearest habitation. Earn 30 gold on safe arrival.",
          ],
          [
            "3",
            "Ancient scriptures missing. Investigate (10) — found with a forgetful monk. Reward: free food and lodging at this temple (5XP).",
          ],
          [
            "4",
            "Temple guard duty — see r233 Castle result 1–2. On daily roll of 5, face 1D6+1 zombies (S5, E5*, W0) (r308).",
          ],
          [
            "5",
            "Old priest meditating in the wilderness (random direction, 1D3 hexes). Bring him food (3 units). Return for audience (e155) (5XP).",
          ],
          [
            "6",
            "Deliver urgent message to the nearest temple. Earn 4 gold per hex (shortest route).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241d",
    title: "Quest for Baron Huldra",
    type: "quest",
    requiresHex: ["1212"],
    tables: [
      {
        type: "roll-table",
        label: "Baron Huldra Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "Hooded figure sighted in castle at night. Each day roll 1D6: 1–2 see e400 (5XP); 3–6 figure doesn't appear. Reward: 25 gold.",
          ],
          [
            "3–4",
            "Baron injured by giant black bear. Kill it and bring back the pelt from hex 1411 (search like cache r214). See e084. Reward: 50 gold (5XP).",
          ],
          [
            "5–6",
            "Mysterious knight (S8, E8) besting all in tournament. Defeat him for audience (e152) (10XP). Roll 1D6: 1–2 normal; 3–4 magic sword (e186); 5–6 undead (no wound penalties).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241e",
    title: "Quest for Count Drogat",
    type: "quest",
    requiresHex: ["0323"],
    tables: [
      {
        type: "roll-table",
        label: "Count Drogat Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "Find a stolen clasp from a crypt. Investigate (12) to find the thief. Kill them (10XP). Reward: audience (e161 +2 to roll). Roll 1D6 for thief: 1–2 e170; 3 e023; 4 e172; 5 e128; 6 e020.",
          ],
          [
            "3–4",
            "Haunted portrait gallery. Restore order (10XP). Reward: Wealth 50 + magical item (e195). Roll 1D6: 1–2 e032; 3–4 e033; 5 e170; 6 e082. Refuse: see e062.",
          ],
          [
            "5–6",
            "Escaped prisoner in random adjacent hex. Search like a cache (r214). See e171 if successful (5XP). Reward: Wealth 60.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241f",
    title: "Quest for Lady Aeravir",
    type: "quest",
    requiresHex: ["1923"],
    tables: [
      {
        type: "roll-table",
        label: "Lady Aeravir Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "Investigate suspected spy noble. Investigate (15) (5XP). Reward: Wealth 60. Roll 1D6: 1–2 e023; 3–4 e170; 5–6 noble is loyal, also gain e151.",
          ],
          [
            "3–4",
            "Find stolen chalice from chapel. Investigate (12), deal with thief (5XP). Reward: audience (e160 +2 to roll). Roll 1D6 for thief: 1 e101; 2 e173; 3 e172; 4 e021; 5 e443; 6 e073 (hostile).",
          ],
          [
            "5–6",
            "Fetch rare herbs from Temple of Duffyd (hex 2018) within 10 days. Lady supplies up to 3 horses. Reward: 50 gold + audience (e160).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241g",
    title: "Quest for a Dwarf Lord",
    type: "quest",
    requiresHex: ["dwarf-mine"],
    tables: [
      {
        type: "roll-table",
        label: "Dwarf Lord Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "Frost giant (†S10, E9, W10) blocking a dwarf trade-route in closest mountain hex. Kill it and return with its head (1 load) (10XP). Reward: rare gemstones (e142).",
          ],
          [
            "3–4",
            "Abandoned dwarf mines rumoured in random direction (roll 1D6 for direction and distance, closest hills or mountains hex). Go there (see e067) and return (10XP). Reward: 40 gold or audience (e059a).",
          ],
          [
            "5–6",
            "Guard a dwarf blacksmith (S5, E6, W21) to the nearest town and back. Earn 30 gold each way. Dwarf pays food and lodging. He stays 1D6 days.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241h",
    title: "Quest for a Wizard",
    type: "quest",
    requiresHex: ["wizard-tower"],
    tables: [
      {
        type: "roll-table",
        label: "Wizard Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "Fetch a creature trophy from the nearest mountain hex (search like a cache r214) (5XP). Reward: Wealth 60. Roll 1D6: 1–2 e098; 3–4 e099; 5–6 e100.",
          ],
          [
            "3–4",
            "Wizard's dragon is dying — fetch elixir from Temple of Duffyd. Wizard provides magic transport and gold for the purchase. Return with elixir. Reward: Wealth 110 + Dragonscale shield (+2S when defending).",
          ],
          [
            "5–6",
            "Wizard's apprentice (see e025) locked up in nearest town. Rescue him like robbing a townhouse (r224a) +1 guard (5XP). Reward: Wealth 60.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241i",
    title: "Quest for a Halfling Village",
    type: "quest",
    requiresHex: ["halfling-village"],
    tables: [
      {
        type: "roll-table",
        label: "Halfling Village Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "Collect fireworks (2 loads) from a magician (e016, friendly approach) in random direction (1D3 hexes). Deliver within 6 days for a festival (e169) (5XP). Reward: 20 gold.",
          ],
          [
            "3–4",
            "Strange noises in an adjacent forest (or countryside) hex. Investigate (5XP). Reward: 30 gold. Roll 1D6: 1–2 e198a; 3 e071; 4 e178; 5 e435; 6 e080.",
          ],
          [
            "5–6",
            "Escort halfling nephew (S3, E5, W7) to an Elf Haven (random direction, closest forest hex) (5XP). Reward: old treasure map (e147).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241j",
    title: "Quest for a Hawk Lord",
    type: "quest",
    requiresHex: ["cloud-castle"],
    tables: [
      {
        type: "roll-table",
        label: "Hawk Lord Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "Harpies destroying eagle nests in random adjacent (or closest) mountain hex. Kill them (e101 +2 to number, fight option) (5XP). Reward: eagles become allies (e116).",
          ],
          [
            "3–4",
            "Insurrection in the Cloud Castle! Fight alongside the Hawk Lord's troops (see e108, r330) (Wealth 60). Refuse: escape the hex, can never return.",
          ],
          [
            "5–6",
            "Fetch a roc, griffon or dragon egg from random adjacent (or closest) mountain hex (5XP). See e439. Reward: audience (e117a +1 to roll). Hawk Lord will hatch the egg with magic.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241k",
    title: "Quest for a Giant Chieftain",
    type: "quest",
    requiresHex: ["giant-castle"],
    tables: [
      {
        type: "roll-table",
        label: "Giant Chieftain Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "Destroy rock golems (1D3+1, each S8, E8*) in random adjacent hill or mountain hex, led by sorceress Zenobia (†S4, E4, W60 — see e023a). Reward: Wealth 110.",
          ],
          [
            "3–4",
            "Ancient ruins under the castle can be explored (e064, 5XP). Giant Chieftain buys magical treasure and creature trophies (see r231 result 11).",
          ],
          [
            "5–6",
            "Chieftain's brother (S9, E8) is under an enchanted sleep. Wake him with a wizard/magician/witch in your party. He joins as an ally (r334). Reward: audience (e118b +1 to roll).",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241l",
    title: "Quest for the Elf King",
    type: "quest",
    requiresHex: ["elf-haven"],
    tables: [
      {
        type: "roll-table",
        label: "Elf King Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "Help an elf mage (S5, E5, W15) explore ancient magic in the closest random forest hex (search like cache r214). See e198 (5XP). Reward: magical item (e195).",
          ],
          [
            "3–4",
            "Elf vision gem prophecy: dark wizard Castamaris will rule the Northlands. Elf King gives you 50 gold and bids you leave immediately (10XP). Must complete quest within 9 weeks instead of 10. (Ψ)",
          ],
          [
            "5–6",
            "A wounded unicorn reached the Haven. Kill the beast that injured it in a forest (random direction, 1D3 hexes) (10XP). Reward: audience (e166a +1 to roll). Roll 1D6: 1–2 e171; 3–4 e033; 5–6 e074.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241m",
    title: "Quest for a Thieves' Guild",
    type: "quest",
    requiresHex: ["town"],
    tables: [
      {
        type: "roll-table",
        label: "Thieves' Guild Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1–2",
            "An assassin (S7, E5, W50) killed the Guild Head. Investigate (18) and kill the assassin (r330, +2S in surprise round). Become the new Guild Head: gain 3D6 gold/day, but roll 1D6 daily — on a 1, an assassin attacks you (r308).",
          ],
          [
            "3–4",
            "Rob the nearest temple or castle. See r224b (Wit & Wiles -1, guards +2 in number, roll twice for loot).",
          ],
          [
            "5–6",
            "Rob an important visitor staying in town as if in their habitation (r224b). Roll 1D6: 1–2 lord of nearest castle (e130); 3 high priest of nearest temple (W100); 4 Dwarf Lord; 5 Wizard; 6 Elf Noble.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241n",
    title: "Quest for a Tavern",
    type: "quest",
    tables: [
      {
        type: "roll-table",
        label: "Tavern Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1",
            "Rats in the cellar. Each day roll 1D6: on 1–4 see e432 (r303). Reward: 20 gold.",
          ],
          [
            "2",
            "Tavern targeted by thieves. Each day roll 1D6: on 1–3 see e173 (r302). Reward: 30 gold.",
          ],
          [
            "3",
            "Deliver a keg of beer (2 loads) to nearest village, town or castle. Given a horse. Earn 4 gold per hex (shortest route).",
          ],
          [
            "4",
            "Missing adventurer. Roll random direction then search like a cache (r214) to find the body. Reward: 20 gold (5XP).",
          ],
          [
            "5",
            "Tavern keeper needs a bouncer — see r233 village or town results as appropriate.",
          ],
          [
            "6",
            "Roll again on the appropriate r241 table for the habitation. If not in a habitation, no quest available.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r241o",
    title: "Quest for a Merchant",
    type: "quest",
    tables: [
      {
        type: "roll-table",
        label: "Merchant Quests (1D6)",
        cols: ["Roll", "Quest"],
        rows: [
          [
            "1",
            "Deliver a bolt of fine cloth (3 loads) to nearest town or castle. Given a horse. Earn 5 gold per hex (shortest route).",
          ],
          [
            "2",
            "Collect animal pelts (5 loads) from the nearest village. Given a horse. Earn 4 gold per hex (shortest route).",
          ],
          [
            "3",
            "Join a merchant caravan as guards leaving tomorrow toward nearest habitation — see e129.",
          ],
          [
            "4",
            "New merchant undercutting everyone. Investigate (12) for 30 gold, then 'put him out of business' — see e128 (attack option).",
          ],
          [
            "5",
            "Merchant targeted by thieves. Each day roll 1D6: on 1–3 see e173 (r302). Reward: 40 gold.",
          ],
          ["6", "Roll again on the appropriate r241 table for the habitation."],
        ],
      },
    ],
  },
  {
    tag: "r242",
    title: "Armor",
    type: "optional",
    optional: true,
    desc: "Armor absorbs wounds before Endurance is affected. After any combat where armor absorbed wounds, roll 1D6: 1 destroyed; 2 must be repaired before use again; 3–6 unaffected. Armor counts as loads (r206). Only the Barbarian Prince may purchase armor.",
    note: "Characters in your party or that you encounter may wear armor, but it is already factored into their Skill and Endurance.",
    tables: [
      {
        type: "simple-list",
        label: "Armor Types",
        rows: [
          ["Shield", "Absorbs 1 wound. Costs 5 gold (repair 2 gold). 1 load."],
          [
            "Chainmail",
            "Absorbs 2 wounds. Costs 10 gold (repair 4 gold). 2 loads.",
          ],
          [
            "Plate Armor",
            "Absorbs 4 wounds. Costs 20 gold (repair 12 gold). 4 loads. Only available at a Castle.",
          ],
        ],
      },
    ],
  },

  // ─── ENCOUNTER REFERENCES ─────────────────────────────────────
  {
    tag: "r300",
    title: "Surprise",
    type: "encounter",
    desc: "Your party surprises the characters encountered in combat (r220).",
  },
  {
    tag: "r301",
    title: "Surprise",
    type: "encounter",
    desc: "Roll 1D6. If your Wit & Wiles equals or exceeds the die roll, your party surprises the characters encountered. Otherwise you strike first in combat (r220).",
  },
  {
    tag: "r302",
    title: "Surprise",
    type: "encounter",
    desc: "Roll 1D6. If your Wit & Wiles exceeds the die roll, your party surprises the characters encountered. Otherwise you strike first in combat (r220).",
  },
  {
    tag: "r303",
    title: "Surprise",
    type: "encounter",
    desc: "Roll 1D6. If the number of characters in your party is less than the roll, your party surprises the characters encountered. Otherwise you strike first in combat (r220).",
  },
  {
    tag: "r304",
    title: "Attack",
    type: "encounter",
    desc: "Your party strikes first in combat (r220) against the characters.",
  },
  {
    tag: "r305",
    title: "Attack",
    type: "encounter",
    desc: "Roll 1D6. If your Wit & Wiles equals or exceeds the die roll, you strike first in combat (r220). Otherwise, characters encountered strike first.",
  },
  {
    tag: "r306",
    title: "Attacked",
    type: "encounter",
    desc: "Roll 1D6. If your Wit & Wiles exceeds the die roll, you strike first in combat (r220). Otherwise, characters encountered strike first.",
  },
  {
    tag: "r307",
    title: "Attacked",
    type: "encounter",
    desc: "Characters encountered strike first in combat (r220) against your party.",
  },
  {
    tag: "r308",
    title: "Surprised",
    type: "encounter",
    desc: "Roll 1D6. If your Wit & Wiles equals or exceeds the die roll, you sense danger — characters encountered only strike first against you in combat (r220). Otherwise you fail to sense danger and they surprise you (r220d).",
  },
  {
    tag: "r309",
    title: "Surprised",
    type: "encounter",
    desc: "Roll 1D6. If your Wit & Wiles exceeds the die roll, you sense danger — characters encountered only strike first against you in combat (r220). Otherwise you fail to sense danger and they surprise you (r220d).",
  },
  {
    tag: "r310",
    title: "Surprised",
    type: "encounter",
    desc: "Characters encountered surprise your party (r220d) and cause combat (r220).",
  },
  {
    tag: "r311",
    title: "Escape",
    type: "encounter",
    desc: "Your party escapes to an adjacent hex (r218). Roll 1D6 — on a result of 1, you are pursued (r344).",
  },
  {
    tag: "r312",
    title: "Escape Mounted",
    type: "encounter",
    desc: "Ride away if your entire party has mounts — escape to an adjacent hex (r218). Characters without mounts can be abandoned to permit the rest to escape, or the entire party cannot escape (r330). If encountered characters also have mounts, roll 1D6: on 1–2, you are pursued (r344).",
  },
  {
    tag: "r313",
    title: "Escape Flying",
    type: "encounter",
    desc: "Fly away if your entire party can fly — escape to an adjacent hex (r218). Characters who cannot fly can be abandoned, or the entire party cannot escape (r330). If encountered characters can also fly, roll 1D6: on 1–3, you are pursued (r344).",
  },
  {
    tag: "r314",
    title: "Escape",
    type: "encounter",
    desc: "Try to talk your way past them. Roll 1D6 — if your Wit & Wiles equals or exceeds the die roll, your party escapes to an adjacent hex (r218). Otherwise return to the previous event and select another option.",
  },
  {
    tag: "r315",
    title: "Escape",
    type: "encounter",
    desc: "Try to throw them off with a few well-chosen words. Roll 1D6 — if your Wit & Wiles exceeds the die roll, your party escapes to an adjacent hex (r218). Otherwise return to the previous event and select another option.",
  },
  {
    tag: "r316",
    title: "Hide",
    type: "encounter",
    desc: "Your party hides in this hex (r218).",
  },
  {
    tag: "r317",
    title: "Hide",
    type: "encounter",
    desc: "Think quickly and try to hide. Roll 1D6 — if your Wit & Wiles equals or exceeds the roll, your party hides in this hex (r218). Otherwise return to the previous event and select another option.",
  },
  {
    tag: "r318",
    title: "Hide",
    type: "encounter",
    desc: "Try hiding. Roll 1D6 — if your Wit & Wiles exceeds the die roll, your party hides in this hex (r218). Otherwise you didn't think fast enough — return to the previous event and select a new option.",
  },
  {
    tag: "r319",
    title: "Hide",
    type: "encounter",
    desc: "Look for enough cover to hide your party. Roll 1D6 — if the number of characters in your party is equal to or less than the die roll, you can hide (r218). Otherwise return to previous event. You can't abandon characters to hide — they would reveal your hiding place.",
  },
  {
    tag: "r320",
    title: "Hide",
    type: "encounter",
    desc: "Look for cover. Roll 1D6 — if the number of characters in your party is less than the die roll, you can hide (r218). Otherwise return to previous event. You cannot abandon party members to hide — they would reveal your hiding place.",
  },
  {
    tag: "r321",
    title: "Bribe to Pass",
    type: "encounter",
    desc: "If you pay the amount of gold indicated, characters encountered will let you pass and the encounter ends. Otherwise they become hostile — see r330 and add +1 to your dice roll.",
  },
  {
    tag: "r322",
    title: "Bribe to Pass",
    type: "encounter",
    desc: "Characters encountered have a nasty look. If you pay the amount of gold indicated they will pass and the event ends. Otherwise go to r330 and prepare to battle.",
  },
  {
    tag: "r323",
    title: "Bribe to Pass",
    type: "encounter",
    desc: "Characters seem unsavory. If you pay the gold demanded you can pass and the event ends. Otherwise there is risk of ambush — go to r330 with -1 to your dice roll.",
  },
  {
    tag: "r324",
    title: "Bribe to Pass",
    type: "encounter",
    desc: "Characters have weapons drawn, putting you at a disadvantage. Either pay the gold demanded and end this event, or let them attack and strike first in combat (r220).",
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
    desc: "Try to lull their suspicions. Roll 1D6 — if your Wit & Wiles equals or exceeds the roll, characters let your party pass and the event ends. Otherwise see r330 and add +1 to your dice roll.",
  },
  {
    tag: "r327",
    title: "Pass",
    type: "encounter",
    desc: "Characters look nasty but slow on the uptake — try to talk your way past. Roll 1D6 — if your Wit & Wiles equals or exceeds the roll, they let your party pass and the event ends. Otherwise go to r330.",
  },
  {
    tag: "r328",
    title: "Pass",
    type: "encounter",
    desc: "Characters look rough — try to talk your way out of a fight. Roll 1D6 — if your Wit & Wiles exceeds the roll, they let your party pass and the event ends. Otherwise see r330.",
  },
  {
    tag: "r329",
    title: "Pass",
    type: "encounter",
    desc: "Characters have an unpleasant gleam in their eyes. Roll 1D6 — if your Wit & Wiles exceeds the roll they let your party pass and the event ends. Otherwise go to r330 with -1 from your dice roll.",
  },
  {
    tag: "r330",
    title: "Battle Reference",
    type: "encounter",
    desc: "You are forced to fight. Roll 2D6 and go to the reference.",
    tables: [
      {
        type: "roll-table",
        label: "Battle Reference",
        cols: ["Roll", "Reference"],
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
          ["12+", "r300"],
        ],
      },
    ],
  },
  {
    tag: "r331",
    title: "Bribe to Join",
    type: "encounter",
    desc: "Characters are looking for easy money. They will join your party if you pay the gold requested. If you don't pay, roll 1D6: 1–3 characters ignore you; 4 r321; 5 r322; 6 r323. If paid, they stay until you fail to give them an equal share of new gold, or until any party member is abandoned or killed — at which point they immediately desert.",
  },
  {
    tag: "r332",
    title: "Bribe to Hire",
    type: "encounter",
    desc: "Characters will hire as henchmen for 2 gold each day, provided you pay the bonus gold requested now. Daily pay starts tomorrow. If more than one character, hire all or none as a group. If you don't hire them, roll 1D6: 1–2 ignore you; 3 r321; 4 r322; 5 r323; 6 r324.",
  },
  {
    tag: "r333",
    title: "Hirelings",
    type: "encounter",
    desc: "Characters need a job. They will hire on at 2 gold each day, provided you pay today's wages now. They stay as long as paid each evening meal (r215). You can hire some or all. If you don't hire any, roll 1D6: 1–3 r325; 4 they pass on news (nearest habitation event) and leave; 5 r326; 6 r327.",
  },
  {
    tag: "r334",
    title: "Ally",
    type: "encounter",
    desc: "Characters know about your quest and have a personal grudge against the usurpers. They join as loyal followers at no cost beyond food and lodging, will not desert due to starvation (r216b) or lodging (r217), and may even help pay if they can.",
  },
  {
    tag: "r335",
    title: "Escapee",
    type: "encounter",
    desc: "Characters are fleeing someone. They will join your party at no cost (beyond food and lodging) but will disappear whenever you enter any habitation hex.",
  },
  {
    tag: "r336",
    title: "Plead Comrades",
    type: "encounter",
    desc: "Characters seem sympathetic. Roll 1D6 — if your Wit & Wiles equals or exceeds the roll, they join as followers. Otherwise they leave; roll 1D6 and on a 6 they pass on some news (nearest habitation event) before departing.",
  },
  {
    tag: "r337",
    title: "Plead Comrades",
    type: "encounter",
    desc: "Characters look unsavory but willing to talk. Roll 1D6 — if your Wit & Wiles exceeds the roll, they join as followers. Otherwise roll 1D6: 1 r325; 2 r330; 3 r340; 4 r341; 5 r342; 6 they pass on news (nearest habitation event) and depart.",
  },
  {
    tag: "r338",
    title: "Convince Hirelings",
    type: "encounter",
    desc: "Characters look dubiously at you. Roll 1D6 — if your Wit & Wiles equals or exceeds the roll, they join as hirelings. Pay 1 gold/day each if Wit & Wiles exceeded the roll; 2 gold/day if it equaled the roll. Today's pay must be given immediately. Those not hired (or if you fail) will pass by, ending the event.",
  },
  {
    tag: "r339",
    title: "Convince Hirelings",
    type: "encounter",
    desc: "Characters look askance and will pass by unless you stop to talk. If you stop: roll 1D6 — if your Wit & Wiles exceeds the die roll, they join at 2 gold/day with today's gold due now. You can hire some instead of all. If you fail: 1 they pass on news and depart; 2–3 r325; 4–6 r330.",
  },
  {
    tag: "r340",
    title: "Looter",
    type: "encounter",
    desc: "Characters look like they need money. Let them pass (encounter ends; roll 1D6 on a 6 you gain news from nearest habitation) or try to convince them to join. If you try: roll 1D6 — if Wit & Wiles equals or exceeds the roll, they join as long as they get an equal share of new gold. If you deny their share or fail to convince them: 1–2 they attack you personally (r220, first strike); 3–4 they attack your party (r330); 5–6 they depart angry.",
  },
  {
    tag: "r341",
    title: "Conversation",
    type: "encounter",
    desc: "Extended talking — you cannot travel further today and unfinished daily actions cannot be completed. Roll 2D6 for the result.",
    tables: [
      {
        type: "roll-table",
        label: "Conversation Results",
        cols: ["Roll", "Result"],
        rows: [
          [
            "2",
            "A hired assassin surprises you (r310) in combat (r220) and always strikes at you personally.",
          ],
          ["3", "Bandits who may surprise you — see r308."],
          [
            "4",
            "Arrogant and surly — conversation turns into an argument, see r305.",
          ],
          [
            "5",
            "Characters need 10 gold now (r331) but will leave when you next enter a named habitation.",
          ],
          ["6", "Characters ask for 5 gold now and employment — see r332."],
          ["7", "Characters willing to hire as henchmen — see r333."],
          ["8", "Characters looking for fun and profit — see r338."],
          ["9", "Characters fugitive from local justice — see r335."],
          [
            "10",
            "Characters down on luck, looking for a turn in fortunes — see r336.",
          ],
          ["11", "Characters obviously plundering mercenaries — see r340."],
          ["12", "Characters discover a common cause with you — see r334."],
        ],
      },
    ],
  },
  {
    tag: "r342",
    title: "General Inquiry",
    type: "encounter",
    desc: "You are unsure of attitudes and make some general inquiries. Roll 2D6.",
    tables: [
      {
        type: "roll-table",
        label: "General Inquiry Results",
        cols: ["Roll", "Result"],
        rows: [
          ["2", "You unwittingly give insult — see r309."],
          ["3", "You are unwillingly forced into combat — see r330."],
          ["4", "Characters interested in loot — see r340."],
          ["5", "Characters attempt attack on you — see r306."],
          [
            "6",
            "Characters uninterested — roll 1D6, on a 6 they pass on news (nearest habitation event) before departing.",
          ],
          [
            "7",
            "Characters reveal themselves gradually — you can talk further (r341) or let them pass (r325).",
          ],
          ["8", "Characters are for hire — see r333."],
          ["9", "Characters may be for hire — see r339."],
          ["10", "Characters may be sympathetic to your cause — see r337."],
          ["11", "Characters uninterested, but may be for hire — see r338."],
          [
            "12",
            "Characters aloof, but might consider joining you — see r336.",
          ],
        ],
      },
    ],
  },
  {
    tag: "r343",
    title: "Victim Selection",
    type: "encounter",
    desc: "One character in your party is the victim of the attack. If alone, you are the target. Otherwise, select characters one by one in any order. For each, roll 1D6 — on a '6' that character is the target. Continue until the target is selected.",
  },
  {
    tag: "r344",
    title: "Pursued",
    type: "encounter",
    desc: "Encountered characters give chase. Roll 2D6 + Wit & Wiles - total characters on both sides. Add +1 in forest, mountains or habitation hex; -1 in swamp, desert or farmland. Result 8+: escaped (r218). Result 7: repeat roll with -1 (pursuers catching up). Result 6 or less: caught, must fight (r306).",
  },

  // ─── COMBAT TACTICS ───────────────────────────────────────────
  {
    tag: "r345",
    title: "Parry",
    type: "combat",
    optional: true,
    desc: "(0) Add +3 to your Skill when defending in one combat round against a Character with Skill 6 or less.",
  },
  {
    tag: "r346",
    title: "Quick Thrust",
    type: "combat",
    optional: true,
    desc: "(0) Add +2 to your Skill when attacking in one combat round against a Character with Skill 6 or less.",
  },
  {
    tag: "r347",
    title: "Block",
    type: "combat",
    optional: true,
    desc: "(0) Ignore up to 2 wounds caused by a single successful strike of an attacking Character with Skill 6 or less.",
  },
  {
    tag: "r348",
    title: "Swift Strike",
    type: "combat",
    optional: true,
    desc: "(0) Strike twice in one combat round against a Character with Skill 6 or less.",
  },
  {
    tag: "r349",
    title: "Stamina",
    type: "combat",
    optional: true,
    desc: "(1) Ignore all negative modifiers to your Skill due to wounds for 3 combat rounds; then take 1 wound.",
  },
  {
    tag: "r350",
    title: "Feint",
    type: "combat",
    optional: true,
    desc: "(2) Add +3 to your Skill when defending in one combat round against all Characters with Skill 7 or less.",
  },
  {
    tag: "r351",
    title: "Vicious Strike",
    type: "combat",
    optional: true,
    desc: "(2) Add +2 wounds to a single successful strike you make against a Character with a Skill of 7 or less.",
  },
  {
    tag: "r352",
    title: "Blade Mastery",
    type: "combat",
    optional: true,
    desc: "(3) Add +2 to your Skill for one combat round against all Characters with Skill 8 or less.",
  },
  {
    tag: "r353",
    title: "Dodge",
    type: "combat",
    optional: true,
    desc: "(3) Ignore all wounds caused by a single successful strike of an attacking Character with Skill 8 or less.",
  },
  {
    tag: "r354",
    title: "Battle Fury",
    type: "combat",
    optional: true,
    desc: "(4) Add +2 to your Skill when attacking in this combat but take 1 wound at the end of each combat round. Due to your fury you ignore all negative modifiers due to your wounds.",
  },
];
