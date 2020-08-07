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
    tableName : 'actors',
    timestamps: false
}

const actor = sequelize.define(alias, cols, config)



    return actor

}