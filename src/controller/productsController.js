const fs = require('fs');
const path = require('path');
const rutaproducto = path.resolve('./src/database/product.json')
const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/product.json')));

module.exports = {

    carrito: (req, res) => {
        return res.render('../views/products/carrito.ejs');

    },
    detalleProducto: (req, res) => {
        const productoEncontrado = datos.find(row => row.id == req.params.id)
        return res.render("./products/detalleProducto",
            {
                "nombreProd": productoEncontrado.nombreProd,
                "precio": productoEncontrado.precio,
                "image": productoEncontrado.image,
                "descGeneral": productoEncontrado.descGeneral
            })
    },

    editarProducto: (req, res) => {
        const editarProducto = datos.find(row => row.id == req.params.idprod)
        return res.render('./products/edicionProducto',{
            "nombre" : editarProducto.nombreProd
        })

    },

    editarProceso: (req, res) => {
        let editarProducto = {}
        editarProducto = datos.find(row => row.id == req.params.idprod)
        editarProducto.nombreProd = req.body.nombreProducto
        editarProducto.precio = req.body.precioProducto
        editarProducto.categoria = req.body.categoriaProducto
        editarProducto.descGeneral = req.body.descripcionGeneral
        editarProducto.imagen = req.file.imagenProducto


        fs.writeFileSync(rutaArchivo, JSON.stringify(datos, null, 2), "utf-8")
        console.log(req.editarProducto)
        return res.redirect("/")

    },

    vender: (req, res) => {

        return res.render('../views/products/vender.ejs');


    },

    publicado: (req, res) => {
        let productoNuevo = {
            "id": datos.length + 1,
            "vendedor": req.params.id,
            "nombreProd": req.body.nombreProducto,
            "precio": req.body.precioProducto,
            "oferta": req.body.oferta,
            "categoria": req.body.categoriaProducto,
            "marca": req.body.marca,
            "descIndex": req.body.descripcionbreve,
            "descGeneral": req.body.descripcionGeneral,
            "image": req.body.imagenProducto,
        }
        fs.writeFileSync(rutaproducto, JSON.stringify([...datos, productoNuevo], null, 2), "utf-8")
        res.render('./products/createProduct')
    },
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