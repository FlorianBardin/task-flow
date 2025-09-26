import type { Column } from "../../types/index";
import KanbanTask from "./KanbanTask";
import add from "../assets/add.svg";
import modify from "../assets/modify.svg";

const KanbanColumn = (column: Column) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-xl gap-2">
      <div className="flex p-3 items-center justify-between">
        <div className="flex items-center gap-2">
          <h4 className="font-medium">{column.title}</h4>
          <div className="flex justify-center items-center bg-gray-200 text-gray-400 text-sm h-5.5 w-5.5 px-2 rounded-sm">
            {column.tasks.length}
          </div>
        </div>
        <div className="flex flex-row-reverse h-4 w-4 gap-4">
          <img src={add} alt="Add button" />
          <img src={modify} alt="Modify button" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {column.tasks.map((task) => {
          return <KanbanTask {...task} key={task.id} />;
        })}
      </div>
    </div>
  );
};

export default KanbanColumn;
