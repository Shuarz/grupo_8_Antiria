const fs = require ('fs');
const path = require ('path');
const datos = JSON.parse (fs.readFileSync (path.resolve(__dirname,'../database/product.json')));

module.exports = {
    carrito: (req, res) =>{
        return res.render('../views/products/carrito.ejs' );
    },
    detalleProducto:  (req,res)=>{
            const productoEncontrado = datos.find(row => row.id == req.params.id)
            return res.render("./products/detalleProducto",
            {"nombreProd":productoEncontrado.nombreProd,
            "precio":productoEncontrado.precio,
            "image":productoEncontrado.image,
            "descGeneral":productoEncontrado.descGeneral})
    },
    vender: (req, res) =>{
        return res.render('../views/products/vender.ejs' );
    }
};