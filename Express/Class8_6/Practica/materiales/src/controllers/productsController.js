const fs = require('fs');
const path = require('path');
const { RequestTimeout } = require('http-errors');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {

		let productsFiltrados = products.filter (product => product.price <= req.query.price_min)
		if (req.query.price_min){
			
			res.render('productsFiltrados', { productsFiltrados });
		}
		res.render('products', { products: products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		 let product = products.find(product => product.id == req.params.id)
		res.render('detail', {product})
	},

	// Create - Form to create
	create: (req, res) => {
		res.send('AKN')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		let productToEdit = products.find(product => product.id == req.params.id)


		res.render('product-edit-form', {
			productToEdit : products
		} )
	},
	// Update - Method to update
	update: (req, res) => {
		let edited = products.map(product => {
			if (product.id == req.params.id) {
				return {...product, ...req.body}
			}

			return product

		})

		fs.writeFileSync(productsFilePath, JSON.stringify(edited))


		res.redirect('/products')   //Esto no anda tan bien, tenes que refreshear antes de que impacte el cambio.
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let deleted = products.filter(product => {
				return product.id != req.params.id
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(deleted))
		res.redirect('/products')   //Esto no anda tan bien, tenes que refreshear antes de que impacte el cambio.
	}

};

module.exports = controller;