let  autos = require('./autos')
const concesionaria = {
   autos: autos,

    buscarAuto: function(patente){
          let autosEncontrados = autos.find(function(auto){
             return patente == auto.patente
          })
      if (autosEncontrados){
         return autosEncontrados
      }
         return null
   } 
}
concesionaria.buscarAuto('JJK116')