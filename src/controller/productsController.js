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
            precioProducto: parseFloat(req.body.precioProducto),
            image: req.file.filename,
            vendedor: parseInt(req.params.idUser)
        };

        let UserId = parseInt(req.params.idUser);
        let userToUpdate = User.findByField('id', UserId);
        let productIdToAdd = prodToCreate.id;
        User.addToCart(userToUpdate, productIdToAdd);

        Product.create(prodToCreate);
        res.render('./products/createProduct')
    },

    prodDetail: (req, res) => {
        let productId = parseInt(req.params.IdProd);
        let prodUD = Product.findByField('id', productId);
        return res.render("./products/detalleProducto", {prodUD: prodUD});
    },

    cart: (req, res) => {
        let UserId = parseInt(req.params.idUser);
        let prodUser = User.findByField('id', UserId);
        return res.render('./products/carrito', {cart: prodUser.cart});
    },

    list: (req, res) => {
        let vendedorId = parseInt(req.params.idUser);
        const productsUser = Product.findByFildFilter('vendedor', vendedorId);
        return res.render("./products/listadoProducto", { productsUser: productsUser });
    },

    delete: (req, res) => {
        const id = req.body.id;
        Product.delete(id);
        res.redirect('/listadoProducto/' + req.params.idUser);
    },

    edit: (req, res) => {
        let productId = parseInt(req.params.IdProd);
        let prodUser = Product.findByField('id', productId);
        return res.render('./products/edicionProducto', {
            "idProd": prodUser.id,
            "nombre": prodUser.nombreProducto,
            "precio": prodUser.precioProducto,
            "categoria": prodUser.categoriaProducto,
            "marca": prodUser.marca,
            "descGeneral": prodUser.descripcionGeneral,
        })
    },

    editProcess: (req, res) => {
        Product.edit(req);
        res.redirect('/listadoProducto/' + req.params.idUser);
    },

    search: (req, res) => {
        const search = Product.search(req.query.search);
        return res.render('./products/search', { search: search });
    },

};