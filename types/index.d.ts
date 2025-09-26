export interface Kanban {
  id: number;
  name: string;
  description?: string;
  columns: Column[];
  createdAt?: Date;
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
  description?: string;
  priority: "low" | "medium" | "high";
  assignee: string[];
  dueDate?: Date;
}
