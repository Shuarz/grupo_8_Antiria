let db = require('../database/models')

module.exports = {
    index: async (req, res) => {
        db.Oferta.findAll({
            include: [
                {
                    model: db.Product,
                    as: "productoOferta",
                },
            ],
            order: [
                [{ model: db.Product, as: 'productoOferta' }, "precio", "ASC"], // Ordenar por precio de producto de forma ascendente
            ],
            limit: 5,
        }).then((resultado) => {
            res.render('index', { oferta: resultado });
        });

    },
    contacto: (req,res) => {
        db.Asesoramiento.create({
            nombre: req.body.nombreCompleto,
            email: req.body.email,
            telefono: req.body.tel,
            asunto: req.body.asunto,
            mensaje: req.body.textarea,
        }).then(() => {
            res.redirect('/');
        })
    }
}