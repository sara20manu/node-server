export const preguntas = [
  {
    type: "list",
    name: "action",
    message: "¿Qué deseas hacer?",
    choices: [
      "Agregar tarea",
      "Mostrar tareas",
      "Completar tarea",
      "Eliminar tarea",
      "Salir",
    ],
  },
  {
    type: "input",
    name: "description",
    message: "Descripción de la tarea:",
    when: (answers) => answers.action === "Agregar tarea",
  },
  {
    type: "input",
    name: "taskIndex",
    message: "Índice de la tarea que deseas completar o eliminar:",
    when: (answers) =>
      ["Completar tarea", "Eliminar tarea"].includes(answers.action),
  },
];
