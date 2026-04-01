export type RollTableType = "roll-table" | "simple-list";

export interface RollTable {
  type: RollTableType;
  label: string;
  cols?: string[];
  rows: string[][];
}

export interface Event {
  id: string;
  title: string;
  tag:
    | "encounter"
    | "combat"
    | "location"
    | "treasure"
    | "weather"
    | "magic"
    | "item"
    | "event";
  desc?: string;
  note?: string;
  tables?: RollTable[];
}
