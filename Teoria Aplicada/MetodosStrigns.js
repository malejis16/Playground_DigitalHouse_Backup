let cadena =
  "El archivo JSON es un formato de texto que puede ser interpretado por varios lenguajes de programación";

//length es usado para saber la longitud de una cadena

let longitudCadena = cadena.length;
console.log("LENGTH");
console.log(cadena.length);
console.log(longitudCadena);

//si aplico lenght sobre un array me devuelve cuantos elementos tengo en ese array
//pero si aplico lenght sobre un elemento de ese array me devuelve la longitud de ese elemento

let array = ["bart", "lisa", "homero"];
console.log(array.length); // devuelve 3 elementos
console.log(array[0].length); // devuelve la longitud de Bart = 4

//indexOf es usado para saber si existe algo y su posisicion de arranque
// cuando no encuentra nada, devuelve -1
// termina la ejecución cuando encuentra la primer coincidencia en el texto

let posicionPalabra = cadena.indexOf("formato");
console.log("INDEXOF");
console.log(posicionPalabra);
console.log(cadena.indexOf("formato"));

//slice es usado para tomar una porcion de texto
// Este no modifica el string original

let porcionTexto = cadena.slice(22, 59);
let porcionTexto2 = cadena.slice(-10); //cuando es negativo empieza de adelante hacia atrás
console.log("SLICE");
console.log(porcionTexto);
console.log(porcionTexto2);
console.log(cadena);

//trim es usado para eliminar los espacios iniciales y finales, no intermedios

let cadena2 =
  "     El archivo JSON es un formato de texto que puede ser interpretado por varios lenguajes de programación";

let cadenaSinEspacios = cadena2.trim(); // no recibe aprametros

console.log("TRIM");
console.log(cadena2);
console.log(cadenaSinEspacios);

//split se usa para generar un array a partir de un string
//dependiendo de mi set de marcación se separará el nuevo array
let cadenaArray = cadena.split(" ");
let cadenaArray2 = cadena.split("e");
console.log("SPLIT");
console.log(cadenaArray);
console.log(cadenaArray2);

//replace es usado para reemplazar texto, no altera la cadena de texto original

let cadenaReemplazada = cadena.replace("formato", "archivo");
console.log("REPLACE");
console.log(cadena);
console.log(cadenaReemplazada);

//-------------------------------------------------------------------------------//

let frase = "Hola!, soy Carli";
//let licenciada = frase.slice(-4);
let licenciada = frase.slice(11, 16);
console.log(licenciada);
console.log(frase.slice(-5));
