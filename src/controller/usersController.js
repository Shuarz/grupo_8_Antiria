const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


const rutaregistro = path.resolve(__dirname, '../database/users.json');

//variable que guarda los datos del user.json
const datos = JSON.parse(fs.readFileSync(rutaregistro));

module.exports = {
    login: (req, res) => {
        return res.render('./users/login.ejs');
    },
    processLogin: (req, res) => {
        const usuario = datos.find(row => row.correo == req.body.correo)
        if (usuario) {
            if (usuario.contraseña == req.body.contraseña) {
                delete usuario.contraseña
                req.session.usuarioLogeado = usuario
                return res.redirect('/')
            } else {
                return res.render("login", {
                    errors: {
                        datosMal: {
                            msg: "datos incorrectos"
                        }
                    }
                })
            }
        } else {
            return res.render("login", {
                errors: {
                    datosMal: {
                        msg: "datos incorrectos"
                    }
                }
            })
        }
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
           
            let registroNuevo = {
                "id": datos.length + 1,
                "nombre": req.body.name,
                "apellido": req.body.lastname,
                "correo": req.body.mail,
                "contraseña": bcrypt.hashSync(req.body.password, 10),
                "terminos": req.body.terminos,
                "imagenUser": req.file ? req.file.filename : 'user_undefined.png'
            };
            datos.push(registroNuevo);
            fs.writeFileSync(rutaregistro, JSON.stringify(datos, null, 2), "utf-8");
            res.render('./users/create');
        }
    }
};
