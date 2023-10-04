import { flight } from "../types/flight";

export const INITIAL_FLIGHTS: flight[] = [
  {
    id: 1,
    flightNumber: "SN1234",
    tasks: [
      {
        id: 1,
        type: "Cleaning",
        team: "Team 1",
        dragging: true,
      },
      {
        id: 2,
        type: "Drinkable water",
        team: "Tasks",
        dragging: false,
      },
    ],
  },
  {
    id: 2,
    flightNumber: "SN4321",
    tasks: [
      {
        id: 3,
        type: "Toilet",
        team: "Tasks",
        dragging: false,
      },
    ],
  },
  {
    id: 3,
    flightNumber: "SN5678",
    tasks: [
      {
        id: 4,
        type: "Cleaning",
        team: "Tasks",
        dragging: false,
      },
    ],
  },
  {
    id: 4,
    flightNumber: "SN8765",
    tasks: [
      {
        id: 5,
        type: "Cleaning",
        team: "Tasks",
        dragging: false,
      },
    ],
  },
];
