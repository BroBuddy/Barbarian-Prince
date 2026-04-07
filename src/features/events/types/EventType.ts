export interface Event {
  tag: string;
  title: string;
  type: EventType;
  image?: boolean;
  desc?: string;
  note?: string;
  tables?: TableType[];
}

export type EventItem = Pick<Event, "tag" | "title">;

export type EventType =
  | "encounter"
  | "combat"
  | "location"
  | "magic"
  | "item"
  | "event"
  | "story"
  | "npc";

export type TableType = SimpleListTableType | RollTableType;

export type SimpleListTableType = {
  type: "simple-list";
  label: string;
  rows: string[][];
};

export type RollTableType = {
  type: "roll-table";
  label: string;
  cols: string[];
  rows: string[][];
};
