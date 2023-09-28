let productosCarrito = JSON.parse(localStorage.getItem("carrito"));

// Verifica si productosCarrito es un arreglo y tiene elementos
if (
  productosCarrito &&
  Array.isArray(productosCarrito) &&
  productosCarrito.length > 0
) {
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
