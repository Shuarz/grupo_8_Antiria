const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
var logo = document.getElementById("logoAntiria");

// Define la ruta del logo por defecto y la personalizada
var imagenDefault = "/img/logotipo.png";
var imagenPersonalizada = "/img/logotipo_dark.png";

// Función para aplicar el modo oscuro
function activarModoOscuro() {
    body.classList.add('dark-mode');
    logo.src = imagenPersonalizada;
    localStorage.setItem('modoOscuro', 'true');
}

// Función para desactivar el modo oscuro
function desactivarModoOscuro() {
    body.classList.remove('dark-mode');
    logo.src = imagenDefault;
    localStorage.setItem('modoOscuro', 'false');
}

// Verificar si el modo oscuro estaba activado en el localStorage
const modoOscuroAlmacenado = localStorage.getItem('modoOscuro');

if (modoOscuroAlmacenado === 'true') {
    activarModoOscuro();
}

toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        desactivarModoOscuro();
    } else {
        activarModoOscuro();
    }
});
