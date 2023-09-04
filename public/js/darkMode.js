const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
var logo = document.getElementById("logoAntiria");

var imagenDefault = "/img/logotipo.png";
var imagenPersonalizada = "/img/logotipo_dark.png";

function activarModoOscuro() {
    body.classList.add('dark-mode');
    logo.src = imagenPersonalizada;
    localStorage.setItem('modoOscuro', 'true');
}

function desactivarModoOscuro() {
    body.classList.remove('dark-mode');
    logo.src = imagenDefault;
    localStorage.setItem('modoOscuro', 'false');
}

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
