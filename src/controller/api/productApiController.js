const db = require ('../../database/models');
const Product = require('../../database/models/Product');
const sequelize = db.Sequelize;


module.exports = {
    list: async (req, res) => {
        const response = { }
        try {
            const productos = await db.findAll()
            response.count = productos.length
            response.products = productos.map((productos) => {
                return {
                    id: Product.id,
                    name: Product.nombre,
                    descripcion: Product.descripcion,
                    precio: Product.precio,
                    detail: 'api/products/${producto.id}'

                }
            })
            return res.json(response)

        }
        catch (e) {
         response.smg = 'hubo un error'
        }
        return res.json(response)
    }
}