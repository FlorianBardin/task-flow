import type { Kanban } from "../types";

export const newBoard: Kanban = {
  id: 0,
  name: "New Kanban Board",
  description:
    "The tables provide a description to best describe the topic covered.",
  wip: 3,
  createdAt: new Date(),
  columns: [
    {
      id: "col-1",
      name: "todo",
      title: "To Do",
      tasks: [
        {
          id: 1,
          title: "New task",
          description:
            "You can also describe your tasks, indicate their priority and assign people to them!",
          priority: "Low",
          assignee: [{ id: 1, name: "Team member" }],
          dueDate: new Date(),
        },
      ],
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
