let productosCarrito = JSON.parse(localStorage.getItem("carrito"));

// Verifica si productosCarrito es un arreglo y tiene elementos
if (
  productosCarrito &&
  Array.isArray(productosCarrito) &&
  productosCarrito.length > 0
) {
  // Obtiene la longitud del arreglo
  let cantidadDePosiciones = productosCarrito.length;

  // Actualiza el contenido del elemento HTML con la cantidad
  let innerCarrito = document.querySelector(".contador-carrito");
  innerCarrito.innerHTML = `<p class="contador-carrito-p">${cantidadDePosiciones}</p>`;
} else {
  // Si no hay elementos en el carrito, puedes mostrar "0" o un mensaje indicando que está vacío
  let innerCarrito = document.querySelector(".contador-carrito");
  innerCarrito.innerHTML = `<p class="contador-carrito-p">0</p>`;
}
