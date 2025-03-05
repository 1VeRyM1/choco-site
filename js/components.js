function loadComponent(selector, file, cashedKey) {
    const cashedData = localStorage.getItem(cashedKey);

    if (cashedData) {
        document.querySelector(selector).innerHTML = cashedData;
    } else {
        fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            localStorage.setItem(cashedKey, data);
        })
        .catch(error => console.error(`Ошибка загрузки ${file}:`, error));
    }

}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent(".header-import", "components/header.html", "cashedHeader");
    loadComponent(".footer-import", "components/footer.html", "cashedFooter");

    const menuBurger = document.querySelector(".header__navigation"),
            btnBurger = document.querySelector(".header__button");

    btnBurger.addEventListener("click", ()=> {
        menuBurger.classList.toggle("open-burger");
        btnBurger.classList.toggle("open-burger-btn");
    })
});