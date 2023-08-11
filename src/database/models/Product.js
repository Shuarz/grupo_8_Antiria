//IMPORTAMOS LAS TABLAS PARA LAS FOREIGN KEY
const User = require('./User');
const Marca = require('./Marca');
const Categoria = require('./Categoria');

module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        descripcion: {
            type: dataTypes.STRING,
        },
        precio: {
            type: dataTypes.FLOAT,
        },
        id_user: {
            type: dataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        },
        id_marca: {
            type: dataTypes.INTEGER,
            references: {
                model: Marca,
                key: 'id'
            }
        },
        id_categoria: {
            type: dataTypes.INTEGER,
            references: {
                model: Categoria,
                key: 'id'
            }
        },
        imagen_prod: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "product",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Product.belongsTo(User, { foreignKey: 'id_user', as: 'Users' });
    Product.belongsTo(Marca, { foreignKey: 'id_marca', as: 'Marcas' });
    Product.belongsTo(Categoria, { foreignKey: 'id_categoria', as: 'Categorias' });

    return Product;
};
