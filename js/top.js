const premiumArray = [
    `<picture>
        <source srcset="./img/top/top1.webp" type="image/webp">
        <img src="./img/top/top1.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Amedei Porcelana</h3>
        <p class="top-card__descr">Один из самых редких и дорогих шоколадов в мире, из какао-бобов Porcelana.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top2.webp" type="image/webp">
        <img src="./img/top/top2.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Valrhona Manjari 64%</h3>
        <p class="top-card__descr">Французский шоколад с нотками красных ягод.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top3.webp" type="image/webp">
        <img src="./img/top/top3.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Amedei Toscano Black 70%</h3>
        <p class="top-card__descr">Тёмный шоколад с бархатной текстурой.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top4.webp" type="image/webp">
        <img src="./img/top/top4.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Michel Cluizel Noir de Plantation 72%</h3>
        <p class="top-card__descr">Тёмный шоколад с изысканным ароматом.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top5.webp" type="image/webp">
        <img src="./img/top/top5.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Domori Criollo 80%</h3>
        <p class="top-card__descr">Итальянский шоколад из редких бобов Criollo, мягкий и насыщенный.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top6.webp" type="image/webp">
        <img src="./img/top/top6.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Mast Brothers Dark Chocolate</h3>
        <p class="top-card__descr">Нью-йоркский шоколад ручной работы.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top7.webp" type="image/webp">
        <img src="./img/top/top7.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">To’ak Chocolate 75%</h3>
        <p class="top-card__descr">Эквадорский элитный шоколад, выдержанный в дубовых бочках.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top8.webp" type="image/webp">
        <img src="./img/top/top8.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Pierre Marcolini Grand Cru</h3>
        <p class="top-card__descr">Бельгийский шоколад с многослойным вкусом.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top9.webp" type="image/webp">
        <img src="./img/top/top9.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Chocolat Bonnat 75%</h3>
        <p class="top-card__descr">Французский шоколад с кремовой текстурой.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top10.webp" type="image/webp">
        <img src="./img/top/top10.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Pralus Le 100% Criollo</h3>
        <p class="top-card__descr">100% какао-бобы без сахара.</p>
    </div>`
];
const budgetArray = [
    `<picture>
        <source srcset="./img/top/top10.webp" type="image/webp">
        <img src="./img/top/top10.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Alpen Gold</h3>
        <p class="top-card__descr">Доступный сладкий молочный шоколад.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top9.webp" type="image/webp">
        <img src="./img/top/top9.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Россия – Щедрая душа!</h3>
        <p class="top-card__descr">Классический российский шоколад.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top8.webp" type="image/webp">
        <img src="./img/top/top8.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Milka</h3>
        <p class="top-card__descr">Альпийский молочный шоколад.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top7.webp" type="image/webp">
        <img src="./img/top/top7.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Nestlé Classic</h3>
        <p class="top-card__descr">Лёгкий молочный шоколад.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top6.webp" type="image/webp">
        <img src="./img/top/top6.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Babaevsky 75%</h3>
        <p class="top-card__descr">Недорогой и насыщенный тёмный шоколад.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top5.webp" type="image/webp">
        <img src="./img/top/top5.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Красный Октябрь</h3>
        <p class="top-card__descr">Классика советского шоколада.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top4.webp" type="image/webp">
        <img src="./img/top/top4.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Korona (Украина)</h3>
        <p class="top-card__descr">Популярный украинский шоколад.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top3.webp" type="image/webp">
        <img src="./img/top/top3.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Hershey’s Milk Chocolate</h3>
        <p class="top-card__descr">Известный американский шоколад, но со специфическим вкусом.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top2.webp" type="image/webp">
        <img src="./img/top/top2.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Callebaut (для выпечки)</h3>
        <p class="top-card__descr">Отличный бюджетный шоколад для десертов.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top1.webp" type="image/webp">
        <img src="./img/top/top1.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Lindt Alpine Milk (мини-версии)</h3>
        <p class="top-card__descr">Доступная версия Lindt, но с мягким вкусом.</p>
    </div>`
];
const unusualArray = [
    `<picture>
        <source srcset="./img/top/top6.webp" type="image/webp">
        <img src="./img/top/top6.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Lindt Chili Chocolate</h3>
        <p class="top-card__descr">Тёмный шоколад с чили.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top7.webp" type="image/webp">
        <img src="./img/top/top7.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Ritter Sport Strawberry Yogurt</h3>
        <p class="top-card__descr">Клубничный йогурт в шоколаде.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top8.webp" type="image/webp">
        <img src="./img/top/top8.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Tony’s Chocolonely Dark Milk Pretzel Toffee</h3>
        <p class="top-card__descr">Шоколад с кренделем и карамелью.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top9.webp" type="image/webp">
        <img src="./img/top/top9.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Amano Raspberry Rose</h3>
        <p class="top-card__descr">Шоколад с лепестками роз и малиной.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top10.webp" type="image/webp">
        <img src="./img/top/top10.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Bacon Chocolate by Vosges</h3>
        <p class="top-card__descr">Шоколад с беконом!</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top1.webp" type="image/webp">
        <img src="./img/top/top1.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Matcha White Chocolate</h3>
        <p class="top-card__descr">Белый шоколад с зелёным чаем.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top2.webp" type="image/webp">
        <img src="./img/top/top2.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Ghirardelli Sea Salt Soiree</h3>
        <p class="top-card__descr">Тёмный шоколад с морской солью.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top3.webp" type="image/webp">
        <img src="./img/top/top3.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Hershey’s Gold Caramelized Creme</h3>
        <p class="top-card__descr">Карамелизированный шоколад.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top4.webp" type="image/webp">
        <img src="./img/top/top4.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Chuao Firecracker</h3>
        <p class="top-card__descr">Шоколад со взрывной карамелью.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top5.webp" type="image/webp">
        <img src="./img/top/top5.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Mast Olive Oil Chocolate</h3>
        <p class="top-card__descr">Шоколад с оливковым маслом.</p>
    </div>`
];
const legendaryArray = [
    `<picture>
        <source srcset="./img/top/top3.webp" type="image/webp">
        <img src="./img/top/top3.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Hershey’s Milk Chocolate</h3>
        <p class="top-card__descr">Легенда американского шоколада, существующая с 1900 года.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top2.webp" type="image/webp">
        <img src="./img/top/top2.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Milka</h3>
        <p class="top-card__descr">Немецкий молочный шоколад с альпийским молоком, популярный с 1901 года.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top1.webp" type="image/webp">
        <img src="./img/top/top1.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Cadbury Dairy Milk</h3>
        <p class="top-card__descr">Британский фаворит с 1905 года, один из самых продаваемых шоколадов в мире.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top6.webp" type="image/webp">
        <img src="./img/top/top6.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Toblerone</h3>
        <p class="top-card__descr">Уникальная треугольная форма, появился в 1908 году в Швейцарии.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top5.webp" type="image/webp">
        <img src="./img/top/top5.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Snickers</h3>
        <p class="top-card__descr">Выпущен в 1930 году, стал самым популярным батончиком в мире.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top4.webp" type="image/webp">
        <img src="./img/top/top4.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Mars</h3>
        <p class="top-card__descr">Батончик с карамелью и нугой, созданный в 1932 году.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top9.webp" type="image/webp">
        <img src="./img/top/top9.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">KitKat</h3>
        <p class="top-card__descr">Легендарная шоколадка с вафлями, впервые выпущенная в 1935 году.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top8.webp" type="image/webp">
        <img src="./img/top/top8.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Ritter Sport</h3>
        <p class="top-card__descr">Немецкий квадратный шоколад, придуманный в 1932 году.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top7.webp" type="image/webp">
        <img src="./img/top/top7.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Lindt Excellence 70%</h3>
        <p class="top-card__descr">Классика премиального тёмного шоколада.</p>
    </div>`,

    `<picture>
        <source srcset="./img/top/top10.webp" type="image/webp">
        <img src="./img/top/top10.webp" alt="Шоколад" class="top-card__img">
    </picture>
    <div class="top-card__text">
        <h3 class="top-card__title">Kinder Chocolate</h3>
        <p class="top-card__descr">Молочный шоколад с нежной начинкой, любимец детей.</p>
    </div>`
];



document.addEventListener("DOMContentLoaded", ()=> {

    const cardsWrapper = document.querySelector(".top-block__wrapper"),
          localStore = window.localStorage,
          tabsBlock = document.querySelector(".top-block__tabs"),
          tabItems = document.querySelectorAll(".top-block__tabs-item");
    
    // Функция для верстки карточек
    function buildCards(arr) {
        cardsWrapper.innerHTML = arr.map((item, index)=> {
            return `<article class="top-card grid-${index+1}">${item}</article>`;
        }).join("")
    }

    // Функция для выбора массива для содержимого карточек
    function mapSelect(val) {
        const arrMap = {
            premium: premiumArray,
            budget: budgetArray,
            unusual: unusualArray,
            legendary: legendaryArray
        }
        buildCards(arrMap[val]);
    }

    // Функция очистки активного класса табов
    function tabClear() {
        tabItems.forEach(i=> {
            i.classList.remove("active-tab");
        })
    }

    if (localStore.getItem("tab") == null) {
        localStore.setItem("tab", "premium")
    }
    tabItems.forEach(item => {
        const input = item.querySelector(".top-block__tabs-input");
        if (input && input.value === localStore.getItem("tab")) {
            input.parentNode.classList.add("active-tab");
        }
    });
    mapSelect(localStore.getItem("tab"));

    // Обработка выбора табов
    tabsBlock.addEventListener("click", (e)=> {
        let target = e.target;
        if (target && target.classList.contains("top-block__tabs-item")) {
            tabClear();
            target.classList.add("active-tab");
            const inputValue = target.querySelector(".top-block__tabs-input").value;
            localStore.setItem("tab", inputValue);
            mapSelect(inputValue);
        }
    })
});