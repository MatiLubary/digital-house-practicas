const fs = require('fs');

module.exports = function (req, res, next) {
    let url = req.url;
    let log = 'El usuario ingreso a la ruta' + url + "\n";

    console.log(log);

    fs.appendFileSync("./logs/userLogs.txt", log)

    next()
}