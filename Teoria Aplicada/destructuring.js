//hace copia de un array o de un objeto en variables separadas

//ARRAY

let frutas = ["manzana", "pera", "naranja", "banano", "melón"];
let [primeraFruta, segundaFruta, , terceraFruta] = frutas;

console.log(frutas);
console.log(primeraFruta);
console.log(segundaFruta);
console.log(terceraFruta);

//OBJETO

let personaje = {
  nombre: "Alejandro",
  apellido: "Alarcon",
  gustos_Musicales: "Rock",
  años: 29,
  mascotas: true,
};

let { gustos_Musicales, mascotas } = personaje;

console.log(personaje);
console.log(gustos_Musicales);
console.log(mascotas);
