window.onload = function() {

    let titulo = document.getElementById("titulo")
    let imagen = document.getElementById("imagen")

    let button = document.getElementById("but")


    function fetchGif() {


        fetch("https://api.giphy.com/v1/gifs/random?api_key=2R3n7wkF4VJ8ddhGSLWkYMUqSy6FUdgX&tag=&rating=g")
        .then(response => response.json())
        .then(data => {
            let gifs = data.data
            console.log(gifs.title)
    
            titulo.innerHTML = gifs.title
    
            imagen.innerHTML = "<img src=" + gifs.image_url + ">"
    
        })

    }

    fetchGif()
    

    button.addEventListener("click", function(e) {
        e.preventDefault()
    
        fetchGif()
    
    })  


}

