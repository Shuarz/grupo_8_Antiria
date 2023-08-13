module.exports = (sequelize, dataTypes) => {
    let alias = 'Novedad';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_prod: {
            type: dataTypes.INTEGER
        },
    };
    let config = {
        tableName: "novedades",
        timestamps: false
    };

    const Novedad = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Novedad.associate = function(models) {
        Novedad.belongsTo(models.Product, {
            as: "novedad",
            foreignKey: "id_prod"
        })
    }

    return Novedad;
}