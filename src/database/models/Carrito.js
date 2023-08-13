//IMPORTAMOS LAS TABLAS PARA LAS FOREIGN KEY
const User = require('./User');
const Product = require('./Product');

module.exports = (sequelize, dataTypes) => {
    let alias = 'Carrito';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_user: {
            type: dataTypes.INTEGER
        },
        id_prod: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: "carrito",
        timestamps: false
    };

    const Carrito = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Carrito.associate = function(models) {
        Carrito.belongsTo(models.User, {
            as: "carrito_user",
            foreignKey: "id_user"
        })
        Carrito.belongsTo(models.Product, {
            as: "carrito_prod",
            foreignKey: "id_prod"
        })
    }


    return Carrito;
}