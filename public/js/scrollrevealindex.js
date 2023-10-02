document.addEventListener("DOMContentLoaded", function () {
    window.sr = ScrollReveal();

    sr.reveal('#headerScroll', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('#novedades', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('#ofertasScroll', {
        duration: 2000,
    });

    sr.reveal('#categorias', {
        duration: 2000,
    });

    sr.reveal('#marcasScroll', {
        duration: 2000,
        distance: '100px'
    });

    sr.reveal('#loginBox', {
        duration: 2000,
    });

    sr.reveal('#searchProducts', {
        duration: 2000,
        origin: 'right',
        distance: '-100px'
    });

    sr.reveal('#footerScroll', {
        duration: 2000,
        origin: 'top',
        distance: '-100px'
    });

    sr.reveal('#logoLogin', {
        duration: 2000,
        rotate: {
            x: 1,
            y: 180
        }
    });

});

