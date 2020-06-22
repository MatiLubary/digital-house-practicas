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


   //TERCERA SOLUCION MEJOR DE TODAS usando arrow function
   autosParaLaVenta: function(){
      return this.autos.filter ( (auto) => auto.vendido == false)       
   }


   //PRIMERA SOLUCION
/*    autosParaLaVenta: function(){
      let filtrados = this.autos.filter (function (auto){
          return auto.vendido == false
      })
      return filtrados
   } */

   //SEGUNDA SOLUCION MEJOR
/*    autosParaLaVenta: function(){
    return filtrados = this.autos.filter (function (auto){
        return auto.vendido == false
    })
 } */


}
console.log(concesionaria.autosParaLaVenta())