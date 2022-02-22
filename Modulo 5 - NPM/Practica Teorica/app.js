const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/hola", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/temperatura.html"));
});

// en la URL solo responde con /
app.get("/", (req, res) => {
  res.send("hola de nuevo mundo");
});

// la URL al final tendra /hola y sale esta opcion
// URL:  http://localhost:3000/hola

app.get("/hola", (req, res) => {
  res.send("cuantos saludos!");
});

// la computadora tiene direntes puertos, yu uno de ellos es el 3000,
// cada uno de los puertes se pueden usar para escuchar o emitir informacion
// a los diferentes servicios, y hay diferentes puertos designados para diferentes cosas.
app.listen(3000, () => console.log("servidor corriendo"));
