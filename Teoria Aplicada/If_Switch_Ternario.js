// if ternario

function lasFrutas(fruta) {
  if (fruta == "manzana") {
    return "la manzana es bien rica";
  } else {
    return "lastimosamente no era manzanita";
  }
}
console.log(lasFrutas("manzana"));

let frutilla = "Melón";
let lasFrutillas =
  frutilla == "Naranja" ? "La Naranja es rica" : "Lastima que no es naranja";
console.log(lasFrutillas);

//si no tenemos una segunda opcion podemos dejar un :" "   en la segunda opción

// Switch

switch ("") {
  case "verde":
    console.log("Siga");
    break;
  case "amarillo":
    console.log("Reduzca Velocidad");
    break;
  case "rojo":
    console.log("Pare");
    break;
  default:
    console.log("no hay semaforo :v");
    break;
}

// el Switch sigue evaluando los casos si no hay break
