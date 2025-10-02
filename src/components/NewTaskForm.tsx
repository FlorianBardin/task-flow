import Button from "./Button";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

const NewBoardForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        New Task
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-[90%] max-w-[700px] flex flex-col gap-4 bg-white p-8 rounded-2xl border border-gray-200 drop-shadow-xl">
            <h2 className="font-medium">New board</h2>
            <form className="flex flex-col gap-4">
              <div className="flex gap-2">
                <label className="flex flex-col gap-2 flex-1 min-w-0">
                  Name your task
                  <input className="input" name="name" type="text" />
                </label>
                <label className="flex flex-col gap-2">
                  Priority
                  <select
                    name="priority"
                    className="text-gray-700 inset-ring inset-ring-gray-300 p-2 px-4 h-10 rounded-lg cursor-pointer transition"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2">
                Describe it
                <input className="input" name="description" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                List of assignees (separate with a space)
                <input className="input" name="assignees" type="text" />
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
