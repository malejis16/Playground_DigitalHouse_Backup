/* Tiene como finalidad reducir a la más minima expresión el array dado
retornando como valor un unico */

let numeros = [
  1, 2, 3, -4, 5, -6, 7, 8, 9, 11, -22, 44, 55, 66, -77, 88, 99, -100,
];

let sumatoria = numeros.reduce(function (suma, cadaNumero) {
  return suma + cadaNumero;
});
console.log(sumatoria);

let sumaPositivos = numeros.reduce(function (sumaP, cadaNumero) {
  if (cadaNumero > 0) {
    //console.log(sumaP);
    //console.log(cadaNumero);
    return sumaP + cadaNumero;
  } else {
    return sumaP;
  }
});
console.log(sumaPositivos);

let personas = ["Juan", "Marco", "Paula", "Carolina", "Mateo"];
let saludar1 = personas.reduce(function (cadena, cadaUno) {
  return [cadena + cadaUno];
});
console.log(saludar1);

let saludar2 = personas.reduce(function (cadena, cadaUno) {
  cadena.push(cadaUno);
  return cadena;
}, []);

console.log(saludar2);
