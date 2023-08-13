module.exports = (sequelize, dataTypes) => {
    let alias = 'Marca';
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
        tableName: "marca",
        timestamps: false
    };

    const Marca = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Marca.associate = function(models) {
        Marca.hasMany(models.Product, {
            as: "productos",
            foreignKey: "id_marca"
        })
    }

    return Marca;
}