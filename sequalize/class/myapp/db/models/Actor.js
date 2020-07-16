/* const { sequelize, Sequelize } = require("."); */
/* const { DataTypes } = require("sequelize/types"); */

module.exports = function (sequelize, dataTypes) {


    let alias = 'actors'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.FLOAT
        }

    }

let config = {
    tableName : 'movies',
    timestamps: false
}

const pelicula = sequelize.define(alias, cols, config)



    return pelicula

}