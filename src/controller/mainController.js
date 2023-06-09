module.exports = {
    index: (req, res) => {
        return res.render('index', {})

    },

    detalleProducto: (req, res) => {
        return res.render('detalleProducto', {})

    },
    carrito: (req, res) => {
        return res.render('carrito', {})

    },
    login: (req, res) => {
        return res.render('login', {})

    },
    registro: (req, res) => {
        return res.render('registro', {})

    },
    vender: (req,res)=>{
        return res.render('vender', {})
    }

}