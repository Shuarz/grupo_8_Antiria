const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('El campo nombre es obligatorio'),
    body('lastname').notEmpty().withMessage('El campo apellido es obligatorio'),
    body('mail')
        .notEmpty().withMessage('El campo Email es obligatorio')
        .isEmail().withMessage('Debes escribir un Email con el formato valido'),
    body('password')
        .notEmpty().withMessage('Campo contraseña obligatorio')
        .custom((value, { req }) => {
            if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
                throw new Error('La contraseña debe contener al menos un número, una mayúscula y una minúscula');
            }
            return true;
        }),
    body('passwordConfirm').notEmpty().withMessage('Debes confirmar tu contraseña'),
];
