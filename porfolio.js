
function traducir() {
    document.querySelectorAll("[data-en]").forEach(elemento => {
        let textoActual = elemento.innerText;
        let textoEn = elemento.getAttribute("data-en");
        elemento.innerText = textoEn;
        elemento.setAttribute("data-en", textoActual); // cambio idioma a ingles
    });
}