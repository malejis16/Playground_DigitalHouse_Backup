for (i = 0; i < 10; i += 2) {
  //console.log(i);
}

for (i = 0; i < 100; i += 4) {
  //console.log(i);
}

function noParesDeContarImparesHasta(numero) {
  let cont = 0;
  for (i = 1; i <= numero; i++) {
    if (i % 2 != 0) {
      cont += 1;
    }
  }
  return cont;
}
let numero = noParesDeContarImparesHasta(20);
console.log(numero);
