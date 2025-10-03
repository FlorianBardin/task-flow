import type { Task } from "../../types";
import Badge from "./Badge";
import assigned from "../assets/assigned.svg";
import modify from "../assets/modify.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

type KanbanTaskProps = {
  task: Task;
};

const KanbanTask = ({ task }: KanbanTaskProps) => {
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
      <div className="flex items-center justify-between mt-5">
        <p className="text-gray-400">{new Date(task.dueDate).toDateString()}</p>
        <div className="flex gap-3 items-center">
          <img className="h-4" src={modify} alt="Modify button" />
          <button>
            <img className="h-5" src={left} alt="" />
          </button>
          <button>
            <img className="h-5" src={right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanTask;
