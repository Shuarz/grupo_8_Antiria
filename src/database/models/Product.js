module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
            // references: {
            //     model: User,
            //     key: 'id'
            // }
        },
        id_marca: {
            type: dataTypes.INTEGER,
            // references: {
            //     model: Marca,
            //     key: 'id'
            // }
        },
        id_categoria: {
            type: dataTypes.INTEGER,
            // references: {
            //     model: Categoria,
            //     key: 'id'
            // }
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
    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "id_user"
        })
        Product.belongsTo(models.Marca, {
            as: "marca",
            foreignKey: "id_marca"
        })
        Product.belongsTo(models.Categoria, {
            as: "categoria",
            foreignKey: "id_categoria"
        })
    }

    return Product;
};
