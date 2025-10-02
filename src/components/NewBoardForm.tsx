import Button from "./Button";
import type { Kanban } from "../../types";
import { emptyBoard } from "../../data/emptyBoard";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

type NewBoardForm = {
  kanbanStorage: Kanban[] | undefined;
  setKanbanStorage: (kanbans: Kanban[]) => unknown;
};

const NewBoardForm = ({ kanbanStorage, setKanbanStorage }: NewBoardForm) => {
  const [isOpen, setIsOpen] = useState(false);

  const insertNewBoard = (formData: FormData) => {
    const name: string = String(formData.get("name"));
    const description: string = String(formData.get("description"));
    const newBoard = emptyBoard;
    newBoard.id = kanbanStorage!.length + 1;
    newBoard.name = name;
    newBoard.description = description;
    newBoard.createdAt = new Date();
    setKanbanStorage([...kanbanStorage!, newBoard]);
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        New Board
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-[90%] max-w-[700px] flex flex-col gap-4 bg-white p-8 rounded-2xl border border-gray-200 drop-shadow-xl">
            <h2 className="font-medium">New board</h2>
            <form action={insertNewBoard} className="flex flex-col gap-4">
              <label className="flex flex-col gap-2">
                Name your board
                <input className="input" name="name" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                Describe it
                <input className="input" name="description" type="text" />
              </label>
              <div className="flex justify-between">
                <Button variant="destructive" onClick={() => setIsOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit" variant="primary">
                  Valider
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default NewBoardForm;
