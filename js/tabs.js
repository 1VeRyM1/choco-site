document.addEventListener("DOMContentLoaded", ()=> {
    const factBlocks = document.querySelectorAll(".fact-block");

    let con = 3;
    setInterval(()=> {
        factBlocks.forEach((item)=> {
            item.classList.add("change");
            setTimeout(() => {
                item.innerHTML = factsArray[con];
                item.classList.remove("change");
                con += 1;
                if (con === 9) {
                    con = 0;
                }
            }, 200);
        })
    },  7000);
    
});