if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready()
}
const productosJSON = localStorage.getItem('carrito');
let productos = JSON.parse(productosJSON);
;

        
function ready(){
    if (!JSON.parse(localStorage.getItem('carrito'))){
        localStorage.setItem('carrito', JSON.stringify([]));
    };
    mostrarCarrito(productos);
}
    function borrarElemento(id){
        //necesito traerme los procutos del localStorage
  
        let elemento = productos.filter((row) => row.id != id);
        mostrarCarrito(elemento);
        //tengo que setear los productos en el localStorage
    }
    function vaciarCarrito(){
        //tengo que setear en el localStorage el array vacio
        mostrarCarrito([]);
    }
    async function finalizarCompra(){
        let data = {
            total: productos.reduce((acum, current) => acum + current.precio, 0),
            productos: productos
        }
        let finalizarFetch = await fetch('/carrito/finalizar', {method: 'POST', headers: {'Content-Type': 'application/json' }, body: JSON.stringify(data)})
        let response = await finalizarFetch.json()
        console.log(response)
    }
    function mostrarCarrito(productosCarrito){
        let carritoProd = document.querySelector('.carrito-prod');
        if(productosCarrito.length == 0){
            carritoProd.innerHTML = `<h2>El carrito esta vacio <a href='/'>Compra ahora</a></h2>`
            document.querySelector('.totalCart').innerHTML = ``;
        } else{
            let subTotal = 0;
            carritoProd.innerHTML = ``
            productosCarrito.forEach(element => {
                subTotal+=element.precio;
                carritoProd.innerHTML += `<article>
                <div class="imagen-detalle-prod">
                    <img src="/img/products/${element.imagen}" alt="">
                </div>
                <div class="descripcion_search_prod2">
                    <h3>${element.nombre}</h3>
                    <h4 class="green">$${element.precio}</h4>
                    <div class="eliminar-edit">
                        <i class="fa-sharp fa-solid fa-trash" onClick=borrarElemento(${element.id})></i>
                    </div>
                </div>
            </article>`
            });
            document.querySelector('.totalCart').innerHTML = `<h3 class="subtotal subtotal2">SubTotal: $${subTotal}</h3>
            <h3 class="subtotal">Envio: $ 1.500</h3>
            <h2 class="total green">Total: $${subTotal+1500}</h2>
            <button class="realizar-compra" onClick=finalizarCompra()>Realizar compra</button>
            <button class="realizar-compra" onClick=vaciarCarrito()>Vaciar carrito</button>`
        }
    }