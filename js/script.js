document.addEventListener("DOMContentLoaded", () =>{
    const move = document.querySelector(".carrousel__move");
    const btnNext = document.querySelector(".carrousel__btn--next");
    const btnBack = document.querySelector(".carrousel__btn--back");
    const elements = document.querySelectorAll(".fade");

    let index = 0;
    const total = 3;

    function updateCarrousel() {
    const width = document.querySelector(".carrousel__window").offsetWidth;
    move.style.transform = `translateX(-${index * width}px)`;
}

    btnNext.addEventListener("click", () => {
        index++;
        if (index >= total) index = 0;
        updateCarrousel();
    });

    btnBack.addEventListener("click", () => {
        index--;
        if (index < 0) index = total - 1;
        updateCarrousel();
    });
    window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
})})