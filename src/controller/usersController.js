const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


const rutaregistro = path.resolve(__dirname, '../database/users.json');

module.exports = {
    login: (req, res) => {
        return res.render('./users/login.ejs');
    },
    registro: (req, res) => {
        return res.render('./users/registro.ejs');
    },
    create: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./users/registro.ejs', {
                errors: resultValidation.mapped()
            });
        } else {
            let datos = JSON.parse(fs.readFileSync(rutaregistro));
            let registroNuevo = {
                "id": datos.length + 1,
                "nombre": req.body.name,
                "apellido": req.body.lastname,
                "correo": req.body.mail,
                "contraseña": bcrypt.hashSync(req.body.password , 10 ),
                "terminos": req.body.terminos,
                "imagenUser": req.file ? req.file.filename : 'user_undefined.png'
            };
            datos.push(registroNuevo);
            fs.writeFileSync(rutaregistro, JSON.stringify(datos, null, 2), "utf-8");
            res.render('./users/create');
        }
    }
};
