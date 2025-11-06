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

// --- Código Adicional en style.css para el efecto 'scrolled' ---
/* Pega esto al final de tu style.css para que funcione el script:
    
    header.scrolled {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        background: var(--color-secundario); 
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        padding-bottom: 0;
    }

    header.scrolled nav {
        background: transparent;
    }
*/