const fs = require ('fs');
const path = require ('path');
const datos = JSON.parse(fs.readFileSync (path.resolve(__dirname,'../database/product.json')));
const contacto = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/contact.json')));
const rutaContacto = path.resolve('./src/database/contact.json')

module.exports = {
    index: (req, res) => {
        const ofertas = datos.filter((row) => row.oferta == 'True');
        const oferta = ofertas.slice(-5);
        return res.render('index', {oferta: oferta});

    },
    contacto: (req,res) => {
        const consulta =  {
            "id":contacto.length+1,
            "nombreCompleto":req.params.nombreCompleto,
            "email":req.body.email,
            "telefono":req.body.tel,
            "asunto":req.body.asunto,
            "mensaje":req.body.textarea
        }
        fs.writeFileSync(rutaContacto,JSON.stringify([...contacto, consulta], null, 2), "utf-8")
        return res.redirect("/")
    }
}