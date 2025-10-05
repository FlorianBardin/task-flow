import type { Task } from "../../types";
import Badge from "./Badge";
import assigned from "../assets/assigned.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import { useContext } from "react";
import { KanbanContext } from "../contexts/KanbanContext";
import EditTaskForm from "./EditTaskForm";

type KanbanTaskProps = {
  task: Task;
};

const KanbanTask = ({ task }: KanbanTaskProps) => {
  const {
    activeKanban,
    setActiveKanban,
    kanbanStorage,
    setKanbanStorage,
    wipLimit,
  } = useContext(KanbanContext);

  const moveRight = () => {
    // Logic to move task to the right column
    const oldColumn = activeKanban.columns.find((col) =>
      col.tasks.some((t) => t.id === task.id)
    );

    if (!oldColumn) return;

    const updatedOldColumn = {
      ...oldColumn,
      tasks: oldColumn.tasks.filter((t) => t.id !== task.id),
    };

    const newColumn =
      activeKanban.columns[activeKanban.columns.indexOf(oldColumn) + 1];

    if (!newColumn) return;

    const updatedNewColumn = {
      ...newColumn,
      tasks: [task, ...newColumn.tasks],
    };

    const updatedColumns = [...activeKanban.columns];
    updatedColumns[activeKanban.columns.indexOf(oldColumn)] = updatedOldColumn;
    updatedColumns[activeKanban.columns.indexOf(newColumn)] = updatedNewColumn;

    const updatedKanban = {
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
  };

  const moveLeft = () => {
    // Logic to move task to the left column
    const oldColumn = activeKanban.columns.find((col) =>
      col.tasks.some((t) => t.id === task.id)
    );

    if (!oldColumn) return;

    const updatedOldColumn = {
      ...oldColumn,
      tasks: oldColumn.tasks.filter((t) => t.id !== task.id),
    };

    const newColumn =
      activeKanban.columns[activeKanban.columns.indexOf(oldColumn) - 1];

    if (!newColumn) return;

    const updatedNewColumn = {
      ...newColumn,
      tasks: [task, ...newColumn.tasks],
    };

    const updatedColumns = [...activeKanban.columns];
    updatedColumns[activeKanban.columns.indexOf(oldColumn)] = updatedOldColumn;
    updatedColumns[activeKanban.columns.indexOf(newColumn)] = updatedNewColumn;

    const updatedKanban = {
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
  };

  return (
    <div className="flex flex-col bg-white p-4 rounded-lg border border-gray-200 gap-2">
      <div className="flex justify-between items-center">
        <h5 className="font-medium">{task.title}</h5>
        <Badge color={task.priority}>{task.priority}</Badge>
      </div>
      <p className="text-gray-600">{task.description}</p>
      <div className="flex gap-2 items-center mt-1.5 flex-wrap">
        <img className="h-4" src={assigned} alt="" />
        {task.assignee.map((assignee) => {
          return (
            <Badge color="assign" key={assignee.id}>
              {assignee.name}
            </Badge>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 mt-5 sm:flex-row sm:justify-between sm:items-center">
        <p className="text-gray-400">{new Date(task.dueDate).toDateString()}</p>
        <div className="flex gap-3 items-center">
          <EditTaskForm
            kanbanStorage={kanbanStorage}
            setKanbanStorage={setKanbanStorage}
            activeKanban={activeKanban}
            setActiveKanban={setActiveKanban}
            task={task}
          />
          <button
            onClick={moveLeft}
            className="rounded-sm hover:bg-gray-200 disabled:opacity-50"
            disabled={
              activeKanban.columns[0].tasks.some((t) => t.id === task.id) ||
              (activeKanban.columns[1].tasks.length >= wipLimit &&
                activeKanban.columns[2].tasks.some((t) => t.id === task.id))
            }
          >
            <img className="h-5" src={left} alt="" />
          </button>
          <button
            onClick={moveRight}
            className="rounded-sm hover:bg-gray-200 disabled:opacity-50"
            disabled={
              activeKanban.columns[activeKanban.columns.length - 1].tasks.some(
                (t) => t.id === task.id
              ) ||
              (activeKanban.columns[1].tasks.length >= wipLimit &&
                activeKanban.columns[0].tasks.some((t) => t.id === task.id))
            }
          >
            <img className="h-5" src={right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanTask;
