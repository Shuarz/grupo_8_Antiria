const fs =require('fs');
const path = require('path')
const rutaregistro = path.resolve('./src/database/users.json')
const usuariosregistrados= JSON.parse(fs.readFileSync(rutaregistro))



module.exports = {
    login: (req, res) =>{
        return res.render('../views/users/login.ejs');
    },
    registro: (req, res) =>{
        return res.render('../views/users/registro.ejs');
    },
    regisrado:(req,res)=>{
        let registroNuevo = {
            "id":usuariosregistrados.length+1,
            "nombre": req.body.name,
            "apellido": req.body.lastname,
            "correo": req.body.mail,
            "contraseña": req.body.password,
            "terminos": req.body.terminos
        }
        fs.writeFileSync(rutaregistro, JSON.stringify([...usuariosregistrados, registroNuevo], null ,2 ), "utf-8")
        res.send("estas registrado!")


    }
};