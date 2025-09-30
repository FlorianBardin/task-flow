import type { Kanban } from "../types";

export const emptyBoard: Kanban = {
  id: 0,
  name: "",
  description: "",
  createdAt: new Date(),
  columns: [
    {
      id: "col-1",
      name: "todo",
      title: "À faire",
      tasks: [],
    },
    {
      id: "col-2",
      name: "doing",
      title: "En cours",
      tasks: [],
    },
    {
      id: "col-3",
      name: "toreview",
      title: "À relire",
      tasks: [],
    },
    {
      id: "col-4",
      name: "done",
      title: "Terminé",
      tasks: [],
    },
  ],
};
