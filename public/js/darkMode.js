const toggleBtn = document.getElementById('toggleBtn');
const header = document.querySelector('header');
const menuItems = document.querySelectorAll('.link-nav-index');
var logo = document.getElementById("logoAntiria");
const body = document.body;


// Define la ruta de la imagen por defecto y la personalizada
var imagenDefault = "/img/logotipo.png";
var imagenPersonalizada = "/img/logotipo_dark.png";

// Variable para llevar un registro del estado actual
var imagenActual = "default";

toggleBtn.addEventListener('click', () => {
    //dark mode
    body.classList.toggle('dark-mode');
    header.classList.toggle('header-dark');
    if (imagenActual === "default") {
        logo.src = imagenPersonalizada;
        imagenActual = "personalizada";
      } else {
        logo.src = imagenDefault;
        imagenActual = "default";
      }

    //light mode
    body.classList.toggle('light-mode');
    header.classList.toggle('header-index');


    menuItems.forEach(item => {
        item.classList.toggle('link-nav-dark');
    });

    menuItems.forEach(item => {
        item.classList.toggle('link-nav-index');
    });
});
