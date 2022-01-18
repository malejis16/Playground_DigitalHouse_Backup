/* metodo MAP:
reconoce uno a uno los elementos del array dado, tomando como parámetro cada uno 
de estos elementos y se encarga de retornar un array nuevo*/

let numeros = [2, 4, 6];
let dobleNumeros = numeros.map(function (unNumero) {
  return unNumero * 2;
});
console.log(dobleNumeros);

let personas = ["Juan", "Marco", "Paula", "Carolina"];
let inicialPersonas = personas.map(function (nombre) {
  return nombre[0];
});
console.log(inicialPersonas);

let apodo = personas.map(function (nombre) {
  return nombre[0] + nombre[nombre.length - 1] + "Flow";
});
console.log(apodo);
