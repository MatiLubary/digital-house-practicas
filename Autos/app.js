let  autos = require('./autos')
const concesionaria = {
   autos: autos,

    buscarAuto: function(patente){
          autos.forEach(function(auto){
             if (patente == auto.patente){
                console.log(auto) 
             }
          })
   } 
}
concesionaria.buscarAuto('JJK116')


