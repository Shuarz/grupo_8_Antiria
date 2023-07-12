const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('El campo nombre es obligatorio'),
    body('lastname').notEmpty().withMessage('El campo apellido es obligatorio'),
    body('mail').notEmpty().withMessage('El campo Email es obligatorio').bail().isEmail().withMessage('Debes escribir un Email con el formato valido'),
    body('password').notEmpty().withMessage('Campo contraseña obligatorio'),
    body('passwordConfirm').notEmpty().withMessage('Debes confirmar su contraseña'),
    body('terminos').notEmpty().withMessage('Debes aceptar los terminos y condiciones')
]