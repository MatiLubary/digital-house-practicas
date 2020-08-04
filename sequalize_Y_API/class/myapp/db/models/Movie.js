/* const { sequelize, Sequelize } = require("."); */
/* const { DataTypes } = require("sequelize/types"); */

module.exports = function (sequelize, dataTypes) {


    let alias = 'peliculas'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        length: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.FLOAT
        },
        awards: {
            type: dataTypes.INTEGER
        }

    }

let config = {
    tableName : 'movies',
    timestamps: false
}

const pelicula = sequelize.define(alias, cols, config)



    return pelicula

}