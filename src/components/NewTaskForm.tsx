import Button from "./Button";
import type { Assignee, Kanban, Task } from "../../types";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

type NewTaskFormType = {
  kanbanStorage: Kanban[] | undefined;
  setKanbanStorage: (kanbans: Kanban[]) => unknown;
  activeKanban: Kanban;
  setActiveKanban: (kanban: Kanban) => unknown;
};

const NewTaskForm = ({
  kanbanStorage,
  setKanbanStorage,
  activeKanban,
  setActiveKanban,
}: NewTaskFormType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectOption] = useState<"Low" | "Medium" | "High">(
    "Low"
  );

  const insertNewTask = (formData: FormData) => {
    const name: string = String(formData.get("name"));
    const description: string = String(formData.get("description"));
    const assigneesName: string[] = String(formData.get("assignees")).split(
      " "
    );
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
      priority: selectOption,
      assignee: assignees,
      dueDate: new Date(),
    };

    const updatedColumns = [...activeKanban.columns];
    updatedColumns[0] = {
      ...updatedColumns[0],
      tasks: [...updatedColumns[0].tasks, newTask],
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
      <Button
        variant="primary"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        New Task
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-[90%] max-w-[700px] flex flex-col gap-4 bg-white p-8 rounded-2xl border border-gray-200 drop-shadow-xl">
            <h2 className="font-medium">New Task</h2>
            <form action={insertNewTask} className="flex flex-col gap-4">
              <div className="flex gap-2">
                <label className="flex flex-col gap-2 flex-1 min-w-0">
                  Name your task
                  <input className="input" name="name" type="text" />
                </label>
                <label className="flex flex-col gap-2">
                  Priority
                  <select
                    name="priority"
                    className="text-gray-700 inset-ring inset-ring-gray-300 p-2 px-4 h-10 rounded-lg cursor-pointer transition"
                    onChange={(e) => {
                      const priority = e.target.value;
                      if (
                        priority == "Low" ||
                        priority == "Medium" ||
                        priority == "High"
                      )
                        setSelectOption(priority);
                    }}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2">
                Describe it
                <input className="input" name="description" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                List of assignees (separate with a space)
                <input className="input" name="assignees" type="text" />
              </label>
              <div className="flex justify-between">
                <Button variant="destructive" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
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

export default NewTaskForm;
