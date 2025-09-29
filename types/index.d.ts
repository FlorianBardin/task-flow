export interface Kanban {
  id: number;
  name: string;
  description: string;
  columns: Column[];
  createdAt: Date;
}

export interface Column {
  id: string;
  name: "todo" | "doing" | "toreview" | "done";
  title: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  assignee: Assignee[];
  dueDate: Date;
}

export interface Assignee {
  id: number;
  name: string;
}
