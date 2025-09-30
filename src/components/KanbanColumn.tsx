import type { Column } from "../../types/index";
import KanbanTask from "./KanbanTask";

type KanbanColumnProps = {
  column: Column;
};

const KanbanColumn = ({ column }: KanbanColumnProps) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-xl gap-2 flex-1 h-fit min-h-[25%]">
      <div className="flex p-3 items-center justify-between">
        <div className="flex items-center gap-2">
          <h4 className="font-medium">{column.title}</h4>
          <div className="flex justify-center items-center bg-gray-200 text-gray-400 text-sm h-5.5 w-5.5 px-2 rounded-sm">
            {column.tasks.length}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {column.tasks.map((task) => {
          return <KanbanTask task={task} key={task.id} />;
        })}
      </div>
    </div>
  );
};

export default KanbanColumn;
