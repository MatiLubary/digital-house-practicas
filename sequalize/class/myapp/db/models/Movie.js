/* const { sequelize, Sequelize } = require("."); */
/* const { DataTypes } = require("sequelize/types"); */

module.exports = function (sequelize, dataTypes) {
    let movie = sequelize.define('Movie', {

        id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
        },
        
        title: {
            type: dataTypes.STRING(85),
            allowNull: true,
        },
        length: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.FLOAT
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }

    }, {
        tableName: 'movies',
        timestamps: true,
        underscored: true,
        createdAt: 'created_at',
        createdAt: 'updated_at', 
    })

    return movie

}