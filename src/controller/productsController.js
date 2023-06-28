const fs = require('fs');
const path = require('path');
const rutaProducto = path.resolve('./src/database/product.json')
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
        return res.render('./products/edicionProducto', {
            "idProd": editarProducto.id,
            "nombre": editarProducto.nombreProd,
            "precio": editarProducto.precio,
            "categoria": editarProducto.categoria,
            "marca": editarProducto.marca,
            "descIndex": editarProducto.descIndex,
            "descGeneral": editarProducto.descGeneral,
        })

    },

    editarProceso: (req, res) => {
        const idProducto = req.params.idprod;
        const nombre = req.body.nombreProducto;
        const precio = parseFloat(req.body.precioProducto);
        const categoria = req.body.categoriaProducto;
        const marca = req.body.marca;
        const descIndex = req.body.descripcionbreve;
        const descGeneral = req.body.descripcionGeneral;
        const oferta = req.body.oferta;
        const image = req.body.imagenProducto;

        const data = fs.readFileSync(rutaProducto, 'utf8');

        let productos = JSON.parse(data);

        const productoEditado = productos.find(row => row.id == idProducto);

        if (nombre !== undefined) {
            productoEditado.nombreProd = nombre;
        };
        if (precio !== undefined) {
            productoEditado.precio = precio;
        };
        if (categoria !== undefined) {
            productoEditado.categoria = categoria;
        };
        if (marca !== undefined) {
            productoEditado.marca = marca;
        };
        if (descIndex !== undefined) {
            productoEditado.descIndex = descIndex;
        };
        if (descGeneral !== undefined) {
            productoEditado.descGeneral = descGeneral;
        };
        if (oferta !== undefined) {
            productoEditado.oferta = oferta;
        };
        if (image !== undefined) {
            productoEditado.image = image;
        };

        const jsonProductos = JSON.stringify(productos, null, 2);

        fs.writeFileSync(rutaProducto, jsonProductos, 'utf8');

        return res.redirect("/");
    },

    vender: (req, res) => {

        return res.render('../views/products/vender.ejs');


    },

    publicado: (req, res) => {
        let productoNuevo = {
            "id": datos.length + 1,
            "vendedor": req.params.id,
            "nombreProd": req.body.nombreProducto,
            "precio": parseFloat(req.body.precioProducto),
            "oferta": req.body.oferta,
            "categoria": req.body.categoriaProducto,
            "marca": req.body.marca,
            "descIndex": req.body.descripcionbreve,
            "descGeneral": req.body.descripcionGeneral,
            "image": req.body.imagenProducto,
        }
        fs.writeFileSync(rutaProducto, JSON.stringify([...datos, productoNuevo], null, 2), "utf-8")
        res.render('./products/createProduct')
    },
    listado: (req, res) => {
        const productoEncontrado = datos.filter(row => row.vendedor == req.params.id)
        return res.render("./products/listadoProducto",
            { row: productoEncontrado })

    },
    eliminar: (req, res) => {     
        const idProducto = req.params.idprod;
        const nuevosProductos = datos.filter(row => row.id != idProducto);
        fs.writeFileSync(rutaProducto, JSON.stringify(nuevosProductos, null, 2));
        return res.redirect('/');
    }
};