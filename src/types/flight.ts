import { task } from "./task";

export type flight = {
  id: number;
  flightNumber: string;
  tasks: task[];
};
