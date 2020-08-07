module.exports = function (sequelize, dataTypes) {

    
    let alias = 'users'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        }

    }

let config = {
    tableName : 'users',
    timestamps: false
}

const user = sequelize.define(alias, cols, config)



    return user

}