window.onload() 
/* alert('hola') */


let abra = document.getElementById('abracadabra')
let name = document.getElementById("titular")

let changeColor = document.getElementById('changeColor')
let parColor = document.querySelector(".parrafo-color")

abra.addEventListener("click", function(){
    
    let nombre =  prompt("Enter your name")

/*     console.log(nombre) */

    name.innerHTML = name.innerHTML.replace("Jane Doe", nombre)

})


/* changeColor.addEventListener("dblclick", function(){
    
    console.log('asdasdas')
    parColor.style.color = 'Red'
    
}) */


let colorAlAzar = function () {

    var colors = ['Red', 'Green', 'Blue', 'Orange', 'Yellow']
    console.log(Math.floor(Math.random() * colors.length))
    parColor.style.color = colors[Math.floor(Math.random() * colors.length)];
    
}


changeColor.addEventListener("dblclick", function(){
    /* console.log('asdasdas') */
    colorAlAzar()
})



let evento1 = document.querySelector(".fa-comments-o")
let evento2 = document.querySelector(".fa-camera-retro")
let evento3 = document.querySelector(".fa-thumbs-o-up")

let sect = document.getElementsByTagName("section")

Array.from(sect).forEach(section => {
    section.addEventListener('click', function (){
        alert('Clickeaste sobre ' + this.querySelector('h3').innerHTML)

    })
    
})



let letraNumeroAlAzar = function () {

    var letras = ['A', 'B', 'C', 'D', 'E']
    /* console.log(Math.floor(Math.random() * letras.length)) */
    let letraRandom = letras[Math.floor(Math.random() * letras.length)];
    let numberRandom = Math.floor(Math.random() * 4)

    console.log(letraRandom+numberRandom)
}

letraNumeroAlAzar()