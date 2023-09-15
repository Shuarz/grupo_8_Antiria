if  (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)

}
else {
    ready()
}
function ready(){
    if (JSON.parse(localStorage.getItem("carrito"))== null){
        localStorage.setItem("carrito", JSON.stringify([]))
    }
let carritoboton = document.querySelector(".submitCart")
carritoboton.addEventListener("click", agregaritem)
}
function agregaritem (){
    let regex = /\/productDetail\/(\d+)/ 
    let url = window.location.href
    console.log(regex)
    let productosCarrito = (JSON.parse(localStorage.getItem("carrito")))
    let productoEcontrado = {
        id: url.match(regex)[1],
        nombre:  document.querySelector(".nombres").innerText,
        precio:  document.querySelector(".precios").innerText.replace("$",""),
        imagen:  document.querySelector(".foto").alt,
        descripcion:    document.querySelector(".descrip").innerText
    } 
    if(productosCarrito.length == 0){
        productosCarrito.push(productoEcontrado)
        productoEcontrado.subtotal = productoEcontrado.precio
    
    }
    else{
        let buscaproducto = productosCarrito.find(producto =>producto.id == productoEcontrado.id)
        if(buscaproducto){
            buscaproducto.subtotal = productoEcontrado.precio
        }
        else{
            productosCarrito.push(productoEcontrado)
            productoEcontrado.subtotal = productoEcontrado.precio
    
        }
    }
    localStorage.setItem("carrito", JSON.stringify(productosCarrito))
    }


