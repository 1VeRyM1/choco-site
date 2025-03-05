document.addEventListener("DOMContentLoaded", () => {
    const creepingLine = document.querySelector(".creeping-line__text");
    let a = 0;

    function moveText() {
        a -= 2;
        creepingLine.style.transform = `translateX(${a}px)`;
        if (a < -creepingLine.scrollWidth) {
            a = creepingLine.parentElement.clientWidth;
        }
        requestAnimationFrame(moveText);
    }

    moveText();
});