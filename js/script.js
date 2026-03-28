document.addEventListener("DOMContentLoaded", () =>{
    const move = document.querySelector(".carrousel-move");
    const btnNext = document.querySelector(".btn-next");
    const btnBack = document.querySelector(".btn-back");
    const options = document.querySelectorAll(".option")

    let index = 0;
    const total = 3;

    function updateCarrousel() {
        move.style.transform = `translateX(-${index * 220}px)`;
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
});