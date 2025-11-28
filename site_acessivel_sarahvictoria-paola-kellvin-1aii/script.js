// Ir para uma seção ao clicar nos atalhos
function goTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.setAttribute("tabindex", "-1"); // Permite foco em elementos não focáveis
        element.focus();
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }
}

// Alternar alto contraste
function toggleContrast() {
    document.body.classList.toggle("high-contrast");
}

// Controle de fonte
let currentFontSize = 16;
function changeFontSize(step) {
    currentFontSize += step;
    document.body.style.fontSize = currentFontSize + "px";
}
function resetFontSize() {
    currentFontSize = 16;
    document.body.style.fontSize = currentFontSize + "px";
}
