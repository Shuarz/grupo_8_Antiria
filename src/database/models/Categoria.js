module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: "categoria",
        timestamps: false
    };

    const Categoria = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Categoria.associate = function(models) {
        Categoria.hasMany(models.Product, {
            as: "productos",
            foreignKey: "id_categoria"
        })
    }

    return Categoria;
}