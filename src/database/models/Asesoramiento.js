module.exports = (sequelize, dataTypes) => {
    let alias = 'Asesoramientos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: "asesoramiento",
        timestamps: false
    };

    const Asesoramiento = sequelize.define(alias, cols, config);

    return Asesoramiento;
}