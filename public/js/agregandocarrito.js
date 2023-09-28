if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  if (JSON.parse(localStorage.getItem("carrito")) == null) {
    localStorage.setItem("carrito", JSON.stringify([]));
  }

  // Agregar evento para el botón "Carrito"
  let carritoboton = document.querySelector(".submitCart");
  carritoboton.addEventListener("click", agregaritem);

  // Agregar evento para el botón "Comprar"
  let comprarboton = document.querySelector(".submitCart2");
  comprarboton.addEventListener("click", agregaritem);
}

function actualizarContadorCarrito() {
  // Obtén el arreglo desde el localStorage
  let productosCarrito = JSON.parse(localStorage.getItem("carrito"));

  // Verifica si productosCarrito es un arreglo y tiene elementos
  if (productosCarrito && Array.isArray(productosCarrito) && productosCarrito.length > 0) {
    // Obtiene la longitud del arreglo
    let cantidadDePosiciones = productosCarrito.length;

    // Actualiza el contenido de todos los elementos con la clase "contador-carrito"
    let innerCarritos = document.querySelectorAll(".contador-carrito");
    innerCarritos.forEach((innerCarrito) => {
      innerCarrito.innerHTML = `<p class="contador-carrito-p">${cantidadDePosiciones}</p>`;
    });
  } else {
    // Si no hay elementos en el carrito, puedes mostrar "0" o un mensaje indicando que está vacío
    let innerCarritos = document.querySelectorAll(".contador-carrito");
    innerCarritos.forEach((innerCarrito) => {
      innerCarrito.innerHTML = `<p class="contador-carrito-p">0</p>`;
    });
  }
}


function agregaritem() {
  let regex = /\/productDetail\/(\d+)/;
  let url = window.location.href;
  console.log(regex);
  let productosCarrito = JSON.parse(localStorage.getItem("carrito"));
  console.log('Producto del carrito: ' + productosCarrito);
  let productoEcontrado = {
    id: url.match(regex)[1],
    nombre: document.querySelector(".nombres").innerText,
    precio: document.querySelector(".precios").innerText.replace("$", "").replace(".", ""),
    imagen: document.querySelector(".foto").alt,
    descripcion: document.querySelector(".descrip").innerText,
  };
  if (productosCarrito.length == 0) {
    productosCarrito.push(productoEcontrado);
    productoEcontrado.subtotal = productoEcontrado.precio;
  } else {
    let buscaproducto = productosCarrito.find(
      (producto) => producto.id == productoEcontrado.id
    );
    if (buscaproducto) {
      buscaproducto.subtotal = productoEcontrado.precio;
    } else {
      productosCarrito.push(productoEcontrado);
      productoEcontrado.subtotal = productoEcontrado.precio;
    }
  }
  localStorage.setItem("carrito", JSON.stringify(productosCarrito));

  // Llama a la función para actualizar el contador
  actualizarContadorCarrito();
}
