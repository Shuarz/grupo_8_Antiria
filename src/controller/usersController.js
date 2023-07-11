const fs = require('fs');
const path = require('path')
const rutaregistro = path.resolve('./src/database/users.json')
const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.json')));

module.exports = {
    login: (req, res) => {
        return res.render('../views/users/login.ejs');
    },
    registro: (req, res) => {
        return res.render('../views/users/registro.ejs');
    },
    create: (req, res) => {
        let registroNuevo = {
            "id": datos.length + 1,
            "nombre": req.body.name,
            "apellido": req.body.lastname,
            "correo": req.body.mail,
            "contraseña": req.body.password,
            "terminos": req.body.terminos,
            "imagenUser": req.file.filename,
        }
        fs.writeFileSync(rutaregistro, JSON.stringify([...datos, registroNuevo], null, 2), "utf-8")
        res.render('./users/create')
    }
};