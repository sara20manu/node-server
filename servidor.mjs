import http from "http";
import fs from "fs";
const PORT = 8080;
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/listaTareas") {
    fs.readFileSync(archivoTareas, "utf8", data);
    console.log("Ruta GET Lista de tareas");
    res.write(data);
    res.end("arreglo JSON lista de tareas");
  }
});

server.listen(PORT, () => {
  console.log(" server on port 8080 ");
});
