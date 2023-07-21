const { validationResult } = require('express-validator');
const User = require('../models/User')
const Product = require('../models/Product')

module.exports = {
    sell: (req, res) => {
        return res.render('./products/vender');
    },

    public: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./products/vender', {
                errors: resultValidation.mapped()
            });
        }

        let prodToCreate = {
            ...req.body,
            vendedor: req.params.idUser
        };

        Product.create(prodToCreate);
        res.render('./products/createProduct')
        // } else{
        //     let productoNuevo = {
        //         "id": datos.length + 1,
        //         "vendedor": req.params.id,
        //         "nombreProd": req.body.nombreProducto,
        //         "precio": parseFloat(req.body.precioProducto),
        //         "oferta": req.body.oferta,
        //         "categoria": req.body.categoriaProducto,
        //         "marca": req.body.marca,
        //         "descIndex": req.body.descripcionbreve,
        //         "descGeneral": req.body.descripcionGeneral,
        //         "image": req.file.filename,
        //     }
        //     fs.writeFileSync(rutaProducto, JSON.stringify([...datos, productoNuevo], null, 2), "utf-8")
        //     res.render('./products/createProduct')
        // }
    },

    prodDetail: (req, res) => {
        let prodUD = Product.findByField('id', req.params.IdProd);
        return res.render("./products/detalleProducto", {prodUD})
    },

    cart: (req, res) => {
        let prodUser = User.findByField('id', req.params.idUser);
        return res.render('./products/carrito', {cart: prodUser.cart});
    },

    list: (req, res) => {
        const productsUser = Product.findByFildFilter('vendedor', req.params.idUser)
        return res.render("./products/listadoProducto", { productsUser: productsUser })
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

        const data = fs.readFileSync(rutaProducto, 'utf8');
        let productos = JSON.parse(data);

        const productoEditado = productos.find(row => row.id == idProducto);

        if (nombre !== undefined) {
            productoEditado.nombreProd = nombre;
        }
        if (precio !== undefined) {
            productoEditado.precio = precio;
        }
        if (categoria !== undefined) {
            productoEditado.categoria = categoria;
        }
        if (marca !== undefined) {
            productoEditado.marca = marca;
        }
        if (descIndex !== undefined) {
            productoEditado.descIndex = descIndex;
        }
        if (descGeneral !== undefined) {
            productoEditado.descGeneral = descGeneral;
        }
        if (oferta !== undefined) {
            productoEditado.oferta = oferta;
        }

        if (req.file) {
            const nuevaImg = req.file.filename;
            productoEditado.image = nuevaImg;
        }

        const jsonProductos = JSON.stringify(productos, null, 2);

        fs.writeFileSync(rutaProducto, jsonProductos, 'utf8');

        return res.redirect("/");
    },

    eliminar: (req, res) => {
        const idProducto = req.params.idprod;
        const nuevosProductos = datos.filter(row => row.id != idProducto);
        fs.writeFileSync(rutaProducto, JSON.stringify(nuevosProductos, null, 2));
        return res.redirect('/');
    },

    search: (req, res) => {
        let search = datos.filter((row) => {
            const nombre = (row.nombreProd || '').toString().toLowerCase();
            const categoria = (row.categoria || '').toString().toLowerCase();
            const descIndex = (row.descIndex || '').toString().toLowerCase();
            const marca = (row.marca || '').toString().toLowerCase();
            const query = (req.query.search || '').toString().toLowerCase();

            return categoria.includes(query) || descIndex.includes(query) || marca.includes(query) || nombre.includes(query);
        });

        return res.render('./products/search', { search: search });
    },

    delete: (req, res) => {
        const id = req.body.id;
        Controller.eliminar(id);
        res.redirect('/listadoProducto');
    }
};