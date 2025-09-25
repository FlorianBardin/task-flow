import { useState } from "react";
import { mockKanbanData } from "../data/mockData";
import KanbanColumn from "./components/KanbanColumn";

const App = () => {
  const [activeKanban, setActiveKanban] = useState(mockKanbanData);

  return (
    <main className="flex flex-col p-3 gap-3">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-gradient">Task Flow</h3>
        <nav>
          <select name="kanban" id="kanban">
            <option value="school">School</option>
            <option value="perso">Perso</option>
          </select>
        </nav>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-gray-200">
        <h1 className="font-medium">Project UI/UX</h1>
        <div className="flex flex-col gap-4">
          {activeKanban.columns.map((column) => {
            return <KanbanColumn {...column} key={column.id} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
