let autos = require("./autos")

const concesionaria = {
    autos: autos,
    buscarAuto = function(patente){
       for (i=0; this.autos.length<0; i++) {
          if (this.autos[i].patente == patente){
             return this.autos[i];
          }
          else{
             return null;
          }
       }
    },
    venderAuto = function(patente){
       for (i=0; this.autos.length<0; i++){
          if (this.autos[i].patente == patente){
             this.autos.vendido = true;
          }
       }
    },
    autosParaLaVenta = this.autos.filter(function(filroDisponible){
       return filtroDisponible.vendido == false;
    }),
    autosNuevos = this.autosParaLaVenta.filter(function(km100){
       return km100.km < 100;
    }),
};