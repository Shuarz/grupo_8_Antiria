const { validationResult } = require("express-validator");

let db = require("../database/models");

module.exports = {
  sell: (req, res) => {
    return res.render("./products/vender");
  },

  public: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./products/vender", {
        errors: resultValidation.mapped(),
      });
    }
    let categoria;
    switch (req.body.categoriaProducto) {
      case "Arte":
        categoria = 1;
        break;
      case "Reloj":
        categoria = 2;
        break;
      case "Reliquia":
        categoria = 3;
        break;
      case "Mueble":
        categoria = 4;
        break;
      case "Joyeria":
        categoria = 5;
        break;
      case "Musica":
        categoria = 6;
        break;
      default:
        categoria = 7;
    }

    let marca;
    switch (req.body.marca) {
      case "Mercedes Benz":
        marca = 1;
        break;
      case "Rolex":
        marca = 2;
        break;
      case "Sony":
        marca = 3;
        break;
      case "Louis Vuitton":
        marca = 4;
        break;
      case "Nintendo":
        marca = 5;
        break;
      default:
        marca = 6;
    }

    db.Product.create({
      nombre: req.body.nombreProducto,
      descripcion: req.body.descripcionGeneral,
      precio: parseFloat(req.body.precioProducto),
      id_user: req.params.idUser,
      id_marca: marca,
      id_categoria: categoria,
    }).then((product) => {
      req.files.forEach((file) => {
        db.ImagenesProd.create({
          id_prod: product.id,
          imagen_prod: file.filename,
        });
      });
      if (req.body.oferta == "True") {
        db.Oferta.create({
          id_prod: product.id,
        });
      }
      res.render("./products/createProduct");
    });
  },

  prodDetail: (req, res) => {
    db.Product.findByPk(req.params.idProd).then(function (prodUD) {
      if (prodUD) {
        db.ImagenesProd.findAll({
          where: {
            id_prod: req.params.idProd,
          },
        }).then(function (imagenes) {
          console.log(imagenes);
          res.render("./products/detalleProducto", {
            prodUD: prodUD,
            imagenes: imagenes,
          });
        });
      } else {
        res.redirect("/");
      }
    });
  },

  cart: (req, res) => {
    return res.render("./products/carrito");
  },

  list: async (req, res) => {
    try {
      const product = await db.Product.findAll({
        include: [
          {
            model: db.ImagenesProd,
            as: "ImagenesProd",
          },
        ],
      });
      return res.render("./products/listadoProducto", {
        productsUser: product,
      });
    } catch (error) {
      console.log(error);
    }
  },

  delete: (req, res) => {
    let productoId = req.params.idProd;

    // Busca la oferta asociada al producto y elimínala si existe
    db.Oferta.findOne({
      where: {
        id_prod: productoId,
      },
    })
      .then(function (oferta) {
        if (oferta) {
          return db.Oferta.destroy({
            where: {
              id_prod: productoId,
            },
          });
        } else {
          return Promise.resolve();
        }
      })
      .then(function () {
        return db.ImagenesProd.destroy({
          where: {
            id_prod: productoId,
          },
        });
      })
      .then(function () {
        return db.Product.destroy({
          where: {
            id: productoId,
          },
        });
      })
      .then(function (resultado) {
        res.redirect("/listadoProducto/" + req.params.idUser);
      });
  },
  edit: async (req, res) => {
    try {
      const productoEcontrado = await db.Product.findByPk(req.params.idProd);
      const categorias = await db.Categoria.findByPk(
        productoEcontrado.id_categoria
      );
      const marca = await db.Marca.findByPk(productoEcontrado.id_marca);
      const imagenes = await db.ImagenesProd.findAll({
        where: {
          id_prod: req.params.idProd,
        },
      })

      return res.render("./products/edicionProducto", {
        productsUser: productoEcontrado,
        categoria: categorias,
        marca: marca,
        imagenes: imagenes
      });
    } catch (error) {
      console.log(error);
    }
  },

  editProcess: (req, res) => {
    let categoria;
    switch (req.body.categoriaProducto) {
      case "Arte":
        categoria = 1;
        break;
      case "Reloj":
        categoria = 2;
        break;
      case "Reliquia":
        categoria = 3;
        break;
      case "Mueble":
        categoria = 4;
        break;
      case "Joyeria":
        categoria = 5;
        break;
      case "Musica":
        categoria = 6;
        break;
      default:
        categoria = 7;
    }

    let marca;
    switch (req.body.marca) {
      case "Mercedes Benz":
        marca = 1;
        break;
      case "Rolex":
        marca = 2;
        break;
      case "Sony":
        marca = 3;
        break;
      case "Louis Vuitton":
        marca = 4;
        break;
      case "Nintendo":
        marca = 5;
        break;
      default:
        marca = 6;
    }
    if (req.file || req.files) {
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
            id: req.params.idProd,
          },
        }
      ).then((prod) => {
        req.files.forEach((file) => {
          db.ImagenesProd.create({
            id_prod: req.params.idProd,
            imagen_prod: file.filename,
          });
        });
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
            id: req.params.idProd,
          },
        }
      );
    }
    db.Oferta.findOne({
      where: {
        id_prod: req.params.idProd,
      },
    }).then((prod_oferta) => {
      if (prod_oferta) {
        if (req.body.oferta !== "True") {
          db.Oferta.destroy({
            where: {
              id_prod: req.params.idProd,
            },
          });
        }
      } else {
        console.log("ENTRE AL ELSE DE OFERTA: " + req.body.oferta);
        if (req.body.oferta === "True") {
          db.Oferta.create({
            id_prod: req.params.idProd,
          });
        }
      }
      res.redirect("/listadoProducto/" + req.params.idUser);
    });
  },
  search: (req, res) => {
    const searchQuery = req.query.search;
    db.Product.findAll({
      include: [
        {
          model: db.Categoria,
          as: "categoria",
        },
        {
          model: db.Marca,
          as: "marca",
        },
        {
          model: db.ImagenesProd,
          as: "ImagenesProd",
        },
      ],
      where: {
        [db.Sequelize.Op.or]: [
          db.Sequelize.where(
            db.Sequelize.fn("LOWER", db.Sequelize.col("Product.nombre")),
            "LIKE",
            `%${searchQuery.toLowerCase()}%`
          ),
          db.Sequelize.where(
            db.Sequelize.fn("LOWER", db.Sequelize.col("Product.descripcion")),
            "LIKE",
            `%${searchQuery.toLowerCase()}%`
          ),
          db.Sequelize.where(
            db.Sequelize.fn("LOWER", db.Sequelize.col("categoria.nombre")),
            "LIKE",
            `%${searchQuery.toLowerCase()}%`
          ),
          db.Sequelize.where(
            db.Sequelize.fn("LOWER", db.Sequelize.col("marca.nombre")),
            "LIKE",
            `%${searchQuery.toLowerCase()}%`
          ),
        ],
      },
    }).then((products) => {
      res.render("./products/search", { search: products });
    });
  },
  procesoCompra: (req, res) => {
    let detalleCompra = {
      id_user: req.session.userLogged.id,
      total: req.body.total,
      productos: req.body.productos,
      fecha: new Date(),
    };
    res.json(detalleCompra);
  },
  processDeleteImg: (req, res) => {
    db.ImagenesProd.destroy({
        where: {
            id: req.params.idImg
        }
    });
    res.redirect('/listadoProducto/1');
  }
};
