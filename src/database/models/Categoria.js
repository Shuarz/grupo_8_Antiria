module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "categoria",
        timestamps: false
    };

    const Categoria = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Categoria.associate = function(models) {
        Categoria.belongsTo(models.Product, {
            as: "categoria",
            foreignKey: "id_categoria"
        })
    }

    return Categoria;
}