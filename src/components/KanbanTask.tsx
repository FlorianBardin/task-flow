import type { Task } from "../../types";
import Badge from "./Badge";
import assigned from "../assets/assigned.svg";

const KanbanTask = (task: Task) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg border border-gray-200 gap-2">
      <div className="flex justify-between items-center">
        <h5 className="font-medium">{task.title}</h5>
        <Badge color={task.priority}>{task.priority}</Badge>
      </div>
      <p className="text-gray-600">{task.description}</p>
      <div className="flex gap-2 items-center mt-1.5">
        <img className="h-4" src={assigned} alt="" />
        {task.assignee?.map((name) => {
          return <Badge color="assign">{name}</Badge>;
        })}
      </div>
      <p className="text-gray-400 mt-5">{task.dueDate?.toDateString()}</p>
    </div>
  );
};

export default KanbanTask;
