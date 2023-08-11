//IMPORTAMOS LAS TABLAS PARA LAS FOREIGN KEY
const Product = require('./Product');

module.exports = (sequelize, dataTypes) => {
    let alias = 'Ofertas';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        tableName: "oferta",
        timestamps: false
    };

    const Oferta = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Oferta.belongsTo(Product, { foreignKey: 'id_prod', as: 'Products' });

    return Oferta;
}