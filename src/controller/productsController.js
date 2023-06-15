module.exports = {
    carrito: (req, res) =>{
        return res.render('../views/products/carrito.ejs' );
    },
    detalleProducto:  (req, res) =>{
        return res.render('../views/products/detalleProducto.ejs' );
    },
    vender: (req, res) =>{
        return res.render('../views/products/vender.ejs' );
    }
};