import fs from "fs";
const archivoTareas = "tareas.json";

export function guardarTareas(tasks) {
  fs.writeFileSync(archivoTareas, JSON.stringify(tasks, null, 2), "utf8");
}
