import { createContext } from "react";
import type { Kanban } from "../../types/index.d.ts";

type KanbanContextType = {
  activeKanban: Kanban;
  setActiveKanban: (kanban: Kanban) => void;
  kanbanStorage: Kanban[] | undefined;
  setKanbanStorage: (kanbans: Kanban[]) => void;
};

export const KanbanContext = createContext<KanbanContextType>({
  activeKanban: {} as Kanban,
  setActiveKanban: () => {},
  kanbanStorage: [],
  setKanbanStorage: () => {},
});
