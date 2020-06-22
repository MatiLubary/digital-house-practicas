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
   },
   venderAuto: function(patente){
       let autoVendido = this.buscarAuto(patente)
       autoVendido.vendido = true
       return autoVendido
   }
}
console.log(concesionaria.venderAuto('APL123'))