const fs = require ('fs');
const path = require ('path');
const rutaproducto = path.resolve('./src/database/product.json')
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
        
        return res.render('../views/products/vender.ejs');
        
        
    },

    publicado:(req, res)=>{
        let productoNuevo ={
            "id": datos.length+1,
            "nombreProd": req.body.nombreProducto,
            "Precio": req.body.precioProducto,
            // agregar oferta
            "categoria": req.body.categoriaProducto,
            "descGeneral": req.body.descripcionGeneral,
            "image": req.body.imagenProducto,
        }
        fs.writeFileSync(rutaproducto, JSON.stringify([...datos, productoNuevo], null ,2 ), "utf-8")
        res.send("producto subido!")

    }
};