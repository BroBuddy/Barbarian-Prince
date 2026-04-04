export type Follower = {
  id: string;
  title: string;
  combat: number;
  endurance: number;
  payPerDay: number;
};

export type Enemy = {
  id: string;
  title: string;
  combat: number;
  endurance: number;
  wealthCode: WealthCode;
};

export type WealthCode =
  | 0
  | 1
  | 2
  | 4
  | 5
  | 7
  | 10
  | 12
  | 15
  | 21
  | 25
  | 30
  | 50
  | 60
  | 70
  | 110
  | "a"
  | "b"
  | "c";
