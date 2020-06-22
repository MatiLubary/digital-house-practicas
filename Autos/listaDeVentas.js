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
   },

/*    autosVendidos: function(){
      return this.autos.filter ( (auto) => auto.vendido == true)       
   }, */

   listaDeVentas: function(){
      let montos = []
       autos.forEach(function(auto){
          if (auto.vendido == true){
          montos.push(auto.precio)
          }
       })
       return montos
   },

   totalDeVentas: function(){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      if(this.listaDeVentas.length > 0){
         return this.listaDeVentas.reduce(reducer)
            }
   }


}
console.log(concesionaria.totalDeVentas())