module.exports = {
    index: () => {
        return res.render('index', {})

    },

    detalleProducto: () => {
        return res.render('detalleProducto', {})

    },
    carrito: () => {
        return res.render('carrito', {})

    },
    login: () => {
        return res.render('login', {})

    },
    registro: () => {
        return res.render('registro', {})

    },

}