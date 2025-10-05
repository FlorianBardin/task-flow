import Button from "./Button";
import type { Assignee, Kanban, Task } from "../../types";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import modify from "../assets/modify.svg";
import trash from "../assets/trash.svg";

type EditTaskFormType = {
  kanbanStorage: Kanban[] | undefined;
  setKanbanStorage: (kanbans: Kanban[]) => unknown;
  activeKanban: Kanban;
  setActiveKanban: (kanban: Kanban) => unknown;
  task: Task;
};

const EditTaskForm = ({
  kanbanStorage,
  setKanbanStorage,
  activeKanban,
  setActiveKanban,
  task,
}: EditTaskFormType) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formValues, setFormValues] = useState({
    name: task.title,
    description: task.description,
    assignees: task.assignee.map((a) => a.name).join(" "),
    priority: task.priority as "Low" | "Medium" | "High",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const deleteTask = () => {
    const columnIndex = activeKanban.columns.findIndex((col) =>
      col.tasks.some((t) => t.id === task.id)
    );
    if (columnIndex === -1) return;

    const columnWithTask = activeKanban.columns[columnIndex];
    const filteredTasks = columnWithTask.tasks.filter((t) => t.id !== task.id);
    const columnWithoutTask = { ...columnWithTask, tasks: filteredTasks };

    const updatedColumns = [...activeKanban.columns];
    updatedColumns[columnIndex] = columnWithoutTask;

    const updatedKanban: Kanban = {
      ...activeKanban,
      columns: updatedColumns,
    };

    setActiveKanban(updatedKanban);

    const updatedStorage = [...kanbanStorage!];
    for (let i = 0; i < updatedStorage.length; i++) {
      if (updatedStorage[i].id == updatedKanban.id) {
        updatedStorage.splice(i, 1);
        updatedStorage.unshift(updatedKanban);
      }
    }
    setKanbanStorage(updatedStorage);

    setIsOpen(false);
  };

  const editTask = () => {
    const name = formValues.name;
    const description = formValues.description;
    const assigneesName = formValues.assignees.split(" ");
    const assignees: Assignee[] = [];

    for (let i = 0; i < assigneesName.length; i++) {
      const fullAssignee: Assignee = {
        id: i,
        name: assigneesName[i],
      };
      assignees.push(fullAssignee);
    }

    const newTask: Task = {
      id: Date.now(),
      title: name,
      description: description,
      priority: formValues.priority,
      assignee: assignees,
      createdAt: new Date(),
    };

    const columnIndex = activeKanban.columns.findIndex((col) =>
      col.tasks.some((t) => t.id === task.id)
    );
    if (columnIndex === -1) return;

    const columnWithTask = activeKanban.columns[columnIndex];
    const filteredTasks = columnWithTask.tasks.filter((t) => t.id !== task.id);
    const columnWithoutTask = { ...columnWithTask, tasks: filteredTasks };

    const updatedColumns = [...activeKanban.columns];
    updatedColumns[columnIndex] = {
      ...updatedColumns[columnIndex],
      tasks: [newTask, ...columnWithoutTask.tasks],
    };

    const updatedKanban: Kanban = {
      ...activeKanban,
      columns: updatedColumns,
    };

    setActiveKanban(updatedKanban);

    const updatedStorage = [...kanbanStorage!];
    for (let i = 0; i < updatedStorage.length; i++) {
      if (updatedStorage[i].id == updatedKanban.id) {
        updatedStorage.splice(i, 1);
        updatedStorage.unshift(updatedKanban);
      }
    }
    setKanbanStorage(updatedStorage);

    setIsOpen(false);
  };

  return (
    <div>
      <button className="flex items-center cursor-pointer">
        <img
          className="h-4 cursor-pointer"
          src={modify}
          alt="edit button"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-[90%] max-w-[700px] flex flex-col gap-4 bg-white p-8 rounded-2xl border border-gray-200 drop-shadow-xl">
            <h2 className="font-medium">Edit task</h2>
            <form onSubmit={editTask} className="flex flex-col gap-4">
              <div className="flex gap-2">
                <label className="flex flex-col gap-2 flex-1 min-w-0">
                  Name your task
                  <input
                    className="input"
                    name="name"
                    type="text"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                </label>
                <label className="flex flex-col gap-2">
                  Priority
                  <select
                    name="priority"
                    className="text-gray-700 inset-ring inset-ring-gray-300 p-2 px-4 h-10 rounded-lg cursor-pointer transition"
                    value={formValues.priority}
                    onChange={handleChange}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2">
                Describe it
                <input
                  className="input"
                  name="description"
                  type="text"
                  value={formValues.description}
                  onChange={handleChange}
                />
              </label>
              <label className="flex flex-col gap-2">
                List of assignees (separate with a space)
                <input
                  className="input"
                  name="assignees"
                  type="text"
                  value={formValues.assignees}
                  onChange={handleChange}
                />
              </label>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <Button
                    variant="destructive"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={deleteTask}
                  >
                    <img
                      className="h-5 m-0.5"
                      src={trash}
                      alt="delete button"
                    />
                  </Button>
                </div>
                <Button type="submit" variant="primary">
                  Confirm
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default EditTaskForm;
