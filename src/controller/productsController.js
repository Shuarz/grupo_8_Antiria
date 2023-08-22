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
        let categoria
        switch (req.body.categoriaProducto) {
            case "Arte":
                categoria = 1
                break;
            case "Reloj":
                categoria = 2
                break;
            case "Reliquia":
                categoria = 3
                break;
            case "Mueble":
                categoria = 4
                break;
            case "Joyeria":
                categoria = 5
                break;
            case "Musica":
                categoria = 6
                break;
            default:
                categoria = 7;
        }

        let marca
        switch (req.body.marca) {
            case "Mercedes Benz":
                marca = 1
                break;
            case "Rolex":
                marca = 2
                break;
            case "Sony":
                marca = 3
                break;
            case "Louis Vuitton":
                marca = 4
                break;
            case "Nintendo":
                marca = 5
                break;
            default:
                marca = 6;
        }

        db.Product.create({
            nombre: req.body.nombreProducto,
            descripcion: req.body.nombreProducto,
            precio: parseFloat(req.body.precioProducto),
            id_user: req.params.idUser,
            id_marca: marca,
            id_categoria: categoria,
            imagen_prod: req.file.filename
        }).then(product => {
            if (req.body.oferta == "True") {
                db.Oferta.create({
                    id_prod: product.id
                }).then(() => {
                    res.render('./products/createProduct');
                });
            } else {
                res.render('./products/createProduct');
            }
        });
    },

    prodDetail: (req, res) => {
        db.Product.findByPk(req.params.idProd)
            .then(function (prodUD) {
                if (prodUD) {
                    res.render("./products/detalleProducto", { prodUD: prodUD });
                } else {
                    res.redirect('/')
                }
            })
    },

    cart: (req, res) => {
        return res.render('./products/carrito')
    },

    list: async (req, res) => {
        try {
            const product = await db.Product.findAll()
            return res.render("./products/listadoProducto", { productsUser: product })
        } catch (error) {
            console.log(error)
        }
    },

    delete: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.idProd
            }
        }).then(function(resultado){
            res.redirect("/listadoProducto/" + req.params.idUser)
        })

    },

    edit: async (req, res) => {
        try {
            const productoEcontrado = await db.Product.findByPk(req.params.idProd)
            const categorias = await db.Categoria.findByPk(productoEcontrado.id_categoria)
            const marca = await db.Marca.findByPk(productoEcontrado.id_marca)

            return res.render('./products/edicionProducto', {
                productsUser: productoEcontrado,
                categoria: categorias, marca: marca
            })

        } catch (error) {
            console.log(error)
        }
    },

    editProcess: (req, res) => {
        let categoria
        switch (req.body.categoriaProducto) {
            case "Arte":
                categoria = 1
                break;
            case "Reloj":
                categoria = 2
                break;
            case "Reliquia":
                categoria = 3
                break;
            case "Mueble":
                categoria = 4
                break;
            case "Joyeria":
                categoria = 5
                break;
            case "Musica":
                categoria = 6
                break;
            default:
                categoria = 7;
        }

        let marca
        switch (req.body.marca) {
            case "Mercedes Benz":
                marca = 1
                break;
            case "Rolex":
                marca = 2
                break;
            case "Sony":
                marca = 3
                break;
            case "Louis Vuitton":
                marca = 4
                break;
            case "Nintendo":
                marca = 5
                break;
            default:
                marca = 6;
        }
        if (req.file) {
            db.Product.update(
                {
                    nombre: req.body.nombreProducto,
                    descripcion: req.body.descripcionGeneral,
                    precio: parseFloat(req.body.precioProducto),
                    id_user: req.params.idUser,
                    id_marca: marca,
                    id_categoria: categoria,
                    imagen_prod: req.file.filename
                },
                {
                    where: {
                        id: req.params.idProd
                    }
                }
            ).then((prod) => {
                console.log('EL PRODUCTO EDITADO: ' + prod);
            });
        } else {
            db.Product.update(
                {
                    nombre: req.body.nombreProducto,
                    descripcion: req.body.descripcionGeneral,
                    precio: parseFloat(req.body.precioProducto),
                    id_user: req.params.idUser,
                    id_marca: marca,
                    id_categoria: categoria,
                },
                {
                    where: {
                        id: req.params.idProd
                    }
                }
            );
        }
        db.Oferta.findOne({
            where: {
                id_prod: req.params.idProd
            }
        }).then((prod_oferta) => {
            if (prod_oferta){
                if (req.body.oferta !== "True") {
                    db.Oferta.destroy({
                        where: {
                            id_prod: req.params.idProd
                        }
                    })
                }
            } else{
                console.log("ENTRE AL ELSE DE OFERTA: " + req.body.oferta)
                if (req.body.oferta === "True"){
                    db.Oferta.create({
                        id_prod: req.params.idProd
                    })
                }
            }
            res.redirect('/listadoProducto/' + req.params.idUser);
        })
    }
    ,

    search: (req, res) => {
        const searchQuery = req.query.search;
        db.Product.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categoria',
                },
                {
                    model: db.Marca,
                    as: 'marca',
                }
            ],
            where: {
                [db.Sequelize.Op.or]: [
                    db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('Product.nombre')), 'LIKE', `%${searchQuery.toLowerCase()}%`),
                    db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('Product.descripcion')), 'LIKE', `%${searchQuery.toLowerCase()}%`),
                    db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('Categoria.nombre')), 'LIKE', `%${searchQuery.toLowerCase()}%`),
                    db.Sequelize.where(db.Sequelize.fn('LOWER', db.Sequelize.col('Marca.nombre')), 'LIKE', `%${searchQuery.toLowerCase()}%`)
                ]
            }
        }).then((products) => {
            res.render('./products/search', { search: products });
        });
    },
    procesoCompra: (req, res) => {
        let detalleCompra = {
            id_user: req.session.userLogged.id,
            total: req.body.total,
            productos: req.body.productos,
            fecha: new Date()
        }
        res.json(detalleCompra)
    }

};