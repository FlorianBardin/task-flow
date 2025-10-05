import { type Kanban } from "../types";

export const exampleBoard: Kanban = {
  id: 1,
  name: "Website Redesign Project",
  description:
    "Redesigning the company website for improved UX and performance.",
  wip: 3,
  createdAt: new Date("2025-09-01"),

  columns: [
    {
      id: "1",
      name: "todo",
      title: "To Do",
      tasks: [
        {
          id: 101,
          title: "Create project brief",
          description:
            "Outline project goals, target audience, and deliverables.",
          priority: "High",
          assignee: [{ id: 1, name: "Alice" }],
          createdAt: new Date("2025-10-10"),
        },
        {
          id: 102,
          title: "Gather design inspiration",
          description: "Collect visual ideas and reference websites.",
          priority: "Low",
          assignee: [{ id: 2, name: "Bob" }],
          createdAt: new Date("2025-10-08"),
        },
      ],
    },

    {
      id: "2",
      name: "doing",
      title: "In Progress",
      tasks: [
        {
          id: 103,
          title: "Wireframe homepage layout",
          description: "Design low-fidelity wireframes for homepage structure.",
          priority: "Medium",
          assignee: [
            { id: 3, name: "Clara" },
            { id: 1, name: "Alice" },
          ],
          createdAt: new Date("2025-10-12"),
        },
      ],
    },

    {
      id: "3",
      name: "toreview",
      title: "To Review",
      tasks: [
        {
          id: 104,
          title: "Setup project repository",
          description: "Initialize GitHub repo and configure CI/CD workflow.",
          priority: "High",
          assignee: [{ id: 2, name: "Bob" }],
          createdAt: new Date("2025-10-06"),
        },
      ],
    },

    {
      id: "4",
      name: "done",
      title: "Done",
      tasks: [
        {
          id: 105,
          title: "Conduct stakeholder interviews",
          description:
            "Interview stakeholders to identify key needs and expectations.",
          priority: "Medium",
          assignee: [{ id: 4, name: "Derek" }],
          createdAt: new Date("2025-09-20"),
        },
      ],
    },
  ],
};
