export type taskType = "Cleaning" | "Toilet" | "Drinkable water";

export type task = {
  id: number;
  type: taskType;
  team: string;
  dragging: boolean;
};
