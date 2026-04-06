import type { Follower } from "../types/GameType";

export const FOLLOWER_DEFINITIONS: Omit<
  Follower,
  "id" | "payPerDay" | "mounted"
>[] = [
  { title: "Amazon", combat: 6, endurance: 5 },
  { title: "Druid", combat: 6, endurance: 7 },
  { title: "Dwarf", combat: 3, endurance: 3 },
  { title: "Elf", combat: 5, endurance: 5 },
  { title: "Fugitive", combat: 2, endurance: 4 },
  { title: "Giant", combat: 9, endurance: 8 },
  { title: "Griffon", combat: 8, endurance: 6 },
  { title: "Halfling", combat: 3, endurance: 6 },
  { title: "Harpy", combat: 5, endurance: 4 },
  { title: "Mercenary", combat: 5, endurance: 4 },
  { title: "Minstrel", combat: 2, endurance: 3 },
  { title: "Hermit Monk", combat: 3, endurance: 6 },
  { title: "Travelling Monk", combat: 4, endurance: 5 },
  { title: "Warrior Monk", combat: 6, endurance: 6 },
  { title: "Priest", combat: 3, endurance: 3 },
  { title: "Swordsman", combat: 5, endurance: 4 },
  { title: "Warrior", combat: 7, endurance: 6 },
  { title: "Old Witch", combat: 1, endurance: 3 },
  { title: "Young Witch", combat: 2, endurance: 4 },
  { title: "Wizard", combat: 4, endurance: 4 },
];
