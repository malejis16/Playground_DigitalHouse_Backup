let doble = (numero) => numero * 2;
let triple = (numero) => numero * 3;

function aplicarCallback(numero, funcion) {
  return funcion(numero);
}

//console.log(aplicarCallback(6, doble));

let suma = (numero1, numero2) => numero1 + numero2;
let resta = (numero1, numero2) => numero1 - numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;
let division = (numero1, numero2) => numero1 / numero2;

//console.log(suma(20, 4));

function calculadora(numero1, numero2, operacion) {
  return operacion(numero1, numero2);
}

//console.log(calculadora(20, 4, suma));

let urls = ["www.google.com", "www.twitter.com"];

function agregarHttp(url) {
  return "http://" + url;
}

function procesar(array, funcion) {
  let array2 = [];
  for (i = 0; i < array.length; i++) {
    array2.push(agregarHttp(array[i]));
  }
  return array2;
}

console.log(procesar(urls, agregarHttp));
