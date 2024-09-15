window.addEventListener("scroll", function() {
    const buttonContainerElement = document.querySelector('.button-container');

    if (window.scrollY > 0) {
        // Muda a posição do objeto com base na rolagem
        buttonContainerElement.style.position = "fixed";
        buttonContainerElement.style.backgroundColor = "rgba(163, 215, 122, 0.5)";
    } else {
        buttonContainerElement.style.position = "relative";
        buttonContainerElement.style.backgroundColor = "rgba(163, 215, 122, 1)";
    }
})