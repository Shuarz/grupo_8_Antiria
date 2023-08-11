module.exports = (sequelize, dataTypes) => {
    let alias = 'Marcas';
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

    return Marca;
}