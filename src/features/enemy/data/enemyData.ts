import type { Enemy } from "../../game/types/GameType";

export const enemyData: Omit<Enemy, "id" | "wealthCode">[] = [
  { title: "Amazon", combat: 6, endurance: 5 },
  { title: "Druid", combat: 0, endurance: 0 },
  { title: "Dwarf", combat: 6, endurance: 7 },
  { title: "Elf", combat: 5, endurance: 5 },
  { title: "Fugitive", combat: 2, endurance: 4 },
  { title: "Giant", combat: 9, endurance: 8 },
  { title: "Griffon", combat: 7, endurance: 6 },
  { title: "Halfling", combat: 3, endurance: 6 },
  { title: "Harpy", combat: 5, endurance: 4 },
  { title: "Mercenary", combat: 5, endurance: 4 },
  { title: "Minstrel", combat: 0, endurance: 0 },
  { title: "Hermit Monk", combat: 3, endurance: 6 },
  { title: "Travelling Monk", combat: 4, endurance: 5 },
  { title: "Warrior Monk", combat: 6, endurance: 6 },
  { title: "Priest", combat: 3, endurance: 3 },
  { title: "Swordsman", combat: 6, endurance: 6 },
  { title: "Warrior", combat: 7, endurance: 6 },
  { title: "Witch", combat: 1, endurance: 3 },
  { title: "Wizard", combat: 4, endurance: 4 },
];
