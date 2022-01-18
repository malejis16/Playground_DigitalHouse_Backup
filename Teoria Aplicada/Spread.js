// Arrays

let frutas1 = ["Manzana", "Pera", "Naranja"];
let frutas2 = ["Melón", "Banano", "Papaya"];
let frutitas = [...frutas1, ...frutas2];
console.log(frutas1);
console.log(frutas2);
console.log(frutitas);
// se puede agregar todos los datos a un array existente.
let frutitas3 = ["fresa", ...frutas1, "Kiwi"];
console.log(frutitas3);

// Objetos
let cursada = {
  curso: "Fullstack",
  turno: "Mañana",
  sede: "Belgrano",
};
console.log(cursada);
let estudianteUno = {
  nombre: "Denise",
  email: "denise@gmail.com",
  ...cursada,
};
console.log(estudianteUno);
let estudianteDos = {
  nombre: "Javier",
  email: "javier@email.com",
  ...cursada,
};
console.log(estudianteDos);

// Funciones

function peliculasVistas(...nombresDePeliculas) {
  for (let i = 0; i < nombresDePeliculas.length; i++) {
    console.log("La persona ya vió " + nombresDePeliculas[i]);
  }
}
peliculasVistas("pelicula1", "pelicula2", "pelicula3", "pelicula4");
