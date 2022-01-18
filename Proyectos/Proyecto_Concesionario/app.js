let autos = require("./Automoviles/autos");
let personas = require("./Automoviles/personas");
//console.log(autos[5].patente);

const concesionaria = {
  autos: autos,
  personas: personas,
  buscarAuto: function (patente) {
    for (i = 0; i < this.autos.length; i++) {
      if (this.autos[i].patente == patente) {
        return this.autos[i];
      }
    }
    return null;
  },
  venderAuto: function (patente) {
    this.buscarAuto(patente).vendido = true;
  },
  autosParaLaVenta: function () {
    return this.autos.filter(function (unAuto) {
      return unAuto.vendido != true;
    });
  },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter(function (unAuto) {
      return unAuto.km < 100;
    });
  },
  listaDeVentas: function () {
    return this.autos.reduce(function (precio, unAuto) {
      if (unAuto.vendido == true) {
        precio.push(unAuto.precio);
        return precio;
      } else {
        return precio;
      }
    }, []);
  },
  totalDeVentas: function () {
    return this.listaDeVentas().reduce(function (totalPrecio, unPrecio) {
      return totalPrecio + unPrecio;
    }, 0);
  },
  puedeComprar: function (auto, persona) {
    let cuotaCarro = auto.precio / auto.cuotas;
    return (
      auto.precio <= persona.capacidadDePagoTotal &&
      cuotaCarro <= persona.capacidadDePagoEnCuotas
    );
  },
  autosQuePuedeComprar: function (persona) {
    let siPuedeComprar = this.puedeComprar;
    return this.autosParaLaVenta().filter(function (unAuto) {
      return siPuedeComprar(unAuto, persona);
    });
  },
};

let personas2 = [
  {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000,
  },
];

//console.log(concesionaria.buscarAuto("APL123"));
console.log(concesionaria.autosQuePuedeComprar(personas2[0]));
