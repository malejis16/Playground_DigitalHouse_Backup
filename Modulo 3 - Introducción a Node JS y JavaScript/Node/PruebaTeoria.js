//console.log("proabdo Node JS!");

let fs_variable = require("fs");
//console.log(fs_variable);

/* la libreria fs que pertenece a node 
Tiene muchas funcionalidades, el codido anteriore
nos muestra todo lo que podriamos hacer con ella, 
ahora vamos a hacer un ejemplo para leer los archivos*/

let lectura = fs_variable.readFileSync(__dirname + "/prueba2.txt", "utf-8");
console.log(lectura);

//let moment = require("moment");
//console.log(moment);
//console.log(moment().format("MMM Do YYYY"));
