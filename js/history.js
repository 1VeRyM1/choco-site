document.addEventListener("DOMContentLoaded", ()=> {
    const historyArray = [
        `<h3 class="history-block__title">1. Шоколад у майя и ацтеков (1500 до н. э. – 1500 н. э.)</h3>
        <p class="history-block__subtitle"><strong>Происхождение:</strong></p>
        <p class="history-block__text">Первое употребление какао связано с древними цивилизациями ольмеков, которые жили в Центральной Америке около 1500 г. до н. э. Позже майя и ацтеки усовершенствовали искусство приготовления шоколада.</p>
        <p class="history-block__subtitle"><strong>Шоколад в культуре майя:</strong></p>    
        <p class="history-block__text">Майя считали какао священным даром богов. Они употребляли его в виде напитка – горького, пенистого, с добавлением специй (чили, ваниль, мед). Этот напиток использовался в религиозных обрядах, свадьбах и даже в качестве лекарства.</p>
        <p class="history-block__subtitle"><strong>Шоколад у ацтеков:</strong></p>
        <p class="history-block__text">Ацтеки называли какао "хоколатль" ("горькая вода") и верили, что бог Кетцалькоатль подарил его людям. Они пили шоколад охлажденным и острым, добавляя перец чили и иногда кукурузу. Какао-бобы использовались как валюта – 100 бобов стоили индейку, 10 – кролика.</p>`,
    
        `<h3 class="history-block__title">2. Шоколад в Европе (1500–1800)</h3>
        <p class="history-block__subtitle"><strong>Первая встреча испанцев с шоколадом:</strong></p>
        <p class="history-block__text">В 1519 году испанский конкистадор Эрнан Кортес прибыл в земли ацтеков и увидел, как император Монтесума II пил этот странный горький напиток. Испанцы быстро поняли ценность какао и привезли его в Европу.</p>
        <p class="history-block__subtitle"><strong>Шоколад становится сладким:</strong></p>    
        <p class="history-block__text">Испанцы первыми догадались добавить в напиток сахар и корицу, сделав его более приятным. В течение 100 лет шоколад оставался роскошью, доступной только аристократии и королевским дворам.</p>
        <p class="history-block__subtitle"><strong>Популярность шоколада:</strong></p>
        <p class="history-block__text">В 1600-х годах шоколад распространился по Европе. Особенно его полюбили во Франции и Италии. В 1657 году в Лондоне открылось первое шоколадное кафе, где этот напиток считался элитным.</p>`,
    
        `<h3 class="history-block__title">3. Промышленная революция и рождение плиточного шоколада (1800–1900)</h3>
        <p class="history-block__text">До 19 века шоколад пили в виде напитка. Однако в 1828 году голландский химик Конрад ван Хоутен изобрел пресс для какао, который позволял отделять масло от какао-порошка. Это сделало шоколад более доступным.</p>
        <p class="history-block__subtitle"><strong>Появление твёрдого шоколада:</strong></p>
        <p class="history-block__text"В 1847 году британская компания J.S. Fry & Sons создала первую шоколадную плитку, смешав какао-масло с сахаром и какао-порошком.</p>
        <p class="history-block__subtitle"><strong>Появление молочного шоколада:</strong></p>    
        <p class="history-block__text">В 1875 году швейцарец Даниэль Петер добавил сгущенное молоко, изобретенное его другом Анри Нестле, и сделал молочный шоколад, который стал хитом.</p>
        <p class="history-block__subtitle"><strong>Роль Рудольфа Линдта:</strong></p>
        <p class="history-block__text">В 1879 году Рудольф Линдт придумал метод конширования, который делал шоколад гладким и тающим во рту.</p>`,
        
        `<h3 class="history-block__title">4. 20 век – расцвет шоколадных брендов</h3>
        <p class="history-block__subtitle"><strong>В 20 веке шоколад стал массовым продуктом. Появились такие бренды, как:</strong></p>
        <li class="history-block__list-item">Hershey’s (1894, США) – сделал шоколад доступным для всех.</li>
        <li class="history-block__list-item">Cadbury (1824, Великобритания) – разработал молочный шоколад Dairy Milk.</li>
        <li class="history-block__list-item">Nestlé (1866, Швейцария) – создал KitKat, Milkybar и другие.</li>
        <li class="history-block__list-item">Mars (1911, США) – выпустил Snickers, Twix и Bounty.</li>
        <p class="history-block__text">Во время Второй мировой войны шоколадные батончики входили в рацион солдат, а компании разрабатывали рецептуры, устойчивые к жаре.</p>`,
    
        `<h3 class="history-block__title">5. Современный шоколад (2000-е – сегодня)</h3>
        <p class="history-block__subtitle"><strong>Сегодня шоколад – это огромная индустрия, включающая:</strong></p>
        <li class="history-block__list-item">Премиальный шоколад (Lindt, Godiva, Valrhona).</li>
        <li class="history-block__list-item">Шоколадные батончики (Snickers, Twix, Bounty).</li>
        <li class="history-block__list-item">Органический и этичный шоколад (Bean-to-bar, Fair Trade).</li>
        <p class="history-block__text">Сейчас шоколад доступен во всевозможных формах и вкусах – от классического до с морской солью, перцем и даже золотом.</p>
        <p class="history-block__subtitle"><strong>Заключение:</strong></p>
        <p class="history-block__text">От священного напитка майя до современной шоколадной индустрии – шоколад прошел огромный путь. Он остается символом радости, удовольствия и праздника, а его история продолжается!</p>`
    ];
    
    function scrollHistoryBlock(arr, wrapper, step) {
        if ((indexHistoryArray + step >= 0) && (indexHistoryArray + step < arr.length)) {
            indexHistoryArray += step;
            wrapper.classList.add("change");
            setTimeout(() => {
                wrapper.innerHTML = arr[indexHistoryArray];
                wrapper.classList.remove("change");
            }, 300);
        }
    }
    
    const historyBlock = document.querySelector(".history-block"),
          historyWrapper = document.querySelector(".history-block__wrapper");
    
    let indexHistoryArray = 0;
    let throttle = false;
    
    historyBlock.addEventListener("wheel", (e)=> {
        e.preventDefault();
        if (!throttle) {
            throttle = true;
            scrollHistoryBlock(historyArray, historyWrapper, e.deltaY > 0 ? +1 : -1);
            setTimeout(() => throttle = false, 300);
        }
    });
});