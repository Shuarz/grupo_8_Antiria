module.exports = (sequelize, dataTypes) => {
    let alias = 'Marca';
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
        tableName: "marca",
        timestamps: false
    };

    const Marca = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Marca.associate = function(models) {
        Marca.belongsTo(models.Product, {
            as: "marca",
            foreignKey: "id_marca"
        })
    }

    return Marca;
}