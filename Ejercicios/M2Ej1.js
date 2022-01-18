let precios = [100, -250, 125, -333];

function saldoNegativo(listaDePrecios) {
  let sumaNegativos = 0;
  for (let i = 0; i < listaDePrecios.length; i++) {
    if (listaDePrecios[i] < 0) {
      sumaNegativos += listaDePrecios[i];
    }
  }
  return sumaNegativos;
}

console.log(saldoNegativo(precios));

//## Devolver los numeros divisibles por 3
