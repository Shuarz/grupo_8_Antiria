//IMPORTAMOS LAS TABLAS PARA LAS FOREIGN KEY
const User = require('./User');
const Product = require('./Product');

module.exports = (sequelize, dataTypes) => {
    let alias = 'Carritos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_user: {
            type: dataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        id_prod: {
            type: dataTypes.INTEGER,
            references: {
                model: Product,
                key: 'id'
            }
        },
    };
    let config = {
        tableName: "carrito",
        timestamps: false
    };

    const Carrito = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Carrito.belongsTo(User, { foreignKey: 'id_user', as: 'Users' });
    Carrito.belongsTo(Product, { foreignKey: 'id_prod', as: 'Products' });

    return Carrito;
}