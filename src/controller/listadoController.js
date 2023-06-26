const fs = require ('fs');
const path = require ('path');
const datos = JSON.parse (fs.readFileSync (path.resolve(__dirname,'../database/product.json')));

module.exports = {
    listado: (req, res) => 
    {
        const productoEncontrado = datos.filter(row => row.vendedor == req.params.id)
            return res.render("./products/listadoProducto",
            {row: productoEncontrado})
    
    },
    eliminar: (req, res) => {
        cart = cart.filter((id) => id !== productId);
    }
};
