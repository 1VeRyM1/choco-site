document.addEventListener("DOMContentLoaded", ()=> {
    const memWrapper = document.querySelector(".mem-block__wrapper"),
          memBig = document.querySelector(".mem-big"),
          memBigWrapper = document.querySelector(".mem-big__wrapper");

    memWrapper.addEventListener("click", (e)=> {
        let target = e.target;

        if (target && target.tagName == "IMG") {
            let imgSrc = target.getAttribute("src");
            memBigWrapper.innerHTML = `<img src=${imgSrc} alt="Мем" class="mem-big__img">`;
            memBig.style.display = "flex";
        }
    })

    memBig.addEventListener("click", (e)=> {
        let target = e.target;
        if (target && !target.classList.contains("mem-big__img")){
            memBig.style.display = "none";
        }
    })
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            memBig.style.display = "none";
        }
    });
});