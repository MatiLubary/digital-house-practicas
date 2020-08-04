let mensaje = "Bienvenidos a mi sitio"

alert(mensaje);

let confAvanzar = confirm("Estas seguro que queres avanzar?? Mira que no hay vuelta atras...")

let h1 = document.querySelector('h1')


if (confAvanzar) {

    
    document.getElementById('header').querySelector("h2").innerText += "Qué alegría que quieras con tu visita por este maravilloso sitio"



    let nombre = prompt('ingrese su nombre?')

    h1.innerHTML = h1.innerHTML.replace( 'usuario', "<span class = " + "color-preferido>" + nombre + "</span")


    let edad = prompt('ahora me podria indicar edad??')

    if (edad < 18) {
        document.getElementsByClassName('container-general')[0].style.display = 'none'
        document.getElementById('accesoDenegado').style.display = 'block'
    }

    let hobbies = prompt("Ingresa 3 hobbies separados por comas")

    /* hobbies = hobbies.split(",") */
    if (/programa[r|cioón]+/gi.test(hobbies)) {
        alert('Que bueno que te gusta la programacion')
        document.querySelector("div.container.background-img").style.backgroundImage += "url(img/programmer.jpeg"
    } else {
        alert('Que lastima que no te gusta la programacion')
        document.querySelector("div.container.background-img").style.backgroundImage += "url(img/gatito.jpeg"
        
    }

    hobbies = hobbies.split(", ")
    /* console.log(hobbies) */
    if (hobbies) {

        /* document.querySelector("article").innerHTML += "<ol>" */
        
        for (let i = 0; i < hobbies.length; i++) {
            if (i == 3) break

        document.querySelector("article").innerHTML += "<li>"+ hobbies[i] + "</li>"
        }
        
        /* document.querySelector("article").innerHTML += "</ol>" */
    }
    
}
else {
    document.querySelector("h2").innerHTML += "Lamentamos que no quieras continuar tu visita por este maravilloso sitio"
}



let colorPreferido = prompt("Indique su color favorito")

console.log(colorPreferido)


/* h1.innerHTML = h1.innerHTML.replace( 'usuario', "<span class = " + "color-preferido>" + nombre + "</span") */

