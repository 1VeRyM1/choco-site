document.addEventListener("DOMContentLoaded", ()=> {
    const factsArray = [
        `<picture>
            <source srcset="img/facts/fact1.webp" type="image/webp">
            <img src="img/facts/fact1.jpg" class="fact-block__img" alt="Факт 1">
        </picture>
        <div class="fact-block__text">
            <h3 class="fact-block__title">Шоколад начинался как горький напиток</h3>
            <p class="fact-block__descr">Древние майя и ацтеки употребляли шоколад в виде напитка, который совсем не был похож на современные сладкие плитки. Они растирали какао-бобы в пасту, смешивали её с водой, добавляли перец чили, ваниль и другие специи. Этот напиток был горьким, но ценился за свои бодрящие свойства. Ацтеки даже называли его «xocoatl» (что означает «горькая вода»), а сам какао-боб считался даром богов.</p>
        </div>`,
    
        `<picture>
            <source srcset="img/facts/fact2.webp" type="image/webp">
            <img src="img/facts/fact2.jpg" class="fact-block__img" alt="Факт 2">
        </picture>
        <div class="fact-block__text">
            <h3 class="fact-block__title">Шоколад использовался как деньги</h3>
            <p class="fact-block__descr">Какао-бобы были настолько ценными, что у ацтеков они служили валютой. Например, за 100 какао-бобов можно было купить индейку, а за 10 – кролика. Даже подделка таких «денег» существовала – некоторые люди обдирали кожуру бобов и набивали их глиной, чтобы обмануть покупателей.</p>
        </div>`,

        `<picture>
            <source srcset="img/facts/fact3.webp" type="image/webp">
            <img src="img/facts/fact3.jpg" class="fact-block__img" alt="Факт 3">
        </picture>
        <div class="fact-block__text">
            <h3 class="fact-block__title">Белый шоколад — не совсем шоколад</h3>
            <p class="fact-block__descr">Настоящий шоколад содержит какао-порошок, а вот белый шоколад делается только из какао-масла, молока и сахара, без какао-порошка. Именно поэтому он имеет более сливочный вкус и светлый цвет. Хотя некоторые гурманы не считают его настоящим шоколадом, он всё равно остаётся любимым лакомством для многих.</p>
        </div>`,

        `<picture>
            <source srcset="img/facts/fact4.webp" type="image/webp">
            <img src="img/facts/fact4.jpg" class="fact-block__img" alt="Факт 4">
        </picture>
        <div class="fact-block__text">
            <h3 class="fact-block__title">Горький шоколад полезен для здоровья</h3>
            <p class="fact-block__descr">Чёрный шоколад содержит большое количество антиоксидантов, таких как флавоноиды, которые помогают снижать уровень холестерина, поддерживают здоровье сердца и даже улучшают память. Он также способствует выработке серотонина – гормона счастья, который помогает бороться со стрессом и депрессией. Однако важно помнить, что полезен именно тёмный шоколад с высоким содержанием какао (от 70% и выше), а не сладкие молочные плитки.</p>
        </div>`,

        `<picture>
            <source srcset="img/facts/fact5.webp" type="image/webp">
            <img src="img/facts/fact5.jpg" class="fact-block__img" alt="Факт 5">
        </picture>
        <div class="fact-block__text">
            <h3 class="fact-block__title">Почему шоколад приятно тает во рту</h3>
            <p class="fact-block__descr">Температура плавления какао-масла — примерно 34–36°C, что очень близко к температуре человеческого тела. Именно поэтому шоколад приятно тает во рту, создавая гладкую, нежную текстуру. Это свойство делает его таким популярным в кондитерском искусстве.</p>
        </div>`,

        `<picture>
            <source srcset="img/facts/fact6.webp" type="image/webp">
            <img src="img/facts/fact6.jpg" class="fact-block__img" alt="Факт 6">
        </picture>
        <div class="fact-block__text">
            <h3 class="fact-block__title">В мире существуют элитные шоколадки с золотом</h3>
            <p class="fact-block__descr">Некоторые производители элитного шоколада добавляют в свои плитки съедобное 24-каратное золото. Например, в США можно купить шоколад "Le Chocolate Box", украшенный золотыми элементами и бриллиантами. Стоимость таких сладостей может достигать тысяч долларов.</p>
        </div>`,

        `<picture>
            <source srcset="img/facts/fact7.webp" type="image/webp">
            <img src="img/facts/fact7.jpg" class="fact-block__img" alt="Факт 7">
        </picture>
        <div class="fact-block__text">
            <h3 class="fact-block__title">Шоколад использовался в военных целях</h3>
            <p class="fact-block__descr">Во время Второй мировой войны американские солдаты получали специальные шоколадные батончики «D-ration», которые должны были давать энергию и быть достаточно невкусными, чтобы солдаты не съедали их просто так. Позже, в армии США появился «Tropical Bar» – шоколад, который не таял при высокой температуре, его использовали во время войны во Вьетнаме.</p>
        </div>`,

        `<picture>
            <source srcset="img/facts/fact8.webp" type="image/webp">
            <img src="img/facts/fact8.jpg" class="fact-block__img" alt="Факт 8">
        </picture>
        <div class="fact-block__text">
            <h3 class="fact-block__title">Самая большая шоколадная плитка в мире</h3>
            <p class="fact-block__descr">Рекорд по созданию самой большой шоколадки принадлежит компании Thornton’s (Великобритания), которая в 2011 году изготовила плитку весом 5 792 кг. Это примерно столько же, сколько весит взрослый слон!</p>
        </div>`,

        `<picture>
            <source srcset="img/facts/fact9.webp" type="image/webp">
            <img src="img/facts/fact9.jpg" class="fact-block__img" alt="Факт 9">
        </picture>
        <div class="fact-block__text">
            <h3 class="fact-block__title">Швейцарцы – самые большие любители шоколада</h3>
            <p class="fact-block__descr">По статистике, в среднем каждый житель Швейцарии съедает около 8–10 кг шоколада в год. Это больше, чем в любой другой стране мира. Швейцария также является родиной многих известных шоколадных брендов, таких как Toblerone, Lindt и Nestlé.</p>
        </div>`
    ];

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