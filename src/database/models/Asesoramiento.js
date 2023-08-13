module.exports = (sequelize, dataTypes) => {
    let alias = 'Asesoramiento';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        telefono: {
            type: dataTypes.STRING,
        },
        asunto: {
            type: dataTypes.STRING,
        },
        mensaje: {
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