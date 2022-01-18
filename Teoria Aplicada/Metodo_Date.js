let fecha = new Date();
console.log("fecha actual: " + fecha);

let anio = fecha.getFullYear(); // 1000 - 9999
let mes = fecha.getMonth(); //0 Enero - 11  Diciembre
let diaSemana = fecha.getDay(); // 0 Domingo - 6 Sabado
let dia = fecha.getDate(); //  1 - 31

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log("Hoy es el " + dia + " de " + meses[mes] + " del año " + anio);
