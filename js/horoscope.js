document.addEventListener("DOMContentLoaded", ()=> {

    const horoscopeWrapper = document.querySelector(".horoscope-block"),
          horoscopeImg = document.querySelector(".horoscope-block__picture"),
          horoscopeStorage = window.localStorage;

    const chocolateHoroscope = [
        { name: "Шоколадный Овен", src: "img/horoscope/Aries1.jpg", source: "img/horoscope/Aries1.webp" },
        { name: "Шоколадный Телец", src: "img/horoscope/Taurus2.jpg", source: "img/horoscope/Taurus2.webp" },
        { name: "Шоколадные Близнецы", src: "img/horoscope/Gemini3.jpg", source: "img/horoscope/Gemini3.webp" },
        { name: "Шоколадный Рак", src: "img/horoscope/Cancer4.jpg", source: "img/horoscope/Cancer4.webp" },
        { name: "Шоколадный Лев", src: "img/horoscope/Leo5.jpg", source: "img/horoscope/Leo5.webp" },
        { name: "Шоколадная Дева", src: "img/horoscope/Virgo6.jpg", source: "img/horoscope/Virgo6.webp" },
        { name: "Шоколадные Весы", src: "img/horoscope/Libra7.jpg", source: "img/horoscope/Libra7.webp" },
        { name: "Шоколадный Скорпион", src: "img/horoscope/Scorpio8.jpg", source: "img/horoscope/Scorpio8.webp" },
        { name: "Шоколадный Стрелец", src: "img/horoscope/Sagittarius9.jpg", source: "img/horoscope/Sagittarius9.webp" },
        { name: "Шоколадный Козерог", src: "img/horoscope/Capricorn10.jpg", source: "img/horoscope/Capricorn10.webp" },
        { name: "Шоколадный Водолей", src: "img/horoscope/Aquarius11.jpg", source: "img/horoscope/Aquarius11.webp" },
        { name: "Шоколадные Рыбы", src: "img/horoscope/Pisces12.jpg", source: "img/horoscope/Pisces12.webp" }
    ];

    function buidActiveCard(item, attribute) {
        item.classList.add("active-horoscope-item");
        item.querySelector(".horoscope-block__ico")?.classList.add("active-horoscope-ico");
        horoscopeImg.innerHTML = `<source srcset=${chocolateHoroscope[attribute].source} type="image/webp">
                                    <img src=${chocolateHoroscope[attribute].src} alt=${chocolateHoroscope[attribute].name} class="horoscope-block__img">`
    }

    if (horoscopeStorage.getItem("horoscope") === null) {
        horoscopeStorage.setItem("horoscope", "1")
    }

    buidActiveCard(document.querySelector(`[data-horo="${horoscopeStorage.getItem("horoscope")}"]`), horoscopeStorage.getItem("horoscope")-1)

    function horoscopeEvent(e) {
        let target = e.target;

        if (target && target.closest(".horoscope-block__item")) {
            const item = target.closest(".horoscope-block__item");
            const attributeHoroscope = item.getAttribute("data-horo");

            document.querySelector(".active-horoscope-item")?.classList.remove("active-horoscope-item");
            document.querySelector(".active-horoscope-ico")?.classList.remove("active-horoscope-ico");

            horoscopeStorage.setItem("horoscope", attributeHoroscope)
            buidActiveCard(item, attributeHoroscope-1);
        }
    }
 
    horoscopeWrapper.addEventListener("mouseover", horoscopeEvent);
    horoscopeWrapper.addEventListener("touch", touchstart, { passive: true });
});