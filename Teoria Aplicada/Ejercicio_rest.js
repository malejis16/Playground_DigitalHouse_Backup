function suma(...numeros) {
  return numeros.reduce((acum, unNumero) => (acum += unNumero));
}
console.log("Este es el sumar " + suma(1, 4));

function suma2(...numeros) {
  return numeros.reduce((acum, unNumero) => (acum += unNumero));
}
console.log("Este es el sumar2 " + suma2(1, 4, 5));

//Cómo evaluar en la anterior estructura un condicional IF
