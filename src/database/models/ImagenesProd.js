module.exports = (sequelize, dataTypes) => {
    let alias = 'ImagenesProd';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_prod: {
            type: dataTypes.INTEGER,
        },
        imagen_prod: {
            type: dataTypes.STRING,
        },
    };
    let config = {
        tableName: "imagenesprod",
        timestamps: false
    };

    const ImagenesProd = sequelize.define(alias, cols, config);

    ImagenesProd.associate = function(models) {
        ImagenesProd.belongsTo(models.Product, {
            as: "ImagenesProd",
            foreignKey: "id_prod"
        })
    }

    return ImagenesProd;
}