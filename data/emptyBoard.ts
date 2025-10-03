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
      title: "To Do",
      tasks: [],
    },
    {
      id: "col-2",
      name: "doing",
      title: "In Progress",
      tasks: [],
    },
    {
      id: "col-3",
      name: "toreview",
      title: "In Review",
      tasks: [],
    },
    {
      id: "col-4",
      name: "done",
      title: "Done",
      tasks: [],
    },
  ],
};
