const http = require('http');
const fs = require('fs');

//const movies = require()

const movies = require('./data/movies.json')

 let moviesAlpha = movies.sort(function (a, b) {

	if (a.title > b.title) {
		return 1
	}


	if (a.title < b.title){
		return -1
	}


	return 0
}) 



http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		// Home
		case '/':


		//USAS MAP Y NO FOREACH PORQUE EL MAP DEVUELVE PERO EL FOREACH NO..

		var titulos = moviesAlpha.map(movie => movie.title).join('\n\n')

		var total = movies.length
		
		// let pagina = require('./view./index.js)


		let pagina = `​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.

		Total de peliculas: ${total}

		${titulos}


		
		i. En Cartelera
		ii. Más Votadas	
		iii. Sucursales
		iv. Contacto
		v. Preguntas Frecuentes`

		

		




			res.end(pagina);
			break;




		// En cartelera
		case '/en-cartelera':

		var total = movies.length

		titulosYoverview = []

		for (var i = 0; i < movies.length;i++){
			titulosYoverview.push(movies[i].title)
			titulosYoverview.push(movies[i].overview)
		}

		var titulos = moviesAlpha.map(movie => movie.title).join('\n')

		var overview = moviesAlpha.map(movie => movie.overview).join('\n\n')

		let pagina2 = `​En Cartelera.
		

		Total de peliculas: ${total}

		${titulosYoverview.join('\n\n')}

		`
			res.end(pagina2);
			break;










		case '/mas-votadas':

		var total = movies.length

		let initialValue = 0
		let votes = movies.reduce(function(accumulator, currentValue){
			return accumulator + currentValue.vote_average
		}, initialValue)

		let votes2 = votes / total

		let pagina3 = `Mas Votadas




		Total de peliculas: ${total}




		Rating Promedio ${votes2}
		`












			res.end(pagina3);
			break;











		case '/sucursales':
			res.end('Sucursales');
			break;
		case '/contacto':
			res.end('Contacto');
			break;
		case '/preguntas-frecuentes':
			res.end('Preguntas Frecuentes');
			break;
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server online papa!'));
	