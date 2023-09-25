// Obtén el arreglo desde el localStorage
let productosCarrito = JSON.parse(localStorage.getItem("carrito"));

// Verifica si productosCarrito es un arreglo y tiene elementos
if (Array.isArray(productosCarrito) && productosCarrito.length > 0) {
  // Obtiene la longitud del arreglo
  let cantidadDePosiciones = productosCarrito.length;

  // Actualiza el contenido del elemento HTML con la cantidad
  document.querySelector(".contador-carrito-p").textContent = cantidadDePosiciones;
} else {
  // Si no hay elementos en el carrito, puedes mostrar "0" o un mensaje indicando que está vacío
  document.querySelector(".contador-carrito-p").textContent = "0";
}

