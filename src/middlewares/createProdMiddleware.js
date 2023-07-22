const { body } = require('express-validator');

module.exports = [
    body('nombreProducto').notEmpty().withMessage('Debes asignarle un nombre al producto'),
    body('precioProducto').notEmpty().withMessage('Debes asignarle un precio al producto'),
    body('categoriaProducto').notEmpty().withMessage('Debes seleccionar una opción'),
    body('marca').notEmpty().withMessage('Debes seleccionar una opción'),
    body('descripcionGeneral').notEmpty().withMessage('Debes completar este campo'),
    body('imagenProducto').custom((value, { req }) => {
        let file = req.file;
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        }
        return true;
    }),
    body('oferta').notEmpty().withMessage('Debes seleccionar una opción'),
]