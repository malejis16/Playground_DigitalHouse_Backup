let archivoDeTareas = require("./funcionesDeTareas");
let accion = process.argv[2];

let callback = (tarea, index) => {
  console.log(index + 1 + " " + tarea.titulo + " - " + tarea.estado);
};

let tareas = archivoDeTareas.leerArchivo();
switch (accion) {
  case "Listar":
    tareas.forEach(callback);
    break;
  case "Filtrar":
    let estado = process.argv[3];
    let filtradas = archivoDeTareas.filtrarPorEstado(estado);
    filtradas.map((tarea, indice) => console.log(indice + "-" + tarea.titulo));
    break;
  case "Crear":
    let titulo = process.argv[3];
    let tarea = {
      titulo: titulo,
      estado: "pendiente",
    };
    archivoDeTareas.guardarTarea(tarea);
    break;

  case "Actualizar":
    let indiceTarea = process.argv[3];
    let nuevoEstado = process.argv[4];
    archivoDeTareas.ActualizarTarea(indiceTarea, nuevoEstado);
    break;

  default:
    console.log("no me has indicado la tarea");
}
