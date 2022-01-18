let numeros = [
  1, 2, 3, -4, 5, -6, 7, 8, 9, 11, -22, 44, 55, 66, -77, 88, 99, -100,
];
let filtroPositivos = numeros.filter(function (positivos) {
  //console.log(positivos);
  return positivos >= 0;
});
console.log("Los numeros positivos son:" + filtroPositivos);

let filtroImpares = numeros.filter(function (impares) {
  return impares % 2 != 0;
});
console.log("Los numeros impares son:" + filtroImpares);

let personas = ["Juan", "Marco", "Paula", "Carolina", "Mateo"];
let filtroPersonasM = personas.filter(function (personasM) {
  return personasM[0] === "M";
});
console.log(filtroPersonasM);
