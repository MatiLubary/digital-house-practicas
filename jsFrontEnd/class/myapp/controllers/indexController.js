const db = require("../db/models");


const controller = {
	root: (req, res) => {
        res.render('index', { title: 'Express' })
    },

};








module.exports = controller;