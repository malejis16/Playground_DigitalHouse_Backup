const express = require("express");
//const res = require("express/lib/response");
const path = require("path");
const app = express();

//const publicPath = path.resolve(__dirname, "./public");
//app.use(express.static(publicPath));

//este le agrega la parte de la ruta delante del archivo, del nombre
app.use("/static", express.static(__dirname + "/public"));

app.listen("3001", () => {
  console.log("servidor corriendo");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./views/home.html"));
});
