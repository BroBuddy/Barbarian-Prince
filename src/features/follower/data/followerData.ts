import type { Follower } from "../../game/types/GameType";

export const followerData: Omit<Follower, "id" | "payPerDay">[] = [
  { title: "Amazon", combat: 6, endurance: 5, mounted: false },
  { title: "Druid", combat: 0, endurance: 0, mounted: false },
  { title: "Dwarf", combat: 6, endurance: 7, mounted: false },
  { title: "Elf", combat: 5, endurance: 5, mounted: false },
  { title: "Fugitive", combat: 2, endurance: 4, mounted: false },
  { title: "Giant", combat: 9, endurance: 8, mounted: false },
  { title: "Griffon", combat: 7, endurance: 6, mounted: true },
  { title: "Halfling", combat: 3, endurance: 6, mounted: false },
  { title: "Harpy", combat: 5, endurance: 4, mounted: true },
  { title: "Mercenary", combat: 5, endurance: 4, mounted: false },
  { title: "Minstrel", combat: 0, endurance: 0, mounted: false },
  { title: "Hermit Monk", combat: 3, endurance: 6, mounted: false },
  { title: "Travelling Monk", combat: 4, endurance: 5, mounted: false },
  { title: "Warrior Monk", combat: 6, endurance: 6, mounted: false },
  { title: "Priest", combat: 3, endurance: 3, mounted: false },
  { title: "Swordsman", combat: 6, endurance: 6, mounted: false },
  { title: "Warrior", combat: 7, endurance: 6, mounted: false },
  { title: "Witch", combat: 1, endurance: 3, mounted: false },
  { title: "Wizard", combat: 4, endurance: 4, mounted: false },
];
