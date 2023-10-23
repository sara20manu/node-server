import fs from "fs";

export function cargarTareas() {
  try {
    const data = fs.readFileSync(archivoTareas, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}
