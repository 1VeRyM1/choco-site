const arrayQuestions = [
    { text: "Как ты начинаешь утро?", options: ["С кофе", "С пробежки", "Лежу в кровати", "Сладкий завтрак"]},
    { text: "Какая музыка тебе нравится?", options: ["Джаз", "Рок", "Поп", "Lo-Fi"]},
    { text: "Какой десерт выберешь?", options: ["Тёмный шоколад", "Фрукты", "Молочный шоколад", "Белый шоколад"]},
    { text: "Какой у тебя характер?", options: ["Серьёзный", "Активный", "Дружелюбный", "Мечтательный"]},
    { text: "Как ты отдыхаешь?", options: ["Читаю", "Занимаюсь спортом", "Смотрю сериалы", "Сплю"]},
    { text: "Какое у тебя любимое время года?", options: ["Осень", "Зима", "Весна", "Лето"]},
    { text: "Как ты ведешь себя в компании?", options: ["Лидер", "Активист", "Спокойный", "Душа компании"]},
    { text: "Какой цвет тебе ближе?", options: ["Тёмно-коричневый", "Красный", "Бежевый", "Белый"]}
];

document.addEventListener("DOMContentLoaded", ()=> {
    const form = document.querySelector(".test-block__form"),
          formTitle = document.querySelector(".test-block__title"),
          formWrapper = form.querySelector(".test-block__options"),
          formButton = form.querySelector(".test-block__button"),
          formCount = form.querySelector(".test-block__count");

    const result = {
        dark: "темный",
        caramel: "карамельный",
        milk: "молочный",
        white: "белый"
    }

    const scores = {
        dark: 0,
        caramel: 0,
        milk: 0,
        white: 0
    }

    const priority = ["dark", "caramel", "milk", "white"];

    let countQuestion = 1;

    function buildQuestion(cou) {
        formTitle.textContent = `${arrayQuestions[cou-1].text}`;
        formWrapper.innerHTML = `
            <input type="radio" name="test" id="answer-1" class="test-block__input" value="dark" checked>
            <label for="answer-1" class="test-block__item">${arrayQuestions[cou-1].options[0]}</label>
            <input type="radio" name="test" id="answer-2" class="test-block__input" value="caramel">
            <label for="answer-2" class="test-block__item">${arrayQuestions[cou-1].options[1]}</label>
            <input type="radio" name="test" id="answer-3" class="test-block__input" value="milk">
            <label for="answer-3" class="test-block__item">${arrayQuestions[cou-1].options[2]}</label>
            <input type="radio" name="test" id="answer-4" class="test-block__input" value="white">
            <label for="answer-4" class="test-block__item">${arrayQuestions[cou-1].options[3]}</label>`;

        formCount.innerHTML = `${countQuestion}/${arrayQuestions.length}`;
    }

    formButton.addEventListener("click", (event)=> {
        event.preventDefault();
        const formData = new FormData(form);
        const answer = formData.get('test');
        scores[answer]++;
        countQuestion++;
        if (countQuestion <= arrayQuestions.length) {
            buildQuestion(countQuestion);
        } else {
            const maxChocolate = Object.entries(scores).reduce((max, curr) => 
                curr[1] > max[1] ? curr : max
            )[0];
            const bestMatch = priority.find(key => key === maxChocolate);
            formTitle.textContent = `Ты ${result[bestMatch]} шоколад!`;
            formTitle.style.margin = "0px";
            formTitle.style.textAlign = "center";
            formWrapper.style.display = "none";
            formButton.style.display = "none";
            formCount.style.display = "none";
        }
        if (countQuestion == arrayQuestions.length) {
            formButton.textContent = "КТО Я?"
        }
    })
    
    buildQuestion(countQuestion);
});