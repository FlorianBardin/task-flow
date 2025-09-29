import type { Kanban } from "../types";

export const mockData: Kanban[] = [
  {
    id: 1,
    name: "Projet App Mobile",
    description: "Développement d'une application mobile de gestion de tâches",
    createdAt: new Date("2025-01-15"),
    columns: [
      {
        id: "col-1",
        name: "todo",
        title: "À faire",
        tasks: [
          {
            id: 101,
            title: "Configurer le repo GitHub",
            description:
              "Initialiser le dépôt et configurer les règles de protection",
            priority: "High",
            assignee: [{ id: 1, name: "Alice" }],
            dueDate: new Date("2025-10-10"),
          },
          {
            id: 102,
            title: "Créer les maquettes UI",
            description: "Concevoir les écrans principaux sur Figma",
            priority: "Medium",
            assignee: [
              { id: 2, name: "Bob" },
              { id: 3, name: "Charlie" },
            ],
            dueDate: new Date("2025-10-12"),
          },
        ],
      },
      {
        id: "col-2",
        name: "doing",
        title: "En cours",
        tasks: [
          {
            id: 201,
            title: "Développer la page Login",
            description:
              "Implémentation de la page d’authentification avec validation",
            priority: "High",
            assignee: [
              { id: 1, name: "Alice" },
              { id: 4, name: "David" },
            ],
            dueDate: new Date("2025-10-15"),
          },
        ],
      },
      {
        id: "col-3",
        name: "toreview",
        title: "À relire",
        tasks: [
          {
            id: 301,
            title: "API d’authentification",
            description: "Endpoints pour login, register et refresh token",
            priority: "High",
            assignee: [{ id: 5, name: "Eve" }],
            dueDate: new Date("2025-10-08"),
          },
        ],
      },
      {
        id: "col-4",
        name: "done",
        title: "Terminé",
        tasks: [
          {
            id: 401,
            title: "Setup du projet",
            description:
              "Création de la structure initiale du projet React Native",
            priority: "Low",
            assignee: [{ id: 3, name: "Charlie" }],
            dueDate: new Date("2025-09-20"),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Site Web Marketing",
    description: "Création d’un site vitrine pour la startup",
    createdAt: new Date("2025-02-01"),
    columns: [
      {
        id: "col-5",
        name: "todo",
        title: "À faire",
        tasks: [
          {
            id: 501,
            title: "Rédiger le contenu de la landing page",
            description: "Texte accrocheur et clair pour les visiteurs",
            priority: "Medium",
            assignee: [{ id: 2, name: "Bob" }],
            dueDate: new Date("2025-10-18"),
          },
        ],
      },
      {
        id: "col-6",
        name: "doing",
        title: "En cours",
        tasks: [
          {
            id: 601,
            title: "Intégrer le design responsive",
            description:
              "S’assurer que le site est utilisable sur mobile et tablette",
            priority: "High",
            assignee: [{ id: 1, name: "Alice" }],
            dueDate: new Date("2025-10-14"),
          },
        ],
      },
      {
        id: "col-7",
        name: "toreview",
        title: "À relire",
        tasks: [],
      },
      {
        id: "col-8",
        name: "done",
        title: "Terminé",
        tasks: [
          {
            id: 701,
            title: "Choix du CMS",
            description: "Décision entre WordPress, Strapi ou sur-mesure",
            priority: "Low",
            assignee: [{ id: 4, name: "David" }],
            dueDate: new Date("2025-09-25"),
          },
        ],
      },
    ],
  },
];
