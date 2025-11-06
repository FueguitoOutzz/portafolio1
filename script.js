// Obtiene el elemento del encabezado (header)
const header = document.querySelector('header');

// Función que se ejecuta al hacer scroll
window.onscroll = function() {
    // Si la posición del scroll es mayor a 50 píxeles, añade la clase 'scrolled'
    // De lo contrario, la elimina
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};