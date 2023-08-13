module.exports = (sequelize, dataTypes) => {
    let alias = 'Oferta';
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
        tableName: "oferta",
        timestamps: false
    };

    const Oferta = sequelize.define(alias, cols, config);

    // FOREIGN KEY
    Oferta.associate = function(models) {
        Oferta.belongsTo(models.Product, {
            as: "productoOferta",
            foreignKey: "id_prod"
        });
    }


    return Oferta;
}