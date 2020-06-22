let  autos = require('./autos')
let  personas  = require('./personas')
const concesionaria = {
   autos: autos,
   //personas: personas,

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
      let montos = [0]
       autos.forEach(function(auto){
          if (auto.vendido == true){
          montos.push(auto.precio)
          }
       })
       return montos
   },

   totalDeVentas: function(){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;

         return this.listaDeVentas().reduce(reducer)

   },

   puedeComprar: function(auto, persona){
      let cuotas = auto.precio / auto.cuotas;
      let precio = auto.precio
      let dineroPersona = persona.capacidadDePagoTotal;
      let cuotasPersona = persona.capacidadDePagoEnCuotas;
      return (cuotas <= cuotasPersona && precio <= dineroPersona);

   }


}
console.log(concesionaria.puedeComprar(autos[0], personas))


