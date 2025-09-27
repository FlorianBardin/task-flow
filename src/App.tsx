import { useState } from "react";
import { mockKanbanData } from "../data/mockData";
import KanbanColumn from "./components/KanbanColumn";
import Button from "./components/Button";

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
      <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl border border-gray-200">
        <h1 className="font-medium">{activeKanban.name}</h1>
        <div className="flex gap-2">
          <Button variant="primary">New column</Button>
          <Button variant="destructive">Delete kanban</Button>
        </div>
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
