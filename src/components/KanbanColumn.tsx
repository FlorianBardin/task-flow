import type { Column } from "../../types/index";
import KanbanTask from "./KanbanTask";

const KanbanColumn = (column: Column) => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <div className="flex justify-between">
        <h4 className="font-medium">{column.title}</h4>
        <p>+</p>
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
