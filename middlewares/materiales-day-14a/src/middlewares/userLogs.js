const fs = require('fs');

const logger = function (req, res, next) {
    let url = req.url;
    let log = 'El usuario ingreso a la ruta' + url;

    console.log(log);

    fs.appendFileSync("logs.txt", log)

    next()
}

module.exports = logger;