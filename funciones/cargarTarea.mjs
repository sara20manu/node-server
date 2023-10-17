import fs from "fs";

export function cargarTareas() {
  try {
    const data = fs.readFileSync(tasksFile, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}
