function sumatoria(numero1, numero2) {
  return numero1 + numero2;
}
console.log(sumatoria(3, 5));

// Cuando es solamente tiene un return como opcion no es necearia la palabra return

let sumatoria1 = (numero1, numero2) => numero1 + numero2;
console.log(sumatoria1(4, 8));

// Cuando es un solo parametro no es necesario los parentesís

let dobleNumero = (numero) => numero * 2;
console.log(dobleNumero(9));
// Cuando la opcion de return tien mas opciones o mas operaciones es necesaria a estuctura return

let numerosIguales = (numero1, numero2) => {
  if (numero1 == numero2) {
    return true;
  } else {
    return false;
  }
};
console.log(numerosIguales(2, 6));
