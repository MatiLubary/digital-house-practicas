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
   },


   autosParaLaVenta: function(){
      return this.autos.filter ( (auto) => auto.vendido == false)       
   },

   autos0KM: function(){
       return this.autosParaLaVenta().filter ( (auto) => auto.km == 0)
   }
}
console.log(concesionaria.autos0KM())