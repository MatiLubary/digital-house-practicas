const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const usersFilePath = path.join(__dirname, '../data/users.json');

const controller = {
	root: (req, res) => {
		res.render('index');
    },

    services: (req, res) => {
		res.send('TBD');
    },

    design: (req, res) => {
		res.send('TBD');
    },


};

module.exports = controller;


