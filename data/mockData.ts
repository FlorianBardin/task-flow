// data/mockData.ts
import type { Kanban } from "../types";

export const mockKanbanData: Kanban = {
  id: 1,
  name: "Développement Application Web",
  columns: [
    {
      id: "col-1",
      name: "todo",
      title: "À faire",
      tasks: [
        {
          id: 1,
          title: "Créer le design système",
          description:
            "Définir les couleurs, typographies et composants de base",
        },
        {
          id: 2,
          title: "Configurer la base de données",
          description: "Installer PostgreSQL et créer le schéma initial",
        },
        {
          id: 3,
          title: "Implémenter l'authentification",
          description: "JWT, login, register, mot de passe oublié",
        },
      ],
    },
    {
      id: "col-2",
      name: "doing",
      title: "En cours",
      tasks: [
        {
          id: 4,
          title: "Interface utilisateur du dashboard",
          description:
            "Créer les composants React pour le tableau de bord principal",
        },
        {
          id: 5,
          title: "API REST pour les utilisateurs",
          description: "Endpoints CRUD pour la gestion des utilisateurs",
        },
      ],
    },
    {
      id: "col-3",
      name: "toreview",
      title: "À réviser",
      tasks: [
        {
          id: 6,
          title: "Tests unitaires du service auth",
          description: "Vérifier tous les cas d'usage de l'authentification",
        },
      ],
    },
    {
      id: "col-4",
      name: "done",
      title: "Terminé",
      tasks: [
        {
          id: 7,
          title: "Configuration du projet",
          description: "Setup initial avec Vite, TypeScript et Tailwind",
        },
        {
          id: 8,
          title: "Structure des dossiers",
          description: "Organisation des fichiers et dossiers du projet",
        },
      ],
    },
  ],
};
