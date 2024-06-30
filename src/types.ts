export type Story = {
  id: number;
  title: string;
  url: string;
  score: number;
  time: number;
  text: string;
  kids: number[];
  descendants: number;
}

export type Comment = {
  id: number;
  title: string;
  text: string;
  time: number;
  by: string;
  kids: number[];
  parent: number;
}
