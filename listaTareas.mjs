import inquirer from "inquirer";
import { guardarTareas } from "./funciones/guarTareas.mjs";
import { cargarTareas } from "./funciones/cargarTarea.mjs";
import { preguntas } from "./funciones/opcionesSwicth.mjs";

(async () => {
  const tasks = cargarTareas();

  while (true) {
    const { action, description, taskIndex } = await inquirer.prompt(preguntas);

    switch (action) {
      case "Agregar tarea":
        tasks.push({ description, completed: false });
        guardarTareas(tasks);
        console.log("Tarea agregada.");
        break;
      case "Mostrar tareas":
        console.log("Lista de tareas:");
        tasks.forEach((task, index) => {
          console.log(
            `${index + 1}. [${task.completed ? "X" : " "}] ${task.description}`
          );
        });
        break;
      case "Completar tarea":
        if (taskIndex >= 1 && taskIndex <= tasks.length) {
          tasks[taskIndex - 1].completed = true;
          guardarTareas(tasks);
          console.log("Tarea marcada como completada.");
        } else {
          console.log("Índice de tarea inválido.");
        }
        break;
      case "Eliminar tarea":
        if (taskIndex >= 1 && taskIndex <= tasks.length) {
          tasks.splice(taskIndex - 1, 1);
          guardarTareas(tasks);
          console.log("Tarea eliminada.");
        } else {
          console.log("Índice de tarea inválido.");
        }
        break;
      case "Salir":
        console.log("Saliendo del programa.");
        process.exit();
        break;
    }
  }
})();
