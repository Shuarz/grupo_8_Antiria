const { validationResult } = require('express-validator');

let db = require('../database/models')

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
        let newProduct = Product.create(prodToCreate);

        let userToUpdate = User.findByField('id', parseInt(req.params.idUser));
        let productIdToAdd = newProduct.id;

        User.addToProduct(userToUpdate.id, productIdToAdd);

        res.render('./products/createProduct');
    },

    prodDetail: (req, res) => {
        let productId = parseInt(req.params.idProd);
        let prodUD = Product.findByField('id', productId);
        return res.render("./products/detalleProducto", { prodUD: prodUD });
    },

    addToCartUser: (req, res) => {
        let userId = req.params.idUser;
        let productId = req.params.idProd;
        User.addToCart(userId, productId);

        res.redirect('/carrito/' + req.params.idUser);
    },

    cart: (req, res) => {
        let userId = parseInt(req.params.idUser);
        let prodUser = User.findByField('id', userId);

        const cartProductIds = prodUser.cart.map(productId => parseInt(productId));
        const cartProducts = cartProductIds.map(productId => Product.findByField('id', productId));
        const totalPrice = cartProducts.reduce((total, product) => total + parseFloat(product.precioProducto), 0);
        const total = totalPrice + 1500;
        return res.render('./products/carrito', {
            cart: cartProducts,
            precio: total,
            subtotal: totalPrice
        });
    },

    list: (req, res) => {
        let vendedorId = parseInt(req.params.idUser);
        const productsUser = Product.findByFildFilter('vendedor', vendedorId);
        return res.render("./products/listadoProducto", { productsUser: productsUser });
    },

    delete: (req, res) => {
        const idProd = req.params.idProd;
        const idUser = req.params.idUser;
        Product.delete(idProd);
        User.removeFromProduct(idUser, idProd);
        res.redirect('/listadoProducto/' + req.params.idUser);
    },

    deleteToCart: (req, res) => {
        const idProd = req.params.idProd;
        const idUser = req.params.idUser;
        User.removeFromCart(idUser, idProd);
        res.redirect('/carrito/' + req.params.idUser);
    },

    edit: (req, res) => {
        let productId = parseInt(req.params.idProd);
        let prodUser = Product.findByField('id', productId);
        return res.render('./products/edicionProducto', {
            "idProd": prodUser.id,
            "nombre": prodUser.nombreProducto,
            "precio": prodUser.precioProducto,
            "categoria": prodUser.categoriaProducto,
            "marca": prodUser.marca,
            "descGeneral": prodUser.descripcionGeneral,
        });
    },

    editProcess: (req, res) => {
        Product.edit(req);
        res.redirect('/listadoProducto/' + req.params.idUser);
    },

    search: (req, res) => {
        const searchQuery = req.query.search;
        db.Product.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categoria',
                    attributes: [] // Si no necesitas ningún atributo de la tabla Categoria en esta consulta
                }
            ],
            where: {
                [db.Sequelize.Op.or]: [
                    db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('Product.nombre')), 'LIKE', `%${searchQuery.toLowerCase()}%`),
                    db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('Product.descripcion')), 'LIKE', `%${searchQuery.toLowerCase()}%`),
                    db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('Categoria.nombre')), 'LIKE', `%${searchQuery.toLowerCase()}%`)
                ]
            }
        }).then((products) => {
            res.render('./products/search', { search: products });
        });


        // db.Product.findAll({
        //     where: {
        //         [db.Sequelize.Op.or]: [
        //             db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('nombre')), 'LIKE', `%${searchQuery.toLowerCase()}%`),
        //             db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('id_categoria')), 'LIKE', `%${searchQuery.toLowerCase()}%`),
        //             db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('descripcion')), 'LIKE', `%${searchQuery.toLowerCase()}%`)
        //         ]
        //     }
        // }).then((product) => {
        //         res.render('./product/search', { search: product });
        //     })
    },

};