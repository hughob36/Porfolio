
function traducir() {
    document.querySelectorAll("[data-en]").forEach(elemento => {
        let textoActual = elemento.innerText;
        let textoEn = elemento.getAttribute("data-en");
        elemento.innerText = textoEn;
        elemento.setAttribute("data-en", textoActual); // cambio idioma a ingles
    });
}

const img = document.querySelector(".hero-img-desarrollador");

img.addEventListener("mouseover", () => {
    img.style.opacity = "0"; // Se desvanece
    setTimeout(() => img.src = "imagenes/HugoGhibli.png", 450); // Cambia de imagen
    setTimeout(() => img.style.opacity = "1", 500); // Se vuelve a mostrar
});

img.addEventListener("mouseout", () => {
    img.style.opacity = "0"; // Se desvanece
    setTimeout(() => img.src = "imagenes/foto1.png", 450); // Vuelve a la imagen original
    setTimeout(() => img.style.opacity = "1", 500); // Se muestra suavemente
});
