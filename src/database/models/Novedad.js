//IMPORTAMOS LAS TABLAS PARA LAS FOREIGN KEY
const Product = require('./Product');

module.exports = (sequelize, dataTypes) => {
    let alias = 'Novedades';
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
        tableName: "novedades",
        timestamps: false
    };

    const Novedad = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Novedad.belongsTo(Product, { foreignKey: 'id_prod', as: 'Products' });

    return Novedad;
}