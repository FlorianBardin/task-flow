import { useState } from "react";
import { mockData } from "../data/mockData";
import { newBoard } from "../data/newBoard";
import KanbanColumn from "./components/KanbanColumn";
import Button from "./components/Button";
import NewBoardForm from "./components/NewBoardForm";
import { useLocalStorage } from "react-use";
import { Dialog } from "@headlessui/react";

const App = () => {
  const [kanbanStorage, setKanbanStorage] = useLocalStorage(
    "kanbans",
    mockData
  );
  const [activeKanban, setActiveKanban] = useState(kanbanStorage![0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col p-4 gap-4 xl:min-h-[100vh]">
      <button
        className="cursor-pointer"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Clear local storage
      </button>
      <div className="flex justify-between px-4 gap-3">
        <img className="w-9.5" src="task-flow-logo.svg" alt="" />
        <div className="flex flex-row-reverse gap-2 justify-between">
          <Button
            variant="secondary"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            New Board
          </Button>
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <NewBoardForm
              setIsOpen={setIsOpen}
              kanbanStorage={kanbanStorage}
              setKanbanStorage={setKanbanStorage}
            />
          </Dialog>
          <nav>
            <select
              name="kanban"
              id="kanban"
              className="text-gray-700 inset-ring inset-ring-gray-300 p-2 px-4 h-10 w-fit rounded-lg cursor-pointer transition"
              onChange={(e) =>
                setActiveKanban(
                  kanbanStorage!.find(
                    (kanban) => kanban.id === Number(e.target.value)
                  )!
                )
              }
            >
              {kanbanStorage!.map((kanban) => {
                return (
                  <option value={kanban.id} key={kanban.id}>
                    {kanban.name}
                  </option>
                );
              })}
            </select>
          </nav>
        </div>
      </div>

      <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl border border-gray-200 flex-1">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium">{activeKanban.name}</h1>
          <p className="text-gray-600">{activeKanban.description}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="primary">New Task</Button>
          <Button variant="secondary">Change WIP limit</Button>
        </div>
        <div className="flex flex-col gap-4 xl:flex-row">
          {activeKanban.columns.map((column) => {
            return <KanbanColumn column={column} key={column.id} />;
          })}
        </div>
        <Button variant="destructive">Delete kanban</Button>
      </div>
    </main>
  );
};

export default App;
