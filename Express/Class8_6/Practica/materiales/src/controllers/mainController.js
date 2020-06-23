const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const usersFilePath = path.join(__dirname, '../data/users.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


// cambiar a let el toThousand
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const bcrypt = require('bcrypt');

const controller = {
	root: (req, res) => {
		res.render('index', { 
			inSale: products.filter(product => product.category == 'in-sale'),
			visited: products.filter(product => product.category == 'visited'),

		});
	},
	search: (req, res) => {
		// Do the magic
	},

	register: (req, res) => {
		
		res.render('register')
	},



	// usa los ...req.body para evitar todo el choclo que escribis. ... seria el spread operator.
	create: (req, res, next) => {
		let passEncriptada = bcrypt.hashSync(req.body.pass, 10);
		let usuario = {
			nombre: req.body.name,
			apellido: req.body.lastName,
			email: req.body.email,
			passEncriptada,
			fotoPerfil: req.files[0].path.replace('public', '')
		}

		let usersFile = fs.readFileSync(usersFilePath, {encoding: 'utf-8'});
		let users = JSON.parse(usersFile)
		
		users.push(usuario)

		let usuariosJSON = JSON.stringify(users)

		fs.writeFileSync(usersFilePath, usuariosJSON)

		res.render('profile', {usuario})
	},


};

module.exports = controller;
