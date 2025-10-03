import { useState } from "react";
import { mockData } from "../data/mockData";
import KanbanColumn from "./components/KanbanColumn";
import Button from "./components/Button";
import NewBoardForm from "./components/NewBoardForm";
import { useLocalStorage } from "react-use";
import NewTaskForm from "./components/NewTaskForm";
import { KanbanContext } from "./contexts/KanbanContext";
import { newBoard } from "../data/newBoard";

const App = () => {
  const [kanbanStorage, setKanbanStorage] = useLocalStorage(
    "kanbans",
    mockData
  );
  const [activeKanban, setActiveKanban] = useState(kanbanStorage![0]);

  const deleteKanban = () => {
    const updatedStorage = kanbanStorage!.filter(
      (kanban) => kanban.id !== activeKanban.id
    );

    if (updatedStorage.length === 0) {
      updatedStorage.unshift(newBoard);
    }

    setKanbanStorage(updatedStorage);
    setActiveKanban(updatedStorage[0]);
  };

  return (
    <main className="flex flex-col p-4 gap-4 xl:min-h-[100vh]">
      <KanbanContext.Provider
        value={{
          activeKanban: activeKanban,
          setActiveKanban: setActiveKanban,
          kanbanStorage: kanbanStorage,
          setKanbanStorage: setKanbanStorage,
        }}
      >
        <button
          className="cursor-pointer"
          onClick={() => {
            localStorage.clear();
          }}
        >
          Clear local storage
        </button>
        <div className="flex justify-between items-start sm:items-center px-4 gap-3">
          <img className="w-9.5" src="task-flow-logo.svg" alt="" />
          <div className="flex flex-col sm:flex-row-reverse items-end gap-2">
            <NewBoardForm
              kanbanStorage={kanbanStorage}
              setKanbanStorage={setKanbanStorage}
            />
            <nav>
              <select
                name="kanban"
                id="kanban"
                className="text-gray-700 inset-ring inset-ring-gray-300 p-2 px-4 h-10 w-fit rounded-lg cursor-pointer"
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
            <NewTaskForm
              kanbanStorage={kanbanStorage}
              setKanbanStorage={setKanbanStorage}
              activeKanban={activeKanban}
              setActiveKanban={setActiveKanban}
            />
            <Button variant="secondary">Change WIP limit</Button>
          </div>
          <div className="flex flex-col gap-4 xl:flex-row">
            {activeKanban.columns.map((column) => {
              return <KanbanColumn column={column} key={column.id} />;
            })}
          </div>
          <Button variant="destructive" onClick={deleteKanban}>
            Delete kanban
          </Button>
        </div>
      </KanbanContext.Provider>
    </main>
  );
};

export default App;
